
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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Abrir Container de Atalhos';
  this.context = new Array();

  // Variáveis
  this.context['Container Atalhos'] = null;

  this.context['Tamanho da Lista'] = '';

  this.context['Botao Atalhos'] = null;

  this.context['backdrop'] = null;

  this.context['componente em foco'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Obter Container de Atalhos
   */
  debugManager.debug(this, "FlowExpression9", "Obter Container de Atalhos");

  /**
   * Obter Container de Atalhos
   */
  this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

  /**
   * DEBUG: Obter Tamanho da Lista de Atalhos
   */
  debugManager.debug(this, "FlowExpression10", "Obter Tamanho da Lista de Atalhos");

  /**
   * Obter Tamanho da Lista de Atalhos
   */
  this.context['Tamanho da Lista'] = ebfListLength.call(this, ebfHtmlChildNodes.call(this, this.context['Container Atalhos']));

  /**
   * DEBUG: Obter Botao Atalhos
   */
  debugManager.debug(this, "FlowExpression1", "Obter Botao Atalhos");

  /**
   * Obter Botao Atalhos
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * DEBUG: Maior que 0
   */
  debugManager.debug(this, "FlowDecision2", "Maior que 0");

  /**
   * Maior que 0
   */
  if (parseBoolean(isGreater.call(this, this.context['Tamanho da Lista'], parseInt(0)))) {
      
    /**
     * DEBUG: Definir atributo
     */
    debugManager.debug(this, "FlowExpression8", "Definir atributo");

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', 'collapse');

    /**
     * DEBUG: Obter Botao Atalho
     */
    debugManager.debug(this, "FlowExpression7", "Obter Botao Atalho");

    /**
     * Obter Botao Atalho
     */
    this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

    /**
     * DEBUG: Obter Backdrop
     */
    debugManager.debug(this, "FlowExpression3", "Obter Backdrop");

    /**
     * Obter Backdrop
     */
    this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

    /**
     * DEBUG: Lista de Atalho Aberta ?
     */
    debugManager.debug(this, "FlowDecision1", "Lista de Atalho Aberta ?");

    /**
     * Lista de Atalho Aberta ?
     */
    if (parseBoolean(isEqual.call(this, ebfHtmlGetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded'), 'false'))) {
        
      /**
       * DEBUG: Mostra  Backdrop
       */
      debugManager.debug(this, "FlowExpression5", "Mostra  Backdrop");

      /**
       * Mostra  Backdrop
       */
      ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut show');

      return this.FlowEnd1();

    } else {

      /**
       * DEBUG: Oculta  Backdrop
       */
      debugManager.debug(this, "FlowExpression6", "Oculta  Backdrop");

      /**
       * Oculta  Backdrop
       */
      ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

      return this.FlowEnd1();

    }

  } else {

    /**
     * DEBUG: Definir atributo
     */
    debugManager.debug(this, "FlowExpression2", "Definir atributo");

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', '');

    /**
     * DEBUG: Definir atributo
     */
    debugManager.debug(this, "FlowExpression4", "Definir atributo");

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage('Não há atalhos criados !', null, parseInt(2), 'DB');

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateAbrirContainerDeAtalhos.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Abrir Formulário Modo Gerente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Formulario'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Obter valor da Lista de Sistemas
   */
  debugManager.debug(this, "FlowExpression1", "Obter valor da Lista de Sistemas");

  /**
   * Obter valor da Lista de Sistemas
   */
  this.context['Formulario'] = ebfFormGetComponentValue.call(this, null, 'ListaSistemas');

  /**
   * DEBUG: Formulário Nulo Ou Vazio ?
   */
  debugManager.debug(this, "FlowDecision1", "Formulário Nulo Ou Vazio ?");

  /**
   * Formulário Nulo Ou Vazio ?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['Formulario']))) {
      
    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Selecione um formulário!', null, null);

    return this.FlowEnd1();

  } else {

    /**
     * DEBUG: Abrir Formulário
     */
    debugManager.debug(this, "FlowExpression3", "Abrir Formulário");

    /**
     * Abrir Formulário
     */
    ebfFormOpenForm.call(this, this.context['Formulario']);

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateAbrirFormularioModoGerente.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Adicionar Atalho ao FAB Container';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Atalho'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Elementos Texto'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: (remove a Classe position-absolute)
   */
  debugManager.debug(this, "FlowExpression3", "(remove a Classe position-absolute)");

  /**
   * (remove a Classe position-absolute)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Atalho'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'position-absolute'));

  /**
   * DEBUG: Anexar Atalhos ao Container FAB
   */
  debugManager.debug(this, "FlowExpression1", "Anexar Atalhos ao Container FAB");

  /**
   * Anexar Atalhos ao Container FAB
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'atalhosListaContainer'), this.context['Atalho']);

  /**
   * DEBUG: Obter elemento do texto do atalho
   */
  debugManager.debug(this, "FlowExpression13", "Obter elemento do texto do atalho");

  /**
   * Obter elemento do texto do atalho
   */
  this.context['Elementos Texto'] = ebfHtmlGetElementByClassName.call(this, 'menu-item-text', this.context['Atalho']);

  /**
   * DEBUG: Associar evento dblclick
   */
  debugManager.debug(this, "FlowExpression5", "Associar evento dblclick");

  /**
   * Associar evento dblclick
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondblclick', 'Template - Ao Clicar no Atalho', ebfListParamsCreate.call(this, null, null, (isNullOrEmpty.call(this, this.context['Elementos Texto']) ? this.context['Atalho'] : ebfGetElementFromList.call(this, this.context['Elementos Texto'], parseInt(1)))), false);

  /**
   * DEBUG: Associar evento keydown
   */
  debugManager.debug(this, "FlowExpression4", "Associar evento keydown");

  /**
   * Associar evento keydown
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'onkeydown', 'Template - Ao Pressionar uma Tecla', null, true);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: É FORM ?
   */
  debugManager.debug(this, "FlowDecision1", "É FORM ?");

  /**
   * É FORM ?
   */
  if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'form'))) {
      
    /**
     * DEBUG: Obter aba do menu
     */
    debugManager.debug(this, "FlowExpression11", "Obter aba do menu");

    /**
     * Obter aba do menu
     */
    this.context['Aba do Menu'] = ebfGetComponentProperty.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'MenuLateralCosmo', 'MenuAbas');

    /**
     * DEBUG: Aba foi definida?
     */
    debugManager.debug(this, "FlowDecision8", "Aba foi definida?");

    /**
     * Aba foi definida?
     */
    if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Aba do Menu'])))) {
        
      /**
       * DEBUG: Adicionar formulário na aba
       */
      debugManager.debug(this, "FlowExpression12", "Adicionar formulário na aba");

      /**
       * Adicionar formulário na aba
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run(this.context['Aba do Menu'], ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), (isNullOrEmpty.call(this, this.context['Elemento Nome Atalho']) ? ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)) : ebfHtmlGetInnerHtml.call(this, this.context['Elemento Nome Atalho'])));


      return this.FlowConnector3();

    } else {

      /**
       * DEBUG: Abre form
       */
      debugManager.debug(this, "FlowExpression4", "Abre form");

      /**
       * Abre form
       */
      ebfFormOpenForm.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)));

      return this.FlowConnector3();

    }

  } else {

    /**
     * DEBUG: É REPORT ?
     */
    debugManager.debug(this, "FlowDecision2", "É REPORT ?");

    /**
     * É REPORT ?
     */
    if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'report'))) {
        
      /**
       * DEBUG: Abre report
       */
      debugManager.debug(this, "FlowExpression3", "Abre report");

      /**
       * Abre report
       */
      ebfOpenReport.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), null, null, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(2)));

      return this.FlowConnector2();

    } else {

      /**
       * DEBUG: É ACTION ?
       */
      debugManager.debug(this, "FlowDecision5", "É ACTION ?");

      /**
       * É ACTION ?
       */
      if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'action'))) {
          
        /**
         * DEBUG: Executa ação
         */
        debugManager.debug(this, "FlowExpression1", "Executa ação");

        /**
         * Executa ação
         */
        ebfActionExecute.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)));

        return this.FlowConnector1();

      } else {

        /**
         * DEBUG: É FLOW ?
         */
        debugManager.debug(this, "FlowDecision3", "É FLOW ?");

        /**
         * É FLOW ?
         */
        if (parseBoolean(isEqual.call(this, this.context['Tipo de Evento'], 'flow'))) {
            
          /**
           * DEBUG: Quebrar Texto por ;
           */
          debugManager.debug(this, "FlowExpression5", "Quebrar Texto por ;");

          /**
           * Quebrar Texto por ;
           */
          this.context['Parametros'] = ebfSplit.call(this, ebfGetElementFromList.call(this, this.context['Parametros'], parseInt(1)), ';');

          /**
           * DEBUG: Executa fluxo
           */
          debugManager.debug(this, "FlowExpression2", "Executa fluxo");

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

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateAoClicarNoAtalho.prototype.FlowSubRoutine1 = function() {

    /**
     * DEBUG: Template - Oculta Backdrop de Atalhos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Oculta Backdrop de Atalhos");

    /**
     * Template - Oculta Backdrop de Atalhos
     */
    new TemplateOcultaBackdropDeAtalhos(this, this.getSystem(), this.getForm()).run();

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Ao Clicar no Item do Menu (Ação)';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['evento'] = this.checkType(arguments[0], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Elemento é o botão?
   */
  debugManager.debug(this, "FlowDecision1", "Elemento é o botão?");

  /**
   * Elemento é o botão?
   */
  if (parseBoolean((isEqual.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['evento'], 'target'), 'data-target'), '#icons-content') || isEqual.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetParent.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['evento'], 'target')), 'data-target'), '#icons-content')))) {
      
    return this.FlowEnd1();

  } else {

    /**
     * DEBUG: (remove a Classe show do Menu Ações)
     */
    debugManager.debug(this, "FlowExpression3", "(remove a Classe show do Menu Ações)");

    /**
     * (remove a Classe show do Menu Ações)
     */
    ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'icons-content'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

    /**
     * DEBUG: Definir atributo
     */
    debugManager.debug(this, "FlowExpression4", "Definir atributo");

    /**
     * Definir atributo
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1)), 'aria-expanded', 'false');

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateAoClicarNoItemDoMenuAcao.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Ao Pressionar uma Tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  this.context['Elemento'] = this.checkType(arguments[1], 'Variante');

  // Variáveis
  this.context['backdrop'] = null;

  this.context['Botao Atalhos'] = null;

  this.context['Container Atalhos'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Testa se evento foi chamando pela tecla DEL
   */
  debugManager.debug(this, "FlowDecision1", "Testa se evento foi chamando pela tecla DEL");

  /**
   * Testa se evento foi chamando pela tecla DEL
   */
  if (parseBoolean((isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '46') || isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '46')))) {
      
    /**
     * DEBUG: Obter Botao Atalho
     */
    debugManager.debug(this, "FlowExpression7", "Obter Botao Atalho");

    /**
     * Obter Botao Atalho
     */
    this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

    /**
     * DEBUG: Obter Backdrop
     */
    debugManager.debug(this, "FlowExpression6", "Obter Backdrop");

    /**
     * Obter Backdrop
     */
    this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

    /**
     * DEBUG: Oculta  Backdrop
     */
    debugManager.debug(this, "FlowExpression8", "Oculta  Backdrop");

    /**
     * Oculta  Backdrop
     */
    ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

    /**
     * DEBUG: Oculta Atalhos Container
     */
    debugManager.debug(this, "FlowExpression9", "Oculta Atalhos Container");

    /**
     * Oculta Atalhos Container
     */
    ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

    /**
     * DEBUG: Obter Container de Atalhos
     */
    debugManager.debug(this, "FlowExpression13", "Obter Container de Atalhos");

    /**
     * Obter Container de Atalhos
     */
    this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

    /**
     * DEBUG: (remove a Classe show do Atalhos Container)
     */
    debugManager.debug(this, "FlowExpression10", "(remove a Classe show do Atalhos Container)");

    /**
     * (remove a Classe show do Atalhos Container)
     */
    ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Container Atalhos'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

    /**
     * DEBUG: Elemento do atalho é nulo?
     */
    debugManager.debug(this, "FlowDecision3", "Elemento do atalho é nulo?");

    /**
     * Elemento do atalho é nulo?
     */
    if (parseBoolean(isNull.call(this, this.context['Elemento']))) {
        
      return this.FlowEnd1();

    } else {

      /**
       * DEBUG: Excluir atalho
       */
      debugManager.debug(this, "FlowExpression2", "Excluir atalho");

      /**
       * Excluir atalho
       */
      ebfSetRuleExecutionTime.call(this, 'Menu - Excluir Atalho', ebfListParamsCreate.call(this, this.context['Elemento']), parseInt(1));

      return this.FlowEnd1();

    }

  } else {

    /**
     * DEBUG: Testa se evento foi chamando pela tecla F2
     */
    debugManager.debug(this, "FlowDecision2", "Testa se evento foi chamando pela tecla F2");

    /**
     * Testa se evento foi chamando pela tecla F2
     */
    if (parseBoolean((isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '113') || isEqual.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'which'), '113')))) {
        
      /**
       * DEBUG: Elemento do atalho é nulo?
       */
      debugManager.debug(this, "FlowDecision4", "Elemento do atalho é nulo?");

      /**
       * Elemento do atalho é nulo?
       */
      if (parseBoolean(isNull.call(this, this.context['Elemento']))) {
          
        return this.FlowConnector5();

      } else {

        /**
         * DEBUG: Renomear atalho
         */
        debugManager.debug(this, "FlowExpression1", "Renomear atalho");

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

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateAoPressionarUmaTecla.prototype.FlowConnector1 = function() {

    return this.FlowEnd1();
  }

TemplateAoPressionarUmaTecla.prototype.FlowConnector5 = function() {

    return this.FlowConnector1();
  }

TemplateAoPressionarUmaTecla.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);

  this.context['Contador'] = parseInt(1);

  /**
   * DEBUG: Obtém objeto atalhos
   */
  debugManager.debug(this, "FlowExpression3", "Obtém objeto atalhos");

  /**
   * Obtém objeto atalhos
   */
  this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

  /**
   * DEBUG: Obtém chaves do objeto
   */
  debugManager.debug(this, "FlowExpression2", "Obtém chaves do objeto");

  /**
   * Obtém chaves do objeto
   */
  this.context['Chaves'] = ebfObjectKeys.call(this, this.context['Objeto Atalhos']);

  /**
   * DEBUG: Ainda existem chaves?
   */
  debugManager.debug(this, "FlowDecision1", "Ainda existem chaves?");

  /**
   * Ainda existem chaves?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Chaves'])))) {

    /**
     * DEBUG: Cria atalho
     */
    debugManager.debug(this, "FlowExpression1", "Cria atalho");

    /**
     * Cria atalho
     */
    this.context['Atalho'] = ebfHtmlCreateHtmlElement.call(this, 'a', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'id')), ebfListParamsCreate.call(this, 'draggable', 'true'), ebfListParamsCreate.call(this, 'href', '#'), ebfListParamsCreate.call(this, 'class', 'menu-shortcut d-flex flex-column align-items-center justify-content-center')), null);

    /**
     * DEBUG: Definir conteúdo
     */
    debugManager.debug(this, "FlowExpression8", "Definir conteúdo");

    /**
     * Definir conteúdo
     */
    ebfHtmlInnerHtml.call(this, this.context['Atalho'], ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'conteudo'));

    /**
     * DEBUG: Obtém Tipo de Evento
     */
    debugManager.debug(this, "FlowExpression4", "Obtém Tipo de Evento");

    /**
     * Obtém Tipo de Evento
     */
    this.context['Tipo de Evento'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'tipoEvento');

    /**
     * DEBUG: Definir posição
     */
    debugManager.debug(this, "FlowExpression9", "Definir posição");

    /**
     * Definir posição
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Atalho'], 'left', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'left'));

    /**
     * DEBUG: Definir posição
     */
    debugManager.debug(this, "FlowExpression10", "Definir posição");

    /**
     * Definir posição
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Atalho'], 'top', ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'top'));

    /**
     * DEBUG: Associar evento mousedown
     */
    debugManager.debug(this, "FlowExpression20", "Associar evento mousedown");

    /**
     * Associar evento mousedown
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'mousedown', 'Template - Definir Posição do Cursor', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * DEBUG: Inserir evento drag
     */
    debugManager.debug(this, "FlowExpression12", "Inserir evento drag");

    /**
     * Inserir evento drag
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondrag', 'Template - Permitir movimentação', null, true);

    /**
     * DEBUG: Associar evento para mover atalho
     */
    debugManager.debug(this, "FlowExpression11", "Associar evento para mover atalho");

    /**
     * Associar evento para mover atalho
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'dragend', 'Template - Mover Atalho', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * DEBUG: Associar evento keypress
     */
    debugManager.debug(this, "FlowExpression16", "Associar evento keypress");

    /**
     * Associar evento keypress
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'keydown', 'Template - Ao Pressionar uma Tecla', ebfListParamsCreate.call(this, this.context['Atalho']), true);

    /**
     * DEBUG: Anexar atalho no formulário
     */
    debugManager.debug(this, "FlowExpression7", "Anexar atalho no formulário");

    /**
     * Anexar atalho no formulário
     */
    ebfHtmlAppendElementAt.call(this, ebfGetTabDivByName.call(this, ebfTranslate.call(this, ebfGetSelectTabStringName.call(this), null)), this.context['Atalho']);

    /**
     * DEBUG: Template - Adicionar Atalho ao FAB Container
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Adicionar Atalho ao FAB Container");

    /**
     * Template - Adicionar Atalho ao FAB Container
     */
    new TemplateAdicionarAtalhoAoFabContainer(this, this.getSystem(), this.getForm()).run(this.context['Atalho']);

    /**
     * DEBUG: Obter elemento do texto do atalho
     */
    debugManager.debug(this, "FlowExpression13", "Obter elemento do texto do atalho");

    /**
     * Obter elemento do texto do atalho
     */
    this.context['Elementos Texto'] = ebfHtmlGetElementByClassName.call(this, 'menu-item-text', this.context['Atalho']);

    /**
     * DEBUG: Associar evento dblclick
     */
    debugManager.debug(this, "FlowExpression5", "Associar evento dblclick");

    /**
     * Associar evento dblclick
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['Atalho'], 'ondblclick', 'Template - Ao Clicar no Atalho', ebfListParamsCreate.call(this, this.context['Tipo de Evento'], ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfGetElementFromList.call(this, this.context['Chaves'], this.context['Contador'])), 'parametros'), (isNullOrEmpty.call(this, this.context['Elementos Texto']) ? this.context['Atalho'] : ebfGetElementFromList.call(this, this.context['Elementos Texto'], parseInt(1)))), false);

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression6", "Incrementa contador");

    /**
     * Incrementa contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));

  /**
   * DEBUG: Ainda existem chaves?
   */
  debugManager.debug(this, "FlowDecision1", "Ainda existem chaves?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return ebfHtmlGetInnerHtml.call(this, this.context['Atalho']);

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Definir Atributos do Container Atalhos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Container Atalhos'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['Botao Atalhos'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Obter Botao Atalhos
   */
  debugManager.debug(this, "FlowExpression3", "Obter Botao Atalhos");

  /**
   * Obter Botao Atalhos
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * DEBUG: Definir atributo
   */
  debugManager.debug(this, "FlowExpression8", "Definir atributo");

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-toggle', 'collapse');

  /**
   * DEBUG: Definir atributo
   */
  debugManager.debug(this, "FlowExpression2", "Definir atributo");

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'data-target', ebfConcat.call(this, '#', ebfTrim.call(this, this.context['Container Atalhos'])));

  /**
   * DEBUG: Definir atributo
   */
  debugManager.debug(this, "FlowExpression1", "Definir atributo");

  /**
   * Definir atributo
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Definir Posição do Cursor';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  this.context['Elemento'] = this.checkType(arguments[1], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Define posição X
   */
  debugManager.debug(this, "FlowExpression1", "Define posição X");

  /**
   * Define posição X
   */
  ebfSetLocalVariable.call(this, 'menu_posicaoX', oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), toLong.call(this, ebfHtmlCssGetStyle.call(this, this.context['Elemento'], 'left'))));

  /**
   * DEBUG: Define posição Y
   */
  debugManager.debug(this, "FlowExpression2", "Define posição Y");

  /**
   * Define posição Y
   */
  ebfSetLocalVariable.call(this, 'menu_posicaoY', oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), toLong.call(this, ebfHtmlCssGetStyle.call(this, this.context['Elemento'], 'top'))));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Excluir Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Elemento'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Objeto Atalhos'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Remove elemento
   */
  debugManager.debug(this, "FlowExpression1", "Remove elemento");

  /**
   * Remove elemento
   */
  ebfHtmlRemoveChild.call(this, ebfHtmlGetParent.call(this, this.context['Elemento']), this.context['Elemento']);

  /**
   * DEBUG: Obtér JSON
   */
  debugManager.debug(this, "FlowExpression4", "Obtér JSON");

  /**
   * Obtér JSON
   */
  this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

  /**
   * DEBUG: Exclui objeto
   */
  debugManager.debug(this, "FlowExpression3", "Exclui objeto");

  /**
   * Exclui objeto
   */
  ebfDeleteObject.call(this, this.context['Objeto Atalhos'], ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id'));

  /**
   * DEBUG: Template - Atualizar Atalhos
   */
  debugManager.debug(this, "FlowSubRoutine1", "Template - Atualizar Atalhos");

  /**
   * Template - Atualizar Atalhos
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(1))]);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Formulário de Login - Obter Dados e Efetuar Login';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Login'] = this.checkType(arguments[0], 'Letras');

  this.context['Senha'] = this.checkType(arguments[1], 'Letras');

  this.context['Digital'] = this.checkType(arguments[2], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Autentica o usuário
   */
  debugManager.debug(this, "FlowExpression1", "Autentica o usuário");

  /**
   * Autentica o usuário
   */
  ebfAuthUser.call(this, this.context['Login'], this.context['Senha'], null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Formulário Login - Ao Entrar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Dar Foco no Input Usuário
   */
  debugManager.debug(this, "FlowExpression1", "Dar Foco no Input Usuário");

  /**
   * Dar Foco no Input Usuário
   */
  ebfFormSetFocus.call(this, 'Login');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obter o GUID do Formulario
   */
  debugManager.debug(this, "FlowExpression2", "Obter o GUID do Formulario");

  /**
   * Obter o GUID do Formulario
   */
  this.context['Formulario'] = ebfGetGUIDActualForm.call(this);

  /**
   * DEBUG: Tecla pressionada é ENTER?
   */
  debugManager.debug(this, "FlowDecision1", "Tecla pressionada é ENTER?");

  /**
   * Tecla pressionada é ENTER?
   */
  if (parseBoolean((isEqual.call(this, this.context['Código da Tecla'], parseInt(13)) || isEqual.call(this, this.context['Caractere da Tecla'], 'Enter')))) {
      
    /**
     * DEBUG: Template - Formulário de Login - Obter Dados e Efetuar Login
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Formulário de Login - Obter Dados e Efetuar Login");

    /**
     * Template - Formulário de Login - Obter Dados e Efetuar Login
     */
    new TemplateFormularioDeLoginObterDadosEEfetuarLogin(this, this.getSystem(), this.getForm()).run(ebfFormGetComponentValue.call(this, this.context['Formulario'], this.context['Login']), ebfFormGetComponentValue.call(this, this.context['Formulario'], this.context['Senha']), null);

    return this.FlowEnd1();

  } else {

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateFormularioLoginAoLogar.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Formulário Principal - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['ListaRetorno'] = null;

  this.context['backdrop'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Template - Formulário Principal - Ao Entrar (Servidor)
   */
  debugManager.debug(this, "FlowSubRoutine1", "Template - Formulário Principal - Ao Entrar (Servidor)");

  /**
   * Template - Formulário Principal - Ao Entrar (Servidor)
   */
  this.context['ListaRetorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Formulário Principal - Ao Entrar (Servidor)');

  /**
   * DEBUG: Template - Definir Atributos do Container Atalhos
   */
  debugManager.debug(this, "FlowSubRoutine19", "Template - Definir Atributos do Container Atalhos");

  /**
   * Template - Definir Atributos do Container Atalhos
   */
  new TemplateDefinirAtributosDoContainerAtalhos(this, this.getSystem(), this.getForm()).run('atalhosListaContainer');

  /**
   * DEBUG: É publicado?
   */
  debugManager.debug(this, "FlowDecision2", "É publicado?");

  /**
   * É publicado?
   */
  if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(4))))) {
      
    /**
     * DEBUG: Menu - Atualizar
     */
    debugManager.debug(this, "FlowExpression2", "Menu - Atualizar");

    /**
     * Menu - Atualizar
     */
    new MenuAtualizar(this, this.getSystem(), this.getForm()).run('icons', '<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<ROOT THEME=\"light\">\n<MENU CODE=\"1887671\">\n	<DESCRIPTION>Grupos</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-users</ICON>\n<ACTION>Grupos</ACTION>\n</MENU>\n<MENU CODE=\"1699528\">\n	<DESCRIPTION>Usuários</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-address-card</ICON>\n<ACTION>Usuarios</ACTION>\n</MENU>\n<MENU CODE=\"1692053\">\n	<DESCRIPTION>LOG</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-file-alt</ICON>\n<ACTION>LOG</ACTION>\n</MENU>\n<MENU CODE=\"41518\">\n	<DESCRIPTION>Script SQL</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-database</ICON>\n<ACTION>ExecutarScriptSQL</ACTION>\n</MENU>\n<MENU CODE=\"326049\">\n	<DESCRIPTION>Recarregar Sistema</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-sync</ICON>\n<ACTION>RecarregarSistema</ACTION>\n</MENU>\n<MENU CODE=\"336203\">\n	<DESCRIPTION>Modo Normal</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-user</ICON>\n<ACTION>ModoNormal</ACTION>\n</MENU>\n<MENU CODE=\"527166\">\n	<DESCRIPTION>Modo Gerente</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-user-tie</ICON>\n<ACTION>ModoGerente</ACTION>\n</MENU>\n<MENU CODE=\"812059\">\n	<DESCRIPTION>Configurar Conexões</DESCRIPTION>\n	<ICON COLOR=\"N\" SIZE=\"N\">fas fa-bezier-curve</ICON>\n<ACTION>ConfigurarConexoesAdicionais</ACTION>\n</MENU>\n\n</ROOT>');


    return this.FlowExpression10();

  } else {

    return this.FlowExpression10();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateFormularioPrincipalAoEntrar.prototype.FlowExpression10 = function() {

    /**
     * DEBUG: Altera o Nome do Usuário
     */
    debugManager.debug(this, "FlowExpression10", "Altera o Nome do Usuário");

    /**
     * Altera o Nome do Usuário
     */
    ebfFormChangeComponentValue.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

    /**
     * DEBUG: Template - Menu Collapse Opções do Usuário
     */
    debugManager.debug(this, "FlowSubRoutine18", "Template - Menu Collapse Opções do Usuário");

    /**
     * Template - Menu Collapse Opções do Usuário
     */
    new TemplateMenuCollapseOpcoesDoUsuario(this, this.getSystem(), this.getForm()).run();

    /**
     * DEBUG: Template - Carregar Atalhos no Formulário
     */
    debugManager.debug(this, "FlowSubRoutine17", "Template - Carregar Atalhos no Formulário");

    /**
     * Template - Carregar Atalhos no Formulário
     */
    new TemplateCarregarAtalhosNoFormulario(this, this.getSystem(), this.getForm()).run();

    /**
     * DEBUG: Criar backdrop
     */
    debugManager.debug(this, "FlowExpression3", "Criar backdrop");

    /**
     * Criar backdrop
     */
    this.context['backdrop'] = ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'backdrop-shortcut'), ebfListParamsCreate.call(this, 'class', 'backdrop-shortcut')), ebfHtmlGetBodyElement.call(this));

    /**
     * DEBUG: Associar evento onclick ao Backdrop
     */
    debugManager.debug(this, "FlowExpression1", "Associar evento onclick ao Backdrop");

    /**
     * Associar evento onclick ao Backdrop
     */
    ebfHtmlAttachFlowEvent.call(this, this.context['backdrop'], 'onclick', 'Template - Oculta Backdrop de Atalhos', null, null);

    /**
     * DEBUG: Obter Menu Collapse
     */
    debugManager.debug(this, "FlowExpression7", "Obter Menu Collapse");

    /**
     * Obter Menu Collapse
     */
    ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1));

    /**
     * DEBUG: Associar evento onclick ao Formulario
     */
    debugManager.debug(this, "FlowExpression5", "Associar evento onclick ao Formulario");

    /**
     * Associar evento onclick ao Formulario
     */
    ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetBodyElement.call(this), 'onclick', 'Template - Ao Clicar no Item do Menu (Ação)', null, true);

    /**
     * DEBUG: Adm Geral ou do Sistema ?
     */
    debugManager.debug(this, "FlowDecision1", "Adm Geral ou do Sistema ?");

    /**
     * Adm Geral ou do Sistema ?
     */
    if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(3))))) {
        
      return this.FlowEnd2();

    } else {

      /**
       * DEBUG: Oculta Menu Adm
       */
      debugManager.debug(this, "FlowSubRoutine3", "Oculta Menu Adm");

      /**
       * Oculta Menu Adm
       */
      new TemplateOcultaOuExibeElemento(this, this.getSystem(), this.getForm()).run('false', null, ebfListParamsCreate.call(this, 'icons', 'IconButtonContainer'));

      return this.FlowEnd2();

    }
  }

