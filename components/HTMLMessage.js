/**
 * Método Construtor do HTMLMessage.
 **/
function HTMLMessage(title, message, timer, type, alignment, confirmButton, cancelButton) {
  this.code = Math.floor(Math.random() * 1000000) + 1;
  this.title = title;
  this.message = message;
  this.timer = timer;
  this.cancelButton = (cancelButton != null) ? cancelButton : true;
  this.cancelButtonDiv = null;
  this.confirmButton = (confirmButton != null) ? confirmButton : true;
  this.confirmButtonDiv = null;
  this.inputText = false;
  this.inputPlaceholder = null;
  this.details = null;
  this.type = type;
  this.callOk = null;
  this.callCancel = null;
  this.alignment = alignment;
  this.modalDiv = null;
  this.shown = false;
}

HTMLMessage.prototype.name = 'HTMLMessage';

// Função de mostar um modal de alerta
HTMLMessage.prototype.showWarningMessage = function(title, message, timer, alignment) {
  // Tratar parametro avançado "DefinirTempoPosicao"
  alignment = (this.checkNullOrEmpty(alignment)) ? messageConfig["position"] : alignment;
  timer = (timer == 0 || this.checkNullOrEmpty(timer)) ? messageConfig["timer"] : timer;

  this.alignment = alignment;
  this.title = (title === undefined || title === null) ? "" : title;
  this.message = message;
  this.type = "Warning";
  this.cancelButton = false;
  this.inputText = false;

  if (timer) {
    this.confirmButton = false;
    this.timer = (timer * 1000);
  }

  if (!showMessageAsLegacy) this.showWithSweetAlert(this.type.toLowerCase())
  else this.showMessage();
};

// Função de mostar um modal de alerta
HTMLMessage.prototype.showSuccessMessage = function(title, message, timer, alignment) {
  // Tratar parametro avançado "DefinirTempoPosicao"
  alignment = (this.checkNullOrEmpty(alignment)) ? messageConfig["position"] : alignment;
  timer = (timer == 0 || this.checkNullOrEmpty(timer)) ? messageConfig["timer"] : timer;

  this.alignment = alignment;
  this.title = (title === undefined || title === null) ? "" : title;
  this.message = message;
  this.type = "Success";
  this.cancelButton = false;
  this.inputText = false;

  if (timer) {
    this.confirmButton = false;
    this.timer = (timer * 1000);
  }

  if (!showMessageAsLegacy) this.showWithSweetAlert(this.type.toLowerCase())
  else this.showMessage();
};

// Função de mostar um modal de informação
HTMLMessage.prototype.showInfoMessage = function(title, message, timer, alignment, extended) {
  // Tratar parametro avançado "DefinirTempoPosicao"
  alignment = (this.checkNullOrEmpty(alignment)) ? messageConfig["position"] : alignment;
  timer = (timer == 0 || this.checkNullOrEmpty(timer)) ? messageConfig["timer"] : timer;

  this.alignment = alignment;
  this.title = (title === undefined || title === null) ? "" : title;
  this.message = message;
  this.type = "Info";
  this.cancelButton = false;
  this.inputText = false;
  this.extended = extended;

  if (timer) {
    this.confirmButton = false;
    this.timer = (timer * 1000);
  }

  if (!showMessageAsLegacy) this.showWithSweetAlert(this.type.toLowerCase());
  else this.showMessage();
};

// Função de mostar um modal de erro
HTMLMessage.prototype.showErrorMessage = function(title, message, timer, details, alignment, extended) {
  // Tratar parametro avançado "DefinirTempoPosicao"
  alignment = (this.checkNullOrEmpty(alignment)) ? messageConfig["position"] : alignment;
  timer = (timer == 0 || this.checkNullOrEmpty(timer)) ? messageConfig["timer"] : timer;

  document.hasRuleErrors = true;
  document.hasRuleException = true;
  this.alignment = alignment;
  this.title = (title === undefined || title === null) ? "" : title;
  this.details = (details === undefined || details === null) ? "" : details;
  this.message = message;
  this.type = "Error";
  this.timer = timer;
  this.inputText = false;
  this.extended = extended;

  if (timer) {
    this.timer = (timer * 1000);
    this.confirmButton = false;
    this.cancelButton = false;
  } else {
    this.confirmButton = true;
    this.cancelButton = false;
  }

  if (!showMessageAsLegacy) this.showWithSweetAlert(this.type.toLowerCase());
  else this.showMessage();
};

// Função de mostar um modal que requer entrada de dados
HTMLMessage.prototype.showPromptMessage = function(title, message, placeholder, funcOk, paramsOk, funcCancel, paramsCancel) {
  this.title = (title === undefined || title === null) ? "" : title;
  this.message = message;
  this.inputPlaceholder = placeholder;
  this.inputText = true;
  this.callOk = funcOk;
  this.callCancel = funcCancel;
  this.type = "Prompt";

  this.paramsOk = (paramsOk !== undefined && paramsOk !== null) ? paramsOk : [];
  this.paramsCancel = (paramsCancel !== undefined && paramsCancel !== null) ? paramsCancel : [];

  if (!showMessageAsLegacy) this.embeddedSweetalert('question', "");
  else this.showMessage();
};

