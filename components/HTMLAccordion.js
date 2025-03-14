/**
 * M�todo construtor do HTMLAccordion. Respons�vel por criar o componente Accordion.
 * @param sys - Indica o c�digo do sistema.
 * @param formID - Indica o c�digo do formul�rio.
 * @param posX - Posi��o do componente na tela em rela��o ao eixo X.
 * @param posY - Posi��o do componente na tela em rela��o ao eixo Y.
 * @param width - Largura do componente.
 * @param heigth - Altura do componente.
 * @param description - Descricao do componente.
 * @param value - Valor do componente.
 **/
function HTMLAccordion(sys, formID, code, posX, posY, width, height, description, value, showValue) {
  this.create(sys, formID, code, posX, posY, width, height, description, value);
  this.sections = [];
  this.formsInfo = null;
  this.activeSection = null;
}

/**
 * Heran�a do objeto.
 **/
HTMLAccordion.inherits(HTMLLabeledComponent);

/**
 * Setando propriedades do componente.
 **/
HTMLAccordion.prototype.name = 'HTMLAccordion';
HTMLAccordion.prototype.tabable = true;

/**
 * Respons�vel por desenhar o HTML do componente Accordion.
 * @param doc - documento onde o componente ser� inserido.
 **/
HTMLAccordion.prototype.designComponent = function(doc) {
  // Obter propriedades do componente e dar parse nelas.
  this.limitContent = ((this.LimitarConteudo && this.LimitarConteudo.toLowerCase() === "true") || this.LimitarConteudo === true);
  this.autoExpand = ((this.ExpandirAuto && this.ExpandirAuto.toLowerCase() === "true") || this.ExpandirAuto === true);

  // Definir a classe do accordion na div principal do componente.
  this.div.className += " card d-flex flex-column accordion" + (this.limitContent === true ? " overflow-auto" : ""); // Bootstrap
  this.divClass = this.div.className;

  // Vari�vel utilizada nos eventos.
  var object = this;

  // Evento que ocorre ao abrir uma se��o no Accordion.
  $(this.div).on('show.bs.collapse', function(e) {
    object.expandAction(e.target);
  });

  // Evento que ocorre ao fechar uma se��o no Accordion.
  $(this.div).on('hide.bs.collapse', function(e) {
    object.collapseAction(e.target);
  });
};

/*
 * Ocorre quando o formul�rio termina de carregar.
 */
HTMLAccordion.prototype.onFormLoadAction = function() {
  // Atualiza as se��es do Accordion.
  if(!this.loaded)
    this.updateSections();

  this.loaded = true;
};

/*
 * Ocorre quando algum componente que � depend�ncia desse muda de valor
 */
HTMLAccordion.prototype.refresh = function() {
  this.updateSections();
};

/**
 * Exibe o preloader do Accordion.
 **/
HTMLAccordion.prototype.showPreloader = function() {
  // Atualizar a classe da div.
  if (this.div) this.div.className = this.divClass + " align-items-center justify-content-center"; // Bootstrap

  // Criar o loader do accordion.
  this.preloader = bootstrapCreateSpinner(this.div, "text-primary", true)[0];

  try {
    // Tentar obter a cor de fundo computada da p�gina e definir no preloader.
    this.preloader.style.backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  } catch (e) { }
};

/**
 * Oculta o preloader do Accordion.
 **/
HTMLAccordion.prototype.hidePreloader = function() {
  // Remover o preloader.
  if (this.preloader) {
    this.div.removeChild(this.preloader);
    this.preloader = null;
  }

  if (this.div) this.div.className = this.divClass;
};

/**
 * Verificar a resposta do servidor.
 * @param response Resposta do servidor.
 **/
HTMLAccordion.prototype.checkServerResponse = function(response) {
  // Verificar se a opera��o falhou.
  if (response && response.success === "0") {
    // Exibir uma mensagem de erro.
    interactionError(safeGetLocaleMessage("ERROR.OPERATION_ERROR"), null, null, null, response.details ? response.details : null);
    return false;
  }

  return true;
};

/**
 * Met�do para atualizar as se��es do accordion.
 **/
