var lookupCanBlur = true;

function HTMLLookup(sys, formID, code, posX, posY, width, height, description, value, showValue) {
  this.create(sys, formID, code, posX, posY, width, height, description, value);
  this.type = 1;
  this.openSubForm = false;
  this.style = 0;
  this.showValue = showValue;
  this.expand = true;
  this.report = false;
  this.initialType = 2;
  this.filterOnKeyPress = false;
  this.placeholder = "";
  this.lastTime = null;
  this.mobile = isMobile();
  this.isAboveOverlay = false;
}

HTMLLookup.inherits(HTMLEdit);
HTMLLookup.prototype.name = 'HTMLLookup';
HTMLLookup.prototype.tabable = true;
HTMLLookup.prototype.tagName = 'lookup';
HTMLLookup.prototype.canSelectOnFocus = false;
HTMLLookup.prototype.defaultArrowWidth = 17;
HTMLLookup.prototype.defaultComponentHeight = 21;

HTMLLookup.prototype.setVisible = function(v) {
  this.callMethod(HTMLElementBase, "setVisible", [v]);
  if (!this.visible) this.removeLookup(true);
};

HTMLLookup.prototype.validateDataType = function() {
  return true;
};

HTMLLookup.prototype.setValue = function(value, checkDependences, ignoreShowValue) {
  value = normalizeRuleParam(value, true);
  var oldValue = this.getValue();

  this.value = value;
  this.hidden.setValue(value);

  if (this.mobileInput) {
    for (let j = 0; j < this.mobileInput.options.length; j++) {
      let opt = this.mobileInput.options[j];
      if (opt.value == value) {
        opt.selected = true;
        break;
      }
    }
  } else if (this.lookupInput && this.lookupInput.options) {
    for (let j = 0; j < this.lookupInput.options.length; j++) {
      let opt = this.lookupInput.options[j];
      if (opt.getAttribute("data-value") == value) {
        if (opt.setSelected) opt.setSelected(true);
        else this.lookupInput.selectedIndex = j;
        break;
      }
    }
  }

  if (trim(this.value) != trim(oldValue)) {
    if (this.field == null || this.field.length == 0) {
      if (!ignoreShowValue) {
        var url = "lookupShowValue.do?sys=" + this.sys + "&formID=" + this.formID + "&comID=" + this.code + "&value=" + URLEncode(value, "GET");

        if (d.t && d.t.dependences) {
          var components = d.t.dependences[this.code];
          if (components && components.length > 0) {
            for (var code in components) {
              if (isNumeric(code)) {
                var component = eval("$mainform().d.c_" + components[code]);
                if (component) url += ("&WFRInput" + component.getCode() + "=" + URLEncode(component.getValue(), "GET"));
              }
            }
          }
        }

        var show = getContent(url);
        this.setShowValue(show);
      }
    }

    this.changeAction(null, this, !checkDependences);
  }
};

HTMLLookup.prototype.setShowValue = function(value) {
  this.showValue = value;

  // Definir o valor do input do loookup.
  if (this.input) this.input.value = value;

  // Verificar se possui input mobile.
  if (this.mobileInput) {
    // Verificar se o valor de exibição é vazio.
    if (value == "") {
      // Limpar as opções do select.
      this.mobileInput.innerHTML = "";
    }

    // Criar uma opção vazia para exibição do valor.
    var dummyOption = document.createElement("option");
    dummyOption.value = "";
    dummyOption.innerText = value;
    dummyOption.selected = true;
    dummyOption.hidden = true;
    this.mobileInput.appendChild(dummyOption);
  }
};

HTMLLookup.prototype.getValue = function() {
  return this.hidden.value;
};

HTMLLookup.prototype.getShowValue = function() {
  return this.input.value;
};

HTMLLookup.prototype.designEditInput = function(doc, name, value) {
  // Cria o input do lookup
  this.input = document.createElement("input");
  this.input.className = "form-control"; // Bootstrap
  this.input.id = 'WFRInput' + this.code;
  this.input.parent = this;

  if (!name) this.input.name = 'WFRInput' + this.code;
  else this.input.name = name;

  // Propriedade placeholder do input (texto quando nulo)
  if (this.placeholder) this.input.placeholder = this.placeholder;

  // Propriedade somente leitura do input
  this.input.readOnly = (this.style == 1);

  // Propriedade autocomplete do input (histórico)
  // Para não aparecer outra lista no lookup, essa
  // propriedade deve estar sempre desativada (off).
  this.input.autocomplete = "off";

  // Propriedade de limite de caracteres do input
  if (this.maxlength) this.input.maxLength = this.maxlength;

  // Alinhamento do texto do input
  if (this.align) this.input.style.textAlign = this.align;

  // Definir o valor inicial do input
  if (value) this.input.value = value;

  // Layout do input
  this.input.style.height = (this.style == 0 ? (this.height - 2) : this.height) + "px";

  // Eventos do input
  this.input.addEventListener('input', this.inputSearchTimer);
};

HTMLLookup.prototype.designInput = function(doc) {
  if (this.style == 0 || this.style == 1 || this.style == 2) {
    this.designEditInput(doc, 'WFRInput' + this.code + 'Show', this.showValue);
  }
};

HTMLLookup.prototype.designComponentReport = function() {
  var labelReport = new HTMLLabel(this.sys, this.formID, this.code, 0, 0, this.width, this.height, this.showValue);
  labelReport.id = "reportLabelLookup" + this.code;
  labelReport.design(this.context, false);
};

