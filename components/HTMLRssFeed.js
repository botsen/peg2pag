/**
 * M�todo construtor do HTMLRssFeed. Respons�vel por criar o componente RSS.
 * @param sys - Indica o c�digo do sistema.
 * @param formID - Indica o c�digo do formul�rio.
 * @param posX - Posi��o do componente na tela em rela��o ao eixo X.
 * @param posY - Posi��o do componente na tela em rela��o ao eixo Y.
 * @param width - Largura do componente.
 * @param heigth - Altura do componente.
 * @param description - Descricao do componente.
 * @param value - Valor do componente. 
 **/
function HTMLRssFeed(sys, formID, code, posX, posY, width, height, description, value, showValue) {
  this.create(sys, formID, code, posX, posY, width, height, description, value);
  this.feedItems = [];
  this.animationCurrentIndex = 0;
  this.targetScroll = 0;
}

/**
 * Heran�a do objeto.
 **/
HTMLRssFeed.inherits(HTMLElementBase);

/**
 * Setando propriedades do componente.
 **/
HTMLRssFeed.prototype.name = 'HTMLRssFeed';
HTMLRssFeed.prototype.tabable = true;

/**
 * Formato das datas das publica��es no feed RSS.
 **/
HTMLRssFeed.prototype.pubDateFormats = [
  'ddd, DD MMM YYYY HH:mm:ss ZZ',
  'ddd, DD MMM YY HH:mm:ss ZZ'
];

/**
 * Define a URL de obten��o do RSS.
 * @param url - Nova URL do RSS.
 * @param charset - Charset do RSS.
 **/
HTMLRssFeed.prototype.setUrl = function(url, charset) {
  this.url = url;
  if (charset) this.Charset = charset;
  this.updateData();
};

/**
 * Respons�vel por desenhar o HTML do componente RSS. 
 * @param doc - documento onde o componente ser� inserido.
 **/