// Função de mostar um modal que requer uma confirmação do usuário
HTMLMessage.prototype.showInteractionConfirmMessage = function(title, message, funcOk, paramsOk, funcCancel, paramsCancel, alignment, labelOk, labelCancel) {
  this.alignment = alignment;
  this.title = (title === undefined || title === null) ? "" : title;
  this.message = message;
  this.inputText = false;
  this.callOk = funcOk;
  this.callCancel = funcCancel;
  this.type = "Interaction";

  this.paramsOk = (paramsOk !== undefined && paramsOk !== null) ? paramsOk : [];
  this.paramsCancel = (paramsCancel !== undefined && paramsCancel !== null) ? paramsCancel : [];

  if (!showMessageAsLegacy) this.embeddedSweetalert('warning', 'interaction');
  else this.showMessage();

  if (labelOk && this.confirmButtonDiv) this.confirmButtonDiv.innerHTML = labelOk;
  if (labelCancel && this.cancelButtonDiv) this.cancelButtonDiv.innerHTML = labelCancel;
};

// Evento de clique do botão de confirmar
HTMLMessage.prototype.clickOk = function(div, params, type) {
  // Verificar se o modal tem um evento associado ao botão de confirmar
  if (this.callOk) {
    // Obter os parâmetros do evento
    var paramsTwo;
    if (params) {
      paramsTwo = new Array();
      for (i = 0; i < params.length; i++) {
        paramsTwo.push(params[i]);
      }
    }

    // Verificar se os parâmetros foram associados
    if (paramsTwo) {
      if (type === "Prompt") { // Modal que requer entrada de dados
        // Obter o valor do input do modal
        paramsTwo[0] = this.modalInput.value;
      } else if (type === "Interaction") { // Modal que requer confirmação do usuário
        // Esse evento é do botão confirmar, então o parâmetro tem que ser "true"
        paramsTwo[0] = "true";
      }
    }

    // Fechar o modal
    this.closeMessage(div);

    // Verificar se o parâmetro passado é uma função.
    if (typeof this.callOk === "function") {
      // Executar a função associada à esse evento
      this.callOk.apply(this, paramsTwo);
    } else {
      // Executar o fluxo associada à esse evento
      ebfFlowExecute(this.callOk, paramsTwo);
    }
  } else {
    // Fechar o modal
    this.closeMessage(div);
  }

  if (this.callFunctionComponent) {
    if (this.callFunctionComponentParams) {
      this.callFunctionComponent.apply(window, this.callFunctionComponentParams);
    } else {
      this.callFunctionComponent.call(window);
    }
  }

  return true;
};

// Evento de clique do botão de cancelar
HTMLMessage.prototype.clickCancel = function(div, params, type) {
  // Verificar se o modal tem um evento associado ao botão de cancelar
  if (this.callCancel) {
    // Obter os parâmetros do evento
    var paramsTwo;
    if (params) {
      paramsTwo = new Array();
      for (i = 0; i < params.length; i++) {
        paramsTwo.push(params[i]);
      }
    }

    // Verificar se os parâmetros foram associados
    if (paramsTwo) {
      if (type === "Prompt") { // Modal que requer entrada de dados
        // Esse evento é do botão cancelar, então o parâmetro tem que ser vazio
        paramsTwo[0] = "";
      } else if (type === "Interaction") {
        // Esse evento é do botão cancelar, então o parâmetro tem que ser "false"
        paramsTwo[0] = "false";
      }
    }

    // Fechar o modal
    this.closeMessage(div);

    // Verificar se o parâmetro passado é uma função.
    if (typeof this.callCancel === "function") {
      // Executar a função associada à esse evento
      this.callCancel.apply(this, paramsTwo);
    } else {
      // Executar o fluxo associada à esse evento
      ebfFlowExecute(this.callCancel, paramsTwo);
    }
  } else {
    // Fechar o modal
    this.closeMessage(div);
  }

  return false;
};

/**
 * Método responsável pela criação de todas as mensagens em tela;
 **/