HTMLLookup.prototype.designComponent = function(doc) {
  this.divClass = this.div.className;

  if (!this.filterOnKeyPress) {
    this.tabKeys = arrayIndexRemove(this.tabKeys, 2);
  }

  this.dependent = true;
  this.url = 'search.do?inputRetornoName=WFRInput' + this.code + 'Show&sys=' + this.sys + '&action=search&formID=' + this.formID + '&componentID=' + this.code + '&xml=true';

  if (this.report) {
    this.designComponentReport();
    return "";
  }

  this.onkeydown = this.checkKey;

  var parentDiv = this.div;
  var object = this;

  if (this.style == 0 && !this.toGrid) {
    // Verificar se o lookup tem um sub formulário associado
    if (this.openSubForm && this.subFormCode && parseInt(this.subFormCode) > 0) {
      // Criar uma nova div para colocar o botão do lado
      parentDiv = document.createElement("div");
      parentDiv.className = "d-flex flex-row-reverse"; // Bootstrap
      this.div.appendChild(parentDiv);

      // Criar o botão para abrir o sub formulário
      this.sfdiv = document.createElement("div");
      this.sfdiv.id = "lookupSubform" + this.code;
      this.sfdiv.className = "d-flex flex-column align-items-center justify-content-center px-2"; // Bootstrap

      // Criar o ícone do botão
      var sfdivIcon = document.createElement("span");
      sfdivIcon.className = "generic-btn fas fa-window-maximize"; // Custom - Font Awesome
      this.sfdiv.appendChild(sfdivIcon);

      // Evento de clique do botão
      var sfdivEvent = this.getAction('openForm');
      if (sfdivEvent) this.attachEvent(this.sfdiv, 'click', sfdivEvent);

      // Adicionar o botão ao formulário
      parentDiv.appendChild(this.sfdiv);
    }
  }

  // Associar o botão F5 a ação de abrir o sub formulário do lookup
  if (this.openSubForm && this.subFormCode && parseInt(this.subFormCode) > 0 && this.style == 0) {
    this.onF5press = this.getAction('openForm');
  }

  // Cria o elemento hidden pra obter o valor através do POST (importante)
  this.hidden = new HTMLHidden(this.sys, this.formID, this.code, this.value);
  this.hidden.design(this.context);

  if (!this.mobile && this.style == 0) {
    // �? necessário criar outro div para colocar os elementos do Lookup
    this.context = this.getBaseDiv();
    this.context.className = "input-group lookup lookup-styled"; // Bootstrap
    this.context.style.height = this.div.style.height;
    this.contextClass = this.context.className;
    if (!this.enabled || this.readonly) this.context.className += " disabled";
    parentDiv.appendChild(this.context);
  }

  // Cria o elemento input (herdado pelo elemento HTMLEdit)
  this.callMethod(HTMLEdit, 'designComponent', [doc]);
  if (!this.contextClass) this.contextClass = this.context.className;

  if (!this.mobile && this.style == 0) {
    // Cria spinner de carregamento
    this.loadingSpinner = document.createElement("div");
    this.loadingSpinner.className = "spinner-border text-secondary align-self-center mx-2"; // Bootstrap
    this.loadingSpinner.style.width = "1rem";
    this.loadingSpinner.style.height = "1rem";
    this.loadingSpinner.style.display = "none";
    this.context.appendChild(this.loadingSpinner);

    // Cria o botão do lado para abrir o menu de seleção
    this.button = document.createElement("button");
    this.button.className = "input-group-append"; // Bootstrap
    this.button.type = "button";
    this.button.onclick = function(e) {
      if (object.readonly) return false; // Não fazer nada quando o elemento está somente leitura
      return object.openDetails();
    };

    // Adiciona o botão ao elemento
    this.context.appendChild(this.button);

    // Desativa o botão quando o elemento está somente leitura ou desativado
    if (this.readonly || !this.enabled) {
      this.button.className += " disabled";
      this.button.setAttribute("aria-disabled", "true");
    }
  }

  this.onblur_catch = this.onblur;
  this.onblur = this.doOnBlur;

  if (this.mobile) {
    // Esconder o input original
    this.input.readOnly = true;
    this.input.style.display = "none";

    // Quando estamos em um celular, a melhor opção é criar um elemento SELECT para
    // tratar da entrada de dados (assim fica melhor para o usuário selecionar os dados)
    this.mobileInput = document.createElement("select");
    this.mobileInput.className = "custom-select"; // Bootstrap
    this.mobileInput.name = "HTMLSelectMobile" + this.code;
    if (this.readonly || !this.enabled) this.mobileInput.setAttribute("disabled", "disabled");

    // Layout do select mobile
    this.mobileInput.style.left = "0";
    this.mobileInput.style.width = "100%";
    this.mobileInput.style.height = this.div.style.height;

    // Variáveis do select mobile
    this.mobileInput.url = this.url;
    this.mobileInput.lookup = this;

    // Eventos do select mobile
    this.attachEvent(this.mobileInput, "change", this.lookupChangeSelectValue, this, this.mobileInput);
    this.attachEvent(this.mobileInput, "touchstart", this.showLookupResults, this, this.mobileInput);

    // Verificar se o lookup tem um sub formulário associado
    if (this.openSubForm && parentDiv && this.subFormCode && parseInt(this.subFormCode) > 0) {
      // Adicionar o select mobile ao elemento
      parentDiv.appendChild(this.mobileInput);
    } else {
      // Adicionar o select mobile ao elemento
      this.div.appendChild(this.mobileInput);
    }

    // Verificar se possui valor inicial
    if (this.value && this.value.length > 0 && this.showValue && this.showValue.length > 0) {
      var initialOption = document.createElement("option");
      initialOption.selected = true;
      initialOption.value = this.value;
      initialOption.innerHTML = stringToHTMLString(this.showValue);
      this.mobileInput.appendChild(initialOption);
    }
  }
}

HTMLLookup.prototype.setReadOnly = function(v) {
  this.readonly = v;

  // Configurar o div principal do lookup
  if (this.div) {
    if (this.readonly || !this.enabled) this.context.className = this.contextClass + " disabled";
    else this.context.className = this.contextClass;
  }

  // Configurar o input do lookup
  if (this.input) this.input.readOnly = (this.readonly || !this.enabled);

  // Configurar o botão do lookup
  if (this.button) {
    if (this.readonly || !this.enabled) {
      this.button.className = "input-group-append disabled"; // Bootstrap
      this.button.setAttribute("aria-disabled", "true"); // Accessibility
    } else {
      this.button.className = "input-group-append"; // Bootstrap
      this.button.removeAttribute("aria-disabled"); // Accessibility
    }
  }

  // Configurar o input mobile do lookup (se existir)
  if (this.mobileInput) {
    if (this.readonly || !this.enabled) {
      this.mobileInput.setAttribute("disabled", "disabled");
    } else {
      this.mobileInput.removeAttribute("disabled");
    }
  }
};

HTMLLookup.prototype.setEnabled = function(v) {
  this.enabled = v;

  // Configurar o input do lookup
  if (this.input) this.input.disabled = !this.enabled;

  // Configurar o button do lookup
  if (this.button) this.button.style.pointerEvents = this.enabled ? null : "none";

  // Configurar o botão do lookup
  if (this.button) {
    if (this.readonly || !this.enabled) {
      this.button.className = "input-group-append disabled";
      this.button.setAttribute("aria-disabled", "true");
    } else {
      this.button.className = "input-group-append";
      this.button.removeAttribute("aria-disabled");
    }
  }

  // Configurar o input mobile do lookup (se existir)
  if (this.mobileInput) {
    if (this.readonly || !this.enabled) {
      this.mobileInput.setAttribute("disabled", "disabled");
    } else {
      this.mobileInput.removeAttribute("disabled");
    }
  }
};

HTMLLookup.prototype.setColor = function(color) {
  this.callMethod(HTMLEdit, 'setColor', [color]);
  if (this.button) this.button.style.setProperty("color", color, "important");
  if (this.input) this.input.style.setProperty("color", color, "important");
  if (this.mobileInput) this.mobileInput.style.setProperty("color", color, "important");
};