HTMLAccordion.prototype.updateSections = function() {
  // Limpar o conte�do da div.
  if (this.div) this.div.innerHTML = "";

  // Mandar requisi��o para o servidor.
  var object = this;
  this.sendRequest(null,
    function(response) {
      // Verificar se possui resposta.
      if (response && response.length > 0) {
        // Dar parse no JSON da resposta.
        response = JSON.parse(response);

        // Verificar por erros no servidor.
        if (object.checkServerResponse(response)) {
          // Criar as se��es do Accordion.
          object.designSections(response);
        }
      }
    }, function() {
      object.designSections();
    }
  );
};

/**
 * Respons�vel por desenhar o HTML das se��es do Accordion.
 * @param serverData - Dados retornados pelo servidor.
 **/
HTMLAccordion.prototype.designSections = function(serverData) {
  this.sections = [];

  if (serverData && serverData.type) {
    if (serverData.type.toLowerCase() == "content" && serverData.content) {
      // Conte�do expl�cito do banco de dados.
      for (var i = 0; i < serverData.content.length; i++) {
        var sectionData = serverData.content[i];
        this.designSection(i, "Linha da Tabela", sectionData[0], sectionData[1]);
      }

      // N�o desenhar atrav�s do "ListaTitulo" pois j� foi obtido do banco de dados.
      return;
    } else if (serverData.type.toLowerCase() == "form" && serverData.content) {
      // Conte�do retornado cont�m as informa��es dos formul�rios.
      this.formsInfo = serverData.content;
    }
  }

  if (this.ListaTitulo && this.ListaTitulo.length && this.ListaTitulo.length > 0) {
    // Decodifica a lista em ISO-8859-1.
    var sectionsData = unescape(this.ListaTitulo).trim();
    if (sectionsData.indexOf("|") != -1) {
      // O Accordion tem mais de uma se��o.
      sectionsData = sectionsData.split("|");
      for (var i = 0; i < sectionsData.length; i++) {
        var sectionData = sectionsData[i].split("=");
        this.designSection(i, sectionData[0], sectionData[1]);
      }
    } else if (sectionsData.indexOf("=") != -1) {
      // O Accordion tem s� uma se��o.
      var sectionData = sectionsData.split("=");
      this.designSection(0, sectionData[0], sectionData[1]);
    }
  }

  // Verificar por "Expandir Automaticamente".
  if (this.autoExpand) {
    try {
      // Verificar se o Accordion possui se��es.
      if (this.sections && this.sections.length > 0) {
        // Expandir a primeira se��o.
        this.sections[0].button.click();
      }
    } catch (e) { }
  }
};

/**
 * Respons�vel por desenhar o HTML de uma se��o no Accordion.
 * @param i - �ndice da se��o (0, 1, 2, 3, ...).
 * @param type - Tipo da se��o (T�tulo, Formul�rio, URL).
 * @param title - T�tulo da se��o.
 * @param content - Conte�do da se��o.
 **/
