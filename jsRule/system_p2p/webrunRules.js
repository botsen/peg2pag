
function TemplateAbrirContainerDeAtalhos(parent, sys, formID) {
  this.ruleName = 'Template - Abrir Container de Atalhos';
  this.functionName = 'TemplateAbrirContainerDeAtalhos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAbrirContainerDeAtalhos.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Abrir Container de Atalhos"
 * @author master
 * @since 12/03/2020 11:50:46
 */
TemplateAbrirContainerDeAtalhos.prototype.run = function() {
  document.ruleNameForException = 'Template - Abrir Container de Atalhos';
  this.context = new Array();

  // Variáveis
  this.context['Container Atalhos'] = null;

  this.context['Tamanho da Lista'] = '';

  this.context['Botao Atalhos'] = null;

  this.context['backdrop'] = null;

  this.context['componente em foco'] = '';


  /**
   * Obter Container de Atalhos
   */
  this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

  /**
   * Obter Tamanho da Lista de Atalhos
   */
  this.context['Tamanho da Lista'] = ebfListLength.call(this, ebfHtmlChildNodes.call(this, this.context['Container Atalhos']));

  /**
   * Obter Botao Atalhos
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * Maior que 0
   */
  if (parseBoolean(isGreater.call(this, this.context['Tamanho da Lista'], parseInt(0)))) {
      
    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', 'collapse');

    /**
     * Obter Botao Atalho
     */
    this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

    /**
     * Obter Backdrop
     */
    this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

    /**
     * Lista de Atalho Aberta ?
     */
    if (parseBoolean(isEqual.call(this, ebfHtmlGetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded'), 'false'))) {
        
      /**
       * Mostra  Backdrop
       */
      ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut show');

      return this.FlowEnd1();

    } else {

      /**
       * Oculta  Backdrop
       */
      ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

      return this.FlowEnd1();

    }

  } else {

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', '');

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage('Não há atalhos criados !', null, parseInt(2), 'DB');

    return this.FlowEnd1();

  }

}

TemplateAbrirContainerDeAtalhos.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateAbrirContainerDeAtalhos(parent, sys, formID, params) {
  var rule = new TemplateAbrirContainerDeAtalhos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateAbrirFormularioModoGerente(parent, sys, formID) {
  this.ruleName = 'Template - Abrir Formulário Modo Gerente';
  this.functionName = 'TemplateAbrirFormularioModoGerente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAbrirFormularioModoGerente.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Abrir Formulário Modo Gerente"
 * @param Formulario equivale à variável this.context['Formulario']<br/>
 * @author master
 * @since 01/11/2019 10:42:18
 */
TemplateAbrirFormularioModoGerente.prototype.run = function() {
  document.ruleNameForException = 'Template - Abrir Formulário Modo Gerente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Formulario'] = this.checkType(arguments[0], 'Letras');


  /**
   * Obter valor da Lista de Sistemas
   */
  this.context['Formulario'] = ebfFormGetComponentValue.call(this, null, 'ListaSistemas');

  /**
   * Formulário Nulo Ou Vazio ?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['Formulario']))) {
      
    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Selecione um formulário!', null, null);

    return this.FlowEnd1();

  } else {

    /**
     * Abrir Formulário
     */
    ebfFormOpenForm.call(this, this.context['Formulario']);

    return this.FlowEnd1();

  }

}

TemplateAbrirFormularioModoGerente.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateAbrirFormularioModoGerente(parent, sys, formID, params) {
  var rule = new TemplateAbrirFormularioModoGerente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateAdicionarAtalhoAoFabContainer(parent, sys, formID) {
  this.ruleName = 'Template - Adicionar Atalho ao FAB Container';
  this.functionName = 'TemplateAdicionarAtalhoAoFabContainer';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAdicionarAtalhoAoFabContainer.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Adicionar Atalho ao FAB Container"
 * @param Atalho equivale à variável this.context['Atalho']<br/>
 * @author master
 * @since 06/03/2020 10:32:49
 */
TemplateAdicionarAtalhoAoFabContainer.prototype.run = function() {
  document.ruleNameForException = 'Template - Adicionar Atalho ao FAB Container';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Atalho'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Elementos Texto'] = null;


  /**
   * (remove a Classe position-absolute)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Atalho'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'position-absolute'));

  /**
   * Anexar Atalhos ao Container FAB
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'atalhosListaContainer'), this.context['Atalho']);

  /**
   * Obter elemento do texto do atalho
   */
  this.context['Elementos Texto'] = ebfHtmlGetElementByClassName.call(this, 'menu-item-text', this.context['Atalho']);

  /**
   * Associar evento dblclick
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondblclick', 'Template - Ao Clicar no Atalho', ebfListParamsCreate.call(this, null, null, (isNullOrEmpty.call(this, this.context['Elementos Texto']) ? this.context['Atalho'] : ebfGetElementFromList.call(this, this.context['Elementos Texto'], parseInt(1)))), false);

  /**
   * Associar evento keydown
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'onkeydown', 'Template - Ao Pressionar uma Tecla', null, true);

  /**
   * Fim
   */
  return null;

}

function runTemplateAdicionarAtalhoAoFabContainer(parent, sys, formID, params) {
  var rule = new TemplateAdicionarAtalhoAoFabContainer(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateAoClicarNoAtalho(parent, sys, formID) {
  this.ruleName = 'Template - Ao Clicar no Atalho';
  this.functionName = 'TemplateAoClicarNoAtalho';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAoClicarNoAtalho.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Ao Clicar no Atalho"
 * @param Tipo de Evento equivale à variável this.context['Tipo de Evento']<br/>
 * @param Parametros equivale à variável this.context['Parametros']<br/>
 * @param Elemento Nome Atalho equivale à variável this.context['Elemento Nome Atalho']<br/>
 * @author master
 * @since 12/03/2020 12:04:52
 */
TemplateAoClicarNoAtalho.prototype.run = function() {
  document.ruleNameForException = 'Template - Ao Clicar no Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Tipo de Evento'] = this.checkType(arguments[0], 'Letras');

  this.context['Parametros'] = this.checkType(arguments[1], 'Variante');

  this.context['Elemento Nome Atalho'] = this.checkType(arguments[2], 'Variante');

  // Variáveis
  this.context['backdrop'] = null;

  this.context['Botao Atalhos'] = null;

  this.context['Aba do Menu'] = null;

  this.context['Objeto Atalhos'] = null;

  this.context['ContainerAtalhos'] = null;


  /**
   * É FORM ?
   */
  if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'form'))) {
      
    /**
     * Obter aba do menu
     */
    this.context['Aba do Menu'] = ebfGetComponentProperty.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'MenuLateralCosmo', 'MenuAbas');

    /**
     * Aba foi definida?
     */
    if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Aba do Menu'])))) {
        
      /**
       * Adicionar formulário na aba
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run(this.context['Aba do Menu'], ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), (isNullOrEmpty.call(this, this.context['Elemento Nome Atalho']) ? ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)) : ebfHtmlGetInnerHtml.call(this, this.context['Elemento Nome Atalho'])));


      return this.FlowConnector3();

    } else {

      /**
       * Abre form
       */
      ebfFormOpenForm.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)));

      return this.FlowConnector3();

    }

  } else {

    /**
     * É REPORT ?
     */
    if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'report'))) {
        
      /**
       * Abre report
       */
      ebfOpenReport.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), null, null, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(2)));

      return this.FlowConnector2();

    } else {

      /**
       * É ACTION ?
       */
      if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'action'))) {
          
        /**
         * Executa ação
         */
        ebfActionExecute.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)));

        return this.FlowConnector1();

      } else {

        /**
         * É FLOW ?
         */
        if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'flow'))) {
            
          /**
           * Quebrar Texto por ;
           */
          this.context['Parametros'] = ebfSplit.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), ';');

          /**
           * Executa fluxo
           */
          ebfFlowExecute.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), (isNull.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(2))) ? ebfListCreate.call(this) : ebfListParamsCreate.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(2)))));

          return this.FlowConnector1();

        } else {

          return this.FlowSubRoutine1();

        }

      }

    }

  }

}

TemplateAoClicarNoAtalho.prototype.FlowSubRoutine1 = function() {

    /**
     * Template - Oculta Backdrop de Atalhos
     */
    new TemplateOcultaBackdropDeAtalhos(this, this.getSystem(), this.getForm()).run();

    /**
     * Fim
     */
    return null;
  }

TemplateAoClicarNoAtalho.prototype.FlowConnector1 = function() {

    return this.FlowConnector2();
  }

TemplateAoClicarNoAtalho.prototype.FlowConnector2 = function() {

    return this.FlowConnector3();
  }

TemplateAoClicarNoAtalho.prototype.FlowConnector3 = function() {

    return this.FlowSubRoutine1();
  }


function runTemplateAoClicarNoAtalho(parent, sys, formID, params) {
  var rule = new TemplateAoClicarNoAtalho(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateAoClicarNoItemDoMenuAcao(parent, sys, formID) {
  this.ruleName = 'Template - Ao Clicar no Item do Menu (Ação)';
  this.functionName = 'TemplateAoClicarNoItemDoMenuAcao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAoClicarNoItemDoMenuAcao.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Ao Clicar no Item do Menu (Ação)"
 * @param evento equivale à variável this.context['evento']<br/>
 * @author master
 * @since 12/03/2020 12:02:33
 */
TemplateAoClicarNoItemDoMenuAcao.prototype.run = function() {
  document.ruleNameForException = 'Template - Ao Clicar no Item do Menu (Ação)';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['evento'] = this.checkType(arguments[0], 'Variante');


  /**
   * Elemento é o botão?
   */
  if (parseBoolean((isEqual.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['evento'], 'target'), 'data-target'), '#icons-content') || isEqual.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetParent.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['evento'], 'target')), 'data-target'), '#icons-content')))) {
      
    return this.FlowEnd1();

  } else {

    /**
     * (remove a Classe show do Menu Ações)
     */
    ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'icons-content'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1)), 'aria-expanded', 'false');

    return this.FlowEnd1();

  }

}

TemplateAoClicarNoItemDoMenuAcao.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateAoClicarNoItemDoMenuAcao(parent, sys, formID, params) {
  var rule = new TemplateAoClicarNoItemDoMenuAcao(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Menu - Ao Pressionar uma Tecla
 */
function TemplateAoPressionarUmaTecla(parent, sys, formID) {
  this.ruleName = 'Template - Ao Pressionar uma Tecla';
  this.functionName = 'TemplateAoPressionarUmaTecla';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateAoPressionarUmaTecla.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Ao Pressionar uma Tecla"
 * @param Evento equivale à variável this.context['Evento']<br/>
 * @param Elemento equivale à variável this.context['Elemento']<br/>
 * @author master
 * @since 06/03/2020 10:35:27
 */
TemplateAoPressionarUmaTecla.prototype.run = function() {
  document.ruleNameForException = 'Template - Ao Pressionar uma Tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  this.context['Elemento'] = this.checkType(arguments[1], 'Variante');

  // Variáveis
  this.context['backdrop'] = null;

  this.context['Botao Atalhos'] = null;

  this.context['Container Atalhos'] = null;


  /**
   * Testa se evento foi chamando pela tecla DEL
   */
  if (parseBoolean((isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '46') || isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '46')))) {
      
    /**
     * Obter Botao Atalho
     */
    this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

    /**
     * Obter Backdrop
     */
    this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

    /**
     * Oculta  Backdrop
     */
    ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

    /**
     * Oculta Atalhos Container
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

    /**
     * Obter Container de Atalhos
     */
    this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

    /**
     * (remove a Classe show do Atalhos Container)
     */
    ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Container Atalhos'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

    /**
     * Elemento do atalho é nulo?
     */
    if (parseBoolean(isNull.call(this, this.context['Elemento']))) {
        
      return this.FlowEnd1();

    } else {

      /**
       * Excluir atalho
       */
      ebfSetRuleExecutionTime.call(this, 'Menu - Excluir Atalho', ebfListParamsCreate.call(this, this.context['Elemento']), parseInt(1));

      return this.FlowEnd1();

    }

  } else {

    /**
     * Testa se evento foi chamando pela tecla F2
     */
    if (parseBoolean((isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '113') || isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '113')))) {
        
      /**
       * Elemento do atalho é nulo?
       */
      if (parseBoolean(isNull.call(this, this.context['Elemento']))) {
          
        return this.FlowConnector5();

      } else {

        /**
         * Renomear atalho
         */
        ebfSetRuleExecutionTime.call(this, 'Menu - Renomear Atalho', ebfListParamsCreate.call(this, this.context['Elemento']), parseInt(1));

        return this.FlowConnector1();

      }

    } else {

      return this.FlowConnector5();

    }

  }

}

TemplateAoPressionarUmaTecla.prototype.FlowConnector1 = function() {

    return this.FlowEnd1();
  }

TemplateAoPressionarUmaTecla.prototype.FlowConnector5 = function() {

    return this.FlowConnector1();
  }

TemplateAoPressionarUmaTecla.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateAoPressionarUmaTecla(parent, sys, formID, params) {
  var rule = new TemplateAoPressionarUmaTecla(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Carregar atalhos no formulário
 */
function TemplateCarregarAtalhosNoFormulario(parent, sys, formID) {
  this.ruleName = 'Template - Carregar Atalhos no Formulário';
  this.functionName = 'TemplateCarregarAtalhosNoFormulario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;

  this.translations = new Map();

}

TemplateCarregarAtalhosNoFormulario.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Carregar Atalhos no Formulário"
 * @author master
 * @since 04/03/2020 16:46:16
 */
TemplateCarregarAtalhosNoFormulario.prototype.run = function() {
  document.ruleNameForException = 'Template - Carregar Atalhos no Formulário';
  this.context = new Array();

  // Variáveis
  this.context['Objeto Atalhos'] = null;

  this.context['Contador'] = 0;

  this.context['Chaves'] = null;

  this.context['Texto JSON'] = '';

  this.context['Atalho'] = null;

  this.context['Tipo de Evento'] = '';

  this.context['Elementos Texto'] = null;

  this.context['Contador'] = parseInt(1);

  /**
   * Obtém objeto atalhos
   */
  this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

  /**
   * Obtém chaves do objeto
   */
  this.context['Chaves'] = ebfObjectKeys.call(this, this.context['Objeto Atalhos']);

  /**
   * Ainda existem chaves?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Chaves'])))) {

    /**
     * Cria atalho
     */
    this.context['Atalho'] = ebfHtmlCreateHtmlElement.call(this, 'a', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'id')), ebfListParamsCreate.call(this, 'draggable', 'true'), ebfListParamsCreate.call(this, 'href', '#'), ebfListParamsCreate.call(this, 'class', 'menu-shortcut d-flex flex-column align-items-center justify-content-center')), null);

    /**
     * Definir conteúdo
     */
    ebfHtmlInnerHtml.call(this, this.context['Atalho'], ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'conteudo'));

    /**
     * Obtém Tipo de Evento
     */
    this.context['Tipo de Evento'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'tipoEvento');

    /**
     * Definir posição
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Atalho'], 'left', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'left'));

    /**
     * Definir posição
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Atalho'], 'top', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'top'));

    /**
     * Associar evento mousedown
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'mousedown', 'Template - Definir Posição do Cursor', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * Inserir evento drag
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondrag', 'Template - Permitir movimentação', null, true);

    /**
     * Associar evento para mover atalho
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'dragend', 'Template - Mover Atalho', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * Associar evento keypress
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'keydown', 'Template - Ao Pressionar uma Tecla', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * Anexar atalho no formulário
     */
    ebfHtmlAppendElementAt.call(this, ebfGetTabDivByName.call(this, ebfTranslate.call(this, ebfGetSelectTabStringName.call(this), null)), this.context['Atalho']);

    /**
     * Template - Adicionar Atalho ao FAB Container
     */
    new TemplateAdicionarAtalhoAoFabContainer(this, this.getSystem(), this.getForm()).run(this.context['Atalho']);

    /**
     * Obter elemento do texto do atalho
     */
    this.context['Elementos Texto'] = ebfHtmlGetElementByClassName.call(this, 'menu-item-text', this.context['Atalho']);

    /**
     * Associar evento dblclick
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondblclick', 'Template - Ao Clicar no Atalho', ebfListParamsCreate.call(this, this.context['Tipo de Evento'], ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'parametros'), (isNullOrEmpty.call(this, this.context['Elementos Texto']) ? this.context['Atalho'] : ebfGetElementFromList.call(this, this.context['Elementos Texto'], parseInt(1)))), false);

    /**
     * Incrementa contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));
  }

  /**
   * Fim
   */
  return ebfHtmlGetInnerHtml.call(this, this.context['Atalho']);

}

function runTemplateCarregarAtalhosNoFormulario(parent, sys, formID, params) {
  var rule = new TemplateCarregarAtalhosNoFormulario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateDefinirAtributosDoContainerAtalhos(parent, sys, formID) {
  this.ruleName = 'Template - Definir Atributos do Container Atalhos';
  this.functionName = 'TemplateDefinirAtributosDoContainerAtalhos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateDefinirAtributosDoContainerAtalhos.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Definir Atributos do Container Atalhos"
 * @param Container Atalhos equivale à variável this.context['Container Atalhos']<br/>
 * @author master
 * @since 28/01/2020 15:20:37
 */
TemplateDefinirAtributosDoContainerAtalhos.prototype.run = function() {
  document.ruleNameForException = 'Template - Definir Atributos do Container Atalhos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Container Atalhos'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['Botao Atalhos'] = null;


  /**
   * Obter Botao Atalhos
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', 'collapse');

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-target', ebfConcat.call(this, '#', ebfTrim.call(this, this.context['Container Atalhos'])));

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

  /**
   * Fim
   */
  return null;

}

function runTemplateDefinirAtributosDoContainerAtalhos(parent, sys, formID, params) {
  var rule = new TemplateDefinirAtributosDoContainerAtalhos(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Menu - Definir posição do cursor
 */
function TemplateDefinirPosicaoDoCursor(parent, sys, formID) {
  this.ruleName = 'Template - Definir Posição do Cursor';
  this.functionName = 'TemplateDefinirPosicaoDoCursor';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateDefinirPosicaoDoCursor.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Definir Posição do Cursor"
 * @param Evento equivale à variável this.context['Evento']<br/>
 * @param Elemento equivale à variável this.context['Elemento']<br/>
 * @author master
 * @since 01/06/2015 21:47:10
 */
TemplateDefinirPosicaoDoCursor.prototype.run = function() {
  document.ruleNameForException = 'Template - Definir Posição do Cursor';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  this.context['Elemento'] = this.checkType(arguments[1], 'Variante');


  /**
   * Define posição X
   */
  ebfSetLocalVariable.call(this, 'menu_posicaoX', oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), toLong.call(this, ebfHtmlCssGetStyle.call(this, this.context['Elemento'], 'left'))));

  /**
   * Define posição Y
   */
  ebfSetLocalVariable.call(this, 'menu_posicaoY', oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), toLong.call(this, ebfHtmlCssGetStyle.call(this, this.context['Elemento'], 'top'))));

  /**
   * Fim
   */
  return null;

}

function runTemplateDefinirPosicaoDoCursor(parent, sys, formID, params) {
  var rule = new TemplateDefinirPosicaoDoCursor(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Menu - Excluir Atalho
 */
function TemplateExcluirAtalho(parent, sys, formID) {
  this.ruleName = 'Template - Excluir Atalho';
  this.functionName = 'TemplateExcluirAtalho';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateExcluirAtalho.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Excluir Atalho"
 * @param Elemento equivale à variável this.context['Elemento']<br/>
 * @author master
 * @since 06/03/2020 09:51:16
 */
TemplateExcluirAtalho.prototype.run = function() {
  document.ruleNameForException = 'Template - Excluir Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Elemento'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Objeto Atalhos'] = null;


  /**
   * Remove elemento
   */
  ebfHtmlRemoveChild.call(this, ebfHtmlGetParent.call(this, this.context['Elemento']), this.context['Elemento']);

  /**
   * Obtér JSON
   */
  this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

  /**
   * Exclui objeto
   */
  ebfDeleteObject.call(this, this.context['Objeto Atalhos'], ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id'));

  /**
   * Template - Atualizar Atalhos
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(1))]);

  /**
   * Fim
   */
  return null;

}

function runTemplateExcluirAtalho(parent, sys, formID, params) {
  var rule = new TemplateExcluirAtalho(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateFormularioDeLoginObterDadosEEfetuarLogin(parent, sys, formID) {
  this.ruleName = 'Template - Formulário de Login - Obter Dados e Efetuar Login';
  this.functionName = 'TemplateFormularioDeLoginObterDadosEEfetuarLogin';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateFormularioDeLoginObterDadosEEfetuarLogin.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Formulário de Login - Obter Dados e Efetuar Login"
 * @param Login equivale à variável this.context['Login']<br/>
 * @param Senha equivale à variável this.context['Senha']<br/>
 * @param Digital equivale à variável this.context['Digital']<br/>
 * @author master
 * @since 18/12/2019 11:42:17
 */
TemplateFormularioDeLoginObterDadosEEfetuarLogin.prototype.run = function() {
  document.ruleNameForException = 'Template - Formulário de Login - Obter Dados e Efetuar Login';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Login'] = this.checkType(arguments[0], 'Letras');

  this.context['Senha'] = this.checkType(arguments[1], 'Letras');

  this.context['Digital'] = this.checkType(arguments[2], 'Inteiro');


  /**
   * Autentica o usuário
   */
  ebfAuthUser.call(this, this.context['Login'], this.context['Senha'], null, null);

  /**
   * Fim
   */
  return null;

}

function runTemplateFormularioDeLoginObterDadosEEfetuarLogin(parent, sys, formID, params) {
  var rule = new TemplateFormularioDeLoginObterDadosEEfetuarLogin(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateFormularioLoginAoEntrar(parent, sys, formID) {
  this.ruleName = 'Template - Formulário Login - Ao Entrar';
  this.functionName = 'TemplateFormularioLoginAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateFormularioLoginAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Formulário Login - Ao Entrar"
 * @author master
 * @since 03/03/2020 09:56:55
 */
TemplateFormularioLoginAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Template - Formulário Login - Ao Entrar';
  this.context = new Array();


  /**
   * Dar Foco no Input Usuário
   */
  ebfFormSetFocus.call(this, 'Login');

  /**
   * Fim
   */
  return null;

}

function runTemplateFormularioLoginAoEntrar(parent, sys, formID, params) {
  var rule = new TemplateFormularioLoginAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateFormularioLoginAoLogar(parent, sys, formID) {
  this.ruleName = 'Template - Formulário Login - Ao Logar';
  this.functionName = 'TemplateFormularioLoginAoLogar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateFormularioLoginAoLogar.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Formulário Login - Ao Logar"
 * @param Alt equivale à variável this.context['Alt']<br/>
 * @param Ctrl equivale à variável this.context['Ctrl']<br/>
 * @param Shift equivale à variável this.context['Shift']<br/>
 * @param Código da Tecla equivale à variável this.context['Código da Tecla']<br/>
 * @param Caractere da Tecla equivale à variável this.context['Caractere da Tecla']<br/>
 * @param Login equivale à variável this.context['Login']<br/>
 * @param Senha equivale à variável this.context['Senha']<br/>
 * @author master
 * @since 30/01/2020 09:27:15
 */
TemplateFormularioLoginAoLogar.prototype.run = function() {
  document.ruleNameForException = 'Template - Formulário Login - Ao Logar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Alt'] = this.checkType(arguments[0], 'Lógico');

  this.context['Ctrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['Shift'] = this.checkType(arguments[2], 'Lógico');

  this.context['Código da Tecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['Caractere da Tecla'] = this.checkType(arguments[4], 'Letras');

  this.context['Login'] = this.checkType(arguments[5], 'Letras');

  this.context['Senha'] = this.checkType(arguments[6], 'Letras');

  // Variáveis
  this.context['Formulario'] = '';


  /**
   * Obter o GUID do Formulario
   */
  this.context['Formulario'] = ebfGetGUIDActualForm.call(this);

  /**
   * Tecla pressionada é ENTER?
   */
  if (parseBoolean((isEqual.call(this, this.context['Código da Tecla'], parseInt(13)) || isEqual.call(this, this.context['Caractere da Tecla'], 'Enter')))) {
      
    /**
     * Template - Formulário de Login - Obter Dados e Efetuar Login
     */
    new TemplateFormularioDeLoginObterDadosEEfetuarLogin(this, this.getSystem(), this.getForm()).run(ebfFormGetComponentValue.call(this, this.context['Formulario'], this.context['Login']), ebfFormGetComponentValue.call(this, this.context['Formulario'], this.context['Senha']), null);

    return this.FlowEnd1();

  } else {

    return this.FlowEnd1();

  }

}

TemplateFormularioLoginAoLogar.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateFormularioLoginAoLogar(parent, sys, formID, params) {
  var rule = new TemplateFormularioLoginAoLogar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateFormularioPrincipalAoEntrar(parent, sys, formID) {
  this.ruleName = 'Template - Formulário Principal - Ao Entrar';
  this.functionName = 'TemplateFormularioPrincipalAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateFormularioPrincipalAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Formulário Principal - Ao Entrar"
 * @author master
 * @since 19/08/2021 10:23:53
 */
TemplateFormularioPrincipalAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Template - Formulário Principal - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['ListaRetorno'] = null;

  this.context['backdrop'] = null;


  /**
   * Template - Formulário Principal - Ao Entrar (Servidor)
   */
  this.context['ListaRetorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Formulário Principal - Ao Entrar (Servidor)');

  /**
   * Template - Definir Atributos do Container Atalhos
   */
  new TemplateDefinirAtributosDoContainerAtalhos(this, this.getSystem(), this.getForm()).run('atalhosListaContainer');

  /**
   * É publicado?
   */
  if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(4))))) {
      
    /**
     * Menu - Atualizar
     */
    new MenuAtualizar(this, this.getSystem(), this.getForm()).run('icons', '<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<ROOT THEME=\"light\">\n<MENU CODE=\"1887671\">\n	<DESCRIPTION>Grupos</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-users</ICON>\n<ACTION>Grupos</ACTION>\n</MENU>\n<MENU CODE=\"1699528\">\n	<DESCRIPTION>Usuários</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-address-card</ICON>\n<ACTION>Usuarios</ACTION>\n</MENU>\n<MENU CODE=\"1692053\">\n	<DESCRIPTION>LOG</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-file-alt</ICON>\n<ACTION>LOG</ACTION>\n</MENU>\n<MENU CODE=\"41518\">\n	<DESCRIPTION>Script SQL</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-database</ICON>\n<ACTION>ExecutarScriptSQL</ACTION>\n</MENU>\n<MENU CODE=\"326049\">\n	<DESCRIPTION>Recarregar Sistema</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-sync</ICON>\n<ACTION>RecarregarSistema</ACTION>\n</MENU>\n<MENU CODE=\"336203\">\n	<DESCRIPTION>Modo Normal</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-user</ICON>\n<ACTION>ModoNormal</ACTION>\n</MENU>\n<MENU CODE=\"527166\">\n	<DESCRIPTION>Modo Gerente</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-user-tie</ICON>\n<ACTION>ModoGerente</ACTION>\n</MENU>\n<MENU CODE=\"812059\">\n	<DESCRIPTION>Configurar Conexões</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-bezier-curve</ICON>\n<ACTION>ConfigurarConexoesAdicionais</ACTION>\n</MENU>\n\n</ROOT>');


    return this.FlowExpression10();

  } else {

    return this.FlowExpression10();

  }

}

TemplateFormularioPrincipalAoEntrar.prototype.FlowExpression10 = function() {

    /**
     * Altera o Nome do Usuário
     */
    ebfFormChangeComponentValue.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

    /**
     * Template - Menu Collapse Opções do Usuário
     */
    new TemplateMenuCollapseOpcoesDoUsuario(this, this.getSystem(), this.getForm()).run();

    /**
     * Template - Carregar Atalhos no Formulário
     */
    new TemplateCarregarAtalhosNoFormulario(this, this.getSystem(), this.getForm()).run();

    /**
     * Criar backdrop
     */
    this.context['backdrop'] = ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'backdrop-shortcut'), ebfListParamsCreate.call(this, 'class', 'backdrop-shortcut')), ebfHtmlGetBodyElement.call(this));

    /**
     * Associar evento onclick ao Backdrop
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['backdrop'], 'onclick', 'Template - Oculta Backdrop de Atalhos', null, null);

    /**
     * Obter Menu Collapse
     */
    ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1));

    /**
     * Associar evento onclick ao Formulario
     */
    ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetBodyElement.call(this), 'onclick', 'Template - Ao Clicar no Item do Menu (Ação)', null, true);

    /**
     * Adm Geral ou do Sistema ?
     */
    if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(3))))) {
        
      return this.FlowEnd2();

    } else {

      /**
       * Oculta Menu Adm
       */
      new TemplateOcultaOuExibeElemento(this, this.getSystem(), this.getForm()).run('false', null, ebfListParamsCreate.call(this, 'icons', 'IconButtonContainer'));

      return this.FlowEnd2();

    }
  }