HTMLLookup.prototype.setBGColor = function(color) {
  this.callMethod(HTMLEdit, 'setBGColor', [color]);
  if (this.button) this.button.style.setProperty("background-color", color, "important");
  if (this.input) this.input.style.setProperty("background-color", color, "important");
  if (this.mobileInput) this.mobileInput.style.setProperty("background-color", color, "important");
};

HTMLLookup.prototype.doOnBlur = function(evt) {
  if (this.input.value == "" && this.hidden.value != "") {
    this.hidden.value = "";
    this.hidden.hidden.value = "";
  }

  if (controller.activeElement == this) {
    controller.activeElement = null;
  }

  if (evt.relatedTarget != this.button) {
    this.timeout(this.doOnBlurTO, 100);
  }
};

HTMLLookup.prototype.doOnBlurTO = function(evt) {
  if (controller.activeElement != this && controller.activeElement != this.button && this.onblur_catch && !this.lookup) {
    this.onblur_catch.call(this, evt);
  }
};

HTMLLookup.prototype.checkKey = function(evt) {
  if (!evt) evt = event;
  var keyCode = evt.keyCode || evt.which;
  var r = true;

  if (evt.ctrlKey) {
    if (evt.key == " " || keyCode == 32) {
      this.changeLookupType(this, this.id);
      r = false;
    } else if (evt.key == "v" || keyCode == 86) {
      this.keyOn = true;
      r = true;
    }
  }

  if (evt.key == "F2" || keyCode == 113) {
    if (this.button) this.button.click();
    r = true;
  } else if ((evt.key == "ArrowDown" || keyCode == 40) ||
             (evt.key == "ArrowUp" || keyCode == 38)) {

    // Verificar se não possui lista do lookup.
    if (!this.lookupInput && (evt.key == "ArrowDown" || keyCode == 40)) {
      // Abrir lista do lookup.
      this.openDetails();

      // Alternar foco para a lista do lookup.
      this.timeout(function() {
        this.lookupInput.focus();
      }, 100);

    // Verificar se possui lista do lookup.
    } else if (this.lookupInput) {
      this.lookupInput.focus();
    }

    r = false;
  } else if ((evt.key == "Escape" || keyCode == 27) ||
             (evt.key == "Tab" || keyCode == 9)) {
    if (!this.lookup) {
      document.disableEvents = false;
      return true;
    }

    this.closeCurrentLookup(evt);
    this.keyOn = false;
    r = false;
  }

  if (evt.shiftKey) {
    if (evt.key == "Enter" || keyCode == 13) {
      controller.next(this, true);
    }
  }

  if (evt.key == "Enter" || keyCode == 13) {
    if (!this.filterOnKeyPress) {
      if ((this.keyControllerOn && this.keyOn) || this.keyOn) {
        this.lastTime = this.inputSearch();
      } else {
        if (!evt.shiftKey) {
          controller.next(this, false);
        }
      }
    } else {
      if (this.lookupInput) {
        this.lookupChangeSelectValue(evt, this.lookupInput);
      }
    }
    r = false;
  } else {
    if (!(keyCode == 27) && !(keyCode == 16) && !(keyCode == 18) && !(keyCode == 9) && !evt.ctrlKey) {
      this.keyControllerOn = false;
      this.keyOn = true;
    } else {
      this.keyControllerOn = true;
    }
  }

  if (!r) {
    document.disableEvents = true;
    if (evt.preventDefault) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      evt.keyCode = 0;
      evt.returnValue = false;
    }

    return false;
  } else {
    return true;
  }
};

HTMLLookup.prototype.openDetails = function() {
  if (!this.enabled || this.readonly) return false;
  if (this.lookup) {
    this.removeLookup();
  } else {
    this.getDivDetails();

    var editedURL = this.url;
    if (d.t && d.t.dependences) {
      var components = d.t.dependences[this.code];
      if (components && components.length > 0) {
        for (var code in components) {
          if (isNumeric(code)) {
            var component = eval("$mainform().d.c_" + components[code]);
            if (component) {
              editedURL += ("&WFRInput" + component.getCode() + "=" + URLEncode(component.getValue(), "GET"));
            }
          }
        }
      }
    }

    this.timeout(this.showLookupResults, 0, [editedURL + '&type=1&q=']);
  }
};