HTMLAccordion.prototype.designSection = function(i, type, title, content) {
  var collapseId = "collapse" + this.code + "-" + i;
  var shownText = title;
  var lURI = "";

  // Criar a div base da se��o (Bootstrap Card)
  var sectionDiv = document.createElement("div");
  this.context.appendChild(sectionDiv);

  // Criar cabe�alho da se��o
  var sectionHeaderDiv = document.createElement("div");
  sectionHeaderDiv.className = "card-header"; // Bootstrap
  sectionHeaderDiv.id = "heading" + this.code + "-" + i;
  sectionDiv.appendChild(sectionHeaderDiv);

  var sectionTitleDiv = document.createElement("h2");
  sectionTitleDiv.className = "my-0 p-0 d-flex align-items-center"; // Bootstrap
  sectionHeaderDiv.appendChild(sectionTitleDiv);

  var sectionTitleButton = document.createElement("button");
  sectionTitleButton.className = "btn btn-link w-100 p-0 text-left"; // Bootstrap
  sectionTitleButton.type = "button";
  sectionTitleButton.setAttribute("data-toggle", "collapse"); // Bootstrap
  sectionTitleButton.setAttribute("data-target", "#" + collapseId); // Bootstrap
  sectionTitleButton.setAttribute("aria-expanded", "false"); // Acessibilidade
  sectionTitleButton.setAttribute("aria-controls", collapseId); // Acessibilidade
  sectionTitleDiv.appendChild(sectionTitleButton);

  if (this.corFonteElemento && this.corFonteElemento.length && this.corFonteElemento.length > 0) {
    sectionTitleButton.style.color = this.corFonteElemento;
  }

  // Se o tipo for formul�rio, obter o nome pela propriedade "formsInfo" que foi obtida do servidor.
  var formattedType = translateAcentos(type.toLowerCase().trim());
  if (this.formsInfo && formattedType === "formulario" && this.formsInfo[title]) {
    shownText = this.formsInfo[title][0];
  // Se o tipo for URL, obter o nome atrav�s do Regex.
  } else if (formattedType === "url") {
    var jsonInfo = this.separateTitleParts(title);
    shownText = jsonInfo.title;
    lURI = jsonInfo.lURL;
  }

  // Definir o t�tulo da se��o.
  sectionTitleButton.innerHTML = shownText;

  // Criar corpo da se��o.
  var sectionCollapseDiv = document.createElement("div");
  sectionCollapseDiv.id = collapseId;
  sectionCollapseDiv.className = "collapse"; // Bootstrap
  sectionCollapseDiv.setAttribute("aria-labelledby", sectionHeaderDiv.id); // Acessibilidade
  sectionCollapseDiv.setAttribute("data-parent", "#" + this.id); // Bootstrap
  sectionDiv.appendChild(sectionCollapseDiv);

  var sectionBody = document.createElement("div");
  sectionBody.className = "card-body p-0"; // Bootstrap
  sectionBody.id = "section-body" + this.code + "-" + i;
  if (content) sectionBody.innerHTML = content;
  sectionCollapseDiv.appendChild(sectionBody);

  // Definir propriedades no DOM do div do collapse.
  // Essas propriedades ser�o usadas nos eventos atrav�s do (e.target).
  sectionCollapseDiv.bodyElement = sectionBody;
  sectionCollapseDiv.titleElement = sectionTitleButton;
  sectionCollapseDiv.sectionIndex = this.sections.length;

  // Adicionar a lista de se��es
  this.sections.push({
    type: formattedType,
    title: title,
    lURL: lURI,
    div: sectionDiv,
    shownText: shownText,
    button: sectionTitleButton
  });
};

/**
 * Separa a URL e o t�tulo de uma se��o do Accordion.
 * @param title T�tulo da se��o.
 **/
HTMLAccordion.prototype.separateTitleParts = function (title) {
  try {
    let regex = new RegExp(/\(([^)]+)\)/g);
    if (regex.test(title)) {
      let arr = title.match(regex);
      if (arr) {
        let lTitle = arr[0].replace("(", "").replace(")", "");
        let url = title.replace(arr[0], "");
        return {
          title: lTitle,
          lURL: url
        };
      }
    }
  } catch (e) { }

  return {
    title: title,
    lURL: title
  };
};

/**
 * Executa o evento onclick do componente.
 **/
HTMLAccordion.prototype.click = function() {
  if (this.div.onclick) this.div.onclick.call(this);
};

/**
 * Ocorre quando uma se��o � expandida no Accordion.
 * @param sectionDiv - Div da se��o.
 **/