HTMLMessage.prototype.showMessage = function() {
  // Variável importante para eventos externos.
  var object = this;
  this.checkBody();

  try {
    if ((mainform.parent.parent.document.getElementById("tab0") && this.timer != 0 && this.alignment != null && this.alignment.length > 0)) {
      var showMsg = new mainform.parent.parent.HTMLMessage(this.title, this.message, this.timer, this.type, this.alignment, this.confirmButton, this.cancelButton);
      showMsg.showMessage();
      return;
    } else if (!isPopup) {
      // Quando o formulário estiver fechando, fechar todos os modals/toasts abertos.
      var locationMessage = $mainform();
      if (locationMessage) locationMessage.document.body.setAttribute("onunload",
        "$('.message-modal').modal('hide');" +
        "$('.message-toast').toast('hide');");
    }
  } catch (e) { }

  // Verificar se o alerta tem alinhamento
  // NOTA: Para mensagens que tem alinhamento definido, usamos o elemento
  // toast do Bootstrap (https://getbootstrap.com/docs/4.3/components/toasts/)
  // e para mensagens sem alinhamento, o modal (https://getbootstrap.com/docs/4.3/components/modal/)
  if (this.alignment && this.alignment.length > 0) {
    // Definir o alinhamento para criar o contexto (toast container)
    this.context = null;
    this.setAlignment(this.alignmet);

    // Verificar se o contexto foi criado ou já existia e se o toast não foi criado
    // Se o contexto não existir, quer dizer que o alinhamento definido é inválido
    if (this.context && !this.toastDiv) {
      this.toastDiv = this.doc.createElement("div");
      this.toastDiv.className = "toast message-toast"; // Bootstrap
      this.toastDiv.id = "toast" + this.code;
      this.toastDiv.setAttribute("role", "alert");
      this.toastDiv.setAttribute("data-autohide", "false"); // Bootstrap
      this.toastDiv.setAttribute("data-delay", "1000"); // Bootstrap
      this.toastDiv.style.pointerEvents = "all";

      // Cria o elemento da header do toast
      this.toastHeader = this.doc.createElement("div");
      this.toastHeader.className = "toast-header"; // Bootstrap
      this.toastDiv.appendChild(this.toastHeader);

      // Estilizar o header do toast de acordo com o tipo da mensagem
      if (this.type == "Error") {
        this.toastHeader.className += " bg-danger text-white"; // Bootstrap
      } else if (this.type == "Warning") {
        this.toastHeader.className += " bg-warning text-dark"; // Bootstrap
      } else if (this.type == "Prompt") {
        this.toastHeader.className += " bg-info text-white"; // Bootstrap
      } else if (this.type == "Success") {
        this.toastHeader.className += " bg-success text-white"; // Bootstrap
      }

      // Cria o título do toast, se tiver
      if (this.title) {
        this.toastTitle = this.doc.createElement("strong");
        this.toastTitle.className = "mr-auto"; // Bootstrap
        this.toastTitle.id = "toastTitle" + this.code;
        this.toastTitle.innerHTML = this.title;
        if (this.extended === true) {
          this.toastTitle.style.whiteSpace = "normal";
          this.toastTitle.className += " p-1"; // Bootstrap
        }

        this.toastHeader.appendChild(this.toastTitle);
      }

      // Por ser um toast, exibimos a quantidade de tempo
      // que ele está em exibição na sua header
      try {
        if (!this.doc.momentImported) {
          // Importar o moment.js
          webrun.include("assets/moment.min.js");

          // Define o idioma do moment
          var lang = resources_locale.replace("_", "-");
          if (lang.indexOf("en") != -1) lang = "en";
          else if (lang.indexOf("es") != -1) lang = "es";
          else if (lang.indexOf("fr") != -1) lang = "fr";
          moment.locale(lang);

          this.doc.momentImported = true;
        }

        // Obter o horário de exibição do toast
        var startTime = moment();

        // Cria o label de tempo do toast
        this.toastTimestamp = this.doc.createElement("small");
        this.toastTimestamp.className = "pl-2 ml-auto"; // Bootstrap
        this.toastTimestamp.innerHTML = moment(startTime).fromNow();
        this.toastHeader.appendChild(this.toastTimestamp);

        // Cria o timer do label de tempo
        this.toastTimer = setInterval(function () {
          if (object.toastTimestamp) object.toastTimestamp.innerHTML = moment(startTime).fromNow();
        }, 5000); // A cada 5s
      } catch(e) { }

      // Verificar se a mensagem tem tempo
      if (this.timer) {
        this.toastProgressBarBase = this.doc.createElement("div");
        this.toastProgressBarBase.className = "progress w-100"; // Bootstrap
        this.toastProgressBarBase.style.height = "2px";
        this.toastDiv.appendChild(this.toastProgressBarBase);
        this.toastHeader.style.borderBottom = "0";

        this.toastProgressBar = this.doc.createElement("div");
        this.toastProgressBar.className = "progress-bar bg-secondary"; // Bootstrap
        this.toastProgressBar.id = "toastProgressBar" + this.code;
        this.toastProgressBar.style.width = "100%";
        this.toastProgressBar.setAttribute("role", "progressbar");
        this.toastProgressBar.setAttribute("aria-valuenow", "0"); // Accessibility
        this.toastProgressBar.setAttribute("aria-valuemin", "0"); // Accessibility
        this.toastProgressBar.setAttribute("aria-valuemax", "100"); // Accessibility
        this.toastProgressBarBase.appendChild(this.toastProgressBar);

        // Obter o tempo inicial
        var startTime = new Date();

        // Criar o timer para atualizar a barra de progresso
        var updateProgressBar = function() {
          setTimeout(function() {
            if (object.toastProgressBar) {
              var currentTime = new Date();
              var elapsedMilliseconds = currentTime - startTime; // Milisegundos passados
              var percent = 100 - ((elapsedMilliseconds / object.timer) * 100); // Tirar porcentagem
              object.toastProgressBar.style.width = percent + "%";
              object.toastProgressBar.setAttribute("aria-valuenow", percent); // Accessibility
              if (percent > 0) updateProgressBar();
            }
          }, 100);
        };

        updateProgressBar();

        // Criar o timer
        setTimeout(function() {
          try { object.clickCancel([object.toastDiv], object.paramsCancel, object.type); } catch (e) { }
        }, this.timer);
      } else {
        // Criar o botão de fechar do toast
        this.toastClose = this.doc.createElement("button");
        this.toastClose.type = "button";
        this.toastClose.id = "toastButton" + this.code;
        this.toastClose.className = "ml-2 mb-1 close"; // Bootstrap
        this.toastClose.setAttribute("aria-label", getLocaleMessage("LABEL.CLOSE"));
        this.toastClose.style.outline = "0";
        this.toastClose.style.zIndex = "1";
        this.toastClose.innerHTML = '<span aria-hidden="true">&times;</span>';
        this.toastHeader.appendChild(this.toastClose);

        // Evento de clique do botão de fechar
        this.toastClose.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          object.closeMessage();
          return false;
        };

        // Adicionar evento na página
        this.documentKeyDown = this.doc.body.onkeydown; // Importante para progressão do evento
        this.doc.body.onkeydown = function(evt) {
          if (evt && (evt.which === 27 || evt.code === "Escape")) { // ESC
            object.doc.body.onkeydown = object.documentKeyDown; // Voltar para o key down que estava antes
            try { object.clickOk([object.modalDiv], object.paramsCancel, object.type); } catch (e) { }
          }
        };
      }

      // Cria o corpo do toast, se tiver conteúdo
      if (this.message) {
        this.toastBody = this.doc.createElement("div");
        this.toastBody.className = "toast-body"; // Boostrap
        this.toastBody.innerHTML = this.message.replace(/\n+/g, '<br>');
        this.toastDiv.appendChild(this.toastBody);
      }

      // Evento de clique do toast
      if (this.callClick) {
        this.toastDiv.onclick = this.callClick;
        if (this.toastTitle) this.toastTitle.onclick = this.callClick;
        if (this.toastIcon) this.toastIcon.onclick = this.callClick;
        if (this.toastTimestamp) this.toastTimestamp.onclick = this.callClick;
        this.toastDiv.style.cursor = "pointer";
      }

      // Adiciona o toast à página
      this.context.appendChild(this.toastDiv);

      // Exibir o toast
      $('#toast' + this.code).toast('show');

      // Evento de abrir do toast
      $('#toast' + this.code).on('shown.bs.toast', function(e) {
        object.shown = true;
        if (object.closeRequired === true) {
          object.closeMessage();
        }
      });

      // Evento de fechar do toast
      $('#toast' + this.code).on('hidden.bs.toast', function() {
        object.shown = false;

        // Deletar o timer, se ele existir
        if (object.toastTimer) {
          clearInterval(object.toastTimer);
          object.toastTimer = null;
        }

        // Deletar o toast da página
        $(this).toast('dispose');
        $(this).remove();

        // Limpar as variáveis
        object.toastDiv = null;
        object.toastHeader = null;
        object.toastIcon = null;
        object.toastTitle = null;
        object.toastTimestamp = null;
        object.toastClose = null;
      });

      return;
    }
  }

  var btcontentCancel, btcontentOk;

  // Procurar pelo texto do botão "Cancelar" nos locales
  try { btcontentCancel = $mainform().getLocaleMessage("LABEL.CANCEL"); }
  catch (e) { btcontentCancel = "Cancel"; }

  // Procurar pelo texto do botão "Ok" nos locales
  try { btcontentOk = $mainform().getLocaleMessage("LABEL.OK"); }
  catch (f) { btcontentOk = "Ok"; }

  // Criar o modal do bootstrap.
  var modal = bootstrapCreateModal();

  // Obter a div do modal.
  this.modalDiv = modal[0];
  this.modalDiv.className += " message-modal"; // Custom

  this.shown = true;
  if (this.closeRequired === true) {
    this.closeMessage();
  }

  // Evento de fechar do modal (importante para deletá-lo da página após a sua finalização)
  $(this.modalDiv).on("hidden.bs.modal", function(e) {
    if (object.shown) object.closeMessage();
    object.shown = false;
  });

  // Verificar se o modal tem tempo.
  if (this.timer) {
    // Criar barra de progesso (usada quando o modal tem tempo de exibição).
    var modalProgress = document.createElement("div");
    modalProgress.className = "progress w-100"; // Bootstrap
    modalProgress.style.height = "2px";
    modal[2].parentElement.insertBefore(modalProgress, modal[2])

    this.modalProgressInner = document.createElement("div");
    this.modalProgressInner.className = "progress-bar bg-secondary rounded-0"; // Bootstrap
    this.modalProgressInner.id = "modalProgressBar" + this.code;
    this.modalProgressInner.style.width = this.timer + "%";
    this.modalProgressInner.style.height = "2px";
    this.modalProgressInner.setAttribute("role", "progressbar");
    this.modalProgressInner.setAttribute("aria-valuenow", this.timer.toString());
    this.modalProgressInner.setAttribute("aria-valuemin", "0");
    this.modalProgressInner.setAttribute("aria-valuemax", "100");
    modalProgress.appendChild(this.modalProgressInner);
  }

  // Alterar o estilo cabeçalho do modal.
  modal[1].className += " border-bottom-0"; // Bootstrap
  modal[1].style.padding = "0.8rem";

  // Criar elemento media no corpo do modal.
  var mediaDiv = document.createElement("div");
  mediaDiv.className = "media px-2 py-1"; // Bootstrap
  modal[2].appendChild(mediaDiv);

  // Criar ícone do modal.
  var iconSpan = document.createElement("span");

  switch (this.type) {
    case "Error":
      // Estilizar a cor do cabeçalho do modal.
      modal[1].className += " bg-danger"; // Bootstrap

      // Definir o ícone do modal.
      iconSpan.className = "fas fa-times text-danger"; // Font Awesome - Bootstrap
      break;
    case "Warning":
      // Estilizar a cor do cabeçalho do modal.
      modal[1].className += " bg-warning"; // Bootstrap

      // Definir o ícone do modal.
      iconSpan.className = "fas fa-exclamation-triangle text-warning"; // Font Awesome - Bootstrap
      break;
    case "Success":
      // Estilizar a cor do cabeçalho do modal.
      modal[1].className += " bg-success"; // Bootstrap

      // Definir o ícone do modal.
      iconSpan.className = "fas fa-check text-success"; // Font Awesome - Bootstrap
      break;
    case "Prompt":
    case "Interaction":
      // Estilizar a cor do cabeçalho do modal.
      modal[1].className += " bg-primary"; // Bootstrap

      // Definir o ícone do modal.
      iconSpan.className = "fas fa-question-circle text-primary"; // Font Awesome - Bootstrap
      break;
    default:
      // Estilizar a cor do cabeçalho do modal.
      modal[1].className += " bg-dark"; // Bootstrap
      break;
  }

  if (iconSpan.className && iconSpan.className.length > 0)
    iconSpan.className += " align-self-start ml-2 mr-4"; // Bootstrap
  iconSpan.style.fontSize = "3rem";
  mediaDiv.appendChild(iconSpan);

  // Criar corpo do elemento media.
  var mediaBody = this.doc.createElement("div");
  mediaBody.className = "media-body"; // Bootstrap
  mediaDiv.appendChild(mediaBody);

  // Verificar se o modal tem título definido.
  if (this.title && this.title.length > 0) {
    // Criar título do modal.
    var modalTitle = this.doc.createElement("h5");
    modalTitle.className = "mt-0 text-wrap"; // Bootstrap
    modalTitle.style.wordBreak = "break-word";
    modalTitle.innerHTML = this.title;
    mediaBody.appendChild(modalTitle);
  }

  // Verificar se o modal tem mensagem.
  if (this.message && this.message.length > 0) {
    // Criar elemento da mensagem do modal.
    var modalMessage = this.doc.createElement("p");
    modalMessage.className = "text-wrap"; // Bootstrap
    modalMessage.style.wordBreak = "break-word";
    modalMessage.style.wordWrap  = "break-word";//IE
    modalMessage.innerHTML = this.message.replace(/\n+/g, '<br>');
    mediaBody.appendChild(modalMessage);
  }

  // Verificar se o modal tem detalhes.
  if (this.details && this.details.length > 0) {
    // Criar área de texto de detalhes do modal.
    var modalDetails = this.doc.createElement("textarea");
    modalDetails.className = "form-control"; // Bootstrap
    modalDetails.value = this.details;
    modalDetails.readOnly = true;
    modalDetails.style.fontSize = "0.7rem";
    modalDetails.style.minHeight = "30vh";
    mediaBody.appendChild(modalDetails);
  }

  // Verificar se o modal tem botão de cancelar.
  if (this.cancelButton) {
    // Criar botão de cancelar.
    this.cancelButtonDiv = this.doc.createElement("button");
    this.cancelButtonDiv.className = "btn " + (
      (this.type == "Error") ? "btn-danger" :
      (this.type == "Success") ? "btn-success" :
      (this.type == "Warning") ? "btn-warning text-white" :
      (this.type == "Prompt") ? "btn-dark" : "btn-primary");
    this.cancelButtonDiv.type = "button";
    this.cancelButtonDiv.id = "modalCancel" + this.code;
    this.cancelButtonDiv.innerHTML = btcontentCancel;
    modal[3].appendChild(this.cancelButtonDiv);

    // Associar evento de clique do botão cancelar
    this.cancelButtonDiv.onclick = function(e) {
      return object.clickCancel([object.modalDiv], object.paramsCancel, object.type);
    };
  }

  // Verificar se o modal tem botão de confirmar.
  if (this.confirmButton) {
    // Criar botão de cancelar.
    this.confirmButtonDiv = this.doc.createElement("button");
    this.confirmButtonDiv.className = "btn " + (
      (this.type == "Error") ? "btn-danger" :
      (this.type == "Success") ? "btn-success" :
      (this.type == "Warning") ? "btn-warning text-white" :
      (this.type == "Prompt") ? "btn-dark" : "btn-primary");
    this.confirmButtonDiv.type = "button";
    this.confirmButtonDiv.id = "modalConfirm" + this.code;
    this.confirmButtonDiv.innerHTML = btcontentOk;
    modal[3].appendChild(this.confirmButtonDiv);

    // Associar evento de clique do botão confirmar
    this.confirmButtonDiv.onclick = function(e) {
      return object.clickOk([object.modalDiv], object.paramsOk, object.type);
    };
  }

  // Verificar se o modal tem caixa de texto de entrada.
  if (this.inputText) {
    // Criar input (usado no tipo "Prompt" que requer entrada de dados)
    this.modalInput = this.doc.createElement("input");
    this.modalInput.className = "form-control"; // Bootstrap
    this.modalInput.type = "text";
    this.modalInput.id = "modalInput" + this.code;
    if (this.inputPlaceholder) this.modalInput.placeholder = this.inputPlaceholder;
    if (modalMessage) modalMessage.className += " mb-2"; // Bootstrap
    mediaBody.appendChild(this.modalInput);

    // Insere o foco no input.
    this.modalInput.focus();

    // Evento de tecla clicada no input do modal.
    if (this.confirmButton) {
      this.modalInput.onkeydown = function(evt) {
        if (evt && (evt.which === 13 || evt.code === "Enter")) { // ENTER
          try { object.clickOk([object.modalDiv], object.paramsOk, object.type); } catch (e) { }
        }
      };
    }
  } else {
    // Insere o foco nos botões
    if (this.cancelButton && this.cancelButtonDiv) this.cancelButtonDiv.focus();
    else if (this.confirmButton && this.confirmButtonDiv) this.confirmButtonDiv.focus();
  }

  // Evento na página (utilizado para fechar o modal ao clicar a tecla ESC)
  if (this.cancelButton) {
    this.documentKeyDown = this.doc.body.onkeydown; // Importante para progressão do evento
    this.doc.body.onkeydown = function(evt) {
      if (evt && (evt.which === 27 || evt.code === "Escape")) { // ESC
        object.doc.body.onkeydown = object.documentKeyDown; // Voltar para o key down que estava antes
        try { object.clickCancel([object.modalDiv], object.paramsCancel, object.type); } catch (e) { }
      }
    };
  } else if (this.confirmButton) {
    this.documentKeyDown = this.doc.body.onkeydown; // Importante para progressão do evento
    this.doc.body.onkeydown = function(evt) {
      if (evt && (evt.which === 27 || evt.code === "Escape")) { // ESC
        object.doc.body.onkeydown = object.documentKeyDown; // Voltar para o key down que estava antes
        try { object.clickOk([object.modalDiv], object.paramsCancel, object.type); } catch (e) { }
      }
    };
  }

  // Criar o timer do modal, se ele tiver tempo de exibição.
  if (this.timer) {
    // Obter o tempo inicial.
    var startTime = new Date();

    // Criar o timer para atualizar a barra de progresso.
    var updateProgressBar = function() {
      setTimeout(function() {
        if (object.modalProgressInner) {
          var currentTime = new Date();
          var elapsedMilliseconds = currentTime - startTime; // Milisegundos passados
          var percent = 100 - ((elapsedMilliseconds / object.timer) * 100); // Tirar porcentagem
          object.modalProgressInner.style.width = percent + "%";
          object.modalProgressInner.setAttribute("aria-valuenow", percent);
          if (percent > 0) updateProgressBar();
        }
      }, 100);
    };

    updateProgressBar();

    // Criar o timer
    setTimeout(function() {
      try { object.clickCancel([object.modalDiv], object.paramsCancel, object.type); } catch (e) { }
    }, this.timer);
  }

  var closeAllNotifies = this.closeAllNotifies;
};