HTMLLookup.prototype.getDivDetails = function() {
  controller.activeElement = this;
  lookupCanBlur = false;

  // Se existir a lista do lookup, devemos deletá-la
  if (this.lookup) this.removeLookup();

  // Criar a lista do lookup.
  this.lookup = document.createElement("div");
  this.lookup.className = "position-absolute card"; // Bootstrap
  this.lookup.id = "lookupDetails" + this.code;
  this.lookup.name = "lookupLayer";
  this.lookup.style.visibility = "visible";
  this.lookup.style.zIndex = "1000001";

  // Função para atualizar layout da lista do lookup.
  var object = this;
  var updateDetailsLayout = function() {
    if (!object || !object.lookup) return;
    var lookupSelectElem = object.mobile ? object.mobileInput : object.context;

    if (document.n && document.n.responsive && lookupSelectElem && !object.toGrid) {
      if (object.larguraExibicao === "0" || object.larguraExibicao === undefined) {
        if (object.styleCss && object.styleCss.length > 0) {
          object.lookup.style.width = parseInt(window.getComputedStyle(document.getElementById(object.id)).width) + "px";
        } else {
          object.lookup.style.width = lookupSelectElem.offsetWidth + "px";
        }
      } else {
        var pscreen = parseInt(document.getElementById("lay").style.width, 10);
        object.lookup.style.width = ((object.larguraExibicao * 100) / pscreen) + "%";
      }

      object.lookup.style.left = findPosX(lookupSelectElem) + "px";
    } else {
      if (object.larguraExibicao === "0" || object.larguraExibicao === undefined) {
        if (object.styleCss && object.styleCss.length > 0) {
          object.lookup.style.width = parseInt(window.getComputedStyle(document.getElementById(object.id)).width) + "px";
        } else {
          object.lookup.style.width = lookupSelectElem.offsetWidth + "px";
        }
      } else {
        object.lookup.style.width = object.larguraExibicao + "px";
      }

      object.lookup.style.left = findPosX(lookupSelectElem) + "px";
    }

    // Tamanho do input do lookup.
    var lookupComponentHeight = lookupSelectElem.offsetHeight;
    var lookupComponentPosY = findPosY(lookupSelectElem);

    // Tamanho da lista do lookup.
    var lookupListHeight = object.lookup.offsetHeight;
    var lookupListPosY = parseInt(lookupComponentPosY + lookupComponentHeight);

    // Tamanho mínimo para a lista.
    var lookupMinListHeight = 100; // px

    // Obter o tamanho da barra de navegação da lista do lookup.
    var lookupListNavigationHeight = object.lookupNavigationBar &&
      object.lookupNavigationBar.offsetHeight > 0 ? object.lookupNavigationBar.offsetHeight : 33;

    // Obter o tamanho da janela.
    var windowScrollY = window.scrollY;
    var windowHeight = window.innerHeight;
    var windowHeightWithScroll = windowHeight + windowScrollY;

    // Obter o tamanho dos itens na lista do lookup.
    var itemHeight = object.lookupInput && object.lookupInput.firstChild &&
      object.lookupInput.firstChild.offsetHeight > 0 ? object.lookupInput.firstChild.offsetHeight : 29;

    // Verificar se a quantidade de itens foi definida e é maior que zero.
    if (object.lookupDataLength && object.lookupDataLength > 0) {
      // Calcular o tamanho da lista de itens baseado na quantidade.
      var size = (object.lookupDataLength * itemHeight) + 6;
      var maxListSize = (14 * 14) + 6; // Lógica do Webrun antigo.
      if (size > maxListSize) size = maxListSize;
      size = (size - (size % itemHeight)) + 6;

      // Definir a altura do lookup para o tamanho da lista calculado
      // baseado na quantidade de itens e somar com a altura da barra
      // de navegação.
      lookupListHeight = size + lookupListNavigationHeight;
    }

    // Verificar se o tamanho e a posição da lista do lookup excedem o tamanho da janela.
    if (lookupListHeight > 0 && lookupListPosY + Math.max(lookupListHeight, lookupMinListHeight) > windowHeightWithScroll) {
      // Verificar se a lista do lookup cabe em cima do componente.
      if (lookupComponentPosY - lookupListHeight > windowScrollY) {
        if (lookupComponentPosY - lookupListHeight - windowScrollY < 0) {
          // Reduzir o tamanho da lista do lookup.
          lookupListHeight = Math.max(lookupMinListHeight, lookupComponentPosY - windowScrollY);
        }

        // Colocar o lookup na parte superior do componente.
        lookupListPosY = parseInt(lookupComponentPosY - lookupListHeight);

      // Verificar se a posição do componente + sua altura excedem o tamanho da janela.
      } else if (lookupComponentPosY + lookupComponentHeight + lookupMinListHeight > windowHeightWithScroll) {
        // Neste ponto, o lookup não cabe na posição inferior do componente.

        // Reduzir o tamanho da lista do lookup.
        lookupListHeight = Math.max(lookupMinListHeight, (windowHeight - (windowHeight - lookupComponentPosY)) - windowScrollY);

        // Colocar o lookup na parte superior do componente.
        lookupListPosY = parseInt(lookupComponentPosY - lookupListHeight);
      } else {
        // Reduzir o tamanho da lista do lookup.
        lookupListHeight = Math.max(lookupMinListHeight, windowHeightWithScroll - lookupListPosY);
      }
    }

    if (lookupListHeight > 0) object.lookup.style.height = lookupListHeight + "px";
    object.lookup.style.top = lookupListPosY + "px";
  };

  // Definir função de atualizar layout da lista no DOM do elemento.
  this.lookup.updateDetailsLayout = updateDetailsLayout;

  // Associar função de atualizar layout da lista aos eventos resize e scroll da janela.
  window.addEventListener("resize", updateDetailsLayout);
  window.addEventListener("scroll", updateDetailsLayout);

  // Adicionar a lista à página.
  document.body.appendChild(this.lookup);

  // Chamar função de atualizar layout da lista.
  updateDetailsLayout();

  // Cria o spinner de carregando
  this.lookupLoading = bootstrapCreateSpinner(this.lookup, "text-secondary", true)[0];
}

HTMLLookup.prototype.getSearchLabel = function(type) {
  var typeValue = (type || this.initialType);
  try {
    typeValue = parseInt(typeValue);
    if (!(/[1-4]/.test(typeValue))) typeValue = 3;
  } catch (e) { }

  switch (typeValue) {
    case 1: return getLocaleMessage("LABEL.EQUAL");
    case 2: return getLocaleMessage("LABEL.CONTAINING");
    case 4: return getLocaleMessage("LABEL.ENDING_WITH");
    default: return getLocaleMessage("LABEL.STARTING_WITH");
  }
};

HTMLLookup.prototype.getXMLDataOK = function(response, args) {
  if (this.mobile) return getXMLContent(response);
  else args[0].showDataLookupResults(response.responseXML);
};

HTMLLookup.prototype.getXMLDataError = function(response, args) {
  args[0].showDataLookupResults(null);
};

HTMLLookup.prototype.showLookupResultsAction = function(obj, url) {
  // Esconder todos os tooltips dos botões da barra de navegação.
  if (this.haveTooltips) {
    try { $(".lookup-nav-tooltip").tooltip("hide"); } catch (e) { }
  }

  // Refazer a lista de opções
  this.showLookupResults(url);
};

HTMLLookup.prototype.showLookupResults = function(url, type, query) {
  if (this.mobile) this.showDataLookupResults(this.url);
  else getAsyncXMLContent(url, this.getXMLDataOK, this.getXMLDataError, [this]);
};