TemplateFormularioPrincipalAoEntrar.prototype.FlowEnd2 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Menu Collapse Opções do Usuário';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Menu Collapse (remove classe navbar-expand-sm)
   */
  debugManager.debug(this, "FlowExpression3", "Menu Collapse (remove classe navbar-expand-sm)");

  /**
   * Menu Collapse (remove classe navbar-expand-sm)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'iconsPrincipal'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'navbar-expand-sm'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);

  this.context['Subtração X'] = parseInt(0);
  this.context['Afastamento X Chrome'] = parseInt(0);

  /**
   * DEBUG: Obter Diferença X
   */
  debugManager.debug(this, "FlowExpression9", "Obter Diferença X");

  /**
   * Obter Diferença X
   */
  this.context['Diferença X'] = ebfGetLocalVariable.call(this, 'menu_posicaoX');

  /**
   * DEBUG: Obter Diferença Y
   */
  debugManager.debug(this, "FlowExpression7", "Obter Diferença Y");

  /**
   * Obter Diferença Y
   */
  this.context['Diferença Y'] = ebfGetLocalVariable.call(this, 'menu_posicaoY');

  /**
   * DEBUG: É FireFox?
   */
  debugManager.debug(this, "FlowDecision4", "É FireFox?");

  /**
   * É FireFox?
   */
  if (parseBoolean(toBoolean.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'isFirefox')))) {
      
    /**
     * DEBUG: Define constante Y
     */
    debugManager.debug(this, "FlowExpression13", "Define constante Y");

    /**
     * Define constante Y
     */
    this.context['Constante Y do Navegador'] = parseInt(0);

    return this.FlowDecision1();

  } else {

    /**
     * DEBUG: É Chrome?
     */
    debugManager.debug(this, "FlowDecision3", "É Chrome?");

    /**
     * É Chrome?
     */
    if (parseBoolean(toBoolean.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'isChrome')))) {
        
      /**
       * DEBUG: Define constante Y
       */
      debugManager.debug(this, "FlowExpression10", "Define constante Y");

      /**
       * Define constante Y
       */
      this.context['Constante Y do Navegador'] = parseInt(0);

      return this.FlowExpression11();

    } else {

      /**
       * DEBUG: Define constante Y
       */
      debugManager.debug(this, "FlowExpression12", "Define constante Y");

      /**
       * Define constante Y
       */
      this.context['Constante Y do Navegador'] = parseInt(0);

      return this.FlowExpression11();

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateMoverAtalho.prototype.FlowExpression11 = function() {

    /**
     * DEBUG: Compensa afastamento para Chrome e IE
     */
    debugManager.debug(this, "FlowExpression11", "Compensa afastamento para Chrome e IE");

    /**
     * Compensa afastamento para Chrome e IE
     */
    this.context['Afastamento X Chrome'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screen'), 'width');

    return this.FlowDecision1();
  }

TemplateMoverAtalho.prototype.FlowDecision1 = function() {

    /**
     * DEBUG: Testa se atalho foi criado no segundo monitor
     */
    debugManager.debug(this, "FlowDecision1", "Testa se atalho foi criado no segundo monitor");

    /**
     * Testa se atalho foi criado no segundo monitor
     */
    if (parseBoolean(isGreater.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, ebfGetActualForm.call(this), 'screen'), 'width')))) {
        
      /**
       * DEBUG: Subtrai afastamento para Chrome e IE
       */
      debugManager.debug(this, "FlowExpression14", "Subtrai afastamento para Chrome e IE");

      /**
       * Subtrai afastamento para Chrome e IE
       */
      this.context['Diferença X'] = oprSubtract.call(this, this.context['Diferença X'], this.context['Afastamento X Chrome']);

      /**
       * DEBUG: Define left do navegador
       */
      debugManager.debug(this, "FlowExpression5", "Define left do navegador");

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
     * DEBUG: Define CSS
     */
    debugManager.debug(this, "FlowExpression15", "Define CSS");

    /**
     * Define CSS
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Elemento'], 'left', ebfConcat.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), this.context['Subtração X'], this.context['Diferença X']), 'px'));

    /**
     * DEBUG: Define CSS
     */
    debugManager.debug(this, "FlowExpression8", "Define CSS");

    /**
     * Define CSS
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Elemento'], 'top', ebfConcat.call(this, oprAdd.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), this.context['Diferença Y']), this.context['Constante Y do Navegador']), 'px'));

    /**
     * DEBUG: Obtér JSON
     */
    debugManager.debug(this, "FlowExpression3", "Obtér JSON");

    /**
     * Obtér JSON
     */
    this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

    /**
     * DEBUG: Alterar JSON
     */
    debugManager.debug(this, "FlowExpression2", "Alterar JSON");

    /**
     * Alterar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], toString.call(this, ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id'))), 'left', ebfConcat.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenX'), this.context['Subtração X'], parseInt(-1), this.context['Diferença X']), 'px'));

    /**
     * DEBUG: Alterar JSON
     */
    debugManager.debug(this, "FlowExpression4", "Alterar JSON");

    /**
     * Alterar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id')), 'top', ebfConcat.call(this, oprAdd.call(this, oprSubtract.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'screenY'), this.context['Diferença Y']), this.context['Constante Y do Navegador']), 'px'));

    /**
     * DEBUG: Template - Atualizar Atalhos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Atualizar Atalhos");

    /**
     * Template - Atualizar Atalhos
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(2))]);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Oculta Backdrop de Atalhos';
  this.context = new Array();

  // Variáveis
  this.context['backdrop'] = null;

  this.context['Botao Atalhos'] = null;

  this.context['Container Atalhos'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Obter Botao Atalho
   */
  debugManager.debug(this, "FlowExpression7", "Obter Botao Atalho");

  /**
   * Obter Botao Atalho
   */
  this.context['Botao Atalhos'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'button', ebfHtmlGetMakerElementById.call(this, 'atalhosFAB')), parseInt(1));

  /**
   * DEBUG: Obter Backdrop
   */
  debugManager.debug(this, "FlowExpression6", "Obter Backdrop");

  /**
   * Obter Backdrop
   */
  this.context['backdrop'] = ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'backdrop-shortcut', ebfHtmlGetBodyElement.call(this)), parseInt(1));

  /**
   * DEBUG: Oculta  Backdrop
   */
  debugManager.debug(this, "FlowExpression8", "Oculta  Backdrop");

  /**
   * Oculta  Backdrop
   */
  ebfHtmlSetAttribute.call(this, this.context['backdrop'], 'class', 'backdrop-shortcut');

  /**
   * DEBUG: Oculta Atalhos Container
   */
  debugManager.debug(this, "FlowExpression9", "Oculta Atalhos Container");

  /**
   * Oculta Atalhos Container
   */
  ebfHtmlSetAttribute.call(this, this.context['Botao Atalhos'], 'aria-expanded', 'false');

  /**
   * DEBUG: Obter Container de Atalhos
   */
  debugManager.debug(this, "FlowExpression13", "Obter Container de Atalhos");

  /**
   * Obter Container de Atalhos
   */
  this.context['Container Atalhos'] = ebfHtmlGetElementById.call(this, 'atalhosListaContainer');

  /**
   * DEBUG: (remove a Classe show do Atalhos Container)
   */
  debugManager.debug(this, "FlowExpression10", "(remove a Classe show do Atalhos Container)");

  /**
   * (remove a Classe show do Atalhos Container)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Container Atalhos'], 'classList'), 'remove', ebfListParamsCreate.call(this, 'show'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem largura original
   */
  debugManager.debug(this, "FlowExpression26", "Obtem largura original");

  /**
   * Obtem largura original
   */
  this.context['larguraOriginal'] = ebfFormGetWidth.call(this, this.context['grade']);

  /**
   * DEBUG: Obter lista de colunas
   */
  debugManager.debug(this, "FlowExpression2", "Obter lista de colunas");

  /**
   * Obter lista de colunas
   */
  this.context['listaColunas'] = ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']);

  /**
   * DEBUG: Total de colunas
   */
  debugManager.debug(this, "FlowExpression6", "Total de colunas");

  /**
   * Total de colunas
   */
  this.context['totalColunas'] = ebfListLength.call(this, this.context['listaColunas']);

  /**
   * DEBUG: Cria lista vazia - Nome Colunas
   */
  debugManager.debug(this, "FlowExpression24", "Cria lista vazia - Nome Colunas");

  /**
   * Cria lista vazia - Nome Colunas
   */
  this.context['lisNomesComp'] = ebfListCreate.call(this);

  /**
   * DEBUG: Cria lista vazia - Largura
   */
  debugManager.debug(this, "FlowExpression11", "Cria lista vazia - Largura");

  /**
   * Cria lista vazia - Largura
   */
  this.context['listaTamanhos'] = ebfListCreate.call(this);

  /**
   * DEBUG: Obter largura
   */
  debugManager.debug(this, "FlowExpression4", "Obter largura");

  /**
   * Obter largura
   */
  this.context['tamanho'] = ebfExecuteJS.call(this, ebfReplace.call(this, 'var largura = document.getElementById(\"X:GRADE:X\").offsetWidth;\n\nreturn largura;', 'X:GRADE:X', this.context['grade']));

  /**
   * DEBUG: Obter variação percentua dos tamanhos
   */
  debugManager.debug(this, "FlowExpression18", "Obter variação percentua dos tamanhos");

  /**
   * Obter variação percentua dos tamanhos
   */
  this.context['variacaoPercenutal'] = oprMultiply.call(this, oprSubtract.call(this, oprDivide.call(this, this.context['tamanho'], this.context['larguraOriginal']), parseFloat(1)), parseFloat(100));

  /**
   * DEBUG: Contador < Tamanho da lista?
   */
  debugManager.debug(this, "FlowDecision1", "Contador < Tamanho da lista?");

  /**
   * Contador < Tamanho da lista?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

    /**
     * DEBUG: Insere nome da coluna na lista
     */
    debugManager.debug(this, "FlowExpression21", "Insere nome da coluna na lista");

    /**
     * Insere nome da coluna na lista
     */
    ebfSetElementAtList.call(this, this.context['lisNomesComp'], ebfGetValueObjectJson.call(this, ebfGetValueObjectJson.call(this, ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']), this.context['contador']), 'title'), oprAdd.call(this, this.context['contador'], parseFloat(1)));

    /**
     * DEBUG: Obtem largura
     */
    debugManager.debug(this, "FlowExpression9", "Obtem largura");

    /**
     * Obtem largura
     */
    this.context['larguraColuna'] = ebfGetValueObjectJson.call(this, ebfGetValueObjectJson.call(this, ebfGridGetHeaderInfo.call(this, ebfGetGUIDActualForm.call(this), this.context['grade']), this.context['contador']), 'width');

    /**
     * DEBUG: Corrige a variação percentual
     */
    debugManager.debug(this, "FlowExpression22", "Corrige a variação percentual");

    /**
     * Corrige a variação percentual
     */
    this.context['larguraColuna'] = ebfMathCeil.call(this, oprAdd.call(this, this.context['larguraColuna'], oprDivide.call(this, oprMultiply.call(this, this.context['larguraColuna'], this.context['variacaoPercenutal']), parseFloat(100))));

    /**
     * DEBUG: Insere largura na lista
     */
    debugManager.debug(this, "FlowExpression12", "Insere largura na lista");

    /**
     * Insere largura na lista
     */
    ebfSetElementAtList.call(this, this.context['listaTamanhos'], this.context['larguraColuna'], oprAdd.call(this, this.context['contador'], parseFloat(1)));

    /**
     * DEBUG: Soma total de largurar
     */
    debugManager.debug(this, "FlowExpression13", "Soma total de largurar");

    /**
     * Soma total de largurar
     */
    this.context['totalLarguras'] = oprAdd.call(this, this.context['totalLarguras'], this.context['larguraColuna']);

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression14", "Incrementa Contador");

    /**
     * Incrementa Contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));

  /**
   * DEBUG: Contador < Tamanho da lista?
   */
  debugManager.debug(this, "FlowDecision1", "Contador < Tamanho da lista?");
  }

  /**
   * DEBUG: Total larguras >= Tamanho?
   */
  debugManager.debug(this, "FlowDecision2", "Total larguras >= Tamanho?");

  /**
   * Total larguras >= Tamanho?
   */
  if (parseBoolean(isGreaterOrEqual.call(this, this.context['totalLarguras'], this.context['tamanho']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Zerar contador
     */
    debugManager.debug(this, "FlowExpression3", "Zerar contador");

    /**
     * Zerar contador
     */
    this.context['contador'] = parseInt(0);

    /**
     * DEBUG: Cria lista vazia - Largura Somada
     */
    debugManager.debug(this, "FlowExpression1", "Cria lista vazia - Largura Somada");

    /**
     * Cria lista vazia - Largura Somada
     */
    this.context['listaLarguraSomada'] = ebfListCreate.call(this);

    /**
     * DEBUG: Obtem diferença entre as larguras
     */
    debugManager.debug(this, "FlowExpression17", "Obtem diferença entre as larguras");

    /**
     * Obtem diferença entre as larguras
     */
    this.context['diferenca'] = oprSubtract.call(this, this.context['tamanho'], this.context['totalLarguras']);

    /**
     * DEBUG: Valor a incrementar
     */
    debugManager.debug(this, "FlowExpression10", "Valor a incrementar");

    /**
     * Valor a incrementar
     */
    this.context['valorAumentar'] = oprSubtract.call(this, oprTrunc.call(this, oprDivide.call(this, this.context['diferenca'], this.context['totalColunas'])), parseInt(5));

    /**
     * DEBUG: Contador < Tamanho da lista
     */
    debugManager.debug(this, "FlowDecision3", "Contador < Tamanho da lista");

    /**
     * Contador < Tamanho da lista
     */
    while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

      /**
       * DEBUG: Insere na lista
       */
      debugManager.debug(this, "FlowExpression5", "Insere na lista");

      /**
       * Insere na lista
       */
      ebfSetElementAtList.call(this, this.context['listaLarguraSomada'], oprAdd.call(this, ebfGetElementFromList.call(this, this.context['listaTamanhos'], oprAdd.call(this, this.context['contador'], parseFloat(1))), this.context['valorAumentar']), oprAdd.call(this, this.context['contador'], parseFloat(1)));

      /**
       * DEBUG: Incrementa Contador
       */
      debugManager.debug(this, "FlowExpression7", "Incrementa Contador");

      /**
       * Incrementa Contador
       */
      this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));

    /**
     * DEBUG: Contador < Tamanho da lista
     */
    debugManager.debug(this, "FlowDecision3", "Contador < Tamanho da lista");
    }

    /**
     * DEBUG: Altera larguras
     */
    debugManager.debug(this, "FlowExpression19", "Altera larguras");

    /**
     * Altera larguras
     */
    ebfGridModifyColumnsWidth.call(this, ebfGetGUIDActualForm.call(this), this.context['grade'], this.context['lisNomesComp'], this.context['listaLarguraSomada']);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Oculta ou Exibe Elemento';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Exibir'] = this.checkType(arguments[0], 'Letras');

  this.context['Lista Elementos'] = this.checkType(arguments[1], 'Variante');

  this.context['Lista Elementos Controller'] = this.checkType(arguments[2], 'Variante');

  // Variáveis
  this.context['Contador'] = 0;

  debugManager.startRule(this);

  this.context['Contador'] = parseInt(1);

  /**
   * DEBUG: Verifica se a lista foi preenchida
   */
  debugManager.debug(this, "FlowExpression1", "Verifica se a lista foi preenchida");

  /**
   * Verifica se a lista foi preenchida
   */
  this.context['Lista Elementos'] = (this.context['Lista Elementos'] ? this.context['Lista Elementos'] : ebfListCreate.call(this));

  /**
   * DEBUG: Verifica se a lista controller foi preenchida
   */
  debugManager.debug(this, "FlowExpression2", "Verifica se a lista controller foi preenchida");

  /**
   * Verifica se a lista controller foi preenchida
   */
  this.context['Lista Elementos Controller'] = (this.context['Lista Elementos Controller'] ? this.context['Lista Elementos Controller'] : ebfListCreate.call(this));

  /**
   * DEBUG: Possui elemento ?
   */
  debugManager.debug(this, "FlowDecision2", "Possui elemento ?");

  /**
   * Possui elemento ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Lista Elementos'])))) {

    /**
     * DEBUG: Exibe/Oculta o elemento
     */
    debugManager.debug(this, "FlowExpression10", "Exibe/Oculta o elemento");

    /**
     * Exibe/Oculta o elemento
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, ebfGetElementFromList.call(this, this.context['Lista Elementos'], this.context['Contador'])), 'display', (toBoolean.call(this, this.context['Exibir']) ? 'block' : 'none'));

    /**
     * DEBUG: Incrementa o contador
     */
    debugManager.debug(this, "FlowExpression9", "Incrementa o contador");

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));

  /**
   * DEBUG: Possui elemento ?
   */
  debugManager.debug(this, "FlowDecision2", "Possui elemento ?");
  }

  /**
   * DEBUG: Reinicia o contador = 1
   */
  debugManager.debug(this, "FlowExpression13", "Reinicia o contador = 1");

  /**
   * Reinicia o contador = 1
   */
  this.context['Contador'] = parseInt(1);

  /**
   * DEBUG: Possui elemento controller ?
   */
  debugManager.debug(this, "FlowDecision3", "Possui elemento controller ?");

  /**
   * Possui elemento controller ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], ebfListLength.call(this, this.context['Lista Elementos Controller'])))) {

    /**
     * DEBUG: Exibe/Oculta o elemento
     */
    debugManager.debug(this, "FlowExpression12", "Exibe/Oculta o elemento");

    /**
     * Exibe/Oculta o elemento
     */
    ebfFormSetVisible.call(this, ebfGetElementFromList.call(this, this.context['Lista Elementos Controller'], this.context['Contador']), toBoolean.call(this, this.context['Exibir']));

    /**
     * DEBUG: Incrementa o contador
     */
    debugManager.debug(this, "FlowExpression11", "Incrementa o contador");

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));

  /**
   * DEBUG: Possui elemento controller ?
   */
  debugManager.debug(this, "FlowDecision3", "Possui elemento controller ?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Permitir movimentação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Evento'] = this.checkType(arguments[0], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Define tipo de drag
   */
  debugManager.debug(this, "FlowExpression1", "Define tipo de drag");

  /**
   * Define tipo de drag
   */
  ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'dataTransfer'), 'dropEffect', 'move');

  /**
   * DEBUG: Define tipo de drag
   */
  debugManager.debug(this, "FlowExpression2", "Define tipo de drag");

  /**
   * Define tipo de drag
   */
  ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Evento'], 'dataTransfer'), 'effectAllowed', 'move');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return true;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Renomear Atalho';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Elemento'] = this.checkType(arguments[0], 'Variante');

  // Variáveis
  this.context['Nome do Atalho'] = '';

  this.context['Objeto Atalhos'] = null;

  this.context['Chave Atalho'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Obtém nome do atalho
   */
  debugManager.debug(this, "FlowExpression1", "Obtém nome do atalho");

  /**
   * Obtém nome do atalho
   */
  this.context['Nome do Atalho'] = ebfPrompt.call(this, 'Digite o nome do atalho:', ebfHtmlGetInnerHtml.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, this.context['Elemento'], parseInt(2)))));

  /**
   * DEBUG: Mensagem de Alerta
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, this.context['Nome do Atalho'], null, null);

  /**
   * DEBUG: Verifica se retorno é nulo
   */
  debugManager.debug(this, "FlowDecision1", "Verifica se retorno é nulo");

  /**
   * Verifica se retorno é nulo
   */
  if (parseBoolean(isNull.call(this, this.context['Nome do Atalho']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Alterar nome do atalho
     */
    debugManager.debug(this, "FlowExpression2", "Alterar nome do atalho");

    /**
     * Alterar nome do atalho
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, this.context['Elemento'], parseInt(2))), this.context['Nome do Atalho']);

    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, this.context['Nome do Atalho'], null, null);

    /**
     * DEBUG: Obtém JSON
     */
    debugManager.debug(this, "FlowExpression4", "Obtém JSON");

    /**
     * Obtém JSON
     */
    this.context['Objeto Atalhos'] = ebfGetClientFormVariable.call(this, 'menu_obj_atalhos');

    /**
     * DEBUG: Obtém nome da chave
     */
    debugManager.debug(this, "FlowExpression5", "Obtém nome da chave");

    /**
     * Obtém nome da chave
     */
    this.context['Chave Atalho'] = ebfHtmlGetAttribute.call(this, this.context['Elemento'], 'id');

    /**
     * DEBUG: Modificar JSON
     */
    debugManager.debug(this, "FlowExpression3", "Modificar JSON");

    /**
     * Modificar JSON
     */
    ebfHtmlSetDOMAttribute.call(this, ebfHtmlGetDOMAttribute.call(this, this.context['Objeto Atalhos'], this.context['Chave Atalho']), 'conteudo', ebfHtmlGetInnerHtml.call(this, this.context['Elemento']));

    /**
     * DEBUG: Template - Atualizar Atalhos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Atualizar Atalhos");

    /**
     * Template - Atualizar Atalhos
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Atualizar Atalhos', [ebfGetJSONText.call(this, this.context['Objeto Atalhos'], parseInt(2))]);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = '__TPT_{2139B88F-012A-4502-8A6F-309D5391C231}';
  this.context = new Array();

  // Variáveis
  this.context['Contador'] = 0;

  this.context['Tamanho da Lista'] = 0;

  this.context['Objeto Lista'] = null;

  debugManager.startRule(this);

  this.context['Contador'] = parseInt(1);

  /**
   * DEBUG: Criar Objeto Lista
   */
  debugManager.debug(this, "FlowExpression1", "Criar Objeto Lista");

  /**
   * Criar Objeto Lista
   */
  this.context['Objeto Lista'] = ebfListParamsCreate.call(this, null, null);

  /**
   * DEBUG: Tamanho da lista
   */
  debugManager.debug(this, "FlowExpression3", "Tamanho da lista");

  /**
   * Tamanho da lista
   */
  this.context['Tamanho da Lista'] = ebfListLength.call(this, this.context['Objeto Lista']);

  /**
   * DEBUG: Possui elemento ?
   */
  debugManager.debug(this, "FlowDecision1", "Possui elemento ?");

  /**
   * Possui elemento ?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['Contador'], this.context['Tamanho da Lista']))) {

    /**
     * Complemente com a ação desejada
     */

    /**
     * DEBUG: Incrementa o contador
     */
    debugManager.debug(this, "FlowExpression2", "Incrementa o contador");

    /**
     * Incrementa o contador
     */
    this.context['Contador'] = oprAdd.call(this, this.context['Contador'], parseInt(1));

  /**
   * DEBUG: Possui elemento ?
   */
  debugManager.debug(this, "FlowDecision1", "Possui elemento ?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Generico - Fluxo filler';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Login - BTN Esqueci minha senha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['LOGIN'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['NOVA_SENHA'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Login nulo?
   */
  debugManager.debug(this, "FlowDecision1", "Login nulo?");

  /**
   * Login nulo?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['LOGIN']))) {
      
    /**
     * DEBUG: O login deve ser informado
     */
    debugManager.debug(this, "FlowActivity1", "O login deve ser informado");

    /**
     * O login deve ser informado
     */
    ActNewErrorMessage('Erro', 'Preencha o campo login para prosseguir!', null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Interação de confirmação
     */
    debugManager.debug(this, "FlowDecision2", "Interação de confirmação");

    /**
     * Interação de confirmação
     */
    if (parseBoolean(ebfConfirm.call(this, 'Deseja recuperar sua senha ?'))) {
        
      /**
       * DEBUG: Gerar senha
       */
      debugManager.debug(this, "FlowExpression1", "Gerar senha");

      /**
       * Gerar senha
       */
      this.context['NOVA_SENHA'] = gerarPassword.call(this);

      /**
       * DEBUG: Login - Esqueci minha Senha
       */
      debugManager.debug(this, "FlowSubRoutine1", "Login - Esqueci minha Senha");

      /**
       * Login - Esqueci minha Senha
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Login - Esqueci minha Senha', [this.context['LOGIN'], this.context['NOVA_SENHA']]);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Login - Esqueci minha Senha - Ao Confirmar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['LISTA_RECEBIDA'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['NOVA_SENHA'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Gerar senha
   */
  debugManager.debug(this, "FlowExpression1", "Gerar senha");

  /**
   * Gerar senha
   */
  this.context['NOVA_SENHA'] = gerarPassword.call(this);

  /**
   * DEBUG: Login - Esqueci minha Senha
   */
  debugManager.debug(this, "FlowSubRoutine1", "Login - Esqueci minha Senha");

  /**
   * Login - Esqueci minha Senha
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Login - Esqueci minha Senha', [this.context['LISTA_RECEBIDA'], this.context['NOVA_SENHA']]);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Login - Novo - Ao entrar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Class tab0
   */
  debugManager.debug(this, "FlowExpression2", "Class tab0");

  /**
   * Class tab0
   */
  ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'tab0'), 'class', 'tab-pane position-relative w-100 flex-fill overflow-visible show active row  d-flex justify-content-center');

  /**
   * DEBUG: Anexa na div main
   */
  debugManager.debug(this, "FlowExpression1", "Anexa na div main");

  /**
   * Anexa na div main
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetMakerElementById.call(this, 'molduraMain'), ebfHtmlGetMakerElementById.call(this, 'container'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Login - Ao Pressionar Tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Alt'] = this.checkType(arguments[0], 'Lógico');

  this.context['Ctrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['Shift'] = this.checkType(arguments[2], 'Lógico');

  this.context['Código da Tecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['Caractere da Tecla'] = this.checkType(arguments[4], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Tecla pressionada é ENTER?
   */
  debugManager.debug(this, "FlowDecision1", "Tecla pressionada é ENTER?");

  /**
   * Tecla pressionada é ENTER?
   */
  if (parseBoolean((isEqual.call(this, this.context['Código da Tecla'], parseInt(13)) || isEqual.call(this, this.context['Caractere da Tecla'], 'Enter')))) {
      
    /**
     * DEBUG: Template - Login - Autenticar Usuario
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Login - Autenticar Usuario");

    /**
     * Template - Login - Autenticar Usuario
     */
    new TemplateLoginAutenticarUsuario(this, this.getSystem(), this.getForm()).run(ebfFormGetComponentValue.call(this, '{BF4D777E-C74A-471E-9850-DD077B578876}', 'username'), ebfFormGetComponentValue.call(this, '{BF4D777E-C74A-471E-9850-DD077B578876}', 'password'));

    return this.FlowEnd1();

  } else {

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TemplateLoginAoPressionarTecla.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Genericos - Mostra/Esconde Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe Componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe Componente?");

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Mostra/Esconde Campo
       */
      debugManager.debug(this, "FlowExpression21", "Mostra/Esconde Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GenericosMostraEscondeCampos.prototype.FlowConnector2 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Login - Focar Componente';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Focar Componente
   */
  debugManager.debug(this, "FlowExpression1", "Focar Componente");

  /**
   * Focar Componente
   */
  ebfFormSetFocus.call(this, 'username');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Validar e-mail confirmacao';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Letras');

  this.context['confirmacaoEmail'] = this.checkType(arguments[1], 'Letras');

  this.context['componente'] = this.checkType(arguments[2], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[3], 'Letras');

  this.context['mensagem'] = this.checkType(arguments[4], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Algum e-mail nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "Algum e-mail nulo ou vazio?");

  /**
   * Algum e-mail nulo ou vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirmacaoEmail'])))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: E-mails iguais?
     */
    debugManager.debug(this, "FlowDecision1", "E-mails iguais?");

    /**
     * E-mails iguais?
     */
    if (parseBoolean(isEqual.call(this, ebfTrim.call(this, this.context['email']), ebfTrim.call(this, this.context['confirmacaoEmail'])))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirma')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackconfirma', null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Limpa componente
         */
        debugManager.debug(this, "FlowExpression1", "Limpa componente");

        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * DEBUG: Atribui class is-invalid
         */
        debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirma')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * DEBUG: Focar componente
         */
        debugManager.debug(this, "FlowExpression5", "Focar componente");

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: É formulário?
   */
  debugManager.debug(this, "FlowDecision3", "É formulário?");

  /**
   * É formulário?
   */
  if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(1)))) {
      
    /**
     * DEBUG: Template - Geral - Obter Propriedade do Formulário
     */
    debugManager.debug(this, "FlowSubRoutine1", "Template - Geral - Obter Propriedade do Formulário");

    /**
     * Template - Geral - Obter Propriedade do Formulário
     */
    this.context['Auxiliar'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Geral - Obter Propriedade do Formulário', [this.context['Identificador'], 'Popup']);

    /**
     * DEBUG: É flutuante?
     */
    debugManager.debug(this, "FlowDecision4", "É flutuante?");

    /**
     * É flutuante?
     */
    if (parseBoolean((oprNot.call(this, isNullOrEmpty.call(this, this.context['Auxiliar'])) && isEqual.call(this, ebfToUpperCase.call(this, toString.call(this, this.context['Auxiliar'])), 'FALSE')))) {
        
      /**
       * DEBUG: Abrir Formulário
       */
      debugManager.debug(this, "FlowExpression7", "Abrir Formulário");

      /**
       * Abrir Formulário
       */
      ebfFormOpenForm.call(this, this.context['Identificador']);

      return this.FlowConnector2();

    } else {

      /**
       * DEBUG: Obter aba do menu
       */
      debugManager.debug(this, "FlowExpression11", "Obter aba do menu");

      /**
       * Obter aba do menu
       */
      this.context['Aba do Menu'] = ebfGetComponentProperty.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Menu', 'MenuAbas');

      /**
       * DEBUG: Aba foi definida?
       */
      debugManager.debug(this, "FlowDecision8", "Aba foi definida?");

      /**
       * Aba foi definida?
       */
      if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Aba do Menu'])))) {
          
        /**
         * DEBUG: Adicionar formulário na aba
         */
        debugManager.debug(this, "FlowExpression12", "Adicionar formulário na aba");

        /**
         * Adicionar formulário na aba
         */
        new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run(this.context['Aba do Menu'], this.context['Identificador'], this.context['Descrição']);


        return this.FlowConnector8();

      } else {

        /**
         * DEBUG: Limpar Moldura
         */
        debugManager.debug(this, "FlowExpression4", "Limpar Moldura");

        /**
         * Limpar Moldura
         */
        ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

        /**
         * DEBUG: Abrir Formulário na Moldura
         */
        debugManager.debug(this, "FlowExpression3", "Abrir Formulário na Moldura");

        /**
         * Abrir Formulário na Moldura
         */
        ebfFrameOpenForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', this.context['Identificador'], false, false);

        /**
         * DEBUG: Obter div do formulário
         */
        debugManager.debug(this, "FlowExpression6", "Obter div do formulário");

        /**
         * Obter div do formulário
         */
        this.context['Div Formulário'] = ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'moldura')), parseInt(1));

        /**
         * DEBUG: Div do formulário existe?
         */
        debugManager.debug(this, "FlowDecision1", "Div do formulário existe?");

        /**
         * Div do formulário existe?
         */
        if (parseBoolean(oprNot.call(this, isNull.call(this, this.context['Div Formulário'])))) {
            
          /**
           * DEBUG: Ajustar altura da div do formulário
           */
          debugManager.debug(this, "FlowExpression1", "Ajustar altura da div do formulário");

          /**
           * Ajustar altura da div do formulário
           */
          ebfHtmlCssDefineStyle.call(this, this.context['Div Formulário'], 'height', '100%');

          /**
           * DEBUG: Obter iframe do formulário
           */
          debugManager.debug(this, "FlowExpression2", "Obter iframe do formulário");

          /**
           * Obter iframe do formulário
           */
          this.context['Iframe Formulário'] = ebfHtmlGetElementsByTagName.call(this, 'iframe', this.context['Div Formulário']);

          /**
           * DEBUG: Iframe existe?
           */
          debugManager.debug(this, "FlowDecision2", "Iframe existe?");

          /**
           * Iframe existe?
           */
          if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Iframe Formulário'])))) {
              
            /**
             * DEBUG: Ajustar altura do iframe do formulário
             */
            debugManager.debug(this, "FlowExpression5", "Ajustar altura do iframe do formulário");

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
     * DEBUG: É relatório?
     */
    debugManager.debug(this, "FlowDecision5", "É relatório?");

    /**
     * É relatório?
     */
    if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(2)))) {
        
      /**
       * DEBUG: Abrir Relatório
       */
      debugManager.debug(this, "FlowExpression8", "Abrir Relatório");

      /**
       * Abrir Relatório
       */
      ebfOpenReport.call(this, this.context['Identificador'], false, null, this.context['Descrição']);

      return this.FlowConnector8();

    } else {

      /**
       * DEBUG: É fluxo?
       */
      debugManager.debug(this, "FlowDecision6", "É fluxo?");

      /**
       * É fluxo?
       */
      if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(3)))) {
          
        /**
         * DEBUG: Executar Fluxo
         */
        debugManager.debug(this, "FlowExpression9", "Executar Fluxo");

        /**
         * Executar Fluxo
         */
        ebfFlowExecute.call(this, this.context['Identificador'], null);

        return this.FlowConnector8();

      } else {

        /**
         * DEBUG: É ação pré definida?
         */
        debugManager.debug(this, "FlowDecision7", "É ação pré definida?");

        /**
         * É ação pré definida?
         */
        if (parseBoolean(isEqual.call(this, this.context['Tipo'], parseInt(4)))) {
            
          /**
           * DEBUG: Executar Ação Pré Definida
           */
          debugManager.debug(this, "FlowExpression10", "Executar Ação Pré Definida");

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

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Validar CPF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;

  debugManager.startRule(this);


  /**
   * DEBUG: CPF nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "CPF nulo ou vazio?");

  /**
   * CPF nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cpf']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Validar CPF
     */
    debugManager.debug(this, "FlowExpression3", "Validar CPF");

    /**
     * Validar CPF
     */
    this.context['validacao'] = ebfIsCpf.call(this, ebfReplaceAll.call(this, ebfReplaceAll.call(this, this.context['cpf'], '.', ''), '-', ''));

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision1", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd4", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Limpa componente
       */
      debugManager.debug(this, "FlowExpression1", "Limpa componente");

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', '<div class=\"form-group\" style=\"color:#dc3545 !important;\">CPF Inválido!</div>');

      /**
       * DEBUG: Focar componente
       */
      debugManager.debug(this, "FlowExpression5", "Focar componente");

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd2", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression6", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression7", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Limpar ao pressionar tecla';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametroAlt'] = this.checkType(arguments[0], 'Lógico');

  this.context['parametroCtrl'] = this.checkType(arguments[1], 'Lógico');

  this.context['parametroShift'] = this.checkType(arguments[2], 'Lógico');

  this.context['códigoTecla'] = this.checkType(arguments[3], 'Inteiro');

  this.context['nome'] = this.checkType(arguments[4], 'Letras');

  this.context['componenteMsg'] = this.checkType(arguments[5], 'Componente');

  debugManager.startRule(this);


  /**
   * DEBUG: Código = 13?
   */
  debugManager.debug(this, "FlowDecision1", "Código = 13?");

  /**
   * Código = 13?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['códigoTecla']), toLong.call(this, parseInt(13))))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: True
     */
    debugManager.debug(this, "FlowDecision3", "True");

    /**
     * True
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Altera mensagem
       */
      debugManager.debug(this, "FlowExpression6", "Altera mensagem");

      /**
       * Altera mensagem
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Validar e-mail';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: E-mail nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "E-mail nulo ou vazio?");

  /**
   * E-mail nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['email']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Validar e-mail
     */
    debugManager.debug(this, "FlowExpression3", "Validar e-mail");

    /**
     * Validar e-mail
     */
    this.context['validacao'] = ebfIsEmail.call(this, this.context['email']);

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision1", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackemail', null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Limpa componente
       */
      debugManager.debug(this, "FlowExpression1", "Limpa componente");

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackemail', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

      /**
       * DEBUG: Focar componente
       */
      debugManager.debug(this, "FlowExpression5", "Focar componente");

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression6", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression7", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Ao modificar tipo da pessoa';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['inteiro'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: PreCadastro - Limpar Termos
   */
  debugManager.debug(this, "FlowSubRoutine1", "PreCadastro - Limpar Termos");

  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * DEBUG: Pessoa jurídica?
   */
  debugManager.debug(this, "FlowDecision1", "Pessoa jurídica?");

  /**
   * Pessoa jurídica?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['inteiro']), toLong.call(this, parseInt(1))))) {
      
    /**
     * DEBUG: Mostra cnpj
     */
    debugManager.debug(this, "FlowExpression1", "Mostra cnpj");

    /**
     * Mostra cnpj
     */
    ebfFormSetVisible.call(this, 'MakerEdit2', true);

    /**
     * DEBUG: Limpa cpf
     */
    debugManager.debug(this, "FlowExpression2", "Limpa cpf");

    /**
     * Limpa cpf
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'cpf', null);

    /**
     * DEBUG: Oculta cpf
     */
    debugManager.debug(this, "FlowExpression3", "Oculta cpf");

    /**
     * Oculta cpf
     */
    ebfFormSetVisible.call(this, 'cpf', false);

    /**
     * DEBUG: Conteúdo da moldura feedback
     */
    debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

    /**
     * Conteúdo da moldura feedback
     */
    ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

    /**
     * DEBUG: Altera Hint
     */
    debugManager.debug(this, "FlowExpression8", "Altera Hint");

    /**
     * Altera Hint
     */
    ebfSetHint.call(this, 'EDTNM_FORNEC2', 'Os dados apresentados devem estar conforme o \"Comprovante de Inscrição e de Situação Cadastral\" emitido pela Receita federal.');

    /**
     * DEBUG: Altera descrição
     */
    debugManager.debug(this, "FlowExpression10", "Altera descrição");

    /**
     * Altera descrição
     */
    ebfChangeDescription.call(this, 'EDTNM_FORNEC2', 'Razão Social');

    /**
     * DEBUG: Oculta Data de Nascimento
     */
    debugManager.debug(this, "FlowExpression14", "Oculta Data de Nascimento");

    /**
     * Oculta Data de Nascimento
     */
    ebfFormSetVisible.call(this, 'dtNascimento', false);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Mostra cpf
     */
    debugManager.debug(this, "FlowExpression4", "Mostra cpf");

    /**
     * Mostra cpf
     */
    ebfFormSetVisible.call(this, 'cpf', true);

    /**
     * DEBUG: Limpa cnpj
     */
    debugManager.debug(this, "FlowExpression5", "Limpa cnpj");

    /**
     * Limpa cnpj
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerEdit2', null);

    /**
     * DEBUG: Oculta cnpj
     */
    debugManager.debug(this, "FlowExpression6", "Oculta cnpj");

    /**
     * Oculta cnpj
     */
    ebfFormSetVisible.call(this, 'MakerEdit2', false);

    /**
     * DEBUG: Conteúdo da moldura feedback
     */
    debugManager.debug(this, "FlowExpression7", "Conteúdo da moldura feedback");

    /**
     * Conteúdo da moldura feedback
     */
    ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

    /**
     * DEBUG: Altera Hint
     */
    debugManager.debug(this, "FlowExpression9", "Altera Hint");

    /**
     * Altera Hint
     */
    ebfSetHint.call(this, 'EDTNM_FORNEC2', 'Os dados devem estar conforme \"Comprovante de Situação Cadastral no CPF\" emitido pela Receita Federal.');

    /**
     * DEBUG: Altera descrição
     */
    debugManager.debug(this, "FlowExpression11", "Altera descrição");

    /**
     * Altera descrição
     */
    ebfChangeDescription.call(this, 'EDTNM_FORNEC2', 'Nome Completo');

    /**
     * DEBUG: Mostra Data de Nascimento
     */
    debugManager.debug(this, "FlowExpression13", "Mostra Data de Nascimento");

    /**
     * Mostra Data de Nascimento
     */
    ebfFormSetVisible.call(this, 'dtNascimento', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Limpar Termos';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Limpa termosUso
   */
  debugManager.debug(this, "FlowExpression1", "Limpa termosUso");

  /**
   * Limpa termosUso
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'termosUso', parseInt(0));

  /**
   * DEBUG: Limpa termosUso
   */
  debugManager.debug(this, "FlowExpression2", "Limpa termosUso");

  /**
   * Limpa termosUso
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'termosPrivacidade', parseInt(0));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Ao navegar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Alterar Moldura
   */
  debugManager.debug(this, "FlowExpression6", "Alterar Moldura");

  /**
   * Alterar Moldura
   */
  ebgChangeValueGroupBox.call(this, 'msgTermos', '<span id=\"termos\" style=\"font-size:small;\">\n  Li e aceito os termos de uso (acesse aqui) e o Código de Conduta de Fornecedores da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/images/Servicos/Fornecedores/20200902_COD_CondutaIntegridadeFornecedoresParceiros.pdf\" target=\"_blank\" style=\"color:#4088C4;\"> aqui</a>). \n<span>');

  /**
   * DEBUG: Alterar Moldura Privacidade
   */
  debugManager.debug(this, "FlowExpression7", "Alterar Moldura Privacidade");

  /**
   * Alterar Moldura Privacidade
   */
  ebgChangeValueGroupBox.call(this, 'msgPrivacidade', '<span style=\"font-size:small;\" id=\"privacidade\">\n  Li e aceito os termos da Política de Privacidade da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/index.php/institucional/aviso-de-privacidade\" target=\"_blank\"  style=\"color:#4088C4;\"> aqui</a>). \n<span>');

  /**
   * DEBUG: Criar script
   */
  debugManager.debug(this, "FlowExpression4", "Criar script");

  /**
   * Criar script
   */
  ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

  /**
   * DEBUG: Alterar para jurídica
   */
  debugManager.debug(this, "FlowExpression1", "Alterar para jurídica");

  /**
   * Alterar para jurídica
   */
  ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerRadioGroup1', parseInt(1));

  /**
   * DEBUG: Cria loader
   */
  debugManager.debug(this, "FlowExpression3", "Cria loader");

  /**
   * Cria loader
   */
  ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'loader'), ebfListParamsCreate.call(this, 'class', 'loader'), ebfListParamsCreate.call(this, 'style', 'left: 40%; top: 50%; display: none; position: absolute;')), ebfHtmlGetMakerElementById.call(this, 'MakerContainer1'));

  /**
   * DEBUG: True
   */
  debugManager.debug(this, "FlowDecision1", "True");

  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Cria captcha
     */
    debugManager.debug(this, "FlowExpression5", "Cria captcha");

    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerBevel2'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    return this.FlowEnd1();

  } else {

    /**
     * DEBUG: left:35%
     */
    debugManager.debug(this, "FlowExpression2", "left:35%");

    /**
     * left:35%
     */
    ebfCSSImportContent.call(this, '#MakerContainer1{\n    left: 35% !important;\n}', null);

    return this.FlowEnd1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

PrecadastroAoNavegar.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: PreCadastro - Verificar Termos
   */
  debugManager.debug(this, "FlowSubRoutine3", "PreCadastro - Verificar Termos");

  /**
   * PreCadastro - Verificar Termos
   */
  this.context['retornoTermos'] = new PrecadastroVerificarTermos(this, this.getSystem(), this.getForm()).run(this.context['termosUso'], this.context['termosPrivacidade']);

  /**
   * DEBUG: Termos confirmados?
   */
  debugManager.debug(this, "FlowDecision8", "Termos confirmados?");

  /**
   * Termos confirmados?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoTermos']), toLong.call(this, parseInt(0))))) {
      
    /**
     * DEBUG: Pessoa Jurídica?
     */
    debugManager.debug(this, "FlowDecision1", "Pessoa Jurídica?");

    /**
     * Pessoa Jurídica?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['tipo']), toLong.call(this, parseInt(1))))) {
        
      /**
       * DEBUG: Algum campo vazio?
       */
      debugManager.debug(this, "FlowDecision2", "Algum campo vazio?");

      /**
       * Algum campo vazio?
       */
      if (parseBoolean((isNullOrEmpty.call(this, this.context['cnpj']) || isNullOrEmpty.call(this, this.context['login']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome'])))) {
          
        /**
         * DEBUG: Mensagem de Alerta
         */
        debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

        /**
         * DEBUG: Refresh
         */
        debugManager.debug(this, "FlowExpression2", "Refresh");

        /**
         * Refresh
         */
        ebfExecuteJS.call(this, 'grecaptcha.reset();');

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        return this.FlowExpression8();

      }

    } else {

      /**
       * DEBUG: Algum campo vazio?
       */
      debugManager.debug(this, "FlowDecision3", "Algum campo vazio?");

      /**
       * Algum campo vazio?
       */
      if (parseBoolean((isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['login']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome']) || isNullOrEmpty.call(this, this.context['dtNascimento'])))) {
          
        /**
         * DEBUG: Mensagem de Alerta
         */
        debugManager.debug(this, "FlowActivity3", "Mensagem de Alerta");

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

        /**
         * DEBUG: Refresh
         */
        debugManager.debug(this, "FlowExpression1", "Refresh");

        /**
         * Refresh
         */
        ebfExecuteJS.call(this, 'grecaptcha.reset();');

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd2", "Fim");

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
     * DEBUG: Refresh
     */
    debugManager.debug(this, "FlowExpression7", "Refresh");

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd8", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

PrecadastroValidaCaptcha.prototype.FlowExpression8 = function() {

    /**
     * DEBUG: Obtem response
     */
    debugManager.debug(this, "FlowExpression8", "Obtem response");

    /**
     * Obtem response
     */
    this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

    /**
     * DEBUG: Recaptcha - Obter url via post
     */
    debugManager.debug(this, "FlowSubRoutine2", "Recaptcha - Obter url via post");

    /**
     * Recaptcha - Obter url via post
     */
    this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

    /**
     * DEBUG: Obtem retorno do captcha
     */
    debugManager.debug(this, "FlowExpression13", "Obtem retorno do captcha");

    /**
     * Obtem retorno do captcha
     */
    this.context['validacaoCapcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision5", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(this.context['validacaoCapcha'])) {
        
      /**
       * DEBUG: PreCadastro - Cadastrar - Cliente
       */
      debugManager.debug(this, "FlowSubRoutine1", "PreCadastro - Cadastrar - Cliente");

      /**
       * PreCadastro - Cadastrar - Cliente
       */
      new PrecadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosPrivacidade'], this.context['nome'], this.context['dtNascimento']);

      /**
       * DEBUG: Refresh Recaptcha
       */
      debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

      /**
       * Refresh Recaptcha
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd6", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Mensagem de Alerta
       */
      debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Captcha não validado!', null, null);

      /**
       * DEBUG: Refresh
       */
      debugManager.debug(this, "FlowExpression16", "Refresh");

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Verificar Termos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['termosUso'] = this.checkType(arguments[0], 'Inteiro');

  this.context['termosPrivacidade'] = this.checkType(arguments[1], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Termos confirmados?
   */
  debugManager.debug(this, "FlowDecision8", "Termos confirmados?");

  /**
   * Termos confirmados?
   */
  if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(1)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(1))))) {
      
    /**
     * DEBUG: Cor do texto - Termos
     */
    debugManager.debug(this, "FlowExpression7", "Cor do texto - Termos");

    /**
     * Cor do texto - Termos
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:black !important;font-size:small;');

    /**
     * DEBUG: Cor do texto - Privacidade
     */
    debugManager.debug(this, "FlowExpression8", "Cor do texto - Privacidade");

    /**
     * Cor do texto - Privacidade
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:black !important;font-size:small;');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return parseInt(0);

  } else {

    /**
     * DEBUG: Termos em branco?
     */
    debugManager.debug(this, "FlowDecision1", "Termos em branco?");

    /**
     * Termos em branco?
     */
    if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(0)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(1))))) {
        
      /**
       * DEBUG: Cor do texto - Termos
       */
      debugManager.debug(this, "FlowExpression3", "Cor do texto - Termos");

      /**
       * Cor do texto - Termos
       */
      ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:#dc3545 !important;font-size:small;');

      /**
       * DEBUG: Cor do texto - Privacidade
       */
      debugManager.debug(this, "FlowExpression4", "Cor do texto - Privacidade");

      /**
       * Cor do texto - Privacidade
       */
      ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:black !important;font-size:small;');

      /**
       * DEBUG: Mensagem de Alerta (Clássico)
       */
      debugManager.debug(this, "FlowActivity4", "Mensagem de Alerta (Clássico)");

      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage('É preciso aceitar os Termos de Uso e o Código de Conduta');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return parseInt(1);

    } else {

      /**
       * DEBUG: Privacidade em branco?
       */
      debugManager.debug(this, "FlowDecision2", "Privacidade em branco?");

      /**
       * Privacidade em branco?
       */
      if (parseBoolean((isEqual.call(this, this.context['termosUso'], parseInt(1)) && isEqual.call(this, this.context['termosPrivacidade'], parseInt(0))))) {
          
        /**
         * DEBUG: Cor do texto - Privacidade
         */
        debugManager.debug(this, "FlowExpression5", "Cor do texto - Privacidade");

        /**
         * Cor do texto - Privacidade
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * DEBUG: Cor do texto - Termos
         */
        debugManager.debug(this, "FlowExpression6", "Cor do texto - Termos");

        /**
         * Cor do texto - Termos
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:black !important;font-size:small;');

        /**
         * DEBUG: Mensagem de Alerta (Clássico)
         */
        debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('É preciso aceitar a Política de Privacidade');

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd2", "Fim");

        /**
         * Fim
         */
        return parseInt(1);

      } else {

        /**
         * DEBUG: Cor do texto - Termos
         */
        debugManager.debug(this, "FlowExpression1", "Cor do texto - Termos");

        /**
         * Cor do texto - Termos
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'termos'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * DEBUG: Cor do texto - Privacidade
         */
        debugManager.debug(this, "FlowExpression2", "Cor do texto - Privacidade");

        /**
         * Cor do texto - Privacidade
         */
        ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'privacidade'), 'style', 'color:#dc3545 !important;font-size:small;');

        /**
         * DEBUG: Mensagem de Alerta (Clássico)
         */
        debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta (Clássico)");

        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('É preciso aceitar os Termos de Uso e Código de Conduta e a Política de Privacidade');

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return parseInt(1);

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision1", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Desabilita MakerButton1
     */
    debugManager.debug(this, "FlowExpression2", "Desabilita MakerButton1");

    /**
     * Desabilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', false);

    /**
     * DEBUG: Mostra spinner
     */
    debugManager.debug(this, "FlowExpression3", "Mostra spinner");

    /**
     * Mostra spinner
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'inline-block');

    /**
     * DEBUG: Altera descrição de MakerButton1
     */
    debugManager.debug(this, "FlowExpression11", "Altera descrição de MakerButton1");

    /**
     * Altera descrição de MakerButton1
     */
    ebfChangeDescription.call(this, 'MakerButton1', 'Aguarde...     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:inline-block\" id=\"spinner\"></div>');

    /**
     * DEBUG: Executa fluxo servidor assíncrono
     */
    debugManager.debug(this, "FlowExpression6", "Executa fluxo servidor assíncrono");

    /**
     * Executa fluxo servidor assíncrono
     */
    ebfAsyncJavaFlowExecute.call(this, 'PreCadastro - Cadastrar - Modal', ebfListParamsCreate.call(this, this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento']), 'PreCadastro - Retirar modal', ebfListParamsCreate.call(this, null, null), 'PreCadastro - Retirar modal', ebfListParamsCreate.call(this, null, null));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Altera .modal-content
     */
    debugManager.debug(this, "FlowExpression10", "Altera .modal-content");

    /**
     * Altera .modal-content
     */
    ebfCSSImportContent.call(this, '.modal-content   { \n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: 0.3rem;\n    outline: 0;\n    background: rgba(0, 0, 0, 0.1);\n    border: none;\n}', null);

    /**
     * DEBUG: Desabilita MakerButton1
     */
    debugManager.debug(this, "FlowExpression4", "Desabilita MakerButton1");

    /**
     * Desabilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', false);

    /**
     * DEBUG: MakerBevel1; z-index:99
     */
    debugManager.debug(this, "FlowExpression1", "MakerBevel1; z-index:99");

    /**
     * MakerBevel1; z-index:99
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerBevel1'), 'style', 'left: 32px; top: 144px; width: 385px; min-height: 345px; z-index: 99; display: block; position: absolute;');

    /**
     * DEBUG: Cria modal
     */
    debugManager.debug(this, "FlowExpression5", "Cria modal");

    /**
     * Cria modal
     */
    this.context['modal'] = ebfBootstrapCreateModal.call(this, null, false, '<button class=\"btn btn-primary w-100\" type=\"button\" disabled>\n  <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n  <span \">   Aguarde...</span>\n</button>', null, null, null);

    /**
     * DEBUG: Background transparente
     */
    debugManager.debug(this, "FlowExpression7", "Background transparente");

    /**
     * Background transparente
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(3)), 'style', 'background: rgba(255, 255, 255, 0.1);  border: none;');

    /**
     * DEBUG: Ocultar cabeçalho - Modal
     */
    debugManager.debug(this, "FlowExpression8", "Ocultar cabeçalho - Modal");

    /**
     * Ocultar cabeçalho - Modal
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(2)), 'style', 'display:none;');

    /**
     * DEBUG: Ocultar rodapé - Modal
     */
    debugManager.debug(this, "FlowExpression9", "Ocultar rodapé - Modal");

    /**
     * Ocultar rodapé - Modal
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, this.context['modal'], parseInt(4)), 'style', 'display:none;');

    /**
     * DEBUG: Agendar execução de fluxo
     */
    debugManager.debug(this, "FlowExpression12", "Agendar execução de fluxo");

    /**
     * Agendar execução de fluxo
     */
    ebfRuleSchedulerNoParent.call(this, 'PreCadastro - Cadastrar - Modal - Intermediario', ebfListParamsCreate.call(this, this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento'], ebfGetElementFromList.call(this, this.context['modal'], parseInt(1))), parseInt(500));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Validar login';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['login'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;

  debugManager.startRule(this);


  /**
   * DEBUG: CNPJ nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "CNPJ nulo ou vazio?");

  /**
   * CNPJ nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['login']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: True?
     */
    debugManager.debug(this, "FlowDecision4", "True?");

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Validar login
       */
      debugManager.debug(this, "FlowExpression11", "Validar login");

      /**
       * Validar login
       */
      this.context['validacao'] = ebfValidateTextER.call(this, this.context['login'], '^[a-zA-Z]{1}[A-Za-z0-9]{7,11}$');

      /**
       * DEBUG: Validou?
       */
      debugManager.debug(this, "FlowDecision1", "Validou?");

      /**
       * Validou?
       */
      if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
          
        /**
         * DEBUG: Remove class is-invalid
         */
        debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

        /**
         * Remove class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit1')), parseInt(2)), 'class', 'form-control');

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbacklogin', null);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd3", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Limpa componente
         */
        debugManager.debug(this, "FlowExpression1", "Limpa componente");

        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * DEBUG: Atribui class is-invalid
         */
        debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit1')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbacklogin', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * DEBUG: Focar componente
         */
        debugManager.debug(this, "FlowExpression5", "Focar componente");

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * DEBUG: True
         */
        debugManager.debug(this, "FlowDecision3", "True");

        /**
         * True
         */
        if (parseBoolean(true)) {
            
          /**
           * DEBUG: Fim
           */
          debugManager.debug(this, "FlowEnd1", "Fim");

          /**
           * Fim
           */
          return null;

        } else {

          /**
           * DEBUG: Altera mensagem
           */
          debugManager.debug(this, "FlowExpression2", "Altera mensagem");

          /**
           * Altera mensagem
           */
          ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

          /**
           * DEBUG: Mostra mensagem
           */
          debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

          /**
           * Mostra mensagem
           */
          ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

          /**
           * DEBUG: Altera mensagem
           */
          debugManager.debug(this, "FlowExpression6", "Altera mensagem");

          /**
           * Altera mensagem
           */
          ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

          /**
           * DEBUG: Mostra mensagem
           */
          debugManager.debug(this, "FlowExpression7", "Mostra mensagem");

          /**
           * Mostra mensagem
           */
          ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

          /**
           * DEBUG: Fim
           */
          debugManager.debug(this, "FlowEnd4", "Fim");

          /**
           * Fim
           */
          return null;

        }

      }

    } else {

      /**
       * DEBUG: Validar login
       */
      debugManager.debug(this, "FlowExpression3", "Validar login");

      /**
       * Validar login
       */
      this.context['validacao'] = ebfValidateTextER.call(this, this.context['login'], '^[A-Za-z0-9._-]*$');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd5", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Validar CNPJ';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cnpj'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = false;

  debugManager.startRule(this);


  /**
   * DEBUG: CNPJ nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "CNPJ nulo ou vazio?");

  /**
   * CNPJ nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cnpj']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Validar cpf/cnpj
     */
    debugManager.debug(this, "FlowExpression3", "Validar cpf/cnpj");

    /**
     * Validar cpf/cnpj
     */
    this.context['validacao'] = ebfIsCnpj.call(this, this.context['cnpj']);

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision1", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit2')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd4", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Limpa componente
       */
      debugManager.debug(this, "FlowExpression1", "Limpa componente");

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'MakerEdit2')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * DEBUG: Conteúdo da moldura feedback
       */
      debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

      /**
       * Conteúdo da moldura feedback
       */
      ebgChangeValueGroupBox.call(this, 'feedbackcpf', '<div class=\"form-group\" style=\"color:#dc3545 !important;\">CNPJ Inválido!</div>');

      /**
       * DEBUG: Focar componente
       */
      debugManager.debug(this, "FlowExpression5", "Focar componente");

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd2", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Atribui class is-invalid
         */
        debugManager.debug(this, "FlowExpression11", "Atribui class is-invalid");

        /**
         * Atribui class is-invalid
         */
        ebfHtmlCssDefineStyle.call(this, null, 'class', 'form-group is-invalid');

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression6", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression7", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Ao navegar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: True
   */
  debugManager.debug(this, "FlowDecision2", "True");

  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Criar script
     */
    debugManager.debug(this, "FlowExpression8", "Criar script");

    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    return this.FlowDecision1();

  } else {

    /**
     * DEBUG: Alterar Moldura
     */
    debugManager.debug(this, "FlowExpression6", "Alterar Moldura");

    /**
     * Alterar Moldura
     */
    ebgChangeValueGroupBox.call(this, 'msgTermos', '<span id=\"termos\" style=\"font-size:small;\">\n  Li e aceito os termos de uso (acesse aqui) e o Código de Conduta de Fornecedores da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/images/Servicos/Fornecedores/20200902_COD_CondutaIntegridadeFornecedoresParceiros.pdf\" target=\"_blank\" style=\"color:#4088C4;\"> aqui</a>). \n<span>');

    /**
     * DEBUG: Alterar Moldura Privacidade
     */
    debugManager.debug(this, "FlowExpression7", "Alterar Moldura Privacidade");

    /**
     * Alterar Moldura Privacidade
     */
    ebgChangeValueGroupBox.call(this, 'msgPrivacidade', '<span style=\"font-size:small;\" id=\"privacidade\">\n  Li e aceito os termos da Política de Privacidade da Embasa (acesse <a href=\"https://www.embasa.ba.gov.br/index.php/institucional/aviso-de-privacidade\" target=\"_blank\"  style=\"color:#4088C4;\"> aqui</a>). \n<span>');

    /**
     * DEBUG: Criar script
     */
    debugManager.debug(this, "FlowExpression4", "Criar script");

    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * DEBUG: Alterar para jurídica
     */
    debugManager.debug(this, "FlowExpression1", "Alterar para jurídica");

    /**
     * Alterar para jurídica
     */
    ebfFormChangeComponentValue.call(this, '{1E795099-A1AD-42B8-8E58-B076EBC6D7F9}', 'MakerRadioGroup1', parseInt(1));

    /**
     * DEBUG: Cria loader
     */
    debugManager.debug(this, "FlowExpression3", "Cria loader");

    /**
     * Cria loader
     */
    ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'loader'), ebfListParamsCreate.call(this, 'class', 'loader'), ebfListParamsCreate.call(this, 'style', 'left: 40%; top: 50%; display: none; position: absolute;')), ebfHtmlGetMakerElementById.call(this, 'MakerContainer1'));

    return this.FlowDecision1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

CadastroAoNavegar.prototype.FlowDecision1 = function() {

    /**
     * DEBUG: True
     */
    debugManager.debug(this, "FlowDecision1", "True");

    /**
     * True
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Cria captcha
       */
      debugManager.debug(this, "FlowExpression5", "Cria captcha");

      /**
       * Cria captcha
       */
      ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

      return this.FlowEnd1();

    } else {

      /**
       * DEBUG: left:35%
       */
      debugManager.debug(this, "FlowExpression2", "left:35%");

      /**
       * left:35%
       */
      ebfCSSImportContent.call(this, '#MakerContainer1{\n    left: 35% !important;\n}', null);

      return this.FlowEnd1();

    }
  }

CadastroAoNavegar.prototype.FlowEnd1 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Limpar Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['camposLimpar'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  this.context['contador'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['camposLimpar'], ',');

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe componente?");

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Limpar Campo
       */
      debugManager.debug(this, "FlowExpression21", "Limpar Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GeralLimparCampos.prototype.FlowConnector2 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem lista de colunas
   */
  debugManager.debug(this, "FlowExpression1", "Obtem lista de colunas");

  /**
   * Obtem lista de colunas
   */
  this.context['listaColunas'] = ebfSplit.call(this, this.context['nomeColunas'], ',');

  /**
   * DEBUG: Obtem total de colunas
   */
  debugManager.debug(this, "FlowExpression2", "Obtem total de colunas");

  /**
   * Obtem total de colunas
   */
  this.context['totalColunas'] = ebfListLength.call(this, this.context['listaColunas']);

  /**
   * DEBUG: Contador < total de colunas?
   */
  debugManager.debug(this, "FlowDecision1", "Contador < total de colunas?");

  /**
   * Contador < total de colunas?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['totalColunas']))) {

    /**
     * DEBUG: Mostra oculta coluna
     */
    debugManager.debug(this, "FlowExpression3", "Mostra oculta coluna");

    /**
     * Mostra oculta coluna
     */
    ebfGridShowColumn.call(this, ebfGetIdForm.call(this, ebfGetActualForm.call(this)), this.context['nomeGrade'], toString.call(this, ebfTrim.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['listaColunas'], toLong.call(this, oprAdd.call(this, this.context['contador'], parseInt(1))))))), this.context['trueFalse']);

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression5", "Incrementa contador");

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseInt(1));

  /**
   * DEBUG: Contador < total de colunas?
   */
  debugManager.debug(this, "FlowDecision1", "Contador < total de colunas?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Abas - Formulário Principal - Ao navegar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem div
   */
  debugManager.debug(this, "FlowExpression22", "Obtem div");

  /**
   * Obtem div
   */
  ebfAlertMessage.call(this, ebfGetFloatingFormDivById.call(this, 'Chat'));

  /**
   * DEBUG: Alertar
   */
  debugManager.debug(this, "FlowExpression1", "Alertar");

  /**
   * Alertar
   */
  ebfAlertMessage.call(this, ebfHtmlGetAttribute.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'class'));

  /**
   * DEBUG: Minimizar chat
   */
  debugManager.debug(this, "FlowExpression2", "Minimizar chat");

  /**
   * Minimizar chat
   */
  ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'class', 'card shadow border position-absolute WFRIframeForm WFRIframeForm-Minimized');

  /**
   * DEBUG: Alertar
   */
  debugManager.debug(this, "FlowExpression4", "Alertar");

  /**
   * Alertar
   */
  ebfAlertMessage.call(this, ebfHtmlGetElementById.call(this, 'minimizedFloatingDivs'));

  /**
   * DEBUG: inclui form na div mimizada
   */
  debugManager.debug(this, "FlowExpression7", "inclui form na div mimizada");

  /**
   * inclui form na div mimizada
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'minimizedFloatingDivs'), '<div class=\"col-sm-3 bg-light border rounded shadow-sm overflow-hidden\" id=\"MinWFRIframeForm8395\"><div class=\"card-header bg-light p-0 d-flex flex-row h-100\">\n<h6 class=\"d-flex align-items-center my-0 mr-auto overflow-hidden\" style=\"user-select: none;\">\n<span class=\"flex-fill mw-100 text-nowrap overflow-hidden p-2\" style=\"text-overflow: ellipsis;\">Chat</span></h6>\n<div class=\"d-flex flex-row\">\n<a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionMinimize\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-window-maximize\" style=\"font-size: 0.7rem;\"></span></a>\n<a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionRefresh\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-redo\" style=\"font-size: 0.8rem;\"></span></a><a class=\"d-flex align-items-center justify-content-center bg-light border-left p-2 OptionClose\" role=\"button\" style=\"cursor: pointer;\">\n<span class=\"py-1 fas fa-times\" style=\"font-size: 0.8rem;\"></span></a></div></div></div>');

  /**
   * DEBUG: Oculta Form
   */
  debugManager.debug(this, "FlowExpression3", "Oculta Form");

  /**
   * Oculta Form
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'WFRIframeForm8395'), 'display', 'none');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Abas - Menu Collapse Opções do Usuário';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Menu Collapse (remove classe navbar-expand-sm)
   */
  debugManager.debug(this, "FlowExpression3", "Menu Collapse (remove classe navbar-expand-sm)");

  /**
   * Menu Collapse (remove classe navbar-expand-sm)
   */
  ebfExecuteCustomJSFunction.call(this, ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'iconsPrincipal'), 'classList'), 'remove', ebfListParamsCreate.call(this, 'navbar-expand-sm'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Formulario Principal - Checa se tem objetivos especificos';
  this.context = new Array();

  // Variáveis
  this.context['qtdObjetivo'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Quantidade de objetivos específicos
   */
  debugManager.debug(this, "FlowExpression1", "Quantidade de objetivos específicos");

  /**
   * Quantidade de objetivos específicos
   */
  this.context['qtdObjetivo'] = ebfGetSessionAttribute.call(this, 'sessaoQtdObjetivo', false);

  /**
   * DEBUG: Qtd = 0?
   */
  debugManager.debug(this, "FlowDecision1", "Qtd = 0?");

  /**
   * Qtd = 0?
   */
  if (parseBoolean(isEqual.call(this, this.context['qtdObjetivo'], parseInt(0)))) {
      
    /**
     * DEBUG: Esconde popNotifications
     */
    debugManager.debug(this, "FlowExpression3", "Esconde popNotifications");

    /**
     * Esconde popNotifications
     */
    ebfFormSetVisible.call(this, 'popNotifications', false);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return parseInt(0);

  } else {

    /**
     * DEBUG: Mostra popNotifications
     */
    debugManager.debug(this, "FlowExpression2", "Mostra popNotifications");

    /**
     * Mostra popNotifications
     */
    ebfFormSetVisible.call(this, 'popNotifications', true);

    /**
     * DEBUG: Altera descrição de popNotifications
     */
    debugManager.debug(this, "FlowExpression8", "Altera descrição de popNotifications");

    /**
     * Altera descrição de popNotifications
     */
    ebfChangeDescription.call(this, 'popNotifications', ebfReplace.call(this, '<span id=\"p_notify\" class=\"badge badge-light m-auto\">:X</span><i class=\"fas fa-bell m-auto\"></i>', ':X', this.context['qtdObjetivo']));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return parseInt(1);

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idLancamento'] = this.checkType(arguments[1], 'Inteiro');

  this.context['idTransacao'] = this.checkType(arguments[2], 'Inteiro');

  this.context['idTomador'] = this.checkType(arguments[3], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Tomador - Pagar Parcela - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Pagar Parcela - Servidor");

  /**
   * Tomador - Pagar Parcela - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Pagar Parcela - Servidor', [this.context['idLancamento'], this.context['idTransacao'], this.context['idTomador']]);

  /**
   * DEBUG: Mensagem de Sucesso
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Parcela paga com sucesso!', null, null);

  /**
   * DEBUG: Desabilia botão
   */
  debugManager.debug(this, "FlowExpression1", "Desabilia botão");

  /**
   * Desabilia botão
   */
  ebfFormSetEnabled.call(this, 'botaoPagar', false);

  /**
   * DEBUG: Executa no principal
   */
  debugManager.debug(this, "FlowExpression2", "Executa no principal");

  /**
   * Executa no principal
   */
  ebfChannelExecuteRuleOnForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Tomador - Pagar Parcela - Executa no principal', ebfListParamsCreate.call(this, null), null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: PreCadastro - Cadastrar - Modal - Agenda
   */
  debugManager.debug(this, "FlowSubRoutine1", "PreCadastro - Cadastrar - Modal - Agenda");

  /**
   * PreCadastro - Cadastrar - Modal - Agenda
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'PreCadastro - Cadastrar - Modal - Agenda', [this.context['tipo'], this.context['cpf'], this.context['cnpj'], this.context['login'], this.context['email'], this.context['confirma'], this.context['termosUso'], this.context['termosCondicoes'], this.context['nome'], this.context['dtNascimento'], this.context['modal']]);

  /**
   * DEBUG: Fecha modal
   */
  debugManager.debug(this, "FlowExpression1", "Fecha modal");

  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * DEBUG: Habilita MakerButton1
   */
  debugManager.debug(this, "FlowExpression4", "Habilita MakerButton1");

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * DEBUG: Refresh Recaptcha
   */
  debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * DEBUG: Limpa Campos
   */
  debugManager.debug(this, "FlowSubRoutine2", "Limpa Campos");

  /**
   * Limpa Campos
   */
  new GenericosLimparCampos(this, this.getSystem(), this.getForm()).run(parseInt(464570527), 'MakerEdit2,cpf,MakerEdit1,email,emailConfirma,EDTNM_FORNEC2,dtNascimento');

  /**
   * DEBUG: PreCadastro - Limpar Termos
   */
  debugManager.debug(this, "FlowSubRoutine4", "PreCadastro - Limpar Termos");

  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * DEBUG: Retorno nulo?
   */
  debugManager.debug(this, "FlowDecision1", "Retorno nulo?");

  /**
   * Retorno nulo?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
      
    /**
     * DEBUG: Mensagem de Sucesso
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Sucesso");

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage('Pré Cadastro Efetuado!', 'A senha foi enviada para o e-mail informado. O acesso ao sistema será liberado após a conferência das informaçoes.', null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage(this.context['retorno']);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd5", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Retirar modal';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision2", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Ocultar spinner
     */
    debugManager.debug(this, "FlowExpression3", "Ocultar spinner");

    /**
     * Ocultar spinner
     */
    ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'none');

    /**
     * DEBUG: Altera descrição de MakerButton1
     */
    debugManager.debug(this, "FlowExpression11", "Altera descrição de MakerButton1");

    /**
     * Altera descrição de MakerButton1
     */
    ebfChangeDescription.call(this, 'MakerButton1', 'Cadastrar     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:none\" id=\"spinner\"></div>');

    return this.FlowExpression4();

  } else {

    /**
     * DEBUG: Fecha modal
     */
    debugManager.debug(this, "FlowExpression1", "Fecha modal");

    /**
     * Fecha modal
     */
    ebfBootstrapCloseModal.call(this, this.context['modal']);

    return this.FlowExpression4();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

PrecadastroRetirarModal.prototype.FlowExpression4 = function() {

    /**
     * DEBUG: Habilita MakerButton1
     */
    debugManager.debug(this, "FlowExpression4", "Habilita MakerButton1");

    /**
     * Habilita MakerButton1
     */
    ebfFormSetEnabled.call(this, 'MakerButton1', true);

    /**
     * DEBUG: Retorno nulo ou vazio?
     */
    debugManager.debug(this, "FlowDecision1", "Retorno nulo ou vazio?");

    /**
     * Retorno nulo ou vazio?
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
        
      /**
       * DEBUG: Mensagem de Sucesso
       */
      debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Pré Cadastro Efetuado!', 'A senha foi enviada para o e-mail informado. O acesso ao sistema será liberado após a conferência das informaçoes.', null, null);

      /**
       * DEBUG: Limpar Campos
       */
      debugManager.debug(this, "FlowSubRoutine1", "Limpar Campos");

      /**
       * Limpar Campos
       */
      new GenericosLimparCampos(this, this.getSystem(), this.getForm()).run(ebfGetGUIDActualForm.call(this), 'MakerEdit2,cpf,MakerEdit1,email,emailConfirma,EDTNM_FORNEC2');

      /**
       * DEBUG: PreCadastro - Limpar Termos
       */
      debugManager.debug(this, "FlowSubRoutine4", "PreCadastro - Limpar Termos");

      /**
       * PreCadastro - Limpar Termos
       */
      new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Mensagem de Alerta (Clássico)
       */
      debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta (Clássico)");

      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage(this.context['retorno']);

      /**
       * DEBUG: Refresh Recaptcha
       */
      debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

      /**
       * Refresh Recaptcha
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: PreCadastro - Limpar Termos
       */
      debugManager.debug(this, "FlowSubRoutine2", "PreCadastro - Limpar Termos");

      /**
       * PreCadastro - Limpar Termos
       */
      new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Retirar modal - Erro';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Fecha modal
   */
  debugManager.debug(this, "FlowExpression1", "Fecha modal");

  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * DEBUG: Habilita MakerButton1
   */
  debugManager.debug(this, "FlowExpression4", "Habilita MakerButton1");

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * DEBUG: Refresh Recaptcha
   */
  debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * DEBUG: PreCadastro - Limpar Termos
   */
  debugManager.debug(this, "FlowSubRoutine2", "PreCadastro - Limpar Termos");

  /**
   * PreCadastro - Limpar Termos
   */
  new PrecadastroLimparTermos(this, this.getSystem(), this.getForm()).run();

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'PreCadastro - Retirar modal - Sub';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Fecha modal
   */
  debugManager.debug(this, "FlowExpression1", "Fecha modal");

  /**
   * Fecha modal
   */
  ebfBootstrapCloseModal.call(this, this.context['modal']);

  /**
   * DEBUG: Habilita MakerButton1
   */
  debugManager.debug(this, "FlowExpression4", "Habilita MakerButton1");

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'MakerButton1', true);

  /**
   * DEBUG: Refresh Recaptcha
   */
  debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

  /**
   * Refresh Recaptcha
   */
  ebfExecuteJS.call(this, 'grecaptcha.reset();');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Genericos - Limpar Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idFormulario'] = this.checkType(arguments[0], 'Inteiro');

  this.context['camposLimpar'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  this.context['contador'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['camposLimpar'], ',');

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe componente?");

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Limpar Campo
       */
      debugManager.debug(this, "FlowExpression21", "Limpar Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GenericosLimparCampos.prototype.FlowConnector2 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Genericos - Habilita/Desabilita Campos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe Componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe Componente?");

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Habilita Campo
       */
      debugManager.debug(this, "FlowExpression21", "Habilita Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GenericosHabilitaDesabilitaCampos.prototype.FlowConnector1 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Genericos - Habilita/Desabilita na Moldura';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Letras');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = ebfSplit.call(this, this.context['nomeCampos'], ',');

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe Componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe Componente?");

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Habilita Campo
       */
      debugManager.debug(this, "FlowExpression21", "Habilita Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GenericosHabilitaDesabilitaNaMoldura.prototype.FlowConnector1 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Cadastrar - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  this.context['confirma'] = this.checkType(arguments[2], 'Letras');

  this.context['nome'] = this.checkType(arguments[3], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Desabilita cadastrar
   */
  debugManager.debug(this, "FlowExpression2", "Desabilita cadastrar");

  /**
   * Desabilita cadastrar
   */
  ebfFormSetEnabled.call(this, 'cadastrar', false);

  /**
   * DEBUG: Mostra spinner
   */
  debugManager.debug(this, "FlowExpression3", "Mostra spinner");

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'inline-block');

  /**
   * DEBUG: Altera descrição de cadastrar
   */
  debugManager.debug(this, "FlowExpression11", "Altera descrição de cadastrar");

  /**
   * Altera descrição de cadastrar
   */
  ebfChangeDescription.call(this, 'cadastrar', 'Aguarde...     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:inline-block\" id=\"spinner\"></div>');

  /**
   * DEBUG: Executa fluxo servidor assíncrono
   */
  debugManager.debug(this, "FlowExpression6", "Executa fluxo servidor assíncrono");

  /**
   * Executa fluxo servidor assíncrono
   */
  ebfAsyncJavaFlowExecute.call(this, 'Cadastro - Cadastrar - Verificações', ebfListParamsCreate.call(this, this.context['cpf'], this.context['email'], this.context['confirma'], null, null, this.context['nome']), 'Cadastro - Callback', ebfListParamsCreate.call(this, null, null), 'Cadastro - Callback', ebfListParamsCreate.call(this, null, null));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Validação - Cria link expirado';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['hash'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Importar css
   */
  debugManager.debug(this, "FlowExpression2", "Importar css");

  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

  /**
   * DEBUG: Altera mensagem
   */
  debugManager.debug(this, "FlowExpression3", "Altera mensagem");

  /**
   * Altera mensagem
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'msg', '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: larger;\">Link Expirado! Solicite um novo link clicando <a id=\"link\" href=\"#\"><font style=\"color:#2E7D32\">aqui</font></a></span>\n</center>');

  /**
   * DEBUG: Associa evento ao id
   */
  debugManager.debug(this, "FlowExpression4", "Associa evento ao id");

  /**
   * Associa evento ao id
   */
  ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetElementById.call(this, 'link'), 'onclick', 'Verificacao - Envia novo link', ebfListParamsCreate.call(this, this.context['hash']), false);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);

  this.context['contador'] = parseInt(0);

  /**
   * DEBUG: Obtem lista variante
   */
  debugManager.debug(this, "FlowExpression1", "Obtem lista variante");

  /**
   * Obtem lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaColunas'], ',');

  /**
   * DEBUG: Tamanho da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Tamanho da Lista");

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * DEBUG: Contador <= Tamanho da Lista?
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista?");

  /**
   * Contador <= Tamanho da Lista?
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * DEBUG: Coluna inexistente?
     */
    debugManager.debug(this, "FlowDecision2", "Coluna inexistente?");

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
       * DEBUG: Altera alinhamento
       */
      debugManager.debug(this, "FlowExpression4", "Altera alinhamento");

      /**
       * Altera alinhamento
       */
      ebfGridSetAlignColumn.call(this, this.context['grade'], ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador']), this.context['posicao']);

      var FlowExpression3 = this.FlowExpression3();
      if (!(FlowExpression3 instanceof InvalidVariant)) {
        return FlowExpression3;
      }

    }

  /**
   * DEBUG: Contador <= Tamanho da Lista?
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GeralAlterarCentralizacaoDasColunasDaGrade.prototype.FlowExpression3 = function() {

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression3", "Incrementa contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Validação - Ao entrar';
  this.context = new Array();

  // Variáveis
  this.context['hash'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision2", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowSubRoutine1();

  } else {

    /**
     * DEBUG: Timer
     */
    debugManager.debug(this, "FlowExpression3", "Timer");

    /**
     * Timer
     */
    ebfTimerCreate.call(this, 'timer', ebfGetGUIDActualForm.call(this), 'temporizador');

    /**
     * DEBUG: Timer
     */
    debugManager.debug(this, "FlowExpression5", "Timer");

    /**
     * Timer
     */
    ebfTimerStart.call(this, 'timer');

    return this.FlowSubRoutine1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

ValidacaoAoEntrar.prototype.FlowSubRoutine1 = function() {

    /**
     * DEBUG: Geral - Define <title> do form externo
     */
    debugManager.debug(this, "FlowSubRoutine1", "Geral - Define <title> do form externo");

    /**
     * Geral - Define <title> do form externo
     */
    new GeralDefineTitleDoFormExterno(this, this.getSystem(), this.getForm()).run('Peg2Pag - Validação de Cadastro');

    /**
     * DEBUG: Obtem hash
     */
    debugManager.debug(this, "FlowExpression1", "Obtem hash");

    /**
     * Obtem hash
     */
    this.context['hash'] = ebfRequestGetParameter.call(this, 'validator');

    /**
     * DEBUG: Hash nulo ou vazio?
     */
    debugManager.debug(this, "FlowDecision1", "Hash nulo ou vazio?");

    /**
     * Hash nulo ou vazio?
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['hash']))) {
        
      /**
       * DEBUG: Importar css
       */
      debugManager.debug(this, "FlowExpression2", "Importar css");

      /**
       * Importar css
       */
      ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

      /**
       * DEBUG: Define conteúdo
       */
      debugManager.debug(this, "FlowExpression4", "Define conteúdo");

      /**
       * Define conteúdo
       */
      ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span>Link inválido!</span>\n</center>');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Validação - Ao entrar - Servidor
       */
      debugManager.debug(this, "FlowSubRoutine2", "Validação - Ao entrar - Servidor");

      /**
       * Validação - Ao entrar - Servidor
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Validação - Ao entrar - Servidor', [this.context['hash']]);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Verificacao - Envia novo link';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['hash'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Mostra spinner
   */
  debugManager.debug(this, "FlowExpression1", "Mostra spinner");

  /**
   * Mostra spinner
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"spinner-border spinner-border-sm text-success\" role=\"status\">\n</div>\n &nbsp;&nbsp;<span style=\"\nfont-size: large;\n\">Gerando novo link</span>');

  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision1", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Executar fluxo servidor assíncrono
     */
    debugManager.debug(this, "FlowExpression2", "Executar fluxo servidor assíncrono");

    /**
     * Executar fluxo servidor assíncrono
     */
    ebfAsyncJavaFlowExecute.call(this, 'Verificacao - Envia novo link - Servidor', ebfListParamsCreate.call(this, this.context['hash']), 'Verificacao - Envia novo link - Callback True', ebfListCreate.call(this), 'Verificacao - Envia novo link - Callback True', ebfListCreate.call(this));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Verificacao - Envia novo link - Servidor
     */
    debugManager.debug(this, "FlowSubRoutine1", "Verificacao - Envia novo link - Servidor");

    /**
     * Verificacao - Envia novo link - Servidor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Verificacao - Envia novo link - Servidor', [this.context['hash']]);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Executa no principal';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Executa no filho
   */
  debugManager.debug(this, "FlowExpression1", "Executa no filho");

  /**
   * Executa no filho
   */
  ebfChannelExecuteRuleOnForm.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'Tomador - Pagar Parcela - Executa na moldura', ebfListParamsCreate.call(this, null), null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Verificacao - Envia novo link - Callback Error';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');

  debugManager.startRule(this);


  /**
   * DEBUG: Importar css
   */
  debugManager.debug(this, "FlowExpression2", "Importar css");

  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.error-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.error-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #d15652;\n}\n.error-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.error-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.error-checkmark .check-icon::before, .error-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.error-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #d15652;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.error-checkmark .check-icon .icon-line.line-tip {\n  top: 36px;\n  left: 6px;\n  width: 67px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.error-checkmark .check-icon .icon-line.line-long {\n  top: 36px;\n  right: 6px;\n  width: 67px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.error-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(209, 86, 82, 0.5);\n}\n.error-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n\n@keyframes rotate-circle {\n    0% {\n      transform: rotate(-45deg);\n    }\n    5% {\n      transform: rotate(-45deg);\n    }\n    12% {\n      transform: rotate(-405deg);\n    }\n    100% {\n      transform: rotate(-405deg);\n    }\n  }\n  @keyframes icon-line-tip {\n    0% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    54% {\n      width: 0;\n      left: 1px;\n      top: 19px;\n    }\n    70% {\n      width: 50px;\n      left: -8px;\n      top: 37px;\n    }\n    84% {\n      width: 17px;\n      left: 21px;\n      top: 48px;\n    }\n    100% {\n      width: 25px;\n      left: 14px;\n      top: 45px;\n    }\n  }\n  @keyframes icon-line-long {\n    0% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    65% {\n      width: 0;\n      right: 46px;\n      top: 54px;\n    }\n    84% {\n      width: 55px;\n      right: 0px;\n      top: 35px;\n    }\n    100% {\n      width: 47px;\n      right: 8px;\n      top: 38px;\n    }\n  }', null);

  /**
   * DEBUG: Define conteúdo
   */
  debugManager.debug(this, "FlowExpression4", "Define conteúdo");

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"error-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Cadastro não encontrado!</span>\n</center>');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Validação - Sucesso';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');

  debugManager.startRule(this);


  /**
   * DEBUG: Importar css
   */
  debugManager.debug(this, "FlowExpression2", "Importar css");

  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.success-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.success-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #4CAF50;\n}\n.success-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.success-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.success-checkmark .check-icon::before, .success-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.success-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #4CAF50;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.success-checkmark .check-icon .icon-line.line-tip {\n  top: 46px;\n  left: 14px;\n  width: 25px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.success-checkmark .check-icon .icon-line.line-long {\n  top: 38px;\n  right: 8px;\n  width: 47px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.success-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(76, 175, 80, 0.5);\n}\n.success-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n@keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}', null);

  /**
   * DEBUG: Define conteúdo
   */
  debugManager.debug(this, "FlowExpression4", "Define conteúdo");

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"success-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Cadastro validado com sucesso! Aguarde enquanto redirecionamos para a tela de login</span>\n</center>');

  /**
   * DEBUG: Validação - Redireciona
   */
  debugManager.debug(this, "FlowExpression1", "Validação - Redireciona");

  /**
   * Validação - Redireciona
   */
  ebfRuleSchedulerNoParent.call(this, 'Validação - Redirecionar para login', ebfListCreate.call(this), parseFloat(3000));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Emprestimo - Simulação - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipo'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['retorno'] = 0;

  this.context['vsTomadorFinalizarQuestionario'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Carrega html da timeline
   */
  debugManager.debug(this, "FlowExpression1", "Carrega html da timeline");

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'parcelas'), '<div class=\"container\">\n   <div class=\"row\">\n      <div class=\"col-md-6\">\n         <h4>Simulação - Parcelas</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n          Suas parcelas serão mostradas aqui\n         </ul>\n      </div>\n   \n   </div>\n<div class=\"row\">\n   <div class=\"col-md-2\">\n         <span> </span>\n  </div>\n</div>\n</div>');

  /**
   * DEBUG: Inicializa tooltip
   */
  debugManager.debug(this, "FlowExpression2", "Inicializa tooltip");

  /**
   * Inicializa tooltip
   */
  ebfExecuteJS.call(this, '$(document).ready(function(){\n  $(\'[data-toggle=\"tooltip\"]\').tooltip();   \n});');

  /**
   * DEBUG: Obtem vsTomadorFinalizarQuestionario
   */
  debugManager.debug(this, "FlowExpression3", "Obtem vsTomadorFinalizarQuestionario");

  /**
   * Obtem vsTomadorFinalizarQuestionario
   */
  this.context['vsTomadorFinalizarQuestionario'] = ebfGetSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', false);

  /**
   * DEBUG: Altera descrição de valorSimulacao
   */
  debugManager.debug(this, "FlowExpression5", "Altera descrição de valorSimulacao");

  /**
   * Altera descrição de valorSimulacao
   */
  ebfChangeDescription.call(this, 'valorSimulacao', 'Digite o Valor Desejado <span id=\"alertaBadge\" class=\"badge badge-warning\"  data-toggle=\"tooltip\" data-placement=\"right\" title=\"Valor Estimado. O valor final pode ser menor do que o estimado.\">!</span>');

  /**
   * DEBUG: vsTomadorFinalizarQuestionario = 1?
   */
  debugManager.debug(this, "FlowDecision2", "vsTomadorFinalizarQuestionario = 1?");

  /**
   * vsTomadorFinalizarQuestionario = 1?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['vsTomadorFinalizarQuestionario']), toLong.call(this, parseInt(1))))) {
      
    /**
     * DEBUG: Remove vsTomadorFinalizarQuestionario
     */
    debugManager.debug(this, "FlowExpression4", "Remove vsTomadorFinalizarQuestionario");

    /**
     * Remove vsTomadorFinalizarQuestionario
     */
    ebfRemoveSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', false);

    return this.FlowSubRoutine2();

  } else {

    /**
     * DEBUG: True?
     */
    debugManager.debug(this, "FlowDecision4", "True?");

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Emprestimo - Checa se respondeu questionario
       */
      debugManager.debug(this, "FlowSubRoutine1", "Emprestimo - Checa se respondeu questionario");

      /**
       * Emprestimo - Checa se respondeu questionario
       */
      this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Checa se respondeu questionario', [this.context['idPessoa'], this.context['tipo']]);

      /**
       * DEBUG: Retorno igual a 0?
       */
      debugManager.debug(this, "FlowDecision1", "Retorno igual a 0?");

      /**
       * Retorno igual a 0?
       */
      if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
          
        return this.FlowSubRoutine2();

      } else {

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

EmprestimoSimulacaoAoEntrar.prototype.FlowSubRoutine2 = function() {

    /**
     * DEBUG: Geral - Ativar Aba
     */
    debugManager.debug(this, "FlowSubRoutine2", "Geral - Ativar Aba");

    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run('Simular Empréstimo');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Verificacao - Envia novo link - Callback True';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');

  debugManager.startRule(this);


  /**
   * DEBUG: Importar css
   */
  debugManager.debug(this, "FlowExpression2", "Importar css");

  /**
   * Importar css
   */
  ebfCSSImportContent.call(this, '/**\n * Extracted from: SweetAlert\n * Modified by: Istiak Tridip\n */\n.success-checkmark {\n  width: 80px;\n  height: 115px;\n  margin: 0 auto;\n}\n.success-checkmark .check-icon {\n  width: 80px;\n  height: 80px;\n  position: relative;\n  border-radius: 50%;\n  box-sizing: content-box;\n  border: 4px solid #4CAF50;\n}\n.success-checkmark .check-icon::before {\n  top: 3px;\n  left: -2px;\n  width: 30px;\n  transform-origin: 100% 50%;\n  border-radius: 100px 0 0 100px;\n}\n.success-checkmark .check-icon::after {\n  top: 0;\n  left: 30px;\n  width: 60px;\n  transform-origin: 0 50%;\n  border-radius: 0 100px 100px 0;\n  animation: rotate-circle 4.25s ease-in;\n}\n.success-checkmark .check-icon::before, .success-checkmark .check-icon::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  background: #FFFFFF;\n  transform: rotate(-45deg);\n}\n.success-checkmark .check-icon .icon-line {\n  height: 5px;\n  background-color: #4CAF50;\n  display: block;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n}\n.success-checkmark .check-icon .icon-line.line-tip {\n  top: 46px;\n  left: 14px;\n  width: 25px;\n  transform: rotate(45deg);\n  animation: icon-line-tip 0.75s;\n}\n.success-checkmark .check-icon .icon-line.line-long {\n  top: 38px;\n  right: 8px;\n  width: 47px;\n  transform: rotate(-45deg);\n  animation: icon-line-long 0.75s;\n}\n.success-checkmark .check-icon .icon-circle {\n  top: -4px;\n  left: -4px;\n  z-index: 10;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  box-sizing: content-box;\n  border: 4px solid rgba(76, 175, 80, 0.5);\n}\n.success-checkmark .check-icon .icon-fix {\n  top: 8px;\n  width: 5px;\n  left: 26px;\n  z-index: 1;\n  height: 85px;\n  position: absolute;\n  transform: rotate(-45deg);\n  background-color: #FFFFFF;\n}\n\n@keyframes rotate-circle {\n  0% {\n    transform: rotate(-45deg);\n  }\n  5% {\n    transform: rotate(-45deg);\n  }\n  12% {\n    transform: rotate(-405deg);\n  }\n  100% {\n    transform: rotate(-405deg);\n  }\n}\n@keyframes icon-line-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px;\n  }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px;\n  }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px;\n  }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px;\n  }\n}\n@keyframes icon-line-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px;\n  }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px;\n  }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px;\n  }\n}', null);

  /**
   * DEBUG: Define conteúdo
   */
  debugManager.debug(this, "FlowExpression4", "Define conteúdo");

  /**
   * Define conteúdo
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'msg'), '<div class=\"success-checkmark\">\n  <div class=\"check-icon\">\n    <span class=\"icon-line line-tip\"></span>\n    <span class=\"icon-line line-long\"></span>\n    <div class=\"icon-circle\"></div>\n    <div class=\"icon-fix\"></div>\n  </div>\n</div>\n<center>\n  <span style=\"font-size: large;\">Link gerado com sucesso! Cheque sua caixa postal</span>\n</center>');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Validar e-mail';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[2], 'Componente');

  this.context['mensagem'] = this.checkType(arguments[3], 'Letras');

  // Variáveis
  this.context['validacao'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: E-mail nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "E-mail nulo ou vazio?");

  /**
   * E-mail nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['email']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Validar e-mail
     */
    debugManager.debug(this, "FlowExpression3", "Validar e-mail");

    /**
     * Validar e-mail
     */
    this.context['validacao'] = ebfIsEmail.call(this, this.context['email']);

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision1", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Limpa componente
       */
      debugManager.debug(this, "FlowExpression1", "Limpa componente");

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * DEBUG: placeholder
       */
      debugManager.debug(this, "FlowExpression14", "placeholder");

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'email')), parseInt(1)), 'placeholder', 'Verifique o e-mail');

      /**
       * DEBUG: Focar componente
       */
      debugManager.debug(this, "FlowExpression5", "Focar componente");

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackemail', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression6", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], null);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression7", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], false);

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackemail', null);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Visualizar Documento';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipoDoc'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['url'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Geral - Visualizar Documento - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Visualizar Documento - Servidor");

  /**
   * Geral - Visualizar Documento - Servidor
   */
  this.context['url'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Visualizar Documento - Servidor', [this.context['idPessoa'], this.context['tipoDoc']]);

  /**
   * DEBUG: Abrir url em outra janela
   */
  debugManager.debug(this, "FlowExpression1", "Abrir url em outra janela");

  /**
   * Abrir url em outra janela
   */
  OpenURLOnNewWindow.call(this, this.context['url'], null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Abas - Formulário Principal - Abre objetivos';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['item'] = this.checkType(arguments[0], 'Letras');

  this.context['descricao'] = this.checkType(arguments[1], 'Letras');

  this.context['tipo'] = this.checkType(arguments[2], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: É FORM ?
   */
  debugManager.debug(this, "FlowDecision1", "É FORM ?");

  /**
   * É FORM ?
   */
  if (parseBoolean(isEqual.call(this, this.context['tipo'], '1'))) {
      
    /**
     * DEBUG: Abrir Formulário
     */
    debugManager.debug(this, "FlowExpression1", "Abrir Formulário");

    /**
     * Abrir Formulário
     */
    new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', this.context['item'], 'Objetivos Específicos', null);


    return this.FlowEnd1();

  } else {

    /**
     * DEBUG: É REPORT ?
     */
    debugManager.debug(this, "FlowDecision2", "É REPORT ?");

    /**
     * É REPORT ?
     */
    if (parseBoolean(isEqual.call(this, this.context['tipo'], '2'))) {
        
      /**
       * DEBUG: Abre report
       */
      debugManager.debug(this, "FlowExpression4", "Abre report");

      /**
       * Abre report
       */
      ebfOpenReport.call(this, this.context['item'], null, null, this.context['descricao']);

      return this.FlowConnector3();

    } else {

      /**
       * DEBUG: É FLOW ?
       */
      debugManager.debug(this, "FlowDecision3", "É FLOW ?");

      /**
       * É FLOW ?
       */
      if (parseBoolean(isEqual.call(this, this.context['tipo'], '3'))) {
          
        /**
         * DEBUG: Executa fluxo
         */
        debugManager.debug(this, "FlowExpression6", "Executa fluxo");

        /**
         * Executa fluxo
         */
        ebfFlowExecute.call(this, this.context['item'], ebfListCreate.call(this));

        return this.FlowConnector4();

      } else {

        /**
         * DEBUG: É ACTION ?
         */
        debugManager.debug(this, "FlowDecision5", "É ACTION ?");

        /**
         * É ACTION ?
         */
        if (parseBoolean(isEqual.call(this, this.context['tipo'], '4'))) {
            
          /**
           * DEBUG: Executa ação
           */
          debugManager.debug(this, "FlowExpression3", "Executa ação");

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

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Validar e-mail confirmacao';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['email'] = this.checkType(arguments[0], 'Letras');

  this.context['confirmacaoEmail'] = this.checkType(arguments[1], 'Letras');

  this.context['componente'] = this.checkType(arguments[2], 'Componente');

  this.context['componenteMsg'] = this.checkType(arguments[3], 'Letras');

  this.context['mensagem'] = this.checkType(arguments[4], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Algum e-mail nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "Algum e-mail nulo ou vazio?");

  /**
   * Algum e-mail nulo ou vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirmacaoEmail'])))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: E-mails iguais?
     */
    debugManager.debug(this, "FlowDecision1", "E-mails iguais?");

    /**
     * E-mails iguais?
     */
    if (parseBoolean(isEqual.call(this, ebfTrim.call(this, this.context['email']), ebfTrim.call(this, this.context['confirmacaoEmail'])))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: True
       */
      debugManager.debug(this, "FlowDecision3", "True");

      /**
       * True
       */
      if (parseBoolean(true)) {
          
        /**
         * DEBUG: Limpa componente
         */
        debugManager.debug(this, "FlowExpression1", "Limpa componente");

        /**
         * Limpa componente
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

        /**
         * DEBUG: Atribui class is-invalid
         */
        debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

        /**
         * Atribui class is-invalid
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(2)), 'class', 'form-control is-invalid');

        /**
         * DEBUG: placeholder
         */
        debugManager.debug(this, "FlowExpression14", "placeholder");

        /**
         * placeholder
         */
        ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'emailConfirmacao')), parseInt(1)), 'placeholder', 'Os e-mails são diferentes!');

        /**
         * DEBUG: Focar componente
         */
        debugManager.debug(this, "FlowExpression5", "Focar componente");

        /**
         * Focar componente
         */
        ebfFormSetFocus.call(this, this.context['componente']);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Altera mensagem
         */
        debugManager.debug(this, "FlowExpression2", "Altera mensagem");

        /**
         * Altera mensagem
         */
        ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componenteMsg'], this.context['mensagem']);

        /**
         * DEBUG: Mostra mensagem
         */
        debugManager.debug(this, "FlowExpression4", "Mostra mensagem");

        /**
         * Mostra mensagem
         */
        ebfFormSetVisible.call(this, this.context['componenteMsg'], true);

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression12", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', null);

        /**
         * DEBUG: Conteúdo da moldura feedback
         */
        debugManager.debug(this, "FlowExpression9", "Conteúdo da moldura feedback");

        /**
         * Conteúdo da moldura feedback
         */
        ebgChangeValueGroupBox.call(this, 'feedbackconfirma', ebfReplace.call(this, '<div class=\"form-group\" style=\"color:#dc3545 !important;\">:MSG:</div>', ':MSG:', this.context['mensagem']));

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Abas - Formulário Principal - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['ListaRetorno'] = null;

  this.context['backdrop'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Template - Formulário Principal - Ao Entrar (Servidor)
   */
  debugManager.debug(this, "FlowSubRoutine1", "Template - Formulário Principal - Ao Entrar (Servidor)");

  /**
   * Template - Formulário Principal - Ao Entrar (Servidor)
   */
  this.context['ListaRetorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Template - Formulário Principal - Ao Entrar (Servidor)');

  /**
   * DEBUG: Altera o Nome do Usuário
   */
  debugManager.debug(this, "FlowExpression10", "Altera o Nome do Usuário");

  /**
   * Altera o Nome do Usuário
   */
  ebfFormChangeComponentValue.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

  /**
   * DEBUG: Altera Hint
   */
  debugManager.debug(this, "FlowExpression2", "Altera Hint");

  /**
   * Altera Hint
   */
  ebfSetHint.call(this, 'userName', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(1)));

  /**
   * DEBUG: Abas - Menu Collapse Opções do Usuário
   */
  debugManager.debug(this, "FlowSubRoutine18", "Abas - Menu Collapse Opções do Usuário");

  /**
   * Abas - Menu Collapse Opções do Usuário
   */
  new AbasMenuCollapseOpcoesDoUsuario(this, this.getSystem(), this.getForm()).run();

  /**
   * DEBUG: Criar backdrop
   */
  debugManager.debug(this, "FlowExpression3", "Criar backdrop");

  /**
   * Criar backdrop
   */
  this.context['backdrop'] = ebfHtmlCreateHtmlElement.call(this, 'div', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'backdrop-shortcut'), ebfListParamsCreate.call(this, 'class', 'backdrop-shortcut')), ebfHtmlGetBodyElement.call(this));

  /**
   * DEBUG: Associar evento onclick ao Backdrop
   */
  debugManager.debug(this, "FlowExpression1", "Associar evento onclick ao Backdrop");

  /**
   * Associar evento onclick ao Backdrop
   */
  ebfHtmlAttachFlowEvent.call(this, this.context['backdrop'], 'onclick', 'Template - Oculta Backdrop de Atalhos', null, null);

  /**
   * DEBUG: Obter Menu Collapse
   */
  debugManager.debug(this, "FlowExpression7", "Obter Menu Collapse");

  /**
   * Obter Menu Collapse
   */
  ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'navbar-toggler', ebfHtmlGetElementById.call(this, 'icons')), parseInt(1));

  /**
   * DEBUG: Associar evento onclick ao Formulario
   */
  debugManager.debug(this, "FlowExpression5", "Associar evento onclick ao Formulario");

  /**
   * Associar evento onclick ao Formulario
   */
  ebfHtmlAttachFlowEvent.call(this, ebfHtmlGetBodyElement.call(this), 'onclick', 'Template - Ao Clicar no Item do Menu (Ação)', null, true);

  /**
   * DEBUG: Altera css
   */
  debugManager.debug(this, "FlowExpression9", "Altera css");

  /**
   * Altera css
   */
  ebfCSSImportContent.call(this, '.headerButton{\n    background-color: #055f94 !important;;\n  }\n    \n  .sorterButton{\n    background-color: #055f94 !important;;\n  }\n    \n  .listGrid [role=\"toolbar\"] {\n    background-color:  #055f94 !important;;\n  }\n\n#popNotifications  [type=\"button\"] {\n  background: #ffca28 !important;\n}\n\n\n#popNotifications  [type=\"button\"]:hover {\n  background: #c79a00 !important;\n}\n', null);

  /**
   * DEBUG: Altera agência
   */
  debugManager.debug(this, "FlowExpression6", "Altera agência");

  /**
   * Altera agência
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'agencia', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(6)));

  /**
   * DEBUG: Altera saldo
   */
  debugManager.debug(this, "FlowExpression8", "Altera saldo");

  /**
   * Altera saldo
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'saldo', ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(7)));

  /**
   * DEBUG: Geral - Define <title> do form externo
   */
  debugManager.debug(this, "FlowSubRoutine2", "Geral - Define <title> do form externo");

  /**
   * Geral - Define <title> do form externo
   */
  new GeralDefineTitleDoFormExterno(this, this.getSystem(), this.getForm()).run('Teste');

  /**
   * DEBUG: Style do userImageContainer
   */
  debugManager.debug(this, "FlowExpression11", "Style do userImageContainer");

  /**
   * Style do userImageContainer
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetMakerElementById.call(this, 'userImageContainer'), 'style', 'top: 5px; width: 22.7317%; height: 71px;min-height: 71px; z-index: 1;max-width: 310px !important; right: 1%;');

  /**
   * DEBUG: Adm Geral ou do Sistema ?
   */
  debugManager.debug(this, "FlowDecision1", "Adm Geral ou do Sistema ?");

  /**
   * Adm Geral ou do Sistema ?
   */
  if (parseBoolean(toBoolean.call(this, ebfGetElementFromList.call(this, this.context['ListaRetorno'], parseInt(3))))) {
      
    return this.FlowEnd2();

  } else {

    /**
     * DEBUG: Oculta Menu Adm
     */
    debugManager.debug(this, "FlowSubRoutine3", "Oculta Menu Adm");

    /**
     * Oculta Menu Adm
     */
    new TemplateOcultaOuExibeElemento(this, this.getSystem(), this.getForm()).run('false', null, ebfListParamsCreate.call(this, 'icons', 'IconButtonContainer'));

    return this.FlowEnd2();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

AbasFormularioPrincipalAoEntrar.prototype.FlowEnd2 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: True
   */
  debugManager.debug(this, "FlowDecision2", "True");

  /**
   * True
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Algum campo vazio?
     */
    debugManager.debug(this, "FlowDecision3", "Algum campo vazio?");

    /**
     * Algum campo vazio?
     */
    if (parseBoolean((isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['confirma']) || isNullOrEmpty.call(this, this.context['nome'])))) {
        
      /**
       * DEBUG: Mensagem de Alerta
       */
      debugManager.debug(this, "FlowActivity3", "Mensagem de Alerta");

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

      /**
       * DEBUG: Refresh
       */
      debugManager.debug(this, "FlowExpression1", "Refresh");

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Cadastro - Cadastrar - Cliente
       */
      debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Cadastrar - Cliente");

      /**
       * Cadastro - Cadastrar - Cliente
       */
      new CadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['cpf'], this.context['email'], this.context['confirma'], this.context['nome']);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * DEBUG: PreCadastro - Verificar Termos
     */
    debugManager.debug(this, "FlowSubRoutine3", "PreCadastro - Verificar Termos");

    /**
     * PreCadastro - Verificar Termos
     */
    this.context['retornoTermos'] = new PrecadastroVerificarTermos(this, this.getSystem(), this.getForm()).run('', '');

    /**
     * DEBUG: Termos confirmados?
     */
    debugManager.debug(this, "FlowDecision8", "Termos confirmados?");

    /**
     * Termos confirmados?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoTermos']), toLong.call(this, parseInt(0))))) {
        
      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd4", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Refresh
       */
      debugManager.debug(this, "FlowExpression7", "Refresh");

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd8", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Validação - Redirecionar para login';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Abrir url na mesma janela
   */
  debugManager.debug(this, "FlowExpression1", "Abrir url na mesma janela");

  /**
   * Abrir url na mesma janela
   */
  ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/open.do?sys=P2P'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Habilita/Desabilita Campos - Com Lista';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeCampos'] = this.checkType(arguments[0], 'Variante');

  this.context['condicao'] = this.checkType(arguments[1], 'Lógico');

  // Variáveis
  this.context['contador'] = 0;

  this.context['lista'] = null;

  this.context['QtdCampos'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Lista do nome dos Campos
   */
  debugManager.debug(this, "FlowExpression1", "Lista do nome dos Campos");

  /**
   * Lista do nome dos Campos
   */
  this.context['lista'] = this.context['nomeCampos'];

  /**
   * DEBUG: Total de Elementos da Lista
   */
  debugManager.debug(this, "FlowExpression2", "Total de Elementos da Lista");

  /**
   * Total de Elementos da Lista
   */
  this.context['QtdCampos'] = ebfListLength.call(this, this.context['lista']);

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");

  /**
   * Total < Contador?
   */
  while (parseBoolean(isMinor.call(this, this.context['contador'], this.context['QtdCampos']))) {

    /**
     * DEBUG: Existe Componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe Componente?");

    /**
     * Existe Componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, toString.call(this, ebfGetElementFromList.call(this, this.context['lista'], oprAdd.call(this, this.context['contador'], parseInt(1))))))) {
        
      /**
       * DEBUG: Habilita Campo
       */
      debugManager.debug(this, "FlowExpression21", "Habilita Campo");

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

  /**
   * DEBUG: Total < Contador?
   */
  debugManager.debug(this, "FlowDecision1", "Total < Contador?");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GeralHabilitaDesabilitaCamposComLista.prototype.FlowConnector1 = function() {

    /**
     * DEBUG: Incrementa Contador
     */
    debugManager.debug(this, "FlowExpression4", "Incrementa Contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao clicar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['email'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Desabilita liberar
   */
  debugManager.debug(this, "FlowExpression1", "Desabilita liberar");

  /**
   * Desabilita liberar
   */
  ebfFormSetEnabled.call(this, 'liberar', false);

  /**
   * DEBUG: Mostra spinner
   */
  debugManager.debug(this, "FlowExpression2", "Mostra spinner");

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerLiberar'), 'display', 'inline-block');

  /**
   * DEBUG: Executar fluxo assíncrono
   */
  debugManager.debug(this, "FlowExpression3", "Executar fluxo assíncrono");

  /**
   * Executar fluxo assíncrono
   */
  ebfRuleSchedulerNoParent.call(this, 'Cadastro - Aprovar/Reprovar - Ao clicar - Cliente', ebfListParamsCreate.call(this, this.context['idPessoa'], this.context['email']), parseInt(500));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Login - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['key'] = null;

  this.context['script'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision2", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Criar script
     */
    debugManager.debug(this, "FlowExpression4", "Criar script");

    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * DEBUG: Cria captcha
     */
    debugManager.debug(this, "FlowExpression5", "Cria captcha");

    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Obtem keyCad
     */
    debugManager.debug(this, "FlowExpression1", "Obtem keyCad");

    /**
     * Obtem keyCad
     */
    this.context['key'] = ebfRequestGetParameter.call(this, 'teste');

    /**
     * DEBUG: Alerta
     */
    debugManager.debug(this, "FlowExpression2", "Alerta");

    /**
     * Alerta
     */
    ebfAlertMessage.call(this, this.context['key']);

    /**
     * DEBUG: É nulo ou vazio
     */
    debugManager.debug(this, "FlowDecision1", "É nulo ou vazio");

    /**
     * É nulo ou vazio
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['key']))) {
        
      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Mensagem de Sucesso
       */
      debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Cadastro Efetuado!', 'Um e-mail foi enviado com as intruções de acesso! Cheque sua caixa em alguns instantes', null, null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Template - Login - Cadastro - Ao Entrar';
  this.context = new Array();

  // Variáveis
  this.context['key'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision2", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Criar script
     */
    debugManager.debug(this, "FlowExpression4", "Criar script");

    /**
     * Criar script
     */
    ebfHtmlCreateHtmlElement.call(this, 'script', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'src', 'https://www.google.com/recaptcha/api.js')), ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetDocumentElement.call(this)), parseInt(1)));

    /**
     * DEBUG: Cria captcha
     */
    debugManager.debug(this, "FlowExpression5", "Cria captcha");

    /**
     * Cria captcha
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'captcha'), '<div class=\"g-recaptcha\" data-sitekey=\"6Lez5sYZAAAAACuvOy3NBJ1KRMK8B5GEEOk-sFCQ\"\n</div>');

    /**
     * DEBUG: Mensagem de Sucesso
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Sucesso");

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'O e-mail com a senha foi enviado. Cheque sua caixa postal em alguns instantes.', null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Obtem keyCad
     */
    debugManager.debug(this, "FlowExpression1", "Obtem keyCad");

    /**
     * Obtem keyCad
     */
    this.context['key'] = ebfRequestGetParameter.call(this, 'teste');

    /**
     * DEBUG: Alerta
     */
    debugManager.debug(this, "FlowExpression2", "Alerta");

    /**
     * Alerta
     */
    ebfAlertMessage.call(this, this.context['key']);

    /**
     * DEBUG: É nulo ou vazio
     */
    debugManager.debug(this, "FlowDecision1", "É nulo ou vazio");

    /**
     * É nulo ou vazio
     */
    if (parseBoolean(isNullOrEmpty.call(this, this.context['key']))) {
        
      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Mensagem de Sucesso
       */
      debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

      /**
       * Mensagem de Sucesso
       */
      ActNewSuccessMessage('Cadastro Efetuado!', 'Um e-mail foi enviado com as intruções de acesso! Cheque sua caixa em alguns instantes', null, null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runTemplateLoginCadastroAoEntrar(parent, sys, formID, params) {
  var rule = new TemplateLoginCadastroAoEntrar(parent, sys, formID);
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
 * @author MASTER
 * @since 11/09/2022 16:25:10
 */
GeralChecarSePdf.prototype.run = function() {

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Checar se PDF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametros'] = this.checkType(arguments[0], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: PDF?
   */
  debugManager.debug(this, "FlowDecision1", "PDF?");

  /**
   * PDF?
   */
  if (parseBoolean(isEqual.call(this, ebfGetElementFromList.call(this, this.context['parametros'], parseInt(3)), 'application/pdf'))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return true;

  } else {

    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Apenas arquivos PDF são permitidos!');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return false;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runGeralChecarSePdf(parent, sys, formID, params) {
  var rule = new GeralChecarSePdf(parent, sys, formID);
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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Interação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Interação de Confirmação
   */
  debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma a liberação do cadastro do cliente?', 'Cadastro - Aprovar/Reprovar - Ao clicar', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['email']), null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runCadastroAprovarReprovarInteracao(parent, sys, formID, params) {
  var rule = new CadastroAprovarReprovarInteracao(parent, sys, formID);
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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem response
   */
  debugManager.debug(this, "FlowExpression8", "Obtem response");

  /**
   * Obtem response
   */
  this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

  /**
   * DEBUG: Recaptcha - Obter url via post
   */
  debugManager.debug(this, "FlowSubRoutine2", "Recaptcha - Obter url via post");

  /**
   * Recaptcha - Obter url via post
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

  /**
   * DEBUG: Obtem retorno do captcha
   */
  debugManager.debug(this, "FlowExpression13", "Obtem retorno do captcha");

  /**
   * Obtem retorno do captcha
   */
  this.context['validacaoRecaptcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

  /**
   * DEBUG: Validou?
   */
  debugManager.debug(this, "FlowDecision5", "Validou?");

  /**
   * Validou?
   */
  if (parseBoolean(this.context['validacaoRecaptcha'])) {
      
    /**
     * DEBUG: Autenticar usuário
     */
    debugManager.debug(this, "FlowExpression1", "Autenticar usuário");

    /**
     * Autenticar usuário
     */
    ebfAuthUser.call(this, this.context['usuario'], this.context['senha'], null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Refresh
     */
    debugManager.debug(this, "FlowExpression16", "Refresh");

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Captcha não validado!', null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runTemplateLoginAutenticarUsuario(parent, sys, formID, params) {
  var rule = new TemplateLoginAutenticarUsuario(parent, sys, formID);
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
 * @since 02/11/2022 15:26:16
 */
CadastroValidacoesIniciais.prototype.run = function() {

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem response
   */
  debugManager.debug(this, "FlowExpression8", "Obtem response");

  /**
   * Obtem response
   */
  this.context['response'] = ebfHtmlGetDOMAttribute.call(this, ebfHtmlGetElementById.call(this, 'g-recaptcha-response'), 'value');

  /**
   * DEBUG: Recaptcha - Obter url via post
   */
  debugManager.debug(this, "FlowSubRoutine2", "Recaptcha - Obter url via post");

  /**
   * Recaptcha - Obter url via post
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Recaptcha - Obter url via post', [this.context['response']]);

  /**
   * DEBUG: Obtem retorno do captcha
   */
  debugManager.debug(this, "FlowExpression13", "Obtem retorno do captcha");

  /**
   * Obtem retorno do captcha
   */
  this.context['validacaoRecaptcha'] = ebfGetValueObjectJson.call(this, ebfCreateObjectJSON.call(this, this.context['retorno']), 'success');

  /**
   * DEBUG: Validou?
   */
  debugManager.debug(this, "FlowDecision5", "Validou?");

  /**
   * Validou?
   */
  if (parseBoolean(this.context['validacaoRecaptcha'])) {
      
    /**
     * DEBUG: Algum campo vazio?
     */
    debugManager.debug(this, "FlowDecision3", "Algum campo vazio?");

    /**
     * Algum campo vazio?
     */
    if (parseBoolean((isNullOrEmpty.call(this, this.context['nome']) || isNullOrEmpty.call(this, this.context['cpf']) || isNullOrEmpty.call(this, this.context['email']) || isNullOrEmpty.call(this, this.context['emailConfima'])))) {
        
      /**
       * DEBUG: Mensagem de Alerta
       */
      debugManager.debug(this, "FlowActivity3", "Mensagem de Alerta");

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'Preencha todos os campos!', null, null);

      /**
       * DEBUG: Refresh
       */
      debugManager.debug(this, "FlowExpression1", "Refresh");

      /**
       * Refresh
       */
      ebfExecuteJS.call(this, 'grecaptcha.reset();');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Desabilita Campos
       */
      debugManager.debug(this, "FlowSubRoutine3", "Desabilita Campos");

      /**
       * Desabilita Campos
       */
      new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', false);

      /**
       * DEBUG: Cadastro - Cadastrar - Cliente
       */
      debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Cadastrar - Cliente");

      /**
       * Cadastro - Cadastrar - Cliente
       */
      new CadastroCadastrarCliente(this, this.getSystem(), this.getForm()).run(this.context['cpf'], this.context['email'], this.context['emailConfima'], this.context['nome']);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Captcha não validado!', null, null);

    /**
     * DEBUG: Refresh
     */
    debugManager.debug(this, "FlowExpression16", "Refresh");

    /**
     * Refresh
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runCadastroValidacoesIniciais(parent, sys, formID, params) {
  var rule = new CadastroValidacoesIniciais(parent, sys, formID);
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
 * @author MASTER
 * @since 11/09/2022 15:43:21
 */
CadastroComplementoBuscarEnderecoPeloCepCliente.prototype.run = function() {

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Buscar endereço pelo CEP - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cep'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Desabilita botão
   */
  debugManager.debug(this, "FlowExpression3", "Desabilita botão");

  /**
   * Desabilita botão
   */
  ebfFormSetEnabled.call(this, 'botaoCEP', false);

  /**
   * DEBUG: Mostrar spinner
   */
  debugManager.debug(this, "FlowExpression1", "Mostrar spinner");

  /**
   * Mostrar spinner
   */
  ebfChangeDescription.call(this, 'botaoCEP', '<div class=\"spinner-border spinner-border-sm text-success\" role=\"status\"></div>');

  /**
   * DEBUG: Executar fluxo de busca do endereço
   */
  debugManager.debug(this, "FlowExpression2", "Executar fluxo de busca do endereço");

  /**
   * Executar fluxo de busca do endereço
   */
  ebfAsyncJavaFlowExecute.call(this, 'Cadastro - Complemento - Buscar endereço pelo CEP', ebfListParamsCreate.call(this, this.context['cep']), 'Cadastro - Complemento - Callback do CEP', ebfListParamsCreate.call(this, null), 'Cadastro - Complemento - Callback do CEP', ebfListParamsCreate.call(this, null));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runCadastroComplementoBuscarEnderecoPeloCepCliente(parent, sys, formID, params) {
  var rule = new CadastroComplementoBuscarEnderecoPeloCepCliente(parent, sys, formID);
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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Callback';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['retorno'] = this.checkType(arguments[0], 'Letras');

  this.context['modal'] = this.checkType(arguments[1], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Ocultar spinner
   */
  debugManager.debug(this, "FlowExpression3", "Ocultar spinner");

  /**
   * Ocultar spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinner'), 'display', 'none');

  /**
   * DEBUG: Altera descrição de MakerButton1
   */
  debugManager.debug(this, "FlowExpression11", "Altera descrição de MakerButton1");

  /**
   * Altera descrição de MakerButton1
   */
  ebfChangeDescription.call(this, 'cadastrar', 'Cadastrar     <div class=\"spinner-border spinner-border-sm\" role=\"status\" style=\"display:none\" id=\"spinner\"></div>');

  /**
   * DEBUG: Habilita MakerButton1
   */
  debugManager.debug(this, "FlowExpression4", "Habilita MakerButton1");

  /**
   * Habilita MakerButton1
   */
  ebfFormSetEnabled.call(this, 'cadastrar', true);

  /**
   * DEBUG: Retorno nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Retorno nulo ou vazio?");

  /**
   * Retorno nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['retorno']))) {
      
    /**
     * DEBUG: Limpa Campos
     */
    debugManager.debug(this, "FlowSubRoutine2", "Limpa Campos");

    /**
     * Limpa Campos
     */
    new GeralLimparCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao');

    /**
     * DEBUG: Desabilita Campos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Desabilita Campos");

    /**
     * Desabilita Campos
     */
    new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', false);

    /**
     * DEBUG: True?
     */
    debugManager.debug(this, "FlowDecision2", "True?");

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Abre url
       */
      debugManager.debug(this, "FlowExpression2", "Abre url");

      /**
       * Abre url
       */
      ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/form.jsp?sys=P2P&action=openform&formID=464570566&align=0&mode=-1&goto=-1&filter=&scrolling=no&popup=true'));

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Abre URL
       */
      debugManager.debug(this, "FlowExpression1", "Abre URL");

      /**
       * Abre URL
       */
      ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/open.do?sys=P2P&keyCad=', ebfRandom.call(this, parseInt(5222))));

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    }

  } else {

    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage(this.context['retorno']);

    /**
     * DEBUG: Refresh Recaptcha
     */
    debugManager.debug(this, "FlowExpression6", "Refresh Recaptcha");

    /**
     * Refresh Recaptcha
     */
    ebfExecuteJS.call(this, 'grecaptcha.reset();');

    /**
     * DEBUG: Habilita Campos
     */
    debugManager.debug(this, "FlowSubRoutine3", "Habilita Campos");

    /**
     * Habilita Campos
     */
    new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('nome,cpf,email,emailConfirmacao', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem qtd
   */
  debugManager.debug(this, "FlowExpression1", "Obtem qtd");

  /**
   * Obtem qtd
   */
  this.context['qtd'] = toLong.call(this, ebfConcat.call(this, ebfFormGetComponentValue.call(this, '{1BB2EA79-0D0C-4711-A09F-B472D9269549}', 'qtdCota'), this.context['caracter']));

  /**
   * DEBUG: Nulos ou vazios?
   */
  debugManager.debug(this, "FlowDecision1", "Nulos ou vazios?");

  /**
   * Nulos ou vazios?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['qtd']) || isMinor.call(this, this.context['qtd'], parseInt(1))))) {
      
    /**
     * DEBUG: Altera valorInvestir
     */
    debugManager.debug(this, "FlowExpression4", "Altera valorInvestir");

    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Altera valorReceber
     */
    debugManager.debug(this, "FlowExpression5", "Altera valorReceber");

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Altera valorLucro
     */
    debugManager.debug(this, "FlowExpression6", "Altera valorLucro");

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Calcula montante
     */
    debugManager.debug(this, "FlowExpression9", "Calcula montante");

    /**
     * Calcula montante
     */
    this.context['montante'] = oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd']);

    /**
     * DEBUG: Altera valorInvestir
     */
    debugManager.debug(this, "FlowExpression8", "Altera valorInvestir");

    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, this.context['montante'], '#0.00'));

    /**
     * DEBUG: Altera valorReceber
     */
    debugManager.debug(this, "FlowExpression10", "Altera valorReceber");

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, oprMultiply.call(this, this.context['valorCota'], this.context['qtd']), '#0.00'));

    /**
     * DEBUG: Altera valorLucro
     */
    debugManager.debug(this, "FlowExpression11", "Altera valorLucro");

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, oprSubtract.call(this, this.context['montante'], oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd'])), '#0.00'));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Ativar Aba';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Ativar Aba
   */
  debugManager.debug(this, "FlowExpression1", "Ativar Aba");

  /**
   * Ativar Aba
   */
  ebfFormOpenTab.call(this, this.context['Aba']);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Class Invalid';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['condicao'] = this.checkType(arguments[0], 'Lógico');

  this.context['componente'] = this.checkType(arguments[1], 'Letras');

  this.context['placeholder'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision1", "True?");

  /**
   * True?
   */
  if (parseBoolean(this.context['condicao'])) {
      
    /**
     * DEBUG: Atribui class is-invalid
     */
    debugManager.debug(this, "FlowExpression11", "Atribui class is-invalid");

    /**
     * Atribui class is-invalid
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(2)), 'class', 'form-control is-invalid');

    /**
     * DEBUG: Atribui class is-invalid
     */
    debugManager.debug(this, "FlowExpression12", "Atribui class is-invalid");

    /**
     * Atribui class is-invalid
     */
    ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'border', '1px solid #dc3545');

    /**
     * DEBUG: placeholder
     */
    debugManager.debug(this, "FlowExpression14", "placeholder");

    /**
     * placeholder
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'placeholder', this.context['placeholder']);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Remove class is-invalid
     */
    debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

    /**
     * Remove class is-invalid
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(2)), 'class', 'form-control');

    /**
     * DEBUG: placeholder
     */
    debugManager.debug(this, "FlowExpression7", "placeholder");

    /**
     * placeholder
     */
    ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, this.context['placeholder'])), parseInt(1)), 'placeholder', this.context['placeholder']);

    /**
     * DEBUG: Atribui class is-valid
     */
    debugManager.debug(this, "FlowExpression6", "Atribui class is-valid");

    /**
     * Atribui class is-valid
     */
    ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, this.context['componente'])), parseInt(1)), 'border', '1px solid #ced4da');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Validar CPF';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cpf'] = this.checkType(arguments[0], 'Letras');

  this.context['componente'] = this.checkType(arguments[1], 'Componente');

  // Variáveis
  this.context['validacao'] = false;

  debugManager.startRule(this);


  /**
   * DEBUG: CPF nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision2", "CPF nulo ou vazio?");

  /**
   * CPF nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['cpf']))) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Validar CPF
     */
    debugManager.debug(this, "FlowExpression3", "Validar CPF");

    /**
     * Validar CPF
     */
    this.context['validacao'] = ebfIsCpf.call(this, ebfReplaceAll.call(this, ebfReplaceAll.call(this, this.context['cpf'], '.', ''), '-', ''));

    /**
     * DEBUG: Validou?
     */
    debugManager.debug(this, "FlowDecision1", "Validou?");

    /**
     * Validou?
     */
    if (parseBoolean(isEqual.call(this, true, this.context['validacao']))) {
        
      /**
       * DEBUG: Remove class is-invalid
       */
      debugManager.debug(this, "FlowExpression10", "Remove class is-invalid");

      /**
       * Remove class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control');

      /**
       * DEBUG: placeholder
       */
      debugManager.debug(this, "FlowExpression7", "placeholder");

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'placeholder', 'Informe seu CPF');

      /**
       * DEBUG: Atribui class is-valid
       */
      debugManager.debug(this, "FlowExpression6", "Atribui class is-valid");

      /**
       * Atribui class is-valid
       */
      ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'border', '1px solid #ced4da');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd4", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Importar CSS
       */
      debugManager.debug(this, "FlowExpression9", "Importar CSS");

      /**
       * Importar CSS
       */
      ebfCSSImportContent.call(this, '::placeholder {\n   color: red;\n}', null);

      /**
       * DEBUG: Limpa componente
       */
      debugManager.debug(this, "FlowExpression1", "Limpa componente");

      /**
       * Limpa componente
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), this.context['componente'], null);

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression8", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(2)), 'class', 'form-control is-invalid');

      /**
       * DEBUG: Atribui class is-invalid
       */
      debugManager.debug(this, "FlowExpression4", "Atribui class is-invalid");

      /**
       * Atribui class is-invalid
       */
      ebfHtmlCssDefineStyle.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'div', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'border', '1px solid #dc3545');

      /**
       * DEBUG: placeholder
       */
      debugManager.debug(this, "FlowExpression14", "placeholder");

      /**
       * placeholder
       */
      ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, 'cpf')), parseInt(1)), 'placeholder', 'Verifique o CPF');

      /**
       * DEBUG: Focar componente
       */
      debugManager.debug(this, "FlowExpression5", "Focar componente");

      /**
       * Focar componente
       */
      ebfFormSetFocus.call(this, this.context['componente']);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar - Status 3';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Destrói botão de envio
   */
  debugManager.debug(this, "FlowExpression2", "Destrói botão de envio");

  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * DEBUG: Destrói botão de gravar
   */
  debugManager.debug(this, "FlowExpression3", "Destrói botão de gravar");

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * DEBUG: Destrói botaoIdentificacao
   */
  debugManager.debug(this, "FlowExpression1", "Destrói botaoIdentificacao");

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * DEBUG: Destrói botaoRenda
   */
  debugManager.debug(this, "FlowExpression5", "Destrói botaoRenda");

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * DEBUG: Destrói botaoResidencia
   */
  debugManager.debug(this, "FlowExpression6", "Destrói botaoResidencia");

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * DEBUG: Mostra Alerta Análise
   */
  debugManager.debug(this, "FlowExpression4", "Mostra Alerta Análise");

  /**
   * Mostra Alerta Análise
   */
  ebfFormSetVisible.call(this, 'alertaAnalise', true);

  /**
   * DEBUG: Oculta labelBemVindoCompleto
   */
  debugManager.debug(this, "FlowExpression7", "Oculta labelBemVindoCompleto");

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Abrir form filtrado na moldura';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['filtro'] = this.checkType(arguments[0], 'Letras');

  this.context['valor'] = this.checkType(arguments[1], 'Letras');

  this.context['Identificador'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Limpar Moldura
   */
  debugManager.debug(this, "FlowExpression4", "Limpar Moldura");

  /**
   * Limpar Moldura
   */
  ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

  /**
   * DEBUG: Abrir Formulário na Moldura
   */
  debugManager.debug(this, "FlowExpression3", "Abrir Formulário na Moldura");

  /**
   * Abrir Formulário na Moldura
   */
  ebfFrameOpenFilteredForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', this.context['Identificador'], false, ebfConcat.call(this, this.context['filtro'], '=', this.context['valor']), false);

  /**
   * DEBUG: Obter div do formulário
   */
  debugManager.debug(this, "FlowExpression6", "Obter div do formulário");

  /**
   * Obter div do formulário
   */
  this.context['Div Formulário'] = ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfHtmlGetMakerElementById.call(this, 'moldura')), parseInt(1));

  /**
   * DEBUG: Div do formulário existe?
   */
  debugManager.debug(this, "FlowDecision1", "Div do formulário existe?");

  /**
   * Div do formulário existe?
   */
  if (parseBoolean(oprNot.call(this, isNull.call(this, this.context['Div Formulário'])))) {
      
    /**
     * DEBUG: Ajustar altura da div do formulário
     */
    debugManager.debug(this, "FlowExpression1", "Ajustar altura da div do formulário");

    /**
     * Ajustar altura da div do formulário
     */
    ebfHtmlCssDefineStyle.call(this, this.context['Div Formulário'], 'height', '100%');

    /**
     * DEBUG: Obter iframe do formulário
     */
    debugManager.debug(this, "FlowExpression2", "Obter iframe do formulário");

    /**
     * Obter iframe do formulário
     */
    this.context['Iframe Formulário'] = ebfHtmlGetElementsByTagName.call(this, 'iframe', this.context['Div Formulário']);

    /**
     * DEBUG: Iframe existe?
     */
    debugManager.debug(this, "FlowDecision2", "Iframe existe?");

    /**
     * Iframe existe?
     */
    if (parseBoolean(oprNot.call(this, isNullOrEmpty.call(this, this.context['Iframe Formulário'])))) {
        
      /**
       * DEBUG: Ajustar altura do iframe do formulário
       */
      debugManager.debug(this, "FlowExpression5", "Ajustar altura do iframe do formulário");

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
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GeralAbrirFormFiltradoNaMoldura.prototype.FlowEnd2 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Callback do CEP';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['jsonLetras'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['json'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Converte para json
   */
  debugManager.debug(this, "FlowExpression2", "Converte para json");

  /**
   * Converte para json
   */
  this.context['json'] = ebfCreateObjectJSON.call(this, this.context['jsonLetras']);

  /**
   * DEBUG: Erro?
   */
  debugManager.debug(this, "FlowDecision1", "Erro?");

  /**
   * Erro?
   */
  if (parseBoolean(ebfJSONExistsKey.call(this, this.context['json'], 'erro'))) {
      
    /**
     * DEBUG: Limpa cep
     */
    debugManager.debug(this, "FlowExpression10", "Limpa cep");

    /**
     * Limpa cep
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cep', null);

    /**
     * DEBUG: Geral - Class Invalid
     */
    debugManager.debug(this, "FlowSubRoutine3", "Geral - Class Invalid");

    /**
     * Geral - Class Invalid
     */
    new GeralClassInvalid(this, this.getSystem(), this.getForm()).run(true, 'cep', 'CEP Inválido!');

    /**
     * DEBUG: Geral - Limpar Campos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Geral - Limpar Campos");

    /**
     * Geral - Limpar Campos
     */
    new GeralLimparCampos(this, this.getSystem(), this.getForm()).run('logradouro,bairro,cidade,uf');

    /**
     * DEBUG: Focar componente
     */
    debugManager.debug(this, "FlowExpression5", "Focar componente");

    /**
     * Focar componente
     */
    ebfFormSetFocus.call(this, 'cep');

    return this.FlowExpression3();

  } else {

    /**
     * DEBUG: Geral - Class Invalid
     */
    debugManager.debug(this, "FlowSubRoutine2", "Geral - Class Invalid");

    /**
     * Geral - Class Invalid
     */
    new GeralClassInvalid(this, this.getSystem(), this.getForm()).run(false, 'cep', null);

    /**
     * DEBUG: Carrega logradouro
     */
    debugManager.debug(this, "FlowExpression6", "Carrega logradouro");

    /**
     * Carrega logradouro
     */
    ebfFormChangeComponentValue.call(this, '{E54D97B1-5E80-4507-9456-F2A9F8AFC66A}', 'logradouro', ebfGetValueObjectJson.call(this, this.context['json'], 'logradouro'));

    /**
     * DEBUG: Carrega bairro
     */
    debugManager.debug(this, "FlowExpression7", "Carrega bairro");

    /**
     * Carrega bairro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'bairro', ebfGetValueObjectJson.call(this, this.context['json'], 'bairro'));

    /**
     * DEBUG: Carrega logradouro
     */
    debugManager.debug(this, "FlowExpression8", "Carrega logradouro");

    /**
     * Carrega logradouro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cidade', ebfGetValueObjectJson.call(this, this.context['json'], 'localidade'));

    /**
     * DEBUG: Carrega UF
     */
    debugManager.debug(this, "FlowExpression9", "Carrega UF");

    /**
     * Carrega UF
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'uf', ebfGetValueObjectJson.call(this, this.context['json'], 'uf'));

    /**
     * DEBUG: Foca complemento
     */
    debugManager.debug(this, "FlowExpression4", "Foca complemento");

    /**
     * Foca complemento
     */
    ebfFormSetFocus.call(this, 'complemento');

    return this.FlowExpression3();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

CadastroComplementoCallbackDoCep.prototype.FlowExpression3 = function() {

    /**
     * DEBUG: Habilita botão
     */
    debugManager.debug(this, "FlowExpression3", "Habilita botão");

    /**
     * Habilita botão
     */
    ebfFormSetEnabled.call(this, 'botaoCEP', true);

    /**
     * DEBUG: Mostrar lupa
     */
    debugManager.debug(this, "FlowExpression1", "Mostrar lupa");

    /**
     * Mostrar lupa
     */
    ebfChangeDescription.call(this, 'botaoCEP', '<i class=\"fas fa-search\"></i>');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Remover barra do form';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Remover barra dos formulários em div
   */
  debugManager.debug(this, "FlowExpression1", "Remover barra dos formulários em div");

  /**
   * Remover barra dos formulários em div
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Abas - Formulário Principal - Abre chat';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision2", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowDecision1();

  } else {

    /**
     * DEBUG: Abre chat
     */
    debugManager.debug(this, "FlowExpression1", "Abre chat");

    /**
     * Abre chat
     */
    ebfOpenFloatingUrl.call(this, 'form.jsp?sys=PDK&action=openform&formID=8395&align=0&mode=-1&goto=-1&filter=&scrolling=False&firstLoad=true', 'chat', 'Chat', parseInt(294), parseInt(468), 'chatInterno');

    return this.FlowDecision1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

AbasFormularioPrincipalAbreChat.prototype.FlowDecision1 = function() {

    /**
     * DEBUG: True?
     */
    debugManager.debug(this, "FlowDecision1", "True?");

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Geral - Abrir form filtrado na moldura
       */
      debugManager.debug(this, "FlowSubRoutine2", "Geral - Abrir form filtrado na moldura");

      /**
       * Geral - Abrir form filtrado na moldura
       */
      new GeralAbrirFormFiltradoNaMoldura(this, this.getSystem(), this.getForm()).run('cad_pessoa.id_pessoa', '6@long', '{E54D97B1-5E80-4507-9456-F2A9F8AFC66A}');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Abre form
       */
      debugManager.debug(this, "FlowExpression3", "Abre form");

      /**
       * Abre form
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', '{ED460603-8A85-48B3-A104-0EDE569B7B86}', 'Pacientes do Dia', null);


      /**
       * DEBUG: Abre form
       */
      debugManager.debug(this, "FlowExpression4", "Abre form");

      /**
       * Abre form
       */
      new AbaAdicionarNovaAba(this, this.getSystem(), this.getForm()).run('Aba', '{C81D183C-3322-4990-B10D-AC398F8D3403}', 'Pacientes do Dia', null);


      /**
       * DEBUG: Abrir Formulário na Moldura
       */
      debugManager.debug(this, "FlowExpression5", "Abrir Formulário na Moldura");

      /**
       * Abrir Formulário na Moldura
       */
      ebfFrameOpenForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura', '{1954F5EC-583E-4F03-B942-2916109A7AC7}', false, false);

      /**
       * DEBUG: Limpar Moldura
       */
      debugManager.debug(this, "FlowExpression6", "Limpar Moldura");

      /**
       * Limpar Moldura
       */
      ebfGroupBoxClean.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'moldura');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Mudar Descricao e Hint';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['componente'] = this.checkType(arguments[0], 'Componente');

  this.context['descricao'] = this.checkType(arguments[1], 'Letras');

  this.context['hint'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Muda descrição
   */
  debugManager.debug(this, "FlowExpression5", "Muda descrição");

  /**
   * Muda descrição
   */
  ebfChangeDescription.call(this, this.context['componente'], this.context['descricao']);

  /**
   * DEBUG: Altera hint
   */
  debugManager.debug(this, "FlowExpression6", "Altera hint");

  /**
   * Altera hint
   */
  ebfSetHint.call(this, this.context['componente'], this.context['hint']);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Define <title> do form externo';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['conteudoTitle'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['title'] = null;

  this.context['head'] = null;

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem <head>
   */
  debugManager.debug(this, "FlowExpression1", "Obtem <head>");

  /**
   * Obtem <head>
   */
  this.context['head'] = ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'head', ebfHtmlGetParent.call(this, ebfGetBodyJSP.call(this))), parseInt(1));

  /**
   * DEBUG: Cria <title>
   */
  debugManager.debug(this, "FlowExpression5", "Cria <title>");

  /**
   * Cria <title>
   */
  this.context['title'] = ebfHtmlCreateHtmlElement.call(this, 'title', ebfListParamsCreate.call(this, ebfListParamsCreate.call(this, 'id', 'titulo')), this.context['head']);

  /**
   * DEBUG: Define title
   */
  debugManager.debug(this, "FlowExpression6", "Define title");

  /**
   * Define title
   */
  ebfHtmlInnerHtml.call(this, this.context['title'], this.context['conteudoTitle']);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Texto Email - Ao clicar na grade';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['linha'] = this.checkType(arguments[0], 'Inteiro');

  this.context['linhaofset'] = this.checkType(arguments[1], 'Letras');

  this.context['chaves'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['chave'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem chave
   */
  debugManager.debug(this, "FlowExpression1", "Obtem chave");

  /**
   * Obtem chave
   */
  this.context['chave'] = ebfGetElementFromList.call(this, this.context['chaves'], parseInt(1));

  /**
   * DEBUG: Fecha form
   */
  debugManager.debug(this, "FlowExpression2", "Fecha form");

  /**
   * Fecha form
   */
  ebfFrameCloseForm.call(this, '{80028D79-339C-40E6-9C5A-2DFAF2E3391B}', 'moldura');

  /**
   * DEBUG: Abre form na moldura
   */
  debugManager.debug(this, "FlowExpression3", "Abre form na moldura");

  /**
   * Abre form na moldura
   */
  ebfFrameOpenFilteredForm.call(this, '{80028D79-339C-40E6-9C5A-2DFAF2E3391B}', 'moldura', '{1CCA60D8-4EF6-42DB-86B0-9762C7AE049A}', true, ebfConcat.call(this, 'id_textosemails=', this.context['chave'], '@long'), true);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao selecionar estado civil';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['estadoCivil'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Casado ou união estável?
   */
  debugManager.debug(this, "FlowDecision1", "Casado ou união estável?");

  /**
   * Casado ou união estável?
   */
  if (parseBoolean((isEqual.call(this, this.context['estadoCivil'], '2') || isEqual.call(this, this.context['estadoCivil'], '3')))) {
      
    /**
     * DEBUG: Habilita cpfConjuge
     */
    debugManager.debug(this, "FlowExpression1", "Habilita cpfConjuge");

    /**
     * Habilita cpfConjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', true);

    /**
     * DEBUG: Foca cpfConjuge
     */
    debugManager.debug(this, "FlowExpression4", "Foca cpfConjuge");

    /**
     * Foca cpfConjuge
     */
    ebfFormSetFocus.call(this, 'cpfConjuge');

    /**
     * DEBUG: Tornar cpfConjuge obrigatório
     */
    debugManager.debug(this, "FlowExpression8", "Tornar cpfConjuge obrigatório");

    /**
     * Tornar cpfConjuge obrigatório
     */
    ebfFormSetRequired.call(this, 'cpfConjuge', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Desabilita cpfConjuge
     */
    debugManager.debug(this, "FlowExpression2", "Desabilita cpfConjuge");

    /**
     * Desabilita cpfConjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', false);

    /**
     * DEBUG: Limpa cpfConjuge
     */
    debugManager.debug(this, "FlowExpression3", "Limpa cpfConjuge");

    /**
     * Limpa cpfConjuge
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'cpfConjuge', null);

    /**
     * DEBUG: Foca CEP
     */
    debugManager.debug(this, "FlowExpression5", "Foca CEP");

    /**
     * Foca CEP
     */
    ebfFormSetFocus.call(this, 'cep');

    /**
     * DEBUG: Retirar obrigatoriedade de cpfConjuge
     */
    debugManager.debug(this, "FlowExpression9", "Retirar obrigatoriedade de cpfConjuge");

    /**
     * Retirar obrigatoriedade de cpfConjuge
     */
    ebfFormSetRequired.call(this, 'cpfConjuge', false);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Testes - Timeline';
  this.context = new Array();

  // Variáveis
  this.context['html'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Iniciliza popup
   */
  debugManager.debug(this, "FlowExpression2", "Iniciliza popup");

  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * DEBUG: Testes - Timeline - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Testes - Timeline - Servidor");

  /**
   * Testes - Timeline - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Testes - Timeline - Servidor');

  /**
   * DEBUG: Carrega html da timeline
   */
  debugManager.debug(this, "FlowExpression1", "Carrega html da timeline");

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'principal'), ebfReplace.call(this, '<div class=\"container mt-5 mb-5\">\n   <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n         <h4>Histórico do Cliente</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n</div>', 'X:LINHA:X', this.context['html']));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Nulos ou vazios?
   */
  debugManager.debug(this, "FlowDecision1", "Nulos ou vazios?");

  /**
   * Nulos ou vazios?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['qtd']) || isMinor.call(this, this.context['qtd'], parseInt(1))))) {
      
    /**
     * DEBUG: Altera valorInvestir
     */
    debugManager.debug(this, "FlowExpression12", "Altera valorInvestir");

    /**
     * Altera valorInvestir
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Altera valorReceber
     */
    debugManager.debug(this, "FlowExpression13", "Altera valorReceber");

    /**
     * Altera valorReceber
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Altera valorLucro
     */
    debugManager.debug(this, "FlowExpression14", "Altera valorLucro");

    /**
     * Altera valorLucro
     */
    ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

    /**
     * DEBUG: Foca componente
     */
    debugManager.debug(this, "FlowExpression1", "Foca componente");

    /**
     * Foca componente
     */
    ebfFormSetFocus.call(this, 'qtdCota');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: True?
     */
    debugManager.debug(this, "FlowDecision2", "True?");

    /**
     * True?
     */
    if (parseBoolean(true)) {
        
      /**
       * DEBUG: Calcula montante
       */
      debugManager.debug(this, "FlowExpression9", "Calcula montante");

      /**
       * Calcula montante
       */
      this.context['montante'] = oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd']);

      /**
       * DEBUG: Altera valorInvestir
       */
      debugManager.debug(this, "FlowExpression8", "Altera valorInvestir");

      /**
       * Altera valorInvestir
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, this.context['montante'], '#0.00'));

      /**
       * DEBUG: vl Receber
       */
      debugManager.debug(this, "FlowExpression2", "vl Receber");

      /**
       * vl Receber
       */
      this.context['vlreceber'] = ebfArredondaDecimal.call(this, oprMultiply.call(this, this.context['valorCota'], this.context['qtd']), parseInt(2), true);

      /**
       * DEBUG: Altera valorReceber
       */
      debugManager.debug(this, "FlowExpression10", "Altera valorReceber");

      /**
       * Altera valorReceber
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, this.context['vlreceber'], '#0.00'));

      /**
       * DEBUG: Altera valorLucro
       */
      debugManager.debug(this, "FlowExpression11", "Altera valorLucro");

      /**
       * Altera valorLucro
       */
      ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, oprSubtract.call(this, this.context['montante'], oprMultiply.call(this, this.context['valorCotaSimples'], this.context['qtd'])), '#0.00'));

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Investidor - Investe - Calcula Valor Final Cota - BKP
       */
      debugManager.debug(this, "FlowSubRoutine1", "Investidor - Investe - Calcula Valor Final Cota - BKP");

      /**
       * Investidor - Investe - Calcula Valor Final Cota - BKP
       */
      executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Investe - Calcula Valor Final Cota - BKP', [null, null, null, null, null, null]);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Emprestimo - Simulação - Ao clicar nos botoes';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['tipo'] = this.checkType(arguments[1], 'Inteiro');

  this.context['aba'] = this.checkType(arguments[2], 'Letras');

  // Variáveis
  this.context['retorno'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Emprestimo - Checa se respondeu questionario
   */
  debugManager.debug(this, "FlowSubRoutine1", "Emprestimo - Checa se respondeu questionario");

  /**
   * Emprestimo - Checa se respondeu questionario
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Checa se respondeu questionario', [this.context['idPessoa'], this.context['tipo']]);

  /**
   * DEBUG: Retorno igual a 0?
   */
  debugManager.debug(this, "FlowDecision1", "Retorno igual a 0?");

  /**
   * Retorno igual a 0?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
      
    /**
     * DEBUG: Geral - Ativar Aba
     */
    debugManager.debug(this, "FlowSubRoutine2", "Geral - Ativar Aba");

    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run(this.context['aba']);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Abre form na moldura
     */
    debugManager.debug(this, "FlowExpression1", "Abre form na moldura");

    /**
     * Abre form na moldura
     */
    ebfFrameOpenFilteredForm.call(this, ebfGetGUIDActualForm.call(this), 'molduraQuestionario', '{E9F0A5CB-5098-405E-A445-F526A87B2510}', true, ebfConcat.call(this, 'fin_tomadorquestionario.id_pessoa=', this.context['idPessoa'], '@long'), false);

    /**
     * DEBUG: Geral - Ativar Aba
     */
    debugManager.debug(this, "FlowSubRoutine3", "Geral - Ativar Aba");

    /**
     * Geral - Ativar Aba
     */
    new GeralAtivarAba(this, this.getSystem(), this.getForm()).run('Questionário');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Oculta aba reprovar
   */
  debugManager.debug(this, "FlowExpression4", "Oculta aba reprovar");

  /**
   * Oculta aba reprovar
   */
  ebfFormShowTab.call(this, 'Reprovar', false);

  /**
   * DEBUG: Cadastro - Timeline
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Timeline");

  /**
   * Cadastro - Timeline
   */
  new CadastroTimeline(this, this.getSystem(), this.getForm()).run(this.context['idPessoa']);

  /**
   * DEBUG: Remover barra do form
   */
  debugManager.debug(this, "FlowExpression1", "Remover barra do form");

  /**
   * Remover barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * DEBUG: Alert reprovado
   */
  debugManager.debug(this, "FlowExpression2", "Alert reprovado");

  /**
   * Alert reprovado
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'containerReprovado'), 'Cadastro Reprovado');

  /**
   * DEBUG: Alert reprovado
   */
  debugManager.debug(this, "FlowExpression3", "Alert reprovado");

  /**
   * Alert reprovado
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'containerReprovado1'), 'Cadastro Reprovado');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Callback';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Destruir liberar
   */
  debugManager.debug(this, "FlowExpression1", "Destruir liberar");

  /**
   * Destruir liberar
   */
  ebfDestroyComponent.call(this, 'liberar');

  /**
   * DEBUG: Destruir reprovar
   */
  debugManager.debug(this, "FlowExpression2", "Destruir reprovar");

  /**
   * Destruir reprovar
   */
  ebfDestroyComponent.call(this, 'reprovar');

  /**
   * DEBUG: Mensagem de Alerta
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, 'Cliente Liberado!', null, null);

  /**
   * DEBUG: Geral - Executar fluxo no formulário
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Executar fluxo no formulário");

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Cadastro - Aprovar/Reprovar - Executa no filho', ebfListCreate.call(this));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Atualiza grade
   */
  debugManager.debug(this, "FlowExpression1", "Atualiza grade");

  /**
   * Atualiza grade
   */
  ebfFormRefreshComponent.call(this, 'gradeAguardando');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Detalhes - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaColunas'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Altera valorInvestir
   */
  debugManager.debug(this, "FlowExpression4", "Altera valorInvestir");

  /**
   * Altera valorInvestir
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorInvestir', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * DEBUG: Altera valorReceber
   */
  debugManager.debug(this, "FlowExpression5", "Altera valorReceber");

  /**
   * Altera valorReceber
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorReceber1', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * DEBUG: Altera valorLucro
   */
  debugManager.debug(this, "FlowExpression2", "Altera valorLucro");

  /**
   * Altera valorLucro
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'valorLucro', ebfFormatNumber.call(this, parseInt(0), '#0.00'));

  /**
   * DEBUG: Geral - Ajustar Largura das Colunas da Grade
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Ajustar Largura das Colunas da Grade");

  /**
   * Geral - Ajustar Largura das Colunas da Grade
   */
  new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo');

  /**
   * DEBUG: Geral - Alterar centralização das colunas da grade
   */
  debugManager.debug(this, "FlowSubRoutine2", "Geral - Alterar centralização das colunas da grade");

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo', this.context['listaColunas'], 'C');

  /**
   * DEBUG: Font-google
   */
  debugManager.debug(this, "FlowExpression6", "Font-google");

  /**
   * Font-google
   */
  ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

  /**
   * DEBUG: Foca componente
   */
  debugManager.debug(this, "FlowExpression1", "Foca componente");

  /**
   * Foca componente
   */
  ebfFormSetFocus.call(this, 'qtdCota');

  /**
   * DEBUG: Remove barra do form
   */
  debugManager.debug(this, "FlowExpression3", "Remove barra do form");

  /**
   * Remove barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Ao clicar - Cliente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro - Aprovar/Reprovar - Ao clicar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Aprovar/Reprovar - Ao clicar - Servidor");

  /**
   * Cadastro - Aprovar/Reprovar - Ao clicar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Aprovar/Reprovar - Ao clicar - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Gravar Dados - Interação';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['termo'] = this.checkType(arguments[0], 'Lógico');

  debugManager.startRule(this);


  /**
   * DEBUG: Termo marcado?
   */
  debugManager.debug(this, "FlowDecision4", "Termo marcado?");

  /**
   * Termo marcado?
   */
  if (parseBoolean(this.context['termo'])) {
      
    /**
     * DEBUG: Interação de Confirmação
     */
    debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage(null, 'Confirmar os dados e gravar?', 'Cadastro - Complemento - Gravar Dados', ebfListParamsCreate.call(this, null), null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Mensagem de Erro (Clássico)
     */
    debugManager.debug(this, "FlowActivity4", "Mensagem de Erro (Clássico)");

    /**
     * Mensagem de Erro (Clássico)
     */
    ActErrorMessage('È preciso aceitar os termos e condições do contrato!');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Remover seleção da Linha';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['grade'] = this.checkType(arguments[0], 'Componente');

  debugManager.startRule(this);


  /**
   * DEBUG: Remover seleção da Linha
   */
  debugManager.debug(this, "FlowExpression1", "Remover seleção da Linha");

  /**
   * Remover seleção da Linha
   */
  ebfGridSelectRow.call(this, this.context['grade'], parseInt(-1));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Reprova Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['lógico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['motivo'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro - Complemento - Reprova Intermediario - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Complemento - Reprova Intermediario - Servidor");

  /**
   * Cadastro - Complemento - Reprova Intermediario - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Reprova Intermediario - Servidor', [this.context['idPessoa'], this.context['motivo']]);

  /**
   * DEBUG: Mensagem de Alerta (Clássico)
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

  /**
   * Mensagem de Alerta (Clássico)
   */
  ActWarningMessage('Cadastro reprovado!');

  /**
   * DEBUG: Destrói botão de gravar
   */
  debugManager.debug(this, "FlowExpression3", "Destrói botão de gravar");

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * DEBUG: Destrói botão de confirmar reprovar
   */
  debugManager.debug(this, "FlowExpression1", "Destrói botão de confirmar reprovar");

  /**
   * Destrói botão de confirmar reprovar
   */
  ebfDestroyComponent.call(this, 'reprovar');

  /**
   * DEBUG: Destrói botão de confirmar reprovação
   */
  debugManager.debug(this, "FlowExpression2", "Destrói botão de confirmar reprovação");

  /**
   * Destrói botão de confirmar reprovação
   */
  ebfDestroyComponent.call(this, 'confirmarReprovacao');

  /**
   * DEBUG: Destrói botão de Liberar
   */
  debugManager.debug(this, "FlowExpression4", "Destrói botão de Liberar");

  /**
   * Destrói botão de Liberar
   */
  ebfDestroyComponent.call(this, 'liberar');

  /**
   * DEBUG: Mostrar alertas
   */
  debugManager.debug(this, "FlowSubRoutine2", "Mostrar alertas");

  /**
   * Mostrar alertas
   */
  new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('alertaReprovado,alertaReprovado1', true);

  /**
   * DEBUG: Geral - Executar fluxo no formulário
   */
  debugManager.debug(this, "FlowSubRoutine3", "Geral - Executar fluxo no formulário");

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Cadastro - Aprovar/Reprovar - Executa no filho', ebfListCreate.call(this));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Aprovar/Reprovar - Executa no filho';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Geral - Executar fluxo no formulário
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Executar fluxo no formulário");

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{3B3F7F54-FFA5-4C4D-98EC-4C11EF2670EC}', 'Cadastro - Aprovar/Reprovar - Atualiza grade após aprovar', ebfListCreate.call(this));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao navegar - Mostra Oculta Container';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro Não finalizado?
   */
  debugManager.debug(this, "FlowDecision5", "Cadastro Não finalizado?");

  /**
   * Cadastro Não finalizado?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(3))))) {
      
    /**
     * DEBUG: Destrói botão de gravar
     */
    debugManager.debug(this, "FlowExpression3", "Destrói botão de gravar");

    /**
     * Destrói botão de gravar
     */
    ebfDestroyComponent.call(this, 'gravar');

    return this.FlowExpression1();

  } else {

    /**
     * DEBUG: Em Análise?
     */
    debugManager.debug(this, "FlowDecision1", "Em Análise?");

    /**
     * Em Análise?
     */
    if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(4))))) {
        
      /**
       * DEBUG: Cadastro - Complemento - Ao entrar - Status 3
       */
      debugManager.debug(this, "FlowSubRoutine7", "Cadastro - Complemento - Ao entrar - Status 3");

      /**
       * Cadastro - Complemento - Ao entrar - Status 3
       */
      new CadastroComplementoAoEntrarStatus3(this, this.getSystem(), this.getForm()).run();

      return this.FlowConnector1();

    } else {

      /**
       * DEBUG: Finalizado?
       */
      debugManager.debug(this, "FlowDecision2", "Finalizado?");

      /**
       * Finalizado?
       */
      if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(5))))) {
          
        /**
         * DEBUG: Cadastro - Complemento - Ao entrar - Status 5
         */
        debugManager.debug(this, "FlowSubRoutine2", "Cadastro - Complemento - Ao entrar - Status 5");

        /**
         * Cadastro - Complemento - Ao entrar - Status 5
         */
        new CadastroComplementoAoEntrarStatus5(this, this.getSystem(), this.getForm()).run();

        return this.FlowConnector1();

      } else {

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd2", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

CadastroComplementoAoNavegarMostraOcultaContainer.prototype.FlowConnector1 = function() {

    return this.FlowExpression1();
  }

CadastroComplementoAoNavegarMostraOcultaContainer.prototype.FlowExpression1 = function() {

    /**
     * DEBUG: Move main
     */
    debugManager.debug(this, "FlowExpression1", "Move main");

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * DEBUG: Move main Completo
     */
    debugManager.debug(this, "FlowExpression2", "Move main Completo");

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * DEBUG: Oculta Main
     */
    debugManager.debug(this, "FlowExpression6", "Oculta Main");

    /**
     * Oculta Main
     */
    ebfFormSetVisible.call(this, 'main', false);

    /**
     * DEBUG: Mostra Main1
     */
    debugManager.debug(this, "FlowExpression7", "Mostra Main1");

    /**
     * Mostra Main1
     */
    ebfFormSetVisible.call(this, 'mainCompleto', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['enviadoIdentificacao'] = this.checkType(arguments[0], 'Letras');

  this.context['enviadoRenda'] = this.checkType(arguments[1], 'Letras');

  this.context['enviadoResidencia'] = this.checkType(arguments[2], 'Letras');

  this.context['estadoCivil'] = this.checkType(arguments[3], 'Inteiro');

  this.context['status'] = this.checkType(arguments[4], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Rating - Ao entrar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Geral - Ajustar Largura das Colunas da Grade
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Ajustar Largura das Colunas da Grade");

  /**
   * Geral - Ajustar Largura das Colunas da Grade
   */
  new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeRating');

  /**
   * DEBUG: Geral - Alterar centralização das colunas da grade
   */
  debugManager.debug(this, "FlowSubRoutine2", "Geral - Alterar centralização das colunas da grade");

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeRating', 'Rating,Tx. de Juros (%),Valor Máximo,Máximo de Parcelas,Total Cotas,Max. Cotas Investidor,Pontuação Inicial,Pontuação Final,Max. Vl Investidor', 'C');

  /**
   * DEBUG: Remover barra do form
   */
  debugManager.debug(this, "FlowExpression1", "Remover barra do form");

  /**
   * Remover barra do form
   */
  EasyRemoveDivFormModal.call(this);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro Complemento - Enviar para Análise - Intermediario';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['parametro'] = this.checkType(arguments[0], 'Lógico');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  this.context['email'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro Complemento - Enviar para Análise - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro Complemento - Enviar para Análise - Servidor");

  /**
   * Cadastro Complemento - Enviar para Análise - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro Complemento - Enviar para Análise - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * DEBUG: Destrói botão de envio
   */
  debugManager.debug(this, "FlowExpression2", "Destrói botão de envio");

  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * DEBUG: Destrói botaoIdentificacao
   */
  debugManager.debug(this, "FlowExpression1", "Destrói botaoIdentificacao");

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * DEBUG: Destrói botaoRenda
   */
  debugManager.debug(this, "FlowExpression5", "Destrói botaoRenda");

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * DEBUG: Destrói botaoResidencia
   */
  debugManager.debug(this, "FlowExpression6", "Destrói botaoResidencia");

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * DEBUG: Mensagem de Sucesso
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Cadastro enviado para Análise!', parseInt(2), null);

  /**
   * DEBUG: Mostra Alerta Análise
   */
  debugManager.debug(this, "FlowExpression4", "Mostra Alerta Análise");

  /**
   * Mostra Alerta Análise
   */
  ebfFormSetVisible.call(this, 'alertaAnalise', true);

  /**
   * DEBUG: Oculta labelBemVindoCompleto
   */
  debugManager.debug(this, "FlowExpression7", "Oculta labelBemVindoCompleto");

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Gravar Dados';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Desabilita gravar
   */
  debugManager.debug(this, "FlowExpression4", "Desabilita gravar");

  /**
   * Desabilita gravar
   */
  ebfFormSetEnabled.call(this, 'gravar', false);

  /**
   * DEBUG: Mostra spinner
   */
  debugManager.debug(this, "FlowExpression5", "Mostra spinner");

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerGravar'), 'display', 'inline-block');

  /**
   * DEBUG: Grava alterações
   */
  debugManager.debug(this, "FlowExpression3", "Grava alterações");

  /**
   * Grava alterações
   */
  ebfNavEditSaveRecordAsync.call(this);

  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision5", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Move main
     */
    debugManager.debug(this, "FlowExpression1", "Move main");

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * DEBUG: Move main Completo
     */
    debugManager.debug(this, "FlowExpression2", "Move main Completo");

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Voltar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Geral - Ativar Aba
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Ativar Aba");

  /**
   * Geral - Ativar Aba
   */
  new GeralAtivarAba(this, this.getSystem(), this.getForm()).run(this.context['Aba']);

  /**
   * DEBUG: Ocultar aba
   */
  debugManager.debug(this, "FlowExpression4", "Ocultar aba");

  /**
   * Ocultar aba
   */
  ebfFormShowTab.call(this, 'Reprovar', false);

  /**
   * DEBUG: Ativar aba
   */
  debugManager.debug(this, "FlowExpression1", "Ativar aba");

  /**
   * Ativar aba
   */
  ebfFormShowTab.call(this, 'Histórico', true);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Ativar Aba e Ocultar Abas';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['Aba'] = this.checkType(arguments[0], 'Letras');

  this.context['listaAbas'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['listaVariante'] = null;

  this.context['tamanhoLista'] = 0;

  this.context['contador'] = 0;

  debugManager.startRule(this);

  this.context['contador'] = parseInt(1);

  /**
   * DEBUG: Ativar Aba
   */
  debugManager.debug(this, "FlowExpression1", "Ativar Aba");

  /**
   * Ativar Aba
   */
  ebfFormOpenTab.call(this, this.context['Aba']);

  /**
   * DEBUG: Lista variante
   */
  debugManager.debug(this, "FlowExpression2", "Lista variante");

  /**
   * Lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaAbas'], ',');

  /**
   * DEBUG: Tamanho da Lista
   */
  debugManager.debug(this, "FlowExpression3", "Tamanho da Lista");

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * DEBUG: Contador <= Tamanho da Lista
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista");

  /**
   * Contador <= Tamanho da Lista
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * DEBUG: Ocultar aba
     */
    debugManager.debug(this, "FlowExpression4", "Ocultar aba");

    /**
     * Ocultar aba
     */
    ebfFormShowTab.call(this, ebfGetElementFromList.call(this, this.context['listaVariante'], this.context['contador']), false);

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression5", "Incrementa contador");

    /**
     * Incrementa contador
     */
    this.context['contador'] = oprAdd.call(this, this.context['contador'], parseFloat(1));

  /**
   * DEBUG: Contador <= Tamanho da Lista
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Apos alterar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  this.context['email'] = this.checkType(arguments[1], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro - Complemento - Apos alterar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine2", "Cadastro - Complemento - Apos alterar - Servidor");

  /**
   * Cadastro - Complemento - Apos alterar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Apos alterar - Servidor', [this.context['idPessoa'], this.context['email']]);

  /**
   * DEBUG: Destrói botão de gravar
   */
  debugManager.debug(this, "FlowExpression1", "Destrói botão de gravar");

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * DEBUG: True?
   */
  debugManager.debug(this, "FlowDecision1", "True?");

  /**
   * True?
   */
  if (parseBoolean(true)) {
      
    return this.FlowExpression3();

  } else {

    /**
     * DEBUG: Destrói botão de envio
     */
    debugManager.debug(this, "FlowExpression2", "Destrói botão de envio");

    /**
     * Destrói botão de envio
     */
    ebfDestroyComponent.call(this, 'enviar');

    /**
     * DEBUG: Mensagem de Sucesso
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'Cadastro enviado para Análise!', parseInt(2), null);

    /**
     * DEBUG: Mostra Alerta Análise
     */
    debugManager.debug(this, "FlowExpression4", "Mostra Alerta Análise");

    /**
     * Mostra Alerta Análise
     */
    ebfFormSetVisible.call(this, 'alertaAnalise', true);

    return this.FlowExpression3();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

CadastroComplementoAposAlterar.prototype.FlowExpression3 = function() {

    /**
     * DEBUG: Move main
     */
    debugManager.debug(this, "FlowExpression3", "Move main");

    /**
     * Move main
     */
    ebfFormSetPosition.call(this, 'main', parseInt(1000), parseInt(8));

    /**
     * DEBUG: Move main Completo
     */
    debugManager.debug(this, "FlowExpression5", "Move main Completo");

    /**
     * Move main Completo
     */
    ebfFormSetPosition.call(this, 'mainCompleto', parseInt(8), parseInt(8));

    /**
     * DEBUG: Oculta Main
     */
    debugManager.debug(this, "FlowExpression6", "Oculta Main");

    /**
     * Oculta Main
     */
    ebfFormSetVisible.call(this, 'main', false);

    /**
     * DEBUG: Mostra Main1
     */
    debugManager.debug(this, "FlowExpression7", "Mostra Main1");

    /**
     * Mostra Main1
     */
    ebfFormSetVisible.call(this, 'mainCompleto', true);

    /**
     * DEBUG: Cancela edição
     */
    debugManager.debug(this, "FlowExpression8", "Cancela edição");

    /**
     * Cancela edição
     */
    ebfNavEditCancel.call(this);

    /**
     * DEBUG: Mensagem de Sucesso
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Sucesso");

    /**
     * Mensagem de Sucesso
     */
    ActNewSuccessMessage(null, 'Dados gravados com sucesso! Envie os documentos necessários', parseInt(2), null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Fechar formulário';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Fechar formulário
   */
  debugManager.debug(this, "FlowExpression1", "Fechar formulário");

  /**
   * Fechar formulário
   */
  ebfCloseForm.call(this);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Investidor - Investe - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Investidor - Investe - Servidor");

  /**
   * Investidor - Investe - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Investe - Servidor', [this.context['idTransacao'], this.context['idCota'], this.context['qtd'], this.context['juros'], this.context['parcelas'], this.context['vlCotaSimples'], this.context['vlCotaInvestidor'], this.context['email'], this.context['nomeTomador']]);

  /**
   * DEBUG: Mensagem de Sucesso
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage('Parabéns!', 'Cotas Adquiridas!', null, null);

  /**
   * DEBUG: Desabilita Campos
   */
  debugManager.debug(this, "FlowSubRoutine2", "Desabilita Campos");

  /**
   * Desabilita Campos
   */
  new GenericosHabilitaDesabilitaCampos(this, this.getSystem(), this.getForm()).run('botaoInvestir,qtdCota', false);

  /**
   * DEBUG: Geral - Executar fluxo no formulário
   */
  debugManager.debug(this, "FlowSubRoutine3", "Geral - Executar fluxo no formulário");

  /**
   * Geral - Executar fluxo no formulário
   */
  new GeralExecutarFluxoNoFormulario(this, this.getSystem(), this.getForm()).run('{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Executar Fluxo no Formulário', ebfListParamsCreate.call(this, '{83E09CD4-343A-4876-AB87-3684EAE9DD52}', 'Investidor - Ao Entrar', ebfListParamsCreate.call(this, null)));

  /**
   * DEBUG: Fechar formulário
   */
  debugManager.debug(this, "FlowExpression1", "Fechar formulário");

  /**
   * Fechar formulário
   */
  ebfRuleSchedulerNoParent.call(this, 'Geral - Fechar formulário', ebfListParamsCreate.call(this, null), parseFloat(1000));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Enviar para análise';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['termos'] = this.checkType(arguments[1], 'Lógico');

  this.context['email'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Cadastro - Complemento - Enviar para análise - Verificação
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Complemento - Enviar para análise - Verificação");

  /**
   * Cadastro - Complemento - Enviar para análise - Verificação
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Complemento - Enviar para análise - Verificação', [this.context['idPessoa'], this.context['termos']]);

  /**
   * DEBUG: Desabilita enviar
   */
  debugManager.debug(this, "FlowExpression4", "Desabilita enviar");

  /**
   * Desabilita enviar
   */
  ebfFormSetEnabled.call(this, 'enviar', false);

  /**
   * DEBUG: Mostra spinner
   */
  debugManager.debug(this, "FlowExpression5", "Mostra spinner");

  /**
   * Mostra spinner
   */
  ebfHtmlCssDefineStyle.call(this, ebfHtmlGetElementById.call(this, 'spinnerAnalise'), 'display', 'inline-block');

  /**
   * DEBUG: Interação de Confirmação
   */
  debugManager.debug(this, "FlowActivity2", "Interação de Confirmação");

  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma o envio dos dados para análise?', 'Cadastro Complemento - Enviar para Análise - Intermediario', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['email']), null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd3", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Destruir Botões';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaBotoes'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['listaVariante'] = null;

  this.context['tamanhoLista'] = 0;

  this.context['contador'] = 0;

  debugManager.startRule(this);

  this.context['contador'] = parseInt(1);

  /**
   * DEBUG: Lista variante
   */
  debugManager.debug(this, "FlowExpression2", "Lista variante");

  /**
   * Lista variante
   */
  this.context['listaVariante'] = ebfSplit.call(this, this.context['listaBotoes'], ',');

  /**
   * DEBUG: Tamanho da Lista
   */
  debugManager.debug(this, "FlowExpression3", "Tamanho da Lista");

  /**
   * Tamanho da Lista
   */
  this.context['tamanhoLista'] = ebfListLength.call(this, this.context['listaVariante']);

  /**
   * DEBUG: Contador <= Tamanho da Lista
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista");

  /**
   * Contador <= Tamanho da Lista
   */
  while (parseBoolean(isMinorOrEqual.call(this, this.context['contador'], this.context['tamanhoLista']))) {

    /**
     * DEBUG: Existe componente?
     */
    debugManager.debug(this, "FlowDecision2", "Existe componente?");

    /**
     * Existe componente?
     */
    if (parseBoolean(ebfComponentExists.call(this, ebfGetElementFromList.call(this, this.context['listaVariante'], parseInt(1))))) {
        
      /**
       * DEBUG: Destruir Componente
       */
      debugManager.debug(this, "FlowExpression4", "Destruir Componente");

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

  /**
   * DEBUG: Contador <= Tamanho da Lista
   */
  debugManager.debug(this, "FlowDecision1", "Contador <= Tamanho da Lista");
  }

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

GeralDestruirBotoes.prototype.FlowExpression5 = function() {

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression5", "Incrementa contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Executar fluxo no Principal';
  this.context = new Array();

  debugManager.startRule(this);


  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Reprovar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Inteiro');

  this.context['motivo'] = this.checkType(arguments[1], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Motivo é nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Motivo é nulo ou vazio?");

  /**
   * Motivo é nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['motivo']))) {
      
    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Informe o motivo');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Interação de Confirmação
     */
    debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', 'Confirma a REPROVAÇÃO do cadastro do cliente?', 'Cadastro - Complemento - Reprova Intermediario', ebfListParamsCreate.call(this, null, this.context['idPessoa'], this.context['motivo']), null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Executar fluxo no formulário';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['formulario'] = this.checkType(arguments[0], 'Formulário');

  this.context['fluxo'] = this.checkType(arguments[1], 'Fluxo');

  this.context['listaParametros'] = this.checkType(arguments[2], 'Variante');

  debugManager.startRule(this);


  /**
   * DEBUG: Executar fluxo no formulário
   */
  debugManager.debug(this, "FlowExpression1", "Executar fluxo no formulário");

  /**
   * Executar fluxo no formulário
   */
  ebfChannelExecuteRuleOnForm.call(this, this.context['formulario'], this.context['fluxo'], this.context['listaParametros'], null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Atualizar Componente';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['componente'] = this.checkType(arguments[0], 'Componente');

  debugManager.startRule(this);


  /**
   * DEBUG: Atualizar componente
   */
  debugManager.debug(this, "FlowExpression1", "Atualizar componente");

  /**
   * Atualizar componente
   */
  ebfFormRefreshComponent.call(this, this.context['componente']);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar - Status 5';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Destrói botão de envio
   */
  debugManager.debug(this, "FlowExpression2", "Destrói botão de envio");

  /**
   * Destrói botão de envio
   */
  ebfDestroyComponent.call(this, 'enviar');

  /**
   * DEBUG: Destrói botão de gravar
   */
  debugManager.debug(this, "FlowExpression3", "Destrói botão de gravar");

  /**
   * Destrói botão de gravar
   */
  ebfDestroyComponent.call(this, 'gravar');

  /**
   * DEBUG: Destrói botaoIdentificacao
   */
  debugManager.debug(this, "FlowExpression1", "Destrói botaoIdentificacao");

  /**
   * Destrói botaoIdentificacao
   */
  ebfDestroyComponent.call(this, 'botaoIdentificacao');

  /**
   * DEBUG: Destrói botaoRenda
   */
  debugManager.debug(this, "FlowExpression5", "Destrói botaoRenda");

  /**
   * Destrói botaoRenda
   */
  ebfDestroyComponent.call(this, 'botaoRenda');

  /**
   * DEBUG: Destrói botaoResidencia
   */
  debugManager.debug(this, "FlowExpression6", "Destrói botaoResidencia");

  /**
   * Destrói botaoResidencia
   */
  ebfDestroyComponent.call(this, 'botaoResidencia');

  /**
   * DEBUG: Oculta labelBemVindoCompleto
   */
  debugManager.debug(this, "FlowExpression7", "Oculta labelBemVindoCompleto");

  /**
   * Oculta labelBemVindoCompleto
   */
  ebfFormSetVisible.call(this, 'labelBemVindoCompleto', false);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Timeline';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idPessoa'] = this.checkType(arguments[0], 'Letras');

  // Variáveis
  this.context['html'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Iniciliza popup
   */
  debugManager.debug(this, "FlowExpression2", "Iniciliza popup");

  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * DEBUG: Cadastro - Timeline - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Cadastro - Timeline - Servidor");

  /**
   * Cadastro - Timeline - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Cadastro - Timeline - Servidor', [this.context['idPessoa']]);

  /**
   * DEBUG: Carrega html da timeline
   */
  debugManager.debug(this, "FlowExpression1", "Carrega html da timeline");

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'principal'), ebfReplace.call(this, '<div class=\"container mt-5 mb-5\">\n   <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n         <h4>Histórico do Cliente</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n</div>', 'X:LINHA:X', this.context['html']));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Meus Investimentos - Ao Navegar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Investidor - Meus Investimentos - Ao Navegar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Investidor - Meus Investimentos - Ao Navegar - Servidor");

  /**
   * Investidor - Meus Investimentos - Ao Navegar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Meus Investimentos - Ao Navegar - Servidor');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Complemento - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['enviadoIdentificacao'] = this.checkType(arguments[0], 'Letras');

  this.context['enviadoRenda'] = this.checkType(arguments[1], 'Letras');

  this.context['enviadoResidencia'] = this.checkType(arguments[2], 'Letras');

  this.context['status'] = this.checkType(arguments[3], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Tem conjuge?
   */
  debugManager.debug(this, "FlowDecision4", "Tem conjuge?");

  /**
   * Tem conjuge?
   */
  if (parseBoolean(oprBetween.call(this, this.context['estadoCivil'], parseInt(2), parseInt(3)))) {
      
    return this.FlowConnector5();

  } else {

    /**
     * DEBUG: Desabilita CPF Conjuge
     */
    debugManager.debug(this, "FlowExpression3", "Desabilita CPF Conjuge");

    /**
     * Desabilita CPF Conjuge
     */
    ebfFormSetEnabled.call(this, 'cpfConjuge', false);

    return this.FlowConnector5();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

CadastroComplementoAoEntrar.prototype.FlowDecision2 = function() {

    /**
     * DEBUG: Falta documento Renda?
     */
    debugManager.debug(this, "FlowDecision2", "Falta documento Renda?");

    /**
     * Falta documento Renda?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoRenda'], 'NÃO'))) {
        
      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine2", "Geral - Mudar Descricao e Hint");

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoRenda', '<i class=\"fas fa-exclamation text-warning\"></i> Comprovante de Renda *', 'Documento não enviado!');

      return this.FlowDecision3();

    } else {

      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine4", "Geral - Mudar Descricao e Hint");

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoRenda', '<i class=\"far fa-check-circle text-success\"></i>   Comprovante de Renda', 'Documento Enviado!');

      return this.FlowDecision3();

    }
  }

CadastroComplementoAoEntrar.prototype.FlowDecision3 = function() {

    /**
     * DEBUG: Falta documento Residência?
     */
    debugManager.debug(this, "FlowDecision3", "Falta documento Residência?");

    /**
     * Falta documento Residência?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoResidencia'], 'NÃO'))) {
        
      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine5", "Geral - Mudar Descricao e Hint");

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoResidencia', '<i class=\"fas fa-exclamation text-warning\"></i> Comprovante de Residência *', 'Documento não enviado!');

      return this.FlowConnector3();

    } else {

      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine6", "Geral - Mudar Descricao e Hint");

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoResidencia', '<i class=\"far fa-check-circle text-success\"></i>   Comprovante de Residência', 'Documento Enviado!');

      return this.FlowConnector3();

    }
  }

CadastroComplementoAoEntrar.prototype.FlowConnector3 = function() {

    /**
     * DEBUG: Carrega alerta
     */
    debugManager.debug(this, "FlowExpression2", "Carrega alerta");

    /**
     * Carrega alerta
     */
    ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'alertaAnalise'), '<div class=\"alert alert-warning text-center\" role=\"alert\" style=\"font-weight: 600;\">\n Cadastro em análise! Aguarde notificação da equipe Peg2Pag\n</div>');

    /**
     * DEBUG: Status = 1?
     */
    debugManager.debug(this, "FlowDecision5", "Status = 1?");

    /**
     * Status = 1?
     */
    if (parseBoolean((isEqual.call(this, this.context['status'], parseInt(2)) || isEqual.call(this, this.context['status'], parseInt(6))))) {
        
      /**
       * DEBUG: Modo de Alteração
       */
      debugManager.debug(this, "FlowExpression1", "Modo de Alteração");

      /**
       * Modo de Alteração
       */
      ebfFormEditMode.call(this);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd1", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Cadastro - Complemento - Ao navegar - Mostra Oculta Container
       */
      debugManager.debug(this, "FlowSubRoutine7", "Cadastro - Complemento - Ao navegar - Mostra Oculta Container");

      /**
       * Cadastro - Complemento - Ao navegar - Mostra Oculta Container
       */
      new CadastroComplementoAoNavegarMostraOcultaContainer(this, this.getSystem(), this.getForm()).run(this.context['status']);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    }
  }

CadastroComplementoAoEntrar.prototype.FlowConnector5 = function() {

    /**
     * DEBUG: Falta Documento Identificação?
     */
    debugManager.debug(this, "FlowDecision1", "Falta Documento Identificação?");

    /**
     * Falta Documento Identificação?
     */
    if (parseBoolean(isEqual.call(this, this.context['enviadoIdentificacao'], 'NÃO'))) {
        
      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine1", "Geral - Mudar Descricao e Hint");

      /**
       * Geral - Mudar Descricao e Hint
       */
      new GeralMudarDescricaoEHint(this, this.getSystem(), this.getForm()).run('botaoIdentificacao', '<i class=\"fas fa-exclamation text-warning\" ></i> Documento de Identificação *', 'Documento não enviado!');

      return this.FlowDecision2();

    } else {

      /**
       * DEBUG: Geral - Mudar Descricao e Hint
       */
      debugManager.debug(this, "FlowSubRoutine3", "Geral - Mudar Descricao e Hint");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Ao Entrar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Centralizar Rating
   */
  debugManager.debug(this, "FlowExpression1", "Centralizar Rating");

  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Rating', 'C');

  /**
   * DEBUG: Centralizar Rating
   */
  debugManager.debug(this, "FlowExpression2", "Centralizar Rating");

  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas', 'C');

  /**
   * DEBUG: Geral - Alterar centralização das colunas da grade
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Alterar centralização das colunas da grade");

  /**
   * Geral - Alterar centralização das colunas da grade
   */
  new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimos', 'Parcelas,Data da Solicitação,Juros', 'C');

  /**
   * DEBUG: Investidor - Ao Entrar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine2", "Investidor - Ao Entrar - Servidor");

  /**
   * Investidor - Ao Entrar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Ao Entrar - Servidor');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);

  this.context['contador'] = parseInt(1);

  /**
   * DEBUG: Cria data inicial
   */
  debugManager.debug(this, "FlowExpression5", "Cria data inicial");

  /**
   * Cria data inicial
   */
  this.context['data'] = ebfCreateDate.call(this, ebfDateYear.call(this, ebfDateToday.call(this)), (isGreater.call(this, this.context['diaVencimento'], ebfDateDay.call(this, ebfDateToday.call(this))) ? oprAdd.call(this, ebfDateMonth.call(this, ebfDateToday.call(this)), parseInt(1)) : ebfDateMonth.call(this, ebfDateToday.call(this))), this.context['diaVencimento'], null, null, null);

  /**
   * DEBUG: Iniciliza popup
   */
  debugManager.debug(this, "FlowExpression2", "Iniciliza popup");

  /**
   * Iniciliza popup
   */
  ebfExecuteJS.call(this, '$(function () {\n  $(\'[data-toggle=\"popover\"]\').popover()\n})');

  /**
   * DEBUG: Obtem mensal
   */
  debugManager.debug(this, "FlowExpression4", "Obtem mensal");

  /**
   * Obtem mensal
   */
  this.context['mensal'] = ebfArredondaDecimal.call(this, oprDivide.call(this, this.context['montante'], this.context['prestação']), parseInt(2), true);

  /**
   * DEBUG: Contador < = Prestações
   */
  debugManager.debug(this, "FlowDecision1", "Contador < = Prestações");

  /**
   * Contador < = Prestações
   */
  while (parseBoolean(isMinor.call(this, toLong.call(this, this.context['contador']), toLong.call(this, this.context['prestação'])))) {

    /**
     * DEBUG: Contador > 4?
     */
    debugManager.debug(this, "FlowDecision2", "Contador > 4?");

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
       * DEBUG: html
       */
      debugManager.debug(this, "FlowExpression3", "html");

      /**
       * html
       */
      this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<li class=\"normal\">\n    <p>:XPARCELA:Xª parcela - Vencimento: X:DATA:X - Valor da Prestação: X:VALOR:X</p>\n </li>', 'X:VALOR:X', ebfConcat.call(this, 'R$ ', this.context['mensal'])), 'X:DATA:X', ebfSubstring.call(this, this.context['data'], parseInt(1), parseInt(10))), ':XPARCELA:X', this.context['contador']));

      var FlowExpression6 = this.FlowExpression6();
      if (!(FlowExpression6 instanceof InvalidVariant)) {
        return FlowExpression6;
      }

    }

  /**
   * DEBUG: Contador < = Prestações
   */
  debugManager.debug(this, "FlowDecision1", "Contador < = Prestações");
  }

  /**
   * DEBUG: html
   */
  debugManager.debug(this, "FlowExpression9", "html");

  /**
   * html
   */
  this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), '<li>\n   <p><b>.</b></p>\n   <p><b>.</b></p>\n  <p><b>.</b></p>\n </li>');

  /**
   * DEBUG: html
   */
  debugManager.debug(this, "FlowExpression8", "html");

  /**
   * html
   */
  this.context['html'] = ebfConcat.call(this, this.context['html'], ebfNewLineWithEscape.call(this, parseInt(1)), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<li class=\"normal\">\n    <p>:XPARCELA:Xª parcela - Vencimento: X:DATA:X - Valor da Prestação: X:VALOR:X</p>\n </li>', 'X:VALOR:X', ebfConcat.call(this, 'R$ ', this.context['mensal'])), 'X:DATA:X', ebfSubstring.call(this, this.context['data'], parseInt(1), parseInt(10))), ':XPARCELA:X', this.context['contador']));

  /**
   * DEBUG: Valor das cotas
   */
  debugManager.debug(this, "FlowExpression12", "Valor das cotas");

  /**
   * Valor das cotas
   */
  this.context['valorCotas'] = ebfArredondaDecimal.call(this, oprDivide.call(this, this.context['montante'], this.context['cotas']), parseInt(2), true);

  /**
   * DEBUG: Carrega html da timeline
   */
  debugManager.debug(this, "FlowExpression1", "Carrega html da timeline");

  /**
   * Carrega html da timeline
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'parcelas'), ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, ebfReplace.call(this, '<div class=\"container\">\n   <div class=\"row w-100\">\n      <div class=\"col-md-12\">\n         <h4>Simulação - Parcelas</h4>\n         <ul class=\"timeline\" id=\"linhatempo\">\n           X:LINHA:X\n         </ul>\n      </div>\n   </div>\n <hr style= \"margin-top: 0.2rem; margin-bottom: 0.5rem;\">\n  <div class=\"row w-100\">\n     <div class=\"col-md-9 pt-2\">\n           <span> Valor Final:<b> :XMONTANTE:X </b> </span>\n     </div>\n     <div class=\"col-md-5\" style=\"display:none\">\n           <span> Cotas:<b> :XCOTAS:X de :XVALORCOTAS:X cada</b> </span>\n     </div>\n      <div class=\"col-md-3\" id=\"idBotaoContratar\">\n        \n       </div>\n  </div>\n</div>', 'X:LINHA:X', this.context['html']), ':XMONTANTE:X ', ebfConcat.call(this, 'R$ ', ebfArredondaDecimal.call(this, this.context['montante'], parseInt(2), true))), ':XCOTAS:X', this.context['cotas']), ':XVALORCOTAS:X', ebfConcat.call(this, 'R$ ', this.context['valorCotas'])));

  /**
   * DEBUG: Anexa botão
   */
  debugManager.debug(this, "FlowExpression11", "Anexa botão");

  /**
   * Anexa botão
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'idBotaoContratar'), ebfHtmlGetMakerElementById.call(this, 'contratar'));

  /**
   * DEBUG: Mostrar botaoContratar
   */
  debugManager.debug(this, "FlowExpression10", "Mostrar botaoContratar");

  /**
   * Mostrar botaoContratar
   */
  ebfFormSetVisible.call(this, 'contratar', true);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

EmprestimoTimelineParcelas.prototype.FlowExpression6 = function() {

    /**
     * DEBUG: Incrementa data
     */
    debugManager.debug(this, "FlowExpression6", "Incrementa data");

    /**
     * Incrementa data
     */
    this.context['data'] = ebfDateIncMonth.call(this, this.context['data'], parseInt(1));

    /**
     * DEBUG: Incrementa contador
     */
    debugManager.debug(this, "FlowExpression7", "Incrementa contador");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Executa na moldura';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Atualiza gradeEmprestimo
   */
  debugManager.debug(this, "FlowExpression1", "Atualiza gradeEmprestimo");

  /**
   * Atualiza gradeEmprestimo
   */
  ebfFormRefreshComponent.call(this, 'gradeEmprestimo');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Meus Investimentos - Ao Entrar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Centralizar Rating
   */
  debugManager.debug(this, "FlowExpression1", "Centralizar Rating");

  /**
   * Centralizar Rating
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Rating', 'C');

  /**
   * DEBUG: Centralizar Cotas
   */
  debugManager.debug(this, "FlowExpression2", "Centralizar Cotas");

  /**
   * Centralizar Cotas
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas', 'C');

  /**
   * DEBUG: Centralizar Parcelas
   */
  debugManager.debug(this, "FlowExpression3", "Centralizar Parcelas");

  /**
   * Centralizar Parcelas
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Parcelas', 'C');

  /**
   * DEBUG: Centralizar Valor Cota (R$)
   */
  debugManager.debug(this, "FlowExpression4", "Centralizar Valor Cota (R$)");

  /**
   * Centralizar Valor Cota (R$)
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Valor Cota (R$)', 'C');

  /**
   * DEBUG: Centralizar Valor Cota (R$)
   */
  debugManager.debug(this, "FlowExpression5", "Centralizar Valor Cota (R$)");

  /**
   * Centralizar Valor Cota (R$)
   */
  ebfGridSetAlignColumn.call(this, 'gradeEmprestimos', 'Cotas Investidas', 'C');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd2", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Sair do Sistema';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Sair
   */
  debugManager.debug(this, "FlowExpression1", "Sair");

  /**
   * Sair
   */
  ebfSystemExit.call(this);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Verificar Status';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Parcela paga?
   */
  debugManager.debug(this, "FlowDecision1", "Parcela paga?");

  /**
   * Parcela paga?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(2))))) {
      
    /**
     * DEBUG: Mensagem de Alerta
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

    /**
     * Mensagem de Alerta
     */
    ActNewWarningMessage(null, 'Parcela já quitada!', null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Login - Abrir cadastro';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Abre url de cadastro
   */
  debugManager.debug(this, "FlowExpression1", "Abre url de cadastro");

  /**
   * Abre url de cadastro
   */
  ebfOpenUrlSameWindow.call(this, ebfConcat.call(this, executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Geral - Obter url do contexto'), '/form.jsp?sys=P2P&action=openform&formID=464570564&align=0&mode=-1&goto=-1&filter=&scrolling=no&popup=true'));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Emprestimos Disponíveis - Ao Navegar';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Investidor - Emprestimos Disponíves - Ao Navegar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Investidor - Emprestimos Disponíves - Ao Navegar - Servidor");

  /**
   * Investidor - Emprestimos Disponíves - Ao Navegar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Emprestimos Disponíves - Ao Navegar - Servidor');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Investidor - Obter Máximo de Cotas';
  this.context = new Array();

  debugManager.startRule(this);


  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Nulos ou vazios?
   */
  debugManager.debug(this, "FlowDecision2", "Nulos ou vazios?");

  /**
   * Nulos ou vazios?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['qtd']))) {
      
    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Selecione a quantidade de cotas!');

    return this.FlowEnd2();

  } else {

    /**
     * DEBUG: Qtd < 1?
     */
    debugManager.debug(this, "FlowDecision3", "Qtd < 1?");

    /**
     * Qtd < 1?
     */
    if (parseBoolean(isMinor.call(this, this.context['qtd'], parseInt(1)))) {
        
      /**
       * DEBUG: Mensagem de Alerta (Clássico)
       */
      debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta (Clássico)");

      /**
       * Mensagem de Alerta (Clássico)
       */
      ActWarningMessage('O valor mínimo da quantidade é 1');

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Qtd > max cotas?
       */
      debugManager.debug(this, "FlowDecision5", "Qtd > max cotas?");

      /**
       * Qtd > max cotas?
       */
      if (parseBoolean(isGreater.call(this, toLong.call(this, this.context['qtd']), toLong.call(this, this.context['maxCotas'])))) {
          
        /**
         * DEBUG: Mensagem de Alerta (Clássico)
         */
        debugManager.debug(this, "FlowActivity4", "Mensagem de Alerta (Clássico)");

        /**
         * Mensagem de Alerta (Clássico)
         */
        ActWarningMessage('A quantidade de cotas ultrapassa o máximo permitido!');

        return this.FlowEnd2();

      } else {

        /**
         * DEBUG: True?
         */
        debugManager.debug(this, "FlowDecision4", "True?");

        /**
         * True?
         */
        if (parseBoolean(true)) {
            
          return this.FlowActivity3();

        } else {

          /**
           * DEBUG: Investidor - Checar saldo Suficiente
           */
          debugManager.debug(this, "FlowSubRoutine1", "Investidor - Checar saldo Suficiente");

          /**
           * Investidor - Checar saldo Suficiente
           */
          this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Investidor - Checar saldo Suficiente', [this.context['valor'], this.context['idCota']]);

          /**
           * DEBUG: Retorno = 1?
           */
          debugManager.debug(this, "FlowDecision1", "Retorno = 1?");

          /**
           * Retorno = 1?
           */
          if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(1))))) {
              
            /**
             * DEBUG: Fim
             */
            debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

InvestidorAoClicarEmInvestir.prototype.FlowActivity3 = function() {

    /**
     * DEBUG: Interação de Confirmação
     */
    debugManager.debug(this, "FlowActivity3", "Interação de Confirmação");

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage(null, 'Confirma o Investimento?', 'Investidor - Investe - Intermediario', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['idCota'], this.context['qtd'], this.context['juros'], this.context['parcelas'], this.context['vlCotaSimples'], this.context['vlCotaInvestidor'], this.context['email'], this.context['nomeTomador']), null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd4", "Fim");

    /**
     * Fim
     */
    return null;
  }

InvestidorAoClicarEmInvestir.prototype.FlowEnd2 = function() {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Alterar Layout Sweet Alert';
  this.context = new Array();

  debugManager.startRule(this);


  /**
   * DEBUG: Alterar label do botão Ok
   */
  debugManager.debug(this, "FlowExpression1", "Alterar label do botão Ok");

  /**
   * Alterar label do botão Ok
   */
  ebfHtmlInnerHtml.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(2)), 'SIM');

  /**
   * DEBUG: Alterar classe do botão Ok
   */
  debugManager.debug(this, "FlowExpression2", "Alterar classe do botão Ok");

  /**
   * Alterar classe do botão Ok
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(2)), 'class', 'swal2-deny swal2-styled');

  /**
   * DEBUG: Alterar label do botão Cancelar
   */
  debugManager.debug(this, "FlowExpression3", "Alterar label do botão Cancelar");

  /**
   * Alterar label do botão Cancelar
   */
  ebfHtmlInnerHtml.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(4)), 'NÃO');

  /**
   * DEBUG: Alterar classe do botão Cancelar
   */
  debugManager.debug(this, "FlowExpression4", "Alterar classe do botão Cancelar");

  /**
   * Alterar classe do botão Cancelar
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlChildNodes.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementByClassName.call(this, 'swal2-actions', ebfHtmlGetBodyElement.call(this)), parseInt(1))), parseInt(4)), 'class', 'swal2-confirm swal2-styled');

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Disponiveis - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['cotasrecebidas'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Sem cotas?
   */
  debugManager.debug(this, "FlowDecision1", "Sem cotas?");

  /**
   * Sem cotas?
   */
  if (parseBoolean((isEqual.call(this, toLong.call(this, this.context['cotasrecebidas']), toLong.call(this, parseInt(0))) || isNullOrEmpty.call(this, this.context['cotasrecebidas'])))) {
      
    /**
     * DEBUG: Oculta botão
     */
    debugManager.debug(this, "FlowExpression2", "Oculta botão");

    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Mostrar componente
     */
    debugManager.debug(this, "FlowExpression1", "Mostrar componente");

    /**
     * Mostrar componente
     */
    ebfFormSetVisible.call(this, 'MakerButton1', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Questionário - Ao modificar resposta';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['id'] = this.checkType(arguments[0], 'Inteiro');

  // Variáveis
  this.context['valor'] = '';

  this.context['idQuestionario'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem resposta
   */
  debugManager.debug(this, "FlowExpression1", "Obtem resposta");

  /**
   * Obtem resposta
   */
  this.context['valor'] = ebfFormGetComponentValue.call(this, ebfGetGUIDActualForm.call(this), ebfConcat.call(this, 'lista', this.context['id']));

  /**
   * DEBUG: Obtem idQuestionario
   */
  debugManager.debug(this, "FlowExpression2", "Obtem idQuestionario");

  /**
   * Obtem idQuestionario
   */
  this.context['idQuestionario'] = ebfFormGetComponentValue.call(this, ebfGetGUIDActualForm.call(this), 'questionario');

  /**
   * DEBUG: Tomador - Questionário - Ao modificar resposta - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Questionário - Ao modificar resposta - Servidor");

  /**
   * Tomador - Questionário - Ao modificar resposta - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Ao modificar resposta - Servidor', [this.context['id'], this.context['valor'], this.context['idQuestionario']]);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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
 * @since 27/02/2023 20:35:05
 */
TomadorAceitarEmprestimo.prototype.run = function() {

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Aceitar Emprestimo';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idTransacao'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Inteiro');

  // Variáveis
  this.context['retornoValor'] = 0;

  this.context['texto'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Tomador - Aceitar Emprestimo - Verifica Valor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Aceitar Emprestimo - Verifica Valor");

  /**
   * Tomador - Aceitar Emprestimo - Verifica Valor
   */
  this.context['retornoValor'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Verifica Valor', [this.context['idTransacao']]);

  /**
   * DEBUG: Retorno = 1?
   */
  debugManager.debug(this, "FlowDecision1", "Retorno = 1?");

  /**
   * Retorno = 1?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retornoValor']), toLong.call(this, parseInt(1))))) {
      
    /**
     * DEBUG: Tomador - Aceitar Emprestimo - Verifica Valor - Texto
     */
    debugManager.debug(this, "FlowSubRoutine4", "Tomador - Aceitar Emprestimo - Verifica Valor - Texto");

    /**
     * Tomador - Aceitar Emprestimo - Verifica Valor - Texto
     */
    this.context['texto'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Verifica Valor - Texto', [this.context['idTransacao'], null, null]);

    /**
     * DEBUG: Interação de Confirmação
     */
    debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', ebfConcat.call(this, 'O valor das cotas é menor do que o valor solicitado! Valor atual:', ebfNewLineWithEscape.call(this, parseInt(2)), this.context['texto'], ebfNewLineWithEscape.call(this, parseInt(2)), ' Deseja aceitar o empréstimo com o valor atual?'), 'Tomador - Aceitar Emprestimo - Intermediário', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['retornoValor'], this.context['idPessoa']), null, null);

    /**
     * DEBUG: Geral - Alterar Layout Sweet Alert
     */
    debugManager.debug(this, "FlowSubRoutine2", "Geral - Alterar Layout Sweet Alert");

    /**
     * Geral - Alterar Layout Sweet Alert
     */
    new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

    /**
     * DEBUG: Alinhar texto à direita
     */
    debugManager.debug(this, "FlowExpression1", "Alinhar texto à direita");

    /**
     * Alinhar texto à direita
     */
    ebfHtmlSetAttribute.call(this, ebfHtmlGetElementById.call(this, 'swal2-content'), 'style', 'display: block;text-align: left;\n');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Interação de Confirmação
     */
    debugManager.debug(this, "FlowActivity2", "Interação de Confirmação");

    /**
     * Interação de Confirmação
     */
    ActNewInteractionConfirmMessage('Atenção!', 'Confirma a solicitação de empréstimo?', 'Tomador - Aceitar Emprestimo - Intermediário', ebfListParamsCreate.call(this, null, this.context['idTransacao'], this.context['retornoValor'], this.context['idPessoa']), null, null);

    /**
     * DEBUG: Geral - Alterar Layout Sweet Alert
     */
    debugManager.debug(this, "FlowSubRoutine3", "Geral - Alterar Layout Sweet Alert");

    /**
     * Geral - Alterar Layout Sweet Alert
     */
    new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Geral - Mostra/Oculta nome social';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeSocial'] = this.checkType(arguments[0], 'Letras');

  this.context['listaNomeSocial'] = this.checkType(arguments[1], 'Letras');

  this.context['listaNomeRegistro'] = this.checkType(arguments[2], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Nome social nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Nome social nulo ou vazio?");

  /**
   * Nome social nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['nomeSocial']))) {
      
    /**
     * DEBUG: Esconde Campos
     */
    debugManager.debug(this, "FlowSubRoutine3", "Esconde Campos");

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeSocial'], false);

    /**
     * DEBUG: Mostra Campos
     */
    debugManager.debug(this, "FlowSubRoutine4", "Mostra Campos");

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeRegistro'], true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Esconde Campos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Esconde Campos");

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeRegistro'], false);

    /**
     * DEBUG: Mostra Campos
     */
    debugManager.debug(this, "FlowSubRoutine2", "Mostra Campos");

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run(this.context['listaNomeSocial'], true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Cadastro - Usuario - Ao navegar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['nomeSocial'] = this.checkType(arguments[0], 'Letras');

  debugManager.startRule(this);


  /**
   * DEBUG: Nome social nulo ou vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Nome social nulo ou vazio?");

  /**
   * Nome social nulo ou vazio?
   */
  if (parseBoolean(isNullOrEmpty.call(this, this.context['nomeSocial']))) {
      
    /**
     * DEBUG: Esconde Campos
     */
    debugManager.debug(this, "FlowSubRoutine3", "Esconde Campos");

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nomeSocialTexto,labelSocial', false);

    /**
     * DEBUG: Mostra Campos
     */
    debugManager.debug(this, "FlowSubRoutine4", "Mostra Campos");

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nome1,labelNome1', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Esconde Campos
     */
    debugManager.debug(this, "FlowSubRoutine1", "Esconde Campos");

    /**
     * Esconde Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nome1,labelNome1', false);

    /**
     * DEBUG: Mostra Campos
     */
    debugManager.debug(this, "FlowSubRoutine2", "Mostra Campos");

    /**
     * Mostra Campos
     */
    new GenericosMostraEscondeCampos(this, this.getSystem(), this.getForm()).run('nomeSocialTexto,labelSocial', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runCadastroUsuarioAoNavegar(parent, sys, formID, params) {
  var rule = new CadastroUsuarioAoNavegar(parent, sys, formID);
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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Cria lista
   */
  debugManager.debug(this, "FlowExpression1", "Cria lista");

  /**
   * Cria lista
   */
  ebfComboBoxNew.call(this, 'Cadastro', parseInt(10), this.context['contador'], parseInt(150), parseInt(30), '', this.context['listaValores'], this.context['listaValores'], ebfConcat.call(this, 'lista', this.context['id']), null, null);

  /**
   * DEBUG: Anexa na div
   */
  debugManager.debug(this, "FlowExpression2", "Anexa na div");

  /**
   * Anexa na div
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, ebfConcat.call(this, 'resp', this.context['id'])), ebfHtmlGetMakerElementById.call(this, ebfConcat.call(this, 'lista', this.context['id'])));

  /**
   * DEBUG: Associar fluxo
   */
  debugManager.debug(this, "FlowExpression3", "Associar fluxo");

  /**
   * Associar fluxo
   */
  ebfComponentEventAssociate.call(this, ebfConcat.call(this, 'lista', this.context['id']), 'onchange', 'Tomador - Questionário - Ao modificar resposta', ebfListParamsCreate.call(this, this.context['id']));

  /**
   * DEBUG: Tomador - Questionário - Criar lista - Carregar valor atual
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Questionário - Criar lista - Carregar valor atual");

  /**
   * Tomador - Questionário - Criar lista - Carregar valor atual
   */
  this.context['valor'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Criar lista - Carregar valor atual', [this.context['idQuestionario'], this.context['id']]);

  /**
   * DEBUG: Alterar valor do componente
   */
  debugManager.debug(this, "FlowExpression5", "Alterar valor do componente");

  /**
   * Alterar valor do componente
   */
  ebfFormChangeComponentValue.call(this, ebfGetGUIDActualForm.call(this), ebfConcat.call(this, 'lista', this.context['id']), this.context['valor']);

  /**
   * DEBUG: Altera value
   */
  debugManager.debug(this, "FlowExpression4", "Altera value");

  /**
   * Altera value
   */
  ebfHtmlSetAttribute.call(this, ebfGetElementFromList.call(this, ebfHtmlGetElementsByTagName.call(this, 'input', ebfHtmlGetMakerElementById.call(this, ebfConcat.call(this, 'lista', this.context['id']))), parseInt(1)), 'value', this.context['valor']);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runTomadorQuestionarioCriarLista(parent, sys, formID, params) {
  var rule = new TomadorQuestionarioCriarLista(parent, sys, formID);
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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Algum vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Algum vazio?");

  /**
   * Algum vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['parcelas']) || isNullOrEmpty.call(this, this.context['valor']) || isNullOrEmpty.call(this, this.context['diaVencimento'])))) {
      
    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Preencha todos os valores!');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Valor > Valor Máximo?
     */
    debugManager.debug(this, "FlowDecision2", "Valor > Valor Máximo?");

    /**
     * Valor > Valor Máximo?
     */
    if (parseBoolean(isGreater.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, this.context['valorMaximo'])))) {
        
      /**
       * DEBUG: Limpa valor
       */
      debugManager.debug(this, "FlowExpression4", "Limpa valor");

      /**
       * Limpa valor
       */
      ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

      /**
       * DEBUG: Mensagem de Alerta
       */
      debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'O valor ultrapassa o permitido', null, null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd3", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Valor < Valor Mínimo?
       */
      debugManager.debug(this, "FlowDecision3", "Valor < Valor Mínimo?");

      /**
       * Valor < Valor Mínimo?
       */
      if (parseBoolean(isMinor.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, parseFloat(300))))) {
          
        /**
         * DEBUG: Limpa valor
         */
        debugManager.debug(this, "FlowExpression5", "Limpa valor");

        /**
         * Limpa valor
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

        /**
         * DEBUG: Mensagem de Alerta
         */
        debugManager.debug(this, "FlowActivity3", "Mensagem de Alerta");

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'o valor mínimo é R$ 300,00', null, null);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Obtem juros decimal
         */
        debugManager.debug(this, "FlowExpression1", "Obtem juros decimal");

        /**
         * Obtem juros decimal
         */
        this.context['jurosDecimal'] = oprDivide.call(this, oprAdd.call(this, this.context['juros'], this.context['spread']), parseFloat(100));

        /**
         * DEBUG: Calcula montante
         */
        debugManager.debug(this, "FlowExpression2", "Calcula montante");

        /**
         * Calcula montante
         */
        this.context['montante'] = oprMultiply.call(this, this.context['valor'], oprPow.call(this, oprAdd.call(this, parseFloat(1), this.context['jurosDecimal']), this.context['parcelas']));

        /**
         * DEBUG: Carrega o montante
         */
        debugManager.debug(this, "FlowExpression3", "Carrega o montante");

        /**
         * Carrega o montante
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'montante', this.context['montante']);

        /**
         * DEBUG: Emprestimo - Timeline Parcelas
         */
        debugManager.debug(this, "FlowSubRoutine1", "Emprestimo - Timeline Parcelas");

        /**
         * Emprestimo - Timeline Parcelas
         */
        new EmprestimoTimelineParcelas(this, this.getSystem(), this.getForm()).run(null, this.context['montante'], this.context['parcelas'], this.context['diaVencimento'], this.context['cotas']);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Aceitar Emprestimo - Intermediário';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['logico'] = this.checkType(arguments[0], 'Lógico');

  this.context['idTransacao'] = this.checkType(arguments[1], 'Inteiro');

  this.context['retorno'] = this.checkType(arguments[2], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[3], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Valor menor?
   */
  debugManager.debug(this, "FlowDecision1", "Valor menor?");

  /**
   * Valor menor?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(1))))) {
      
    /**
     * DEBUG: Tomador - Aceitar Emprestimo - Servidor - Valor menor
     */
    debugManager.debug(this, "FlowSubRoutine2", "Tomador - Aceitar Emprestimo - Servidor - Valor menor");

    /**
     * Tomador - Aceitar Emprestimo - Servidor - Valor menor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Servidor - Valor menor', [this.context['idTransacao'], this.context['retorno'], this.context['idPessoa']]);

    /**
     * DEBUG: Oculta botão
     */
    debugManager.debug(this, "FlowExpression3", "Oculta botão");

    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * DEBUG: Mostra coluna Pagar
     */
    debugManager.debug(this, "FlowExpression4", "Mostra coluna Pagar");

    /**
     * Mostra coluna Pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    /**
     * DEBUG: Atualizar formulário
     */
    debugManager.debug(this, "FlowExpression1", "Atualizar formulário");

    /**
     * Atualizar formulário
     */
    ebfRefreshFormModal.call(this);

    return this.FlowExpression2();

  } else {

    /**
     * DEBUG: Tomador - Aceitar Emprestimo - Servidor
     */
    debugManager.debug(this, "FlowSubRoutine1", "Tomador - Aceitar Emprestimo - Servidor");

    /**
     * Tomador - Aceitar Emprestimo - Servidor
     */
    executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Aceitar Emprestimo - Servidor', [this.context['idTransacao'], this.context['retorno'], this.context['idPessoa']]);

    return this.FlowExpression2();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TomadorAceitarEmprestimoIntermediario.prototype.FlowExpression2 = function() {

    /**
     * DEBUG: Mostra botão pagar
     */
    debugManager.debug(this, "FlowExpression2", "Mostra botão pagar");

    /**
     * Mostra botão pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['listaColunas'] = this.checkType(arguments[0], 'Letras');

  this.context['status'] = this.checkType(arguments[1], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Oculta botão pagar
   */
  debugManager.debug(this, "FlowExpression1", "Oculta botão pagar");

  /**
   * Oculta botão pagar
   */
  ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', false);

  /**
   * DEBUG: Aguardando investidores?
   */
  debugManager.debug(this, "FlowDecision1", "Aguardando investidores?");

  /**
   * Aguardando investidores?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(1))))) {
      
    return this.FlowSubRoutine1();

  } else {

    /**
     * DEBUG: Oculta botão
     */
    debugManager.debug(this, "FlowExpression2", "Oculta botão");

    /**
     * Oculta botão
     */
    ebfFormSetVisible.call(this, 'MakerButton1', false);

    /**
     * DEBUG: Mostra coluna Pagar
     */
    debugManager.debug(this, "FlowExpression3", "Mostra coluna Pagar");

    /**
     * Mostra coluna Pagar
     */
    ebfGridShowColumn.call(this, '{189EA937-DF21-481B-AF0A-59A08B3BFD31}', 'gradeEmprestimo', 'Pagar', true);

    return this.FlowSubRoutine1();

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

TomadorAoEntrar.prototype.FlowSubRoutine1 = function() {

    /**
     * DEBUG: Geral - Ajustar Largura das Colunas da Grade
     */
    debugManager.debug(this, "FlowSubRoutine1", "Geral - Ajustar Largura das Colunas da Grade");

    /**
     * Geral - Ajustar Largura das Colunas da Grade
     */
    new GeralAjustarLarguraDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo');

    /**
     * DEBUG: Geral - Alterar centralização das colunas da grade
     */
    debugManager.debug(this, "FlowSubRoutine2", "Geral - Alterar centralização das colunas da grade");

    /**
     * Geral - Alterar centralização das colunas da grade
     */
    new GeralAlterarCentralizacaoDasColunasDaGrade(this, this.getSystem(), this.getForm()).run('gradeEmprestimo', this.context['listaColunas'], 'C');

    /**
     * DEBUG: Font-google
     */
    debugManager.debug(this, "FlowExpression6", "Font-google");

    /**
     * Font-google
     */
    ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

    /**
     * DEBUG: Tornar grade acessível
     */
    debugManager.debug(this, "FlowExpression4", "Tornar grade acessível");

    /**
     * Tornar grade acessível
     */
    ComponenteEditavel.call(this, 'gradeEmprestimo');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Questionário - Finalizar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idQuestionario'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idPessoa'] = this.checkType(arguments[1], 'Letras');

  // Variáveis
  this.context['retorno'] = 0;

  debugManager.startRule(this);


  /**
   * DEBUG: Tomador - Questionário - Finalizar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Questionário - Finalizar - Servidor");

  /**
   * Tomador - Questionário - Finalizar - Servidor
   */
  this.context['retorno'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Finalizar - Servidor', [this.context['idQuestionario']]);

  /**
   * DEBUG: Retorno igual a 0?
   */
  debugManager.debug(this, "FlowDecision1", "Retorno igual a 0?");

  /**
   * Retorno igual a 0?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['retorno']), toLong.call(this, parseInt(0))))) {
      
    /**
     * DEBUG: Define vsTomadorFinalizarQuestionario
     */
    debugManager.debug(this, "FlowExpression8", "Define vsTomadorFinalizarQuestionario");

    /**
     * Define vsTomadorFinalizarQuestionario
     */
    ebfSetSessionAttribute.call(this, 'vsTomadorFinalizarQuestionario', toLong.call(this, parseInt(1)), false);

    /**
     * DEBUG: Abrir form no principal
     */
    debugManager.debug(this, "FlowExpression1", "Abrir form no principal");

    /**
     * Abrir form no principal
     */
    ebfChannelExecuteRuleOnForm.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Abrir form filtrado na moldura', ebfListParamsCreate.call(this, 'cad_pessoa.id_pessoa', ebfConcat.call(this, this.context['idPessoa'], '@long'), '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}'), null, null);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Responda todas as perguntas!');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Questionário - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idquestionario'] = this.checkType(arguments[0], 'Inteiro');

  // Variáveis
  this.context['html'] = '';

  debugManager.startRule(this);


  /**
   * DEBUG: Oculta edição de gradeQuestionario
   */
  debugManager.debug(this, "FlowExpression1", "Oculta edição de gradeQuestionario");

  /**
   * Oculta edição de gradeQuestionario
   */
  ebfGridSetVisibleMainButtons.call(this, 'gradeQuestionario', false, false);

  /**
   * DEBUG: gradeQuestionario em modo de edição
   */
  debugManager.debug(this, "FlowExpression2", "gradeQuestionario em modo de edição");

  /**
   * gradeQuestionario em modo de edição
   */
  ebfGridEditableEdit.call(this, 'gradeQuestionario');

  /**
   * DEBUG: Cria moldura
   */
  debugManager.debug(this, "FlowExpression4", "Cria moldura");

  /**
   * Cria moldura
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetMakerElementById.call(this, 'molduraMain'), '  <div id=\"molduraQuestionario\" class=\"card shadow\">\n    <div class = \"row\" id=\"rowPrincipal\">\n       <div class=\"col-12\" id =\"colPrincipal\">\n       </div>\n    </div>\n    <div class =\"row p-1\" id=\"rowBotao\" style=\"height: 50px;\">\n       <div class=\"col-8 pb-2\" id=\"dummy\">\n       </div>\n       <div class=\"col-4 pb-2\" id=\"colBotao\">\n       </div>\n    </div>\n  </div>');

  /**
   * DEBUG: Tomador - Questionário - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Tomador - Questionário - Servidor");

  /**
   * Tomador - Questionário - Servidor
   */
  this.context['html'] = executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Servidor', [toLong.call(this, this.context['idquestionario'])]);

  /**
   * DEBUG: Carrega colPrincipal
   */
  debugManager.debug(this, "FlowExpression3", "Carrega colPrincipal");

  /**
   * Carrega colPrincipal
   */
  ebfHtmlInnerHtml.call(this, ebfHtmlGetElementById.call(this, 'colPrincipal'), this.context['html']);

  /**
   * DEBUG: Tomador - Questionário - Respostas - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine2", "Tomador - Questionário - Respostas - Servidor");

  /**
   * Tomador - Questionário - Respostas - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Tomador - Questionário - Respostas - Servidor', [this.context['idquestionario']]);

  /**
   * DEBUG: Anexa botão
   */
  debugManager.debug(this, "FlowExpression5", "Anexa botão");

  /**
   * Anexa botão
   */
  ebfHtmlAppendElementAt.call(this, ebfHtmlGetElementById.call(this, 'colBotao'), ebfHtmlGetMakerElementById.call(this, 'botaoFinalizar'));

  /**
   * DEBUG: Importa CSS
   */
  debugManager.debug(this, "FlowExpression6", "Importa CSS");

  /**
   * Importa CSS
   */
  ebfCSSImportContent.call(this, '[id^=lista],#botaoFinalizar{\n  top: unset !important;\n  width: 70% !important\n}\n\n#botaoFinalizar{\n left: unset !important;\n}', null);

  /**
   * DEBUG: Mensagem de Alerta
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Alerta");

  /**
   * Mensagem de Alerta
   */
  ActNewWarningMessage(null, 'Responda nosso questionário para solicitar um empréstimo', null, null);

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Ao entrar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['status'] = this.checkType(arguments[0], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Parcela paga?
   */
  debugManager.debug(this, "FlowDecision1", "Parcela paga?");

  /**
   * Parcela paga?
   */
  if (parseBoolean(isEqual.call(this, toLong.call(this, this.context['status']), toLong.call(this, parseInt(2))))) {
      
    /**
     * DEBUG: Font-google
     */
    debugManager.debug(this, "FlowExpression6", "Font-google");

    /**
     * Font-google
     */
    ebfCSSImportContent.call(this, '/* cyrillic-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format(\'woff2\');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \'Montserrat\';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/montserrat/v18/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format(\'woff2\');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}', null);

    /**
     * DEBUG: Foca componente
     */
    debugManager.debug(this, "FlowExpression1", "Foca componente");

    /**
     * Foca componente
     */
    ebfFormSetFocus.call(this, 'qtdCota');

    /**
     * DEBUG: Remove barra do form
     */
    debugManager.debug(this, "FlowExpression3", "Remove barra do form");

    /**
     * Remove barra do form
     */
    EasyRemoveDivFormModal.call(this);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Emprestimo - Simulação - Ao sair do valor';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['valor'] = this.checkType(arguments[0], 'Fracionado');

  // Variáveis
  this.context['resto'] = 0;

  this.context['múltiplo'] = 0.0;

  debugManager.startRule(this);


  /**
   * DEBUG: Obtem resto
   */
  debugManager.debug(this, "FlowExpression1", "Obtem resto");

  /**
   * Obtem resto
   */
  this.context['resto'] = ebfOprMod.call(this, this.context['valor'], parseFloat(50));

  /**
   * DEBUG: Existe resto?
   */
  debugManager.debug(this, "FlowDecision1", "Existe resto?");

  /**
   * Existe resto?
   */
  if (parseBoolean(isGreater.call(this, toLong.call(this, this.context['resto']), toLong.call(this, parseInt(0))))) {
      
    /**
     * DEBUG: Obtem valor
     */
    debugManager.debug(this, "FlowExpression2", "Obtem valor");

    /**
     * Obtem valor
     */
    this.context['múltiplo'] = oprMultiply.call(this, ebfMathCeil.call(this, toDouble.call(this, oprDivide.call(this, this.context['valor'], parseFloat(50)))), parseFloat(50));

    /**
     * DEBUG: Altera valor
     */
    debugManager.debug(this, "FlowExpression3", "Altera valor");

    /**
     * Altera valor
     */
    ebfFormChangeComponentValueAndMask.call(this, ebfGetGUIDActualForm.call(this), 'valorSimulacao', this.context['múltiplo']);

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd1", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd2", "Fim");

    /**
     * Fim
     */
    return null;

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Desabilita botões
   */
  debugManager.debug(this, "FlowSubRoutine2", "Desabilita botões");

  /**
   * Desabilita botões
   */
  new GeralHabilitaDesabilitaCamposComLista(this, this.getSystem(), this.getForm()).run('MakerButton3,contratar', false);

  /**
   * DEBUG: Emprestimo - Solitcitar - Servidor
   */
  debugManager.debug(this, "FlowSubRoutine1", "Emprestimo - Solitcitar - Servidor");

  /**
   * Emprestimo - Solitcitar - Servidor
   */
  executeSyncJavaRule.call(this, this.getSystem(), this.getForm(), 'Emprestimo - Solitcitar - Servidor', [this.context['idPessoa'], this.context['valor'], this.context['parcelas'], this.context['diaVencimento'], this.context['dtPrimeiroVenc'], this.context['cotas']]);

  /**
   * DEBUG: Importa css
   */
  debugManager.debug(this, "FlowExpression2", "Importa css");

  /**
   * Importa css
   */
  ebfCSSImportContent.call(this, '.swal2-confirm{\n  display: none !important;\n}', null);

  /**
   * DEBUG: Mensagem de Sucesso
   */
  debugManager.debug(this, "FlowActivity1", "Mensagem de Sucesso");

  /**
   * Mensagem de Sucesso
   */
  ActNewSuccessMessage(null, 'Solicitação efetuada com sucesso! Aguarde, estamos lhe redirecionando...', null, null);

  /**
   * DEBUG: Agenda execução de fluxo
   */
  debugManager.debug(this, "FlowExpression1", "Agenda execução de fluxo");

  /**
   * Agenda execução de fluxo
   */
  ebfRuleSchedulerNoParent.call(this, 'Geral - Executar fluxo no formulário', ebfListParamsCreate.call(this, '{DDAE4D3C-A545-4F04-9A20-BABE303A7756}', 'Geral - Abrir form filtrado na moldura', ebfListParamsCreate.call(this, 'fin_tomador.idpessoa', ebfConcat.call(this, this.context['idPessoa'], '@long'), '{189EA937-DF21-481B-AF0A-59A08B3BFD31}')), parseFloat(3000));

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

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

  debugManager.startRule(this);


  /**
   * DEBUG: Algum vazio?
   */
  debugManager.debug(this, "FlowDecision1", "Algum vazio?");

  /**
   * Algum vazio?
   */
  if (parseBoolean((isNullOrEmpty.call(this, this.context['parcelas']) || isNullOrEmpty.call(this, this.context['valor']) || isNullOrEmpty.call(this, this.context['vencimento'])))) {
      
    /**
     * DEBUG: Mensagem de Alerta (Clássico)
     */
    debugManager.debug(this, "FlowActivity4", "Mensagem de Alerta (Clássico)");

    /**
     * Mensagem de Alerta (Clássico)
     */
    ActWarningMessage('Preencha todos os valores!');

    /**
     * DEBUG: Fim
     */
    debugManager.debug(this, "FlowEnd3", "Fim");

    /**
     * Fim
     */
    return null;

  } else {

    /**
     * DEBUG: Valor > Valor Máximo?
     */
    debugManager.debug(this, "FlowDecision2", "Valor > Valor Máximo?");

    /**
     * Valor > Valor Máximo?
     */
    if (parseBoolean(isGreater.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, this.context['valorMaximo'])))) {
        
      /**
       * DEBUG: Limpa valor
       */
      debugManager.debug(this, "FlowExpression4", "Limpa valor");

      /**
       * Limpa valor
       */
      ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

      /**
       * DEBUG: Mensagem de Alerta
       */
      debugManager.debug(this, "FlowActivity2", "Mensagem de Alerta");

      /**
       * Mensagem de Alerta
       */
      ActNewWarningMessage(null, 'O valor ultrapassa o permitido', null, null);

      /**
       * DEBUG: Fim
       */
      debugManager.debug(this, "FlowEnd2", "Fim");

      /**
       * Fim
       */
      return null;

    } else {

      /**
       * DEBUG: Valor < Valor Mínimo?
       */
      debugManager.debug(this, "FlowDecision3", "Valor < Valor Mínimo?");

      /**
       * Valor < Valor Mínimo?
       */
      if (parseBoolean(isMinor.call(this, toDouble.call(this, this.context['valor']), toDouble.call(this, parseFloat(300))))) {
          
        /**
         * DEBUG: Limpa valor
         */
        debugManager.debug(this, "FlowExpression5", "Limpa valor");

        /**
         * Limpa valor
         */
        ebfFormChangeComponentValue.call(this, '{ABA1C70C-1E02-4370-8CD4-C899CB73EE6E}', 'valorSimulacao', null);

        /**
         * DEBUG: Mensagem de Alerta
         */
        debugManager.debug(this, "FlowActivity3", "Mensagem de Alerta");

        /**
         * Mensagem de Alerta
         */
        ActNewWarningMessage(null, 'o valor mínimo é R$ 300,00', null, null);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd4", "Fim");

        /**
         * Fim
         */
        return null;

      } else {

        /**
         * DEBUG: Desabilita botões
         */
        debugManager.debug(this, "FlowSubRoutine2", "Desabilita botões");

        /**
         * Desabilita botões
         */
        new GeralHabilitaDesabilitaCamposComLista(this, this.getSystem(), this.getForm()).run('MakerButton3,contratar', false);

        /**
         * DEBUG: Interação de Confirmação
         */
        debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

        /**
         * Interação de Confirmação
         */
        ActNewInteractionConfirmMessage(null, 'Confirma a solicitação do empréstimo?', 'Emprestimo - Solitcitar - Confirma', ebfListParamsCreate.call(this, this.context['idPessoa'], this.context['valor'], this.context['parcelas'], this.context['juros'], this.context['vencimento'], this.context['idPessoa'], null, this.context['cotas']), '', null);

        /**
         * DEBUG: Fim
         */
        debugManager.debug(this, "FlowEnd1", "Fim");

        /**
         * Fim
         */
        return null;

      }

    }

  }

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

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

  // Try to debug mode
  try {

  document.ruleNameForException = 'Tomador - Pagar Parcela - Ao clicar';
  this.context = new Array();

  // Parâmetros de Entrada
  this.context['idLancamento'] = this.checkType(arguments[0], 'Inteiro');

  this.context['idTransacao'] = this.checkType(arguments[1], 'Inteiro');

  this.context['idTomador'] = this.checkType(arguments[2], 'Inteiro');

  debugManager.startRule(this);


  /**
   * DEBUG: Interação de Confirmação
   */
  debugManager.debug(this, "FlowActivity1", "Interação de Confirmação");

  /**
   * Interação de Confirmação
   */
  ActNewInteractionConfirmMessage(null, 'Confirma o pagamento?', 'Tomador - Pagar Parcela - Intermediario', ebfListParamsCreate.call(this, null, this.context['idLancamento'], this.context['idTransacao'], this.context['idTomador']), null, null);

  /**
   * DEBUG: Geral - Alterar Layout Sweet Alert
   */
  debugManager.debug(this, "FlowSubRoutine1", "Geral - Alterar Layout Sweet Alert");

  /**
   * Geral - Alterar Layout Sweet Alert
   */
  new GeralAlterarLayoutSweetAlert(this, this.getSystem(), this.getForm()).run();

  /**
   * DEBUG: Fim
   */
  debugManager.debug(this, "FlowEnd1", "Fim");

  /**
   * Fim
   */
  return null;

  // Finally to debug mode
  } finally { debugManager.stopRule(this); }

}

function runTomadorPagarParcelaAoClicar(parent, sys, formID, params) {
  var rule = new TomadorPagarParcelaAoClicar(parent, sys, formID);
  rule.run.apply(rule, params);
}