TemplateFormularioPrincipalAoEntrar.prototype.FlowEnd2 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateFormularioPrincipalAoEntrar(parent, sys, formID, params) {
  var rule = new TemplateFormularioPrincipalAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateMenuCollapseOpcoesDoUsuario(parent, sys, formID) {
  this.ruleName = 'Template - Menu Collapse Opções do Usuário';
  this.functionName = 'TemplateMenuCollapseOpcoesDoUsuario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateMenuCollapseOpcoesDoUsuario.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Menu Collapse Opções do Usuário"
 * @author master
 * @since 19/08/2021 10:23:54
 */
TemplateMenuCollapseOpcoesDoUsuario.prototype.run = function() {
  document.ruleNameForException = 'Template - Menu Collapse Opções do Usuário';
  this.context = new Array();


  /**
   * Menu Collapse (remove classe navbar-expand-sm)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'iconsPrincipal'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'navbar-expand-sm'));

  /**
   * Fim
   */
  return null;

}

function runTemplateMenuCollapseOpcoesDoUsuario(parent, sys, formID, params) {
  var rule = new TemplateMenuCollapseOpcoesDoUsuario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateMoverAtalho(parent, sys, formID) {
  this.ruleName = 'Template - Mover Atalho';
  this.functionName = 'TemplateMoverAtalho';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateMoverAtalho.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Mover Atalho"
 * @param Evento equivale à variável this.context['Evento']<br/>
 * @param Elemento equivale à variável this.context['Elemento']<br/>
 * @author master
 * @since 01/11/2019 10:34:54
 */
TemplateMoverAtalho.prototype.run = function() {
  document.ruleNameForException = 'Template - Mover Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  this.context['Elemento'] = this.checkType(arguments[1], 'Variante');

  // Variáveis
  this.context['Objeto Atalhos'] = null;

  this.context['Subtração X'] = 0;

  this.context['Diferença X'] = 0;

  this.context['Diferença Y'] = 0;

  this.context['Constante Y do Navegador'] = 0;

  this.context['Afastamento X Chrome'] = 0;

  this.context['Subtração X'] = parseInt(0);
  this.context['Afastamento X Chrome'] = parseInt(0);

  /**
   * Obter Diferença X
   */
  this.context['Diferença X'] = ebfGetLocalVariable.call(this, 'menu_posicaoX');

  /**
   * Obter Diferença Y
   */
  this.context['Diferença Y'] = ebfGetLocalVariable.call(this, 'menu_posicaoY');

  /**
   * É FireFox?
   */
  if (parseBoolean(toBoolean.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'isFirefox')))) {
      
    /**
     * Define constante Y
     */
    this.context['Constante Y do Navegador'] = parseInt(0);

    return this.FlowDecision1();

  } else {

    /**
     * É Chrome?
     */
    if (parseBoolean(toBoolean.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'isChrome')))) {
        
      /**
       * Define constante Y
       */
      this.context['Constante Y do Navegador'] = parseInt(0);

      return this.FlowExpression11();

    } else {

      /**
       * Define constante Y
       */
      this.context['Constante Y do Navegador'] = parseInt(0);

      return this.FlowExpression11();

    }

  }

}

TemplateMoverAtalho.prototype.FlowExpression11 = function() {

    /**
     * Compensa afastamento para Chrome e IE
     */
    this.context['Afastamento X Chrome'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screen'), 'width');

    return this.FlowDecision1();
  }

TemplateMoverAtalho.prototype.FlowDecision1 = function() {

    /**
     * Testa se atalho foi criado no segundo monitor
     */
    if (parseBoolean(isGreater.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screen'), 'width')))) {
        
      /**
       * Subtrai afastamento para Chrome e IE
       */
      this.context['Diferença X'] = oprSubtract.call(this, this.context['Diferença X'], this.context['Afastamento X Chrome']);

      /**
       * Define left do navegador
       */
      this.context['Subtração X'] = oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screenLeft'), oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screenLeft'), this.context['Afastamento X Chrome']));

      return this.FlowExpression15();

    } else {

      return this.FlowExpression15();

    }
  }

TemplateMoverAtalho.prototype.FlowExpression15 = function() {

    /**
     * Define CSS
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Elemento'], 'left', ebfConcat.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), this.context['Subtração X'], this.context['Diferença X']), 'px'));

    /**
     * Define CSS
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Elemento'], 'top', ebfConcat.call(this, oprAdd.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), this.context['Diferença Y']), this.context['Constante Y do Navegador']), 'px'));

    /**
     * Obtér JSON
     */
    this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

    /**
     * Alterar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], toString.call(this, ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id'))), 'left', ebfConcat.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), this.context['Subtração X'], parseInt(-1), this.context['Diferença X']), 'px'));

    /**
     * Alterar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id')), 'top', ebfConcat.call(this, oprAdd.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), this.context['Diferença Y']), this.context['Constante Y do Navegador']), 'px'));

    /**
     * Template - Atualizar Atalhos
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(2))]);

    /**
     * Fim
     */
    return null;
  }


function runTemplateMoverAtalho(parent, sys, formID, params) {
  var rule = new TemplateMoverAtalho(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateOcultaBackdropDeAtalhos(parent, sys, formID) {
  this.ruleName = 'Template - Oculta Backdrop de Atalhos';
  this.functionName = 'TemplateOcultaBackdropDeAtalhos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateOcultaBackdropDeAtalhos.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Oculta Backdrop de Atalhos"
 * @author master
 * @since 12/03/2020 12:04:42
 */
TemplateOcultaBackdropDeAtalhos.prototype.run = function() {
  document.ruleNameForException = 'Template - Oculta Backdrop de Atalhos';
  this.context = new Array();

  // Variáveis
  this.context['backdrop'] = null;

  this.context['Botao Atalhos'] = null;

  this.context['Container Atalhos'] = null;


  /**
   * Obter Botao Atalho
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * Obter Backdrop
   */
  this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

  /**
   * Oculta  Backdrop
   */
  ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

  /**
   * Oculta Atalhos Container
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

  /**
   * Obter Container de Atalhos
   */
  this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

  /**
   * (remove a Classe show do Atalhos Container)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Container Atalhos'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

  /**
   * Fim
   */
  return null;

}

function runTemplateOcultaBackdropDeAtalhos(parent, sys, formID, params) {
  var rule = new TemplateOcultaBackdropDeAtalhos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAjustarLarguraDasColunasDaGrade(parent, sys, formID) {
  this.ruleName = 'Geral - Ajustar Largura das Colunas da Grade';
  this.functionName = 'GeralAjustarLarguraDasColunasDaGrade';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAjustarLarguraDasColunasDaGrade.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Ajustar Largura das Colunas da Grade"
 * @param grade equivale à variável this.context['grade']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 15:50:40
 */
GeralAjustarLarguraDasColunasDaGrade.prototype.run = function() {
  document.ruleNameForException = 'Geral - Ajustar Largura das Colunas da Grade';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['grade'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['tamanho'] = 0;

  this.context['listaColunas'] = null;

  this.context['totalColunas'] = 0;

  this.context['contador'] = 0;

  this.context['listaTamanhos'] = null;

  this.context['totalLarguras'] = 0;

  this.context['larguraColuna'] = 0;

  this.context['diferenca'] = 0;

  this.context['lisNomesComp'] = null;

  this.context['listaLarguraSomada'] = null;

  this.context['valorAumentar'] = 0;

  this.context['larguraOriginal'] = 0;

  this.context['variacaoPercenutal'] = 0.0;


  /**
   * Obtem largura original
   */
  this.context['larguraOriginal'] = ebfFormGetWidth.call(this, this.context['grade']);

  /**
   * Obter lista de colunas
   */
  this.context['listaColunas'] = ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']);

  /**
   * Total de colunas
   */
  this.context['totalColunas'] = ebfListLength.call(this, this.context['listaColunas']);

  /**
   * Cria lista vazia - Nome Colunas
   */
  this.context['lisNomesComp'] = ebfListCreate.call(this);

  /**
   * Cria lista vazia - Largura
   */
  this.context['listaTamanhos'] = ebfListCreate.call(this);

  /**
   * Obter largura
   */
  this.context['tamanho'] = ebfExecuteJS.call(this, ebfReplace.call(this, 'var largura = document.getElementById(\"X:GRADE:X\").offsetWidth;\n\nreturn largura;', 'X:GRADE:X', this.context['grade']));

  /**
   * Obter variação percentua dos tamanhos
   */
  this.context['variacaoPercenutal'] = oprMultiply.call(this, oprSubtract.call(this, oprDivide.call(this, this.context['tamanho'], this.context['larguraOriginal']), parseFloat(1)), parseFloat(100));

  /**
   * Contador < Tamanho da lista?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

    /**
     * Insere nome da coluna na lista
     */
    ebfSetElementAtList.call(this, this.context['lisNomesComp'], ebfGetValueObjectJson.call(this, ebfGetValueObjectJson.call(this, ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']), this.context['contador']), 'title'), oprAdd.call(this, this.context['contador'], parseFloat(1)));

    /**
     * Obtem largura
     */
    this.context['larguraColuna'] = ebfGetValueObjectJson.call(this, ebfGetValueObjectJson.call(this, ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']), this.context['contador']), 'width');

    /**
     * Corrige a variação percentual
     */
    this.context['larguraColuna'] = ebfMathCeil.call(this, oprAdd.call(this, this.context['larguraColuna'], oprDivide.call(this, oprMultiply.call(this, this.context['larguraColuna'], this.context['variacaoPercenutal']), parseFloat(100))));

    /**
     * Insere largura na lista
     */
    ebfSetElementAtList.call(this, this.context['listaTamanhos'], this.context['larguraColuna'], oprAdd.call(this, this.context['contador'], parseFloat(1)));

    /**
     * Soma total de largurar
     */
    this.context['totalLarguras'] = oprAdd.call(this, this.context['totalLarguras'], this.context['larguraColuna']);

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));
  }

  /**
   * Total larguras >= Tamanho?
   */
  if (parseBoolean(isGreaterOrEqual.call(this, this.context['totalLarguras'], this.context['tamanho']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Zerar contador
     */
    this.context['contador'] = parseInt(0);

    /**
     * Cria lista vazia - Largura Somada
     */
    this.context['listaLarguraSomada'] = ebfListCreate.call(this);

    /**
     * Obtem diferença entre as larguras
     */
    this.context['diferenca'] = oprSubtract.call(this, this.context['tamanho'], this.context['totalLarguras']);

    /**
     * Valor a incrementar
     */
    this.context['valorAumentar'] = oprSubtract.call(this, oprTrunc.call(this, oprDivide.call(this, this.context['diferenca'], this.context['totalColunas'])), parseInt(5));

    /**
     * Contador < Tamanho da lista
     */
    while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

      /**
       * Insere na lista
       */
      ebfSetElementAtList.call(this, this.context['listaLarguraSomada'], oprAdd.call(this, ebfGetElementFromList.call(this, this.context['listaTamanhos'], oprAdd.call(this, this.context['contador'], parseFloat(1))), this.context['valorAumentar']), oprAdd.call(this, this.context['contador'], parseFloat(1)));

      /**
       * Incrementa Contador
       */
      this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));
    }

    /**
     * Altera larguras
     */
    ebfGridModifyColumnsWidth.call(this, ebfGetGUIDActualForm.call(this), this.context['grade'], this.context['lisNomesComp'], this.context['listaLarguraSomada']);

    /**
     * Fim
     */
    return null;

  }

}

function runGeralAjustarLarguraDasColunasDaGrade(parent, sys, formID, params) {
  var rule = new GeralAjustarLarguraDasColunasDaGrade(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * @Lista Elementos: Elementos que são criados dinamicamente e/ou não fazem parte do Controller.<br/>
 * <br/>
 * @Lista Elementos Controller: Elementos que fazem parte do controller (Botão, Caixa de Texto, Lista e outros).
 */
function TemplateOcultaOuExibeElemento(parent, sys, formID) {
  this.ruleName = 'Template - Oculta ou Exibe Elemento';
  this.functionName = 'TemplateOcultaOuExibeElemento';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateOcultaOuExibeElemento.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Oculta ou Exibe Elemento"
 * @param Exibir equivale à variável this.context['Exibir']<br/>
 * @param Lista Elementos equivale à variável this.context['Lista Elementos']<br/>
 * @param Lista Elementos Controller equivale à variável this.context['Lista Elementos Controller']<br/>
 * @author master
 * @since 13/03/2020 11:34:57
 */
TemplateOcultaOuExibeElemento.prototype.run = function() {
  document.ruleNameForException = 'Template - Oculta ou Exibe Elemento';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Exibir'] = this.checkType(arguments[0], 'Letras');

  this.context['Lista Elementos'] = this.checkType(arguments[1], 'Variante');

  this.context['Lista Elementos Controller'] = this.checkType(arguments[2], 'Variante');

  // Variáveis
  this.context['Contador'] = 0;

  this.context['Contador'] = parseInt(1);

  /**
   * Verifica se a lista foi preenchida
   */
  this.context['Lista Elementos'] = (this.context['Lista Elementos'] ? this.context['Lista Elementos'] : ebfListCreate.call(this));

  /**
   * Verifica se a lista controller foi preenchida
   */
  this.context['Lista Elementos Controller'] = (this.context['Lista Elementos Controller'] ? this.context['Lista Elementos Controller'] : ebfListCreate.call(this));

  /**
   * Possui elemento ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Lista Elementos'])))) {

    /**
     * Exibe/Oculta o elemento
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, ebfGetElementFromList.call(this, this.context['Lista Elementos'], this.context['Contador'])), 'display', (toBoolean.call(this, this.context['Exibir']) ? 'block' : 'none'));

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));
  }

  /**
   * Reinicia o contador = 1
   */
  this.context['Contador'] = parseInt(1);

  /**
   * Possui elemento controller ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Lista Elementos Controller'])))) {

    /**
     * Exibe/Oculta o elemento
     */
    ebfFormSetVisible.call(this, ebfGetElementFromList.call(this, this.context['Lista Elementos Controller'], this.context['Contador']), toBoolean.call(this, this.context['Exibir']));

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));
  }

  /**
   * Fim
   */
  return null;

}

function runTemplateOcultaOuExibeElemento(parent, sys, formID, params) {
  var rule = new TemplateOcultaOuExibeElemento(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Menu - Permitir movimentação
 */
function TemplatePermitirMovimentacao(parent, sys, formID) {
  this.ruleName = 'Template - Permitir movimentação';
  this.functionName = 'TemplatePermitirMovimentacao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplatePermitirMovimentacao.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Permitir movimentação"
 * @param Evento equivale à variável this.context['Evento']<br/>
 * @author master
 * @since 01/06/2015 21:47:50
 */
TemplatePermitirMovimentacao.prototype.run = function() {
  document.ruleNameForException = 'Template - Permitir movimentação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');


  /**
   * Define tipo de drag
   */
  ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'dataTransfer'), 'dropEffect', 'move');

  /**
   * Define tipo de drag
   */
  ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'dataTransfer'), 'effectAllowed', 'move');

  /**
   * Fim
   */
  return true;

}

function runTemplatePermitirMovimentacao(parent, sys, formID, params) {
  var rule = new TemplatePermitirMovimentacao(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Menu - Renomear Atalho
 */
function TemplateRenomearAtalho(parent, sys, formID) {
  this.ruleName = 'Template - Renomear Atalho';
  this.functionName = 'TemplateRenomearAtalho';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateRenomearAtalho.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Renomear Atalho"
 * @param Elemento equivale à variável this.context['Elemento']<br/>
 * @author master
 * @since 01/11/2019 16:17:41
 */
TemplateRenomearAtalho.prototype.run = function() {
  document.ruleNameForException = 'Template - Renomear Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Elemento'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Nome do Atalho'] = '';

  this.context['Objeto Atalhos'] = null;

  this.context['Chave Atalho'] = '';


  /**
   * Obtém nome do atalho
   */
  this.context['Nome do Atalho'] = ebfPrompt.call(this, 'Digite o nome do atalho:', ebfHtmlGetInnerHtml.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, this.context['Elemento'], parseInt(2)))));

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, this.context['Nome do Atalho'], null, null);

  /**
   * Verifica se retorno é nulo
   */
  if (parseBoolean(isNull.call(this, this.context['Nome do Atalho']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Alterar nome do atalho
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, this.context['Elemento'], parseInt(2))), this.context['Nome do Atalho']);

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, this.context['Nome do Atalho'], null, null);

    /**
     * Obtém JSON
     */
    this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

    /**
     * Obtém nome da chave
     */
    this.context['Chave Atalho'] = ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id');

    /**
     * Modificar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], this.context['Chave Atalho']), 'conteudo', ebfHtmlGetInnerHtml.call(this, this.context['Elemento']));

    /**
     * Template - Atualizar Atalhos
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(2))]);

    /**
     * Fim
     */
    return null;

  }

}

function runTemplateRenomearAtalho(parent, sys, formID, params) {
  var rule = new TemplateRenomearAtalho(parent, sys, formID);
  rule.run.apply(rule, params);
}


/**
 * Percorrer Lista
 */
function Tpt2139b88f012a45028a6f309d5391c231(parent, sys, formID) {
  this.ruleName = '__TPT_{2139B88F-012A-4502-8A6F-309D5391C231}';
  this.functionName = 'Tpt2139b88f012a45028a6f309d5391c231';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

Tpt2139b88f012a45028a6f309d5391c231.prototype = new Rule;

/**
 * Esta função executa a regra "__TPT_{2139B88F-012A-4502-8A6F-309D5391C231}"
 * @author master
 * @since 06/06/2016 14:18:41
 */
Tpt2139b88f012a45028a6f309d5391c231.prototype.run = function() {
  document.ruleNameForException = '__TPT_{2139B88F-012A-4502-8A6F-309D5391C231}';
  this.context = new Array();

  // Variáveis
  this.context['Contador'] = 0;

  this.context['Tamanho da Lista'] = 0;

  this.context['Objeto Lista'] = null;

  this.context['Contador'] = parseInt(1);

  /**
   * Criar Objeto Lista
   */
  this.context['Objeto Lista'] = ebfListParamsCreate.call(this, null, null);

  /**
   * Tamanho da lista
   */
  this.context['Tamanho da Lista'] = ebfListLength.call(this, this.context['Objeto Lista']);

  /**
   * Possui elemento ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], this.context['Tamanho da Lista']))) {

    /**
     * Complemente com a ação desejada
     */

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));
  }

  /**
   * Fim
   */
  return null;

}