HTMLLookup.prototype.showDataLookupResults = function(xmldoc) {
  var object = this;

  if (this.mobile) {
    if (this.mobileInput) {
      // Montar a URL do pedido pro backend
      var url = this.url;
      if (d.t && d.t.dependences) {
        var components = d.t.dependences[this.code];
        if (components && components.length > 0) {
          for (var code in components) {
            if (isNumeric(code)) {
              var component = eval("$mainform().d.c_" + components[code]);
              if (component) url += ("&WFRInput" + component.getCode() + "=" + URLEncode(component.getValue(), "GET"));
            }
          }
        }
      }

      url += '&type=1&q=';
      xmldoc = this.getXMLDataOK([url]);

      if (xmldoc !== null) {
        var root = xmldoc.getElementsByTagName("r").item(0);
        if (!root) {
          var ex = xmldoc.children[0].children[0].getAttribute("message");
          handleException(new Error(ex));
          return;
        }

        var data = root.getElementsByTagName("d");
        if (data !== null) {
          // Limpar todas as opções do input do mobile
          while (this.mobileInput.firstChild) {
            this.mobileInput.removeChild(this.mobileInput.firstChild);
          }

          // Adicionar as opções obtidas no input do mobile
          for (var nodeID = 0; nodeID < data.length; nodeID++) {
            // Cria o elemento da opção
            let option = document.createElement("option");

            // Obter a node do dado atual
            let node = data.item(nodeID);
            let text = "&nbsp;";

            // Definir o valor da opção (importante)
            option.value = node.getAttribute("v");
            option.setAttribute("data-value", node.getAttribute("v"));

            // Obter o texto/descrição do dado e colocá-lo no elemento
            if (node && node.firstChild && node.firstChild.nodeValue && trim(node.firstChild.nodeValue) != "")
              text = node.firstChild.nodeValue;
            option.innerHTML = replaceAll(replaceAll(text, ">", "&gt;"), "<", "&lt;");

            // Verifica se um valor atual foi definido e se ele é o mesmo valor da opção
            if (this.value && option.value == this.value) {
              // Marcar a opção como selecionada
              option.selected = true;
            }

            // Adicionar o elemento ao input do mobile
            this.mobileInput.appendChild(option);
          }
        }
      }
    }
  } else {
    if (this.lookup) {
      this.getDivDetails();

      if (xmldoc != null) {
        var root = xmldoc.getElementsByTagName('r').item(0);
        if (!root) {
          var ex = xmldoc.children[0].children[0].getAttribute("message");
          handleException(new Error(ex));
          return;
        }

        var data = root.getElementsByTagName('d');
        this.lookupDataLength = data.length;

        // Criar o elemento da lista de opções
        this.lookupInput = document.createElement("ul");
        this.lookupInput.id = "lookupInput";
        this.lookupInput.className = "list-group list-group-flush form-control rounded-0 border-0 overflow-auto p-0 w-100 h-100 rounded-0 border-0 position-relative"; // Bootstrap
        this.lookupInput.tabIndex = 0;

        // Definir propriedades do <select> para o elemento
        this.lookupInput.options = [];
        this.lookupInput.selectedIndex = -1;

        // Adicionar o elemento à página
        this.lookup.appendChild(this.lookupInput);

        let selectedOptionDisplayValue = "";
        let firstOption = null;

        // Adicionar as opções obtidas na lista
        for (let nodeID = 0; nodeID < data.length; nodeID++) {
          // Cria o elemento da opção
          let option = document.createElement("li");
          option.className = "list-group-item list-group-item-action rounded-0 px-2 py-1"; // Bootstrap
          if (nodeID >= data.length - 1) option.className += " border-bottom-0"; // Bootstrap
          option.style.cursor = "pointer";

          // Definir propriedades da <option> para o elemento
          option.text = "";
          option.selected = false;

          // Obter a node do dado atual
          let node = data.item(nodeID);
          let nodeIndex = nodeID;

          // Definir o valor da opção
          option.setAttribute("data-value", node.getAttribute("v"));

          // Obter o texto/descrição do dado e colocá-lo no elemento
          if (node && node.firstChild && node.firstChild.nodeValue && trim(node.firstChild.nodeValue) != "") {
            option.text = node.firstChild.nodeValue;
            option.innerText = node.firstChild.nodeValue;
          } else {
            option.innerHTML = "&nbsp;";
          }

          // Definir função para selecionar a opção
          option.setSelected = function(selected) {
            if (selected) {
              if (object.lookupInput.selectedOption && object.lookupInput.selectedOption.setSelected) {
                object.lookupInput.selectedOption.setSelected(false);
              }

              if (!option.classList.contains("active"))
                option.classList.add("active");
              option.setAttribute("data-selected", "true");
              option.selected = true;

              object.lookupInput.selectedIndex = nodeIndex;
              object.lookupInput.selectedOption = option;
            } else {
              if (option.classList.contains("active"))
                option.classList.remove("active");
              option.setAttribute("data-selected", "false");
              option.selected = false;
            }
          };

          // Verifica se um valor atual foi definido e se ele é o mesmo valor da opção
          if (this.value && node.getAttribute("v") == this.value) {
            // Marcar a opção como selecionada
            option.setSelected(true);
            selectedOptionDisplayValue = option.text;
          }

          // Adicionar o elemento na lista
          this.lookupInput.appendChild(option);
          this.lookupInput.options.push(option);

          // Associar evento de clique ao item.
          option.addEventListener("click", function(evt) {
            option.setSelected(true);
            object.lookupChangeSelectValue(evt, object.lookupInput);
          });

          // Definir a primeira opção
          if (nodeID >= 1 && firstOption === null) firstOption = option;
        }

        // Verificar se permite inserir, se não possui opções e se possui texto.
        if (this.allowInsert && this.lookupDataLength <= 1 &&
            this.input && this.input.value.trim().length > 0) {

          // Obter o texto pra inserir.
          this.lookupAddOptionText = this.input.value.trim();

          // Esconder a barra de rolagem do select.
          this.lookupInput.style.overflow = "hidden";
          this.lookupInput.style.boxShadow = "none";

          // Criar opção pra adicionar.
          this.lookupAddOption = document.createElement("a");
          this.lookupAddOption.href = "#";
          this.lookupAddOption.className = "border-top w-100 px-2 py-1"; // Bootstrap
          this.lookupAddOption.innerHTML = "<b>" + replaceAll(replaceAll(this.lookupAddOptionText, '>', '&gt;'), '<', '&lt;') +
            "</b><small class=\"ml-2\">(" + getLocaleMessage("LABEL.ADD") +")</small>";

          // Adicionar o elemento na lista
          this.lookup.appendChild(this.lookupAddOption);
          this.lookupDataLength++;

          // Associar evento de clique a opção de adicionar.
          this.lookupAddOption.addEventListener("click", function() {
            object.lookupChangeValue("", object.lookupAddOptionText, true);
          });
        }

        // Verificar se não possui valor selecionado ou se o input de pesquisa está vazio ou não possui
        // o mesmo valor do valor selecionado.
        if ((this.value === "") || (this.input && (this.input.value.trim().length == 0 ||
            this.input.value != selectedOptionDisplayValue))) {

          // Selecionar o primeiro item (sem ser o vazio)
          if (firstOption) firstOption.setSelected(true);
        }

        let nav = root.getElementsByTagName("navigation").item(0);

        // Criar a barra de navegação da lista de opções
        this.lookupNavigationBar = document.createElement("div");
        this.lookupNavigationBar.className = "card-footer d-flex flex-row-reverse p-2"; // Bootstrap
        if (this.div.offsetWidth > 0 && this.div.offsetWidth < 162) this.lookupNavigationBar.className += " justify-content-center"; // Bootstrap

        // Variável usada para saber se os tooltips foram usados
        this.haveTooltips = false;

        // Criar os botões da barra de navegação
        for (let nodeID = nav.childNodes.length - 1; nodeID >= 0; nodeID--) {
          // Cria o elemento do botão da barra de navegação
          let navItem = document.createElement("div");
          navItem.className = "generic-btn float-right d-flex align-items-center justify-content-center px-1"; // Custom - Bootstrap

          // Obter o "galho" do dado atual
          let node = nav.childNodes.item(nodeID);

          // Verificar se o botão deverá estar ativado ou desativado
          if (node.getAttribute("enabled").toLowerCase() == "true") {
            // Adicionar o evento de clique no item
            this.attachEvent(navItem, 'click', this.showLookupResultsAction, this, [node.firstChild.nodeValue]);
          } else {
            // Adicionar a classe "disabled"
            navItem.className += " disabled";
          }

          // Obter a tag do dado atual
          let nodeTag = node.tagName.toLowerCase();

          // Criar o elemento do ícone do botão
          let navItemIcon = document.createElement("span");
          navItemIcon.id = "lookupNavigation" + capitalizeFirstLetter(nodeTag) + this.code;
          if (this.div.offsetWidth > 0 && this.div.offsetWidth >= 162) navItemIcon.className = "px-2"; // Bootstrap

          // Obter o ícone para cada botão
          if (nodeTag == "last") {
            navItemIcon.className = (navItemIcon.className + " fas fa-angle-double-right").trim(); // Font Awesome

            // Tooltip do botão
            var tooltip = getLocaleMessage('LABEL.LAST_RECORD');
            if (tooltip) {
              navItem.className += " lookup-nav-tooltip"; // Custom
              navItem.title = tooltip;
              navItem.setAttribute("data-toggle", "tooltip"); // Bootstrap Tooltip
              this.haveTooltips = true;
            }
          } else if (nodeTag == "next") {
            navItemIcon.className = (navItemIcon.className + " fas fa-chevron-right").trim(); // Font Awesome

            // Tooltip do botão
            var tooltip = getLocaleMessage('LABEL.NEXT_RECORD');
            if (tooltip) {
              navItem.className += " lookup-nav-tooltip"; // Custom
              navItem.title = tooltip;
              navItem.setAttribute("data-toggle", "tooltip"); // Bootstrap Tooltip
              this.haveTooltips = true;
            }
          } else if (nodeTag == "previous") {
            navItemIcon.className = (navItemIcon.className + " fas fa-chevron-left").trim(); // Font Awesome

            // Tooltip do botão
            var tooltip = getLocaleMessage('LABEL.PREVIOUS_RECORD');
            if (tooltip) {
              navItem.className += " lookup-nav-tooltip"; // Custom
              navItem.title = tooltip;
              navItem.setAttribute("data-toggle", "tooltip"); // Bootstrap Tooltip
              this.haveTooltips = true;
            }
          } else if (nodeTag == "first") {
            navItemIcon.className = (navItemIcon.className + " fas fa-angle-double-left").trim(); // Font Awesome

            // Tooltip do botão
            var tooltip = getLocaleMessage('LABEL.FIRST_RECORD');
            if (tooltip) {
              navItem.className += " lookup-nav-tooltip"; // Custom
              navItem.title = tooltip;
              navItem.setAttribute("data-toggle", "tooltip"); // Bootstrap Tooltip
              this.haveTooltips = true;
            }
          }

          // Adicionar o ícone ao botão
          navItem.appendChild(navItemIcon);

          // Adicionar o botão à barra de navegação
          this.lookupNavigationBar.appendChild(navItem);
        }

        // Adicionar a barra de navegação à lista
        this.lookup.appendChild(this.lookupNavigationBar);

        // Atualizar layout do lookup.
        if (this.lookup.updateDetailsLayout) {
          this.lookup.updateDetailsLayout();
        }

        // Evento de keydown no input do lookup.
        this.attachEvent(this.lookupInput, "keydown", this.lookupSelectPress);
      }

      // Evento de clique na página (para fechar o lookup).
      this.attachEvent(document, "click", this.closeCurrentLookup);

      // Inicializar tooltips, se foram usados.
      if (this.haveTooltips) {
        bootstrapInitTooltip(".lookup-nav-tooltip");
        $(".lookup-nav-tooltip").on("show.bs.tooltip", function() {
            // Somente um tooltip deve ser exibido por vez.
            $(".lookup-nav-tooltip").not(this).tooltip("hide");
        });
      }

      // Deletar o spinner de carregando
      if (this.lookupLoading) {
        if (this.lookupLoading.remove) {
          this.lookupLoading.remove();
        } else this.lookup.removeChild(this.lookupLoading); // IE
        this.lookupLoading = null;
      }
    } else this.removeLookup();
  }
};