HTMLRssFeed.prototype.designComponent = function(doc) {
  this.divClass = this.div.className;

  // Obter propriedades do componente e dar parse nelas.
  if (this.ExibirImagens && this.ExibirImagens.length) {
    this.showImages = (this.ExibirImagens.toLowerCase() == "true");
    this.ExibirImagens = null;
  } else this.showImages = true;

  if (this.TamanhoDasImagens && this.TamanhoDasImagens.length) {
    this.imagesSize = this.TamanhoDasImagens.trim();
    if (this.TamanhoDasImagens.indexOf("%") == -1 &&
      this.TamanhoDasImagens.indexOf("px") == -1 &&
      this.TamanhoDasImagens.indexOf("pt") == -1 &&
      this.TamanhoDasImagens.indexOf("rem") == -1 &&
      this.TamanhoDasImagens.indexOf("vw") == -1 &&
      this.TamanhoDasImagens.indexOf("vh") == -1) {
      this.imagesSize += "%";
    }

    this.TamanhoDasImagens = null;
  } else this.imagesSize = "25%";

  if (this.ExibirTitulos && this.ExibirTitulos.length) {
    this.showTitles = (this.ExibirTitulos.toLowerCase() == "true");
    this.ExibirTitulos = null;
  } else this.showTitles = true;

  if (this.ExibirDescricoes && this.ExibirDescricoes.length) {
    this.showDescriptions = (this.ExibirDescricoes.toLowerCase() == "true");
    this.ExibirDescricoes = null;
  } else this.showDescriptions = true;

  if (this.TamanhoMaxDescricao && this.TamanhoMaxDescricao.length) {
    this.maxDescriptionSize = parseInt(this.TamanhoMaxDescricao);
    this.TamanhoMaxDescricao = null;
  } else this.maxDescriptionSize = 0;

  if (this.ExibirDataDePublicacao && this.ExibirDataDePublicacao.length) {
    this.showPubDates = (this.ExibirDataDePublicacao.toLowerCase() == "true");
    this.ExibirDataDePublicacao = null;
  } else this.showPubDates = true;

  if (this.novaaba && this.novaaba.length) {
    this.linksInNewTab = (this.novaaba.toLowerCase() == "true");
    this.novaaba = null;
  } else this.linksInNewTab = true;

  if (this.Estilo) {
    switch (this.Estilo) {
      case 0: case "0": this.style = 0; break; // Padr�o (Bootstrap Media)
      case 1: case "1": this.style = 1; break; // Cart�o (Bootstrap Card)
      default: this.style = 0; break;
    }

    this.Estilo = null;
  } else this.style = 0;

  if (this.ModoDeExibicao) {
    switch (this.ModoDeExibicao) {
      case 0: case "0": this.viewMode = 0; break; // Animado
      case 1: case "1": this.viewMode = 1; break; // Barra de Rolagem
      case 2: case "2": this.viewMode = 2; break; // Livre
      default: this.viewMode = 0; break;
    }

    this.ModoDeExibicao = null;
  } else this.viewMode = 0;
  
  if (this.TamanhoMaxItens && this.TamanhoMaxItens.length) {
    this.itemsSize = this.TamanhoMaxItens.trim();
    if (this.TamanhoMaxItens.indexOf("%") == -1 &&
      this.TamanhoMaxItens.indexOf("px") == -1 &&
      this.TamanhoMaxItens.indexOf("pt") == -1 &&
      this.TamanhoMaxItens.indexOf("rem") == -1 &&
      this.TamanhoMaxItens.indexOf("vw") == -1 &&
      this.TamanhoMaxItens.indexOf("vh") == -1) {
      this.itemsSize += "%";
    }

    this.TamanhoMaxItens = null;
  } else this.itemsSize = "100%";

  if (this.tempo && this.tempo.length) {
    this.animationTime = parseInt(this.tempo);
    this.tempo = null;
  } else this.animationTime = 0;

  if (this.qtditem && this.qtditem.length) {
    this.animationItemAmount = parseInt(this.qtditem);
    this.qtditem = null;
  } else this.animationItemAmount = 0;

  // Importar o moment.js
  webrun.include("assets/moment.min.js");

  // Preparar o locale do Moment
  var definedLocale = resources_locale.toLowerCase();
  if (definedLocale == 'en_us') this.locale = 'en';
  else if (definedLocale == 'pt_br') this.locale = 'pt-br';
  else if (definedLocale == 'es_es') this.locale = 'es';
  else if (definedLocale == 'fr_fr') this.locale = 'fr';
  else this.locale = 'en';

  // Definir o locale do Moment
  moment.locale(this.locale);

  // Criar a div do scroll.
  this.scrollDiv = document.createElement("div");

  // Verificar o modo de visualiza��o.
  switch (this.viewMode) {
    case 0: // Animado
      this.scrollDivClass = "position-relative w-100 h-100 overflow-hidden"; // Bootstrap
      break;
    case 1: // Barra de Rolagem
      this.scrollDivClass = "position-relative w-100 h-100 overflow-auto"; // Bootstrap
      break;
    default: // Livre
      this.scrollDivClass = "position-relative w-100 h-auto"; // Bootstrap
      break;
  }

  if (!this.itemsSize || this.itemsSize != "100%") {
    this.scrollDivClass += " d-flex flex-row flex-wrap"; // Bootstrap
  }

  this.scrollDiv.className = this.scrollDivClass;
  this.div.appendChild(this.scrollDiv);

  // Criar o loader do RSS.
  this.preloader = document.createElement("div");
  this.preloader.className = "d-none"; // Bootstrap
  this.preloaderClass = "spinner-border text-primary"; // Bootstrap
  this.preloader.setAttribute("role", "status");
  this.div.appendChild(this.preloader);

  var preloaderSpan = document.createElement("span");
  preloaderSpan.className = "sr-only"; // Bootstrap
  preloaderSpan.innerHTML = getLocaleMessage("LABEL.LOADING") + "...";
  this.preloader.appendChild(preloaderSpan);

  // Exibir preloader.
  this.showPreloader();
};

/*
 * Ocorre quando o formul�rio termina de carregar.
 */
HTMLRssFeed.prototype.onFormLoadAction = function() {
  // Atualizar dados do feed RSS.
  this.updateData();
};

/*
 * Ocorre ap�s a inicializa��o do componente.
 */
HTMLRssFeed.prototype.afterInit = function() {
  this.callMethod(HTMLElementBase, "afterInit", []);

  // Obter a aba relacionada a esse componente.
  if (this.tab) {
    var object = this;

    // Adicionar callback a aba.
    this.tab.addShownListener(function(tabPane) {
      // Parar anima��o atual.
      $(object.scrollDiv).stop();

      // Obter o scroll do elemento que deve ser focado.
      object.targetScroll = (object.feedItems && object.feedItems.length > 0 &&
        object.animationCurrentIndex >= 0 && object.animationCurrentIndex < object.feedItems.length) ?
        object.feedItems[object.animationCurrentIndex].div.offsetTop : 0;

      // Definir scroll diretamente.
      object.scrollDiv.scrollTop = object.targetScroll;
    });
  }
};

/**
 * Obt�m a URL base dos pedidos do RSS.
 **/
HTMLRssFeed.prototype.getRequestURL = function() {
  return getAbsolutContextPath() + "componentData.do?action=componentData&sys=" + URLEncode(this.sys, 'GET') +
    "&formID=" + URLEncode(this.formID, 'GET') + "&comID=" + URLEncode(this.code, 'GET');
};