HTMLMessage.prototype.setAlignment = function() {
  switch (this.alignment.toUpperCase()) {
    case 'DT': // Direita Topo ou Top Right
      // Verifica se o container de toasts na posição Top Right (TR) existe
      this.context = this.doc.getElementById("toast-container-tr");
      if (!this.context) {
        // Se não existir, criar o container de toasts
        this.context = this.doc.createElement("div");
        this.context.id = "toast-container-tr";
        this.context.className = "toast-container position-fixed mt-3 mr-3";
        this.context.style.pointerEvents = "none";
        this.context.style.top = "0px";
        this.context.style.right = "0px";
        this.doc.body.appendChild(this.context);
      }

      break;
    case 'ET': // Esquerda Topo ou Top Left
      // Verifica se o container de toasts na posição Top Left (TL) existe
      this.context = this.doc.getElementById("toast-container-tl");
      if (!this.context) {
        // Se não existir, criar o container de toasts
        this.context = this.doc.createElement("div");
        this.context.id = "toast-container-tl";
        this.context.className = "toast-container position-fixed mt-3 ml-3";
        this.context.style.pointerEvents = "none";
        this.context.style.top = "0px";
        this.context.style.left = "0px";
        this.doc.body.appendChild(this.context);
      }

      break;
    case 'DB': // Direita Baixo ou Bottom Right
      // Verifica se o container de toasts na posição Bottom Right (BR) existe
      this.context = this.doc.getElementById("toast-container-br");
      if (!this.context) {
        // Se não existir, criar o container de toasts
        this.context = this.doc.createElement("div");
        this.context.id = "toast-container-br";
        this.context.className = "toast-container position-fixed mb-3 mr-3";
        this.context.style.pointerEvents = "none";
        this.context.style.bottom = "0px";
        this.context.style.right = "0px";
        this.doc.body.appendChild(this.context);
      }

      break;
    case 'EB': // Esquerda Baixo ou Bottom Left
      // Verifica se o container de toasts na posição Bottom Left (BL) existe
      this.context = this.doc.getElementById("toast-container-bl");
      if (!this.context) {
        // Se não existir, criar o container de toasts
        this.context = this.doc.createElement("div");
        this.context.id = "toast-container-bl";
        this.context.className = "toast-container position-fixed mb-3 ml-3";
        this.context.style.pointerEvents = "none";
        this.context.style.bottom = "0px";
        this.context.style.left = "0px";
        this.doc.body.appendChild(this.context);
      }

      break;
  }
};