HTMLLookup.prototype.openForm = function() {
  eval(this.subFormOpenCommand);
};

HTMLLookup.prototype.openFormKeyboard = function() {
  eval(this.subFormOpenCommand);
};

HTMLLookup.prototype.changeLookupType = function(o, id) {
  var object = this;
  var alt = '';

  var lookupTypeIconDiv = document.createElement("div");
  lookupTypeIconDiv.className = "position-absolute d-flex align-items-center justify-content-center h-100 px-2"; // Bootstrap
  lookupTypeIconDiv.style.width = "2rem";
  lookupTypeIconDiv.style.top = "0px";
  lookupTypeIconDiv.style.bottom = "0px";
  lookupTypeIconDiv.style.zIndex = "10";
  lookupTypeIconDiv.style.right = this.button ? this.button.offsetWidth + "px" : "0px";
  this.div.appendChild(lookupTypeIconDiv);

  var lookupTypeIcon = document.createElement("i");
  lookupTypeIconDiv.appendChild(lookupTypeIcon);

  if (this.initialType == '3') {
    this.initialType = '1';
    lookupTypeIcon.className = "fas fa-equals"; // Font Awesome
    alt = getLocaleMessage("LABEL.EQUAL");
  } else if (this.initialType == '4') {
    this.initialType = '2';
    lookupTypeIcon.className = "fas fa-file-alt"; // Font Awesome
    alt = getLocaleMessage("LABEL.CONTAINING");
  } else if (this.initialType == '2') {
    this.initialType = '3';
    lookupTypeIcon.className = "fas fa-caret-left"; // Font Awesome
    alt = getLocaleMessage("LABEL.STARTING_WITH");
  } else if (this.initialType == '1') {
    this.initialType = '4';
    lookupTypeIcon.className = "fas fa-caret-right"; // Font Awesome
    alt = getLocaleMessage("LABEL.ENDING_WITH");
  }

  var accessibilitySpan = document.createElement("span");
  accessibilitySpan.className = "sr-only"; // Bootstrap
  accessibilitySpan.innerHTML = alt;
  lookupTypeIconDiv.appendChild(accessibilitySpan);

  $(lookupTypeIconDiv).fadeIn(1000, function() {
    $(lookupTypeIconDiv).fadeOut(1000, function() {
      if (object && object.div) object.div.removeChild(lookupTypeIconDiv);
    });
  });

  if (this.lookupInput) {
    this.inputSearch();
  }
};

HTMLLookup.prototype.closeCurrentLookup = function(evt) {
  // Esconder todos os tooltips dos botões da barra de navegação.
  if (this.haveTooltips) bootstrapCloseTooltip(".lookup-nav-tooltip");

  var target = evt.target || evt.srcElement;
  if (this.lookup && (!this.button || target != this.button.btdiv)) {
    if (!target.id || target.id.indexOf('lookup') != 0) {
      if (!(target.parentNode && target.parentNode.id && target.parentNode.id.indexOf('lookup') == 0)) this.removeLookup(true);
    }
  }

  this.isTyping = false;
};