HTMLAccordion.prototype.expandAction = function(sectionDiv) {
  var sectionData = this.sections[sectionDiv.sectionIndex];
  sectionData.div.className = "d-flex flex-column flex-fill"; // Bootstrap
  this.activeSection = sectionData;

  if (sectionData.type == "formulario") {
    /* INFORMA��ES DO FORMUL�RIO:
     *   formInfo[0]: Nome do formul�rio
     *   formInfo[1]: C�digo/ID do formul�rio
     *   formInfo[2]: Width do formul�rio
     *   formInfo[3]: Height do formul�rio */
    var formInfo = this.formsInfo[sectionData.title];

    // Verificar se a section ainda n�o tem o iframe definido.
    if (!sectionDiv.sectionFrame) {
      var iframe = document.createElement("iframe");
      iframe.className = "w-100 h-100 border-0 m-0"; // Bootstrap
      //iframe.style.minWidth = formInfo[2] + "px"; // Definir min-width para o width do form
      iframe.style.minHeight = formInfo[3] + "px"; // Definir min-height para o height do form
      iframe.style.outline = "0";

      sectionDiv.bodyElement.className = "card-body p-0 overflow-auto"; // Bootstrap
      sectionDiv.bodyElement.appendChild(iframe);
      sectionDiv.sectionFrame = iframe;
    }

    if (sectionDiv.sectionFrame.src == null || sectionDiv.sectionFrame.src.length == 0) {
      sectionDiv.sectionFrame.src = "form" + PAGES_EXTENSION + "?sys=" + this.sys + "&action=openform&formID=" + URLEncode(formInfo[1], 'GET') + "&align=0&mode=-1&goto=-1&filter=&scrolling=false";
    }
  } else if (sectionData.type == "url") {
    // Verificar se a section ainda n�o tem o iframe definido.
    if (!sectionDiv.sectionFrame) {
      var iframe = document.createElement("iframe");
      iframe.className = "w-100 h-100 border-0 m-0"; // Bootstrap
      iframe.style.outline = "0";

      sectionDiv.bodyElement.className = "card-body p-0 overflow-auto"; // Bootstrap
      sectionDiv.bodyElement.appendChild(iframe);
      sectionDiv.sectionFrame = iframe;
    }

    if (sectionDiv.sectionFrame.src == null || sectionDiv.sectionFrame.src.length == 0) {
      sectionDiv.sectionFrame.src = sectionData.lURL;
    }
  }

  // Verificar se o evento de "AoExpandir" foi definido.
  if (this.AoExpandir) {
    this.AoExpandir.call(this, sectionDiv.bodyElement.id, sectionData.shownText, sectionDiv.sectionIndex);
  }
};

/**
 * Ocorre quando uma se��o � colapsada no Accordion.
 * @param sectionDiv - Div da se��o.
 **/
HTMLAccordion.prototype.collapseAction = function(sectionDiv) {
  var sectionData = this.sections[sectionDiv.sectionIndex];
  sectionData.div.className = "";

  // Verificar se o evento de "AoContrair" foi definido.
  if (this.AoContrair && this.AoContrair.call(this, sectionDiv.bodyElement.id, sectionData.shownText, sectionDiv.sectionIndex) === false) {
    return false;
  }

  if (this.activeSection == sectionData) this.activeSection = null;
};

/**
 * Fun��o respons�vel por realizar as requisi��es para o servidor.
 * @param params Par�metros adicionais do pedido.
 * @param cbSuccess Callback de sucesso.
 * @param cbError Callback de erro.
 */
HTMLAccordion.prototype.sendRequest = function(params, cbSuccess, cbError) {
  var object = this;
  var params = "";

  // Exibi preloader.
  this.showPreloader();

  // Criar XHR para enviar a requisi��o.
  var xhr = new XMLHttpRequest();

  if (d.t && d.t.dependences) {
    var components = d.t.dependences[this.code];
    if (components && components.length > 0) {
      for (var code in components) {
        if (isNumeric(code)) {
          var component = eval("$mainform().d.c_" + components[code]);
          if (component) {
            params += ("&WFRInput" + component.getCode() + "=" + URLEncode(component.getValue(), "GET"));
          }
        }
      }
    }
  }

  // Definir tipo e URL da conex�o.
  xhr.open("POST", "componentData.do?action=componentData&sys=" + URLEncode(this.sys, 'GET') +
    "&formID=" + URLEncode(this.formID, 'GET') +
    "&comID=" + URLEncode(this.code, 'GET') + params, true);

  // Definir Content-Type do pedido.
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Associar evento de sucesso.
  xhr.onload = function(e) {
    // Esconder preloader.
    object.hidePreloader();

    if (xhr.readyState === 4 || xhr.status === 200) {
      // Chamar callback de sucesso.
      if (cbSuccess) cbSuccess(xhr.responseText);
    }
  };

  // Associar evento de erro.
  xhr.onerror = function(e) {
    // Esconder preloader.
    object.hidePreloader();

    // Chamar callback de erro.
    if (cbError) cbError(e);

    // Exibir mensagem de falha de conex�o.
    interactionError(safeGetLocaleMessage("ERROR.CONNECTION_FAIL"));
  };

  var data = null;

  // Verificar se possui par�metros adicionais.
  if (params) {
    data = "";
    var keys = Object.keys(params);
    for (var i = 0; i < keys.length; i++) {
      data += keys[i] + "=" + URLEncode(params[keys[i]]);
      if (i < keys.length) data += "&";
    }
  }

  // Mandar requisi��o para o servidor.
  xhr.send(data);
};