// Método para verificar se ja existe a div pai de notificações
HTMLMessage.prototype.getParentNotifyDiv = function(alignment) { return this.context; };

HTMLMessage.prototype.closeAllNotifies = function() {
  // Fechar todos os modals de mensagem
  $('.message-modal').modal('hide');

  // Fechar todos os toasts de mensagem
  $('.message-toast').toast('hide');
};

// Função para fechar esse modal/toast
HTMLMessage.prototype.closeMessage = function(div) {
  if (!this.shown) {
    this.closeRequired = true;
    return;
  }

  this.shown = false;
  this.enabled = false;
  this.visible = false;

  if (this.toastDiv) { // A mensagem é um toast
    $(this.toastDiv).toast("hide"); // Fechar o toast
  } else { // A mensagem é um modal
    $(div).modal("hide"); // Fechar o modal
  }

  if (this.documentKeyDown) {
    document.body.onkeydown = this.documentKeyDown; // Voltar para o key down que estava antes
  }
};

/** *
 * Método responsável por mostrar os alertas em tela, sobrepondo o padrão;
 * @author Janpier
 * @param {} type
 */
HTMLMessage.prototype.showWithSweetAlert = function (type) {
  let object = this;
  this.checkBody();
  this.alignment = this.parseAlignment(this.alignment);
  /**
   * Apresenta a mensagem com o tipo Toast caso a mesma tenha um tempo setado e o tipo seja de uns dos modelos abaixo.
   * Sendo assim, a propriedade this.message é ignorada e somente o title é utilizado, caso o title seja nulo, o this.message é exibido.
   **/
  if ((type ==="success" || type === "error" || type === "warning" || type === "info") && this.timer) {
    this.toastMessage(this.title, this.message, type, this.alignment, this.timer);
    return;
  }

  let textConfirm = 'Ok', textCancel = 'Cancel';

  try { textCancel = $mainform().getLocaleMessage("LABEL.CANCEL"); }
  catch (e) { textCancel = "Cancel"; }

  try { textConfirm = $mainform().getLocaleMessage("LABEL.OK"); }
  catch (f) { textConfirm = "Ok"; }

  let jsonConf = {
    title: this.title,
    html: this.message && this.message.length > 0 ? this.message.replace(/(?:\r\n|\r|\n)/g, '<br />') : '',
    position: this.alignment,
    confirmButtonText: textConfirm,
    cancelButtonText: textCancel,
    showConfirmButton: this.timer ? false : true,
    timer: this.timer,
    icon: type,
    heightAuto: false
  };

  if (type === 'error' && this.details && this.details.length > 0) {
    jsonConf.input = 'textarea';
    jsonConf.inputAttributes = {
      'style': 'font-size:1rem;white-space: normal!important;word-break: break-word;overflow-wrap: break-word;',
      'readonly': 'true'
    };

    jsonConf.inputValue = this.details;
  }

  Swal.fire(jsonConf).then(function(response) {
    if (response.isConfirmed) {
      if (object.callFunctionComponent) {
        if (object.callFunctionComponentParams)
          setTimeout(function(){object.callFunctionComponent.apply(this, object.callFunctionComponentParams)}, 350);
        else setTimeout(function(){object.callFunctionComponent.call(this);}, 350);
      }
    }
  });
};