HTMLLookup.prototype.lookupChangeSelectValue = function(e, sel) {
  if (this.mobile) {
    if (sel.options[sel.selectedIndex] && sel.options[sel.selectedIndex].getAttribute("data-value") != 0) {
      this.lookupChangeValue(sel.options[sel.selectedIndex].getAttribute("data-value"), sel.options[sel.selectedIndex].text);
    } else {
      this.lookupChangeValue("", "");
    }
  } else {
    if (sel.options[sel.selectedIndex]) {
      if(this.isNullOrEmpty(sel.options[sel.selectedIndex].text)) sel.options[sel.selectedIndex].text = sel.options[sel.selectedIndex].text.replace(/\s/g, '');
      this.lookupChangeValue(sel.options[sel.selectedIndex].getAttribute("data-value"), sel.options[sel.selectedIndex].text);
    } else {
      this.lookupChangeValue("", "");
    }

    this.keyOn = false;
  }
};

HTMLLookup.prototype.lookupChangeValue = function(v, t, add) {
  this.setValue(v, true, true);
  this.setShowValue(t);

  if (add === true) {
    this.lookupAddValue(t);
  } else {
    this.timeout(this.removeLookup, 0);
  }
};

HTMLLookup.prototype.lookupAddValue = function(text) {
  if (!this.allowInsert) return;

  // Exibir spinner de carregamento.
  this.loadingSpinner.style.display = null;

  // Enviar requisição para o servidor.
  getAndEval("componentData.do?action=componentData&sys=" + URLEncode(this.sys, 'GET') +
    "&formID=" + URLEncode(this.formID, 'GET') +
    "&comID=" + URLEncode(this.code, 'GET') +
    "&type=insert" +
    "&value=" + URLEncode(text, 'GET'));
};

HTMLLookup.prototype.afterInsert = function() {
  // Ocultar spinner de carregamento.
  this.loadingSpinner.style.display = "none";

  // Realizar pesquisa de novo.
  this.lookupDoSearch();

  // Limpar input do lookup.
  if (this.input) this.input.value = "";
};

HTMLLookup.prototype.removeLookup = function(nofocus) {
  if (this.lookup && this.lookup.parentNode) {
    // Verificar se a função de atualizar layout foi definida no DOM da lista do lookup.
    if (this.lookup.updateDetailsLayout) {
      try {
        // Remover eventos da janela.
        window.removeEventListener("resize", this.lookup.updateDetailsLayout);
        window.removeEventListener("scroll", this.lookup.updateDetailsLayout);
      } catch (e) { }
      this.lookup.updateDetailsLayout = null;
    }

    // Fechar todas as tooltips da lista do lookup.
    if (this.haveTooltips) {
      try { $(".lookup-nav-tooltip").tooltip("hide"); } catch (e) { }
      this.haveTooltips = false;
    }

    // Remover lista do lookup da tela.
    this.lookup.parentNode.removeChild(this.lookup);

    // Restaurar classe da div do componente.
    this.div.className = this.divClass;

    // Remover evento de clique.
    this.removeEvent(document, "click");

    // Dar foco no componente.
    if (!nofocus) this.focus();

    // Limpar variáveis.
    this.lookup = null;
    this.lookupInput = null;
    this.lookupNavigationBar = null;
    this.lookupDataLength = null;
  }

  lookupCanBlur = true;
};

HTMLLookup.prototype.lookupSelectPress = function(evt) {
  var keyCode = evt.keyCode || evt.which;
  var r = true;

  if (evt.key == "PageUp" || keyCode == 33) {
    var x = this.lookupInput.selectedIndex - 10;

    if (x > this.lookupInput.options.length - 1) x = this.lookupInput.options.length - 1;
    else if (x < 0) x = 0;

    if (this.lookupInput.options && this.lookupInput.options[x] && this.lookupInput.options[x].setSelected) {
      this.lookupInput.options[x].setSelected(true);
    } else this.lookupInput.selectedIndex = x;

    try {
      evt.preventDefault();
      evt.stopPropagation();

      // Verificar se a opção possui referência do elemento pai.
      if (this.lookupInput.options[x].parentElement) {
        // Rolar barra de rolagem até a opção.
        this.lookupInput.options[x].parentElement.scrollTop =
          this.lookupInput.options[x].offsetTop;
      } else {
        // Utilizar função antiga.
        this.lookupInput.options[x].scrollIntoView();
      }
    } catch (e) { }

    r = false;
  } else if (evt.key == "PageDown" || keyCode == 34) {
    let x = this.lookupInput.selectedIndex + 10;

    if (x > this.lookupInput.options.length - 1) x = this.lookupInput.options.length - 1;
    else if (x < 0) x = 0;

    if (this.lookupInput.options && this.lookupInput.options[x] && this.lookupInput.options[x].setSelected) {
      this.lookupInput.options[x].setSelected(true);
    } else this.lookupInput.selectedIndex = x;

    try {
      evt.preventDefault();
      evt.stopPropagation();

      // Verificar se a opção possui referência do elemento pai.
      if (this.lookupInput.options[x].parentElement) {
        // Rolar barra de rolagem até a opção.
        this.lookupInput.options[x].parentElement.scrollTop =
          this.lookupInput.options[x].offsetTop;
      } else {
        // Utilizar função antiga.
        this.lookupInput.options[x].scrollIntoView();
      }
    } catch (e) { }

    r = false;
  } else if ((evt.key == "Escape" || keyCode == 27) ||
             (evt.key == "Tab" || keyCode == 9)) {
    this.removeLookup();
    r = false;
  } else if (keyCode == 10 || (evt.key == "Enter" || keyCode == 13)) {
    this.lookupChangeSelectValue(evt, this.lookupInput);
    r = false;
  } else if ((evt.key == "ArrowDown" || keyCode == 40) ||
             (evt.key == "ArrowUp" || keyCode == 38)) {

    // Verificar se a lista do lookup possui opções.
    if (this.lookupInput.options && this.lookupInput.options.length > 0) {
      let targetIndex = this.lookupInput.selectedIndex;

      // Aumentar/Diminuir o índice do item selecionado.
      if (evt.key == "ArrowDown" || keyCode == 40) targetIndex++;
      else if (evt.key == "ArrowUp" || keyCode == 38) targetIndex--;

      // Ajustar índice para não ultrapassar o tamanho da lista.
      if (targetIndex >= this.lookupInput.options.length)
        targetIndex = this.lookupInput.options.length - 1;
      else if (targetIndex < 0) targetIndex = 0;

      // Selecionar o item com o índice especificado.
      if (this.lookupInput.options[targetIndex] && this.lookupInput.options[targetIndex].setSelected) {
        // Marcar a opção selecionada.
        this.lookupInput.options[targetIndex].setSelected(true);
      } else this.lookupInput.selectedIndex = targetIndex;

      try {
        evt.preventDefault();
        evt.stopPropagation();

        // Verificar se a opção possui referência do elemento pai.
        if (this.lookupInput.options[targetIndex].parentElement) {
          // Rolar barra de rolagem até a opção.
          this.lookupInput.options[targetIndex].parentElement.scrollTop =
            this.lookupInput.options[targetIndex].offsetTop;
        } else {
          // Utilizar função antiga.
          this.lookupInput.options[targetIndex].scrollIntoView();
        }
      } catch (e) { }
    } else {
      // Alternar foco para a lista do lookup.
      this.lookupInput.focus();
    }
  } else if (!evt.altKey && !evt.ctrlKey && ((evt.key == "ArrowRight" || keyCode == 39) || (evt.key == "ArrowLeft" || keyCode == 37))) {
    var idx = this.lookupInput.selectedIndex;

    if (evt.key == "ArrowRight" || keyCode == 39) {
      var nav = document.getElementById("lookupNavigationNext" + this.code);
      if (nav) nav.click();
    } else if (evt.key == "ArrowLeft" || keyCode == 37) {
      var nav = document.getElementById("lookupNavigationPrevious" + this.code);
      if (nav) nav.click();
    }

    if (this.lookupInput.options && this.lookupInput.options[idx] && this.lookupInput.options[idx].setSelected) {
      this.lookupInput.options[idx].setSelected(true);
    } else this.lookupInput.selectedIndex = idx;

    this.lookupInput.focus();
  }

  if (!r) {
    document.disableEvents = true;
    if (evt.preventDefault) {
      evt.preventDefault();
      evt.stopPropagation();
    } else {
      evt.keyCode = 0;
      evt.returnValue = false;
    }

    return false;
  } else return true;
};