/**
 * Realiza o pedido para o servidor para obter o feed RSS.
 **/
HTMLRssFeed.prototype.updateData = function() {
  // Exibir preloader.
  this.showPreloader();

  // Resetar feed.
  this.feedItems = [];
  this.scrollDiv.innerHTML = "";
  this.stopAnimation();

  // Enviar pedido para o Webrun para obter o feed RSS.
  var object = this;
  $.ajax({
    url: this.getRequestURL(),
    type: "POST",
    data: {
      url: this.url,
      charset: this.Charset
    }, dataType: "xml",
    success: function(data) {
      if (data && data.documentElement) {
        $(data).find("item").each(function() {
          // Desenhar o item da not�cia.
          object.feedItems.push(object.designItem($(this)));
        });

        // Esconder preloader.
        object.hidePreloader();

        // Verificar se o modo de visualiza��o � animado.
        if (object.viewMode == 0) {
          // Iniciar anima��o depois de desenhar os itens.
          object.startAnimation();
        }
      } else {
        // Esconder preloader.
        object.hidePreloader();
      }
    }, error: function() {
      // Esconder preloader.
      object.hidePreloader();
    }
  });
};

/**
 * Exibe o preloader do feed RSS.
 **/
HTMLRssFeed.prototype.showPreloader = function() {
  if (this.scrollDiv) this.scrollDiv.className = "d-none"; // Bootstrap
  if (this.preloader) this.preloader.className = this.preloaderClass;
  if (this.div) this.div.className = this.divClass + " d-flex align-items-center justify-content-center"; // Bootstrap
};

/**
 * Oculta o preloader do feed RSS.
 **/
HTMLRssFeed.prototype.hidePreloader = function() {
  if (this.scrollDiv) this.scrollDiv.className = this.scrollDivClass;
  if (this.preloader) this.preloader.className = "d-none"; // Bootstrap
  if (this.div) this.div.className = this.divClass;
};

/**
 * Para a anima��o do feed.
 **/
HTMLRssFeed.prototype.stopAnimation = function() {
  if (this.animationInterval) {
    clearInterval(this.animationInterval);
    this.animationInterval = null;
  }
};

/**
 * Iniciar a anima��o do feed.
 **/
HTMLRssFeed.prototype.startAnimation = function() {
  if (this.animationTime > 0) {
    var object = this;

    this.animationInterval = setInterval(function() {
      object.animationTick();
    }, (this.animationTime * 1000) + ((this.animationTime * 1000) / 3));

    this.animationOldIndex = 0;
    this.animationCurrentIndex = -this.animationItemAmount;
    this.animationTick();
  }
};

/**
 * Ocorre a cada tick da anima��o.
 **/
HTMLRssFeed.prototype.animationTick = function() {
  if (!this.enabled) return;

  // Avan�ar para o pr�ximo elemento.
  this.animationOldIndex = this.animationCurrentIndex;
  this.animationCurrentIndex = (this.animationCurrentIndex + this.animationItemAmount) % this.feedItems.length;

  // Obter o scroll do elemento que deve ser focado.
  this.targetScroll = this.feedItems[this.animationCurrentIndex].div.offsetTop;

  // Quando o index antigo for maior, quer dizer que ele voltou pro come�o.
  if (this.animationOldIndex > this.animationCurrentIndex) {
    this.animationOldIndex = 0;
    this.animationCurrentIndex = 0;
    this.targetScroll = 0;
  }

  // Animar scroll do feed.
  $(this.scrollDiv).animate({
    scrollTop: this.targetScroll
  }, (this.animationTime * 1000) / 3);
};

/**
 * Remove as tags HTML de um texto.
 * Alguns feeds RSS costumam botar tags HTML na descri��o dos items.
 * Essas tags devem ser removidas para n�o ocorrer nenhum problema no layout do mesmo.
 * @param html - Texto para remover as tags HTML.
 **/
HTMLRssFeed.prototype.getTextValue = function(html) {
  if (!html || html.length == 0) return "";
  var tmp = document.createElement("div");
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || $(tmp).text());
};

/**
 * Limita o tamanho de um texto e adiciona uma ellipsis no final (...)
 **/
HTMLRssFeed.prototype.truncateWithEllipses = function(text, max)  {
  if (!text || text.length == 0) return "";
  return text.substr(0, max - 1) + (text.length > max ? '&hellip;' : ''); 
};

/**
 * Respons�vel por desenhar o HTML de uma not�cia.
 * @param element - Refer�ncia para o elemento XML da not�cia.
 **/