/**
 * Método responsável por alertar aguardando um texto ou uma interação de confirmação do sweetalert.
 * @author Janpier
 * @param {*} type representa o ícone que será carregado.
 * @param {*} mod modelo de apresentação (Alerta Aguardando Texto ou Interação de Confirmação)
 */
HTMLMessage.prototype.embeddedSweetalert = function (type, mod) {
  const callbackOk = this.callOk;
  const callbackCancel = this.callCancel;
  let paramsOk = this.paramsOk;
  let paramsCancel = this.paramsCancel;
  let jsonConf = null;
  let textConfirm = 'Ok', textCancel = 'Cancel';
  this.message = this.message.replace(/(?:\r\n|\r|\n)/g, '<br />');
  this.checkBody();

  try { textCancel = $mainform().getLocaleMessage("LABEL.CANCEL"); }
  catch (e) { textCancel = "Cancel"; }

  try { textConfirm = $mainform().getLocaleMessage("LABEL.OK"); }
  catch (f) { textConfirm = "Ok"; }

  if (mod === 'interaction') {
    jsonConf = {
      title: this.title,
      html: this.message,
      icon: type,
      showCancelButton: true,
      confirmButtonText: textConfirm,
      cancelButtonText: textCancel,
    };
  } else {
    jsonConf = {
      title: this.title,
      html: this.message,
      icon: type,
      input: 'text',
      inputPlaceholder: this.inputPlaceholder ? this.inputPlaceholder : "",
      showCancelButton: true,
      confirmButtonText: textConfirm,
      cancelButtonText: textCancel,
    };
  }

  Swal.fire(jsonConf).then(function(response){
    if (response.isConfirmed) {
      if (callbackOk) {
        var parseParams = new Array();
        if (paramsOk) {
          for (i = 0; i < paramsOk.length; i++) {
            parseParams.push(paramsOk[i]);
          }
        }
        parseParams[0] = response.value ? response.value.toString() : "";
        ebfFlowExecute(callbackOk, parseParams);
      }
    } else {
      if (callbackCancel) {
        var parseParams = new Array();
        if (paramsCancel) {
          for (i = 0; i <paramsCancel.length; i++) {
            parseParams.push(paramsCancel[i]);
          }
        }
        parseParams[0] = mod === 'interaction' ? response.isConfirmed.toString() : response.value ? response.value.toString() : "";
        ebfFlowExecute(callbackCancel, parseParams);
      }
    }
  });
};