HTMLLookup.prototype.lookupDoSearch = function() {
  var editedURL = this.url;
  if (d.t && d.t.dependences) {
    var components = d.t.dependences[this.code];
    if (components && components.length > 0) {
      for (var code in components) {
        if (isNumeric(code)) {
          var component = eval("$mainform().d.c_" + components[code]);
          if (component) {
            editedURL += ("&WFRInput" + component.getCode() + "=" + URLEncode(component.getValue(), "GET"));
          }
        }
      }
    }
  }

  this.showLookupResults(editedURL + '&type=' + this.initialType + '&q=' + URLEncode(this.input.value, "GET"), this.initialType, this.input.value);
};

HTMLLookup.prototype.freeComponent = function() {
  if (this.sfdiv) this.doc.removeChild(this.sfdiv);
  if (this.toGrid && this.div) this.doc.removeChild(this.div);
};

HTMLLookup.prototype.setHint = function(hint) {
  this.hint = hint;

  if (this.div) {
    let init = this.div.hint ? false : true;
    if (this.div.getAttribute("data-original-title")) {
      this.div.setAttribute("data-original-title", hint.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    } else {
      this.div.setAttribute("data-toggle", "tooltip"); // Bootstrap
      this.div.setAttribute("data-html", "true"); // Bootstrap
      this.div.hint = hint;
      this.div.title = hint.replace(/(?:\r\n|\r|\n)/g, '<br />');
      if (init) bootstrapInitTooltip(this.div);
    }
  }
};

HTMLLookup.prototype.hasEmptyValue = function() {
  return (this.getValue() == this.emptyKeyValue);
};

HTMLLookup.prototype.inputSearch = function() {
  this.getDivDetails();
  this.lookupDoSearch();
  this.isTyping = true;
};

HTMLLookup.prototype.inputSearchTimer = function() {
  if (this.parent.filterOnKeyPress) {
    if (this.parent.lastTime) {
      clearTimeout(this.parent.lastTime);
      this.parent.lastTime = this.parent.timeout(this.parent.inputSearch, 300);
    } else {
      this.parent.lastTime = this.parent.timeout(this.parent.inputSearch, 300);
    }
  }
};

/**
 * Ocorre quando o formulário entra em modo de edição.
 */
HTMLLookup.prototype.onFormEditMode = function() {
  if (this.isAboveOverlay && this.div && this.div.style.zIndex == 100000 && d.n.visible) {
    // Verificar se tem subformulário.
    if (this.openSubForm && this.subFormCode && parseInt(this.subFormCode) > 0 && this.style == 0) {
      // Restaurar z-index da div do componente.
      this.div.style.zIndex = this.zindex;

      // Verificar se o overlay do input foi criado.
      if (this.inputOverlay) {
        // Remover overlay do input.
        this.context.removeChild(this.inputOverlay);
        this.inputOverlay = null;

        if (this.label) {
          // Remover eventos da label do componente.
          if (this.labelPreventEvt) this.label.removeEventListener("click", this.labelPreventEvt);
          if (this.inputOverlayEvt) this.label.removeEventListener("dblclick", this.inputOverlayEvt);
          this.labelPreventEvt = null;
        }

        // Deletar evento de duplo clique.
        this.inputOverlayEvt = null;
      }

      this.isAboveOverlay = false;
    }
  }
};

/**
 * Ocorre quando o formulário entra em modo de visualização.
 */
HTMLLookup.prototype.onFormViewMode = function() {
  if (!this.isAboveOverlay && this.div && this.div.style.zIndex != 100000 && d.n.visible) {
    // Verificar se tem subformulário.
    if (this.openSubForm && this.subFormCode && parseInt(this.subFormCode) > 0 && this.style == 0) {
      // Trazer div do componente pra frente do form-overlay.
      this.div.style.zIndex = 100000;

      // Verificar se o overlay do input não foi criado.
      if (!this.inputOverlay) {
        // Criar overlay do input.
        this.inputOverlay = document.createElement("div");
        this.inputOverlay.style.position = "absolute";
        this.inputOverlay.style.top = "0px";
        this.inputOverlay.style.left = "0px";
        this.inputOverlay.style.right = "0px";
        this.inputOverlay.style.bottom = "0px";
        this.inputOverlay.style.zIndex = 10;
        this.context.appendChild(this.inputOverlay);

        // Declarar evento de duplo clique pra possibilitar entrar em
        // modo de edição com o duplo clique em cima do componente.
        var object = this;
        this.inputOverlayEvt = function() {
          if (object && object.tab && object.tab.dblClickAction && object.tab.parent && object.tab.parent.editWithDoubleClick) {
            object.tab.dblClickAction();
          }
        };

        this.inputOverlay.addEventListener("dblclick", this.inputOverlayEvt);

        if (!this.labelPreventEvt && this.label) {
          // Adicionar eventos na label do componente.
          this.labelPreventEvt = function(e) { e.preventDefault(); };
          this.label.addEventListener("click", this.labelPreventEvt);
          this.label.addEventListener("dblclick", this.inputOverlayEvt);
        }
      }

      this.isAboveOverlay = true;
    }
  }
};

/**
 * Verifica se o valor informado por parâmetro é nulo ou vazio.
 * @param value
 * @returns valor lógico.
 */
HTMLLookup.prototype.isNullOrEmpty = function (value) {
  return (value==null||typeof value=='undefined'||trim(value+'')==''||value.toString()=='NaN');
}