HTMLRssFeed.prototype.designItem = function(element) {
  // Criar div base da not�cia (card/media).
  var mediaDiv = document.createElement("div");
  mediaDiv.className = ((this.style == 1) ? "card" : "media") + " position-relative mb-3" + // Bootstrap
    ((!this.itemsSize || this.itemsSize != "100%") ? " mr-3" : ""); // Bootstrap
  if (this.itemsSize && this.itemsSize != "100%") mediaDiv.style.maxWidth = this.itemsSize;
  this.scrollDiv.appendChild(mediaDiv);

  // Verificar se o feed deve exibir imagens
  if (this.showImages) {
    var elementMedia = element.find("media\\:content");
    if (elementMedia && elementMedia.attr("url")) {
      // Criar imagem da not�cia.
      var mediaImage = document.createElement("img");
      mediaImage.className = (this.style == 1) ? "card-img-top" : "mr-3"; // Bootstrap
      if (this.style == 0 && this.imagesSize) mediaImage.style.maxWidth = this.imagesSize;
      mediaImage.src = elementMedia.attr("url");
      mediaDiv.appendChild(mediaImage);
    }
  }

  // Criar corpo do media/card.
  var mediaBody = document.createElement("div");
  mediaBody.className = (this.style == 1) ? "card-body" : "media-body"; // Bootstrap
  mediaDiv.appendChild(mediaBody);

  // Verificar se o feed deve exibir os t�tulos.
  if (this.showTitles) {
    // Obter o t�tulo da not�cia.
    var elementTitle = element.find("title");
    if (elementTitle) { // Se n�o tiver t�tulo, n�o criar.
      // Criar o elemento do t�tulo.
      var newsTitle = document.createElement("h5");
      newsTitle.className = (this.style == 1) ? "card-title" : "mt-0"; // Bootstrap
      newsTitle.innerHTML = this.getTextValue(elementTitle.text());
      mediaBody.appendChild(newsTitle);
    }
  }

  // Verificar se o feed deve exibir as descri��es.
  if (this.showDescriptions) {
    // Obter a descri��o da not�cia.
    var elementDescription = element.find("description");
    if (elementDescription) { // Se n�o tiver descri��o, n�o criar.
      // Criar o elemento da descri��o.
      var newsDescription = document.createElement("p");
      newsDescription.className = (this.style == 1) ? "card-text" : "mb-0"; // Bootstrap

      // Remover as tags HTML da descri��o.
      var descriptionContent = this.getTextValue(elementDescription.text());

      // Verificar se o feed deve restringir o conte�do da descri��o
      if (this.maxDescriptionSize > 0) {
        descriptionContent = this.truncateWithEllipses(descriptionContent, this.maxDescriptionSize);
      }

      newsDescription.innerHTML = descriptionContent;
      mediaBody.appendChild(newsDescription);
    }
  }

  // Verificar se o feed deve exibir as datas de publica��o.
  if (this.showPubDates) {
    var elementDate = element.find("pubDate");
    if (elementDate) { // Se n�o tiver data de publica��o, n�o criar.
      // Criar o elemento da data de publica��o.
      var newsTime = document.createElement("small");
      newsTime.className = "text-muted mt-2"; // Bootstrap

      // Tentar usar o moment para interpretar a data e formatar adequadamente.
      try {
        // Tentar dar parse na data.
        var momentDate = moment(elementDate.text(), this.pubDateFormats);

        // Verificar se data est� v�lida.
        if (momentDate.isValid()) {
          newsTime.innerHTML = momentDate.local().fromNow();
        } else {
          // Tentar usar o Date do javascript e depois o moment.
          momentDate = moment(Date.parse(elementDate.text()));
          if (momentDate.isValid()) newsTime.innerHTML = momentDate.local().fromNow();
          else newsTime.innerHTML = elementDate.text(); // Utilizar a data como est�.
        }
      }

      // Se falhar, utilizar a data como est�.
      catch (e) { newsTime.innerHTML = elementDate.text(); }

      mediaBody.appendChild(newsTime);
    }
  }

  // Obter o link da not�cia.
  var elementLink = element.find("link");
  if (elementLink) { // Se n�o tiver link definido, n�o criar.
    // Criar elemento do link.
    var newsLink = document.createElement("a");
    newsLink.className = "stretched-link"; // Bootstrap
    newsLink.href = elementLink.text();

    // Se � pro link abrir em uma nova aba, define o target como "_blank".
    if (this.linksInNewTab) newsLink.setAttribute("target", "_blank");
    mediaBody.appendChild(newsLink);
  }

  return { div: mediaDiv, divClass: mediaDiv.className };
};