/**
 * Método responsável pela criação do ToastMensagem em tela.
 * @author Janpier
 * @param {*} title Título da mensagem.
 * @param {*} message Conteúdo da mensagem.
 * @param {*} type Tipo de mensagem.
 * @param {*} position Posição da mensagem.
 * @param {*} timer Tempo de apresentação.
 */
HTMLMessage.prototype.toastMessage = function(title, message, type, position, timer) {
  type = type ? type : "success";
  position = position ? position : "center";
  timer = timer ? timer : 3000;

  const Toast = Swal.mixin({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: timer,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  // Verificar se possui mensagem.
  if (message && message.length > 0) {
    // Ajustar o título para manter ambos.
    title = "<span style=\"text-align: left; padding-bottom: 0.25rem; padding-left: 0.25rem; display: flex; flex-direction: column;\">" +
        "<span style=\"margin-bottom: 0.25rem;\">" + title + "</span>" +
        "<span style=\"font-size: 1rem; font-weight: normal;\">" + message + "</span>" +
      "</span>";
  } else {
    // Ajustar o título da mensagem.
    title = "<span style=\"text-align: left;\">" + title + "</span>";
  }

  let object = this;
  Toast.fire({
    icon: type,
    title: title
  }).then(()=>{
    if(object.callFunctionComponent && typeof object.callFunctionComponent === 'function'){
      if (object.callFunctionComponentParams) {
        object.callFunctionComponent.apply(window, object.callFunctionComponentParams);
      } else {
        object.callFunctionComponent.call(window);
      }
    }
  });
};

/**
 * Modal window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @author Janpier
 * @param {*} align
 * @returns {*} align atualizado.
 */
HTMLMessage.prototype.parseAlignment = function (align) {
  if (align) {
    switch (align) {
      case 'DT' : align = 'top-end';
      break;
      case 'DB' : align = 'bottom-end';
      break;
      case 'ET' : align = 'top-start';
      break;
      case 'EB' : align = 'bottom-start';
      break;
      default : align = 'center';
      break;
    }
  } else {align = 'center';}
  return align ;
};

/**
 * Método responsável por checar se body existe no documento, caso não exista cria.
 */
HTMLMessage.prototype.checkBody = function () {
   // Obter o documento do formulário.
   try { this.doc = mainform && mainform.document ? mainform.document : document; }
   catch (e) { this.doc = document; }

   // Por razões de integridade, verificar se o documento possui um body e se não tiver, criar um.
   if (!this.doc.body) this.doc.writeln("<body></body>");
};

/**
 * Verifica se o valor informado por parâmetro é nulo ou vazio;
 * 
 * @author Janpier
 * @param {} value 
 */
HTMLMessage.prototype.checkNullOrEmpty = function (value) {
   return (value === 'null'|| value == null || value === "" || value == 'undefined' || value === undefined)
};