function runTpt2139b88f012a45028a6f309d5391c231(parent, sys, formID, params) {
  var rule = new Tpt2139b88f012a45028a6f309d5391c231(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericoFluxoFiller(parent, sys, formID) {
  this.ruleName = 'Generico - Fluxo filler';
  this.functionName = 'GenericoFluxoFiller';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericoFluxoFiller.prototype = new Rule;

/**
 * Esta função executa a regra "Generico - Fluxo filler"
 * @author master
 * @since 16/03/2022 17:51:06
 */
GenericoFluxoFiller.prototype.run = function() {
  document.ruleNameForException = 'Generico - Fluxo filler';
  this.context = new Array();


  /**
   * Fim
   */
  return null;

}

function runGenericoFluxoFiller(parent, sys, formID, params) {
  var rule = new GenericoFluxoFiller(parent, sys, formID);
  rule.run.apply(rule, params);
}

function LoginBtnEsqueciMinhaSenha(parent, sys, formID) {
  this.ruleName = 'Login - BTN Esqueci minha senha';
  this.functionName = 'LoginBtnEsqueciMinhaSenha';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

LoginBtnEsqueciMinhaSenha.prototype = new Rule;

/**
 * Esta função executa a regra "Login - BTN Esqueci minha senha"
 * @param LOGIN equivale à variável this.context['LOGIN']<br/>
 * @author master
 * @since 02/07/2022 16:34:43
 */
LoginBtnEsqueciMinhaSenha.prototype.run = function() {
  document.ruleNameForException = 'Login - BTN Esqueci minha senha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['LOGIN'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['NOVA_SENHA'] = '';


  /**
   * Login nulo?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['LOGIN']))) {
      
    /**
     * O login deve ser informado
     */
    ActNewErrorMessage('Erro', 'Preencha o campo login para prosseguir!', null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Interação de confirmação
     */
    if (parseBoolean(ebfConfirm.call(this, 'Deseja recuperar sua senha ?'))) {
        
      /**
       * Gerar senha
       */
      this.context['NOVA_SENHA'] = gerarPassword.call(this);

      /**
       * Login - Esqueci minha Senha
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Login - Esqueci minha Senha', [this.context['LOGIN'], this.context['NOVA_SENHA']]);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Fim
       */
      return null;

    }

  }

}

function runLoginBtnEsqueciMinhaSenha(parent, sys, formID, params) {
  var rule = new LoginBtnEsqueciMinhaSenha(parent, sys, formID);
  rule.run.apply(rule, params);
}

function LoginEsqueciMinhaSenhaAoConfirmar(parent, sys, formID) {
  this.ruleName = 'Login - Esqueci minha Senha - Ao Confirmar';
  this.functionName = 'LoginEsqueciMinhaSenhaAoConfirmar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

LoginEsqueciMinhaSenhaAoConfirmar.prototype = new Rule;

/**
 * Esta função executa a regra "Login - Esqueci minha Senha - Ao Confirmar"
 * @param LISTA_RECEBIDA equivale à variável this.context['LISTA_RECEBIDA']<br/>
 * @author master
 * @since 12/7/2021 10:46:02 AM
 */
LoginEsqueciMinhaSenhaAoConfirmar.prototype.run = function() {
  document.ruleNameForException = 'Login - Esqueci minha Senha - Ao Confirmar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['LISTA_RECEBIDA'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['NOVA_SENHA'] = '';


  /**
   * Gerar senha
   */
  this.context['NOVA_SENHA'] = gerarPassword.call(this);

  /**
   * Login - Esqueci minha Senha
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Login - Esqueci minha Senha', [this.context['LISTA_RECEBIDA'], this.context['NOVA_SENHA']]);

  /**
   * Fim
   */
  return null;

}

function runLoginEsqueciMinhaSenhaAoConfirmar(parent, sys, formID, params) {
  var rule = new LoginEsqueciMinhaSenhaAoConfirmar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function LoginNovoAoEntrar(parent, sys, formID) {
  this.ruleName = 'Login - Novo - Ao entrar';
  this.functionName = 'LoginNovoAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

LoginNovoAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Login - Novo - Ao entrar"
 * @author master
 * @since 16/03/2022 20:05:30
 */
LoginNovoAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Login - Novo - Ao entrar';
  this.context = new Array();


  /**
   * Class tab0
   */
  ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'tab0'), 'class', 'tab-pane position-relative w-100 flex-fill overflow-visible show active row  d-flex justify-content-center');

  /**
   * Anexa na div main
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetMakerElementById.call(this, 'molduraMain'), ebfHtmlGetMakerElementById.call(this, 'container'));

  /**
   * Fim
   */
  return null;

}

function runLoginNovoAoEntrar(parent, sys, formID, params) {
  var rule = new LoginNovoAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateLoginAoPressionarTecla(parent, sys, formID) {
  this.ruleName = 'Template - Login - Ao Pressionar Tecla';
  this.functionName = 'TemplateLoginAoPressionarTecla';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateLoginAoPressionarTecla.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Login - Ao Pressionar Tecla"
 * @param Alt equivale à variável this.context['Alt']<br/>
 * @param Ctrl equivale à variável this.context['Ctrl']<br/>
 * @param Shift equivale à variável this.context['Shift']<br/>
 * @param Código da Tecla equivale à variável this.context['Código da Tecla']<br/>
 * @param Caractere da Tecla equivale à variável this.context['Caractere da Tecla']<br/>
 * @author master
 * @since 06/02/2020 10:54:24
 */
TemplateLoginAoPressionarTecla.prototype.run = function() {
  document.ruleNameForException = 'Template - Login - Ao Pressionar Tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Alt'] = this.checkType(arguments[0], 'Lógico');

  this.context['Ctrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['Shift'] = this.checkType(arguments[2], 'Lógico');

  this.context['Código da Tecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['Caractere da Tecla'] = this.checkType(arguments[4], 'Letras');


  /**
   * Tecla pressionada é ENTER?
   */
  if (parseBoolean((isEqual.call(this, this.context['Código da Tecla'], parseInt(13)) || isEqual.call(this, this.context['Caractere da Tecla'], 'Enter')))) {
      
    /**
     * Template - Login - Autenticar Usuario
     */
    new TemplateLoginAutenticarUsuario(this, this.getSystem(), this.getForm()).run(ebfFormGetComponentValue.call(this, '{BF4D777E-C74A-471E-9850-DD077B578876}', 'username'), ebfFormGetComponentValue.call(this, '{BF4D777E-C74A-471E-9850-DD077B578876}', 'password'));

    return this.FlowEnd1();

  } else {

    return this.FlowEnd1();

  }

}

TemplateLoginAoPressionarTecla.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateLoginAoPressionarTecla(parent, sys, formID, params) {
  var rule = new TemplateLoginAoPressionarTecla(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericosMostraEscondeCampos(parent, sys, formID) {
  this.ruleName = 'Genericos - Mostra/Esconde Campos';
  this.functionName = 'GenericosMostraEscondeCampos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericosMostraEscondeCampos.prototype = new Rule;

/**
 * Esta função executa a regra "Genericos - Mostra/Esconde Campos"
 * @param nomeCampos equivale à variável this.context['nomeCampos']<br/>
 * @param condicao equivale à variável this.context['condicao']<br/>
 * @author Rodrigo de Queiroz Souza
 * @since 24/08/2020 15:18:43
 */
GenericosMostraEscondeCampos.prototype.run = function() {
  document.ruleNameForException = 'Genericos - Mostra/Esconde Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Mostra/Esconde Campo
       */
      ebfFormSetVisible.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), this.context['condicao']);

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    } else {

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GenericosMostraEscondeCampos.prototype.FlowConnector2 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGenericosMostraEscondeCampos(parent, sys, formID, params) {
  var rule = new GenericosMostraEscondeCampos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateLoginFocarComponente(parent, sys, formID) {
  this.ruleName = 'Template - Login - Focar Componente';
  this.functionName = 'TemplateLoginFocarComponente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateLoginFocarComponente.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Login - Focar Componente"
 * @author master
 * @since 11/09/2020 10:40:40
 */
TemplateLoginFocarComponente.prototype.run = function() {
  document.ruleNameForException = 'Template - Login - Focar Componente';
  this.context = new Array();


  /**
   * Focar Componente
   */
  ebfFormSetFocus.call(this, 'username');

  /**
   * Fim
   */
  return null;

}

function runTemplateLoginFocarComponente(parent, sys, formID, params) {
  var rule = new TemplateLoginFocarComponente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidarEMailConfirmacao(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Validar e-mail confirmacao';
  this.functionName = 'PrecadastroValidarEMailConfirmacao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidarEMailConfirmacao.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Validar e-mail confirmacao"
 * @param email equivale à variável this.context['email']<br/>
 * @param confirmacaoEmail equivale à variável this.context['confirmacaoEmail']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 09/12/2021 14:39:56
 */
PrecadastroValidarEMailConfirmacao.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Validar e-mail confirmacao';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Letras');

  this.context['confirmacaoEmail'] = this.checkType(arguments[1], 'Letras');

  this.context['componente'] = this.checkType(arguments[2], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[3], 'Letras');

  this.context['mensagem'] = this.checkType(arguments[4], 'Letras');


  /**
   * Algum e-mail nulo ou vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirmacaoEmail'])))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * E-mails iguais?
     */
    if (parseBoolean(isEqual.call(this, ebfTrim.call(this, this.context['email']), ebfTrim.call(this, this.context['confirmacaoEmail'])))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirma')), parseInt(2)), 'class', 'form-control');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackconfirma', null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirma')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runPrecadastroValidarEMailConfirmacao(parent, sys, formID, params) {
  var rule = new PrecadastroValidarEMailConfirmacao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateFormularioPrincipalAoClicarNoMenu(parent, sys, formID) {
  this.ruleName = 'Template - Formulário Principal - Ao Clicar no Menu';
  this.functionName = 'TemplateFormularioPrincipalAoClicarNoMenu';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateFormularioPrincipalAoClicarNoMenu.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Formulário Principal - Ao Clicar no Menu"
 * @param Identificador equivale à variável this.context['Identificador']<br/>
 * @param Descrição equivale à variável this.context['Descrição']<br/>
 * @param Tipo equivale à variável this.context['Tipo']<br/>
 * @author MASTER
 * @since 03/09/2022 17:13:44
 */
TemplateFormularioPrincipalAoClicarNoMenu.prototype.run = function() {
  document.ruleNameForException = 'Template - Formulário Principal - Ao Clicar no Menu';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Identificador'] = this.checkType(arguments[0], 'Letras');

  this.context['Descrição'] = this.checkType(arguments[1], 'Letras');

  this.context['Tipo'] = this.checkType(arguments[2], 'Inteiro');

  // Variáveis
  this.context['Div Formulário'] = null;

  this.context['Iframe Formulário'] = null;

  this.context['Auxiliar'] = null;

  this.context['Aba do Menu'] = '';


  /**
   * É formulário?
   */
  if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(1)))) {
      
    /**
     * Template - Geral - Obter Propriedade do Formulário
     */
    this.context['Auxiliar'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Geral - Obter Propriedade do Formulário', [this.context['Identificador'], 'Popup']);

    /**
     * É flutuante?
     */
    if (parseBoolean((oprNot.call(this, isNullOrEmpty.call(this, this.context['Auxiliar'])) && isEqual.call(this, ebfToUpperCase.call(this, toString.call(this, this.context['Auxiliar'])), 'FALSE')))) {
        
      /**
       * Abrir Formulário
       */
      ebfFormOpenForm.call(this, this.context['Identificador']);

      return this.FlowConnector2();

    } else {

      /**
       * Obter aba do menu
       */
      this.context['Aba do Menu'] = ebfGetComponentProperty.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Menu', 'MenuAbas');

      /**
       * Aba foi definida?
       */
      if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Aba do Menu'])))) {
          
        /**
         * Adicionar formulário na aba
         */
        new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run(this.context['Aba do Menu'], this.context['Identificador'], this.context['Descrição']);


        return this.FlowConnector8();

      } else {

        /**
         * Limpar Moldura
         */
        ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

        /**
         * Abrir Formulário na Moldura
         */
        ebfFrameOpenForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', this.context['Identificador'], false, false);

        /**
         * Obter div do formulário
         */
        this.context['Div Formulário'] = ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'moldura')), parseInt(1));

        /**
         * Div do formulário existe?
         */
        if (parseBoolean(oprNot.call(this, isNull.call(this, this.context['Div Formulário'])))) {
            
          /**
           * Ajustar altura da div do formulário
           */
          ebfHtmlCssDefineStyle.call(this, this.context['Div Formulário'], 'height', '100%');

          /**
           * Obter iframe do formulário
           */
          this.context['Iframe Formulário'] = ebfHtmlGetElementsByTagName.call(this, 'iframe', this.context['Div Formulário']);

          /**
           * Iframe existe?
           */
          if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Iframe Formulário'])))) {
              
            /**
             * Ajustar altura do iframe do formulário
             */
            ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, this.context['Iframe Formulário'], parseInt(1)), 'height', '100%');

            return this.FlowConnector2();

          } else {

            return this.FlowConnector1();

          }

        } else {

          return this.FlowConnector4();

        }

      }

    }

  } else {

    /**
     * É relatório?
     */
    if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(2)))) {
        
      /**
       * Abrir Relatório
       */
      ebfOpenReport.call(this, this.context['Identificador'], false, null, this.context['Descrição']);

      return this.FlowConnector8();

    } else {

      /**
       * É fluxo?
       */
      if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(3)))) {
          
        /**
         * Executar Fluxo
         */
        ebfFlowExecute.call(this, this.context['Identificador'], null);

        return this.FlowConnector8();

      } else {

        /**
         * É ação pré definida?
         */
        if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(4)))) {
            
          /**
           * Executar Ação Pré Definida
           */
          ebfActionExecute.call(this, this.context['Identificador']);

          return this.FlowConnector9();

        } else {

          return this.FlowEnd2();

        }

      }

    }

  }

}

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector7 = function() {

    return this.FlowEnd2();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector8 = function() {

    return this.FlowConnector9();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector9 = function() {

    return this.FlowConnector7();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector1 = function() {

    return this.FlowConnector4();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector2 = function() {

    return this.FlowConnector1();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowConnector4 = function() {

    return this.FlowConnector7();
  }

TemplateFormularioPrincipalAoClicarNoMenu.prototype.FlowEnd2 = function() {

    /**
     * Fim
     */
    return null;
  }


function runTemplateFormularioPrincipalAoClicarNoMenu(parent, sys, formID, params) {
  var rule = new TemplateFormularioPrincipalAoClicarNoMenu(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidarCpf(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Validar CPF';
  this.functionName = 'PrecadastroValidarCpf';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidarCpf.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Validar CPF"
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 07/03/2022 20:52:22
 */
PrecadastroValidarCpf.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Validar CPF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;


  /**
   * CPF nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cpf']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Validar CPF
     */
    this.context['validacao'] = ebfIsCpf.call(this, ebfReplaceAll.call(this, ebfReplaceAll.call(this, this.context['cpf'], '.', ''), '-', ''));

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', '<div class=\"form-group\" style=\"color:#dc3545 !important;\">CPF Inválido!</div>');

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runPrecadastroValidarCpf(parent, sys, formID, params) {
  var rule = new PrecadastroValidarCpf(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroLimparAoPressionarTecla(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Limpar ao pressionar tecla';
  this.functionName = 'PrecadastroLimparAoPressionarTecla';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroLimparAoPressionarTecla.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Limpar ao pressionar tecla"
 * @param parametroAlt equivale à variável this.context['parametroAlt']<br/>
 * @param parametroCtrl equivale à variável this.context['parametroCtrl']<br/>
 * @param parametroShift equivale à variável this.context['parametroShift']<br/>
 * @param códigoTecla equivale à variável this.context['códigoTecla']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @author master
 * @since 07/03/2022 21:01:30
 */
PrecadastroLimparAoPressionarTecla.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Limpar ao pressionar tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametroAlt'] = this.checkType(arguments[0], 'Lógico');

  this.context['parametroCtrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['parametroShift'] = this.checkType(arguments[2], 'Lógico');

  this.context['códigoTecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['nome'] = this.checkType(arguments[4], 'Letras');

  this.context['componenteMsg'] = this.checkType(arguments[5], 'Componente');


  /**
   * Código = 13?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['códigoTecla']), toLong.call(this, parseInt(13))))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * True
     */
    if (parseBoolean(true)) {
        
      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Altera mensagem
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

      /**
       * Fim
       */
      return null;

    }

  }

}

function runPrecadastroLimparAoPressionarTecla(parent, sys, formID, params) {
  var rule = new PrecadastroLimparAoPressionarTecla(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidarEMail(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Validar e-mail';
  this.functionName = 'PrecadastroValidarEMail';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidarEMail.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Validar e-mail"
 * @param email equivale à variável this.context['email']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 09/12/2021 14:16:26
 */
PrecadastroValidarEMail.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Validar e-mail';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = '';


  /**
   * E-mail nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['email']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Validar e-mail
     */
    this.context['validacao'] = ebfIsEmail.call(this, this.context['email']);

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackemail', null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackemail', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runPrecadastroValidarEMail(parent, sys, formID, params) {
  var rule = new PrecadastroValidarEMail(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroAoModificarTipoDaPessoa(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Ao modificar tipo da pessoa';
  this.functionName = 'PrecadastroAoModificarTipoDaPessoa';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroAoModificarTipoDaPessoa.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Ao modificar tipo da pessoa"
 * @param inteiro equivale à variável this.context['inteiro']<br/>
 * @author master
 * @since 26/05/2022 19:32:59
 */
PrecadastroAoModificarTipoDaPessoa.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Ao modificar tipo da pessoa';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['inteiro'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * Pessoa jurídica?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['inteiro']), toLong.call(this, parseInt(1))))) {
      
    /**
     * Mostra cnpj
     */
    ebfFormSetVisible.call(this, 'MakerEdit2', true);

    /**
     * Limpa cpf
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'cpf', null);

    /**
     * Oculta cpf
     */
    ebfFormSetVisible.call(this, 'cpf', false);

    /**
     * Conteúdo da moldura feedback
     */
    ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

    /**
     * Altera Hint
     */
    ebfSetHint.call(this, 'EDTNM_FORNEC2', 'Os dados apresentados devem estar conforme o \"Comprovante de Inscrição e de Situação Cadastral\" emitido pela Receita federal.');

    /**
     * Altera descrição
     */
    ebfChangeDescription.call(this, 'EDTNM_FORNEC2', 'Razão Social');

    /**
     * Oculta Data de Nascimento
     */
    ebfFormSetVisible.call(this, 'dtNascimento', false);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Mostra cpf
     */
    ebfFormSetVisible.call(this, 'cpf', true);

    /**
     * Limpa cnpj
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerEdit2', null);

    /**
     * Oculta cnpj
     */
    ebfFormSetVisible.call(this, 'MakerEdit2', false);

    /**
     * Conteúdo da moldura feedback
     */
    ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

    /**
     * Altera Hint
     */
    ebfSetHint.call(this, 'EDTNM_FORNEC2', 'Os dados devem estar conforme \"Comprovante de Situação Cadastral no CPF\" emitido pela Receita Federal.');

    /**
     * Altera descrição
     */
    ebfChangeDescription.call(this, 'EDTNM_FORNEC2', 'Nome Completo');

    /**
     * Mostra Data de Nascimento
     */
    ebfFormSetVisible.call(this, 'dtNascimento', true);

    /**
     * Fim
     */
    return null;

  }

}

function runPrecadastroAoModificarTipoDaPessoa(parent, sys, formID, params) {
  var rule = new PrecadastroAoModificarTipoDaPessoa(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroLimparTermos(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Limpar Termos';
  this.functionName = 'PrecadastroLimparTermos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroLimparTermos.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Limpar Termos"
 * @author master
 * @since 13/02/2022 14:12:06
 */
PrecadastroLimparTermos.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Limpar Termos';
  this.context = new Array();


  /**
   * Limpa termosUso
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'termosUso', parseInt(0));

  /**
   * Limpa termosUso
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'termosPrivacidade', parseInt(0));

  /**
   * Fim
   */
  return null;

}

function runPrecadastroLimparTermos(parent, sys, formID, params) {
  var rule = new PrecadastroLimparTermos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroAoNavegar(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Ao navegar';
  this.functionName = 'PrecadastroAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Ao navegar"
 * @author master
 * @since 09/12/2021 18:43:20
 */
PrecadastroAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Ao navegar';
  this.context = new Array();


  /**
   * Alterar Moldura
   */
  ebgChangeValueGroupBox.call(this, 'msgTermos', '<span id=\"termos\" style=\"font-size:small;\">\n  Li e aceito os termos de uso (acesse aqui) e o Código de Conduta de Fornecedores da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/images/Servicos/Fornecedores/20200902_COD_CondutaIntegridadeFornecedoresParceiros.pdf\" target=\"_blank\" style=\"color:#4088C4;\"> aqui</a>). \n<span>');

  /**
   * Alterar Moldura Privacidade
   */
  ebgChangeValueGroupBox.call(this, 'msgPrivacidade', '<span style=\"font-size:small;\" id=\"privacidade\">\n  Li e aceito os termos da Política de Privacidade da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/index.php/institucional/aviso-de-privacidade\" target=\"_blank\"  style=\"color:#4088C4;\"> aqui</a>). \n<span>');

  /**
   * Criar script
   */
  ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

  /**
   * Alterar para jurídica
   */
  ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerRadioGroup1', parseInt(1));

  /**
   * Cria loader
   */
  ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'loader'), ebfListParamsCreate.call(this, 'class', 'loader'), ebfListParamsCreate.call(this, 'style', 'left: 40%; top: 50%; display: none; position: absolute;')), ebfHtmlGetMakerElementById.call(this, 'MakerContainer1'));

  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerBevel2'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    return this.FlowEnd1();

  } else {

    /**
     * left:35%
     */
    ebfCSSImportContent.call(this, '#MakerContainer1{\n    left: 35% !important;\n}', null);

    return this.FlowEnd1();

  }

}

PrecadastroAoNavegar.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runPrecadastroAoNavegar(parent, sys, formID, params) {
  var rule = new PrecadastroAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidaCaptcha(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Valida Captcha';
  this.functionName = 'PrecadastroValidaCaptcha';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidaCaptcha.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Valida Captcha"
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param cnpj equivale à variável this.context['cnpj']<br/>
 * @param login equivale à variável this.context['login']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param confirma equivale à variável this.context['confirma']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @param termosUso equivale à variável this.context['termosUso']<br/>
 * @param termosPrivacidade equivale à variável this.context['termosPrivacidade']<br/>
 * @param dtNascimento equivale à variável this.context['dtNascimento']<br/>
 * @author master
 * @since 16/05/2022 07:39:44
 */
PrecadastroValidaCaptcha.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Valida Captcha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['tipo'] = this.checkType(arguments[0], 'Inteiro');

  this.context['cpf'] = this.checkType(arguments[1], 'Letras');

  this.context['cnpj'] = this.checkType(arguments[2], 'Letras');

  this.context['login'] = this.checkType(arguments[3], 'Letras');

  this.context['email'] = this.checkType(arguments[4], 'Letras');

  this.context['confirma'] = this.checkType(arguments[5], 'Letras');

  this.context['nome'] = this.checkType(arguments[6], 'Letras');

  this.context['termosUso'] = this.checkType(arguments[7], 'Inteiro');

  this.context['termosPrivacidade'] = this.checkType(arguments[8], 'Inteiro');

  this.context['dtNascimento'] = this.checkType(arguments[9], 'Data');

  // Variáveis
  this.context['retorno'] = '';

  this.context['validacaoCapcha'] = false;

  this.context['response'] = '';

  this.context['retornoTermos'] = 0;


  /**
   * PreCadastro - Verificar Termos
   */
  this.context['retornoTermos'] = new PrecadastroVerificarTermos(this, this.getSystem(), this.getForm()).run(this.context['termosUso'], this.context['termosPrivacidade']);

  /**
   * Termos confirmados?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoTermos']), toLong.call(this, parseInt(0))))) {
      
    /**
     * Pessoa Jurídica?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['tipo']), toLong.call(this, parseInt(1))))) {
        
      /**
       * Algum campo vazio?
       */
      if (parseBoolean((isNullOrEmpty.call(this, this.context['cnpj']) || isNullOrEmpty.call(this, this.context['login']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome'])))) {
          
        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

        /**
         * Refresh
         */
        ebfExecuteJS.call(this, 'grecaptcha.reset();');

        /**
         * Fim
         */
        return null;

      } else {

        return this.FlowExpression8();

      }

    } else {

      /**
       * Algum campo vazio?
       */
      if (parseBoolean((isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['login']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome']) || isNullOrEmpty.call(this, this.context['dtNascimento'])))) {
          
        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

        /**
         * Refresh
         */
        ebfExecuteJS.call(this, 'grecaptcha.reset();');

        /**
         * Fim
         */
        return null;

      } else {

        return this.FlowExpression8();

      }

    }

  } else {

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * Fim
     */
    return null;

  }

}

PrecadastroValidaCaptcha.prototype.FlowExpression8 = function() {

    /**
     * Obtem response
     */
    this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

    /**
     * Recaptcha - Obter url via post
     */
    this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

    /**
     * Obtem retorno do captcha
     */
    this.context['validacaoCapcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

    /**
     * Validou?
     */
    if (parseBoolean(this.context['validacaoCapcha'])) {
        
      /**
       * PreCadastro - Cadastrar - Cliente
       */
      new PrecadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosPrivacidade'], this.context['nome'], this.context['dtNascimento']);

      /**
       * Refresh Recaptcha
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Captcha não validado!', null, null);

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * Fim
       */
      return null;

    }
  }


function runPrecadastroValidaCaptcha(parent, sys, formID, params) {
  var rule = new PrecadastroValidaCaptcha(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroVerificarTermos(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Verificar Termos';
  this.functionName = 'PrecadastroVerificarTermos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroVerificarTermos.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Verificar Termos"
 * @param termosUso equivale à variável this.context['termosUso']<br/>
 * @param termosPrivacidade equivale à variável this.context['termosPrivacidade']<br/>
 * @author master
 * @since 09/12/2021 19:02:03
 */
PrecadastroVerificarTermos.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Verificar Termos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['termosUso'] = this.checkType(arguments[0], 'Inteiro');

  this.context['termosPrivacidade'] = this.checkType(arguments[1], 'Inteiro');


  /**
   * Termos confirmados?
   */
  if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(1)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(1))))) {
      
    /**
     * Cor do texto - Termos
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:black !important;font-size:small;');

    /**
     * Cor do texto - Privacidade
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:black !important;font-size:small;');

    /**
     * Fim
     */
    return parseInt(0);

  } else {

    /**
     * Termos em branco?
     */
    if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(0)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(1))))) {
        
      /**
       * Cor do texto - Termos
       */
      ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:#dc3545 !important;font-size:small;');

      /**
       * Cor do texto - Privacidade
       */
      ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:black !important;font-size:small;');

      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage('É preciso aceitar os Termos de Uso e o Código de Conduta');

      /**
       * Fim
       */
      return parseInt(1);

    } else {

      /**
       * Privacidade em branco?
       */
      if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(1)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(0))))) {
          
        /**
         * Cor do texto - Privacidade
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * Cor do texto - Termos
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:black !important;font-size:small;');

        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('É preciso aceitar a Política de Privacidade');

        /**
         * Fim
         */
        return parseInt(1);

      } else {

        /**
         * Cor do texto - Termos
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * Cor do texto - Privacidade
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('É preciso aceitar os Termos de Uso e Código de Conduta e a Política de Privacidade');

        /**
         * Fim
         */
        return parseInt(1);

      }

    }

  }

}

function runPrecadastroVerificarTermos(parent, sys, formID, params) {
  var rule = new PrecadastroVerificarTermos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroCadastrarCliente(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Cadastrar - Cliente';
  this.functionName = 'PrecadastroCadastrarCliente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroCadastrarCliente.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Cadastrar - Cliente"
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param cnpj equivale à variável this.context['cnpj']<br/>
 * @param login equivale à variável this.context['login']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param confirma equivale à variável this.context['confirma']<br/>
 * @param termosUso equivale à variável this.context['termosUso']<br/>
 * @param termosCondicoes equivale à variável this.context['termosCondicoes']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @param dtNascimento equivale à variável this.context['dtNascimento']<br/>
 * @author master
 * @since 16/05/2022 08:10:29
 */
PrecadastroCadastrarCliente.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Cadastrar - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['tipo'] = this.checkType(arguments[0], 'Inteiro');

  this.context['cpf'] = this.checkType(arguments[1], 'Letras');

  this.context['cnpj'] = this.checkType(arguments[2], 'Letras');

  this.context['login'] = this.checkType(arguments[3], 'Letras');

  this.context['email'] = this.checkType(arguments[4], 'Letras');

  this.context['confirma'] = this.checkType(arguments[5], 'Letras');

  this.context['termosUso'] = this.checkType(arguments[6], 'Inteiro');

  this.context['termosCondicoes'] = this.checkType(arguments[7], 'Inteiro');

  this.context['nome'] = this.checkType(arguments[8], 'Letras');

  this.context['dtNascimento'] = this.checkType(arguments[9], 'Data');

  // Variáveis
  this.context['modal'] = null;


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Desabilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', false);

    /**
     * Mostra spinner
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'inline-block');

    /**
     * Altera descrição de MakerButton1
     */
    ebfChangeDescription.call(this, 'MakerButton1', 'Aguarde...     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:inline-block\" id=\"spinner\"></div>');

    /**
     * Executa fluxo servidor assíncrono
     */
    ebfAsyncJavaFlowExecute.call(this, 'PreCadastro - Cadastrar - Modal', ebfListParamsCreate.call(this, this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento']), 'PreCadastro - Retirar modal', ebfListParamsCreate.call(this, null, null), 'PreCadastro - Retirar modal', ebfListParamsCreate.call(this, null, null));

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Altera .modal-content
     */
    ebfCSSImportContent.call(this, '.modal-content   { \n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: 0.3rem;\n    outline: 0;\n    background: rgba(0, 0, 0, 0.1);\n    border: none;\n}', null);

    /**
     * Desabilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', false);

    /**
     * MakerBevel1; z-index:99
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerBevel1'), 'style', 'left: 32px; top: 144px; width: 385px; min-height: 345px; z-index: 99; display: block; position: absolute;');

    /**
     * Cria modal
     */
    this.context['modal'] = ebfBootstrapCreateModal.call(this, null, false, '<button class=\"btn btn-primary w-100\" type=\"button\" disabled>\n  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n  <span \">   Aguarde...</span>\n</button>', null, null, null);

    /**
     * Background transparente
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(3)), 'style', 'background: rgba(255, 255, 255, 0.1);  border: none;');

    /**
     * Ocultar cabeçalho - Modal
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(2)), 'style', 'display:none;');

    /**
     * Ocultar rodapé - Modal
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(4)), 'style', 'display:none;');

    /**
     * Agendar execução de fluxo
     */
    ebfRuleSchedulerNoParent.call(this, 'PreCadastro - Cadastrar - Modal - Intermediario', ebfListParamsCreate.call(this, this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento'], ebfGetElementFromList.call(this, this.context['modal'], parseInt(1))), parseInt(500));

    /**
     * Fim
     */
    return null;

  }

}

function runPrecadastroCadastrarCliente(parent, sys, formID, params) {
  var rule = new PrecadastroCadastrarCliente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidarLogin(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Validar login';
  this.functionName = 'PrecadastroValidarLogin';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidarLogin.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Validar login"
 * @param login equivale à variável this.context['login']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 04/07/2022 20:20:36
 */
PrecadastroValidarLogin.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Validar login';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['login'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;


  /**
   * CNPJ nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['login']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * Validar login
       */
      this.context['validacao'] = ebfValidateTextER.call(this, this.context['login'], '^[a-zA-Z]{1}[A-Za-z0-9]{7,11}$');

      /**
       * Validou?
       */
      if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
          
        /**
         * Remove class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit1')), parseInt(2)), 'class', 'form-control');

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbacklogin', null);

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit1')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbacklogin', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * True
         */
        if (parseBoolean(true)) {
            
          /**
           * Fim
           */
          return null;

        } else {

          /**
           * Altera mensagem
           */
          ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

          /**
           * Mostra mensagem
           */
          ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

          /**
           * Altera mensagem
           */
          ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

          /**
           * Mostra mensagem
           */
          ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

          /**
           * Fim
           */
          return null;

        }

      }

    } else {

      /**
       * Validar login
       */
      this.context['validacao'] = ebfValidateTextER.call(this, this.context['login'], '^[A-Za-z0-9._-]*$');

      /**
       * Fim
       */
      return null;

    }

  }

}

function runPrecadastroValidarLogin(parent, sys, formID, params) {
  var rule = new PrecadastroValidarLogin(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroValidarCnpj(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Validar CNPJ';
  this.functionName = 'PrecadastroValidarCnpj';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroValidarCnpj.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Validar CNPJ"
 * @param cnpj equivale à variável this.context['cnpj']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 07/03/2022 21:18:47
 */
PrecadastroValidarCnpj.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Validar CNPJ';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cnpj'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;


  /**
   * CNPJ nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cnpj']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Validar cpf/cnpj
     */
    this.context['validacao'] = ebfIsCnpj.call(this, this.context['cnpj']);

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit2')), parseInt(2)), 'class', 'form-control');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit2')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', '<div class=\"form-group\" style=\"color:#dc3545 !important;\">CNPJ Inválido!</div>');

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Atribui class is-invalid
         */
        ebfHtmlCssDefineStyle.call(this, null, 'class', 'form-group is-invalid');

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runPrecadastroValidarCnpj(parent, sys, formID, params) {
  var rule = new PrecadastroValidarCnpj(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAoNavegar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Ao navegar';
  this.functionName = 'CadastroAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Ao navegar"
 * @author master
 * @since 02/09/2022 19:45:06
 */
CadastroAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Ao navegar';
  this.context = new Array();


  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    return this.FlowDecision1();

  } else {

    /**
     * Alterar Moldura
     */
    ebgChangeValueGroupBox.call(this, 'msgTermos', '<span id=\"termos\" style=\"font-size:small;\">\n  Li e aceito os termos de uso (acesse aqui) e o Código de Conduta de Fornecedores da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/images/Servicos/Fornecedores/20200902_COD_CondutaIntegridadeFornecedoresParceiros.pdf\" target=\"_blank\" style=\"color:#4088C4;\"> aqui</a>). \n<span>');

    /**
     * Alterar Moldura Privacidade
     */
    ebgChangeValueGroupBox.call(this, 'msgPrivacidade', '<span style=\"font-size:small;\" id=\"privacidade\">\n  Li e aceito os termos da Política de Privacidade da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/index.php/institucional/aviso-de-privacidade\" target=\"_blank\"  style=\"color:#4088C4;\"> aqui</a>). \n<span>');

    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * Alterar para jurídica
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerRadioGroup1', parseInt(1));

    /**
     * Cria loader
     */
    ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'loader'), ebfListParamsCreate.call(this, 'class', 'loader'), ebfListParamsCreate.call(this, 'style', 'left: 40%; top: 50%; display: none; position: absolute;')), ebfHtmlGetMakerElementById.call(this, 'MakerContainer1'));

    return this.FlowDecision1();

  }

}

CadastroAoNavegar.prototype.FlowDecision1 = function() {

    /**
     * True
     */
    if (parseBoolean(true)) {
        
      /**
       * Cria captcha
       */
      ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

      return this.FlowEnd1();

    } else {

      /**
       * left:35%
       */
      ebfCSSImportContent.call(this, '#MakerContainer1{\n    left: 35% !important;\n}', null);

      return this.FlowEnd1();

    }
  }

CadastroAoNavegar.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runCadastroAoNavegar(parent, sys, formID, params) {
  var rule = new CadastroAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralLimparCampos(parent, sys, formID) {
  this.ruleName = 'Geral - Limpar Campos';
  this.functionName = 'GeralLimparCampos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralLimparCampos.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Limpar Campos"
 * @param camposLimpar equivale à variável this.context['camposLimpar']<br/>
 * @author master
 * @since 29/08/2022 19:43:31
 */
GeralLimparCampos.prototype.run = function() {
  document.ruleNameForException = 'Geral - Limpar Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['camposLimpar'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  this.context['contador'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['camposLimpar'], ',');

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Limpar Campo
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), '');

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    } else {

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GeralLimparCampos.prototype.FlowConnector2 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGeralLimparCampos(parent, sys, formID, params) {
  var rule = new GeralLimparCampos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericosMostrarOcultarColunaDaGrade(parent, sys, formID) {
  this.ruleName = 'Genericos - Mostrar / Ocultar coluna da grade';
  this.functionName = 'GenericosMostrarOcultarColunaDaGrade';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericosMostrarOcultarColunaDaGrade.prototype = new Rule;

/**
 * Esta função executa a regra "Genericos - Mostrar / Ocultar coluna da grade"
 * @param nomeColunas equivale à variável this.context['nomeColunas']<br/>
 * @param nomeGrade equivale à variável this.context['nomeGrade']<br/>
 * @param trueFalse equivale à variável this.context['trueFalse']<br/>
 * @author Rodrigo de Queiroz Souza
 * @since 23/04/2020 09:42:55
 */
GenericosMostrarOcultarColunaDaGrade.prototype.run = function() {
  document.ruleNameForException = 'Genericos - Mostrar / Ocultar coluna da grade';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeColunas'] = this.checkType(arguments[0], 'Letras');

  this.context['nomeGrade'] = this.checkType(arguments[1], 'Componente');

  this.context['trueFalse'] = this.checkType(arguments[2], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['listaColunas'] = null;

  this.context['totalColunas'] = 0;


  /**
   * Obtem lista de colunas
   */
  this.context['listaColunas'] = ebfSplit.call(this, this.context['nomeColunas'], ',');

  /**
   * Obtem total de colunas
   */
  this.context['totalColunas'] = ebfListLength.call(this, this.context['listaColunas']);

  /**
   * Contador < total de colunas?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

    /**
     * Mostra oculta coluna
     */
    ebfGridShowColumn.call(this, ebfGetIdForm.call(this, ebfGetActualForm.call(this)), this.context['nomeGrade'], toString.call(this, ebfTrim.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['listaColunas'], toLong.call(this, oprAdd.call(this, this.context['contador'], parseInt(1))))))), this.context['trueFalse']);

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));
  }

  /**
   * Fim
   */
  return null;

}

function runGenericosMostrarOcultarColunaDaGrade(parent, sys, formID, params) {
  var rule = new GenericosMostrarOcultarColunaDaGrade(parent, sys, formID);
  rule.run.apply(rule, params);
}

function AbasFormularioPrincipalAoNavegar(parent, sys, formID) {
  this.ruleName = 'Abas - Formulário Principal - Ao navegar';
  this.functionName = 'AbasFormularioPrincipalAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

AbasFormularioPrincipalAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Abas - Formulário Principal - Ao navegar"
 * @author master
 * @since 06/06/2021 11:00:33
 */
AbasFormularioPrincipalAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Abas - Formulário Principal - Ao navegar';
  this.context = new Array();


  /**
   * Obtem div
   */
  ebfAlertMessage.call(this, ebfGetFloatingFormDivById.call(this, 'Chat'));

  /**
   * Alertar
   */
  ebfAlertMessage.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'class'));

  /**
   * Minimizar chat
   */
  ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'class', 'card shadow border position-absolute WFRIframeForm WFRIframeForm-Minimized');

  /**
   * Alertar
   */
  ebfAlertMessage.call(this, ebfHtmlGetElementById.call(this, 'minimizedFloatingDivs'));

  /**
   * inclui form na div mimizada
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'minimizedFloatingDivs'), '<div class=\"col-sm-3 bg-light border rounded shadow-sm overflow-hidden\" id=\"MinWFRIframeForm8395\"><div class=\"card-header bg-light p-0 d-flex flex-row h-100\">\n<h6 class=\"d-flex align-items-center my-0 mr-auto overflow-hidden\" style=\"user-select: none;\">\n<span class=\"flex-fill mw-100 text-nowrap overflow-hidden p-2\" style=\"text-overflow: ellipsis;\">Chat</span></h6>\n<div class=\"d-flex flex-row\">\n<a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionMinimize\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-window-maximize\" style=\"font-size: 0.7rem;\"></span></a>\n<a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionRefresh\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-redo\" style=\"font-size: 0.8rem;\"></span></a><a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionClose\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-times\" style=\"font-size: 0.8rem;\"></span></a></div></div></div>');

  /**
   * Oculta Form
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'display', 'none');

  /**
   * Fim
   */
  return null;

}

function runAbasFormularioPrincipalAoNavegar(parent, sys, formID, params) {
  var rule = new AbasFormularioPrincipalAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function AbasMenuCollapseOpcoesDoUsuario(parent, sys, formID) {
  this.ruleName = 'Abas - Menu Collapse Opções do Usuário';
  this.functionName = 'AbasMenuCollapseOpcoesDoUsuario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

AbasMenuCollapseOpcoesDoUsuario.prototype = new Rule;

/**
 * Esta função executa a regra "Abas - Menu Collapse Opções do Usuário"
 * @author master
 * @since 02/03/2020 19:48:06
 */
AbasMenuCollapseOpcoesDoUsuario.prototype.run = function() {
  document.ruleNameForException = 'Abas - Menu Collapse Opções do Usuário';
  this.context = new Array();


  /**
   * Menu Collapse (remove classe navbar-expand-sm)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'iconsPrincipal'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'navbar-expand-sm'));

  /**
   * Fim
   */
  return null;

}

function runAbasMenuCollapseOpcoesDoUsuario(parent, sys, formID, params) {
  var rule = new AbasMenuCollapseOpcoesDoUsuario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function FormularioPrincipalChecaSeTemObjetivosEspecificos(parent, sys, formID) {
  this.ruleName = 'Formulario Principal - Checa se tem objetivos especificos';
  this.functionName = 'FormularioPrincipalChecaSeTemObjetivosEspecificos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

FormularioPrincipalChecaSeTemObjetivosEspecificos.prototype = new Rule;

/**
 * Esta função executa a regra "Formulario Principal - Checa se tem objetivos especificos"
 * @author master
 * @since 13/08/2020 09:34:54
 */
FormularioPrincipalChecaSeTemObjetivosEspecificos.prototype.run = function() {
  document.ruleNameForException = 'Formulario Principal - Checa se tem objetivos especificos';
  this.context = new Array();

  // Variáveis
  this.context['qtdObjetivo'] = 0;


  /**
   * Quantidade de objetivos específicos
   */
  this.context['qtdObjetivo'] = ebfGetSessionAttribute.call(this, 'sessaoQtdObjetivo', false);

  /**
   * Qtd = 0?
   */
  if (parseBoolean(isEqual.call(this, this.context['qtdObjetivo'], parseInt(0)))) {
      
    /**
     * Esconde popNotifications
     */
    ebfFormSetVisible.call(this, 'popNotifications', false);

    /**
     * Fim
     */
    return parseInt(0);

  } else {

    /**
     * Mostra popNotifications
     */
    ebfFormSetVisible.call(this, 'popNotifications', true);

    /**
     * Altera descrição de popNotifications
     */
    ebfChangeDescription.call(this, 'popNotifications', ebfReplace.call(this, '<span id=\"p_notify\" class=\"badge badge-light m-auto\">:X</span><i class=\"fas fa-bell m-auto\"></i>', ':X', this.context['qtdObjetivo']));

    /**
     * Fim
     */
    return parseInt(1);

  }

}

function runFormularioPrincipalChecaSeTemObjetivosEspecificos(parent, sys, formID, params) {
  var rule = new FormularioPrincipalChecaSeTemObjetivosEspecificos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaIntermediario(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Intermediario';
  this.functionName = 'TomadorPagarParcelaIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Intermediario"
 * @param logico equivale à variável this.context['logico']<br/>
 * @param idLancamento equivale à variável this.context['idLancamento']<br/>
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param idTomador equivale à variável this.context['idTomador']<br/>
 * @author Master Albuquerque Santos
 * @since 28/01/2023 18:02:52
 */
TomadorPagarParcelaIntermediario.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idLancamento'] = this.checkType(arguments[1], 'Inteiro');

  this.context['idTransacao'] = this.checkType(arguments[2], 'Inteiro');

  this.context['idTomador'] = this.checkType(arguments[3], 'Inteiro');


  /**
   * Tomador - Pagar Parcela - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Pagar Parcela - Servidor', [this.context['idLancamento'], this.context['idTransacao'], this.context['idTomador']]);

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Parcela paga com sucesso!', null, null);

  /**
   * Desabilia botão
   */
  ebfFormSetEnabled.call(this, 'botaoPagar', false);

  /**
   * Executa no principal
   */
  ebfChannelExecuteRuleOnForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Tomador - Pagar Parcela - Executa no principal', ebfListParamsCreate.call(this, null), null, null);

  /**
   * Fim
   */
  return null;

}

function runTomadorPagarParcelaIntermediario(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroCadastrarModalIntermediario(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Cadastrar - Modal - Intermediario';
  this.functionName = 'PrecadastroCadastrarModalIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroCadastrarModalIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Cadastrar - Modal - Intermediario"
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param cnpj equivale à variável this.context['cnpj']<br/>
 * @param login equivale à variável this.context['login']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param confirma equivale à variável this.context['confirma']<br/>
 * @param termosUso equivale à variável this.context['termosUso']<br/>
 * @param termosCondicoes equivale à variável this.context['termosCondicoes']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @param dtNascimento equivale à variável this.context['dtNascimento']<br/>
 * @param modal equivale à variável this.context['modal']<br/>
 * @author master
 * @since 26/05/2022 19:33:30
 */
PrecadastroCadastrarModalIntermediario.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Cadastrar - Modal - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['tipo'] = this.checkType(arguments[0], 'Inteiro');

  this.context['cpf'] = this.checkType(arguments[1], 'Letras');

  this.context['cnpj'] = this.checkType(arguments[2], 'Letras');

  this.context['login'] = this.checkType(arguments[3], 'Letras');

  this.context['email'] = this.checkType(arguments[4], 'Letras');

  this.context['confirma'] = this.checkType(arguments[5], 'Letras');

  this.context['termosUso'] = this.checkType(arguments[6], 'Inteiro');

  this.context['termosCondicoes'] = this.checkType(arguments[7], 'Inteiro');

  this.context['nome'] = this.checkType(arguments[8], 'Letras');

  this.context['dtNascimento'] = this.checkType(arguments[9], 'Data');

  this.context['modal'] = this.checkType(arguments[10], 'Variante');

  // Variáveis
  this.context['retorno'] = '';


  /**
   * PreCadastro - Cadastrar - Modal - Agenda
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'PreCadastro - Cadastrar - Modal - Agenda', [this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento'], this.context['modal']]);

  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * Limpa Campos
   */
  new GenericosLimparCampos(this, this.getSystem(), this.getForm()).run(parseInt(464570527), 'MakerEdit2,cpf,MakerEdit1,email,emailConfirma,EDTNM_FORNEC2,dtNascimento');

  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * Retorno nulo?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
      
    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage('Pré Cadastro Efetuado!', 'A senha foi enviada para o e-mail informado. O acesso ao sistema será liberado após a conferência das informaçoes.', null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage(this.context['retorno']);

    /**
     * Fim
     */
    return null;

  }

}

function runPrecadastroCadastrarModalIntermediario(parent, sys, formID, params) {
  var rule = new PrecadastroCadastrarModalIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroRetirarModal(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Retirar modal';
  this.functionName = 'PrecadastroRetirarModal';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroRetirarModal.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Retirar modal"
 * @param retorno equivale à variável this.context['retorno']<br/>
 * @param modal equivale à variável this.context['modal']<br/>
 * @author master
 * @since 16/05/2022 08:10:09
 */
PrecadastroRetirarModal.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Retirar modal';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Ocultar spinner
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'none');

    /**
     * Altera descrição de MakerButton1
     */
    ebfChangeDescription.call(this, 'MakerButton1', 'Cadastrar     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:none\" id=\"spinner\"></div>');

    return this.FlowExpression4();

  } else {

    /**
     * Fecha modal
     */
    ebfBootstrapCloseModal.call(this, this.context['modal']);

    return this.FlowExpression4();

  }

}

PrecadastroRetirarModal.prototype.FlowExpression4 = function() {

    /**
     * Habilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', true);

    /**
     * Retorno nulo ou vazio?
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
        
      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Pré Cadastro Efetuado!', 'A senha foi enviada para o e-mail informado. O acesso ao sistema será liberado após a conferência das informaçoes.', null, null);

      /**
       * Limpar Campos
       */
      new GenericosLimparCampos(this, this.getSystem(), this.getForm()).run(ebfGetGUIDActualForm.call(this), 'MakerEdit2,cpf,MakerEdit1,email,emailConfirma,EDTNM_FORNEC2');

      /**
       * PreCadastro - Limpar Termos
       */
      new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage(this.context['retorno']);

      /**
       * Refresh Recaptcha
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * PreCadastro - Limpar Termos
       */
      new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

      /**
       * Fim
       */
      return null;

    }
  }


function runPrecadastroRetirarModal(parent, sys, formID, params) {
  var rule = new PrecadastroRetirarModal(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroRetirarModalErro(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Retirar modal - Erro';
  this.functionName = 'PrecadastroRetirarModalErro';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroRetirarModalErro.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Retirar modal - Erro"
 * @param retorno equivale à variável this.context['retorno']<br/>
 * @param modal equivale à variável this.context['modal']<br/>
 * @author master
 * @since 15/05/2022 22:06:56
 */
PrecadastroRetirarModalErro.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Retirar modal - Erro';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');


  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * Fim
   */
  return null;

}

function runPrecadastroRetirarModalErro(parent, sys, formID, params) {
  var rule = new PrecadastroRetirarModalErro(parent, sys, formID);
  rule.run.apply(rule, params);
}

function PrecadastroRetirarModalSub(parent, sys, formID) {
  this.ruleName = 'PreCadastro - Retirar modal - Sub';
  this.functionName = 'PrecadastroRetirarModalSub';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

PrecadastroRetirarModalSub.prototype = new Rule;

/**
 * Esta função executa a regra "PreCadastro - Retirar modal - Sub"
 * @param retorno equivale à variável this.context['retorno']<br/>
 * @param modal equivale à variável this.context['modal']<br/>
 * @author master
 * @since 15/05/2022 22:37:02
 */
PrecadastroRetirarModalSub.prototype.run = function() {
  document.ruleNameForException = 'PreCadastro - Retirar modal - Sub';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');


  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * Fim
   */
  return null;

}

function runPrecadastroRetirarModalSub(parent, sys, formID, params) {
  var rule = new PrecadastroRetirarModalSub(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericosLimparCampos(parent, sys, formID) {
  this.ruleName = 'Genericos - Limpar Campos';
  this.functionName = 'GenericosLimparCampos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericosLimparCampos.prototype = new Rule;

/**
 * Esta função executa a regra "Genericos - Limpar Campos"
 * @param idFormulario equivale à variável this.context['idFormulario']<br/>
 * @param camposLimpar equivale à variável this.context['camposLimpar']<br/>
 * @author MASTER
 * @since 11/09/2022 15:15:48
 */
GenericosLimparCampos.prototype.run = function() {
  document.ruleNameForException = 'Genericos - Limpar Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idFormulario'] = this.checkType(arguments[0], 'Inteiro');

  this.context['camposLimpar'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  this.context['contador'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['camposLimpar'], ',');

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Limpar Campo
       */
      ebfFormChangeComponentValue.call(this, this.context['idFormulario'], toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), '');

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    } else {

      var FlowConnector2 = this.FlowConnector2();
      if (!(FlowConnector2 instanceof InvalidVariant)) {
        return FlowConnector2;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GenericosLimparCampos.prototype.FlowConnector2 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGenericosLimparCampos(parent, sys, formID, params) {
  var rule = new GenericosLimparCampos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericosHabilitaDesabilitaCampos(parent, sys, formID) {
  this.ruleName = 'Genericos - Habilita/Desabilita Campos';
  this.functionName = 'GenericosHabilitaDesabilitaCampos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericosHabilitaDesabilitaCampos.prototype = new Rule;

/**
 * Esta função executa a regra "Genericos - Habilita/Desabilita Campos"
 * @param nomeCampos equivale à variável this.context['nomeCampos']<br/>
 * @param condicao equivale à variável this.context['condicao']<br/>
 * @author master
 * @since 02/09/2022 19:27:47
 */
GenericosHabilitaDesabilitaCampos.prototype.run = function() {
  document.ruleNameForException = 'Genericos - Habilita/Desabilita Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Habilita Campo
       */
      ebfFormSetEnabled.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), this.context['condicao']);

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    } else {

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GenericosHabilitaDesabilitaCampos.prototype.FlowConnector1 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGenericosHabilitaDesabilitaCampos(parent, sys, formID, params) {
  var rule = new GenericosHabilitaDesabilitaCampos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GenericosHabilitaDesabilitaNaMoldura(parent, sys, formID) {
  this.ruleName = 'Genericos - Habilita/Desabilita na Moldura';
  this.functionName = 'GenericosHabilitaDesabilitaNaMoldura';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GenericosHabilitaDesabilitaNaMoldura.prototype = new Rule;

/**
 * Esta função executa a regra "Genericos - Habilita/Desabilita na Moldura"
 * @param nomeCampos equivale à variável this.context['nomeCampos']<br/>
 * @param condicao equivale à variável this.context['condicao']<br/>
 * @author Rodrigo de Queiroz Souza
 * @since 21/07/2020 11:45:22
 */
GenericosHabilitaDesabilitaNaMoldura.prototype.run = function() {
  document.ruleNameForException = 'Genericos - Habilita/Desabilita na Moldura';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Habilita Campo
       */
      ebfGroupBoxEnabledComponents.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), this.context['condicao']);

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    } else {

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GenericosHabilitaDesabilitaNaMoldura.prototype.FlowConnector1 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGenericosHabilitaDesabilitaNaMoldura(parent, sys, formID, params) {
  var rule = new GenericosHabilitaDesabilitaNaMoldura(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroCadastrarCliente(parent, sys, formID) {
  this.ruleName = 'Cadastro - Cadastrar - Cliente';
  this.functionName = 'CadastroCadastrarCliente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroCadastrarCliente.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Cadastrar - Cliente"
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param confirma equivale à variável this.context['confirma']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @author MASTER
 * @since 03/09/2022 17:57:41
 */
CadastroCadastrarCliente.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Cadastrar - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  this.context['confirma'] = this.checkType(arguments[2], 'Letras');

  this.context['nome'] = this.checkType(arguments[3], 'Letras');


  /**
   * Desabilita cadastrar
   */
  ebfFormSetEnabled.call(this, 'cadastrar', false);

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'inline-block');

  /**
   * Altera descrição de cadastrar
   */
  ebfChangeDescription.call(this, 'cadastrar', 'Aguarde...     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:inline-block\" id=\"spinner\"></div>');

  /**
   * Executa fluxo servidor assíncrono
   */
  ebfAsyncJavaFlowExecute.call(this, 'Cadastro - Cadastrar - Verificações', ebfListParamsCreate.call(this, this.context['cpf'], this.context['email'], this.context['confirma'], null, null, this.context['nome']), 'Cadastro - Callback', ebfListParamsCreate.call(this, null, null), 'Cadastro - Callback', ebfListParamsCreate.call(this, null, null));

  /**
   * Fim
   */
  return null;

}

function runCadastroCadastrarCliente(parent, sys, formID, params) {
  var rule = new CadastroCadastrarCliente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function ValidacaoCriaLinkExpirado(parent, sys, formID) {
  this.ruleName = 'Validação - Cria link expirado';
  this.functionName = 'ValidacaoCriaLinkExpirado';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

ValidacaoCriaLinkExpirado.prototype = new Rule;

/**
 * Esta função executa a regra "Validação - Cria link expirado"
 * @param hash equivale à variável this.context['hash']<br/>
 * @author MASTER
 * @since 11/09/2022 10:28:46
 */
ValidacaoCriaLinkExpirado.prototype.run = function() {
  document.ruleNameForException = 'Validação - Cria link expirado';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['hash'] = this.checkType(arguments[0], 'Letras');


  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

  /**
   * Altera mensagem
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'msg', '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: larger;\">Link Expirado! Solicite um novo link clicando <a id=\"link\" href=\"#\"><font style=\"color:#2E7D32\">aqui</font></a></span>\n</center>');

  /**
   * Associa evento ao id
   */
  ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetElementById.call(this, 'link'), 'onclick', 'Verificacao - Envia novo link', ebfListParamsCreate.call(this, this.context['hash']), false);

  /**
   * Fim
   */
  return null;

}

function runValidacaoCriaLinkExpirado(parent, sys, formID, params) {
  var rule = new ValidacaoCriaLinkExpirado(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAlterarCentralizacaoDasColunasDaGrade(parent, sys, formID) {
  this.ruleName = 'Geral - Alterar centralização das colunas da grade';
  this.functionName = 'GeralAlterarCentralizacaoDasColunasDaGrade';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAlterarCentralizacaoDasColunasDaGrade.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Alterar centralização das colunas da grade"
 * @param grade equivale à variável this.context['grade']<br/>
 * @param listaColunas equivale à variável this.context['listaColunas']<br/>
 * @param posicao equivale à variável this.context['posicao']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 16:16:20
 */
GeralAlterarCentralizacaoDasColunasDaGrade.prototype.run = function() {
  document.ruleNameForException = 'Geral - Alterar centralização das colunas da grade';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['grade'] = this.checkType(arguments[0], 'Componente');

  this.context['listaColunas'] = this.checkType(arguments[1], 'Letras');

  this.context['posicao'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['listaVariante'] = null;

  this.context['tamanhoLista'] = 0;

  this.context['contador'] = 0;

  this.context['contador'] = parseInt(0);

  /**
   * Obtem lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaColunas'], ',');

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * Contador <= Tamanho da Lista?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * Coluna inexistente?
     */
    if (parseBoolean(isEqual.call(this, ebfGridFindColumn.call(this, this.context['grade'], ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador'])), parseInt(-1)))) {
        
      var FlowExpression3 = this.FlowExpression3();
      if (!(FlowExpression3 instanceof InvalidVariant)) {
        return FlowExpression3;
      }

    } else {

      /**
       * Altera alinhamento
       */
      ebfGridSetAlignColumn.call(this, this.context['grade'], ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador']), this.context['posicao']);

      var FlowExpression3 = this.FlowExpression3();
      if (!(FlowExpression3 instanceof InvalidVariant)) {
        return FlowExpression3;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GeralAlterarCentralizacaoDasColunasDaGrade.prototype.FlowExpression3 = function() {

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGeralAlterarCentralizacaoDasColunasDaGrade(parent, sys, formID, params) {
  var rule = new GeralAlterarCentralizacaoDasColunasDaGrade(parent, sys, formID);
  rule.run.apply(rule, params);
}

function ValidacaoAoEntrar(parent, sys, formID) {
  this.ruleName = 'Validação - Ao entrar';
  this.functionName = 'ValidacaoAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

ValidacaoAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Validação - Ao entrar"
 * @author MASTER
 * @since 11/09/2022 10:21:13
 */
ValidacaoAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Validação - Ao entrar';
  this.context = new Array();

  // Variáveis
  this.context['hash'] = '';


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowSubRoutine1();

  } else {

    /**
     * Timer
     */
    ebfTimerCreate.call(this, 'timer', ebfGetGUIDActualForm.call(this), 'temporizador');

    /**
     * Timer
     */
    ebfTimerStart.call(this, 'timer');

    return this.FlowSubRoutine1();

  }

}

ValidacaoAoEntrar.prototype.FlowSubRoutine1 = function() {

    /**
     * Geral - Define <title> do form externo
     */
    new GeralDefineTitleDoFormExterno(this, this.getSystem(), this.getForm()).run('Peg2Pag - Validação de Cadastro');

    /**
     * Obtem hash
     */
    this.context['hash'] = ebfRequestGetParameter.call(this, 'validator');

    /**
     * Hash nulo ou vazio?
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['hash']))) {
        
      /**
       * Importar css
       */
      ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

      /**
       * Define conteúdo
       */
      ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span>Link inválido!</span>\n</center>');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Validação - Ao entrar - Servidor
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Validação - Ao entrar - Servidor', [this.context['hash']]);

      /**
       * Fim
       */
      return null;

    }
  }


function runValidacaoAoEntrar(parent, sys, formID, params) {
  var rule = new ValidacaoAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function VerificacaoEnviaNovoLink(parent, sys, formID) {
  this.ruleName = 'Verificacao - Envia novo link';
  this.functionName = 'VerificacaoEnviaNovoLink';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

VerificacaoEnviaNovoLink.prototype = new Rule;

/**
 * Esta função executa a regra "Verificacao - Envia novo link"
 * @param hash equivale à variável this.context['hash']<br/>
 * @author MASTER
 * @since 11/09/2022 08:22:56
 */
VerificacaoEnviaNovoLink.prototype.run = function() {
  document.ruleNameForException = 'Verificacao - Envia novo link';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['hash'] = this.checkType(arguments[0], 'Letras');


  /**
   * Mostra spinner
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"spinner-border spinner-border-sm text-success\" role=\"status\">\n</div>\n &nbsp;&nbsp;<span style=\"\nfont-size: large;\n\">Gerando novo link</span>');

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Executar fluxo servidor assíncrono
     */
    ebfAsyncJavaFlowExecute.call(this, 'Verificacao - Envia novo link - Servidor', ebfListParamsCreate.call(this, this.context['hash']), 'Verificacao - Envia novo link - Callback True', ebfListCreate.call(this), 'Verificacao - Envia novo link - Callback True', ebfListCreate.call(this));

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Verificacao - Envia novo link - Servidor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Verificacao - Envia novo link - Servidor', [this.context['hash']]);

    /**
     * Fim
     */
    return null;

  }

}

function runVerificacaoEnviaNovoLink(parent, sys, formID, params) {
  var rule = new VerificacaoEnviaNovoLink(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaExecutaNoPrincipal(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Executa no principal';
  this.functionName = 'TomadorPagarParcelaExecutaNoPrincipal';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaExecutaNoPrincipal.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Executa no principal"
 * @author Master Albuquerque Santos
 * @since 28/01/2023 17:49:21
 */
TomadorPagarParcelaExecutaNoPrincipal.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Executa no principal';
  this.context = new Array();


  /**
   * Executa no filho
   */
  ebfChannelExecuteRuleOnForm.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'Tomador - Pagar Parcela - Executa na moldura', ebfListParamsCreate.call(this, null), null, null);

  /**
   * Fim
   */
  return null;

}

function runTomadorPagarParcelaExecutaNoPrincipal(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaExecutaNoPrincipal(parent, sys, formID);
  rule.run.apply(rule, params);
}

function VerificacaoEnviaNovoLinkCallbackError(parent, sys, formID) {
  this.ruleName = 'Verificacao - Envia novo link - Callback Error';
  this.functionName = 'VerificacaoEnviaNovoLinkCallbackError';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

VerificacaoEnviaNovoLinkCallbackError.prototype = new Rule;

/**
 * Esta função executa a regra "Verificacao - Envia novo link - Callback Error"
 * @param parametro equivale à variável this.context['parametro']<br/>
 * @author MASTER
 * @since 11/09/2022 10:24:37
 */
VerificacaoEnviaNovoLinkCallbackError.prototype.run = function() {
  document.ruleNameForException = 'Verificacao - Envia novo link - Callback Error';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');


  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Cadastro não encontrado!</span>\n</center>');

  /**
   * Fim
   */
  return null;

}

function runVerificacaoEnviaNovoLinkCallbackError(parent, sys, formID, params) {
  var rule = new VerificacaoEnviaNovoLinkCallbackError(parent, sys, formID);
  rule.run.apply(rule, params);
}

function ValidacaoSucesso(parent, sys, formID) {
  this.ruleName = 'Validação - Sucesso';
  this.functionName = 'ValidacaoSucesso';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

ValidacaoSucesso.prototype = new Rule;

/**
 * Esta função executa a regra "Validação - Sucesso"
 * @param parametro equivale à variável this.context['parametro']<br/>
 * @author MASTER
 * @since 11/09/2022 10:47:45
 */
ValidacaoSucesso.prototype.run = function() {
  document.ruleNameForException = 'Validação - Sucesso';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');


  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.success-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.success-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #4CAF50;\n}\n.success-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.success-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.success-checkmark .check-icon::before, .success-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.success-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #4CAF50;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.success-checkmark .check-icon .icon-line.line-tip {\n  top: 46px;\n  left: 14px;\n  width: 25px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.success-checkmark .check-icon .icon-line.line-long {\n  top: 38px;\n  right: 8px;\n  width: 47px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.success-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(76, 175, 80, 0.5);\n}\n.success-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n@keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}', null);

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"success-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Cadastro validado com sucesso! Aguarde enquanto redirecionamos para a tela de login</span>\n</center>');

  /**
   * Validação - Redireciona
   */
  ebfRuleSchedulerNoParent.call(this, 'Validação - Redirecionar para login', ebfListCreate.call(this), parseFloat(3000));

  /**
   * Fim
   */
  return null;

}

function runValidacaoSucesso(parent, sys, formID, params) {
  var rule = new ValidacaoSucesso(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSimulacaoAoEntrar(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Simulação - Ao entrar';
  this.functionName = 'EmprestimoSimulacaoAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSimulacaoAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Simulação - Ao entrar"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @author Master Albuquerque Santos
 * @since 01/01/2023 17:45:00
 */
EmprestimoSimulacaoAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Simulação - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipo'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['retorno'] = 0;

  this.context['vsTomadorFinalizarQuestionario'] = 0;


  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'parcelas'), '<div class=\"container\">\n   <div class=\"row\">\n      <div class=\"col-md-6\">\n         <h4>Simulação - Parcelas</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n          Suas parcelas serão mostradas aqui\n         </ul>\n      </div>\n   \n   </div>\n<div class=\"row\">\n   <div class=\"col-md-2\">\n         <span> </span>\n  </div>\n</div>\n</div>');

  /**
   * Inicializa tooltip
   */
  ebfExecuteJS.call(this, '$(document).ready(function(){\n  $(\'[data-toggle=\"tooltip\"]\').tooltip();   \n});');

  /**
   * Obtem vsTomadorFinalizarQuestionario
   */
  this.context['vsTomadorFinalizarQuestionario'] = ebfGetSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', false);

  /**
   * Altera descrição de valorSimulacao
   */
  ebfChangeDescription.call(this, 'valorSimulacao', 'Digite o Valor Desejado <span id=\"alertaBadge\" class=\"badge badge-warning\"  data-toggle=\"tooltip\" data-placement=\"right\" title=\"Valor Estimado. O valor final pode ser menor do que o estimado.\">!</span>');

  /**
   * vsTomadorFinalizarQuestionario = 1?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['vsTomadorFinalizarQuestionario']), toLong.call(this, parseInt(1))))) {
      
    /**
     * Remove vsTomadorFinalizarQuestionario
     */
    ebfRemoveSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', false);

    return this.FlowSubRoutine2();

  } else {

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Emprestimo - Checa se respondeu questionario
       */
      this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Checa se respondeu questionario', [this.context['idPessoa'], this.context['tipo']]);

      /**
       * Retorno igual a 0?
       */
      if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
          
        return this.FlowSubRoutine2();

      } else {

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

EmprestimoSimulacaoAoEntrar.prototype.FlowSubRoutine2 = function() {

    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run('Simular Empréstimo');

    /**
     * Fim
     */
    return null;
  }


function runEmprestimoSimulacaoAoEntrar(parent, sys, formID, params) {
  var rule = new EmprestimoSimulacaoAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function VerificacaoEnviaNovoLinkCallbackTrue(parent, sys, formID) {
  this.ruleName = 'Verificacao - Envia novo link - Callback True';
  this.functionName = 'VerificacaoEnviaNovoLinkCallbackTrue';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

VerificacaoEnviaNovoLinkCallbackTrue.prototype = new Rule;

/**
 * Esta função executa a regra "Verificacao - Envia novo link - Callback True"
 * @param parametro equivale à variável this.context['parametro']<br/>
 * @author MASTER
 * @since 11/09/2022 09:50:53
 */
VerificacaoEnviaNovoLinkCallbackTrue.prototype.run = function() {
  document.ruleNameForException = 'Verificacao - Envia novo link - Callback True';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');


  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.success-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.success-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #4CAF50;\n}\n.success-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.success-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.success-checkmark .check-icon::before, .success-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.success-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #4CAF50;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.success-checkmark .check-icon .icon-line.line-tip {\n  top: 46px;\n  left: 14px;\n  width: 25px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.success-checkmark .check-icon .icon-line.line-long {\n  top: 38px;\n  right: 8px;\n  width: 47px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.success-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(76, 175, 80, 0.5);\n}\n.success-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n@keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}', null);

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"success-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Link gerado com sucesso! Cheque sua caixa postal</span>\n</center>');

  /**
   * Fim
   */
  return null;

}

function runVerificacaoEnviaNovoLinkCallbackTrue(parent, sys, formID, params) {
  var rule = new VerificacaoEnviaNovoLinkCallbackTrue(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroValidarEMail(parent, sys, formID) {
  this.ruleName = 'Cadastro - Validar e-mail';
  this.functionName = 'CadastroValidarEMail';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroValidarEMail.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Validar e-mail"
 * @param email equivale à variável this.context['email']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 29/08/2022 20:41:04
 */
CadastroValidarEMail.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Validar e-mail';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = '';


  /**
   * E-mail nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['email']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Validar e-mail
     */
    this.context['validacao'] = ebfIsEmail.call(this, this.context['email']);

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(1)), 'placeholder', 'Verifique o e-mail');

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackemail', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackemail', null);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runCadastroValidarEMail(parent, sys, formID, params) {
  var rule = new CadastroValidarEMail(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralVisualizarDocumento(parent, sys, formID) {
  this.ruleName = 'Geral - Visualizar Documento';
  this.functionName = 'GeralVisualizarDocumento';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralVisualizarDocumento.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Visualizar Documento"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param tipoDoc equivale à variável this.context['tipoDoc']<br/>
 * @author Master Albuquerque Santos
 * @since 18/01/2023 16:49:10
 */
GeralVisualizarDocumento.prototype.run = function() {
  document.ruleNameForException = 'Geral - Visualizar Documento';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipoDoc'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['url'] = '';


  /**
   * Geral - Visualizar Documento - Servidor
   */
  this.context['url'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Visualizar Documento - Servidor', [this.context['idPessoa'], this.context['tipoDoc']]);

  /**
   * Abrir url em outra janela
   */
  OpenURLOnNewWindow.call(this, this.context['url'], null, null);

  /**
   * Fim
   */
  return null;

}

function runGeralVisualizarDocumento(parent, sys, formID, params) {
  var rule = new GeralVisualizarDocumento(parent, sys, formID);
  rule.run.apply(rule, params);
}

function AbasFormularioPrincipalAbreObjetivos(parent, sys, formID) {
  this.ruleName = 'Abas - Formulário Principal - Abre objetivos';
  this.functionName = 'AbasFormularioPrincipalAbreObjetivos';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

AbasFormularioPrincipalAbreObjetivos.prototype = new Rule;

/**
 * Esta função executa a regra "Abas - Formulário Principal - Abre objetivos"
 * @param item equivale à variável this.context['item']<br/>
 * @param descricao equivale à variável this.context['descricao']<br/>
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @author master
 * @since 06/06/2021 17:20:58
 */
AbasFormularioPrincipalAbreObjetivos.prototype.run = function() {
  document.ruleNameForException = 'Abas - Formulário Principal - Abre objetivos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['item'] = this.checkType(arguments[0], 'Letras');

  this.context['descricao'] = this.checkType(arguments[1], 'Letras');

  this.context['tipo'] = this.checkType(arguments[2], 'Inteiro');


  /**
   * É FORM ?
   */
  if (parseBoolean(isEqual.call(this, this.context['tipo'], '1'))) {
      
    /**
     * Abrir Formulário
     */
    new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', this.context['item'], 'Objetivos Específicos', null);


    return this.FlowEnd1();

  } else {

    /**
     * É REPORT ?
     */
    if (parseBoolean(isEqual.call(this, this.context['tipo'], '2'))) {
        
      /**
       * Abre report
       */
      ebfOpenReport.call(this, this.context['item'], null, null, this.context['descricao']);

      return this.FlowConnector3();

    } else {

      /**
       * É FLOW ?
       */
      if (parseBoolean(isEqual.call(this, this.context['tipo'], '3'))) {
          
        /**
         * Executa fluxo
         */
        ebfFlowExecute.call(this, this.context['item'], ebfListCreate.call(this));

        return this.FlowConnector4();

      } else {

        /**
         * É ACTION ?
         */
        if (parseBoolean(isEqual.call(this, this.context['tipo'], '4'))) {
            
          /**
           * Executa ação
           */
          ebfActionExecute.call(this, this.context['item']);

          return this.FlowConnector5();

        } else {

          return this.FlowConnector5();

        }

      }

    }

  }

}

AbasFormularioPrincipalAbreObjetivos.prototype.FlowConnector3 = function() {

    return this.FlowEnd1();
  }

AbasFormularioPrincipalAbreObjetivos.prototype.FlowConnector4 = function() {

    return this.FlowConnector3();
  }

AbasFormularioPrincipalAbreObjetivos.prototype.FlowConnector5 = function() {

    return this.FlowConnector4();
  }

AbasFormularioPrincipalAbreObjetivos.prototype.FlowEnd1 = function() {

    /**
     * Fim
     */
    return null;
  }


function runAbasFormularioPrincipalAbreObjetivos(parent, sys, formID, params) {
  var rule = new AbasFormularioPrincipalAbreObjetivos(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroValidarEMailConfirmacao(parent, sys, formID) {
  this.ruleName = 'Cadastro - Validar e-mail confirmacao';
  this.functionName = 'CadastroValidarEMailConfirmacao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroValidarEMailConfirmacao.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Validar e-mail confirmacao"
 * @param email equivale à variável this.context['email']<br/>
 * @param confirmacaoEmail equivale à variável this.context['confirmacaoEmail']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param componenteMsg equivale à variável this.context['componenteMsg']<br/>
 * @param mensagem equivale à variável this.context['mensagem']<br/>
 * @author master
 * @since 02/09/2022 18:30:32
 */
CadastroValidarEMailConfirmacao.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Validar e-mail confirmacao';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Letras');

  this.context['confirmacaoEmail'] = this.checkType(arguments[1], 'Letras');

  this.context['componente'] = this.checkType(arguments[2], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[3], 'Letras');

  this.context['mensagem'] = this.checkType(arguments[4], 'Letras');


  /**
   * Algum e-mail nulo ou vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirmacaoEmail'])))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * E-mails iguais?
     */
    if (parseBoolean(isEqual.call(this, ebfTrim.call(this, this.context['email']), ebfTrim.call(this, this.context['confirmacaoEmail'])))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(2)), 'class', 'form-control');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * placeholder
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(1)), 'placeholder', 'Os e-mails são diferentes!');

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', null);

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runCadastroValidarEMailConfirmacao(parent, sys, formID, params) {
  var rule = new CadastroValidarEMailConfirmacao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function AbasFormularioPrincipalAoEntrar(parent, sys, formID) {
  this.ruleName = 'Abas - Formulário Principal - Ao Entrar';
  this.functionName = 'AbasFormularioPrincipalAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

AbasFormularioPrincipalAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Abas - Formulário Principal - Ao Entrar"
 * @author Master Albuquerque Santos
 * @since 28/10/2022 07:39:00
 */
AbasFormularioPrincipalAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Abas - Formulário Principal - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['ListaRetorno'] = null;

  this.context['backdrop'] = null;


  /**
   * Template - Formulário Principal - Ao Entrar (Servidor)
   */
  this.context['ListaRetorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Formulário Principal - Ao Entrar (Servidor)');

  /**
   * Altera o Nome do Usuário
   */
  ebfFormChangeComponentValue.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

  /**
   * Altera Hint
   */
  ebfSetHint.call(this, 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

  /**
   * Abas - Menu Collapse Opções do Usuário
   */
  new AbasMenuCollapseOpcoesDoUsuario(this, this.getSystem(), this.getForm()).run();

  /**
   * Criar backdrop
   */
  this.context['backdrop'] = ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'backdrop-shortcut'), ebfListParamsCreate.call(this, 'class', 'backdrop-shortcut')), ebfHtmlGetBodyElement.call(this));

  /**
   * Associar evento onclick ao Backdrop
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['backdrop'], 'onclick', 'Template - Oculta Backdrop de Atalhos', null, null);

  /**
   * Obter Menu Collapse
   */
  ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1));

  /**
   * Associar evento onclick ao Formulario
   */
  ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetBodyElement.call(this), 'onclick', 'Template - Ao Clicar no Item do Menu (Ação)', null, true);

  /**
   * Altera css
   */
  ebfCSSImportContent.call(this, '.headerButton{\n    background-color: #055f94 !important;;\n  }\n    \n  .sorterButton{\n    background-color: #055f94 !important;;\n  }\n    \n  .listGrid [role=\"toolbar\"] {\n    background-color:  #055f94 !important;;\n  }\n\n#popNotifications  [type=\"button\"] {\n  background: #ffca28 !important;\n}\n\n\n#popNotifications  [type=\"button\"]:hover {\n  background: #c79a00 !important;\n}\n', null);

  /**
   * Altera agência
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'agencia', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(6)));

  /**
   * Altera saldo
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'saldo', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(7)));

  /**
   * Geral - Define <title> do form externo
   */
  new GeralDefineTitleDoFormExterno(this, this.getSystem(), this.getForm()).run('Teste');

  /**
   * Style do userImageContainer
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetMakerElementById.call(this, 'userImageContainer'), 'style', 'top: 5px; width: 22.7317%; height: 71px;min-height: 71px; z-index: 1;max-width: 310px !important; right: 1%;');

  /**
   * Adm Geral ou do Sistema ?
   */
  if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(3))))) {
      
    return this.FlowEnd2();

  } else {

    /**
     * Oculta Menu Adm
     */
    new TemplateOcultaOuExibeElemento(this, this.getSystem(), this.getForm()).run('false', null, ebfListParamsCreate.call(this, 'icons', 'IconButtonContainer'));

    return this.FlowEnd2();

  }

}

AbasFormularioPrincipalAoEntrar.prototype.FlowEnd2 = function() {

    /**
     * Fim
     */
    return null;
  }


function runAbasFormularioPrincipalAoEntrar(parent, sys, formID, params) {
  var rule = new AbasFormularioPrincipalAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroValidaCaptcha(parent, sys, formID) {
  this.ruleName = 'Cadastro - Valida Captcha';
  this.functionName = 'CadastroValidaCaptcha';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroValidaCaptcha.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Valida Captcha"
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param confirma equivale à variável this.context['confirma']<br/>
 * @param nome equivale à variável this.context['nome']<br/>
 * @author master
 * @since 02/09/2022 18:46:40
 */
CadastroValidaCaptcha.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Valida Captcha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  this.context['confirma'] = this.checkType(arguments[2], 'Letras');

  this.context['nome'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['retorno'] = '';

  this.context['validacaoCapcha'] = false;

  this.context['response'] = '';

  this.context['retornoTermos'] = 0;


  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * Algum campo vazio?
     */
    if (parseBoolean((isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome'])))) {
        
      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Cadastro - Cadastrar - Cliente
       */
      new CadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['cpf'], this.context['email'], this.context['confirma'], this.context['nome']);

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * PreCadastro - Verificar Termos
     */
    this.context['retornoTermos'] = new PrecadastroVerificarTermos(this, this.getSystem(), this.getForm()).run('', '');

    /**
     * Termos confirmados?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoTermos']), toLong.call(this, parseInt(0))))) {
        
      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * Fim
       */
      return null;

    }

  }

}

function runCadastroValidaCaptcha(parent, sys, formID, params) {
  var rule = new CadastroValidaCaptcha(parent, sys, formID);
  rule.run.apply(rule, params);
}

function ValidacaoRedirecionarParaLogin(parent, sys, formID) {
  this.ruleName = 'Validação - Redirecionar para login';
  this.functionName = 'ValidacaoRedirecionarParaLogin';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

ValidacaoRedirecionarParaLogin.prototype = new Rule;

/**
 * Esta função executa a regra "Validação - Redirecionar para login"
 * @author MASTER
 * @since 11/09/2022 10:47:41
 */
ValidacaoRedirecionarParaLogin.prototype.run = function() {
  document.ruleNameForException = 'Validação - Redirecionar para login';
  this.context = new Array();


  /**
   * Abrir url na mesma janela
   */
  ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/open.do?sys=P2P'));

  /**
   * Fim
   */
  return null;

}

function runValidacaoRedirecionarParaLogin(parent, sys, formID, params) {
  var rule = new ValidacaoRedirecionarParaLogin(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralHabilitaDesabilitaCamposComLista(parent, sys, formID) {
  this.ruleName = 'Geral - Habilita/Desabilita Campos - Com Lista';
  this.functionName = 'GeralHabilitaDesabilitaCamposComLista';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralHabilitaDesabilitaCamposComLista.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Habilita/Desabilita Campos - Com Lista"
 * @param nomeCampos equivale à variável this.context['nomeCampos']<br/>
 * @param condicao equivale à variável this.context['condicao']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 16:37:17
 */
GeralHabilitaDesabilitaCamposComLista.prototype.run = function() {
  document.ruleNameForException = 'Geral - Habilita/Desabilita Campos - Com Lista';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Variante');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;


  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = this.context['nomeCampos'];

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * Habilita Campo
       */
      ebfFormSetEnabled.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1)))), this.context['condicao']);

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    } else {

      var FlowConnector1 = this.FlowConnector1();
      if (!(FlowConnector1 instanceof InvalidVariant)) {
        return FlowConnector1;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GeralHabilitaDesabilitaCamposComLista.prototype.FlowConnector1 = function() {

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

    return new InvalidVariant();
  }


function runGeralHabilitaDesabilitaCamposComLista(parent, sys, formID, params) {
  var rule = new GeralHabilitaDesabilitaCamposComLista(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarAoClicar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Ao clicar';
  this.functionName = 'CadastroAprovarReprovarAoClicar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarAoClicar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Ao clicar"
 * @param logico equivale à variável this.context['logico']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 27/10/2022 19:12:05
 */
CadastroAprovarReprovarAoClicar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao clicar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['email'] = this.checkType(arguments[2], 'Letras');


  /**
   * Desabilita liberar
   */
  ebfFormSetEnabled.call(this, 'liberar', false);

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerLiberar'), 'display', 'inline-block');

  /**
   * Executar fluxo assíncrono
   */
  ebfRuleSchedulerNoParent.call(this, 'Cadastro - Aprovar/Reprovar - Ao clicar - Cliente', ebfListParamsCreate.call(this, this.context['idPessoa'], this.context['email']), parseInt(500));

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarAoClicar(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarAoClicar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateLoginAoEntrar(parent, sys, formID) {
  this.ruleName = 'Template - Login - Ao Entrar';
  this.functionName = 'TemplateLoginAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateLoginAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Login - Ao Entrar"
 * @author Master Albuquerque Santos
 * @since 27/10/2022 16:25:29
 */
TemplateLoginAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Template - Login - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['key'] = null;

  this.context['script'] = '';


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Obtem keyCad
     */
    this.context['key'] = ebfRequestGetParameter.call(this, 'teste');

    /**
     * Alerta
     */
    ebfAlertMessage.call(this, this.context['key']);

    /**
     * É nulo ou vazio
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['key']))) {
        
      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Cadastro Efetuado!', 'Um e-mail foi enviado com as intruções de acesso! Cheque sua caixa em alguns instantes', null, null);

      /**
       * Fim
       */
      return null;

    }

  }

}

function runTemplateLoginAoEntrar(parent, sys, formID, params) {
  var rule = new TemplateLoginAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateLoginCadastroAoEntrar(parent, sys, formID) {
  this.ruleName = 'Template - Login - Cadastro - Ao Entrar';
  this.functionName = 'TemplateLoginCadastroAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateLoginCadastroAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Login - Cadastro - Ao Entrar"
 * @author Master Albuquerque Santos
 * @since 27/10/2022 19:17:20
 */
TemplateLoginCadastroAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Template - Login - Cadastro - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['key'] = null;


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'O e-mail com a senha foi enviado. Cheque sua caixa postal em alguns instantes.', null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Obtem keyCad
     */
    this.context['key'] = ebfRequestGetParameter.call(this, 'teste');

    /**
     * Alerta
     */
    ebfAlertMessage.call(this, this.context['key']);

    /**
     * É nulo ou vazio
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['key']))) {
        
      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Cadastro Efetuado!', 'Um e-mail foi enviado com as intruções de acesso! Cheque sua caixa em alguns instantes', null, null);

      /**
       * Fim
       */
      return null;

    }

  }

}

function runTemplateLoginCadastroAoEntrar(parent, sys, formID, params) {
  var rule = new TemplateLoginCadastroAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarInteracao(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Interação';
  this.functionName = 'CadastroAprovarReprovarInteracao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarInteracao.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Interação"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 28/09/2022 18:34:07
 */
CadastroAprovarReprovarInteracao.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Interação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['email'] = this.checkType(arguments[1], 'Letras');


  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma a liberação do cadastro do cliente?', 'Cadastro - Aprovar/Reprovar - Ao clicar', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['email']), null, null);

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarInteracao(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarInteracao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoBuscarEnderecoPeloCepCliente(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Buscar endereço pelo CEP - Cliente';
  this.functionName = 'CadastroComplementoBuscarEnderecoPeloCepCliente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoBuscarEnderecoPeloCepCliente.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Buscar endereço pelo CEP - Cliente"
 * @param cep equivale à variável this.context['cep']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 18:09:24
 */
CadastroComplementoBuscarEnderecoPeloCepCliente.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Buscar endereço pelo CEP - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cep'] = this.checkType(arguments[0], 'Letras');


  /**
   * CEP nulo?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cep']))) {
      
    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Preencha o CEP!', null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Desabilita botão
     */
    ebfFormSetEnabled.call(this, 'botaoCEP', false);

    /**
     * Mostrar spinner
     */
    ebfChangeDescription.call(this, 'botaoCEP', '<div class=\"spinner-border spinner-border-sm text-success\" role=\"status\"></div>');

    /**
     * Executar fluxo de busca do endereço
     */
    ebfAsyncJavaFlowExecute.call(this, 'Cadastro - Complemento - Buscar endereço pelo CEP', ebfListParamsCreate.call(this, this.context['cep']), 'Cadastro - Complemento - Callback do CEP', ebfListParamsCreate.call(this, null), 'Cadastro - Complemento - Callback do CEP', ebfListParamsCreate.call(this, null));

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroComplementoBuscarEnderecoPeloCepCliente(parent, sys, formID, params) {
  var rule = new CadastroComplementoBuscarEnderecoPeloCepCliente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TemplateLoginAutenticarUsuario(parent, sys, formID) {
  this.ruleName = 'Template - Login - Autenticar Usuario';
  this.functionName = 'TemplateLoginAutenticarUsuario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TemplateLoginAutenticarUsuario.prototype = new Rule;

/**
 * Esta função executa a regra "Template - Login - Autenticar Usuario"
 * @param usuario equivale à variável this.context['usuario']<br/>
 * @param senha equivale à variável this.context['senha']<br/>
 * @param conexao equivale à variável this.context['conexao']<br/>
 * @author Master Albuquerque Santos
 * @since 02/11/2022 15:25:30
 */
TemplateLoginAutenticarUsuario.prototype.run = function() {
  document.ruleNameForException = 'Template - Login - Autenticar Usuario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['usuario'] = this.checkType(arguments[0], 'Letras');

  this.context['senha'] = this.checkType(arguments[1], 'Letras');

  this.context['conexao'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['response'] = null;

  this.context['retorno'] = '';

  this.context['validacaoRecaptcha'] = false;


  /**
   * Obtem response
   */
  this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

  /**
   * Recaptcha - Obter url via post
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

  /**
   * Obtem retorno do captcha
   */
  this.context['validacaoRecaptcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

  /**
   * Validou?
   */
  if (parseBoolean(this.context['validacaoRecaptcha'])) {
      
    /**
     * Autenticar usuário
     */
    ebfAuthUser.call(this, this.context['usuario'], this.context['senha'], null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Captcha não validado!', null, null);

    /**
     * Fim
     */
    return null;

  }

}

function runTemplateLoginAutenticarUsuario(parent, sys, formID, params) {
  var rule = new TemplateLoginAutenticarUsuario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroCallback(parent, sys, formID) {
  this.ruleName = 'Cadastro - Callback';
  this.functionName = 'CadastroCallback';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroCallback.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Callback"
 * @param retorno equivale à variável this.context['retorno']<br/>
 * @param modal equivale à variável this.context['modal']<br/>
 * @author MASTER
 * @since 11/09/2022 09:44:02
 */
CadastroCallback.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Callback';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');


  /**
   * Ocultar spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'none');

  /**
   * Altera descrição de MakerButton1
   */
  ebfChangeDescription.call(this, 'cadastrar', 'Cadastrar     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:none\" id=\"spinner\"></div>');

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'cadastrar', true);

  /**
   * Retorno nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
      
    /**
     * Limpa Campos
     */
    new GeralLimparCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao');

    /**
     * Desabilita Campos
     */
    new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', false);

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * Abre url
       */
      ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/form.jsp?sys=P2P&action=openform&formID=464570566&align=0&mode=-1&goto=-1&filter=&scrolling=no&popup=true'));

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Abre URL
       */
      ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/open.do?sys=P2P&keyCad=', ebfRandom.call(this, parseInt(5222))));

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage(this.context['retorno']);

    /**
     * Refresh Recaptcha
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * Habilita Campos
     */
    new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', true);

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroCallback(parent, sys, formID, params) {
  var rule = new CadastroCallback(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorInvesteCalculaValorFinalCotaPressionarTecla(parent, sys, formID) {
  this.ruleName = 'Investidor - Investe - Calcula Valor Final Cota - Pressionar Tecla';
  this.functionName = 'InvestidorInvesteCalculaValorFinalCotaPressionarTecla';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorInvesteCalculaValorFinalCotaPressionarTecla.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Investe - Calcula Valor Final Cota - Pressionar Tecla"
 * @param alt equivale à variável this.context['alt']<br/>
 * @param ctrl equivale à variável this.context['ctrl']<br/>
 * @param shift equivale à variável this.context['shift']<br/>
 * @param codigoTecla equivale à variável this.context['codigoTecla']<br/>
 * @param caracter equivale à variável this.context['caracter']<br/>
 * @param valorCotaSimples equivale à variável this.context['valorCotaSimples']<br/>
 * @param valorCota equivale à variável this.context['valorCota']<br/>
 * @param qtd equivale à variável this.context['qtd']<br/>
 * @author Master Albuquerque Santos
 * @since 03/01/2023 15:49:18
 */
InvestidorInvesteCalculaValorFinalCotaPressionarTecla.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Investe - Calcula Valor Final Cota - Pressionar Tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['alt'] = this.checkType(arguments[0], 'Lógico');

  this.context['ctrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['shift'] = this.checkType(arguments[2], 'Lógico');

  this.context['codigoTecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['caracter'] = this.checkType(arguments[4], 'Letras');

  this.context['valorCotaSimples'] = this.checkType(arguments[5], 'Fracionado');

  this.context['valorCota'] = this.checkType(arguments[6], 'Fracionado');

  this.context['qtd'] = this.checkType(arguments[7], 'Inteiro');

  // Variáveis
  this.context['montante'] = 0.0;


  /**
   * Obtem qtd
   */
  this.context['qtd'] = toLong.call(this, ebfConcat.call(this, ebfFormGetComponentValue.call(this, '{1BB2EA79-0D0C-4711-A09F-B472D9269549}', 'qtdCota'), this.context['caracter']));

  /**
   * Nulos ou vazios?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['qtd']) || isMinor.call(this, this.context['qtd'], parseInt(1))))) {
      
    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Calcula montante
     */
    this.context['montante'] = oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd']);

    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, this.context['montante'], '#0.00'));

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, oprMultiply.call(this, this.context['valorCota'], this.context['qtd']), '#0.00'));

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, oprSubtract.call(this, this.context['montante'], oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd'])), '#0.00'));

    /**
     * Fim
     */
    return null;

  }

}

function runInvestidorInvesteCalculaValorFinalCotaPressionarTecla(parent, sys, formID, params) {
  var rule = new InvestidorInvesteCalculaValorFinalCotaPressionarTecla(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAtivarAba(parent, sys, formID) {
  this.ruleName = 'Geral - Ativar Aba';
  this.functionName = 'GeralAtivarAba';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAtivarAba.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Ativar Aba"
 * @param Aba equivale à variável this.context['Aba']<br/>
 * @author Master Albuquerque Santos
 * @since 04/12/2022 13:56:37
 */
GeralAtivarAba.prototype.run = function() {
  document.ruleNameForException = 'Geral - Ativar Aba';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');


  /**
   * Ativar Aba
   */
  ebfFormOpenTab.call(this, this.context['Aba']);

  /**
   * Fim
   */
  return null;

}

function runGeralAtivarAba(parent, sys, formID, params) {
  var rule = new GeralAtivarAba(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralClassInvalid(parent, sys, formID) {
  this.ruleName = 'Geral - Class Invalid';
  this.functionName = 'GeralClassInvalid';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralClassInvalid.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Class Invalid"
 * @param condicao equivale à variável this.context['condicao']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @param placeholder equivale à variável this.context['placeholder']<br/>
 * @author MASTER
 * @since 11/09/2022 15:22:59
 */
GeralClassInvalid.prototype.run = function() {
  document.ruleNameForException = 'Geral - Class Invalid';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['condicao'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Letras');

  this.context['placeholder'] = this.checkType(arguments[2], 'Letras');


  /**
   * True?
   */
  if (parseBoolean(this.context['condicao'])) {
      
    /**
     * Atribui class is-invalid
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(2)), 'class', 'form-control is-invalid');

    /**
     * Atribui class is-invalid
     */
    ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'border', '1px solid #dc3545');

    /**
     * placeholder
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'placeholder', this.context['placeholder']);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Remove class is-invalid
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(2)), 'class', 'form-control');

    /**
     * placeholder
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, this.context['placeholder'])), parseInt(1)), 'placeholder', this.context['placeholder']);

    /**
     * Atribui class is-valid
     */
    ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'border', '1px solid #ced4da');

    /**
     * Fim
     */
    return null;

  }

}

function runGeralClassInvalid(parent, sys, formID, params) {
  var rule = new GeralClassInvalid(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroValidarCpf(parent, sys, formID) {
  this.ruleName = 'Cadastro - Validar CPF';
  this.functionName = 'CadastroValidarCpf';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroValidarCpf.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Validar CPF"
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param componente equivale à variável this.context['componente']<br/>
 * @author MASTER
 * @since 11/09/2022 15:19:49
 */
CadastroValidarCpf.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Validar CPF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  // Variáveis
  this.context['validacao'] = false;


  /**
   * CPF nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cpf']))) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Validar CPF
     */
    this.context['validacao'] = ebfIsCpf.call(this, ebfReplaceAll.call(this, ebfReplaceAll.call(this, this.context['cpf'], '.', ''), '-', ''));

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control');

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'placeholder', 'Informe seu CPF');

      /**
       * Atribui class is-valid
       */
      ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'border', '1px solid #ced4da');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Importar CSS
       */
      ebfCSSImportContent.call(this, '::placeholder {\n   color: red;\n}', null);

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * Atribui class is-invalid
       */
      ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'border', '1px solid #dc3545');

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'placeholder', 'Verifique o CPF');

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * Fim
       */
      return null;

    }

  }

}

function runCadastroValidarCpf(parent, sys, formID, params) {
  var rule = new CadastroValidarCpf(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoEntrarStatus3(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao entrar - Status 3';
  this.functionName = 'CadastroComplementoAoEntrarStatus3';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoEntrarStatus3.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao entrar - Status 3"
 * @author Master Albuquerque Santos
 * @since 17/09/2022 17:06:16
 */
CadastroComplementoAoEntrarStatus3.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar - Status 3';
  this.context = new Array();


  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * Mostra Alerta Análise
   */
  ebfFormSetVisible.call(this, 'alertaAnalise', true);

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoAoEntrarStatus3(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoEntrarStatus3(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAbrirFormFiltradoNaMoldura(parent, sys, formID) {
  this.ruleName = 'Geral - Abrir form filtrado na moldura';
  this.functionName = 'GeralAbrirFormFiltradoNaMoldura';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAbrirFormFiltradoNaMoldura.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Abrir form filtrado na moldura"
 * @param filtro equivale à variável this.context['filtro']<br/>
 * @param valor equivale à variável this.context['valor']<br/>
 * @param Identificador equivale à variável this.context['Identificador']<br/>
 * @author MASTER
 * @since 03/09/2022 17:18:28
 */
GeralAbrirFormFiltradoNaMoldura.prototype.run = function() {
  document.ruleNameForException = 'Geral - Abrir form filtrado na moldura';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['filtro'] = this.checkType(arguments[0], 'Letras');

  this.context['valor'] = this.checkType(arguments[1], 'Letras');

  this.context['Identificador'] = this.checkType(arguments[2], 'Letras');


  /**
   * Limpar Moldura
   */
  ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

  /**
   * Abrir Formulário na Moldura
   */
  ebfFrameOpenFilteredForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', this.context['Identificador'], false, ebfConcat.call(this, this.context['filtro'], '=', this.context['valor']), false);

  /**
   * Obter div do formulário
   */
  this.context['Div Formulário'] = ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'moldura')), parseInt(1));

  /**
   * Div do formulário existe?
   */
  if (parseBoolean(oprNot.call(this, isNull.call(this, this.context['Div Formulário'])))) {
      
    /**
     * Ajustar altura da div do formulário
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Div Formulário'], 'height', '100%');

    /**
     * Obter iframe do formulário
     */
    this.context['Iframe Formulário'] = ebfHtmlGetElementsByTagName.call(this, 'iframe', this.context['Div Formulário']);

    /**
     * Iframe existe?
     */
    if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Iframe Formulário'])))) {
        
      /**
       * Ajustar altura do iframe do formulário
       */
      ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, this.context['Iframe Formulário'], parseInt(1)), 'height', '100%');

      return this.FlowEnd2();

    } else {

      return this.FlowEnd2();

    }

  } else {

    /**
     * Fim
     */
    return null;

  }

}

GeralAbrirFormFiltradoNaMoldura.prototype.FlowEnd2 = function() {

    /**
     * Fim
     */
    return null;
  }


function runGeralAbrirFormFiltradoNaMoldura(parent, sys, formID, params) {
  var rule = new GeralAbrirFormFiltradoNaMoldura(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoCallbackDoCep(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Callback do CEP';
  this.functionName = 'CadastroComplementoCallbackDoCep';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoCallbackDoCep.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Callback do CEP"
 * @param jsonLetras equivale à variável this.context['jsonLetras']<br/>
 * @author MASTER
 * @since 11/09/2022 15:22:46
 */
CadastroComplementoCallbackDoCep.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Callback do CEP';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['jsonLetras'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['json'] = null;


  /**
   * Converte para json
   */
  this.context['json'] = ebfCreateObjectJSON.call(this, this.context['jsonLetras']);

  /**
   * Erro?
   */
  if (parseBoolean(ebfJSONExistsKey.call(this, this.context['json'], 'erro'))) {
      
    /**
     * Limpa cep
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cep', null);

    /**
     * Geral - Class Invalid
     */
    new GeralClassInvalid(this, this.getSystem(), this.getForm()).run(true, 'cep', 'CEP Inválido!');

    /**
     * Geral - Limpar Campos
     */
    new GeralLimparCampos(this, this.getSystem(), this.getForm()).run('logradouro,bairro,cidade,uf');

    /**
     * Focar componente
     */
    ebfFormSetFocus.call(this, 'cep');

    return this.FlowExpression3();

  } else {

    /**
     * Geral - Class Invalid
     */
    new GeralClassInvalid(this, this.getSystem(), this.getForm()).run(false, 'cep', null);

    /**
     * Carrega logradouro
     */
    ebfFormChangeComponentValue.call(this, '{E54D97B1-5E80-4507-9456-F2A9F8AFC66A}', 'logradouro', ebfGetValueObjectJson.call(this, this.context['json'], 'logradouro'));

    /**
     * Carrega bairro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'bairro', ebfGetValueObjectJson.call(this, this.context['json'], 'bairro'));

    /**
     * Carrega logradouro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cidade', ebfGetValueObjectJson.call(this, this.context['json'], 'localidade'));

    /**
     * Carrega UF
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'uf', ebfGetValueObjectJson.call(this, this.context['json'], 'uf'));

    /**
     * Foca complemento
     */
    ebfFormSetFocus.call(this, 'complemento');

    return this.FlowExpression3();

  }

}

CadastroComplementoCallbackDoCep.prototype.FlowExpression3 = function() {

    /**
     * Habilita botão
     */
    ebfFormSetEnabled.call(this, 'botaoCEP', true);

    /**
     * Mostrar lupa
     */
    ebfChangeDescription.call(this, 'botaoCEP', '<i class=\"fas fa-search\"></i>');

    /**
     * Fim
     */
    return null;
  }


function runCadastroComplementoCallbackDoCep(parent, sys, formID, params) {
  var rule = new CadastroComplementoCallbackDoCep(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralRemoverBarraDoForm(parent, sys, formID) {
  this.ruleName = 'Geral - Remover barra do form';
  this.functionName = 'GeralRemoverBarraDoForm';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralRemoverBarraDoForm.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Remover barra do form"
 * @author Master Albuquerque Santos
 * @since 28/09/2022 19:03:42
 */
GeralRemoverBarraDoForm.prototype.run = function() {
  document.ruleNameForException = 'Geral - Remover barra do form';
  this.context = new Array();


  /**
   * Remover barra dos formulários em div
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * Fim
   */
  return null;

}

function runGeralRemoverBarraDoForm(parent, sys, formID, params) {
  var rule = new GeralRemoverBarraDoForm(parent, sys, formID);
  rule.run.apply(rule, params);
}

function AbasFormularioPrincipalAbreChat(parent, sys, formID) {
  this.ruleName = 'Abas - Formulário Principal - Abre chat';
  this.functionName = 'AbasFormularioPrincipalAbreChat';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

AbasFormularioPrincipalAbreChat.prototype = new Rule;

/**
 * Esta função executa a regra "Abas - Formulário Principal - Abre chat"
 * @author MASTER
 * @since 03/09/2022 17:57:47
 */
AbasFormularioPrincipalAbreChat.prototype.run = function() {
  document.ruleNameForException = 'Abas - Formulário Principal - Abre chat';
  this.context = new Array();


  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowDecision1();

  } else {

    /**
     * Abre chat
     */
    ebfOpenFloatingUrl.call(this, 'form.jsp?sys=PDK&action=openform&formID=8395&align=0&mode=-1&goto=-1&filter=&scrolling=False&firstLoad=true', 'chat', 'Chat', parseInt(294), parseInt(468), 'chatInterno');

    return this.FlowDecision1();

  }

}

AbasFormularioPrincipalAbreChat.prototype.FlowDecision1 = function() {

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * Geral - Abrir form filtrado na moldura
       */
      new GeralAbrirFormFiltradoNaMoldura(this, this.getSystem(), this.getForm()).run('cad_pessoa.id_pessoa', '6@long', '{E54D97B1-5E80-4507-9456-F2A9F8AFC66A}');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Abre form
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', '{ED460603-8A85-48B3-A104-0EDE569B7B86}', 'Pacientes do Dia', null);


      /**
       * Abre form
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', '{C81D183C-3322-4990-B10D-AC398F8D3403}', 'Pacientes do Dia', null);


      /**
       * Abrir Formulário na Moldura
       */
      ebfFrameOpenForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', '{1954F5EC-583E-4F03-B942-2916109A7AC7}', false, false);

      /**
       * Limpar Moldura
       */
      ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

      /**
       * Fim
       */
      return null;

    }
  }


function runAbasFormularioPrincipalAbreChat(parent, sys, formID, params) {
  var rule = new AbasFormularioPrincipalAbreChat(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralMudarDescricaoEHint(parent, sys, formID) {
  this.ruleName = 'Geral - Mudar Descricao e Hint';
  this.functionName = 'GeralMudarDescricaoEHint';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralMudarDescricaoEHint.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Mudar Descricao e Hint"
 * @param componente equivale à variável this.context['componente']<br/>
 * @param descricao equivale à variável this.context['descricao']<br/>
 * @param hint equivale à variável this.context['hint']<br/>
 * @author MASTER
 * @since 11/09/2022 16:19:48
 */
GeralMudarDescricaoEHint.prototype.run = function() {
  document.ruleNameForException = 'Geral - Mudar Descricao e Hint';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['componente'] = this.checkType(arguments[0], 'Componente');

  this.context['descricao'] = this.checkType(arguments[1], 'Letras');

  this.context['hint'] = this.checkType(arguments[2], 'Letras');


  /**
   * Muda descrição
   */
  ebfChangeDescription.call(this, this.context['componente'], this.context['descricao']);

  /**
   * Altera hint
   */
  ebfSetHint.call(this, this.context['componente'], this.context['hint']);

  /**
   * Fim
   */
  return null;

}

function runGeralMudarDescricaoEHint(parent, sys, formID, params) {
  var rule = new GeralMudarDescricaoEHint(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralDefineTitleDoFormExterno(parent, sys, formID) {
  this.ruleName = 'Geral - Define <title> do form externo';
  this.functionName = 'GeralDefineTitleDoFormExterno';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralDefineTitleDoFormExterno.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Define <title> do form externo"
 * @param conteudoTitle equivale à variável this.context['conteudoTitle']<br/>
 * @author MASTER
 * @since 05/09/2022 20:27:00
 */
GeralDefineTitleDoFormExterno.prototype.run = function() {
  document.ruleNameForException = 'Geral - Define <title> do form externo';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['conteudoTitle'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['title'] = null;

  this.context['head'] = null;


  /**
   * Obtem <head>
   */
  this.context['head'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetParent.call(this, ebfGetBodyJSP.call(this))), parseInt(1));

  /**
   * Cria <title>
   */
  this.context['title'] = ebfHtmlCreateHtmlElement.call(this, 'title', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'titulo')), this.context['head']);

  /**
   * Define title
   */
  ebfHtmlInnerHtml.call(this, this.context['title'], this.context['conteudoTitle']);

  /**
   * Fim
   */
  return null;

}

function runGeralDefineTitleDoFormExterno(parent, sys, formID, params) {
  var rule = new GeralDefineTitleDoFormExterno(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TextoEmailAoClicarNaGrade(parent, sys, formID) {
  this.ruleName = 'Texto Email - Ao clicar na grade';
  this.functionName = 'TextoEmailAoClicarNaGrade';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TextoEmailAoClicarNaGrade.prototype = new Rule;

/**
 * Esta função executa a regra "Texto Email - Ao clicar na grade"
 * @param linha equivale à variável this.context['linha']<br/>
 * @param linhaofset equivale à variável this.context['linhaofset']<br/>
 * @param chaves equivale à variável this.context['chaves']<br/>
 * @author Master Albuquerque Santos
 * @since 28/09/2022 19:18:58
 */
TextoEmailAoClicarNaGrade.prototype.run = function() {
  document.ruleNameForException = 'Texto Email - Ao clicar na grade';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['linha'] = this.checkType(arguments[0], 'Inteiro');

  this.context['linhaofset'] = this.checkType(arguments[1], 'Letras');

  this.context['chaves'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['chave'] = 0;


  /**
   * Obtem chave
   */
  this.context['chave'] = ebfGetElementFromList.call(this, this.context['chaves'], parseInt(1));

  /**
   * Fecha form
   */
  ebfFrameCloseForm.call(this, '{80028D79-339C-40E6-9C5A-2DFAF2E3391B}', 'moldura');

  /**
   * Abre form na moldura
   */
  ebfFrameOpenFilteredForm.call(this, '{80028D79-339C-40E6-9C5A-2DFAF2E3391B}', 'moldura', '{1CCA60D8-4EF6-42DB-86B0-9762C7AE049A}', true, ebfConcat.call(this, 'id_textosemails=', this.context['chave'], '@long'), true);

  /**
   * Fim
   */
  return null;

}

function runTextoEmailAoClicarNaGrade(parent, sys, formID, params) {
  var rule = new TextoEmailAoClicarNaGrade(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoSelecionarEstadoCivil(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao selecionar estado civil';
  this.functionName = 'CadastroComplementoAoSelecionarEstadoCivil';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoSelecionarEstadoCivil.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao selecionar estado civil"
 * @param estadoCivil equivale à variável this.context['estadoCivil']<br/>
 * @author MASTER
 * @since 11/09/2022 17:02:40
 */
CadastroComplementoAoSelecionarEstadoCivil.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao selecionar estado civil';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['estadoCivil'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * Casado ou união estável?
   */
  if (parseBoolean((isEqual.call(this, this.context['estadoCivil'], '2') || isEqual.call(this, this.context['estadoCivil'], '3')))) {
      
    /**
     * Habilita cpfConjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', true);

    /**
     * Foca cpfConjuge
     */
    ebfFormSetFocus.call(this, 'cpfConjuge');

    /**
     * Tornar cpfConjuge obrigatório
     */
    ebfFormSetRequired.call(this, 'cpfConjuge', true);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Desabilita cpfConjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', false);

    /**
     * Limpa cpfConjuge
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cpfConjuge', null);

    /**
     * Foca CEP
     */
    ebfFormSetFocus.call(this, 'cep');

    /**
     * Retirar obrigatoriedade de cpfConjuge
     */
    ebfFormSetRequired.call(this, 'cpfConjuge', false);

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroComplementoAoSelecionarEstadoCivil(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoSelecionarEstadoCivil(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TestesTimeline(parent, sys, formID) {
  this.ruleName = 'Testes - Timeline';
  this.functionName = 'TestesTimeline';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TestesTimeline.prototype = new Rule;

/**
 * Esta função executa a regra "Testes - Timeline"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 16:02:56
 */
TestesTimeline.prototype.run = function() {
  document.ruleNameForException = 'Testes - Timeline';
  this.context = new Array();

  // Variáveis
  this.context['html'] = '';


  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * Testes - Timeline - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Testes - Timeline - Servidor');

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'principal'), ebfReplace.call(this, '<div class=\"container mt-5 mb-5\">\n   <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n         <h4>Histórico do Cliente</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n</div>', 'X:LINHA:X', this.context['html']));

  /**
   * Fim
   */
  return null;

}

function runTestesTimeline(parent, sys, formID, params) {
  var rule = new TestesTimeline(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorInvesteCalculaValorFinalCota(parent, sys, formID) {
  this.ruleName = 'Investidor - Investe - Calcula Valor Final Cota';
  this.functionName = 'InvestidorInvesteCalculaValorFinalCota';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorInvesteCalculaValorFinalCota.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Investe - Calcula Valor Final Cota"
 * @param qtd equivale à variável this.context['qtd']<br/>
 * @param cota equivale à variável this.context['cota']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param valorCota equivale à variável this.context['valorCota']<br/>
 * @param valorCotaSimples equivale à variável this.context['valorCotaSimples']<br/>
 * @author Master Albuquerque Santos
 * @since 16/01/2023 16:32:27
 */
InvestidorInvesteCalculaValorFinalCota.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Investe - Calcula Valor Final Cota';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['qtd'] = this.checkType(arguments[0], 'Inteiro');

  this.context['cota'] = this.checkType(arguments[1], 'Inteiro');

  this.context['juros'] = this.checkType(arguments[2], 'Fracionado');

  this.context['parcelas'] = this.checkType(arguments[3], 'Inteiro');

  this.context['valorCota'] = this.checkType(arguments[4], 'Fracionado');

  this.context['valorCotaSimples'] = this.checkType(arguments[5], 'Fracionado');

  // Variáveis
  this.context['montante'] = 0.0;

  this.context['vlreceber'] = 0.0;


  /**
   * Nulos ou vazios?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['qtd']) || isMinor.call(this, this.context['qtd'], parseInt(1))))) {
      
    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * Foca componente
     */
    ebfFormSetFocus.call(this, 'qtdCota');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * Calcula montante
       */
      this.context['montante'] = oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd']);

      /**
       * Altera valorInvestir
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, this.context['montante'], '#0.00'));

      /**
       * vl Receber
       */
      this.context['vlreceber'] = ebfArredondaDecimal.call(this, oprMultiply.call(this, this.context['valorCota'], this.context['qtd']), parseInt(2), true);

      /**
       * Altera valorReceber
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, this.context['vlreceber'], '#0.00'));

      /**
       * Altera valorLucro
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, oprSubtract.call(this, this.context['montante'], oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd'])), '#0.00'));

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Investidor - Investe - Calcula Valor Final Cota - BKP
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Investe - Calcula Valor Final Cota - BKP', [null, null, null, null, null, null]);

      /**
       * Fim
       */
      return null;

    }

  }

}

function runInvestidorInvesteCalculaValorFinalCota(parent, sys, formID, params) {
  var rule = new InvestidorInvesteCalculaValorFinalCota(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSimulacaoAoClicarNosBotoes(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Simulação - Ao clicar nos botoes';
  this.functionName = 'EmprestimoSimulacaoAoClicarNosBotoes';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSimulacaoAoClicarNosBotoes.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Simulação - Ao clicar nos botoes"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param tipo equivale à variável this.context['tipo']<br/>
 * @param aba equivale à variável this.context['aba']<br/>
 * @author Master Albuquerque Santos
 * @since 01/01/2023 16:55:41
 */
EmprestimoSimulacaoAoClicarNosBotoes.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Simulação - Ao clicar nos botoes';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipo'] = this.checkType(arguments[1], 'Inteiro');

  this.context['aba'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['retorno'] = 0;


  /**
   * Emprestimo - Checa se respondeu questionario
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Checa se respondeu questionario', [this.context['idPessoa'], this.context['tipo']]);

  /**
   * Retorno igual a 0?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
      
    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run(this.context['aba']);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Abre form na moldura
     */
    ebfFrameOpenFilteredForm.call(this, ebfGetGUIDActualForm.call(this), 'molduraQuestionario', '{E9F0A5CB-5098-405E-A445-F526A87B2510}', true, ebfConcat.call(this, 'fin_tomadorquestionario.id_pessoa=', this.context['idPessoa'], '@long'), false);

    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run('Questionário');

    /**
     * Fim
     */
    return null;

  }

}

function runEmprestimoSimulacaoAoClicarNosBotoes(parent, sys, formID, params) {
  var rule = new EmprestimoSimulacaoAoClicarNosBotoes(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarAoEntrar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Ao entrar';
  this.functionName = 'CadastroAprovarReprovarAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Ao entrar"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @author Master Albuquerque Santos
 * @since 27/10/2022 21:01:43
 */
CadastroAprovarReprovarAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');


  /**
   * Oculta aba reprovar
   */
  ebfFormShowTab.call(this, 'Reprovar', false);

  /**
   * Cadastro - Timeline
   */
  new CadastroTimeline(this, this.getSystem(), this.getForm()).run(this.context['idPessoa']);

  /**
   * Remover barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * Alert reprovado
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'containerReprovado'), 'Cadastro Reprovado');

  /**
   * Alert reprovado
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'containerReprovado1'), 'Cadastro Reprovado');

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarAoEntrar(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarCallback(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Callback';
  this.functionName = 'CadastroAprovarReprovarCallback';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarCallback.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Callback"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 17:09:49
 */
CadastroAprovarReprovarCallback.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Callback';
  this.context = new Array();


  /**
   * Destruir liberar
   */
  ebfDestroyComponent.call(this, 'liberar');

  /**
   * Destruir reprovar
   */
  ebfDestroyComponent.call(this, 'reprovar');

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, 'Cliente Liberado!', null, null);

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Cadastro - Aprovar/Reprovar - Executa no filho', ebfListCreate.call(this));

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarCallback(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarCallback(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarAtualizaGradeAposAprovar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar';
  this.functionName = 'CadastroAprovarReprovarAtualizaGradeAposAprovar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarAtualizaGradeAposAprovar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 12:21:41
 */
CadastroAprovarReprovarAtualizaGradeAposAprovar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar';
  this.context = new Array();


  /**
   * Atualiza grade
   */
  ebfFormRefreshComponent.call(this, 'gradeAguardando');

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarAtualizaGradeAposAprovar(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarAtualizaGradeAposAprovar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorDetalhesAoEntrar(parent, sys, formID) {
  this.ruleName = 'Investidor - Detalhes - Ao entrar';
  this.functionName = 'InvestidorDetalhesAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorDetalhesAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Detalhes - Ao entrar"
 * @param listaColunas equivale à variável this.context['listaColunas']<br/>
 * @author Master Albuquerque Santos
 * @since 27/02/2023 20:28:54
 */
InvestidorDetalhesAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Detalhes - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaColunas'] = this.checkType(arguments[0], 'Letras');


  /**
   * Altera valorInvestir
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * Altera valorReceber
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * Altera valorLucro
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * Geral - Ajustar Largura das Colunas da Grade
   */
  new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo');

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo', this.context['listaColunas'], 'C');

  /**
   * Font-google
   */
  ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

  /**
   * Foca componente
   */
  ebfFormSetFocus.call(this, 'qtdCota');

  /**
   * Remove barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * Fim
   */
  return null;

}

function runInvestidorDetalhesAoEntrar(parent, sys, formID, params) {
  var rule = new InvestidorDetalhesAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarAoClicarCliente(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Ao clicar - Cliente';
  this.functionName = 'CadastroAprovarReprovarAoClicarCliente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarAoClicarCliente.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Ao clicar - Cliente"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 27/10/2022 19:10:49
 */
CadastroAprovarReprovarAoClicarCliente.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao clicar - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['email'] = this.checkType(arguments[1], 'Letras');


  /**
   * Cadastro - Aprovar/Reprovar - Ao clicar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Aprovar/Reprovar - Ao clicar - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarAoClicarCliente(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarAoClicarCliente(parent, sys, formID);
  rule.run.apply(rule, params);
}


function CadastroComplementoAbreFormDeReprovacao(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Abre form de reprovação';
  this.functionName = 'CadastroComplementoAbreFormDeReprovacao';
  this.sys = sys;
  this.formID = formID;
}

CadastroComplementoAbreFormDeReprovacao.prototype = new Rule;

CadastroComplementoAbreFormDeReprovacao.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Abre form de reprovação';
  this.context = new Array();

  interactionError('<b>Regra:</b> Cadastro - Complemento - Abre form de reprovação\n<b>Mensagem:</b> null');

  return null;
}


function runCadastroComplementoAbreFormDeReprovacao(parent, sys, formID, params) {
  var rule = new CadastroComplementoAbreFormDeReprovacao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoGravarDadosInteracao(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Gravar Dados - Interação';
  this.functionName = 'CadastroComplementoGravarDadosInteracao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoGravarDadosInteracao.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Gravar Dados - Interação"
 * @param termo equivale à variável this.context['termo']<br/>
 * @author Master Albuquerque Santos
 * @since 27/09/2022 22:32:06
 */
CadastroComplementoGravarDadosInteracao.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Gravar Dados - Interação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['termo'] = this.checkType(arguments[0], 'Lógico');


  /**
   * Termo marcado?
   */
  if (parseBoolean(this.context['termo'])) {
      
    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage(null, 'Confirmar os dados e gravar?', 'Cadastro - Complemento - Gravar Dados', ebfListParamsCreate.call(this, null), null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Mensagem de Erro (Clássico)
     */
    ActErrorMessage('È preciso aceitar os termos e condições do contrato!');

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroComplementoGravarDadosInteracao(parent, sys, formID, params) {
  var rule = new CadastroComplementoGravarDadosInteracao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralRemoverSelecaoDaLinha(parent, sys, formID) {
  this.ruleName = 'Geral - Remover seleção da Linha';
  this.functionName = 'GeralRemoverSelecaoDaLinha';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralRemoverSelecaoDaLinha.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Remover seleção da Linha"
 * @param grade equivale à variável this.context['grade']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 14:38:04
 */
GeralRemoverSelecaoDaLinha.prototype.run = function() {
  document.ruleNameForException = 'Geral - Remover seleção da Linha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['grade'] = this.checkType(arguments[0], 'Componente');


  /**
   * Remover seleção da Linha
   */
  ebfGridSelectRow.call(this, this.context['grade'], parseInt(-1));

  /**
   * Fim
   */
  return null;

}

function runGeralRemoverSelecaoDaLinha(parent, sys, formID, params) {
  var rule = new GeralRemoverSelecaoDaLinha(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoReprovaIntermediario(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Reprova Intermediario';
  this.functionName = 'CadastroComplementoReprovaIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoReprovaIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Reprova Intermediario"
 * @param lógico equivale à variável this.context['lógico']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param motivo equivale à variável this.context['motivo']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 11:37:00
 */
CadastroComplementoReprovaIntermediario.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Reprova Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['lógico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['motivo'] = this.checkType(arguments[2], 'Letras');


  /**
   * Cadastro - Complemento - Reprova Intermediario - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Reprova Intermediario - Servidor', [this.context['idPessoa'], this.context['motivo']]);

  /**
   * Mensagem de Alerta (Clássico)
   */
  ActWarningMessage('Cadastro reprovado!');

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * Destrói botão de confirmar reprovar
   */
  ebfDestroyComponent.call(this, 'reprovar');

  /**
   * Destrói botão de confirmar reprovação
   */
  ebfDestroyComponent.call(this, 'confirmarReprovacao');

  /**
   * Destrói botão de Liberar
   */
  ebfDestroyComponent.call(this, 'liberar');

  /**
   * Mostrar alertas
   */
  new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('alertaReprovado,alertaReprovado1', true);

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Cadastro - Aprovar/Reprovar - Executa no filho', ebfListCreate.call(this));

  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoReprovaIntermediario(parent, sys, formID, params) {
  var rule = new CadastroComplementoReprovaIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroAprovarReprovarExecutaNoFilho(parent, sys, formID) {
  this.ruleName = 'Cadastro - Aprovar/Reprovar - Executa no filho';
  this.functionName = 'CadastroAprovarReprovarExecutaNoFilho';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroAprovarReprovarExecutaNoFilho.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Aprovar/Reprovar - Executa no filho"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 12:21:36
 */
CadastroAprovarReprovarExecutaNoFilho.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Executa no filho';
  this.context = new Array();


  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{3B3F7F54-FFA5-4C4D-98EC-4C11EF2670EC}', 'Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar', ebfListCreate.call(this));

  /**
   * Fim
   */
  return null;

}

function runCadastroAprovarReprovarExecutaNoFilho(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarExecutaNoFilho(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoNavegarMostraOcultaContainer(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao navegar - Mostra Oculta Container';
  this.functionName = 'CadastroComplementoAoNavegarMostraOcultaContainer';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoNavegarMostraOcultaContainer.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao navegar - Mostra Oculta Container"
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 17:44:52
 */
CadastroComplementoAoNavegarMostraOcultaContainer.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao navegar - Mostra Oculta Container';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * Cadastro Não finalizado?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(3))))) {
      
    /**
     * Destrói botão de gravar
     */
    ebfDestroyComponent.call(this, 'gravar');

    return this.FlowExpression1();

  } else {

    /**
     * Em Análise?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(4))))) {
        
      /**
       * Cadastro - Complemento - Ao entrar - Status 3
       */
      new CadastroComplementoAoEntrarStatus3(this, this.getSystem(), this.getForm()).run();

      return this.FlowConnector1();

    } else {

      /**
       * Finalizado?
       */
      if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(5))))) {
          
        /**
         * Cadastro - Complemento - Ao entrar - Status 5
         */
        new CadastroComplementoAoEntrarStatus5(this, this.getSystem(), this.getForm()).run();

        return this.FlowConnector1();

      } else {

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

CadastroComplementoAoNavegarMostraOcultaContainer.prototype.FlowConnector1 = function() {

    return this.FlowExpression1();
  }

CadastroComplementoAoNavegarMostraOcultaContainer.prototype.FlowExpression1 = function() {

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * Oculta Main
     */
    ebfFormSetVisible.call(this, 'main', false);

    /**
     * Mostra Main1
     */
    ebfFormSetVisible.call(this, 'mainCompleto', true);

    /**
     * Fim
     */
    return null;
  }


function runCadastroComplementoAoNavegarMostraOcultaContainer(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoNavegarMostraOcultaContainer(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoNavegar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao navegar';
  this.functionName = 'CadastroComplementoAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao navegar"
 * @param enviadoIdentificacao equivale à variável this.context['enviadoIdentificacao']<br/>
 * @param enviadoRenda equivale à variável this.context['enviadoRenda']<br/>
 * @param enviadoResidencia equivale à variável this.context['enviadoResidencia']<br/>
 * @param estadoCivil equivale à variável this.context['estadoCivil']<br/>
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 17/09/2022 17:03:59
 */
CadastroComplementoAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['enviadoIdentificacao'] = this.checkType(arguments[0], 'Letras');

  this.context['enviadoRenda'] = this.checkType(arguments[1], 'Letras');

  this.context['enviadoResidencia'] = this.checkType(arguments[2], 'Letras');

  this.context['estadoCivil'] = this.checkType(arguments[3], 'Inteiro');

  this.context['status'] = this.checkType(arguments[4], 'Inteiro');


  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoAoNavegar(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function RatingAoEntrar(parent, sys, formID) {
  this.ruleName = 'Rating - Ao entrar';
  this.functionName = 'RatingAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

RatingAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Rating - Ao entrar"
 * @author Master Albuquerque Santos
 * @since 03/01/2023 18:30:15
 */
RatingAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Rating - Ao entrar';
  this.context = new Array();


  /**
   * Geral - Ajustar Largura das Colunas da Grade
   */
  new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeRating');

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeRating', 'Rating,Tx. de Juros (%),Valor Máximo,Máximo de Parcelas,Total Cotas,Max. Cotas Investidor,Pontuação Inicial,Pontuação Final,Max. Vl Investidor', 'C');

  /**
   * Remover barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * Fim
   */
  return null;

}

function runRatingAoEntrar(parent, sys, formID, params) {
  var rule = new RatingAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoEnviarParaAnaliseIntermediario(parent, sys, formID) {
  this.ruleName = 'Cadastro Complemento - Enviar para Análise - Intermediario';
  this.functionName = 'CadastroComplementoEnviarParaAnaliseIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoEnviarParaAnaliseIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro Complemento - Enviar para Análise - Intermediario"
 * @param parametro equivale à variável this.context['parametro']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 06/10/2022 18:06:46
 */
CadastroComplementoEnviarParaAnaliseIntermediario.prototype.run = function() {
  document.ruleNameForException = 'Cadastro Complemento - Enviar para Análise - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['email'] = this.checkType(arguments[2], 'Letras');


  /**
   * Cadastro Complemento - Enviar para Análise - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro Complemento - Enviar para Análise - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Cadastro enviado para Análise!', parseInt(2), null);

  /**
   * Mostra Alerta Análise
   */
  ebfFormSetVisible.call(this, 'alertaAnalise', true);

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoEnviarParaAnaliseIntermediario(parent, sys, formID, params) {
  var rule = new CadastroComplementoEnviarParaAnaliseIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoGravarDados(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Gravar Dados';
  this.functionName = 'CadastroComplementoGravarDados';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoGravarDados.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Gravar Dados"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 16:51:21
 */
CadastroComplementoGravarDados.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Gravar Dados';
  this.context = new Array();


  /**
   * Desabilita gravar
   */
  ebfFormSetEnabled.call(this, 'gravar', false);

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerGravar'), 'display', 'inline-block');

  /**
   * Grava alterações
   */
  ebfNavEditSaveRecordAsync.call(this);

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroComplementoGravarDados(parent, sys, formID, params) {
  var rule = new CadastroComplementoGravarDados(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroVoltar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Voltar';
  this.functionName = 'CadastroVoltar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroVoltar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Voltar"
 * @param Aba equivale à variável this.context['Aba']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 17:19:36
 */
CadastroVoltar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Voltar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');


  /**
   * Geral - Ativar Aba
   */
  new GeralAtivarAba(this, this.getSystem(), this.getForm()).run(this.context['Aba']);

  /**
   * Ocultar aba
   */
  ebfFormShowTab.call(this, 'Reprovar', false);

  /**
   * Ativar aba
   */
  ebfFormShowTab.call(this, 'Histórico', true);

  /**
   * Fim
   */
  return null;

}

function runCadastroVoltar(parent, sys, formID, params) {
  var rule = new CadastroVoltar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAtivarAbaEOcultarAbas(parent, sys, formID) {
  this.ruleName = 'Geral - Ativar Aba e Ocultar Abas';
  this.functionName = 'GeralAtivarAbaEOcultarAbas';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAtivarAbaEOcultarAbas.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Ativar Aba e Ocultar Abas"
 * @param Aba equivale à variável this.context['Aba']<br/>
 * @param listaAbas equivale à variável this.context['listaAbas']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 15:50:59
 */
GeralAtivarAbaEOcultarAbas.prototype.run = function() {
  document.ruleNameForException = 'Geral - Ativar Aba e Ocultar Abas';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');

  this.context['listaAbas'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['listaVariante'] = null;

  this.context['tamanhoLista'] = 0;

  this.context['contador'] = 0;

  this.context['contador'] = parseInt(1);

  /**
   * Ativar Aba
   */
  ebfFormOpenTab.call(this, this.context['Aba']);

  /**
   * Lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaAbas'], ',');

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * Contador <= Tamanho da Lista
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * Ocultar aba
     */
    ebfFormShowTab.call(this, ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador']), false);

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));
  }

  /**
   * Fim
   */
  return null;

}

function runGeralAtivarAbaEOcultarAbas(parent, sys, formID, params) {
  var rule = new GeralAtivarAbaEOcultarAbas(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAposAlterar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Apos alterar';
  this.functionName = 'CadastroComplementoAposAlterar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAposAlterar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Apos alterar"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 19/11/2022 12:43:48
 */
CadastroComplementoAposAlterar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Apos alterar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  this.context['email'] = this.checkType(arguments[1], 'Letras');


  /**
   * Cadastro - Complemento - Apos alterar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Apos alterar - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowExpression3();

  } else {

    /**
     * Destrói botão de envio
     */
    ebfDestroyComponent.call(this, 'enviar');

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'Cadastro enviado para Análise!', parseInt(2), null);

    /**
     * Mostra Alerta Análise
     */
    ebfFormSetVisible.call(this, 'alertaAnalise', true);

    return this.FlowExpression3();

  }

}

CadastroComplementoAposAlterar.prototype.FlowExpression3 = function() {

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * Oculta Main
     */
    ebfFormSetVisible.call(this, 'main', false);

    /**
     * Mostra Main1
     */
    ebfFormSetVisible.call(this, 'mainCompleto', true);

    /**
     * Cancela edição
     */
    ebfNavEditCancel.call(this);

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'Dados gravados com sucesso! Envie os documentos necessários', parseInt(2), null);

    /**
     * Fim
     */
    return null;
  }


function runCadastroComplementoAposAlterar(parent, sys, formID, params) {
  var rule = new CadastroComplementoAposAlterar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralFecharFormulario(parent, sys, formID) {
  this.ruleName = 'Geral - Fechar formulário';
  this.functionName = 'GeralFecharFormulario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralFecharFormulario.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Fechar formulário"
 * @author Master Albuquerque Santos
 * @since 28/09/2022 07:41:12
 */
GeralFecharFormulario.prototype.run = function() {
  document.ruleNameForException = 'Geral - Fechar formulário';
  this.context = new Array();


  /**
   * Fechar formulário
   */
  ebfCloseForm.call(this);

  /**
   * Fim
   */
  return null;

}

function runGeralFecharFormulario(parent, sys, formID, params) {
  var rule = new GeralFecharFormulario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorInvesteIntermediario(parent, sys, formID) {
  this.ruleName = 'Investidor - Investe - Intermediario';
  this.functionName = 'InvestidorInvesteIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorInvesteIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Investe - Intermediario"
 * @param logico equivale à variável this.context['logico']<br/>
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param idCota equivale à variável this.context['idCota']<br/>
 * @param qtd equivale à variável this.context['qtd']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param vlCotaSimples equivale à variável this.context['vlCotaSimples']<br/>
 * @param vlCotaInvestidor equivale à variável this.context['vlCotaInvestidor']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param nomeTomador equivale à variável this.context['nomeTomador']<br/>
 * @author Master Albuquerque Santos
 * @since 27/01/2023 15:49:45
 */
InvestidorInvesteIntermediario.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Investe - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idTransacao'] = this.checkType(arguments[1], 'Inteiro');

  this.context['idCota'] = this.checkType(arguments[2], 'Inteiro');

  this.context['qtd'] = this.checkType(arguments[3], 'Inteiro');

  this.context['juros'] = this.checkType(arguments[4], 'Fracionado');

  this.context['parcelas'] = this.checkType(arguments[5], 'Inteiro');

  this.context['vlCotaSimples'] = this.checkType(arguments[6], 'Fracionado');

  this.context['vlCotaInvestidor'] = this.checkType(arguments[7], 'Fracionado');

  this.context['email'] = this.checkType(arguments[8], 'Letras');

  this.context['nomeTomador'] = this.checkType(arguments[9], 'Letras');


  /**
   * Investidor - Investe - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Investe - Servidor', [this.context['idTransacao'], this.context['idCota'], this.context['qtd'], this.context['juros'], this.context['parcelas'], this.context['vlCotaSimples'], this.context['vlCotaInvestidor'], this.context['email'], this.context['nomeTomador']]);

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage('Parabéns!', 'Cotas Adquiridas!', null, null);

  /**
   * Desabilita Campos
   */
  new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('botaoInvestir,qtdCota', false);

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Executar Fluxo no Formulário', ebfListParamsCreate.call(this, '{83E09CD4-343A-4876-AB87-3684EAE9DD52}', 'Investidor - Ao Entrar', ebfListParamsCreate.call(this, null)));

  /**
   * Fechar formulário
   */
  ebfRuleSchedulerNoParent.call(this, 'Geral - Fechar formulário', ebfListParamsCreate.call(this, null), parseFloat(1000));

  /**
   * Fim
   */
  return null;

}

function runInvestidorInvesteIntermediario(parent, sys, formID, params) {
  var rule = new InvestidorInvesteIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoEnviarParaAnalise(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Enviar para análise';
  this.functionName = 'CadastroComplementoEnviarParaAnalise';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoEnviarParaAnalise.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Enviar para análise"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param termos equivale à variável this.context['termos']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @author Master Albuquerque Santos
 * @since 27/09/2022 23:01:15
 */
CadastroComplementoEnviarParaAnalise.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Enviar para análise';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['termos'] = this.checkType(arguments[1], 'Lógico');

  this.context['email'] = this.checkType(arguments[2], 'Letras');


  /**
   * Cadastro - Complemento - Enviar para análise - Verificação
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Enviar para análise - Verificação', [this.context['idPessoa'], this.context['termos']]);

  /**
   * Desabilita enviar
   */
  ebfFormSetEnabled.call(this, 'enviar', false);

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerAnalise'), 'display', 'inline-block');

  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma o envio dos dados para análise?', 'Cadastro Complemento - Enviar para Análise - Intermediario', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['email']), null, null);

  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoEnviarParaAnalise(parent, sys, formID, params) {
  var rule = new CadastroComplementoEnviarParaAnalise(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralDestruirBotoes(parent, sys, formID) {
  this.ruleName = 'Geral - Destruir Botões';
  this.functionName = 'GeralDestruirBotoes';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralDestruirBotoes.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Destruir Botões"
 * @param listaBotoes equivale à variável this.context['listaBotoes']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 15:51:15
 */
GeralDestruirBotoes.prototype.run = function() {
  document.ruleNameForException = 'Geral - Destruir Botões';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaBotoes'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['listaVariante'] = null;

  this.context['tamanhoLista'] = 0;

  this.context['contador'] = 0;

  this.context['contador'] = parseInt(1);

  /**
   * Lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaBotoes'], ',');

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * Contador <= Tamanho da Lista
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, ebfGetElementFromList.call(this, this.context['listaVariante'], parseInt(1))))) {
        
      /**
       * Destruir Componente
       */
      ebfDestroyComponent.call(this, ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador']));

      var FlowExpression5 = this.FlowExpression5();
      if (!(FlowExpression5 instanceof InvalidVariant)) {
        return FlowExpression5;
      }

    } else {

      var FlowExpression5 = this.FlowExpression5();
      if (!(FlowExpression5 instanceof InvalidVariant)) {
        return FlowExpression5;
      }

    }
  }

  /**
   * Fim
   */
  return null;

}

GeralDestruirBotoes.prototype.FlowExpression5 = function() {

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));

    return new InvalidVariant();
  }


function runGeralDestruirBotoes(parent, sys, formID, params) {
  var rule = new GeralDestruirBotoes(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralExecutarFluxoNoPrincipal(parent, sys, formID) {
  this.ruleName = 'Geral - Executar fluxo no Principal';
  this.functionName = 'GeralExecutarFluxoNoPrincipal';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralExecutarFluxoNoPrincipal.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Executar fluxo no Principal"
 * @author Master Albuquerque Santos
 * @since 18/11/2022 16:37:28
 */
GeralExecutarFluxoNoPrincipal.prototype.run = function() {
  document.ruleNameForException = 'Geral - Executar fluxo no Principal';
  this.context = new Array();


}

function runGeralExecutarFluxoNoPrincipal(parent, sys, formID, params) {
  var rule = new GeralExecutarFluxoNoPrincipal(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoReprovar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Reprovar';
  this.functionName = 'CadastroComplementoReprovar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoReprovar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Reprovar"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param motivo equivale à variável this.context['motivo']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 11:46:02
 */
CadastroComplementoReprovar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Reprovar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['motivo'] = this.checkType(arguments[1], 'Letras');


  /**
   * Motivo é nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['motivo']))) {
      
    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Informe o motivo');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', 'Confirma a REPROVAÇÃO do cadastro do cliente?', 'Cadastro - Complemento - Reprova Intermediario', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['motivo']), null, null);

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroComplementoReprovar(parent, sys, formID, params) {
  var rule = new CadastroComplementoReprovar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralExecutarFluxoNoFormulario(parent, sys, formID) {
  this.ruleName = 'Geral - Executar fluxo no formulário';
  this.functionName = 'GeralExecutarFluxoNoFormulario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralExecutarFluxoNoFormulario.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Executar fluxo no formulário"
 * @param formulario equivale à variável this.context['formulario']<br/>
 * @param fluxo equivale à variável this.context['fluxo']<br/>
 * @param listaParametros equivale à variável this.context['listaParametros']<br/>
 * @author Master Albuquerque Santos
 * @since 18/11/2022 16:44:33
 */
GeralExecutarFluxoNoFormulario.prototype.run = function() {
  document.ruleNameForException = 'Geral - Executar fluxo no formulário';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['formulario'] = this.checkType(arguments[0], 'Formulário');

  this.context['fluxo'] = this.checkType(arguments[1], 'Fluxo');

  this.context['listaParametros'] = this.checkType(arguments[2], 'Variante');


  /**
   * Executar fluxo no formulário
   */
  ebfChannelExecuteRuleOnForm.call(this, this.context['formulario'], this.context['fluxo'], this.context['listaParametros'], null, null);

  /**
   * Fim
   */
  return null;

}

function runGeralExecutarFluxoNoFormulario(parent, sys, formID, params) {
  var rule = new GeralExecutarFluxoNoFormulario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAtualizarComponente(parent, sys, formID) {
  this.ruleName = 'Geral - Atualizar Componente';
  this.functionName = 'GeralAtualizarComponente';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAtualizarComponente.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Atualizar Componente"
 * @param componente equivale à variável this.context['componente']<br/>
 * @author Master Albuquerque Santos
 * @since 16/01/2023 15:39:08
 */
GeralAtualizarComponente.prototype.run = function() {
  document.ruleNameForException = 'Geral - Atualizar Componente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['componente'] = this.checkType(arguments[0], 'Componente');


  /**
   * Atualizar componente
   */
  ebfFormRefreshComponent.call(this, this.context['componente']);

  /**
   * Fim
   */
  return null;

}

function runGeralAtualizarComponente(parent, sys, formID, params) {
  var rule = new GeralAtualizarComponente(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoEntrarStatus5(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao entrar - Status 5';
  this.functionName = 'CadastroComplementoAoEntrarStatus5';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoEntrarStatus5.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao entrar - Status 5"
 * @author Master Albuquerque Santos
 * @since 07/10/2022 17:44:33
 */
CadastroComplementoAoEntrarStatus5.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar - Status 5';
  this.context = new Array();


  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * Fim
   */
  return null;

}

function runCadastroComplementoAoEntrarStatus5(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoEntrarStatus5(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroTimeline(parent, sys, formID) {
  this.ruleName = 'Cadastro - Timeline';
  this.functionName = 'CadastroTimeline';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroTimeline.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Timeline"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 17:56:52
 */
CadastroTimeline.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Timeline';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['html'] = '';


  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * Cadastro - Timeline - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Timeline - Servidor', [this.context['idPessoa']]);

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'principal'), ebfReplace.call(this, '<div class=\"container mt-5 mb-5\">\n   <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n         <h4>Histórico do Cliente</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n</div>', 'X:LINHA:X', this.context['html']));

  /**
   * Fim
   */
  return null;

}

function runCadastroTimeline(parent, sys, formID, params) {
  var rule = new CadastroTimeline(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorMeusInvestimentosAoNavegar(parent, sys, formID) {
  this.ruleName = 'Investidor - Meus Investimentos - Ao Navegar';
  this.functionName = 'InvestidorMeusInvestimentosAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorMeusInvestimentosAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Meus Investimentos - Ao Navegar"
 * @author Master Albuquerque Santos
 * @since 16/01/2023 18:50:07
 */
InvestidorMeusInvestimentosAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Meus Investimentos - Ao Navegar';
  this.context = new Array();


  /**
   * Investidor - Meus Investimentos - Ao Navegar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Meus Investimentos - Ao Navegar - Servidor');

  /**
   * Fim
   */
  return null;

}

function runInvestidorMeusInvestimentosAoNavegar(parent, sys, formID, params) {
  var rule = new InvestidorMeusInvestimentosAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroComplementoAoEntrar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Complemento - Ao entrar';
  this.functionName = 'CadastroComplementoAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroComplementoAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Complemento - Ao entrar"
 * @param enviadoIdentificacao equivale à variável this.context['enviadoIdentificacao']<br/>
 * @param enviadoRenda equivale à variável this.context['enviadoRenda']<br/>
 * @param enviadoResidencia equivale à variável this.context['enviadoResidencia']<br/>
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 07/10/2022 16:50:17
 */
CadastroComplementoAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['enviadoIdentificacao'] = this.checkType(arguments[0], 'Letras');

  this.context['enviadoRenda'] = this.checkType(arguments[1], 'Letras');

  this.context['enviadoResidencia'] = this.checkType(arguments[2], 'Letras');

  this.context['status'] = this.checkType(arguments[3], 'Inteiro');


  /**
   * Tem conjuge?
   */
  if (parseBoolean(oprBetween.call(this, this.context['estadoCivil'], parseInt(2), parseInt(3)))) {
      
    return this.FlowConnector5();

  } else {

    /**
     * Desabilita CPF Conjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', false);

    return this.FlowConnector5();

  }

}

CadastroComplementoAoEntrar.prototype.FlowDecision2 = function() {

    /**
     * Falta documento Renda?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoRenda'], 'NÃO'))) {
        
      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoRenda', '<i class=\"fas fa-exclamation text-warning\"></i> Comprovante de Renda *', 'Documento não enviado!');

      return this.FlowDecision3();

    } else {

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoRenda', '<i class=\"far fa-check-circle text-success\"></i>   Comprovante de Renda', 'Documento Enviado!');

      return this.FlowDecision3();

    }
  }

CadastroComplementoAoEntrar.prototype.FlowDecision3 = function() {

    /**
     * Falta documento Residência?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoResidencia'], 'NÃO'))) {
        
      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoResidencia', '<i class=\"fas fa-exclamation text-warning\"></i> Comprovante de Residência *', 'Documento não enviado!');

      return this.FlowConnector3();

    } else {

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoResidencia', '<i class=\"far fa-check-circle text-success\"></i>   Comprovante de Residência', 'Documento Enviado!');

      return this.FlowConnector3();

    }
  }

CadastroComplementoAoEntrar.prototype.FlowConnector3 = function() {

    /**
     * Carrega alerta
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'alertaAnalise'), '<div class=\"alert alert-warning text-center\" role=\"alert\" style=\"font-weight: 600;\">\n Cadastro em análise! Aguarde notificação da equipe Peg2Pag\n</div>');

    /**
     * Status = 1?
     */
    if (parseBoolean((isEqual.call(this, this.context['status'], parseInt(2)) || isEqual.call(this, this.context['status'], parseInt(6))))) {
        
      /**
       * Modo de Alteração
       */
      ebfFormEditMode.call(this);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Cadastro - Complemento - Ao navegar - Mostra Oculta Container
       */
      new CadastroComplementoAoNavegarMostraOcultaContainer(this, this.getSystem(), this.getForm()).run(this.context['status']);

      /**
       * Fim
       */
      return null;

    }
  }

CadastroComplementoAoEntrar.prototype.FlowConnector5 = function() {

    /**
     * Falta Documento Identificação?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoIdentificacao'], 'NÃO'))) {
        
      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoIdentificacao', '<i class=\"fas fa-exclamation text-warning\" ></i> Documento de Identificação *', 'Documento não enviado!');

      return this.FlowDecision2();

    } else {

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoIdentificacao', '<i class=\"far fa-check-circle text-success\"></i> Documento de Identificação', 'Documento Enviado!');

      return this.FlowDecision2();

    }
  }


function runCadastroComplementoAoEntrar(parent, sys, formID, params) {
  var rule = new CadastroComplementoAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorAoEntrar(parent, sys, formID) {
  this.ruleName = 'Investidor - Ao Entrar';
  this.functionName = 'InvestidorAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Ao Entrar"
 * @author Master Albuquerque Santos
 * @since 18/01/2023 17:00:53
 */
InvestidorAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Ao Entrar';
  this.context = new Array();


  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Rating', 'C');

  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas', 'C');

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimos', 'Parcelas,Data da Solicitação,Juros', 'C');

  /**
   * Investidor - Ao Entrar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Ao Entrar - Servidor');

  /**
   * Fim
   */
  return null;

}

function runInvestidorAoEntrar(parent, sys, formID, params) {
  var rule = new InvestidorAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoTimelineParcelas(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Timeline Parcelas';
  this.functionName = 'EmprestimoTimelineParcelas';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoTimelineParcelas.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Timeline Parcelas"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param montante equivale à variável this.context['montante']<br/>
 * @param prestação equivale à variável this.context['prestação']<br/>
 * @param diaVencimento equivale à variável this.context['diaVencimento']<br/>
 * @param cotas equivale à variável this.context['cotas']<br/>
 * @author Master Albuquerque Santos
 * @since 03/01/2023 09:55:08
 */
EmprestimoTimelineParcelas.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Timeline Parcelas';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  this.context['montante'] = this.checkType(arguments[1], 'Fracionado');

  this.context['prestação'] = this.checkType(arguments[2], 'Inteiro');

  this.context['diaVencimento'] = this.checkType(arguments[3], 'Inteiro');

  this.context['cotas'] = this.checkType(arguments[4], 'Inteiro');

  // Variáveis
  this.context['html'] = '';

  this.context['mensal'] = 0.0;

  this.context['contador'] = 0;

  this.context['data'] = null;

  this.context['valorCotas'] = 0.0;

  this.context['contador'] = parseInt(1);

  /**
   * Cria data inicial
   */
  this.context['data'] = ebfCreateDate.call(this, ebfDateYear.call(this, ebfDateToday.call(this)), (isGreater.call(this, this.context['diaVencimento'], ebfDateDay.call(this, ebfDateToday.call(this))) ? oprAdd.call(this, ebfDateMonth.call(this, ebfDateToday.call(this)), parseInt(1)) : ebfDateMonth.call(this, ebfDateToday.call(this))), this.context['diaVencimento'], null, null, null);

  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * Obtem mensal
   */
  this.context['mensal'] = ebfArredondaDecimal.call(this, oprDivide.call(this, this.context['montante'], this.context['prestação']), parseInt(2), true);

  /**
   * Contador < = Prestações
   */
  while (parseBoolean(isMinor.call(this, toLong.call(this, this.context['contador']), toLong.call(this, this.context['prestação'])))) {

    /**
     * Contador > 4?
     */
    if (parseBoolean(isGreater.call(this, toLong.call(this, this.context['contador']), toLong.call(this, parseInt(4))))) {
        
      var FlowExpression6 = this.FlowExpression6();
      if (!(FlowExpression6 instanceof InvalidVariant)) {
        return FlowExpression6;
      }

    } else {

      /**
       * html
       */
      this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<li class=\"normal\">\n    <p>:XPARCELA:Xª parcela - Vencimento: X:DATA:X - Valor da Prestação: X:VALOR:X</p>\n </li>', 'X:VALOR:X', ebfConcat.call(this, 'R$ ', this.context['mensal'])), 'X:DATA:X', ebfSubstring.call(this, this.context['data'], parseInt(1), parseInt(10))), ':XPARCELA:X', this.context['contador']));

      var FlowExpression6 = this.FlowExpression6();
      if (!(FlowExpression6 instanceof InvalidVariant)) {
        return FlowExpression6;
      }

    }
  }

  /**
   * html
   */
  this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), '<li>\n   <p><b>.</b></p>\n   <p><b>.</b></p>\n  <p><b>.</b></p>\n </li>');

  /**
   * html
   */
  this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<li class=\"normal\">\n    <p>:XPARCELA:Xª parcela - Vencimento: X:DATA:X - Valor da Prestação: X:VALOR:X</p>\n </li>', 'X:VALOR:X', ebfConcat.call(this, 'R$ ', this.context['mensal'])), 'X:DATA:X', ebfSubstring.call(this, this.context['data'], parseInt(1), parseInt(10))), ':XPARCELA:X', this.context['contador']));

  /**
   * Valor das cotas
   */
  this.context['valorCotas'] = ebfArredondaDecimal.call(this, oprDivide.call(this, this.context['montante'], this.context['cotas']), parseInt(2), true);

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'parcelas'), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<div class=\"container\">\n   <div class=\"row w-100\">\n      <div class=\"col-md-12\">\n         <h4>Simulação - Parcelas</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n <hr style= \"margin-top: 0.2rem; margin-bottom: 0.5rem;\">\n  <div class=\"row w-100\">\n     <div class=\"col-md-9 pt-2\">\n           <span> Valor Final:<b> :XMONTANTE:X </b> </span>\n     </div>\n     <div class=\"col-md-5\" style=\"display:none\">\n           <span> Cotas:<b> :XCOTAS:X de :XVALORCOTAS:X cada</b> </span>\n     </div>\n      <div class=\"col-md-3\" id=\"idBotaoContratar\">\n        \n       </div>\n  </div>\n</div>', 'X:LINHA:X', this.context['html']), ':XMONTANTE:X ', ebfConcat.call(this, 'R$ ', ebfArredondaDecimal.call(this, this.context['montante'], parseInt(2), true))), ':XCOTAS:X', this.context['cotas']), ':XVALORCOTAS:X', ebfConcat.call(this, 'R$ ', this.context['valorCotas'])));

  /**
   * Anexa botão
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'idBotaoContratar'), ebfHtmlGetMakerElementById.call(this, 'contratar'));

  /**
   * Mostrar botaoContratar
   */
  ebfFormSetVisible.call(this, 'contratar', true);

  /**
   * Fim
   */
  return null;

}

EmprestimoTimelineParcelas.prototype.FlowExpression6 = function() {

    /**
     * Incrementa data
     */
    this.context['data'] = ebfDateIncMonth.call(this, this.context['data'], parseInt(1));

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));

    return new InvalidVariant();
  }


function runEmprestimoTimelineParcelas(parent, sys, formID, params) {
  var rule = new EmprestimoTimelineParcelas(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaExecutaNaMoldura(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Executa na moldura';
  this.functionName = 'TomadorPagarParcelaExecutaNaMoldura';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaExecutaNaMoldura.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Executa na moldura"
 * @author Master Albuquerque Santos
 * @since 28/01/2023 17:49:30
 */
TomadorPagarParcelaExecutaNaMoldura.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Executa na moldura';
  this.context = new Array();


  /**
   * Atualiza gradeEmprestimo
   */
  ebfFormRefreshComponent.call(this, 'gradeEmprestimo');

  /**
   * Fim
   */
  return null;

}

function runTomadorPagarParcelaExecutaNaMoldura(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaExecutaNaMoldura(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorMeusInvestimentosAoEntrar(parent, sys, formID) {
  this.ruleName = 'Investidor - Meus Investimentos - Ao Entrar';
  this.functionName = 'InvestidorMeusInvestimentosAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorMeusInvestimentosAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Meus Investimentos - Ao Entrar"
 * @author Master Albuquerque Santos
 * @since 27/02/2023 20:17:12
 */
InvestidorMeusInvestimentosAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Meus Investimentos - Ao Entrar';
  this.context = new Array();


  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Rating', 'C');

  /**
   * Centralizar Cotas
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas', 'C');

  /**
   * Centralizar Parcelas
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Parcelas', 'C');

  /**
   * Centralizar Valor Cota (R$)
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Valor Cota (R$)', 'C');

  /**
   * Centralizar Valor Cota (R$)
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas Investidas', 'C');

  /**
   * Fim
   */
  return null;

}

function runInvestidorMeusInvestimentosAoEntrar(parent, sys, formID, params) {
  var rule = new InvestidorMeusInvestimentosAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralSairDoSistema(parent, sys, formID) {
  this.ruleName = 'Geral - Sair do Sistema';
  this.functionName = 'GeralSairDoSistema';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralSairDoSistema.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Sair do Sistema"
 * @author Master Albuquerque Santos
 * @since 27/01/2023 14:45:59
 */
GeralSairDoSistema.prototype.run = function() {
  document.ruleNameForException = 'Geral - Sair do Sistema';
  this.context = new Array();


  /**
   * Sair
   */
  ebfSystemExit.call(this);

  /**
   * Fim
   */
  return null;

}

function runGeralSairDoSistema(parent, sys, formID, params) {
  var rule = new GeralSairDoSistema(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaVerificarStatus(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Verificar Status';
  this.functionName = 'TomadorPagarParcelaVerificarStatus';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaVerificarStatus.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Verificar Status"
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 28/01/2023 18:20:18
 */
TomadorPagarParcelaVerificarStatus.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Verificar Status';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * Parcela paga?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(2))))) {
      
    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Parcela já quitada!', null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Fim
     */
    return null;

  }

}

function runTomadorPagarParcelaVerificarStatus(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaVerificarStatus(parent, sys, formID);
  rule.run.apply(rule, params);
}

function LoginAbrirCadastro(parent, sys, formID) {
  this.ruleName = 'Login - Abrir cadastro';
  this.functionName = 'LoginAbrirCadastro';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

LoginAbrirCadastro.prototype = new Rule;

/**
 * Esta função executa a regra "Login - Abrir cadastro"
 * @author Master Albuquerque Santos
 * @since 14/02/2023 20:23:13
 */
LoginAbrirCadastro.prototype.run = function() {
  document.ruleNameForException = 'Login - Abrir cadastro';
  this.context = new Array();


  /**
   * Abre url de cadastro
   */
  ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/form.jsp?sys=P2P&action=openform&formID=464570564&align=0&mode=-1&goto=-1&filter=&scrolling=no&popup=true'));

  /**
   * Fim
   */
  return null;

}

function runLoginAbrirCadastro(parent, sys, formID, params) {
  var rule = new LoginAbrirCadastro(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorEmprestimosDisponiveisAoNavegar(parent, sys, formID) {
  this.ruleName = 'Investidor - Emprestimos Disponíveis - Ao Navegar';
  this.functionName = 'InvestidorEmprestimosDisponiveisAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorEmprestimosDisponiveisAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Emprestimos Disponíveis - Ao Navegar"
 * @author Master Albuquerque Santos
 * @since 27/01/2023 16:16:14
 */
InvestidorEmprestimosDisponiveisAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Emprestimos Disponíveis - Ao Navegar';
  this.context = new Array();


  /**
   * Investidor - Emprestimos Disponíves - Ao Navegar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Emprestimos Disponíves - Ao Navegar - Servidor');

  /**
   * Fim
   */
  return null;

}

function runInvestidorEmprestimosDisponiveisAoNavegar(parent, sys, formID, params) {
  var rule = new InvestidorEmprestimosDisponiveisAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorObterMaximoDeCotas(parent, sys, formID) {
  this.ruleName = 'Investidor - Obter Máximo de Cotas';
  this.functionName = 'InvestidorObterMaximoDeCotas';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorObterMaximoDeCotas.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Obter Máximo de Cotas"
 * @author Master Albuquerque Santos
 * @since 27/02/2023 19:43:07
 */
InvestidorObterMaximoDeCotas.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Obter Máximo de Cotas';
  this.context = new Array();


}

function runInvestidorObterMaximoDeCotas(parent, sys, formID, params) {
  var rule = new InvestidorObterMaximoDeCotas(parent, sys, formID);
  rule.run.apply(rule, params);
}

function InvestidorAoClicarEmInvestir(parent, sys, formID) {
  this.ruleName = 'Investidor - Ao clicar em investir';
  this.functionName = 'InvestidorAoClicarEmInvestir';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

InvestidorAoClicarEmInvestir.prototype = new Rule;

/**
 * Esta função executa a regra "Investidor - Ao clicar em investir"
 * @param valor equivale à variável this.context['valor']<br/>
 * @param idCota equivale à variável this.context['idCota']<br/>
 * @param qtd equivale à variável this.context['qtd']<br/>
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param vlCotaSimples equivale à variável this.context['vlCotaSimples']<br/>
 * @param vlCotaInvestidor equivale à variável this.context['vlCotaInvestidor']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param nomeTomador equivale à variável this.context['nomeTomador']<br/>
 * @param maxCotas equivale à variável this.context['maxCotas']<br/>
 * @author Master Albuquerque Santos
 * @since 27/02/2023 19:53:15
 */
InvestidorAoClicarEmInvestir.prototype.run = function() {
  document.ruleNameForException = 'Investidor - Ao clicar em investir';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['valor'] = this.checkType(arguments[0], 'Fracionado');

  this.context['idCota'] = this.checkType(arguments[1], 'Letras');

  this.context['qtd'] = this.checkType(arguments[2], 'Inteiro');

  this.context['idTransacao'] = this.checkType(arguments[3], 'Inteiro');

  this.context['juros'] = this.checkType(arguments[4], 'Fracionado');

  this.context['parcelas'] = this.checkType(arguments[5], 'Fracionado');

  this.context['vlCotaSimples'] = this.checkType(arguments[6], 'Fracionado');

  this.context['vlCotaInvestidor'] = this.checkType(arguments[7], 'Fracionado');

  this.context['email'] = this.checkType(arguments[8], 'Letras');

  this.context['nomeTomador'] = this.checkType(arguments[9], 'Letras');

  this.context['maxCotas'] = this.checkType(arguments[10], 'Letras');

  // Variáveis
  this.context['retorno'] = 0;


  /**
   * Nulos ou vazios?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['qtd']))) {
      
    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Selecione a quantidade de cotas!');

    return this.FlowEnd2();

  } else {

    /**
     * Qtd < 1?
     */
    if (parseBoolean(isMinor.call(this, this.context['qtd'], parseInt(1)))) {
        
      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage('O valor mínimo da quantidade é 1');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Qtd > max cotas?
       */
      if (parseBoolean(isGreater.call(this, toLong.call(this, this.context['qtd']), toLong.call(this, this.context['maxCotas'])))) {
          
        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('A quantidade de cotas ultrapassa o máximo permitido!');

        return this.FlowEnd2();

      } else {

        /**
         * True?
         */
        if (parseBoolean(true)) {
            
          return this.FlowActivity3();

        } else {

          /**
           * Investidor - Checar saldo Suficiente
           */
          this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Checar saldo Suficiente', [this.context['valor'], this.context['idCota']]);

          /**
           * Retorno = 1?
           */
          if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(1))))) {
              
            /**
             * Fim
             */
            return null;

          } else {

            return this.FlowActivity3();

          }

        }

      }

    }

  }

}

InvestidorAoClicarEmInvestir.prototype.FlowActivity3 = function() {

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage(null, 'Confirma o Investimento?', 'Investidor - Investe - Intermediario', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['idCota'], this.context['qtd'], this.context['juros'], this.context['parcelas'], this.context['vlCotaSimples'], this.context['vlCotaInvestidor'], this.context['email'], this.context['nomeTomador']), null, null);

    /**
     * Fim
     */
    return null;
  }

InvestidorAoClicarEmInvestir.prototype.FlowEnd2 = function() {

    /**
     * Fim
     */
    return null;
  }


function runInvestidorAoClicarEmInvestir(parent, sys, formID, params) {
  var rule = new InvestidorAoClicarEmInvestir(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralAlterarLayoutSweetAlert(parent, sys, formID) {
  this.ruleName = 'Geral - Alterar Layout Sweet Alert';
  this.functionName = 'GeralAlterarLayoutSweetAlert';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralAlterarLayoutSweetAlert.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Alterar Layout Sweet Alert"
 * @author Master Albuquerque Santos
 * @since 27/01/2023 17:11:03
 */
GeralAlterarLayoutSweetAlert.prototype.run = function() {
  document.ruleNameForException = 'Geral - Alterar Layout Sweet Alert';
  this.context = new Array();


  /**
   * Alterar label do botão Ok
   */
  ebfHtmlInnerHtml.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(2)), 'SIM');

  /**
   * Alterar classe do botão Ok
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(2)), 'class', 'swal2-deny swal2-styled');

  /**
   * Alterar label do botão Cancelar
   */
  ebfHtmlInnerHtml.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(4)), 'NÃO');

  /**
   * Alterar classe do botão Cancelar
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(4)), 'class', 'swal2-confirm swal2-styled');

  /**
   * Fim
   */
  return null;

}

function runGeralAlterarLayoutSweetAlert(parent, sys, formID, params) {
  var rule = new GeralAlterarLayoutSweetAlert(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorDisponiveisAoNavegar(parent, sys, formID) {
  this.ruleName = 'Tomador - Disponiveis - Ao navegar';
  this.functionName = 'TomadorDisponiveisAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorDisponiveisAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Disponiveis - Ao navegar"
 * @param cotasrecebidas equivale à variável this.context['cotasrecebidas']<br/>
 * @author Master Albuquerque Santos
 * @since 27/02/2023 20:29:40
 */
TomadorDisponiveisAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Disponiveis - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cotasrecebidas'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * Sem cotas?
   */
  if (parseBoolean((isEqual.call(this, toLong.call(this, this.context['cotasrecebidas']), toLong.call(this, parseInt(0))) || isNullOrEmpty.call(this, this.context['cotasrecebidas'])))) {
      
    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Mostrar componente
     */
    ebfFormSetVisible.call(this, 'MakerButton1', true);

    /**
     * Fim
     */
    return null;

  }

}

function runTomadorDisponiveisAoNavegar(parent, sys, formID, params) {
  var rule = new TomadorDisponiveisAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorQuestionarioAoModificarResposta(parent, sys, formID) {
  this.ruleName = 'Tomador - Questionário - Ao modificar resposta';
  this.functionName = 'TomadorQuestionarioAoModificarResposta';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorQuestionarioAoModificarResposta.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Questionário - Ao modificar resposta"
 * @param id equivale à variável this.context['id']<br/>
 * @author Master Albuquerque Santos
 * @since 12/12/2022 19:56:00
 */
TomadorQuestionarioAoModificarResposta.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Questionário - Ao modificar resposta';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['id'] = this.checkType(arguments[0], 'Inteiro');

  // Variáveis
  this.context['valor'] = '';

  this.context['idQuestionario'] = '';


  /**
   * Obtem resposta
   */
  this.context['valor'] = ebfFormGetComponentValue.call(this, ebfGetGUIDActualForm.call(this), ebfConcat.call(this, 'lista', this.context['id']));

  /**
   * Obtem idQuestionario
   */
  this.context['idQuestionario'] = ebfFormGetComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'questionario');

  /**
   * Tomador - Questionário - Ao modificar resposta - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Ao modificar resposta - Servidor', [this.context['id'], this.context['valor'], this.context['idQuestionario']]);

  /**
   * Fim
   */
  return null;

}

function runTomadorQuestionarioAoModificarResposta(parent, sys, formID, params) {
  var rule = new TomadorQuestionarioAoModificarResposta(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorAceitarEmprestimo(parent, sys, formID) {
  this.ruleName = 'Tomador - Aceitar Emprestimo';
  this.functionName = 'TomadorAceitarEmprestimo';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorAceitarEmprestimo.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Aceitar Emprestimo"
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 18:11:55
 */
TomadorAceitarEmprestimo.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Aceitar Emprestimo';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idTransacao'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['retornoValor'] = 0;

  this.context['texto'] = '';


  /**
   * Tomador - Aceitar Emprestimo - Verifica Valor
   */
  this.context['retornoValor'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Verifica Valor', [this.context['idTransacao']]);

  /**
   * Retorno = 1?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoValor']), toLong.call(this, parseInt(1))))) {
      
    /**
     * Tomador - Aceitar Emprestimo - Verifica Valor - Texto
     */
    this.context['texto'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Verifica Valor - Texto', [this.context['idTransacao'], null, null]);

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', ebfConcat.call(this, 'O valor das cotas é menor do que o valor solicitado! Valor solicitado:', ebfNewLineWithEscape.call(this, parseInt(2)), this.context['texto'], ebfNewLineWithEscape.call(this, parseInt(2)), ' Deseja aceitar o empréstimo com o valor obtido?'), 'Tomador - Aceitar Emprestimo - Intermediário', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['retornoValor'], this.context['idPessoa']), null, null);

    /**
     * Geral - Alterar Layout Sweet Alert
     */
    new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

    /**
     * Alinhar texto à direita
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'swal2-content'), 'style', 'display: block;text-align: left;\n');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', 'Confirma a solicitação de empréstimo?', 'Tomador - Aceitar Emprestimo - Intermediário', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['retornoValor'], this.context['idPessoa']), null, null);

    /**
     * Geral - Alterar Layout Sweet Alert
     */
    new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

    /**
     * Fim
     */
    return null;

  }

}

function runTomadorAceitarEmprestimo(parent, sys, formID, params) {
  var rule = new TomadorAceitarEmprestimo(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralMostraOcultaNomeSocial(parent, sys, formID) {
  this.ruleName = 'Geral - Mostra/Oculta nome social';
  this.functionName = 'GeralMostraOcultaNomeSocial';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralMostraOcultaNomeSocial.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Mostra/Oculta nome social"
 * @param nomeSocial equivale à variável this.context['nomeSocial']<br/>
 * @param listaNomeSocial equivale à variável this.context['listaNomeSocial']<br/>
 * @param listaNomeRegistro equivale à variável this.context['listaNomeRegistro']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 17:41:47
 */
GeralMostraOcultaNomeSocial.prototype.run = function() {
  document.ruleNameForException = 'Geral - Mostra/Oculta nome social';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeSocial'] = this.checkType(arguments[0], 'Letras');

  this.context['listaNomeSocial'] = this.checkType(arguments[1], 'Letras');

  this.context['listaNomeRegistro'] = this.checkType(arguments[2], 'Letras');


  /**
   * Nome social nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['nomeSocial']))) {
      
    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeSocial'], false);

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeRegistro'], true);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeRegistro'], false);

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeSocial'], true);

    /**
     * Fim
     */
    return null;

  }

}

function runGeralMostraOcultaNomeSocial(parent, sys, formID, params) {
  var rule = new GeralMostraOcultaNomeSocial(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroUsuarioAoNavegar(parent, sys, formID) {
  this.ruleName = 'Cadastro - Usuario - Ao navegar';
  this.functionName = 'CadastroUsuarioAoNavegar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroUsuarioAoNavegar.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Usuario - Ao navegar"
 * @param nomeSocial equivale à variável this.context['nomeSocial']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 17:08:02
 */
CadastroUsuarioAoNavegar.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Usuario - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeSocial'] = this.checkType(arguments[0], 'Letras');


  /**
   * Nome social nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['nomeSocial']))) {
      
    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nomeSocialTexto,labelSocial', false);

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nome1,labelNome1', true);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nome1,labelNome1', false);

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nomeSocialTexto,labelSocial', true);

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroUsuarioAoNavegar(parent, sys, formID, params) {
  var rule = new CadastroUsuarioAoNavegar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function CadastroValidacoesIniciais(parent, sys, formID) {
  this.ruleName = 'Cadastro - Validações Iniciais';
  this.functionName = 'CadastroValidacoesIniciais';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

CadastroValidacoesIniciais.prototype = new Rule;

/**
 * Esta função executa a regra "Cadastro - Validações Iniciais"
 * @param nome equivale à variável this.context['nome']<br/>
 * @param cpf equivale à variável this.context['cpf']<br/>
 * @param email equivale à variável this.context['email']<br/>
 * @param emailConfima equivale à variável this.context['emailConfima']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 18:08:21
 */
CadastroValidacoesIniciais.prototype.run = function() {
  document.ruleNameForException = 'Cadastro - Validações Iniciais';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nome'] = this.checkType(arguments[0], 'Letras');

  this.context['cpf'] = this.checkType(arguments[1], 'Letras');

  this.context['email'] = this.checkType(arguments[2], 'Letras');

  this.context['emailConfima'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['response'] = '';

  this.context['retorno'] = '';

  this.context['validacaoRecaptcha'] = false;


  /**
   * Obtem response
   */
  this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

  /**
   * Recaptcha - Obter url via post
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

  /**
   * Obtem retorno do captcha
   */
  this.context['validacaoRecaptcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

  /**
   * Validou?
   */
  if (parseBoolean(this.context['validacaoRecaptcha'])) {
      
    /**
     * Algum campo vazio?
     */
    if (parseBoolean((isNullOrEmpty.call(this, this.context['nome']) || isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['emailConfima'])))) {
        
      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Desabilita Campos
       */
      new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', false);

      /**
       * Cadastro - Cadastrar - Cliente
       */
      new CadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['cpf'], this.context['email'], this.context['emailConfima'], this.context['nome']);

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Captcha não validado!', null, null);

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * Fim
     */
    return null;

  }

}

function runCadastroValidacoesIniciais(parent, sys, formID, params) {
  var rule = new CadastroValidacoesIniciais(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorQuestionarioCriarLista(parent, sys, formID) {
  this.ruleName = 'Tomador - Questionário - Criar lista';
  this.functionName = 'TomadorQuestionarioCriarLista';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorQuestionarioCriarLista.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Questionário - Criar lista"
 * @param id equivale à variável this.context['id']<br/>
 * @param contador equivale à variável this.context['contador']<br/>
 * @param listaValores equivale à variável this.context['listaValores']<br/>
 * @param resposta equivale à variável this.context['resposta']<br/>
 * @param idQuestionario equivale à variável this.context['idQuestionario']<br/>
 * @author Master Albuquerque Santos
 * @since 12/12/2022 19:55:51
 */
TomadorQuestionarioCriarLista.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Questionário - Criar lista';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['id'] = this.checkType(arguments[0], 'Inteiro');

  this.context['contador'] = this.checkType(arguments[1], 'Inteiro');

  this.context['listaValores'] = this.checkType(arguments[2], 'Variante');

  this.context['resposta'] = this.checkType(arguments[3], 'Letras');

  this.context['idQuestionario'] = this.checkType(arguments[4], 'Inteiro');

  // Variáveis
  this.context['valor'] = '';


  /**
   * Cria lista
   */
  ebfComboBoxNew.call(this, 'Cadastro', parseInt(10), this.context['contador'], parseInt(150), parseInt(30), '', this.context['listaValores'], this.context['listaValores'], ebfConcat.call(this, 'lista', this.context['id']), null, null);

  /**
   * Anexa na div
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, ebfConcat.call(this, 'resp', this.context['id'])), ebfHtmlGetMakerElementById.call(this, ebfConcat.call(this, 'lista', this.context['id'])));

  /**
   * Associar fluxo
   */
  ebfComponentEventAssociate.call(this, ebfConcat.call(this, 'lista', this.context['id']), 'onchange', 'Tomador - Questionário - Ao modificar resposta', ebfListParamsCreate.call(this, this.context['id']));

  /**
   * Tomador - Questionário - Criar lista - Carregar valor atual
   */
  this.context['valor'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Criar lista - Carregar valor atual', [this.context['idQuestionario'], this.context['id']]);

  /**
   * Alterar valor do componente
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), ebfConcat.call(this, 'lista', this.context['id']), this.context['valor']);

  /**
   * Altera value
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, ebfConcat.call(this, 'lista', this.context['id']))), parseInt(1)), 'value', this.context['valor']);

  /**
   * Fim
   */
  return null;

}

function runTomadorQuestionarioCriarLista(parent, sys, formID, params) {
  var rule = new TomadorQuestionarioCriarLista(parent, sys, formID);
  rule.run.apply(rule, params);
}

function GeralChecarSePdf(parent, sys, formID) {
  this.ruleName = 'Geral - Checar se PDF';
  this.functionName = 'GeralChecarSePdf';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

GeralChecarSePdf.prototype = new Rule;

/**
 * Esta função executa a regra "Geral - Checar se PDF"
 * @param parametros equivale à variável this.context['parametros']<br/>
 * @author Master Albuquerque Santos
 * @since 08/03/2023 18:41:38
 */
GeralChecarSePdf.prototype.run = function() {
  document.ruleNameForException = 'Geral - Checar se PDF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametros'] = this.checkType(arguments[0], 'Variante');


  /**
   * PDF?
   */
  if (parseBoolean((isEqual.call(this, ebfGetElementFromList.call(this, this.context['parametros'], parseInt(3)), 'application/pdf') || isEqual.call(this, ebfGetElementFromList.call(this, this.context['parametros'], parseInt(3)), 'image/jpeg') || isEqual.call(this, ebfGetElementFromList.call(this, this.context['parametros'], parseInt(3)), 'image/png')))) {
      
    /**
     * Maior que 5 mega?
     */
    if (parseBoolean(isGreater.call(this, toLong.call(this, ebfGetElementFromList.call(this, this.context['parametros'], parseInt(2))), '5242880'))) {
        
      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Tamamho máximo do arquivo: 5MB', null, null);

      /**
       * Fim
       */
      return false;

    } else {

      /**
       * Fim
       */
      return true;

    }

  } else {

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Apenas arquivos PDF,JPG e PNG são permitidos!');

    /**
     * Fim
     */
    return false;

  }

}

function runGeralChecarSePdf(parent, sys, formID, params) {
  var rule = new GeralChecarSePdf(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSimulacao(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Simulação';
  this.functionName = 'EmprestimoSimulacao';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSimulacao.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Simulação"
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param valor equivale à variável this.context['valor']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param diaVencimento equivale à variável this.context['diaVencimento']<br/>
 * @param valorMaximo equivale à variável this.context['valorMaximo']<br/>
 * @param spread equivale à variável this.context['spread']<br/>
 * @param cotas equivale à variável this.context['cotas']<br/>
 * @author Master Albuquerque Santos
 * @since 14/02/2023 15:27:44
 */
EmprestimoSimulacao.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Simulação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parcelas'] = this.checkType(arguments[0], 'Inteiro');

  this.context['valor'] = this.checkType(arguments[1], 'Fracionado');

  this.context['juros'] = this.checkType(arguments[2], 'Fracionado');

  this.context['diaVencimento'] = this.checkType(arguments[3], 'Inteiro');

  this.context['valorMaximo'] = this.checkType(arguments[4], 'Fracionado');

  this.context['spread'] = this.checkType(arguments[5], 'Fracionado');

  this.context['cotas'] = this.checkType(arguments[6], 'Inteiro');

  // Variáveis
  this.context['jurosDecimal'] = 0.0;

  this.context['montante'] = 0.0;


  /**
   * Algum vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['parcelas']) || isNullOrEmpty.call(this, this.context['valor']) || isNullOrEmpty.call(this, this.context['diaVencimento'])))) {
      
    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Preencha todos os valores!');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Valor > Valor Máximo?
     */
    if (parseBoolean(isGreater.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, this.context['valorMaximo'])))) {
        
      /**
       * Limpa valor
       */
      ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'O valor ultrapassa o permitido', null, null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Valor < Valor Mínimo?
       */
      if (parseBoolean(isMinor.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, parseFloat(300))))) {
          
        /**
         * Limpa valor
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'o valor mínimo é R$ 300,00', null, null);

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Obtem juros decimal
         */
        this.context['jurosDecimal'] = oprDivide.call(this, oprAdd.call(this, this.context['juros'], this.context['spread']), parseFloat(100));

        /**
         * Calcula montante
         */
        this.context['montante'] = oprMultiply.call(this, this.context['valor'], oprPow.call(this, oprAdd.call(this, parseFloat(1), this.context['jurosDecimal']), this.context['parcelas']));

        /**
         * Carrega o montante
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'montante', this.context['montante']);

        /**
         * Emprestimo - Timeline Parcelas
         */
        new EmprestimoTimelineParcelas(this, this.getSystem(), this.getForm()).run(null, this.context['montante'], this.context['parcelas'], this.context['diaVencimento'], this.context['cotas']);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runEmprestimoSimulacao(parent, sys, formID, params) {
  var rule = new EmprestimoSimulacao(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorAceitarEmprestimoIntermediario(parent, sys, formID) {
  this.ruleName = 'Tomador - Aceitar Emprestimo - Intermediário';
  this.functionName = 'TomadorAceitarEmprestimoIntermediario';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorAceitarEmprestimoIntermediario.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Aceitar Emprestimo - Intermediário"
 * @param logico equivale à variável this.context['logico']<br/>
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param retorno equivale à variável this.context['retorno']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @author Master Albuquerque Santos
 * @since 27/02/2023 20:29:02
 */
TomadorAceitarEmprestimoIntermediario.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Aceitar Emprestimo - Intermediário';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idTransacao'] = this.checkType(arguments[1], 'Inteiro');

  this.context['retorno'] = this.checkType(arguments[2], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[3], 'Inteiro');


  /**
   * Valor menor?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(1))))) {
      
    /**
     * Tomador - Aceitar Emprestimo - Servidor - Valor menor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Servidor - Valor menor', [this.context['idTransacao'], this.context['retorno'], this.context['idPessoa']]);

    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * Mostra coluna Pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    /**
     * Atualizar formulário
     */
    ebfRefreshFormModal.call(this);

    return this.FlowExpression2();

  } else {

    /**
     * Tomador - Aceitar Emprestimo - Servidor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Servidor', [this.context['idTransacao'], this.context['retorno'], this.context['idPessoa']]);

    return this.FlowExpression2();

  }

}

TomadorAceitarEmprestimoIntermediario.prototype.FlowExpression2 = function() {

    /**
     * Mostra botão pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    /**
     * Fim
     */
    return null;
  }


function runTomadorAceitarEmprestimoIntermediario(parent, sys, formID, params) {
  var rule = new TomadorAceitarEmprestimoIntermediario(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorAoEntrar(parent, sys, formID) {
  this.ruleName = 'Tomador - Ao entrar';
  this.functionName = 'TomadorAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Ao entrar"
 * @param listaColunas equivale à variável this.context['listaColunas']<br/>
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 28/01/2023 16:06:22
 */
TomadorAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaColunas'] = this.checkType(arguments[0], 'Letras');

  this.context['status'] = this.checkType(arguments[1], 'Inteiro');


  /**
   * Oculta botão pagar
   */
  ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', false);

  /**
   * Aguardando investidores?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(1))))) {
      
    return this.FlowSubRoutine1();

  } else {

    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * Mostra coluna Pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    return this.FlowSubRoutine1();

  }

}

TomadorAoEntrar.prototype.FlowSubRoutine1 = function() {

    /**
     * Geral - Ajustar Largura das Colunas da Grade
     */
    new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo');

    /**
     * Geral - Alterar centralização das colunas da grade
     */
    new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo', this.context['listaColunas'], 'C');

    /**
     * Font-google
     */
    ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

    /**
     * Tornar grade acessível
     */
    ComponenteEditavel.call(this, 'gradeEmprestimo');

    /**
     * Fim
     */
    return null;
  }


function runTomadorAoEntrar(parent, sys, formID, params) {
  var rule = new TomadorAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorQuestionarioFinalizar(parent, sys, formID) {
  this.ruleName = 'Tomador - Questionário - Finalizar';
  this.functionName = 'TomadorQuestionarioFinalizar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorQuestionarioFinalizar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Questionário - Finalizar"
 * @param idQuestionario equivale à variável this.context['idQuestionario']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @author Master Albuquerque Santos
 * @since 01/01/2023 16:51:03
 */
TomadorQuestionarioFinalizar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Questionário - Finalizar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idQuestionario'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['retorno'] = 0;


  /**
   * Tomador - Questionário - Finalizar - Servidor
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Finalizar - Servidor', [this.context['idQuestionario']]);

  /**
   * Retorno igual a 0?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
      
    /**
     * Define vsTomadorFinalizarQuestionario
     */
    ebfSetSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', toLong.call(this, parseInt(1)), false);

    /**
     * Abrir form no principal
     */
    ebfChannelExecuteRuleOnForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Abrir form filtrado na moldura', ebfListParamsCreate.call(this, 'cad_pessoa.id_pessoa', ebfConcat.call(this, this.context['idPessoa'], '@long'), '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}'), null, null);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Responda todas as perguntas!');

    /**
     * Fim
     */
    return null;

  }

}

function runTomadorQuestionarioFinalizar(parent, sys, formID, params) {
  var rule = new TomadorQuestionarioFinalizar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorQuestionarioAoEntrar(parent, sys, formID) {
  this.ruleName = 'Tomador - Questionário - Ao entrar';
  this.functionName = 'TomadorQuestionarioAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorQuestionarioAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Questionário - Ao entrar"
 * @param idquestionario equivale à variável this.context['idquestionario']<br/>
 * @author Master Albuquerque Santos
 * @since 01/01/2023 16:07:59
 */
TomadorQuestionarioAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Questionário - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idquestionario'] = this.checkType(arguments[0], 'Inteiro');

  // Variáveis
  this.context['html'] = '';


  /**
   * Oculta edição de gradeQuestionario
   */
  ebfGridSetVisibleMainButtons.call(this, 'gradeQuestionario', false, false);

  /**
   * gradeQuestionario em modo de edição
   */
  ebfGridEditableEdit.call(this, 'gradeQuestionario');

  /**
   * Cria moldura
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'molduraMain'), '  <div id=\"molduraQuestionario\" class=\"card shadow\">\n    <div class = \"row\" id=\"rowPrincipal\">\n       <div class=\"col-12\" id =\"colPrincipal\">\n       </div>\n    </div>\n    <div class =\"row p-1\" id=\"rowBotao\" style=\"height: 50px;\">\n       <div class=\"col-8 pb-2\" id=\"dummy\">\n       </div>\n       <div class=\"col-4 pb-2\" id=\"colBotao\">\n       </div>\n    </div>\n  </div>');

  /**
   * Tomador - Questionário - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Servidor', [toLong.call(this, this.context['idquestionario'])]);

  /**
   * Carrega colPrincipal
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'colPrincipal'), this.context['html']);

  /**
   * Tomador - Questionário - Respostas - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Respostas - Servidor', [this.context['idquestionario']]);

  /**
   * Anexa botão
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'colBotao'), ebfHtmlGetMakerElementById.call(this, 'botaoFinalizar'));

  /**
   * Importa CSS
   */
  ebfCSSImportContent.call(this, '[id^=lista],#botaoFinalizar{\n  top: unset !important;\n  width: 70% !important\n}\n\n#botaoFinalizar{\n left: unset !important;\n}', null);

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, 'Responda nosso questionário para solicitar um empréstimo', null, null);

  /**
   * Fim
   */
  return null;

}

function runTomadorQuestionarioAoEntrar(parent, sys, formID, params) {
  var rule = new TomadorQuestionarioAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaAoEntrar(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Ao entrar';
  this.functionName = 'TomadorPagarParcelaAoEntrar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaAoEntrar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Ao entrar"
 * @param status equivale à variável this.context['status']<br/>
 * @author Master Albuquerque Santos
 * @since 28/01/2023 18:12:59
 */
TomadorPagarParcelaAoEntrar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');


  /**
   * Parcela paga?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(2))))) {
      
    /**
     * Font-google
     */
    ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

    /**
     * Foca componente
     */
    ebfFormSetFocus.call(this, 'qtdCota');

    /**
     * Remove barra do form
     */
    EasyRemoveDivFormModal.call(this);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Fim
     */
    return null;

  }

}

function runTomadorPagarParcelaAoEntrar(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaAoEntrar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSimulacaoAoSairDoValor(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Simulação - Ao sair do valor';
  this.functionName = 'EmprestimoSimulacaoAoSairDoValor';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSimulacaoAoSairDoValor.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Simulação - Ao sair do valor"
 * @param valor equivale à variável this.context['valor']<br/>
 * @author Master Albuquerque Santos
 * @since 01/01/2023 17:32:44
 */
EmprestimoSimulacaoAoSairDoValor.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Simulação - Ao sair do valor';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['valor'] = this.checkType(arguments[0], 'Fracionado');

  // Variáveis
  this.context['resto'] = 0;

  this.context['múltiplo'] = 0.0;


  /**
   * Obtem resto
   */
  this.context['resto'] = ebfOprMod.call(this, this.context['valor'], parseFloat(50));

  /**
   * Existe resto?
   */
  if (parseBoolean(isGreater.call(this, toLong.call(this, this.context['resto']), toLong.call(this, parseInt(0))))) {
      
    /**
     * Obtem valor
     */
    this.context['múltiplo'] = oprMultiply.call(this, ebfMathCeil.call(this, toDouble.call(this, oprDivide.call(this, this.context['valor'], parseFloat(50)))), parseFloat(50));

    /**
     * Altera valor
     */
    ebfFormChangeComponentValueAndMask.call(this, ebfGetGUIDActualForm.call(this), 'valorSimulacao', this.context['múltiplo']);

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Fim
     */
    return null;

  }

}

function runEmprestimoSimulacaoAoSairDoValor(parent, sys, formID, params) {
  var rule = new EmprestimoSimulacaoAoSairDoValor(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSolitcitarConfirma(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Solitcitar - Confirma';
  this.functionName = 'EmprestimoSolitcitarConfirma';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSolitcitarConfirma.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Solitcitar - Confirma"
 * @param logico equivale à variável this.context['logico']<br/>
 * @param valor equivale à variável this.context['valor']<br/>
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param diaVencimento equivale à variável this.context['diaVencimento']<br/>
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param dtPrimeiroVenc equivale à variável this.context['dtPrimeiroVenc']<br/>
 * @param cotas equivale à variável this.context['cotas']<br/>
 * @author Master Albuquerque Santos
 * @since 03/01/2023 10:38:43
 */
EmprestimoSolitcitarConfirma.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Solitcitar - Confirma';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['valor'] = this.checkType(arguments[1], 'Fracionado');

  this.context['parcelas'] = this.checkType(arguments[2], 'Inteiro');

  this.context['juros'] = this.checkType(arguments[3], 'Fracionado');

  this.context['diaVencimento'] = this.checkType(arguments[4], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[5], 'Inteiro');

  this.context['dtPrimeiroVenc'] = this.checkType(arguments[6], 'Data');

  this.context['cotas'] = this.checkType(arguments[7], 'Inteiro');


  /**
   * Desabilita botões
   */
  new GeralHabilitaDesabilitaCamposComLista(this, this.getSystem(), this.getForm()).run('MakerButton3,contratar', false);

  /**
   * Emprestimo - Solitcitar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Solitcitar - Servidor', [this.context['idPessoa'], this.context['valor'], this.context['parcelas'], this.context['diaVencimento'], this.context['dtPrimeiroVenc'], this.context['cotas']]);

  /**
   * Importa css
   */
  ebfCSSImportContent.call(this, '.swal2-confirm{\n  display: none !important;\n}', null);

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Solicitação efetuada com sucesso! Aguarde, estamos lhe redirecionando...', null, null);

  /**
   * Agenda execução de fluxo
   */
  ebfRuleSchedulerNoParent.call(this, 'Geral - Executar fluxo no formulário', ebfListParamsCreate.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Abrir form filtrado na moldura', ebfListParamsCreate.call(this, 'fin_tomador.idpessoa', ebfConcat.call(this, this.context['idPessoa'], '@long'), '{189EA937-DF21-481B-AF0A-59A08B3BFD31}')), parseFloat(3000));

  /**
   * Fim
   */
  return null;

}

function runEmprestimoSolitcitarConfirma(parent, sys, formID, params) {
  var rule = new EmprestimoSolitcitarConfirma(parent, sys, formID);
  rule.run.apply(rule, params);
}

function EmprestimoSolitcitar(parent, sys, formID) {
  this.ruleName = 'Emprestimo - Solitcitar';
  this.functionName = 'EmprestimoSolitcitar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

EmprestimoSolitcitar.prototype = new Rule;

/**
 * Esta função executa a regra "Emprestimo - Solitcitar"
 * @param idPessoa equivale à variável this.context['idPessoa']<br/>
 * @param valor equivale à variável this.context['valor']<br/>
 * @param parcelas equivale à variável this.context['parcelas']<br/>
 * @param juros equivale à variável this.context['juros']<br/>
 * @param vencimento equivale à variável this.context['vencimento']<br/>
 * @param valorMaximo equivale à variável this.context['valorMaximo']<br/>
 * @param cotas equivale à variável this.context['cotas']<br/>
 * @author Master Albuquerque Santos
 * @since 03/01/2023 10:38:46
 */
EmprestimoSolitcitar.prototype.run = function() {
  document.ruleNameForException = 'Emprestimo - Solitcitar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['valor'] = this.checkType(arguments[1], 'Fracionado');

  this.context['parcelas'] = this.checkType(arguments[2], 'Inteiro');

  this.context['juros'] = this.checkType(arguments[3], 'Fracionado');

  this.context['vencimento'] = this.checkType(arguments[4], 'Inteiro');

  this.context['valorMaximo'] = this.checkType(arguments[5], 'Fracionado');

  this.context['cotas'] = this.checkType(arguments[6], 'Inteiro');


  /**
   * Algum vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['parcelas']) || isNullOrEmpty.call(this, this.context['valor']) || isNullOrEmpty.call(this, this.context['vencimento'])))) {
      
    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Preencha todos os valores!');

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * Valor > Valor Máximo?
     */
    if (parseBoolean(isGreater.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, this.context['valorMaximo'])))) {
        
      /**
       * Limpa valor
       */
      ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'O valor ultrapassa o permitido', null, null);

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * Valor < Valor Mínimo?
       */
      if (parseBoolean(isMinor.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, parseFloat(300))))) {
          
        /**
         * Limpa valor
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'o valor mínimo é R$ 300,00', null, null);

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * Desabilita botões
         */
        new GeralHabilitaDesabilitaCamposComLista(this, this.getSystem(), this.getForm()).run('MakerButton3,contratar', false);

        /**
         * Interação de Confirmação
         */
        ActNewInteractionConfirmMessage(null, 'Confirma a solicitação do empréstimo?', 'Emprestimo - Solitcitar - Confirma', ebfListParamsCreate.call(this, this.context['idPessoa'], this.context['valor'], this.context['parcelas'], this.context['juros'], this.context['vencimento'], this.context['idPessoa'], null, this.context['cotas']), '', null);

        /**
         * Fim
         */
        return null;

      }

    }

  }

}

function runEmprestimoSolitcitar(parent, sys, formID, params) {
  var rule = new EmprestimoSolitcitar(parent, sys, formID);
  rule.run.apply(rule, params);
}

function TomadorPagarParcelaAoClicar(parent, sys, formID) {
  this.ruleName = 'Tomador - Pagar Parcela - Ao clicar';
  this.functionName = 'TomadorPagarParcelaAoClicar';
  this.parent = parent;
  this.sys = sys;
  this.formID = formID;
  this.translations = new Map();
}

TomadorPagarParcelaAoClicar.prototype = new Rule;

/**
 * Esta função executa a regra "Tomador - Pagar Parcela - Ao clicar"
 * @param idLancamento equivale à variável this.context['idLancamento']<br/>
 * @param idTransacao equivale à variável this.context['idTransacao']<br/>
 * @param idTomador equivale à variável this.context['idTomador']<br/>
 * @author Master Albuquerque Santos
 * @since 28/01/2023 18:02:56
 */
TomadorPagarParcelaAoClicar.prototype.run = function() {
  document.ruleNameForException = 'Tomador - Pagar Parcela - Ao clicar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idLancamento'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idTransacao'] = this.checkType(arguments[1], 'Inteiro');

  this.context['idTomador'] = this.checkType(arguments[2], 'Inteiro');


  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma o pagamento?', 'Tomador - Pagar Parcela - Intermediario', ebfListParamsCreate.call(this, null, this.context['idLancamento'], this.context['idTransacao'], this.context['idTomador']), null, null);

  /**
   * Geral - Alterar Layout Sweet Alert
   */
  new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

  /**
   * Fim
   */
  return null;

}

function runTomadorPagarParcelaAoClicar(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaAoClicar(parent, sys, formID);
  rule.run.apply(rule, params);
}
