/*
 * @@hash=857946739
 */

/**
 * Esta fun��o deixa o componente acess�vel, n�o importando o modo do formul�rio.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Utilizando a fun��o em um componente Texto Longo, o componente ficar� em modo de edi��o, permitindo que a<br/>
 * barra de rolagem possa ser movida mesmo que o formul�rio esteja em modo de navega��o.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ComponenteEditavel(componente) {
  $c(componente).div.style.zIndex = 100000
}

/**
 * Fun��o remove a barra do formul�rio em modal<br/>
 * <br/>
 * <br/>
 * Marcilon Mendonca<br/>
 * Cel. (41) 99243-9091<br/>
 * m.marcilon@yahoo.com<br/>
 * Comunidade EasyCodar
 */
/*
Desenvolvido por: Marcilon Mendon�a
Comunidade EasyCodar!
*/

function EasyRemoveDivFormModal() {
 top.document.children[0].children[1].children[0].contentDocument.getElementById("WFRIframeForm"+ebfGetFormID()).children[0].remove();
}

/**
 * Abre uma url em outra janela<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Url que ser� aberta.<br/>
 * 2. Nome da janela (Caso nulo, ou n�o exista a janela, ser� criada uma nova janela).<br/>
 * 3. Propriedade para a abertura da janela. (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. As propriedades devem ser definidas em pares separados por v�rgula. Ex: scrollbars=yes,resizable=yes<br/>
 * 2. As propriedades v�lidas e seus poss�veis valores s�o:<br/>
 *     - toolbar = yes | no<br/>
 *     - location = yes | no<br/>
 *     - status = yes | no<br/>
 *     - menubar = yes | no<br/>
 *     - scrollbars = yes | no<br/>
 *     - resizable = yes | no<br/>
 *     - width = yes | no<br/>
 *     - height = N�mero inteiro<br/>
 *     - left = N�mero inteiro<br/>
 *     - top = N�mero inteiro<br/>
 * 3. Para colocar um caractere & que esteja entre os dados do valor de um par�metro de uma URL utilize a combina��o: %26 + &<br/>
 * 4. A URL deve possuir o protocolo "http://" antes do endere�o www, caso contr�rio, ser� tratato como uma URL relativa.<br/>
 * 5. O nome da janela n�o deve conter espa�o<br/>
 * 6. Para o mobile n�o � necess�rio informar o nome da janela, caso seja informada a p�gina ser� aberta sobre a pr�pria aplica��o.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function OpenURLOnNewWindow(pURL, pWindowName, pWindowProperties) {
  try {
    MM_openBrWindow(pURL, pWindowName, pWindowProperties);    
  } catch(e) {
    //Abafa  
  }
}

/**
 * Abre uma url em outra janela<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Url que ser� aberta<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. As propriedades devem ser definidas em pares separados por v�rgula. Ex: scrollbars=yes,resizable=yes<br/>
 * 2. As propriedades v�lidas e seus poss�veis valores s�o:<br/>
 *     - toolbar = yes | no<br/>
 *     - location = yes | no<br/>
 *     - status = yes | no<br/>
 *     - menubar = yes | no<br/>
 *     - scrollbars = yes | no<br/>
 *     - resizable = yes | no<br/>
 *     - width = yes | no<br/>
 *     - height = N�mero inteiro<br/>
 *     - left = N�mero inteiro<br/>
 *     - top = N�mero inteiro<br/>
 * 3. Para colocar um caractere & que esteja entre os dados do valor de um par�metro de uma URL utilize a combina��o: %26 + &<br/>
 * 4. A URL deve possuir o protocolo "http://" antes do endere�o www, caso contr�rio, ser� tratato como uma URL relativa.<br/>
 * 5. O nome da janela n�o deve conter espa�o<br/>
 * 6. Para o mobile n�o � necess�rio informar o nome da janela, caso seja informada a p�gina ser� aberta sobre a pr�pria aplica��o.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function OpenURLOnNewWindow_copy(pURL, pWindowName, pWindowProperties) {
  try {
    MM_openBrWindow(pURL, pWindowName, pWindowProperties);    
  } catch(e) {
    //Abafa  
  }
}

/**
 * Atualiza um componente na tela chamadora.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio do Componente a ser atualizado.<br/>
 * 2. Componente a ser atualizado.<br/>
 * 3. Procurar Componente em qualquer tela chamadora ?<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function cmsOpenerWindowRefreshComponent(form, componentName, allWindows) {
  var first = true;
  var current = top;
  while (((caller = getOpenerWindow(current)) != null) && (allWindows === true || first)) {
    first = false;

    if (!caller.mainform || isNullable(caller.mainform.sysCode)) {
      return;
    }
     
    var mainform = caller.$mainform();
    if (mainform) {
      var component = mainform.$c(componentName, form);
      if (component && component.refresh) {
        component.refresh();
        return;
      }
    }
     
    current = caller;
  }
}

/**
 * Essa fun��o abre um formul�rio na se��o de acordo o valor informado no segundo par�metro.<br/>
 *     <br/>
 * Par�metros:<br/>
 * 1. Nome da Se��o (Enviado automaticamente no evento Ao Expandir).<br/>
 * 2. Formul�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.
 */
function ebfAccordionOpenForm(section, form) {
  if (section && form) {
    let elemento = document.getElementById(section);
    
    let url = "form" + PAGES_EXTENSION + "?";
    url += "sys=" + sysCode;
    url += "&action=openform&formID=" + URLEncode(form, "GET");
    url += "&align=0&mode=-1&goto=-1&filter=&scrolling=false";
    
    if (elemento.children[0]) {
      elemento.children[0].src = url;
    } else {
      let iframe = document.createElement("iframe"); //cria iframe
      iframe.className = "w-100 h-100 border-0 m-0"; // Bootstrap
      iframe.style.outline = "0";
      iframe.src = url;
      elemento.appendChild(iframe);
    }
  }
}

/**
 * Essa fun��o abre uma URL na Se��o de acordo o valor informado no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Se��o (Enviado automaticamente no evento Ao Expandir).<br/>
 * 2. URL (Ex: http://www.softwell.com.br).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.
 */
function ebfAccordionOpenURL(section, url) {

  let elemento = document.getElementById(section);

  if (elemento.children[0]) {
    elemento.children[0].src = url;
  } else {
    let iframe = document.createElement("iframe"); //cria iframe
    iframe.className = "w-100 h-100 border-0 m-0"; // Bootstrap
    iframe.style.outline = "0";
    iframe.src = url;
    elemento.appendChild(iframe);
  }
}

/**
 * Atualiza o conte�do da se��o especificada<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Se��o (Enviado automaticamente no evento Ao Expandir)<br/>
 * 2. Novo Conte�do (No formato HTML)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfAccordionSetContent (section, content) {
   if (section && content) {   
     section = document.getElementById(section);
     if(section)
       section.innerHTML = content;
  }
}

/**
 * Essa fun��o executa uma a��o pr� definida.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. A��o Pr� Definida (Letras) (Ver observa��o 1)<br/>
 * <br/>
 * Retorno;<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O tipo da a��o pr� definida de ser uma das listadas a seguir:<br/>
 * "Grupos" - Abrir formul�rio de Cadastro de Grupos;<br/>
 * "Usuarios" - Abrir formul�rio de Cadastro de Usu�rio;<br/>
 * "LOG" - Abrir formul�rio de LOG;<br/>
 * "AlterarSenha" - Abrir formul�rio de Altera��o de Senha;<br/>
 * "ExecutarScriptSQL" - Abrir formul�rio de Executar Script SQL;<br/>
 * " RecarregarSistema" - Recarregar sistema atual;<br/>
 * "AlterarUsuario" - Realizar logoff do usu�rio atual para login com outro usu�rio;<br/>
 * "Sair" - Logoff do sistema;<br/>
 * "ModoNormal" - Ir para modo Normal;<br/>
 * "ModoGerente" - Ir para modo Gerente;<br/>
 * "ModoProjeto" - Ir para modo Projeto;<br/>
 * "ConfigurarConexoesAdicionais" - Abrir formul�rio de Conex�es Adicionais;<br/>
 * "Incluir" - Entra em modo de inser��o no formul�rio corrente;<br/>
 * "Alterar" - Entra em modo de altera��o no formul�rio corrente;<br/>
 * "Excluir" -Exclui o registro corrente;<br/>
 * "Gravar" - Grava o registro corrente; <br/>
 * "GravarMais" - Grava mais de um registro simultaneamente;<br/>
 * "PrimeiroReg" - Vai para o primeiro registro do formul�rio corrente;<br/>
 * "AnteriorReg" - Vai para o registro anterior do formul�rio corrente;<br/>
 * "ProximoReg" - Vai para o pr�ximo registro do formul�rio corrente;<br/>
 * "UltimoReg" - Vai para o �ltimo registro do formul�rio corrente;<br/>
 * "Cancelar" - Cancela as altera��es efetuadas no formul�rio corrente;
 */
function ebfActionExecute(action) {
  switch (action.trim().toLowerCase()) {
    // A��es do Formul�rio
    case "incluir": { ebfFormInsertMode(); break; }
    case "alterar": { ebfFormEditMode(); break; }
    case "excluir": { ebfNavDeleteCurrentRecord(); break; }
    case "gravar": { ebfNavEditSaveRecord(); break; }
    case "gravarmais": { ebfNavIncludeMoreSaveRecord(); break; }
    case "primeiroreg": { ebfNavFirstRecord(); break; }
    case "anteriorreg": { ebfNavPreviousRecord(); break; }
    case "proximoreg": { ebfNavNextRecord(); break; }
    case "ultimoreg": { ebfNavLastRecord(); break; }
    case "cancelar": {
      if (ebfFormIsInEditMode()) ebfNavEditCancel();
      else if (ebfFormIsInInsertMode()) ebfNavIncludeCancel();
      break;
    }

    // A��es Pre-Definidas
    case "grupos": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormGroup"); break; } // Abrir Formul�rio de Cadastro de Grupos
    case "usuarios": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormUser"); break; } // Abrir Formul�rio de Cadastro de Usu�rio
    case "log": { openFormLog(ebfGetFullSystemID(), '', 'Log', '', 2); break; }
    case "alterarsenha": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormPassword"); break; } // Abrir Formul�rio de Altera��o de Senha
    case "executarscriptsql": { openWFRSQLScriptExecute(ebfGetFullSystemID()); break; }
    case "recarregarsistema": { shortcutReloadSystem(ebfGetFullSystemID()); break; }
    case "alterarusuario": { ebfSystemChangeUser(); break; }
    case "sair": { ebfSystemExit(); break; }
    case "modonormal": { ebfMenuChangeMode('n'); break; }
    case "modogerente": { ebfMenuChangeMode('p'); break; }
    case "modoprojeto": { ebfMenuChangeMode('d'); break; }
    case "configurarconexoesadicionais": { openWFRConfigureSubconnections(ebfGetFullSystemID()); break; }
  }
}

/**
 * Fun��o que cria um novo componente A��o dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (caso n�o seja definida, a aba n�o ser� criada).<br/>
 * 2. Nome do componente.<br/>
 * 3. Posi��o X.<br/>
 * 4. Posi��o Y.<br/>
 * 5. Altura do componente.<br/>
 * 6. Largura do componente.<br/>
 * 7. URL Imagem.<br/>
 * 8. URL Imagem Ao Clicar.<br/>
 * 9. URL Imagem Ao Passar o Mouse.<br/>
 * 10. GUID Imagem.<br/>
 * 11. GUID Imagem Ao Clicar.<br/>
 * 12. GUID Imagem Ao Passar o Mouse.<br/>
 * 13. Acess�vel (0 = Modo Inclus�o/Altera��o - 1 = Todos os Modos).<br/>
 * 14. A��o Pr� Definida (Configurar Conex�es Adicionais, Grupos, Usu�rios, LOG, Alterar Senha, Importa��o de Relat�rio, Executar Script SQL, <br/>
 * Recarregar Sistema,Modo Normal,Modo Gerente. Modo Projeto, Alterar Usu�rio, Sair).<br/>
 * 15. Dica.<br/>
 * 16. Habilitado?<br/>
 * 17. Container.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfActionNew(tab, name, posX, posY, height, width, urlImage, urlImageClick, urlImageOver, guidImage,
    guidImageClick, guidImageOver, modeAccessible, defaultAction, title, enable, compContainer) {
  let code = getCodComponent();
  let component = new HTMLActionButton(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, "", "");
  component.id = name;
  component.zindex = 3;
  component.loadComponentTime = 0;  
  component.Aba = tab;
  component.AcoesPreDefinida = defaultAction;
  component.Tamanho = width;
  component.Image = guidImage;
  component.Container = compContainer;
  component.Categoria = 'Maker 3';
  component.Habilitado = enable;
  component.URLImageMouseOver = urlImageOver;
  component.URLImageOnClick = urlImageClick; 
  component.Acessivel = modeAccessible;
  component.Nome = name;
  component.Visivel = 'True';
  component.Dica = title;
  component.ClasseComponente = 'Acao';  
  component.ImageMouseOver = guidImageOver;
  component.URLImage = urlImage;
  component.Altura = height;
  component.ImageOnClick = guidImageClick;  
  component.PosicaoY = posX;
  component.PosicaoX = posY;
  let container = $mainform().d.t.getTabByName(tab);  
  if (!container) {
     d.t.add(tab);
     container = $mainform().d.t.getTabByName(tab);
  } 
  if (compContainer) {   
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  } else{ 
    component.design(container.div, true);  
  }  
}

/**
 * Atualiza a imagem do componente.<br/>
 *     <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente.<br/>
 * 2. URL ou Guid da Imagem (Ver observa��o 1).<br/>
 * 3. Evento (Ver observa��o 2) (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para informar uma GUID no segundo par�metro, deve utilizar a galeria de imagens do Maker.<br/>
 * 2. O terceiro par�metro determina qual evento ser� executado para alterar a imagem (Ao Clicar/Ao Passar o Mouse). Caso nulo apenas altera a imagem.
 */
function ebfActionSetImage(name, urlImage, event) {
  let component = $c(name);
  if (!component) {
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", name));
    return false;
  }  
  let isGUID = urlImage.startsWith("{");
  event = event ? event : "";
  switch (event.toLowerCase()){
    case 'ao clicar':
      if(isGUID){
          component.ImageOnClick = urlImage;
      } else {
          component.URLImageOnClick = urlImage;
      }
    break;
    case 'ao passar o mouse':
      if(isGUID){
          component.ImageMouseOver = urlImage;
      } else {
          component.URLImageMouseOver = urlImage;
      }
    break;
    default:
      if(isGUID){
          component.Image = urlImage;
      } else {
          component.URLImage = urlImage;
      }
    break;
  }  
  component.updateImage(); 
}

/**
 * Adiciona um filho ao elemento passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore <br/>
 * 2. Elemento pai<br/>
 * 3. Descri��o do filho que ser� adicionado<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento que foi adicionado como filho. (Variante)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1- Para adicionar um filho com a descri��o "M�dulo" ao elemento cuja refer�ncia est� armazenada na vari�vel "Elemento" e assumindo que esse elemento pertence � �rvore que est� na vari�vel "�rvore", os par�metros seriam "�rvore", "Elemento", "M�dulo". Armazenar o retorno na vari�vel "Filho".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfAddChild(tree,parentElement, description){	
  return tree.addChild(parentElement,description);	
}

/**
 * Associa um evento ao formul�rio que chama o fluxo<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Evento.<br/>
 * 2. Fluxo que ser� executado quando o evento ocorrer.<br/>
 * 3. Lista de par�metros do fluxo.<br/>
 * <br/>
 * Obs:  <br/>
 * 1. Alguns eventos que podem ser passados no 1� par�metro onclick, onkeypress e onblur. Mais informa��es em http://www.w3schools.com/jsref/dom_obj_event.asp<br/>
 *  <br/>
 * Retorno: <br/>
 * N�o possui.
 */
function ebfAddEventForm(evento, fluxo, lista) {
  if(evento && fluxo){
    fluxo = reduceVariable(fluxo);
    var w = mainform;
    if(w.addEventListener){ // all browsers except IE before version 9
      w.addEventListener(evento, function() {
        return ebfFlowExecute(fluxo, lista);
        }, false);
    }else{
       if(w.attachEvent){ // IE before version 9
         w.attachEvent(evento, function() {
           return ebfFlowExecute(fluxo, lista);
            });
       }
    }
  }
}

/**
 * Exibe uma mensagem de alerta junto com um bot�o "Ok"  e o fluxo s� continua a ser executado ap�s o usu�rio clicar<br/>
 * neste bot�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Mensagem que ser� exibida.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Exemplo: 1� Assumindo como par�metro a mensagem "Maker ALL", junto com este aparecer� um bot�o de OK.<br/>
 * O fluxo s� continuar� sendo executado quando o usu�rio clicar no bot�o "OK". <br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Maker Mobile: No iOS, o fluxo continuar� sua execu��o independente do usu�rio clicar no bot�o OK.
 */
function ebfAlertMessage(msg) {
  alert(msg);
}

/**
 * Traz a aplica��o para primeiro plano. <br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O sistema operacional iOS n�o permite que o app seja colocado em primeiro plano sem a intera��o do usu�rio.
 */
function ebfAppBringToFront(){
 alert('Fun��o dispon�vel apenas no MakerMobile');
}

/**
 * Essa fun��o verifica se o aplicativo est� em segundo plano.<br/>
 * <br/>
 * Caso verdadeiro, a aplica��o est� em segundo plano, caso falso, a aplica��o est� em execu��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * L�gico
 */
function stoneSDKCreateTransaction(){
 alert('Fun��o dispon�vel apenas no MakerMobile');
}

/**
 * Junta v�rios itens de texto em apenas um item.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor que ter� outros valores adicionados<br/>
 * 2. Valor que ser� concatenado junto ao texto do primeiro par�metro.<br/>
 * ...<br/>
 * N. Valor n a ser adicionado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor concatenado.<br/>
 * <br/>
 * Observa��o:<br/>
 * Esta fun��o tem um melhor desempenho em rela��o a fun��o "Concatena��o".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfAppend() {
  var value = "";

  if (existArgs(arguments)) {
    for (var i = 0; i < arguments.length; i++) {
      if(arguments[i] == null) arguments[i] = '';
      var temp = arguments[i].toString();
      value += temp;
    }
  }

  return value;
}

/**
 * Essa fun��o � utilizada para fazer o arredondamento de valores por casas decimais.<br/>
 * O n�mero ser� arredondado para cima ou para baixo a depender do valor das casas decimais.<br/>
 * Caso o valor das casas decimais seja menor ou igual a 0,5 o n�mero ser� arredondado para baixo, caso contr�rio, para cima.<br/>
 * Informando o terceiro par�metro como verdadeiro, o arredondamento seguir� as normas da ABNT NBR 5891, cujo as regras podem ser encontradas no site oficial.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. N�mero a ser arredondado.<br/>
 * 2. Quantidade de casas decimais, para a qual o n�mero ser� arredondado.<br/>
 * 3. Seguir padr�o ABTN? (L�gico)(Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o n�mero fracionado passado por par�metro com as casas decimais arredondadas. (Fracionado)<br/>
 * <br/>
 * Exemplo(este exemplo n�o se aplica para as normas ABNT):<br/>
 * 1. Assumindo como o 1� par�metro sendo: 9,5782 e o 2� par�metro sendo: 2 (Inteiro) o retorno ser� 9.58.<br/>
 * 2. Assumindo como o 1� par�metro sendo: 9,5566 e o 2� par�metro sendo: 2 (Inteiro) o retorno ser� 9.56.<br/>
 * <br/>
 * Exemplo(normas ABNT):<br/>
 * 1. Assumindo como o 1� par�metro sendo: 4,550, o 2� par�metro sendo: 1 (Inteiro) e o 3� par�metro sendo: Verdadeiro (L�gico) o retorno ser� 4.6.<br/>
 * 2. Assumindo como o 1� par�metro sendo: 4,850, o 2� par�metro sendo: 1 (Inteiro) e o 3� par�metro sendo: Verdadeiro (L�gico) o retorno ser� 4.8.<br/>
 * <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfArredondaDecimal(value, decimalQtt, abnt) { 
  if(abnt){
    var floatValue = parseFloat(value.toString().replaceAll(",","."));
    if(parseInt(value) === floatValue){   
      return floatValue; 
    } else{
        return round_abnt(floatValue, decimalQtt);
    }
  }else{
    value = parseNumeric(value); 
    var factor = Math.pow(10, parseNumeric(decimalQtt));
    // Multiplica pelo fator
    value *= factor;
    // Arredonda o valor
    value = Math.round(value);
    // Divide pelo fator
    value /= factor;
  }  
  return value;
}

function round_abnt(nValor, nDecimais) {

  var nRetorno = nValor;
  var spl = nValor.toString().split(".");
  var cDecimais = spl[1];
  var a = 1 / Math.pow(10, spl[1].length);
  var nSubsequente = nDecimais;

  if (nDecimais < 1) {
    return parseInt(nRetorno);
  }

  if (cDecimais.length <= nDecimais) {
    return parseFloat(nRetorno);
  }

  if (parseInt(cDecimais.substr(nSubsequente, 1)) > 5 || parseInt(cDecimais.substr(nSubsequente, 1)) < 5) {
    nRetorno = nRetorno.toFixed(nDecimais);
  } else if (parseInt(cDecimais.substr(nSubsequente, 1)) == 5) {

    if ((cDecimais.substr(nDecimais - 1, 1) % 2) != 0) {
      nRetorno += a;
      nRetorno = nRetorno.toFixed(nDecimais);
    } else

    if (parseInt(cDecimais.substr(parseInt(nSubsequente) + 1, 1)) > 0) {
      nRetorno = nRetorno.toFixed(nDecimais);
    } else {
      nRetorno = truncateValue(nValor, nDecimais);
    }
  }
  return parseFloat(nRetorno);
}

function truncateValue(nValor, nDecimais) {

  var nRetorno = nValor;
  spl = nValor.toString().split(".");
  var cDecimais = spl[1];

  if (nDecimais < 1) {
    return parseInt(nRetorno);
  }

  if (cDecimais.length <= nDecimais) {
    return nRetorno;
  }

  nRetorno = parseInt(nValor.toString()) + '.' + cDecimais.substr(0, nDecimais);
  nRetorno = parseFloat(nRetorno);

  return nRetorno;
}

/**
 * Converte um Texto Normal para um Texto Bin�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto normal em letras. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto Bin�rio.(letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro o texto "ALL", o retorno ser� o texto bin�rio "010000010100110001001100".
 */
function ebfAsciiToBinary(astring) {
  var binary = "";
  if (astring.length > 0) {
    for (var i = 0; i < astring.length; i++) {
      var value = astring.charCodeAt(i);
      for (var j = 7; j >= 0; j--) {
        binary += ((value >> j) & 1);
      }
    }
  }
  return binary;
}

/**
 * Associa uma regra ao clicar no elemento passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore <br/>
 * 2. Elemento<br/>
 * 3. Nome da regra que ser� associada<br/>
 * 4. Lista de par�metros que ser�o enviados para a regra.<br/>
 * <br/>
 * Observa��es:<br/>
 * Os par�metros dever�o ser passados por uma lista de valores.<br/>
 * Essa fun��o s� pode chamar regras clientes.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Supondo que a regra "Imprimir"  mostra na tela a soma dos n�meros passados por par�metro e assumindo os <br/>
 * par�metros como �rvore, Elemento, "Imprimir", [5,6], ser� mostrado na tela o valor 11.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfAssociateRuletoElement(tree, element, ruleName, ruleParams){
  tree.associateRuleToElement(element, ruleName, ruleParams);	
}

/**
 * Esta fun��o associa o evento a aba 'Quando clicar na aba' definida como par�metro<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da aba (Letras);<br/>
 * 2. Nome da regra (Letras ou Fluxo). A regra deve estar na camada cliente;<br/>
 * 3. Lista contendo os par�metros da regra (Variante). Ver observa��o 2.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Esta fun��o deve ser utilizada no evento "Ao Entrar" do formul�rio;<br/>
 * 2. Mesmo que a regra executada n�o possua par�metros, � necess�rio criar uma lista vazia;<br/>
 * 3. O n�o preenchimento do 3� par�metro inutilizar� a fun��o;<br/>
 * 4. Ao associar o evento � aba localizar, esta n�o carregar� os dados padr�o, pois o mesmo ser� sobrescrito pelo evento associado
 */
function ebfAssociateTabEvent(aba, rule, ruleParams) {
  var _ruleName = rule;
  var _params = ruleParams;
  var _sys = sysCode;
  var _formID = idForm;

  $mainform().d.t.getTabByName(aba).onclick = function() {
    executeJSRuleNoField(_sys, _formID, _ruleName, ruleParams);
  } 
  return null;
}

/**
 * Essa fun��o associa(juntar ou unir) um componente a uma moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente que deseja associar.<br/>
 * 2. Nome da moldura que o componente ser� associado.<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfAssociatingComponent(component, targetComponent) {
  /* var source = $c(component).div;  
  var destino = $c(targetComponent).div;  
  d.t.getDiv().removeChild(source);  
  destino.appendChild(source); */    

 var x = $c(targetComponent);
 var y = $c(component);
 x.div.appendChild(y.div);

}

/**
 * Essa fun��o executa uma regra servidor de forma ass�ncrona.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Regra a ser executada.<br/>
 * 2. Lista de par�metros da regra.<br/>
 * 3. Fluxo de sucesso.<br/>
 * 4. Lista de par�metros do fluxo de sucesso.<br/>
 * 5. Fluxo de erro.<br/>
 * 6. Lista de par�metro do fluxo de erro.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O fluxo definido no terceiro par�metro receber� automaticamente como par�metro o retorno da regra executada caso<br/>
 * a mesma retorne. O primeiro par�metro da regra deve ser reservado.<br/>
 * 2. O fluxo definido no quinto par�metro receber� automaticamente como par�metro o detalhes do erro. O primeiro par�metro da regra deve ser reservado.
 */
function ebfAsyncJavaFlowExecute(ruleName, params, ruleOk, paramsOk, ruleFail, paramsFail) {
  var reducedName = (ruleName);
  var sysCode = ($mainform().document.WFRForm ? $mainform().document.WFRForm.sys.value : $mainform().sysCode);
  var formCode = ($mainform().document.WFRForm ? $mainform().document.WFRForm.formID.value : null);
  var isJava = false;
  try {
    window.eval(reducedName);
  } catch (ex) {
    try {
      reducedName = reduceVariable(ruleName);
      window.eval(reducedName);
    } catch (ex) {
      isJava = true;
    }
  }
  var value = null;
  if (isJava) {
    let url = "executeRule.do?action=executeRule&pType=2&sys=";
    url += sysCode + "&formID=" + URLEncode(formCode, "GET") + "&ruleName=" + URLEncode(ruleName, "GET");
    if (params && params.length > 0) {
      if (params instanceof Array) {
        for (i = 0; i < params.length; i++) {
          value = normalizeRuleParam(params[i]);
          // Ex.: &P_0=valor
          url += "&P_" + i + "=" + URLEncode(value, "GET");
        }
      }
    }
    // Cria a requisi��o.
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && this.status <= 299) {
          if (ruleOk) {
            paramsOk = paramsOk && paramsOk.length > 0 ? paramsOk : new Array();
            if (xhr.responseText) {
              $mainform().document._ruleReturn = null;
              eval(xhr.responseText);
              paramsOk[0] = $mainform().document._ruleReturn;
            }
            ebfFlowExecute(ruleOk, paramsOk);
          }
        } else {
          if (ruleFail) {
            paramsFail = paramsFail && paramsFail.length > 0 ? paramsFail : new Array();
            if (xhr.responseText) {
              eval(xhr.responseText);
              paramsFail[0] = xhr.status;
            }
            ebfFlowExecute(ruleFail, paramsFail);
          }
        }
      }
    };
    xhr.send(null);
  }
}

/**
 * Envia uma mensagem para o servidor Firebase solicitando um c�digo de valida��o. A mensagem com o c�digo ser� enviada para o n�mero informado no primeiro par�metro.<br/>
 * <br/>
 * Uma caixa/input ser� criada para que o usu�rio informe o c�digo. Caso esteja OK, ser� executado o fluxo de sucesso, caso contr�rio, o fluxo de erro ser� executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N�mero de Telefone (No formato: + C�DIGO DO PA�S + DDD + N� do Telefone). Ex.: +557121083800<br/>
 * 2. Fluxo que ser� executado caso a opera��o seja realizado com sucesso<br/>
 * 3. Par�metros adicionais do fluxo de sucesso<br/>
 * 4. Fluxo que ser� executado caso haja algum erro durante a opera��o<br/>
 * 5. Par�metros adicionais do fluxo de erro<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Antes de utilizar essa fun��o, � necess�rio configurar o projeto no Firebase  conforme instru��es nos links<br/>
 * http://suporte.softwell.com.br/maker/manual_3/pt/makermobile/autenticacao_via_sms.html<br/>
 * http://suporte.softwell.com.br/maker/manual_3/pt/makermobile/arquivo_firebase.html
 */
function ebfAuthSMS(phone, onSuccess, onSuccessParams, onFail, onFailParams){
  console.log("Dispon�vel apenas no MakerMobile");
}

/**
 * Autenticar Usu�rio<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Usu�rio (Letras)<br/>
 * 2. Senha (Letras)<br/>
 * 3. Redirecionar para o formul�rio principal? (Apenas na Camada Servidor, L�gico)<br/>
 * 4. Conex�o-Ponte (DataConnection, Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * True quando a autentica��o for realizada com sucesso.  (Ver observa��o 4).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso a fun��o seja utilizada na camada servidor, o sistema n�o pode possuir o evento "Ao Autenticar" definido. Caso <br/>
 * o tenha, deve-se utilizar esta fun��o na camada cliente.<br/>
 * 2. O par�metro de redirecionamento apenas tem efeito na camada servidor. Na camada cliente, sempre ser� <br/>
 * redirecionado para o formul�rio principal.<br/>
 * 3. A conex�o ponte pode ser obtida atrav�s da fun��o "Obter Lista de Conex�es-Ponte". Este par�metro serve para<br/>
 * definir qual a ENTIDADE que ser� utilizada para acessar o sistema.<br/>
 * 4. O retorno da fun��o s� poder� ser obtido quando o terceiro par�metro da fun��o for definido como falso e estiver na camada servidor, visto que, caso verdadeiro, ocorrer� o redirecionamento autom�tico da p�gina.
 */
function ebfAuthUser(user, password, redirect, dataConnection) {
  var url = "logon.do?sys=" + sysCode + "&user=" + URLEncode(user) + "&password=" + URLEncode(password.trim());  
  if (dataConnection && dataConnection != "undefined") {
    url += "&dataConnection=" + URLEncode(dataConnection);  
  }
  IframeTransporter(url);
}

/**
 * Retorna o valor de um componente contido em um formul�rio aberto numa moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a moldura.<br/>
 * 2. Nome do componente moldura.<br/>
 * 3. Formul�rio que ser� aberto na moldura.<br/>
 * 4. Componente que ser� obtido o valor.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do componente que se encontra na moldura. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfBevelGetComponentValue(formBevel, bevelName, formComponent, componentName) {
 
  var component = $c(bevelName, formBevel);
  if (component instanceof HTMLGroupBox) {	    
    var iframes = component.div.getElementsByTagName("iframe");      
	if (iframes.length > 0) {
      var iframe = iframes[0];
      var mainform = eval(iframe.id).mainform;
      var elems = mainform.controller.getAllElements();
      for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (elem.id == componentName) {
          return elem.getValue();
        }
      }
    }
  }
  return null;
}

/**
 * Fecha um Modal do Bootstrap.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Elemento do Modal (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfBootstrapCloseModal(modal) {
  bootstrapCloseModal(modal);
}

/**
 * Essa fun��o cria um modal do Bootstrap.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. T�tulo do Modal (Letras, Opcional)<br/>
 * 2. Fech�vel? (L�gico, Opcional)<br/>
 * 3. Conte�do do Corpo (Letras, Opcional)<br/>
 * 4. Conte�do do Rodap� (Letras, Opcional)<br/>
 * 5. Atributos do Modal (Variante, Opcional)<br/>
 * 6. Elemento que receber� o Modal criado (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com os elementos (Variante): Modal (1), Cabe�alho (2), Corpo (3) e Rodap� (4)
 */
function ebfBootstrapCreateModal(title, closeable, bodyContent, footerContent, attributes, elementAtt) {
  return bootstrapCreateModal(title, closeable, bodyContent, footerContent, attributes, elementAtt);
}

/**
 * Fun��o que cria um novo componente Bot�o dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (Caso n�o seja definida, a aba n�o ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descri��o do Componente<br/>
 * 7. Imagem (A mesma deve estar no local Skins\Default)<br/>
 * 8. ID do Componente (identificador do componente, ex: MakerButton1)<br/>
 * 9. Container<br/>
 * 10. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfButtonNew(aba, posX, posY, width, height, description, img, id, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLButton(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, img);
  component.id = id;
  component.loadComponentTime = 0;
  component.styleCss = styleCss;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  if(compContainer){
    component.container = compContainer;   
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
  document['c_' + code] = component;
}

/**
 * Esta fun��o importa uma folha de estilo e anexa ao formul�rio. <br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Conte�do da folha de estilo no padr�o CSS. (Letras)<br/>
 * 2. ID para o CSS a ser importado (Letras, Opcional)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Para aplicar a folha de estilo a um componente utilize #NomeDoComponente. Para importar a uma <br/>
 * classe, utilize .NomeDaClasse<br/>
 * <br/>
 * Exemplo(s):<br/>
 * <br/>
 * .MinhaClasse{<br/>
 *   color: red;<br/>
 * }<br/>
 * <br/>
 * #MakerEdit1{<br/>
 *   background-color: blue;<br/>
 * }
 */
function ebfCSSImportContent(content, idCss) {
  var lnk = document.getElementById("WFRMakerCSS");  
  if (lnk && idCss == null) {      
    if (lnk.styleSheet) {
      lnk.styleSheet.cssText = content;
    } else {
      lnk.innerHTML = content + lnk.innerHTML;
    }
  } else {
   lnk = document.createElement('style');    
   lnk.id = idCss ? idCss : "WFRMakerCSS";       
   lnk.setAttribute('type', "text/css");
  if (lnk.styleSheet) {
    lnk.styleSheet.cssText = content;
  } else {
    lnk.innerHTML = content;
  }     
    document.body.appendChild(lnk);
  }
}

/**
 * Essa fun��o decrementa um m�s na data atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. N�o possui.
 */
function ebfCalendarDecMonth (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.prevMonth();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o decrementa um ano na data atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. N�o possui.
 */
function ebfCalendarDecYear (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.prevYear();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o obt�m o m�s corrente do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente.<br/>
 * 2. Por extenso?<br/>
 * <br/>
 * Retorno:<br/>
 * 1. M�s corrente (Variante).
 */
function ebfCalendarGetMonth (comp, monthName) {
  let rComp = $c(comp);  
  if (rComp)  
    return rComp.getMonth(monthName);    
  interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o obt�m a ano corrente do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Ano corrente (Inteiro).
 */
function ebfCalendarGetYear (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    return rComp.getYear();    
  interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o navega o componente para o m�s e ano passados por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * 2. M�s<br/>
 * 3. Ano<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCalendarGoToMonth (comp, month, year) {
  let rComp = $c(comp);  
  if (rComp) {  
    if (month && year)
      return rComp.goToMonth(month, year);
    return false;   
  }       
  else interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o incrementa um m�s na data atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. N�o possui.
 */
function ebfCalendarIncMonth (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.nextMonth();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o incrementa um Ano na data atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. N�o possui.
 */
function ebfCalendarIncYear (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.nextYear();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa fun��o modifica o componente para a data atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCalendarToday (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.goToday();
  else   
   interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Cria uma refer�ncia para o "Objeto �rea de Desenho" e a retorna.<br/>
 * Este objeto � necess�rio para que seja utilizada as demais fun��es da categoria Desenho.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura que ser� utilizada como refer�ncia para a cria��o dos desenhos.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a refer�ncia do objeto. (Variante)
 */
function ebfCanvasCreate(bevel) {
  var bevelComp = $c(bevel);
  if (bevelComp) {
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", bevelComp.div.offsetWidth + "px");
    canvas.setAttribute("height", bevelComp.div.offsetHeight + "px");
    bevelComp.div.appendChild(canvas);
    return canvas;
  }
}

/**
 * Desenha um c�rculo na �rea de desenho passada como par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. �rea de Desenho (Variante)<br/>
 * 2. Coordenada da posi��o X.<br/>
 * 3. Coordenada da posi��o Y.<br/>
 * 4. Raio<br/>
 * 5. Valor l�gico que informa se o c�rculo ser� preenchido<br/>
 * 6. Cor de preechimento<br/>
 * 7. Valor l�gico que informa se o c�rculo ser� delineado<br/>
 * 8. Cor da Borda.<br/>
 * 9. Espessura da Borda<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasDrawCircle(canvas, x, y, radio, fill, fillColor, line, lineColor, lineWidth) {
  if (canvas) {  
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, 2*Math.PI);	
    if (fill) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
    if (line) {
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  }
}

/**
 * Desenha uma elipse na �rea de desenho passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rea de Desenho (Variante)<br/>
 * 2. Coordenada X inicial.<br/>
 * 3. Coordenada Y inicial.<br/>
 * 4. Valor de A<br/>
 * 5. Valor de B<br/>
 * 6. Valor l�gico que informa se a elipse ser� preenchida.<br/>
 * 7. Cor de preenchimento.<br/>
 * 8. Valor l�gico que informa se a elipse ser� delineada.<br/>
 * 9. Cor da Borda.<br/>
 * 10. Espessura da borda.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasDrawEllipse(canvas, x, y, w, h, fill, fillColor, line, lineColor, lineWidth) {
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var kappa = .5522848,
    ox = (w / 2) * kappa, // control point offset horizontal
    oy = (h / 2) * kappa, // control point offset vertical
    xe = x + w,           // x-end
    ye = y + h,           // y-end
    xm = x + w / 2,       // x-middle
    ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.closePath();

    if (fill) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    if (line) {
      ctx.lineWidth = lineWidth;
      ctx.lineColor = lineColor;
      ctx.stroke();
    }
  }
}

/**
 * Desenha uma linha na �rea de desenho passada como par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Objeto �rea de Desenho;<br/>
 * 2. Coordenada X inicial;<br/>
 * 3. Coordenada Y inicial;<br/>
 * 4. Coordenada X final;<br/>
 * 5. Coordenada Y final;<br/>
 * 6. Cor da linha;<br/>
 * 7. Espessura da linha.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasDrawLine(canvas, x1, y1, x2, y2, color, lineWidth){
  if (canvas) {  
    var ctx = canvas.getContext('2d');    
    ctx.moveTo(x1, y1);    
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;    
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

/**
 * Desenha um ret�ngulo na �rea de desenho passada como par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. �rea de Desenho (Variante)<br/>
 * 2. Coordenada X inicial.<br/>
 * 3. Coordenada Y inicial.<br/>
 * 4. Largura<br/>
 * 5. Altura<br/>
 * 6. Valor l�gico que informa se o ret�ngulo ser� preenchido.<br/>
 * 7. Cor de preenchimento.<br/>
 * 8. Valor l�gico que informa se o ret�ngulo ser� delineado<br/>
 * 9. Cor da borda.<br/>
 * 10. Espessura da borda<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasDrawRect(canvas, x, y, width, height, fill, fillColor, line, lineColor, lineWidth) {
  if(canvas) {
    var ctx = canvas.getContext("2d");
    if (fill) {
      ctx.fillStyle = fillColor;
    }
    if (line) {
      ctx.lineWidth = lineWidth;
      ctx.lineColor = lineColor;
    }
    ctx.fillRect(x, y, width, height);
  }
}

/**
 * Desenha um losango na �rea de desenho passada como par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. �rea de Desenho;<br/>
 * 2. Coordenada X inicial;<br/>
 * 3. Coordenada Y inicial;<br/>
 * 4. Dimens�o da diagonal 1;<br/>
 * 5. Dimens�o da diagonal 2;<br/>
 * 6. Valor l�gico que informa se o losango ser� preenchido;<br/>
 * 7. Cor de preenchimento;<br/>
 * 8. Valor l�gico que informa se o losango ser� delineado;<br/>
 * 9. Cor da Borda;<br/>
 * 10. Espessura da borda.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasDrawRhombus(canvas, x1, y1, d1, d2, fill, fillColor, line, lineColor, lineWidth) {
  if (canvas) {
    var ctx = canvas.getContext("2d");

    ctx.lineTo(x1 + parseInt(d1 / 2), y1);
    ctx.lineTo(x1 + d1, y1 + parseInt(d2 / 2));
    ctx.lineTo(x1 + parseInt(d1 / 2), y1 + d2);
    ctx.lineTo(x1 , y1 + parseInt(d2 / 2));
    ctx.lineTo(x1 + parseInt(d1 / 2), y1);

    if (line) {
      ctx.lineWidth = lineWidth;
      ctx.lineColor = lineColor;
      ctx.stroke();
    }
    if (fill) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
  }
}

/**
 * Remove uma refer�ncia para �rea de desenho<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Objeto (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfCanvasRemove(canvas) {
  if (canvas){   
   var context = canvas.getContext("2d");    
   context.clearRect(0,0, canvas.width, canvas.height);
  }
}

/**
 * Altera o valor de um componente que esteja em outro formul�rio que n�o o corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Constante formul�rio ou GUID.<br/>
 * 2. Componente.<br/>
 * 3. Novo Valor.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� par�metro o formul�rio "FORMULARIO1", 2� par�metro o componente "COMPONENTE" e <br/>
 * como 3� par�metro o valor "CONTE�DO", o componente "COMPONENTE" receber� o valor "CONTE�DO".<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Esta fun��o n�o altera o valor do componente Lista Din�mica. Para isso, utilize a fun��o: Alterar Valor da Lista <br/>
 * Din�mica.<br/>
 * 2. � necess�rio que o outro formul�rio esteja aberto, para que a altera��o venha a ser executada com sucesso.
 */
function ebfChangeComponentValueOtherForm (form, component, value) {
  if(webrunBroadcast) {
    const jsonProperties = {};
    jsonProperties.formGUID = form;
    jsonProperties.action = "wcc";
    jsonProperties.component = component;
    jsonProperties.value = value;
    jsonProperties.formTarget = decodeURI(mainform.formGUID);

    webrunBroadcast.postMessage(jsonProperties);
  }
}

/**
 * Esta fun��o altera o tamanho da janela do formul�rio onde o fluxo est� sendo executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Largura;<br/>
 * 2. Altura.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O Internet Explorer n�o permite que formul�rios (pop-up) modais sejam redimensionados.
 */
function ebfChangeCurrentFormSize(newWidth, newHeight) {
 if (isPopup) {
   top.resizeTo(newWidth, newHeight);    
 } else {  
   var floatingFormDiv = getFloatingFormDivById($mainform().idForm);
   floatingFormDiv.style.height = (parseInt(newHeight) + 30) + "px";
   floatingFormDiv.style.width = parseInt(newWidth) + "px";    
   var floatingFormIframe = floatingFormDiv.getElementsByTagName("iframe")[0];    
   floatingFormIframe.style.height = newHeight + "px";    
   floatingFormIframe.style.width = newWidth + "px";
   getFloatingFormDivById($mainform().idForm).getElementsByTagName("iframe")[0]  
 }
}

/**
 * Alterar Cursor do Componente<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Nome do Componente (Componente)<br/>
 * 2. Tipo do Cursor (default, pointer, etc) (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��es:<br/>
 * 1 - Pode-se utilizar no evento ao entrar do formul�rio, para modificar o cursor.
 */
function ebfChangeCursorComponent(componentVar, typeCursor) {
  var c = $c(componentVar);
  if (c) {
    if (c.name == "HTMLLabel") {    
      c = c.label;
    } else {    
      c = c.div;
    }
    c.style.cursor = typeCursor;
  }
}

/**
 * Muda a descri��o do componente escolhido no primeiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * 2. Nova Descri��o.<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfChangeDescription(c, d) {
  $c(c).setDescription(d);  
}

/**
 * Esta fun��o altera o t�tulo do formul�rio corrente.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Novo t�tulo que o formul�rio receber�. (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o n�o tem suporte para formul�rio aberto no componente Aba e/ou Moldura.
 */
function ebfChangeFormTitle(newTitle){
  try {
    if(isPopup){    
      top.document.title = newTitle;
    } else{
      var div = "WFRIframeForm" + ebfGetFormID();
      // Obten��o do elemento pai.
      let parent = mainform.parent.parent.document.getElementById(div).children[0].children[0];
      // Verifica��o se o formul�rio possui defini��o de �cone.
      div = parent.childElementCount > 1 ? parent.children[1] : parent.children[0];
      div.innerText = newTitle;
    }    
  } catch (e) {
    console.error("Fun��o: 'Alterar T�tulo do Formul�rio' n�o � suportado no componente Aba ou Moldura.");    
    return;
  }
}

/**
 * Altera a imagem do componente bot�o passado no primeiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente;<br/>
 * 2. Caminho da imagem.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * A imagem deve estar no contexto do Webrun ou URL externa ex.: http://suporte.softwell.com.br/logo.jpg
 */
function ebfChangeImageButton(component, path){
       $c(component).setImage(path);        
}

/**
 * Altera o conte�do da barra de status.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Conte�do para a barra de status<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. S� funciona no evento "Ao Entrar".<br/>
 * 2. No Browser Firefox � preciso marcar a op��o "MODIFICAR TEXTO NA BARRA DE <br/>
 * STATUS" no caminho abaixo:<br/>
 *   I.   FERRAMENTAS<br/>
 *   II.  OP��ES<br/>
 *   III. CONTE�DO<br/>
 *   IV.  BOT�O AVAN�ADO<br/>
 * <br/>
 * 3. No Browser Internet Explorer verifique se est� habilitado o recurso de atualiza��es da barra de status.<br/>
 * Caminho:<br/>
 *   I. FERRAMENTAS<br/>
 *   II. OP��ES<br/>
 *   III.  ABA SEGURAN�A<br/>
 *   IV.  N�VEL PERSONALIZADO<br/>
 *   V.  "PERMITIR ATUALIZA��ES DA BARRA DE STATUS VIA SCRIPT"
 */
function ebfChangeWindowStatusBar(text){
  // Caso o texto passado como par�metro seja nulo, a barra de status n�o � modificada
  if (text == null){
    return;
  } else {
    $mainframe().sbtext = text;
  }
}

/**
 * Executa uma regra em um determinado formul�rio passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Constante formul�rio ou GUID.<br/>
 * 2. Fluxo.<br/>
 * 3. Lista de Par�metros (Opcional).<br/>
 * 4. Fluxo de Callback (Opcional)(Ver observa��o 1).<br/>
 * 5. Lista de Par�metros (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O fluxo de callback receber� automaticamente o valor de retorno do fluxo executado, caso o mesmo retorne.<br/>
 * 2. Essa fun��o n�o executa um fluxo no formul�rio corrente.
 */
function ebfChannelExecuteRuleOnForm (form, ruleName, ruleParams, ruleCallback, callbackParams) {
  if (webrunBroadcast) {
    if (isNullable(ruleParams)) ruleParams = new Array();
    const jsonProperties = {};
    jsonProperties.formGUID = form;
    jsonProperties.action = "wef";
    jsonProperties.flow = ruleName;
    jsonProperties.params = ruleParams;
    jsonProperties.callback = ruleCallback;
    jsonProperties.callbackParams = callbackParams;
    jsonProperties.formTarget = decodeURI(mainform.formGUID);

    webrunBroadcast.postMessage(jsonProperties);
  }
}

/**
 * Obt�m o valor de um componente em outro formul�rio de forma ass�ncrona, executando o fluxo de callback ap�s a sua execu��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Constante formul�rio ou GUID.<br/>
 * 2. Componente.<br/>
 * 3. Fluxo de Callback<br/>
 * 4. Lista de Par�metros (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Para que essa fun��o funcione da forma esperada, o formul�rio informado no primeiro par�metro precisa estar aberto.<br/>
 * 2. O fluxo definido como callback receber� automaticamente no primeiro par�metro o valor do componente.
 */
function ebfChannelGetComponentValeuOtherForm (form, component, ruleCallback, callbackParams) {
  if(webrunBroadcast) {
    const jsonProperties = {};
    jsonProperties.formGUID = form;
    jsonProperties.action = "wgc";
    jsonProperties.component = component;
    jsonProperties.formTarget = decodeURI(mainform.formGUID);
    jsonProperties.callback = ruleCallback;
    jsonProperties.callbackParams = callbackParams;

    webrunBroadcast.postMessage(jsonProperties);
  }
}

/**
 * Esta fun��o localiza, dentro do primeiro par�metro, o conte�do que est� na posi��o passada no 2� par�metro e o retorna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto onde ser� feita a pesquisa<br/>
 * 2.  Posi��o da letra.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna qual a letra que est� na posi��o que foi passado por par�metro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os par�metros como "Maker Flow" (Letras) e 4 (Inteiro) , o retorno seria "e".<br/>
 * 2. Assumindo os par�metros como "Hoje � Segunda-Feira" (Letras) e "8" (Inteiro) , o retorno seria "S" .<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfCharAt() {
  var retorno = "";
  if (existArgs(arguments)) {
    var value = arguments[0].toString();
    var length = value.length;
    var indice = parseInt(arguments[1]) - 1;
    if (indice < 0) {
      indice = 0;
    } else if (indice >= length) {
      indice = length - 1;
    }
    try {
      retorno = value.charAt(indice);
    } catch (ex) {
    }
  }
  return retorno;
}

/**
 * Passado um n�mero, a fun��o obt�m e retorna o s�mbolo, em ASCII, do n�mero passado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N�mero que se deseja obter o valor da tabela ASCII.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o s�mbolo correspondente na tabela ASCII do n�mero passado como par�metro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como 35 (Inteiro), o retorno seria "#".<br/>
 * 2. Assumindo os par�metros como 360 (Inteiro), o retorno seria "?".<br/>
 * 3. Assumindo os par�metros como 166 (Inteiro), o retorno seria "|".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfCharacter(asciiCode) {
  var res = String.fromCharCode(asciiCode);
  return res; 
}

/**
 * Fecha a conversa ativa no chat.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfChatCloseActiveConversation(chat) {
    var chatComponent = $c(chat);
    if (chatComponent && chatComponent.activeContainer) {
        chatComponent.activeContainer.setActive(false);
        chatComponent.activeContainer = null;
    }
}

/**
 * Remove o usu�rio logado de um grupo ao qual ele faz parte (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o n�o ir� fazer nada.<br/>
 * 3. Altera��es em grupos s� ser�o feitas se o chat estiver com a propriedade "Permitir Cria��o de Grupos" habilitada.
 */
function ebfChatExitGroup(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupExit();
    }
}

/**
 * Exporta uma conversa do usu�rio logado com outro usu�rio/grupo do chat.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio/Grupo (Inteiro).<br/>
 * 3. ID do 2� par�metro � um grupo? (L�gico).<br/>
 * 4. Formato de Exporta��o (pode ser: PDF) (Letras).<br/>
 * 5. Ordem de Exporta��o das Mensagens (0: antigas para novas, 1: novas para antigas) (Inteiro).<br/>
 * 6. Layout da p�gina (de 1 a 6, onde 1 � A1 e 6 � A6) (Inteiro).<br/>
 * 7. Rotacionar P�gina? (L�gico).<br/>
 * 8. Estilo da Tabela (0: simples, 1: escuro) (Inteiro).<br/>
 * 9. Bordas na Tabela? (L�gico).<br/>
 * 10. Data Inicial (Data).<br/>
 * 11. Data Final (Data).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. As datas nos 10� e 11� par�metros podem ser nulas. Se a data inicial e a data final forem nulas, todo o hist�rico ser� exportado. Se somente a data final for nula, todas as mensagens da data inicial at� o final ser�o exportadas.<br/>
 * 2. Ap�s o processamento, o download da conversa exportada ser� iniciado automaticamente.
 */
function ebfChatExportConversation(chat, entityId, entityIsGroup, format, order, layout, rotated, style, borders, dateStart, dateEnd) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        if (dateStart && dateStart instanceof Date) dateStart = dateStart.toISOString();
        if (dateEnd && dateEnd instanceof Date) dateEnd = dateEnd.toISOString();

        chatComponent.exportConversation(entityId, parseBoolean(entityIsGroup) ? 1 : 0,
            format, parseInt(order), parseInt(layout), parseBoolean(rotated), parseInt(style),
            parseBoolean(borders), dateStart, dateEnd);
    }
}

/**
 * Obt�m o nome de um grupo do chat (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do grupo (Letras).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o retornar� um texto vazio.<br/>
 * 3. O resultado dessa fun��o pode n�o refletir o nome do grupo em tempo real no banco de dados. Se a cache do chat estiver desatualizada, ele ir� apresentar diferen�as. Para isso � poss�vel utilizar a fun��o "Chat - Atualizar Componente" para atualizar a cache do chat.
 */
function ebfChatGetGroupName(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup && chatGroup.data && chatGroup.data.name) return chatGroup.data.name;
    }

    return "";
}

/**
 * Obt�m a lista de usu�rios de um grupo (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Lista contendo os IDs usu�rios no grupo (Lista).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o retornar� uma lista vazia.
 */
function ebfChatGetGroupUsers(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup && chatGroup.data && chatGroup.data.users) return chatGroup.data.users;
    }

    return [];
}

/**
 * Obt�m o total de mensagens n�o lidas (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Total de mensagens n�o lidas entre o usu�rio logado e o usu�rio especificado no 2� par�metro ou com o chat inteiro (Inteiro).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat.<br/>
 * 2. Se nenhum valor for especificado no 2� par�metro, a fun��o ir� retornar o total de mensagens n�o lidas para o chat inteiro.<br/>
 * 3. Quando o 2� par�metro for especificado e o usu�rio n�o estiver na lista do chat, a fun��o ir� retornar 0.
 */
function ebfChatGetTotalUnreadMessages(chat, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        if (userId === undefined || userId === null || userId === "") {
            var totalUnreadMessages = 0;

            if (chatComponent.cachedContainers && chatComponent.cachedContainers.length > 0) {
                for (var i = 0; i < chatComponent.cachedContainers.length; i++) {
                    var chatContainer = chatComponent.cachedContainers[i];

                    if (chatContainer && chatContainer.isUser() && !chatContainer.isSendToEveryone &&
                        chatContainer.unreadMessages !== undefined && chatContainer.unreadMessages !== null) {

                        totalUnreadMessages += chatContainer.unreadMessages;
                    }
                }
            }

            return totalUnreadMessages;
        } else {
            var chatUser = chatComponent.getUserById(userId);
            if (chatUser) return chatUser.unreadMessages;
        }
    }

    return 0;
}

/**
 * Obt�m o nome de um usu�rio do chat (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do usu�rio (Letras).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o usu�rio n�o estiver na lista do chat especificado, a fun��o retornar� um texto vazio.<br/>
 * 3. O resultado dessa fun��o pode n�o refletir o nome do usu�rio em tempo real no banco de dados. Se a cache do chat estiver desatualizada, ele ir� apresentar diferen�as. Para isso � poss�vel utilizar a fun��o "Chat - Atualizar Componente" para atualizar a cache do chat.
 */
function ebfChatGetUserName(chat, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatUser = chatComponent.getUserById(userId);
        if (chatUser && chatUser.data && chatUser.data.name) return chatUser.data.name;
    }

    return "";
}

/**
 * Adiciona usu�rios a um grupo (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. Lista contendo os IDs dos Usu�rios (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o n�o ir� fazer nada.<br/>
 * 3. Altera��es em grupos s� ser�o feitas se o chat estiver com a propriedade "Permitir Cria��o de Grupos" habilitada.<br/>
 * 4. O usu�rio logado deve ser administrador do grupo especificado para poder adicionar/remover usu�rios.
 */
function ebfChatGroupAddUsers(chat, groupId, users) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupAddUsers(users);
    }
}

/**
 * Remove usu�rios de um grupo (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. Lista contendo os IDs dos Usu�rios (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o n�o ir� fazer nada.<br/>
 * 3. Altera��es em grupos s� ser�o feitas se o chat estiver com a propriedade "Permitir Cria��o de Grupos" habilitada.<br/>
 * 4. O usu�rio logado deve ser administrador do grupo especificado para poder adicionar/remover usu�rios.
 */
function ebfChatGroupRemoveUsers(chat, groupId, users) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupRemoveUsers(users);
    }
}

/**
 * Verifica se um usu�rio � administrador de um grupo (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. ID do Usu�rio (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor l�gico indicando se o usu�rio � administrador do grupo (L�gico).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o grupo n�o estiver na lista do chat especificado, a fun��o retornar� falso.
 */
function ebfChatIsUserAdminOfGroup(chat, groupId, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) return chatGroup.groupIsUserAdmin(userId);
    }

    return false;
}

/**
 * Verifica se um usu�rio est� online no chat (em cache).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor l�gico indicando se o usu�rio est� online (L�gico).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o utiliza a cache do componente chat. <br/>
 * 2. Se o usu�rio n�o estiver na lista do chat especificado, a fun��o ir� retornar falso.
 */
function ebfChatIsUserOnline(chat, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatUser = chatComponent.getUserById(userId);
        if (chatUser) return chatUser.isOnline();
    }

    return false;
}

/**
 * Abre a conversa com um grupo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ID do Grupo definido no 2� par�metro deve ser obtido atrav�s da tabela respons�vel por armazenar as defini��es do grupo.
 */
function ebfChatOpenGroupConversation(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.setActive(true);
    }
}

/**
 * Abre a conversa com um usu�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ID do Usu�rio definido no 2� par�metro deve ser obtido atrav�s da tabela respons�vel por armazenar as defini��es do usu�rio.
 */
function ebfChatOpenUserConversation(chat, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatUser = chatComponent.getUserById(userId);
        if (chatUser) chatUser.setActive(true);
    }
}

/**
 * Envia uma mensagem para um usu�rio/grupo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usu�rio/Grupo (Inteiro).<br/>
 * 3. ID do 2� par�metro � um grupo? (L�gico).<br/>
 * 4. Mensagem (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Se a mensagem estiver vazia ou somente preenchida com espa�os, a fun��o n�o ir� efetuar a opera��o de envio da mensagem.
 */
function ebfChatSendMessage(chat, entityId, entityIsGroup, messageContent) {
    if (messageContent === undefined || messageContent === null || messageContent.toString().length == 0 ||
        messageContent.toString().trim().length == 0) return;

    var chatComponent = $c(chat);
    if (chatComponent) {
        chatComponent.sendMessage(entityId, entityIsGroup, messageContent.toString().trim());
    }
}

/**
 * Atualiza os dados em cache do componente (lista de grupos, usu�rios, etc).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfChatUpdateComponent(chat) {
    var chatComponent = $c(chat);
    if (chatComponent) chatComponent.updateData(true);
}

/**
 * Fun��o que cria um novo objeto CheckBox dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (caso n�o seja definida, a aba n�o ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descri��o do Componente.<br/>
 * 7. Valor do Componente.<br/>
 * 8. Valor Marcado.<br/>
 * 9. Valor Desmarcado.<br/>
 * 10. ID do Componente.<br/>
 * 11. Container.<br/>
 * 12. Estilo CSS.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfCheckBoxNew(aba, x,y,width,height,description,value,valueChecked,valueUnchecked, id, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLCheckbox(ebfGetSystemID(),ebfGetFormID(),code, x, y, width, height, description, value, valueChecked, valueUnchecked);  

  if(id){  
    component.id = id;
  }else{
    component.id = description;    
  }
  component.zindex = 3;
  component.loadComponentTime = 0;  
  component.styleCss = styleCss;
  component.description = description ? description : "";  

  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  if(compContainer){
    component.container = compContainer;   
    compContainer = document.getElementById(compContainer);    
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
  document['c_' + code] = component;  
  setOrderTabDynamically(component);
}

/**
 * Converte o caractere passado por par�metro para c�digo ASCII.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Caractere do qual se deseja obter o c�digo ASCII.<br/>
 * <br/>
 * Retorno:<br/>
 * C�digo ASCII do caractere passado por par�metro.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o par�metro como "d" o retorno ser�  100.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A Tabela ASCII (American Standard Code for Information Interchange) � usada pela maior parte das industrias de computadores para a troca de informa��es. Cada caractere � representado por um c�digo de 8 bits(um byte).
 */
function ebfChrToAscii(achar){
  if (isNullable(achar)) {
    return null;
  } else {
    return (achar.charCodeAt(0));
  }
}

/**
 * Essa fun��o interrompe a execu��o de um fluxo agendado de acordo o ID passado por par�metro.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. ID do fluxo agendado (retorno da fun��o Agendar Execu��o do Fluxo);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o interrompe apenas fluxos que foram agendados na camada cliente.
 */
function ebfClearTimeOut(ID){
 if(typeof ID === 'number'){
   window.clearTimeout(ID); 
 }
}

/**
 * Essa fun��o � utilizada para fechar o formul�rio que chama o fluxo.<br/>
 * <br/>
 * Par�metros: <br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Quando essa fun��o for chamada em um formul�rio, o mesmo ser� fechado.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. N�o � necess�rio passar o nome do formul�rio. O formul�rio sempre vai ser o que chama o fluxo.<br/>
 * 2. Caso o formul�rio seja a janela principal(propriedade "Formul�rio Principal" do Maker), o mesmo n�o poder� ser <br/>
 * fechado atrav�s desta fun��o.
 */
function ebfCloseForm() {
    $mainform().d.n.actExit();
}

/**
 * Essa fun��o remove o vinculo de parentesco entre os formul�rios e relat�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Ela pode ser usada no evento ao entrar do formul�rio pai. Uma vez feito isso, os filhos desse formul�rio ficar�o abertos depois que o formul�rio pai for fechado ou atualizado.
 */
function ebfCloseFormWithoutChildren() {
  closeChildrenForms = false;
}

/**
 * Fecha todos os fomul�rios que foram utilizados para abrir o formul�rio atual(exceto o primeiro) e ele mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. N�o fecha o formul�rio principal.
 */
function ebfCloseMasterForm() {
  try {  
    if (isPopup) {
      if ($mainform().getOpenerWindow(top)) {
        $mainform().getOpenerWindow(top).close();
      }
      $mainform().d.n.actExit();    
    } else {
      for (var i=0; i<mainSystemFrame.floatingForms.length; i++) {
        closeFloatingFormById(mainSystemFrame.floatingForms[i].replace("WFRIframeForm", ""));   
      }
    }
  } catch (ex) {}
}

/**
 * Fecha a janela que abriu a janela corrente. (Formul�rio pai)<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfCloseOpenerWindow() {
  "use strict";
  var openerWindow;

  if (isPopup) {
    openerWindow = $mainform().getOpenerWindow(top);
    if (openerWindow) {
      openerWindow.close();
      openerWindow.top.close();
    }
  } else {
    Object.keys(mainSystemFrame.formHierarchy).forEach(function (parentFormId) {
      var formChildren = mainSystemFrame.formHierarchy[parentFormId];
      formChildren.some(function (childFormId) {
        if ("WFRIframeForm" + idForm === childFormId) {
          closeFormHierarchy(parentFormId);
          return true;
        }
      });
    });
  }
}

/**
 * Cria um novo componente Lista de forma din�mica.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (Caso n�o seja definida, a aba ser� criada).<br/>
 * 2. Posi��o X no formul�rio.<br/>
 * 3. Posi��o Y no formul�rio.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descri��o do Componente.<br/>
 * 7. Lista de valores. (Campo Chave).<br/>
 * 8. Lista de descri��es a serem exibidas. (Campo Lista).<br/>
 * 9. ID do Componente.<br/>
 * 10. Container.<br/>
 * 11. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * As listas podem conter um ou mais elementos, e ir�o se referenciar uma com a outra de acordo com a posi��o delas na lista.
 */
function ebfComboBoxNew(aba, x, y, width, height, description, keys, values,id, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLComboBox(ebfGetSystemID(),ebfGetFormID(),code, x, y, width, height, description);
  if (!isNullable(keys) && !isNullable(values)) {
    if (keys instanceof Array && values instanceof Array) {
      component.values = values;
      component.keys = keys;
    } else {
      component.values = [values];
      component.keys = [keys];
    }
  } else {
    component.values = [];
    component.keys = [];
  }  
  component.id = id;
  component.zindex = 3;
  component.loadComponentTime = 0;  
  component.styleCss = styleCss;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  if(compContainer){
    component.container = compContainer;   
    compContainer = document.getElementById(compContainer);    
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
  document['c_' + code] = component;  
  setOrderTabDynamically(component);
}

/**
 * Essa fun��o remove todos os elementos do componente Lista. Passando como par�metro a componente Lista.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente Lista<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno ser� os elementos da Lista apagadas.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O retorno ser� a lista Carros com os elementos removidos.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfComboClean(obj) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.clean) {
    obj.clean();
  }
}

/**
 * Essa fun��o Insere um elemento no componente Lista. Passando como par�metro o componente Lista, o valor chave (que ser� o valor � ser salvo no banco) e o valor que representar� o valor chave.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente Lista<br/>
 * 2. Valor Chave (Letras)<br/>
 * 3. Valor que representar� a chave (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno (variante) somente para a camada Servidor, ser� o valor inserido no componente Lista <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O campo chave deve obrigatoriamente ser do tipo Letras. Caso contr�rio, a lista n�o ir� exibir os valores.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O 2� par�metro sendo 3 e o 3� par�metro sendo "Quebrado". O retorno ser� a lista Carros contendo os elementos 1 - Usado, 2 - Novo e 3 - Quebrado.
 */
function ebfComboPut(obj, key, value) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.add) {
    obj.add(key, value);
  }
}

/**
 * Fun��o que remove um item do componente Lista tomando a chave como refer�ncia.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio;<br/>
 * 2. Nome do Componente;<br/>
 * 3. Chave(Letras)(Ver observa��o 1);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A chave deve ser do tipo Letras.
 */
function ebfComboRemoveByKey(form, obj, key) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.removeByKey) {
    obj.removeByKey(key);
  }
}

/**
 * Esta fun��o associa um evento no padr�o W3C ( DOM Events Specification ) ao componente.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente cujo evento ser� associado.<br/>
 * 2. Descri��o do evento (ver abaixo alguns eventos utilizados pelo Webrun).<br/>
 * 3. Fluxo que ser� executado quando o evento ocorrer.<br/>
 * 4. Lista com os par�metros a serem passados para o fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * Esta fun��o n�o possui retorno<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o componente passado no primeiro par�metro seja nulo, o evento ser� associado ao formul�rio.<br/>
 * 2. O fluxo que ser� associado ao componente deve obrigatoriamente ser do tipo cliente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usu�rio passar o mouse sobre um componente Texto chamado "MakerLabel1", a fun��o ficaria:<br/>
 * 1� Par�metro: MakerLabel1 (Componente);<br/>
 * 2� Par�metro: onmouseover (Letras);<br/>
 * 3� Par�metro: Fluxo Observador de eventos (Letras);<br/>
 * 4� Par�metro: nulo;<br/>
 * <br/>
 * 2. Alguns eventos utilizados pelo Webrun no padr�o W3C (Dom Events):<br/>
 * 1 - onclick<br/>
 * 2 - onkeypress<br/>
 * 3 - onchange<br/>
 * 4 - onblur<br/>
 * 5 - onfocus<br/>
 * 6 - onmouseover
 */
var overwrittenEvents = new Map();
overwrittenEvents.add("change", "onchange");
overwrittenEvents.add("blur", "onblur");

function ebfComponentEventAssociate(componentName, eventName, ruleName, ruleParams) {  
  // Testa se o objeto � nulo e associa o evento ao formul�rio
  var component = controller.verifyComponent(componentName);
  
  // Obt�m a DIV onde o evento ser� associado
  var componentDiv;
  if(component == null) { 
    componentDiv = $mainform().d;
  } else {
    componentDiv = component.div;
  }
  
  // Testa se o par�metro do fluxo a ser executado � nulo
  if (typeof(ruleParams) == 'undefined' || ruleParams == null) {
    ruleParams = '';
  }
  
  // Remove o 'on' do evento
  var startsWithOn = /^on(.+)/;
  var found = eventName.match(startsWithOn);
  if (found != null && found != -1) {
    eventName = RegExp.$1;
  }
  
  // Associa o evento ao componente e define a fun��o num array 
  var associatedFunction = function() {
    executeJSRuleNoField(sysCode, idForm, ruleName, ruleParams);
  }
  
  var event = overwrittenEvents.get(eventName);
  
  if (event != null) {
    component[event] = associatedFunction;
  } else {
    addEvent(componentDiv, eventName, associatedFunction, true);
    
    if (!componentDiv.ruleEvents) {
      componentDiv.ruleEvents = new Array();
    }
    componentDiv.ruleEvents[eventName] = associatedFunction;
  }
  
  if (component) {
    if(!component.onclick){   
      component.onclick = function() {};
    }     
    // Necess�rio, pois o componente pode ainda n�o ter evento associado o que o deixaria desabilitado
    component.setEnabled(true);
  }
}

/**
 * Esta fun��o remove um evento no padr�o W3C ( DOM Events Specification ) associado ao componente atrav�s da <br/>
 * fun��o Associar Evento ao componente.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente cujo evento foi associado (nulo caso o evento seja o formul�rio).<br/>
 * 2. Descri��o do evento.<br/>
 * 3. Fluxo que � executado quando o evento ocorre.<br/>
 * 4. Lista com os par�metros que s�o passados ao fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfComponentEventRemove(componentName, eventName) {  
  // Testa se o objeto � nulo e associa o evento ao formul�rio
  var component = controller.verifyComponent(componentName);
  
  var componentDiv;
  if(component == null) { 
    componentDiv = $mainform().d;
  } else {
    componentDiv = component.div;
  }
  
  // Remove o 'on' do evento
  var startsWithOn = /^on(.+)/;
  var found = eventName.match(startsWithOn);
  if (found != null && found != -1) {
    eventName = RegExp.$1;
  }
  
  // Remove o objeto
  if (componentDiv.ruleEvents) {
    var associatedFunction = componentDiv.ruleEvents[eventName];
    removeEvent(componentDiv, eventName, associatedFunction, true);
    componentDiv.ruleEvents[eventName] = null;
  }
}

/**
 * Esta fun��o recebe o nome de um componente e retorna verdadeiro ou falso caso o mesmo exista no formul�rio onde o fluxo foi chamado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente (definir o formul�rio de trabalho no par�metro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * <br/>
 * Retorno:(L�gico)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfComponentExists(componentName) {
  if($c(componentName))
    return true;
  else
    return false;   
}

/**
 * Verifica se o componente esta habilitado ou desabilitado, retornando verdadeiro, caso o componente esteja habilitado. e retorna retorna falso caso esteja desabilitado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m o componente<br/>
 * 2. Componente a ser verificado<br/>
 * <br/>
 * Retorno:(L�gico)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfComponentIsEnabled(formGUID, componentName) {
  return $c(componentName, formGUID).getEnabled();
}

/**
 * Altera a m�scara de um componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m o componente<br/>
 * 2. Nome do componente<br/>
 * 3. Nova m�scara<br/>
 * 4. Tipo da m�scara (Letras, N�mero ou Data)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Observe que os valores no quarto par�metros devem ser exatamente como est�o descritos. Acentua��o e caixas altas devem ser seguidas.
 */
function repeatValueUntilSize(s, size) {
  var r = "";
  for (var i = 1; i <= size; i++) {
    r += s;
  }
  return r;
}
function convertToJsMask(m, type) {
  var r = "";
  if (type != "date" && m != null && m.length > 0) {
    r = m;
    if (type == "number") {
      r = r.replace(/\\\\/g, "");
      r = r.replace(/;0/g, "");
      r = r.replace(/;1/g, "");
      r = r.replace(/\\!/g, "");
      r = trim(r);
      var li = r.lastIndexOf(".");
      var nm = "#,###";
      if (m.indexOf(",") == -1) {
        nm = "#";
      }
      if (li != -1) {
        nm += ".";
        nm += repeatValueUntilSize("0", r.substring(li + 1, r.length).length);
      }
      r = nm;
    } else {
      r = r.replace(/\\\\0/g, "Z");
      r = r.replace(/\\\\9/g, "N");
      r = r.replace(/\\\\/g, "");
      r = r.replace(/\\/g, "");
      r = r.replace(/;0/g, "");
      r = r.replace(/;1/g, "");
      r = r.replace(/!/g, "");
      r = r.replace(/0/g, "#");
      r = r.replace(/9/g, "#");
      r = r.replace(/Z/g, "0");
      r = r.replace(/N/g, "9");
      r = r.replace(/A/g, "*");
      r = r.replace(/L/g, "x");
      r = trim(r);
    }
  }
  return r;
}

function ebfComponentSetMask(formGUID, componentName, mask, type) {
  var component = $c(componentName, formGUID);
  if (component) {
    if (isNullable(mask)) {
      component.mask = null;
      return;
    }
    
    if (type == 'Data') {
      component.dateMask = mask;
    } else if (type == 'N�mero') {
      component.numberMask = convertToJsMask(mask, "number");
    } else {
      component.textMask = convertToJsMask(mask, "string");
    }
    
    if (component.maskSuport) {
      component.designMask();
      component.attachEvent(component.input, 'keypress', component.keypressAction);
      component.attachEvent(component.input, 'keyup', component.keyupAction);
      if (component.getValue().length > 0) {
        component.mask.allowPartial = true;
        component.setValue(component.mask.format(component.getValue()));
        component.mask.allowPartial = false;
      }
    }  
  }
}

/**
 * Junta v�rios itens de texto em apenas um item.<br/>
 * <br/>
 * Par�metros:<br/>
 * n. Valor a ser concatenado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os valores concatenados (Letras).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os par�metros como 'Maker'(Letras) e 'Flow'(Letras), o retorno seria 'Maker Flow'.<br/>
 * 2.Assumindo os par�metros como 'Maker'(Letras) e 3(inteiro), o retorno seria 'Maker3'.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfConcat() {
  var value = "";
  if (existArgs(arguments)) {
    for (var i = 0; i < arguments.length; i++) {
      if(arguments[i] == null) arguments[i] = '';
      var temp = arguments[i].toString();
      value += temp;
    }
  }
  return value;
}

/**
 * Completa o conte�do do terceiro par�metro � esquerda do primeiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto.<br/>
 * 2. Quantidade de caracteres que o retorno deve ter.<br/>
 * 3. Conte�do que ser� concatenado � esquerda do primeiro par�metro (1 caractere).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o primeiro par�metro concatenado � esquerda com o conte�do do terceiro par�metro at� a quantidade de caracteres for atingida.<br/>
 * <br/>
 * Exemplo:<br/>
 * Assumindo como par�metros:<br/>
 * 1�Par�metro: Maker <br/>
 * 2�Par�metro: 10 <br/>
 * 3�Par�metro: r<br/>
 * O retorno seria: rrrrrMaker<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O terceiro par�metro deve ter apenas 1 caractere (Somente servidor).
 */
function ebfConcatLeft (value, size, pad) {
  if (value && value != null && value.length > 0)   
    return value.padStart(size, pad); 
}

/**
 * Completa o conte�do do terceiro par�metro � direita do primeiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto.<br/>
 * 2. Quantidade de caracteres que o retorno deve ter.<br/>
 * 3. Conte�do que ser� concatenado � esquerda do primeiro par�metro (1 caractere). <br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o primeiro par�metro concatenado � direita com o conte�do do terceiro par�metro at� a quantidade de caracteres for atingida.<br/>
 * <br/>
 * Exemplo:<br/>
 * Assumindo como par�metros:<br/>
 * 1� Par�metro: Maker <br/>
 * 2� Par�metro: 10 <br/>
 * 3� Par�metro: r<br/>
 * O retorno seria: Makerrrrrr<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O terceiro par�metro deve ter apenas 1 caractere.
 */
function ebfConcatRight (value, size, pad) {
  if (value && value !== null && value.length > 0) 
    return value.padEnd(size, pad);  
}

/**
 * � passado um par�metro que ser� um texto, onde esse ser� confirmado ou negado conforme a escolha do usu�rio.<br/>
 * Essa fun��o abre uma caixa com op��es "Ok" ou "Cancel".<br/>
 * Ao clicar em "Ok" usu�rio confirmar� uma opera��o retornando verdadeiro,  ou cancelar� a mesma retornando falso.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que servir� para interagir com o usu�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * Se o usu�rio clicar em "OK" retorna verdadeiro (L�gico), se clicar em "Cancel", retorna falso. (L�gico)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Passando como par�metro "Confirmar opera��o?", o resultado ser� uma caixa de di�logo com os bot�es "OK" e "Cancel". Se o usu�rio clicar "Ok" o retorno ser� verdadeiro, caso contr�rio, ser� falso.
 */
function ebfConfirm (src) {
  return window.confirm(src);
}

/**
 * Retorna o tipo de conex�o usada para acesso a internet pelo dispositivo m�vel.<br/>
 * <br/>
 * Retorno:<br/>
 *  Tipo da conex�o.<br/>
 * <br/>
 *       -  Unknown connection;<br/>
 *       -  Ethernet connection;<br/>
 *       -  WiFi connection;<br/>
 *       -  Cell 2G connection;<br/>
 *       -  Cell 3G connection;<br/>
 *       -  Cell 4G connection;<br/>
 *       -  No network connection;
 */
function ebfConnectionType() {

}

/**
 * Chama um Webservice (s�o componentes que permitem �s aplica��es enviar e receber dados em formato XML) para aplica��es em dispositivos m�veis.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL do Web Service (possibilita conex�o com https)<br/>
 * 2. Par�metro de entrada do Web Service<br/>
 * 3. Tipo de Conte�do (Padr�o: JSON)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorno do Webservice (Letras)
 */
function ebfConsumeWsSsl(urlPost, postData, contentType){

}

/**
 * Fun��o que cria um novo componente Container dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (caso n�o seja definida, a aba ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descri��o do componente<br/>
 * 7. Nome do componente<br/>
 * 8. Estilo CSS<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfContainerNew(aba, posX, posY, width, height, description, value, styleCss){
  var code = getCodComponent();
  var component = new HTMLContainer(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, value);
  component.id = value;    
  component.loadComponentTime = 0;
  component.styleCss = styleCss;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  component.design(container.div, true);
  document['c_' + code] = component;
}

/**
 * Fun��o que abre um formul�rio no Container. O Container pode ser uma Moldura, uma DIV existente na tela ou o componente Container.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Refer�ncia do Container<br/>
 * 3. Formul�rio que ser� aberto no Container<br/>
 * 4. Texto (Letras) indicando o filtro (Opcional)<br/>
 * 5. Modo de Abertura (Modos de Abertura: 1 - Inclus�o, 2 - Edi��o . (Mobile: 1: Inclus�o, 2: Edi��o, -1: Navega��o, 3: <br/>
 * - Exclus�o).<br/>
 * 6. Barra de Rolagem?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� par�metro o formul�rio "Form", 2� par�metro o container (presente em "Form") "Moldura", 3� par�metro o formul�rio "Form Moldura" e como 6� par�metro "True", ser� aberto no Container "Moldura" o formul�rio "Form Moldura" com barra de rolagem.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o n�o deve ser utilizada para abrir no container o mesmo formul�rio que o cont�m.<br/>
 * 2. As modifica��es feitas no formul�rio que est� em um Container, apenas ser�o visualizadas quando o sistema for reiniciado, ou quando o formul�rio for atualizado manualmente.
 */
function ebfContainerOpenForm(form, componentName, formTarget, filter, mode, scrollbars){


  if(typeof componentName === "string"){  
    component = document.getElementById(componentName);
  }else{  
    component = componentName;
  }

  if (component) {
    var scrolling = (scrollbars ? "yes" : "no");    

    var url = getAbsolutContextPath();
    url += 'form.jsp?sys='+sysCode+'&formID='+ URLEncode(formTarget) +'&goto=-1&filter='+(filter?filter:'')+'&scrolling='+scrolling+'&mode='+(mode?mode:'-1');
    var iframe = null;
    
    var iframes = component.getElementsByTagName("iframe");      
    if (iframes.length > 0) {
      iframe = iframes[0];      
          
      var iframeTag = eval(iframe.id);
      if (iframeTag.formOnUnLoadAction) {
        iframeTag.formOnUnLoadAction();
      }      

    }else{
      var id = 'URLFrame' + parseInt((Math.random() * 9999999));
      iframe = document.createElement("iframe");      
      iframe.src = url;
      iframe.id = id;
      iframe.name = id;       
      iframe.style.border = "none";
      iframe.width = '100%';
      iframe.height = '100%';
    }
    
    if (iframe.src != url) {
      iframe.src = url
    }
    
    iframe.style.scrollbars = scrollbars;
    component.appendChild(iframe);  
  }
}

/**
 * Converte JSON (valores serializados) para Variante. Esse Variante pode ser um Mapa ou uma Lista.<br/>
 * O valor passado por par�metro deve iniciar com JSONInstance ou ArrayInstance.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto convertido a partir do JSON. (Variante)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como primeiro par�metro o valor JSONInstance({"a":1}), o retorno seria um variavel do tipo variante com os <br/>
 * dados informados.
 */
function ebfConvertJSONToVariant(obj, c) {  
  if(!c){
    if(obj.substring(0,12) === 'JSONInstance'){
      obj = JSON.parse(obj.substring(13, obj.length - 1));
    }else if(obj.substring(0,13) === 'ArrayInstance'){  
      return eval(obj.substring(14, obj.length - 1));
    }else{  
      return obj;
    }
  }
  const mp = new Map;
  var objectConstructor = {}.constructor;
  Object.keys(obj).forEach(function (k) {
    mp.set(k, obj[k].constructor === objectConstructor ? ebfConvertJSONToVariant(obj[k], true) : obj[k]);
  });  
  return mp;
}

/**
 * Recebe um componente memo e transforma em texto rico avan�ado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� localizado o componente Memo.<br/>
 * 2. Componente memo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfConvertRichText(form, componentName) {
  var component = $c(componentName, form);
  if ((component instanceof HTMLMemo) && (!component.isRichText())) {
    component.richText = 2;    
    component.richTextLoad();
  }
}

/**
 * Essa fun��o converte um Componente "Caixa de Texto" para um componente "Caixa de Texto" do tipo Arquivo.<br/>
 * Atrav�s dela voc� poder� selecionar um arquivo do sistema.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente do tipo texto que ser� convertido em um do tipo arquivo.<br/>
 * 2. Quantidade de caracteres (aproximados) que aparecer�o. O Firefox 3 necessita dessa propriedade para alterar a largura.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Exemplo(s): <br/>
 * Assumindo que um Componente do tipo Texto no formul�rio. O uso desta converter� o Componente em um do tipo arquivo.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O componente n�o pode estar relacionado a um campo do banco de dados.<br/>
 * 2. Por quest�es de seguran�a, a exibi��o do caminho correto do arquivo ficar� a crit�rio do navegador utilizado.<br/>
 * 3. Necess�rio o uso da fun��o no evento "Ao Entrar" do formul�rio.
 */
function ebfConverterInputTextInFile(field, size) {
  var componente = $c(field);                 
  if (componente) {
    try {
      componente.input.type = 'file';
      if (size) {
        componente.input.setAttribute("size", size);
      }
    } catch (Exception) {
      var inputNovo = document.createElement('input');
      inputNovo.type = 'file';
      inputNovo.className = componente.input.className;
      if (size) {
        inputNovo.setAttribute("size", size);
      } else {
        inputNovo.style.width = componente.input.style.width + "px";
        inputNovo.style.height = componente.input.style.height + "px";
      }
      inputNovo.name = componente.input.name;
      inputNovo.id = componente.input.id;
      componente.context.removeChild(componente.input);   
      componente.context.appendChild(inputNovo);
      componente.input = inputNovo;
    }
  }
}

/**
 * Cria uma data a partir da passagem do ano, m�s, dia, hora, minuto e segundo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Ano<br/>
 * 2. M�s<br/>
 * 3. Dia<br/>
 * 4. Hora (De 0 a 23)<br/>
 * 5. Minuto (De 0 a 59)<br/>
 * 6. Segundo (De 0 a 59)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a data criada. (Data)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metros os valores (2007,5,11,11,5,20) o Retorno "11/05/2007 11:05:20"
 */
function ebfCreateDate(year,month,day,hour,minute,second){
  // Cria uma nova data
  var date = new Date();
  // Altera os valores da data
  date.setYear(year);
  date.setMonth(month - 1);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  // Retorna a data
  return date;
}

/**
 * Esta fun��o recebe um texto JSON e retorna um objeto.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Texto em JSON.<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON.<br/>
 * <br/>
 * Observa��o (�es):<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro da fun��o o texto {"Vers�o":"3.9","empresa":"Softwell"}, o retorno ser� um Objeto JSON.
 */
function ebfCreateObjectJSON(json) {
  try {
    return JSON.parse(json == null || json == "" ? "{}" : json);
  } catch (ex) {
    handleException(new Error("Texto JSON n�o est� em um formato v�lido"));
  }
}

/**
 * Essa fun��o tem por objetivo criar um elemento Spinner(carregamento) de acordo os par�metros informados.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento Pai (Variante)(Opcional).<br/>
 * 2. Classe adicional (Letras)(Opcional) Ex.: spinner-border text-primary (Ver Observa��o 2).<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Elemento (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Quando o primeiro par�metro n�o � informado o mesmo assume como valor o corpo da pagina.<br/>
 * 2. Para maiores informa��es sobre Spinners e as classes adicionais acessar: https://getbootstrap.com/docs/4.4/components/spinners/<br/>
 * 3. Essa fun��o bloqueia o acesso do elemento pai, ou seja, o elemento ficara bloqueado at� que a fun��o "Spinner - Remover" seja executada.
 */
function ebfCreateSpinner (parent, addClass) {
  parent = parent ? parent : document.body;      
  return bootstrapCreateSpinner(parent, addClass, true)[0]; 
}

/**
 * Cria uma �rvore na aba passada por par�metro, na posi��o e tamanho especificados.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da �rvore.<br/>
 * 2. Nome da aba do formul�rio onde ser� adicionada a �rvore.<br/>
 * 3. Posi��o x.<br/>
 * 4. Posi��o y<br/>
 * 5. Tamanho<br/>
 * 6. Altura<br/>
 * <br/>
 * Retorno: <br/>
 * �rvore Criada. (Variante)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os par�metros como "Projetos" (Letras), "Visualiza��o" (Letras) , 100(Inteiro), 100(Inteiro), 250(Inteiro) e 250(Inteiro), ser� criada uma �rvore de nome "projetos", na aba "Visualiza��o" do formul�rio, na posi��o x=100 e y=100, com 250 de tamanho e de altura.<br/>
 * Observa��o: � obrigat�rio a exist�ncia de pelo menos um componente no formul�rio no qual ser� criada a �rvore.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function getCodComponent (){
  var components = $mainform().controller.getTabElements(parent.mainform.d.t);
  var max_cod = 0;
  for(var i = 0; i < components.length; i++) { 
    max_cod = Math.max(max_cod, components[i].getCode());
  }   
   var generatedCode = parseInt(''+ parseInt((parseInt(9) * Math.random()))
                                +''+parseInt((parseInt(9) * Math.random()))
                                +''+parseInt((parseInt(9) * Math.random()))
                                +''+parseInt((parseInt(9) * Math.random()))
                                +''+parseInt((parseInt(9) * Math.random()))
                                +''+parseInt((parseInt(9) * Math.random()))
                      );
  
  return generatedCode + max_cod;
}
function ebfCreateTreeView(value, tab, posx, posy, width, height){	
  var code = getCodComponent();
  tree = new HTMLTreeview(sysCode,idForm,code,posx,posy,width,height,value);
  tree.design(mainform.d.t.getDiv(tab), true);
  tree.show();	
  return tree;	
}

/**
 * Obt�m o idioma que est� sendo utilizado no momento.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o idioma da aplica��o. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Caso o idioma corrente que esteja sendo utilizado for o ingl�s, ent�o a fun��o retornar� o valor: "en_US"
 */
function ebfCurrentLanguage() {
  return resources_locale;
}

/**
 * Essa fun��o retira as horas da data, retornando apenas a Data com as horas zeradas.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data com Hora<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com as horas zeradas. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 23/09/2008 23: 30: 00. O retorno ser� 23/09/2008 00:00:00.<br/>
 * 2. Assumindo que o 1� par�metro seja 10/12/1998 11: 52: 25. O retorno ser� 10/12/1998 00:00:00.
 */
function ebfDateDate() {
  var data = null;
  if (existArgs(arguments)) {
    var temp = toDate(arguments[0]);
    temp.setHours(0);
    temp.setMinutes(0);
    temp.setSeconds(0);
    temp.setMilliseconds(0);
    data = temp;
  }
  return data;
}

/**
 * Essa fun��o obt�m o dia da data passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data de onde ser� obtido o dia<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o dia a partir de uma data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 23/09/2008. O retorno ser� 23.<br/>
 * 2. Assumindo que o 1� par�metro seja 10/12/1998. O retorno ser� 10.<br/>
 * 3. Assumindo que o 1� par�metro seja o retorno da fun��o "hoje", o retorno ser� o dia atual
 */
function ebfDateDay() {
  var value = 0;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data) {
      value = data.getDate();
    }
  }
  return value;
}

/**
 * Essa fun��o calcula a diferen�a de dias (levando em considera��o as horas) entre as datas passadas por par�metros.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferen�a de dias da data do 1� par�metro com a data do 2� par�metro.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 09/02/2005 00:00:00 e o 2� par�metro 11/03/2005 00:00:00. O retorno ser� -30.<br/>
 * 2. Assumindo que o 1� par�metro seja 11/03/2004 00:00:00 e o 2� par�metro 09/02/2004  00:00:00. O retorno ser� 30.
 */
function ebfDateDayDifference() {
  var result = 0;
  if (existArgs(arguments)) {
    var data1 = toDate(arguments[0]);
    var data2 = toDate(arguments[1]);
    if (data1 != null && data2 != null) {
      var diff = data1.getTime() - data2.getTime();
      /**
       * 86400000 ms = 1 dia em ms
       */
      result = diff / 86400000;
    }
  }
  return result;
}

/**
 * Essa fun��o obt�m as horas a partir da data.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data que deseja extrair as horas<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a hora extra�da da data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 22/08/2008 18: 30: 02. O retorno ser� 18.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * Se no primeiro par�metro for passada uma data sem as horas, a fun��o retornar� o valor 0 (zero).
 */
function ebfDateHour() {
  var hora = -1;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data) {
      hora = data.getHours();
    }
  }
  return hora;
}

/**
 * Essa fun��o incrementa o dia de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data que deseja incrementar o dia<br/>
 * 2. Valor a ser incrementado no dia<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o dia incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 22/09/2008 e o 2� par�metro seja 2 . O retorno ser� 24/09/2008.
 */
function ebfDateIncDay() {
  var data = null;
  if (existArgs(arguments)) {
    data = toDate(arguments[0]);
    var value = arguments[1];
    if (data) {
      data.incDay(value ? value : 0);
    }
  }
  return data;
}

/**
 * Essa fun��o incrementa o m�s de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data que deseja incrementar o m�s<br/>
 * 2. Valor a ser incrementado no m�s<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o m�s incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 05/08/2005 e o 2� par�metro seja 2 . O retorno ser� 05/10/2005.
 */
function ebfDateIncMonth() {
  var data = null;
  if (existArgs(arguments)) {
    data = toDate(arguments[0]);
    var value = arguments[1];
    if (data) {     
      var oldData = (new Date(data.getFullYear(), data.getMonth(), data.getDate(), data.getHours(), data.getMinutes(), data.getSeconds(), data.getMilliseconds()));
      data.incMonth(value ? value : 0);         
      if (oldData.getDate() != data.getDate()) {
         data = (new Date(data.getFullYear(), data.getMonth(), 0, data.getHours(), data.getMinutes(), data.getSeconds(), data.getMilliseconds()));         
      }
    }
  }
  return data;
}

/**
 * Essa fun��o incrementa o ano de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data que deseja incrementar o ano<br/>
 * 2. Valor a ser incrementado no ano<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o ano incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 22/08/2008 e o 2� par�metro seja 2 . O retorno ser� 22/08/2010.
 */
function ebfDateIncYear() {
  var data = null;
  if (existArgs(arguments)) {
    data = toDate(arguments[0]);
    var value = arguments[1];
    if (data) {
      data.incYear(value ? value : 0);
    }
  }
  return data;
}

/**
 * Essa fun��o obt�m os minutos de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data que ser� extra�do os minutos<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os minutos da data passada por par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 02/11/2010 12: 53: 26. O retorno ser� 53.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * Se no primeiro par�metro for passada uma data sem os minutos, a fun��o retornar� o valor 0(zero).
 */
function ebfDateMinute() {
  var minute = -1;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data != null) {
      minute = data.getMinutes();
    }
  }
  return minute;
}

/**
 * Essa fun��o obt�m o m�s de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data que deseja extrair o m�s<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o m�s da data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 22/09/2008. O retorno ser� 9.<br/>
 * 2  Assumindo que o 1� par�metro seja o retorno da fun��o "hoje", o retorno ser� o m�s atual
 */
function ebfDateMonth() {
  var value = 0;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data) {
      value = data.getMonth() + 1;
    }
  }
  return value;
}

/**
 * Essa fun��o calcula a diferen�a de meses entre as datas passadas por par�metros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferen�a de meses. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 09/02/2005 e o 2� par�metro 11/03/2005. O retorno ser� -1.<br/>
 * 2. Assumindo que o 1� par�metro seja 11/03/2004 e o 2� par�metro 09/02/2004. O retorno ser� 1.
 */
function ebfDateMonthDifference() {
  var monthDiff = 0;
  if (existArgs(arguments)) {
    var data1 = toDate(arguments[0]);
    var data2 = toDate(arguments[1]);
    if (data1 != null && data2 != null) {
      var yearDiff = data1.getFullYear() - data2.getFullYear();
      monthDiff = (yearDiff * 12) + data1.getMonth() - data2.getMonth();        
      if (data2.compareTo(data1) == -1) {
        if (data1.getDate() < data2.getDate()) {
      	  monthDiff--;      	
        }
      } else {
        if (data1.getDate() > data2.getDate()) {
          monthDiff++;
        }
      }
    }
  }
  return monthDiff;
}

/**
 * Essa fun��o obt�m os segundos de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data que ser� extra�do os segundos<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os segundos da data passada por par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 02/11/2010 11: 58: 26. O retorno ser� 26.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * 1. Se no primeiro par�metro for passada uma data sem os segundos, a fun��o retornar� o valor 0(zero).
 */
function ebfDateSecond() {
  var second = -1;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data != null) {
      second = data.getSeconds();
    }
  }
  return second;
}

/**
 * Incrementa a hora, minuto ou segundo de uma data com hora.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data com a hora que ser� incrementada.<br/>
 * 2. Quantidade a ser incrementada.<br/>
 * 3. Qual parte da hora deve ser incrementada. Use H para hora, M para minuto e S para segundo.<br/>
 * <br/>
 * Retorno: <br/>
 * Data com a hora incrementada. (Data)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * Utilizando a fun��o na Camada Cliente se for passada no 1� par�metro somente a data o retorno da fun��o ser� a data e<br/>
 * a hora com o valor incrementado na parte da hora informada,  Ex: Assumindo no 1� par�metro 10/12/2013, 2� par�metro 30, 3� par�metro M<br/>
 * retorno da fun��o ser� 10/12/2013 00:30:00.
 */
function ebfDateSumHour(date, value, type) {
	  if(date.getHours) {
	    var time = new Time();
	    date = time.fromDate(date);
	  }
	  
	  switch (type) {
	    case 'H': {
	      date.incHour(value);
	      break;
	    }
	    
	    case 'M': {
	      date.incMinute(value);
	      break;
	    }
	    
	    case 'S': {
	      date.incSecond(value);
	      break;
	    }
	  }
	  
	  return date.getDate();
}

/**
 * Essa fun��o obt�m a data atual e retorna.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data atual com as horas. (Data)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Ao utilizar a fun��o em um fluxo na camada Servidor, a hora retornada ser� a definida no rel�gio do servidor de aplica��es (Webrun).<br/>
 * 2. Ao utilizar a fun��o em um fluxo na camada Cliente, a hora retornada ser� a definida no rel�gio do cliente (n�o confi�vel).<br/>
 * 3. Ao utilizar a fun��o em um fluxo na camada Banco de Dados, a hora retornada ser� a definida no rel�gio do servidor de banco de dados.
 */
function ebfDateToday() {
  return new Date();
}

/**
 * Essa fun��o obt�m o ano a partir de uma data passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Data de onde ser� obtido o ano.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o ano da data passada por par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplos(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 05/08/2008. O retorno ser� 2008.<br/>
 * 2. Assumindo que o 1� par�metro seja 29/12/2004. O retorno ser� 2004.<br/>
 * 3. Assumindo que o 1� par�metro seja o retorno da fun��o "hoje", o retorno ser� o ano atual.
 */
function ebfDateYear() {
  var value = 0;
  if (existArgs(arguments)) {
    var data = toDate(arguments[0]);
    if (data) {
      value = data.getFullYear();
    }
  }
  return value;
}

/**
 * Essa fun��o calcula a diferen�a de anos entre as datas passadas por par�metros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferen�a de anos. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 23/12/2009 e o 2� par�metro 02/02/2007. O retorno ser� 2, pois (2009 - 2007 = 2).<br/>
 * 2. Assumindo que o 1� par�metro seja 18/05/2004 e o 2� par�metro 28/01/2007. O retorno ser� -3, pois (2004 - 2007 = -3).
 */
function ebfDateYearDifference() {
  var diff = 0;
  if (existArgs(arguments)) {
    var data1 = toDate(arguments[0]);
    var data2 = toDate(arguments[1]);
    if (data1 != null && data2 != null) {
      diff = data1.getFullYear() - data2.getFullYear();    
      if (data2.compareTo(data1) == -1) {
        if (data2.getMonth() > data1.getMonth()){
          diff--;
        } else if(data2.getMonth() == data1.getMonth){
          if(data2.getDate() > data1.getDate()){
            diff--;
          }	
        }
      } else {
        if(data2.getMonth() < data1.getMonth()){
          diff++;
        } else if(data2.getMonth() == data1.getMonth()){
          if (data2.getDate() < data1.getDate()) {
      	    diff++;
      	  }
        }
      }
    }
  }
  return diff;
}

/**
 * Esta fun��o remove um atributo de um objeto HTML (DOM).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Verdadeiro, se exclus�o bem sucedida, caso contr�rio, falso.
 */
function ebfDeleteObject(object, attribute){
  return delete object[attribute];
}

/**
 * Converte a cor para o formato RGB.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Cor, exemplo clBlue. <br/>
 * <br/>
 * Retorno:<br/>
 * Cor em RGB.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1.Assumindo como par�metro "clGreen", o retorno ser� #008000<br/>
 * 2.Assumindo como par�metro "clPurple", o retorno ser� #800080<br/>
 * 3.Assumindo como par�metro "clWhite", o retorno ser�  #FFFFFF <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * O formato RGB � uma forma utilizada para se reproduzir diversas cores atrav�s das cores b�sicas iniciais:<br/>
 * vermelho (Red), verde (Green) e azul (Blue). Em computa��o utiliza-se muito esse padr�o para se definir uma cor a ser mostrada na tela, se representa a cor RGB em n�meros tendo cada cor, vermelho (R), verde (G) e azul (B) 256 combina��es poss�veis de 0 a 255 sendo 0 a aus�ncia de dessa cor e 255 a sua plenitude. <br/>
 * Sendo Representado da seguinte forma:<br/>
 *       - Branco como � o conjunto de todas as cores sendo representado como 255 255 255.<br/>
 *       - Preto como sendo a aus�ncia de cores sendo representado com  0 0 0.<br/>
 *       - Vermelho, representado como 255 0 0.<br/>
 *       - Verde,  representado como 0 255 0.<br/>
 *       - Azul representado como  0 0 255.
 */
function ebfDelphiColorToRGB(value) 
{
    if (value == "clNone") return "";
    if (value == "clAqua") return "#33FFFF";
    if (value == "clBlack") return "#000000";
    if (value == "clBlue") return "#0000FF";
    if (value == "clCream") return "#FFFBF0";
    if (value == "clFuchsia") return "#FF00FF";
    if (value == "clGray") return "#808080";
    if (value == "clGreen") return "#008000";
    if (value == "clLime") return "#00FF00";
    if (value == "clMaroon") return "#800000";
    if (value == "clMedGray") return "#A0A0A4";
    if (value == "clMoneyGreen") return "#C0DCC0";
    if (value == "clNavy") return "#000080";
    if (value == "clOlive") return "#808000";
    if (value == "clPurple") return "#800080";
    if (value == "clRed") return "#FF0000";
    if (value == "clSilver") return "#C0C0C0";
    if (value == "clSkyBlue") return "#A6CAF0";
    if (value == "clTeal") return "#008080";
    if (value == "clWhite") return "#FFFFFF";
    if (value == "clYellow") return "#FFFF00";
    value = parseInt(value);
    if (value < 0) 
    { 
      value += 33554426;
    }
    var r = "#";
    r += ebfIntToHex(0x00FF & value, 2);      //R
    r += ebfIntToHex(0x00FF & value >>  8, 2); //G
    r += ebfIntToHex(0x00FF & value >> 16, 2);//B
    return r;
}

/**
 * Retorna o valor do texto no formato Java, a partir de um texto no formato Delphi mudando os caracteres especiais que s�o usados nas linguagens.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto Delphi.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto JAVA. (Letras)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como par�metro o texto 'softwell solutions' (entre aspas simples), o retorno ser� " softwell solutions " sem <br/>
 * aspas, visto que java n�o usa aspas simples e sim aspas duplas.
 */
function ebfDelphiStringToJavaString(delphiString) {
  return delphiStringToJavaString(delphiString);
}

/**
 * Essa fun��o destr�i o componente retirando o mesmo da mem�ria.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Nome do Componente (definir o formul�rio de trabalho no par�metro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O componente destru�do n�o mais poder� ser referenciado.
 */
function ebfDestroyComponent(componente){
  var c = $c(componente);
  if (c && !(c instanceof HTMLMakerFlowComponent)) {
    var cdiv = c.div;         
    if (cdiv.parentNode) {     
       cdiv.parentNode.removeChild(cdiv);
       $controller().remove(c);          
    }
  }else if(c){
    c.free();
  }
}

/**
 * Essa fun��o detecta se � um dispositivo m�vel e retorna o tamanho e altura da tela.<br/>
 * <br/>
 * Param�tros:<br/>
 * Nenhum<br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo tr�s elementos , o primeiro � o valor l�gico informando se � ou n�o mobile, o segundo a largura da tela e o terceiro a altura da tela.
 */
function ebfDetectMobile(){
  var isMobile = new Array();
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){ 
    isMobile[0] = true;
    isMobile[1] = window.innerWidth;
    isMobile[2] = window.innerHeight;
    return isMobile;
  }else{
    isMobile[0] = false;
    isMobile[1] = window.innerWidth;
    isMobile[2] = window.innerHeight;
    return isMobile;
  }
}

/**
 * Essa fun��o recebe um elemento HTML por par�metro e retorna se ele possui barra de rolagem.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Elemento<br/>
 * 2. Posi��o<br/>
 * <br/>
 * Retorno(s):<br/>
 * L�gico<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * No segundo par�metro � necess�rio informar a posi��o da barra de rolagem que se deseja saber, passando 1 como a vertical e 2 para horizontal.
 */
function ebfDetectScroll(elem, pos){
  if(pos === 1)
    scrollbar = elem.scrollHeight > elem.clientHeight;
  else if(pos === 2)
    scrollbar = elem.scrollWidth > elem.clientWidth; 
  return scrollbar;
}

/**
 * Desabilita o componente Grade passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente.<br/>
 * 2. Desabilitar? (True ou False)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfDisableGrid() {
  if (existArgs(arguments)) {     
    var componentGrid = $c(arguments[0]);    
    var disable = parseBoolean(arguments[1]);
    if (!componentGrid)
      return handleException(new Error('Componente '+ arguments[0] + ' n�o encontrado.'));      
    componentGrid.iscCanvas.setDisabled(disable);      
    componentGrid.setEnabled(!disable);      
    
  }
  return null;
}

/**
 * Essa fun��o encerra a conex�o com o servi�o GPS.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfDisconnectLocationService(){
  alert("Dispon�vel apenas no Maker Mobile");       
}

/**
 * Utilizada para fazer o download de um arquivo passando o endere�o do mesmo.<br/>
 * O caminho deve ser relativo ao diret�rio do deploy webrun, e deve come�ar por "/tmp/" ou "/download/" ou "/upload/" <br/>
 * ou "/downloads/" ou "/uploads<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL do arquivo que ser� baixado. Ex: /tmp/arquivo.zip<br/>
 * 2. WEB: Indica se deve ser exibido uma mensagem informativa, com o link do arquivo.<br/>
 *     Se for verdadeiro aparecer� uma mensagem informando o endere�o do arquivo, e iniciar� o download.<br/>
 *     Se for falso apenas iniciar� o download do arquivo.<br/>
 *     Maker Mobile: Indica o nome (com extens�o) do arquivo que ser� baixado.<br/>
 * <br/>
 * Retorno<br/>
 * WEB: N�o possui<br/>
 * Maker Mobile: Retorna o caminho completo do arquivo salvo.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Caso o caminho da URL n�o seja relativo ao diret�rio do deploy do webrun, o download n�o iniciar� automaticamente.<br/>
 * Ex: http://sistemas.webrun.com.br/tmp/arquivo.zip<br/>
 * 2. Caso a fun��o seja utilizada para a plataforma Maker Mobile, o segundo par�metro dever� ser informado o nome (com extens�o) para o arquivo que ser� salvo. A fun��o retornar� automaticamente o caminho do arquivo salvo (Maker Mobile)
 */
function ebfDonwloadStart(url, showWarning) {
  var execWin = top;
  
  if (!IE && d && d.n && d.n.isModal === true) {
    execWin = $mainframe();
  }

  // Condi��o para funcionar em formul�rio principal no IE  
  if (IE && top.systemOnLoadAction) {
    IframeTransporter('download?download_file=' + URLEncode(url, 'GET') + '&sys=' + sysCode + '&formID=' + URLEncode(idForm, 'GET'));
  } else {
    execWin.IframeTransporter('download?download_file=' + URLEncode(url, 'GET') + '&sys=' + sysCode + '&formID=' + URLEncode(idForm, 'GET'));
  }
  
  if (showWarning) {
    interactionInfo("Se o download n�o iniciar automaticamente clique no link abaixo: \n<a href=\"" + url + "\" target=\"_NEW\">" + url + "</a>");
  }
}

/**
 * Essa fun��o remove todos os elementos em tela do componente Lista Dupla passado como par�metro. <br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Componente Lista Dupla.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o n�o remove os registros armazenados no banco de dados.
 */
function ebfDualListClean(obj) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.deleteOption) {  
    var index = 0;
    var objSelect = obj.leftSelect;  
    while (objSelect.options.length) {
      obj.deleteOption(objSelect, index);
    }    
    var objSelect = obj.rightSelect;  
    while (objSelect.options.length) {
      obj.deleteOption(objSelect, index);
    }
  }  
}

/**
 * Retorna uma lista com os campos chaves da lista principal do componente lista dupla. � necess�rio selecionar os itens nas quais, quer-se obter os campos chaves.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Formul�rio que cont�m a Lista Dupla<br/>
 * 2. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista com os selecionados da lista principal (Variante).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfDualListGetLeftSelectedValues(form, componentName) {
  var component = $c(componentName, form);
  
  var selectedValues = new Array();
  
  var options = component.leftSelect.options;
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    if (option.selected) {
      selectedValues.push(option.value);
    }
  }
  
  return selectedValues;
}

/**
 * Retorna uma lista dos selecionados com os valores dos campos chaves, dos itens que foram selecionados pelo usu�rio do componente lista dupla.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Formul�rio que cont�m a Lista Dupla<br/>
 * 2. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista com os selecionados da lista principal. (Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfDualListGetRightSelectedValues(form, componentName) {
  var component = $c(componentName, form);
  
  var selectedValues = new Array();
  
  var options = component.rightSelect.options;
  for (var i = 0; i < options.length; i++) {
    var option = options[i];
    if (option.selected) {
      selectedValues.push(option.value);
    }
  }
  
  return selectedValues;
}

/**
 * Essa fun��o adiciona um elemento em tela no componente Lista Dupla de acordo os valores passados como par�metros.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Componente Lista Dupla.<br/>
 * 2. Valor Chave (Letras).<br/>
 * 3. Valor que representar� a chave (Letras).<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como 1� par�metro um componente Lista Dupla com os valores na lista principal:<br/>
 *  1 - Pedra<br/>
 *  2 - Papel<br/>
 * ao passar o valor "3" no 2� par�metro e "Tesoura" no 3� par�metro o resultado ser� uma Lista Dupla com os valores <br/>
 * 1 - Pedra<br/>
 * 2 - Papel<br/>
 * 3 - Tesoura.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O valor adicionado ao componente, n�o ser� armazenado no banco de dados, caso o mesmo esteja vinculado a campo.
 */
function ebfDualListPut(obj, value, label) {
  obj = controller.verifyComponent(obj);  
  
  if (obj && obj.addItem) {
    obj.addItem(obj.leftSelect, value, label);
  }  
}

/**
 * Define o tipo de filtro que deve ser executado para todas as Listas Din�micas do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * <br/>
 * 1. Tipo de filtro:<br/>
 * 1- Igual, 2- Contendo, 3- Iniciando com, 4- Terminando com<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * Definir o fluxo ao entrar no formul�rio ou na lista din�mica
 */
function ebfDynamicListDefineAllFilterType(type) {
  var initialType = 3;
  try {
    initialType = parseInt(type);
    if (!(/[1-4]/.test(initialType))) {
      initialType = 3;
    }
  } catch (e) { /*do nothing*/ }

  var elems = $mainform().controller.elems;
  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i];
    if (elem instanceof HTMLLookup) {
      elem.initialType = initialType;
    }
  }
}

/**
 * Fun��o que cria um novo componente caixa de texto dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (Caso n�o seja definida, a aba n�o ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descri��o do Componente.<br/>
 * 7. Valor.<br/>
 * 8. ID para o componente (Letras)<br/>
 * 9. Tipo (moeda, inteiro, data) (Opcional, Letras)<br/>
 * 10. Texto quando Nulo (Opcional, Letras)<br/>
 * 11. Posi��o da Descri��o (Opcional, Inteiro)<br/>
 * 12. Auto Completar ? (Opcional, L�gico)<br/>
 * 13. Container (Letras)<br/>
 * 14. Estilo CSS (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1) Caso se deseje utilizar um dos tipos de dados acima, deve-se escrever o tipo do mesmo, conforme as op��es. O <br/>
 * mesmo ir� definir a m�scara escolhida ao componente.
 */
function ebfEditNew(aba, posX, posY, width, height, description, value, id, maskType, placeholder, labelPosition, autocomplete, compContainer, styleCss) {  
  var code = getCodComponent();
  var component = new HTMLEdit(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, value);
  if (!id) {
    id = description;
  } 
  component.id = id;
  component.zindex = 3;
  component.loadComponentTime = 0;  
  component.styleCss = styleCss;
  
  if (placeholder) {
    component.placeholder = placeholder;
  }
  
  if (labelPosition) {
    component.labelPosition = labelPosition;
  }
  
  if (autocomplete) {
    component.autocomplete = autocomplete;
  }
  
  if (maskType == "data") {   
    component.type = 2;
    component.typeName = 'date';
    component.textMask = '##/##/####';
  }
  
  if (maskType == "datahora") {   
    component.type = 2;
    component.typeName = 'datetime';
    component.textMask = '##/##/#### ##:##:##';
  }

  if (maskType == "moeda") {
    component.typeName = 'double';
    component.numberMask = '#,###.00';
    component.align = 'right';
  }
  
  if (maskType == "inteiro") {
    component.typeName = 'integer';
    component.numberMask = '#';
    component.align = 'right';
  }  

  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  if(compContainer){
    component.container = compContainer;
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
  document['c_' + code] = component;  
  setOrderTabDynamically(component);
}

//Chamado quando cria-se um componente (Maker All) dinamicamente na camada cliente.
function setOrderTabDynamically (component){
  if(component && orderTab){
    for(i=0; i <= orderTab.length; i++){
      if(orderTab[i] instanceof HTMLNavigationButton || orderTab[i] instanceof HTMLNavigationButtonSingleImage){
        orderTab.splice(i, 0, component);
        break;
      }else if(i === orderTab.length) {
        orderTab.push(component);        
        break;
      }     
    }
  }
}

/**
 * Essa fun��o habilita o modo de depura��o no aplicativo em quest�o quando executado no Android.<br/>
 * <br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Ativar? (true/false)<br/>
 * <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * A depura��o remota deve est� habilitado no computador e dispositivo. Mais detalhes:<br/>
 * https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br
 */
function ebfEnableDebugMode(status){
  console.log('Compat�vel com o Maker Mobile');
}

/**
 * Habilitar ou desabilitar bot�o de exclus�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. L�gico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfEnableDeleteButton(value) {
  var button = d.n.btDelete;
  if (!button.flag) {
    var func = button.setEnabled;
    button.setEnabled = function(value, exec) {
      if (exec) {
        button.timeout(func, 0, [value]);
      }
    }
    button.flag = true;
  }
  button.setEnabled(value, true);
}

/**
 * Habilitar ou desabilitar bot�o de altera��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. L�gico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfEnableEditButton(enabled) {
  var navigation = $mainform().d.n;
  if (navigation) {
    navigation.canEdit = enabled;
    navigation.btEdit.setEnabled(enabled);
  }
}

/**
 * Essa fun��o habilita ou desabilita o GPS do dispositivo<br/>
 * <br/>
 * Par�metro(s):<br/>
 * N�o Possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Verdadeiro, caso seja ativado. Falso, caso contr�rio.
 */
function ebfEnableGPS(){}

/**
 * Essa fun��o habilita ou desabilita a exporta��o dos dados de um componente Grade de acordo o valor l�gico informado no terceiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente Grade.<br/>
 * 3. Habilitar? (L�gico).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfEnableGridExportData (form, comp, enable){
  var grid = $c(comp);  
  if(!grid){
    handleException(new Error('O componente ' + comp + ' n�o encontrado.'));     
    return false;
  }
  if(enable){  
    grid.contextMenu = isc.Menu.create({
      ID: grid.id + "mainMenu",
      width: 150,
      data:
        [
          { title: getLocaleMessage("LABEL.GRID_EXPORT_DATA") },
          { isSeparator: true },
          {
            icon: iconPathExport + "excel.png",
            title: "EXCEL",
            click: "gridExportData('" + grid.id + "', 'XLS')"
          },
          {
            icon: iconPathExport + "html.png",
            title: "HTML",
            click: "gridExportData('" + grid.id + "', 'HTML')"
          },
          {
            icon: iconPathExport + "json.png",
            title: "JSON",
            click: "gridExportData('" + grid.id + "', 'JSON')"
          },
          {
            icon: iconPathExport + "list.png",
            title: "LISTAGEM",
            click: "gridExportData('" + grid.id + "', 'LST')"
          },
          {
            icon: iconPathExport + "pdf.png",
            title: "PDF",
            click: "gridExportData('" + grid.id + "', 'PDF')"
          },
          {
            icon: iconPathExport + "txt.png",
            title: "TEXTO",
            click: "gridExportData('" + grid.id + "', 'TXT')"
          },
          {
            icon: iconPathExport + "xml.png",
            title: "XML",
            click: "gridExportData('" + grid.id + "', 'XML')"
          }
        ]
    });
    grid.iscCanvas.contextMenu = grid.contextMenu;        
  }else{  
    grid.iscCanvas.contextMenu = null;       
  }  
  grid.iscCanvas.markForRedraw(); 
};

/**
 * Habilitar ou desabilitar bot�o de inser��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. L�gico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfEnableIncludeButton() {

var navigation = $mainform().d.n;

if (navigation) {
   navigation.btInclude.setEnabled(arguments[0]);
 
}

}

/**
 * Verifica se o conte�do do primeiro par�metro termina com o conte�do do 2� par�metro.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto onde ser� feita a pesquisa;<br/>
 * 2. Valor final do texto.<br/>
 * <br/>
 * Retorno:  <br/>
 * Verdadeiro se o texto do 1� par�metro iniciar com o valor informado no 2� par�metro, caso contr�rio, retornar� Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como "Maker Flow" (Letras) e "ow" (Letras) , o retorno seria Verdadeiro.<br/>
 * 2. Assumindo os par�metros como "Maker Flow" (Letras) e "wo" (Letras) , o retorno seria Falso.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Ao informar o 2� par�metro como "" (vazio), o retorno ser� Verdadeiro.
 */
function ebfEndsWith (value, valueEndsWith){
  if(!isNullable(value))  
    return toString(value).endsWith(valueEndsWith);    
  return false;
}

/**
 * Esta fun��o recebe como par�metro um objeto e uma fun��o que pertence aquele objeto e executa passando par�metros se houver.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto (Variante) (Opcional)<br/>
 * 2. Nome da fun��o (Letras)<br/>
 * 3. Lista de par�metros (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * O retorno da fun��o chamada. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o 1� par�metro n�o seja informado, implicitamente ser� obtido o objeto Window (equivalente ao retorno da fun��o Obter Formul�rio Atual na maioria dos casos).
 */
function ebfExecuteCustomJSFunction(obj, fun, params){
  if(typeof(fun) === "string"){
    if(typeof(obj) !== "object" || obj === null)
      obj = window;
    return obj[fun].apply(obj, params);
  }
}

/**
 * Executa um comando Javascript passado como par�metro. <br/>
 * (JavaScript � uma linguagem de hiper-texto.� uma nova linguagem para cria��o de Home-Pages.Fun��es escritas em JavaScript podem ser embutidas dentro de seu  documento HTML.)<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Comando JavaScript<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o resultado do comando executado. (Variante) <br/>
 * <br/>
 * Exemplos: <br/>
 * 1� Par�metro: alert("Messagem a ser Enviada");
 */
function ebfExecuteJS(js, context) {
  return executeJS.call(this, js, context);
}

/**
 * Executa um comando Javascript a partir de um contexto espec�fico. <br/>
 * (JavaScript � uma linguagem de hiper-texto. Fun��es escritas em JavaScript podem ser embutidas dentro de seu documento HTML)<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do contexto<br/>
 * 2. Comando JavaScript<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o resultado do comando executado. (Variante) <br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o primeiro par�metro seja nulo, a fun��o ser� executada a partir do contexto principal do formul�rio.<br/>
 * 2. O primeiro par�metro pode ser a refer�ncia do contexto (objeto window) ou do iframe (elemento HTML).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1� Par�metro: refer�ncia de um elemento iframe;<br/>
 * 2� Par�metro: alert("Messagem a ser enviada");
 */
function ebfExecuteJSFromWindow(newWindow, jsQuery) {
  try {
    if(!newWindow) {
     return eval(jsQuery);
    } else if(newWindow instanceof HTMLIFrameElement) {
      newWindow = newWindow.contentWindow;     
    }
    return newWindow.eval(jsQuery);     
  } catch(e) {
    handleException(new Error(e));
  }
}

/**
 * Exporta os dados do formul�rio passado no primeiro par�metro de acordo com o tipo de exporta��o escolhida.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio cujos dados ser�o exportados<br/>
 * 2. Tipo de exporta��o<br/>
 *      LST     - Exportar como uma lista;<br/>
 *      HTML  - Exportar como tabelas HTML;<br/>
 *      XML     - Exportar como �rvore XML;<br/>
 *      TXT      - Exportar como arquivo de texto;<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o pode ser usada somente pra exporta��o de dados, ou seja, vinculados ao registro da tabela referente ao formul�rio passado no 1� par�metro.
 */
function ebfExportFormData(formGuid,type) {
  window.open("export.jsp?sys=" + sysCode + "&formID=" + URLEncode(formGuid) + "&type=" + type, "ExportFormData", "fullscreen");
}

/**
 * Esta fun��o verifica o estado do aplicativo e se a sess�o do usu�rio est� definida como logado ou n�o no Facebook. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo que receber� o Status do Aplicativo (Fluxo);<br/>
 * 2. Lista de Par�metros do fluxo (Variante, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O fluxo chamado no primeiro par�metro receber� o Status do aplicativo. O status pode ser "connected" quando o <br/>
 * usu�rio autenticou a permiss�o do aplicativo no Facebook, "not_authorized" quando est� logado no Facebook mas n�o <br/>
 * autenticado no Aplicativo ou  "unknown" quando n�o est� logado no Facebook, ent�o n�o se sabe se est� autenticado <br/>
 * no Aplicativo.
 */
function ebfFacebookAppStatus(fluxo, params){
  var funcao = function(){
    window.removeEventListener("fbload", funcao, false);
    FB.getLoginStatus(function(response) {
      response = [response.status];
      if(!isNullable(params)){
        for(key in params){
          if(params.propertyIsEnumerable(key))
            response.push(params[key]);
        }
      }
      ebfFlowExecute(fluxo, response);
    });
  }
  if(typeof(FB)==="undefined"){
    window.addEventListener("fbload", funcao, false);
  }else{
    funcao();
  }
}

/**
 * Esta fun��o abre uma caixa de coment�rios no componente moldura.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. AppID do Facebook (Letras);<br/>
 * 3. Tema: "light" ou "dark" (Letras);<br/>
 * 4. Link da p�gina que ser� associada aos coment�rios (Letras);<br/>
 * 5. N�mero de postagens exibidas (Inteiro, opcional);<br/>
 * 6. Ordem: "social", "reverse_time" ou "time" (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O n�mero de postagens m�nimo � de "1" e o m�ximo "10";<br/>
 * 2. Caso o 6� par�metro n�o seja informado, o valor padr�o adotado � "social";
 */
function ebfFacebookComments(component, appid, colorscheme, href, num_posts, order_by){
  if(isNullable(appid)){
    throw "App ID � um par�metro obrigat�rio";
  }
  var meta = document.createElement("meta");
  meta.setAttribute("property","fb:app_id");
  meta.setAttribute("content",appid);
  document.head.appendChild(meta);
  if(typeof(FB)==="undefined"){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "appId":appid,
        "status":true,      
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  if(typeof(FB)==="object"){
    FB.init({
      "appId":appid,
      "status":true,      
      "xfbml":true,
      "version":"v2.0"
    });
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;  
  elem.className = "fb-comments";
  elem.setAttribute("data-width",$c(component).getWidth());
  if(!isNullable(colorscheme)){
    elem.setAttribute("data-colorscheme",colorscheme);
  }
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(!isNullable(num_posts)){
    elem.setAttribute("data-numposts",num_posts);
  }
  if(!isNullable(order_by)){
    elem.setAttribute("data-order-by",order_by);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Esta fun��o habilita a op��o de curtir/recomendar para uma determinada p�gina/link.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Layout: "standard", "box_count", "button_count" ou "button" (Letras, Opcional);<br/>
 * 3. A��o: "like" ou "recommend" (Letras, Opcional);<br/>
 * 4. Mostrar foto do perfil? (L�gico, Opcional);<br/>
 * 5. Link da p�gina a ser curtida/recomendada (Letras, Opcional);<br/>
 * 6. Incluir compartilhar? (L�gico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O 4� s� � aplicado para o layout "standard";<br/>
 * 2. Caso o 5� par�metro n�o seja informado, a p�gina atual ser� adotada.
 */
function ebfFacebookLike(component, layout, action, show_faces, href, share){
  if(!window.fbAsyncInit){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;
  elem.className = "fb-like";
  elem.setAttribute("data-width",$c(component).getWidth());
  if(!isNullable(layout)){
    elem.setAttribute("data-layout",layout);
  }
  if(!isNullable(action)){
    elem.setAttribute("data-action",action);
  }
  if(!isNullable(show_faces)){
    elem.setAttribute("data-show-faces",show_faces);
  }
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(!isNullable(share)){
    elem.setAttribute("data-share",share);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Esta fun��o permite a visualiza��o das �ltimas publica��es da p�gina e/ou os usu�rios do Facebook que curtem a p�gina.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Moldura (Componente)<br/>
 * 2. Link da p�gina do Facebook a ser curtida (Letras)<br/>
 * 3. Tema: "light" ou "dark", padr�o � "light" (Letras, Opcional)<br/>
 * 4. Mostrar cabe�alho? (L�gico, Opcional)<br/>
 * 5. Mostrar borda da caixa? (L�gico, Opcional)<br/>
 * 6. Mostrar fotos dos perfis? (L�gico, Opcional)<br/>
 * 7. Mostrar �ltimas postagens da p�gina? (L�gico, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O 4� e o 5� possuem o valor padr�o "verdadeiro";<br/>
 * 2. Por padr�o, as fotos dos perfis n�o s�o exibidas (6� par�metro);<br/>
 * 3. Por padr�o, as �ltimas postagens da p�gina n�o s�o exibidas (7� par�metro);
 */
function ebfFacebookLikeBox(component, href, colorscheme, header, show_border, show_faces, stream){
  if(!window.fbAsyncInit){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;
  elem.className = "fb-like-box";
  elem.setAttribute("data-width",$c(component).getWidth());
  elem.setAttribute("data-height",$c(component).getHeight());
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(!isNullable(colorscheme)){
    elem.setAttribute("data-colorscheme",colorscheme);
  }
  if(!isNullable(header)){
    elem.setAttribute("data-header",header);
  }
  if(!isNullable(show_border)){
    elem.setAttribute("data-show-border",show_border);
  }
  if(!isNullable(show_faces)){
    elem.setAttribute("data-show-faces",show_faces);
  }
  if(!isNullable(stream)){
    elem.setAttribute("data-stream",stream);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Esta fun��o habilita a op��o de login/logout no Facebook.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. AppID do Facebook (Letras);<br/>
 * 3. Habilitar Sair? (L�gico);<br/>
 * 4. Quantidade de linhas de perfis a serem exibidos (Inteiro, Opcional);<br/>
 * 5. Fluxo a ser executado no login/logout (Fluxo, Opcional);<br/>
 * 6. Par�metros adicionais para o fluxo;<br/>
 * 7. Lista de permiss�es requisitadas (Variante, Opcional);<br/>
 * 8. Tamanho do bot�o de login;<br/>
 * 9. Mostrar Foto do Perfil<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es<br/>
 * 1. Por padr�o, somente o perfil p�blico do usu�rio � requisitado (7� Par�metro). A lista completa de permiss�es poder� ser obtida em https://developers.facebook.com/docs/facebook-login/permissions/v2.0#reference<br/>
 * 2. As seguintes op��es s�o v�lidas para o 8� par�metro: "small", "medium", "large" ou "xlarge";
 */
function ebfFacebookLogin(component, appid, auto_logout_link, max_rows, onlogin, params, scope, size, show_faces){
  if(isNullable(appid)){
    throw "App ID � um par�metro obrigat�rio";
  }
  if(typeof(FB)==="undefined"){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "appId":appid,
        "status":true,      
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  if(typeof(FB)==="object"){
    FB.init({
      "appId":appid,
      "status":true,      
      "xfbml":true,
      "version":"v2.0"
    });
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;  
  elem.className = "fb-login-button";
  if(!isNullable(auto_logout_link)){
    elem.setAttribute("data-auto-logout-link",auto_logout_link);
  }
  if(!isNullable(max_rows)){
    elem.setAttribute("data-max-rows",max_rows);
  }
  if(!isNullable(onlogin)){
    if(isNullable(params)){
      params = [];
    }
    elem.setAttribute("data-onlogin","ebfFlowExecute('"+onlogin+"',"+(JSON.stringify(params)).replace(/\"/g,"'")+")");
  }
  if(!isNullable(scope)){
    elem.setAttribute("data-scope",scope);
  }else{
    elem.setAttribute("data-scope","public_profile");
  }
  if(!isNullable(size)){
    elem.setAttribute("data-size",size);
  }
  if(!isNullable(show_faces)){
    elem.setAttribute("data-show-faces",show_faces);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Solicita autoriza��o para logar com o Facebook do usu�rio.<br/>
 * <br/>
 * Parametros:<br/>
 * 1. Fluxo de sucesso;<br/>
 * 2. Par�metros extras para o fluxo de sucesso;<br/>
 * 3. Fluxo de erro;<br/>
 * 4. Par�metros extras para o fluxo de erro;<br/>
 * 5. Lista de par�metros de permiss�es para o Facebook.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. � necess�rio definir o ID da aplica��o do Facebook na propriedade "Avan�ado" da �rea de trabalho do projeto, com a descri��o FacebookID.<br/>
 * 2. O fluxo de sucesso dever� conter um par�metro do tipo variante, onde receber� um JSON com as informa��es solicitadas no par�metro 5.<br/>
 *    2.1. As permiss�es podem ser encontradas no seguinte link: https://developers.facebook.com/docs/facebook-login/permissions<br/>
 * 3. � necess�rio definir a seguinte Hash chave nas defini��es do seu projeto Android: 0WIQzU0HT5kEuWsgE7jqZDZDQOU=
 */
function ebfFacebookLoginMobile(){
  console.log("Dispon�vel apenas no Maker Mobile");
}

/**
 * Esta fun��o exibe uma postagem do Facebook no componente moldura passado como par�metro.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Link da postagem do Facebook (Letras);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFacebookPost(component, href){
  if(!window.fbAsyncInit){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;  
  elem.className = "fb-post";
  elem.setAttribute("data-width",$c(component).getWidth());
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Esta fun��o permite recomendar uma p�gina/link de sites externos.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. App ID do Facebook (Letras);<br/>
 * 2. A��o: "like" ou "recommend" (Letras, Opcional);<br/>
 * 3. Link da p�gina a ser recomendada (Letras, Opcional);<br/>
 * 4. Lista de dom�nios (Variante, Opcional;<br/>
 * 5. Quantidade de recomenda��es (Inteiro, Opcional);<br/>
 * 6. Posi��o da barra de recomenda��es: "left" ou "right" (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso 5� n�o seja informado, o valor padr�o adotado s�o 2. O valor m�ximo de dom�nios s�o 5.
 */
function ebfFacebookRecommendationsBar(appid, action, href, site, num_recommendations, side){
  if(isNullable(appid)){
    throw "App ID � um par�metro obrigat�rio";
  }
  if(typeof(FB)==="undefined"){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "appId":appid,
        "status":true,      
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  if(typeof(FB)==="object"){
    FB.init({
      "appId":appid,
      "status":true,      
      "xfbml":true,
      "version":"v2.0"
    });
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = document.createElement("div");
  elem.className = "fb-recommendations-bar";
  document.body.appendChild(elem);
  if(!isNullable(action)){
    elem.setAttribute("data-action",action);
  }
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(!isNullable(site)){
    elem.setAttribute("data-site",site);
  }
  if(!isNullable(num_recommendations)){
    elem.setAttribute("data-num-recommendations",num_recommendations);
  }
  if(!isNullable(side)){
    elem.setAttribute("data-side",side);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Esta fun��o habilita a op��o de compartilhar um determinado link/p�gina.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Layout: "box_count", "button_count", "button", "icon_link", "icon" ou "link" (Letras, Opcional);<br/>
 * 3. Link da p�gina a ser compartilhada (Letras);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A altura do bot�o "compartilhar" � determinada pelo layout escolhido no 2� par�metro. A largura do bot�o ser� determinada pela largura do componente moldura.
 */
function ebfFacebookShare(component, layout, href){
  if(!window.fbAsyncInit){
    var FBLoadEvent = document.createEvent("Event");
    FBLoadEvent.initEvent("fbload", false, false);
    window.fbAsyncInit = function() {
      FB.init({
        "xfbml":true,
        "version":"v2.0"
      });
      window.dispatchEvent(FBLoadEvent);
    };
  }
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/"+$mainform().ebfCurrentLanguage()+"/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  var elem = $c(component).div;  
  elem.className = "fb-share-button";
  elem.setAttribute("data-width",$c(component).getWidth());
  if(!isNullable(layout)){
    elem.setAttribute("data-type",layout);
  }
  if(!isNullable(href)){
    elem.setAttribute("data-href",href);
  }
  if(typeof(FB)!=="undefined"){
    FB.XFBML.parse(elem.parentNode);
  }
}

/**
 * Efetua a conex�o com o banco de dados Firebase. Nos casos de utiliza��o no Mobile, o banco a ser conectado ser� o configurado no projeto cadastrado no Firebase.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Caminho do arquivo de conex�o '.json' (No Maker Mobile, ser� obtido automaticamente. Informar o JSON de conex�o quando utilizada na camada Cliente); Ver observa��o 5.<br/>
 * 2. URL do banco (No Maker Mobile e na camada Cliente, ser� obtido automaticamente);<br/>
 * 3. Fluxo de Callback (Aplicado apenas para camada Cliente, este par�metro recebe o nome do fluxo que ser� executado quando a conex�o com o banco for estabelecida);<br/>
 * 4. Lista de Par�metros para o fluxo indicado no 3� par�metros;<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a refer�ncia da conex�o quando utilizado na camada servidor ou mobile(quando utilizada na camada Cliente, o retorno ser� nulo);<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Os dados para conex�o com o banco de dados s�o obtidos no cadastro do projeto no Console do Firebase.<br/>
 * 2. Endere�o do console do Firebase: https://console.firebase.google.com/<br/>
 * 3. No Mobile o arquivo de configura��o dever� ser upado no servidor do Maker Mobile atrav�s da op��o "Configura��es Adicionais" dispon�vel na tela de exporta��o do projeto.<br/>
 * 4. A  leitura do arquivo "google-services.json" (Android) ou "google-services.plist" (iOS) ser� realizada de forma autom�tica.<br/>
 * 5. Para a camada cliente dever� ser o retorno da fun��o JSON - Criar Objeto, copiar o JSON (texto) disponibilizado ap�s configurar o projeto para Web no Firebase ( No link https://firebase.google.com/docs/web/setup?hl=pt-br e se��o "Objeto de configura��o do Firebase") . Para utilizar na camada servidor, dever� ser habilitado o Firebase Admin SDK conforme documenta��o: https://firebase.google.com/docs/admin/setup
 */
function ebfFirebaseConnect(jsonConfig, url, ruleCallback, paramsRuleCallback){
  loadAsync("https://www.gstatic.com/firebasejs/5.2.0/firebase.js", callbackFunction);  
 
  function callbackFunction(){
    firebase.initializeApp(jsonConfig);
    firebaseCallbackFunction();   
  }  

  window.firebaseCallbackFunction = function(){  
    var parametros = paramsRuleCallback;
    var ruleCallbackExec = ruleCallback;

    if(ruleCallbackExec){
      executeRuleFromJS(ruleCallbackExec, parametros);
    }
  }
}

function loadAsync(src, callback){
  var script = document.createElement('script');
  script.src = src; 
  script.type = 'text/javascript';
  script.async = true;
  if(callback != null){
      if (script.readyState) {
          script.onreadystatechange = function() {
              if (script.readyState == "loaded" || script.readyState == "complete") {
                  script.onreadystatechange = null;
                  callback();
              }
          };
      } else {
          script.onload = function() {
              callback();
          };
      }
  }
  document.head.appendChild(script);
}

/**
 * Monitora altera��es/atualiza��es de um n�/registro em um no banco de dados Firebase.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da Conex�o (No Maker Mobile e na camada Cliente, ser� obtido automaticamente).<br/>
 * 2. Nome do N� a ser monitorado.<br/>
 * 3. Filtro a ser realizado (JSON).<br/>
 * 4. Tipo de Ordena��o ("F": Ordenar resultados pelo valor de uma chave filho espec�fica; "C": Ordenar resultados por chaves filho;<br/>
 *     "V": Ordenar resultados por valores filhos. <br/>
 * 5. Valor de ordena��o (Somente para o tipo "F". Informar o nome de um n� filho para ordena��o)<br/>
 * 6. Fluxo que receber� os dados de monitoramento.<br/>
 *     O fluxo dever� deixar dois par�metros reservados. O primeiro receber� a a��o realizada que � "A": Adi��o; "D": Remo��o; "U": Atualiza��o<br/>
 *     O segundo ser� o JSON com os dados recebidos.<br/>
 * 7. Lista de par�metros extra para o fluxo(Na camada cliente n�o se faz necess�rio reservar os par�metros autom�ticos da fun��o).<br/>
 * <br/>
 * Exemplo de filtro: <br/>
 * No exemplo abaixo, ser�o monitorados os primeiros 12 elementos que iniciam com "A" e terminam com "D"<br/>
 * {<br/>
 *   "first": 12,<br/>
 *   "startWith": "A",<br/>
 *   "endWith": "D"<br/>
 * }<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfFirebaseMonitoringData(ref, node, filter, orderType, orderData, onSuccess, onSuccessParams) {

  var database = firebase.database().ref(node);

  if (filter) {
    var first = filter.first,
        last = filter.last,
        startAt = filter.startAt,
        endAt = filter.endAt,
        equalTo = filter.equalTo;


    if (orderType == 'F') {
      database = database.orderByChild(orderData);
    } else if (orderType == 'C') {
      database = database.orderByKey();
    } else if (orderType == 'V') {
      database = database.orderByValue();
    }

    if (first)
      database = database.limitToFirst(first);

    if (last)
      database = database.limitToLast(last);

    if (filter.hasOwnProperty('startAt'))
      database = database.startAt(startAt);

    if (filter.hasOwnProperty('endAt'))
      database = database.endAt(endAt);

    if (filter.hasOwnProperty('equalTo'))
      database = database.equalTo(equalTo);
  }

  database.on('child_added', function (snapshot) {
    firebaseCallbackFunction('A', snapshot.val() ? snapshot.val() : {}, snapshot.key);
  });

  database.on('child_changed', function (snapshot) {
    firebaseCallbackFunction('U', snapshot.val() ? snapshot.val() : {}, snapshot.key);
  });

  database.on('child_removed', function (snapshot) {
    firebaseCallbackFunction('D', snapshot.val() ? snapshot.val() : {}, snapshot.key);
  });

  database.on('child_moved', function (snapshot) {
    firebaseCallbackFunction('M', snapshot.val() ? snapshot.val() : {}, snapshot.key);
  });

  function firebaseCallbackFunction(action, value, key) {
    var parametros;
    if (onSuccessParams) parametros = [action, value, key].concat(onSuccessParams);else parametros = [action, value, key];

    var ruleCallback = onSuccess;

    if (ruleCallback) {
      executeRuleFromJS(ruleCallback, parametros);
    }
  };
}

/**
 * Atualiza o valor de um n�/chave quando a conex�o com o Firebase for encerrada. <br/>
 * A conex�o com o Firebase pode ser encerrada por falta de conex�o com internet, por exemplo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da conex�o.(No Maker Mobile e na camada Cliente, ser� obtido automaticamente);<br/>
 * 1. Nome do N�<br/>
 * 3. JSON ou Valor (Literal).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * N�o possui.
 */
function ebfFirebaseOnDisconnect(ref, node, data){
  var database = firebase.database().ref(node);
  database.onDisconnect().set(data);
}

/**
 * L� um n�/registro em um no banco de dados Firebase.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da Conex�o(No Maker Mobile e na camada Cliente, ser� obtido automaticamente).<br/>
 * 2. Nome do N�.<br/>
 * 3. Filtro a ser realizado (JSON).<br/>
 * 4. Tipo de Ordena��o ("F": Ordenar resultados pelo valor de uma chave filho espec�fica; "C": Ordenar resultados por chaves filho;<br/>
 *     "V": Ordenar resultados por valores filhos. <br/>
 * 5. Valor de ordena��o (Somente para o tipo "F". Informar o nome de um n� filho para ordena��o).<br/>
 * 6. Fluxo que receber� os dados lidos (JSON).<br/>
 * 7. Lista de par�metros extra para o fluxo(Na camada cliente n�o se faz necess�rio reservar os par�metros autom�ticos da fun��o).<br/>
 * 8. Fluxo que receber� no primeiro par�metro a mensagem de erro, quando o mesmo ocorrer (Letras).<br/>
 * 9. Lista de par�metros extra para o fluxo de Erro.<br/>
 * <br/>
 * Exemplo de filtro: <br/>
 * No exemplo abaixo, ser�o retornados os primeiros 12 elementos que iniciam com "A" e terminam com "D"<br/>
 * {<br/>
 *   "first": 12,<br/>
 *   "startWith": "A",<br/>
 *   "endsWith": "D"<br/>
 * }<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O fluxo dever� ter o primeiro par�metro reservado para recebimento dos dados lidos (Objeto JSON).
 */
function ebfFirebaseReadData(ref, node, filter, orderType, orderData, onSuccess, onSuccessParams) {
  var database = firebase.database().ref(node);

  if (filter) {
    var first = filter.first,
        last = filter.last,
        startAt = filter.startAt,
        endAt = filter.endAt,
        equalTo = filter.equalTo;


    if (orderType == 'F') {
      database = database.orderByChild(orderData);
    } else if (orderType == 'C') {
      database = database.orderByKey();
    } else if (orderType == 'V') {
      database = database.orderByValue();
    }

    if (first)
      database = database.limitToFirst(first);

    if (last)
      database = database.limitToLast(last);

    if (filter.hasOwnProperty('startAt'))
      database = database.startAt(startAt);

    if (filter.hasOwnProperty('endAt'))
      database = database.endAt(endAt);

    if (filter.hasOwnProperty('equalTo'))
      database = database.equalTo(equalTo);
  }

  database.once('value').then(function (snapshot) {
    return firebaseReadCallbackFunction(snapshot.val() ? snapshot.val() : {});
  });

  function firebaseReadCallbackFunction(value) {
    var parametros;
    if (onSuccessParams) parametros = [value].concat(onSuccessParams);else parametros = [value];

    var ruleCallback = onSuccess;

    if (ruleCallback) {
      executeRuleFromJS(ruleCallback, parametros);
    }
  };
}

/**
 * Atualiza ou insere um n� no banco de dados Firebase.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da Conex�o(No Maker Mobile e na camada Cliente, ser� obtido automaticamente);<br/>
 * 2. N� de Inser��o/Atualiza��o;<br/>
 * 3. ID do Registro;<br/>
 * 4. Dados (JSON);<br/>
 * 5. Ass�ncrono? (L�gico) (Ver observa��o 2);<br/>
 * 6. Fluxo de sucesso (Fluxo);<br/>
 * 7. Par�metros do fluxo de sucesso. (Lista de Par�metros);<br/>
 * 8. Fluxo de erro (Fluxo);<br/>
 * 9. Par�metros do fluxo de erro. (Lista de Par�metros);<br/>
 * <br/>
 * Retorno:<br/>
 * ID Gerado (no caso de inser��o, ao atualizar, ser� retornado o mesmo ID), caso a fun��o seja ass�ncrona, o fluxo de sucesso receber� o ID no primeiro par�metro.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o ID n�o seja informado, os dados ser�o inseridos no banco. Caso o ID seja informado, os dados ser�o atualizados<br/>
 * 2. Ao passar esse par�metro como TRUE, a fun��o ir� se comportar de forma ass�ncrona. Ap�s a escrita, o fluxo de sucesso � chamado recebendo no primeiro par�metro o ID do registro, caso contrario, o fluxo de erro ser� acionado recebendo a causa do erro no primeiro par�metro.
 */
function ebfFirebaseWriteData(ref, node, udid, data, async, onSuccess, onSuccessParams, onError, onErrorParams){
  var database = firebase.database().ref(node);
  
  if(udid === '' || udid == null || udid === undefined){
   udid = database.push().key;
  }
     
  var updates = {};
  updates[udid] = data; 
  if(!async){
    database.update(updates);
    return udid; 
  } else {
    database.update(updates).then(function () {
      firebaseCallbackFunction(udid, false);
    }).catch(function (error) {
      firebaseCallbackFunction(error.message, true);
    });
  }
  
  function firebaseCallbackFunction(value, error) {
    var parametros;
    if(!error){
      if (onSuccessParams)
        parametros = [value].concat(onSuccessParams);
      else
        parametros = [value];

      var ruleCallback = onSuccess;

      if (ruleCallback) {
        executeRuleFromJS(ruleCallback, parametros);
      }
    }else{
      if (onErrorParams)
        parametros = [value].concat(onErrorParams);
      else
        parametros = [value];

      var ruleCallbackError = onError;

      if (ruleCallbackError) {
        executeRuleFromJS(ruleCallbackError, parametros);
      }
    }
  }
}

/**
 * Essa fun��o a partir do m�s e ano passado por par�metro retorna a data com o primeiro dia do m�s.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. M�s<br/>
 * 2. Ano<br/>
 * 3. Formata��o (Opcional).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o primeiro dia do m�s. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o 1� par�metro sendo 02 e o 2� par�metro sendo 2007, o retorno ser� 01/02/2007 00:00:00.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O m�s deve receber valores entre 1 e 12.<br/>
 * 2. Se o 3� par�metro n�o for definido, a data retornada ter� o formato brasileiro.
 */
function ebfFirstDay(month, year, formatting){
   var date = new Date(year, parseInt(month) -1, 1); 
   if(formatting === 'undefined' || formatting == null || formatting ===""){   
      return toDate(date.getDate() + '/' + month + '/' + year);
   }else{         
      return date.format(formatting)+ " 00:00:00";   
   }
}

/**
 * Executa o fluxo determinado pelo 1� par�metro. Pode-se passar uma lista de par�metros para o fluxo atrav�s do 2� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do fluxo que se deseja executar. Deve-se passar o nome exato ao cadastrado.<br/>
 * 2. Lista de par�metros que o fluxo necessita (Caso n�o haja, deixar Nulo).<br/>
 * <br/>
 * Retorno: <br/>
 * Caso seja um fluxo Servidor executando um Cliente, o retorno ser� nulo visto que, por n�o haver sincronia nesse tipo de execu��o, n�o � poss�vel obter o retorno do fluxo Cliente. (Variante)<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Utilize a Fun��o "Criar Lista a partidos do Elementos" para atender o 2� par�metro.
 */
function ebfFlowExecute(ruleName, params) {
  var reducedName = (ruleName);  
  var sysCode = ($mainform().document.WFRForm ? $mainform().document.WFRForm.sys.value : $mainform().sysCode);
  var formCode = ($mainform().document.WFRForm ? $mainform().document.WFRForm.formID.value : null);
  var isJava = false;
  var ruleFunction;
  try {
    ruleFunction = window.eval(reducedName);
  } catch (ex) {
    try {    
      reducedName = reduceVariable(ruleName);
      ruleFunction = window.eval(reducedName);    
    } catch(ex) {
      isJava = true;
    }
  }
  var value = null;
  if (isJava) {
    if (params && params instanceof Array && params.length > 0) {
      value = executeSyncJavaRule(sysCode, formCode, ruleName, params);
    } else {
      value = executeSyncJavaRule(sysCode, formCode, ruleName);
    }
  } else {
    var ruleInstance = new ruleFunction(null, sysCode, formCode);
    if (ruleInstance && ruleInstance.run) { // � JS
      value = executeJSRule(sysCode, formCode, reducedName, params, true);
    }
  } 
  return value;
}

/**
 * Efetua o produt�rio dentro de um intervalo definido.<br/>
 * Para cada valor definido no intervalo (a partir do incremento), a regra definida ser� executada e retornar� um valor.<br/>
 * Todos esses valores ser�o multiplicados num total, o qual ser� o retorno da fun��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da regra. (Fluxo)<br/>
 * 2. Valor inicial, padr�o 1<br/>
 * 3. Valor final<br/>
 * 4. Incremento, padr�o 1<br/>
 * <br/>
 * Retorno: <br/>
 * Produt�rio, no intervalo definido, da execu��o das fun��es. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� Par�metro sendo o fluxo: "XYZ" onde este fluxo recebe um par�metro e eleva o mesmo ao quadrado,<br/>
 * o 2� Par�metro sendo o valor: 1, o 3� Par�metro sendo o valor: 2, e o 4� Par�metro sendo o valor: 1, o retorno da fun��o ser� 4 (1� * 2�).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.<br/>
 * 2. Utilize a fun��o: "Pot�ncia" para elevar um n�mero ao quadrado.
 */
function ebfFlowMultiply(ruleName, indexIni, indexEnd, increment) {
  ruleName = trim(ruleName);
  var reducedName = reduceVariable(ruleName);
  var sysCode = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  var formCode = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : null);
  var isJava = false;
  var ruleFunction;
  try {
    ruleFunction = window.eval(reducedName);
  } catch (ex) {
    isJava = true;
  }
  var multiply = 1.0;
  var ini = isNullable(indexIni) ? 1.0 : parseNumeric(indexIni);
  var end = parseNumeric(indexEnd);
  var inc = 1;
  if (parseNumeric(increment) != 0.0) {
    inc = parseNumeric(increment);
  }
  while (ini != end) {
    if (isJava) {
      multiply *= parseNumeric(executeSyncJavaRule(sysCode, formCode, ruleName, [ini]));
    } else {
      var ruleInstance = new ruleFunction(this, sysCode, formCode);
      if (ruleInstance && ruleInstance.run) {
        multiply *= parseNumeric(ruleInstance.run(ini));
      }
    }
    ini += inc;
  }
  // Execu��o para quando o valor inicial � igual ao final. Este caso n�o entra no la�o acima.
  if (isJava) {
    multiply *= parseNumeric(executeSyncJavaRule(sysCode, formCode, ruleName, [ini]));
  } else {
    var ruleInstance = new ruleFunction(this, sysCode, formCode);
    if (ruleInstance && ruleInstance.run) {
      multiply *= parseNumeric(ruleInstance.run(ini));
    }
  }
  return multiply;
}

/**
 * Efetua o somat�rio dentro de um intervalo definido.<br/>
 * Para cada valor definido no intervalo (a partir do incremento), a regra definida ser� executada e retornar� um valor.<br/>
 * Todos esses valores ser�o somados num total, o qual ser� o retorno da fun��o.<br/>
 * <br/>
 * Par�metro<br/>
 *  1. Nome da regra<br/>
 *  2. Valor inicial, padr�o 0<br/>
 *  3. Valor final<br/>
 *  4. incremento, padr�o 1<br/>
 * <br/>
 * Retorno: <br/>
 * Somat�rio, no intervalo definido, da execu��o das fun��es.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo o Par�metro 1 como um fluxo "XYZ" que recebe um par�metro e eleva o mesmo ao quadrado,<br/>
 * o Par�metro 2 como 1, o Par�metro 3 como 2, e o Par�metro 4 como 1, o retorno da fun��o seria 5 (1� + 2�).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfFlowSum(ruleName, indexIni, indexEnd, increment) {
  ruleName = trim(ruleName);
  var reducedName = reduceVariable(ruleName);  
  var sysCode = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  var formCode = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : null);
  var isJava = false;
  var ruleFunction;
  try {
    ruleFunction = window.eval(reducedName);
  } catch (ex) {
    isJava = true;
  }
  var sum = 0.0;
  var ini = parseNumeric(indexIni);
  var end = parseNumeric(indexEnd);
  var inc = 1;
  if (parseNumeric(increment) != 0.0) {
    inc = parseNumeric(increment);
  }
  while (ini != end) {
    if (isJava) {
      sum += parseNumeric(executeSyncJavaRule(sysCode, formCode, ruleName, [ini]));
    } else {
      var ruleInstance = new ruleFunction(this, sysCode, formCode);
      if (ruleInstance && ruleInstance.run) {
        sum += parseNumeric(ruleInstance.run(ini));
      }
    }
    ini += inc;
  }
  // Execu��o para quando o valor inicial � igual ao final. Este caso n�o entra no la�o acima.
  if (isJava) {
    sum += parseNumeric(executeSyncJavaRule(sysCode, formCode, ruleName, [ini]));
  } else {
    var ruleInstance = new ruleFunction(this, sysCode, formCode);
    if (ruleInstance && ruleInstance.run) {
      sum += parseNumeric(ruleInstance.run(ini));
    }
  }
  return sum;
}

/**
 * A fun��o altera o conte�do do componente que est� no formul�rio passado como par�metro pelo conte�do <br/>
 * passado no 3� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� o componente.<br/>
 * 2. Componente que ser� alterado.<br/>
 * 3. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros "Cadastro" (Constante do tipo Formul�rio), MakerEdit1(Constante do tipo <br/>
 * Componente) e "Salvador" (Letras), ao fluxo ser executado, o componente "MakerEdit1" passaria a ter o <br/>
 * conte�do "Salvador".<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o altera valores somente de componentes do formul�rio da qual ela foi chamada. Para alterar valor <br/>
 * do componente em outro formul�rio, deve-se utilizar a fun��o "Alterar Valor do Componente em Outro <br/>
 * Formul�rio".<br/>
 * 2. Ao utilizar a fun��o na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a fun��o s� funcionar� com o formul�rio em modo de inser��o ou altera��o.
 */
function ebfFormChangeComponentValue(form, com, value) {
  try{
    $c(com, form).setValue(value, true);
  }catch(e){
    if((e.toString()).indexOf('NS_ERROR_FAILURE')==-1){
      throw(e);
    }else{}
  }
}

/**
 * A fun��o altera o conte�do do componente que est� no formul�rio passado como par�metro pelo conte�do passado no 3� par�metro. Ap�s o valor ser definido a m�scara que est� no componente � aplicada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� o componente.<br/>
 * 2. Componente que ser� alterado.<br/>
 * 3. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor j� aplicado com a m�scara. O retorno s� se aplica para a camada cliente. (Variante)
 */
function ebfFormChangeComponentValueAndMask(form, com, value) {
  if (isNullable(value, true)) {
    return null;
  }
  
  try {
    var component = $c(com, form);    

    if(component.mask && component.mask.type === "number"){
      var mask = component.numberMask == "$" ? "0.00" : component.numberMask;
      var maskSize = mask.split(".")[1] ? mask.split(".")[1].length : 0;
      var THOUSAND_POINT = DECIMAL_POINT == "," ? "." : ",";
      if(parseFloat(value).formatMoney){
        component.setValue(parseFloat(value).formatMoney(maskSize, DECIMAL_POINT, THOUSAND_POINT), true);   
      }else{
        component.setValue(value, true);
        if (component.mask && component.getValue().length > 0) {
          component.mask.allowPartial = true;
          component.setValue(component.mask.format(component.getValue(), component));
          component.mask.allowPartial = false;
        }  
      }
    }else{
      component.setValue(value, true);
    
      if (component.mask && component.getValue().length > 0) {
        component.mask.allowPartial = true;
        component.setValue(component.mask.format(component.getValue(), component));
        component.mask.allowPartial = false;
      }    
    }
    
    return component.getValue();
  } catch(e) {
    if (e.toString().indexOf('NS_ERROR_FAILURE') == -1) {
      throw(e);
    }
  }  

  return null;
}

/**
 * Fecha a �rvore de formul�rios a partir do definido por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio de onde deve-se partir para fechar todos seus formul�rios filhos.<br/>
 * 2. Define-se se o formul�rio, definido no Par�metro 1, deve ser recarregado.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormCloseChildren(formGUID, reloadParent) {
  var currentWin = window;
  var parentWin = getOpenerWindow(currentWin);
  var allWindows = new Array();

  allWindows.push(currentWin);
  while (parentWin && parentWin != currentWin) {
    allWindows.push(parentWin);
    var tempParentWin = getOpenerWindow(parentWin);
    if (tempParentWin != parentWin)
      parentWin = tempParentWin;
    else
      parentWin = null;
  }

  var first = null;
  for (var i = 0; i < allWindows.length ; i++) {
    if (allWindows[i].$mainform && allWindows[i].$mainform().formGUID) {
      if (allWindows[i].$mainform().formGUID == formGUID) {
        if (reloadParent) {
          first = allWindows[i];
        }
      
        for (var j = i - 1; j >= 0; j--) {
          try { 
            if (allWindows[j].isPopup)
              allWindows[j].top.close();
            else
              closeFloatingFormById(allWindows[j].idForm);
          } catch(e) {}
        }
        break;
      }
    }
  }
  
  if (first != null) {
    if (first.isPopup) {
      if (IE) {
        first.focus();
        first.top.location.reload(first.top.location.href);
      } else {
        first.top.location.reload();
      }
    } else {
      first.location.reload();
    }
  }
}

/**
 * Retorna a refer�ncia do componente passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a refer�ncia do componente. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2", o retorno ser� o objeto deste componente.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Se o formul�rio n�o for o principal (o que chama o fluxo), essa fun��o n�o vai funcionar em regras do tipo <br/>
 * cliente;<br/>
 * 2. Se n�o for o formul�rio principal (que chama o fluxo) e o mesmo estiver aberto, o retorno ser� o conte�do do <br/>
 * campo passado naquele registro. Caso o formul�rio passado n�o esteja sendo utilizado, o retorno ser� o primeiro <br/>
 * registro no banco.
 */
function ebfFormComponentByName() {
  if (existArgs(arguments)) {
    var component = controller.getElementById(arguments[0]);
    if (component)
      return component;     
  }
  return null;
}

/**
 * Abre um ActiveX em uma Moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura (Usada no formul�rio para exibir o ActiveX).<br/>
 * 2. Classid do ActiveX. (CLSID)<br/>
 * 3. Codebase do ActiveX.<br/>
 * 4. Objeto Mapa contendo os par�metros.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. ActiveX s�o objetos para serem utilizados no Internet Explorer.<br/>
 * 2. Necess�rio definir no objeto inicio o formul�rio de trabalho, para o correto preenchimento do 1� par�metro.
 */
function ebfFormCreateActiveX (nomeMoldura, id,codebase, mapa) {
  var moldura = $c(nomeMoldura);
  var div = moldura.div;
  var actx = document.createElement("object");
  
  actx.name = "activex";
  actx.classid = "clsid:" + id;
  actx.codeBase = codebase;
  actx.width = "100%";
  actx.height = "100%";
  
  if ((mapa != null) && (mapa instanceof Map)) {
    var listaChaves = mapa.getKeys();
    for (var i=0;i< listaChaves.length;i++) {
      var name  = listaChaves[i];
      var value = mapa.get(listaChaves[i]);
	  var param = document.createElement("param");
	  param.name = name;
	  param.value = value;
	  actx.appendChild(param);
    }
  }
  div.appendChild(actx);
}

/**
 * Cria uma imagem est�tica em um componente moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura (usada no formul�rio para exibir a imagem).<br/>
 * 2. Endere�o onde est� armazenada a imagem na Internet.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como 1� par�metro a moldura "MOLDURA" e como 2� par�metro a URL <br/>
 * "http://www.softwell.com.br/downloads/Foto.jpg", a imagem est�tica ser� criada na moldura "MOLDURA".<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormCreateImage(nomeMoldura,url) {
  var moldura = controller.getElementById(nomeMoldura);  
  var div =  getDiv("imagem", 0, 0, moldura.getWidth(), moldura.getHeight(), 1000010, true);  
  var img = new Image(moldura.getWidth(),moldura.getHeight());
  div.appendChild(img);
  moldura.div.innerHTML= '';
  moldura.div.appendChild(div);
  img.src = url;
  if ($c(nomeMoldura).onclick) {   
    img.onclick = $c(nomeMoldura).onclick;
    img.style.cursor = "pointer";
    $c(nomeMoldura).div.onclick = null; 
  }
  return div;  
}

/**
 * Esta fun��o permite adicionar v�deos a formul�rios.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura (usada no formul�rio para exibir o v�deo).<br/>
 * 2. Endere�o na Internet onde est� armazenado o v�deo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como 1� par�metro a moldura "MOLDURA" e como 2� par�metro a URL <br/>
 * "http://www.softwell.com.br/downloads/exemplo.mpg", a imagem est�tica ser� criada na moldura "MOLDURA".<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormCreateVideo(nomeMoldura, url) { 
  var moldura = $c(nomeMoldura);  
  var div = getDiv("Video", 0, 0, moldura.getWidth(), moldura.getHeight(), 1000010, true);
  var video = document.createElement("embed");  
  video.src = url;
  video.frameBorder = 0;
  video.style.left = 0;
  video.style.top = 0;
  video.style.width = moldura.getWidth() + "px";
  video.style.height = moldura.getHeight() + "px";
  video.setAttribute("autostart", "true");
  div.appendChild(video);
  div.style.position = "absolute";
  moldura.div.appendChild(div);     
  return div;
}

/**
 * Esta fun��o muda o modo do formul�rio para o modo de altera��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formul�rio esteja em modo de navega��o, ap�s a fun��o ser chamada, o formul�rio passar� para o modo de altera��o.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. O formul�rio que vai entrar em modo de altera��o ser� o mesmo que chama o fluxo.
 */
function ebfFormEditMode()  {
  if (d.n) {
    d.n.timeout(d.n.actEdit, 100);
  }
}

/**
 * Retorna a altura(em pixels) do formul�rio onde o fluxo for executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui<br/>
 * <br/>
 * Retorno:<br/>
 * Altura do Formul�rio. (Inteiro)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormGetClientHeight() {
  return parseInt(getWindowHeight());
}

/**
 * Obt�m o conte�do do componente passado no segundo par�metro e o retorna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Formul�rio.<br/>
 * 2. Nome do Componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o conte�do do componente passado como par�metro. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formul�rio do <br/>
 * Sub Form como par�metro.<br/>
 * 2. Para obter o valor de um componente que se encontra em outro formul�rio, utilize a fun��o "Obter Valor do <br/>
 * Componente do Formul�rio".<br/>
 * 3. Para obter o valor de um componente que se encontra em uma moldura, deve ser utilizada a fun��o <br/>
 * "Executar Fluxo no Formul�rio" e apontar para um fluxo que chama esta fun��o.
 */
function ebfFormGetComponentValue(form, com) {
  return $c(com, form).getValue();
}

/**
 * Retorna a altura(em pixels) do componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Altura do componente. (Inteiro)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormGetHeight() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      return component.getHeight();
    }
  }  
}

/**
 * Fun��o que obt�m o valor exibido na lista din�mica.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente do tipo Lista Din�mica.<br/>
 * 2. Componente Lista Din�mica.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor que estiver no componente. (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormGetLookupName(form, com){
  try{
    var lk = $c(com);
    var idx = lk.value;
    return lk.showValue;
  }catch(e){
    throw "N�o foi poss�vel obter o valor do componente.";
  }
}

/**
 * A fun��o retorna valor l�gico "True" caso o componente passado pelo par�metro esteja vis�vel, ou "False" caso <br/>
 * contr�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que deseja obter o valor (Se est� vis�vel ou n�o).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna valor l�gico "True" caso o componente passado esteja vis�vel, ou "False" caso contr�rio. (L�gico)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio no de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "formul�rio" para uma constante do tipo "Letras".
 */
function ebfFormGetVisible() {
  var value = false;
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
     value = component.getVisible();
    }    
  }  
  return value;  
}

/**
 * Obt�m a largura(em pixels) do componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Largura do Componente. (Inteiro)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormGetWidth() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      return component.getWidth();
    }
  }
}

/**
 * Esta fun��o muda o modo do formul�rio para o modo de inser��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formul�rio esteja em modo de navega��o, ap�s a fun��o ser chamada, o formul�rio passar� para o modo de inser��o.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. O formul�rio que vai entrar em modo de altera��o ser� o mesmo que chama o fluxo.<br/>
 * 2. O formul�rio deve estar com o modo de inclus�o habilitado (Defini��es do Formul�rio) para que esta fun��o tenha efeito.
 */
function ebfFormInsertMode()  {  
  if (d.n) {
    d.n.timeout(d.n.actInclude, 100);
  }
}

/**
 * A fun��o obt�m o estado do formul�rio no momento que o fluxo � chamado, retornando true(verdadeiro) caso <br/>
 * esteja em modo de navega��o ou false(falso) caso contr�rio.<br/>
 * <br/>
 * Par�metros<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formul�rio esteja em modo de navega��o  ou "False" caso contr�rio. (L�gico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formul�rio est� em modo de navega��o no momento que o fluxo � chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. N�o � necess�rio passar o nome do formul�rio. O formul�rio sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInBrowserMode()  {
  return (!ebfFormIsInInsertMode() && !ebfFormIsInEditMode());
}

/**
 * A fun��o obt�m o estado do formul�rio no momento que o fluxo � chamado retornando true(verdadeiro) caso <br/>
 * esteja em modo de altera��o ou false(falso) caso contr�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formul�rio esteja em modo de altera��o ou "False" caso contr�rio. (L�gico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formul�rio est� em modo de altera��o no momento que o fluxo � chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. N�o � necess�rio passar o nome do formul�rio. O formul�rio sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInEditMode()  {
  return $mainform().edit;
}

/**
 * A fun��o obt�m o estado do formul�rio no momento que o fluxo � chamado, retornando true(verdadeiro) caso <br/>
 * esteja em modo de inser��o ou false(falso) caso contr�rio.<br/>
 * <br/>
 * Par�metros<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formul�rio esteja em modo de inser��o ou "False" caso contr�rio. (L�gico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formul�rio est� em modo de inser��o no momento que o fluxo � chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. N�o � necess�rio passar o nome do formul�rio. O formul�rio sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInInsertMode()  {
  return $mainform().insert;
}

/**
 * Vai para a guia seguinte � corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfFormNextTab() {
  var tabController = $mainform().d.t;
  if (tabController) {
    tabController.isCallFunction = true;  
    tabController.openNextTab(true);    
    tabController.isCallFunction = false;
  }
}

/**
 * Abre o formul�rio passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio a ser aberto (GUID).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metro a constante formul�rio "Form" ou a GUID do mesmo, a fun��o ir� abrir em outra <br/>
 * janela o formul�rio "Form".<br/>
 * <br/>
 * Observa��es:<br/>
 * Para abrir um formul�rio flutuante com �cone basta passar uma lista como par�metro que contenha duas sublistas onde:<br/>
 * - O primeiro par�metro da primeira lista deve ser "formGuid" e o segundo o GUID do formul�rio a ser aberto.<br/>
 * - O primeiro par�metro da segunda lista deve ser "icon" e o segundo par�metro a classe do �cone do formul�rio (ex "fas fa-home").<br/>
 * <br/>
 * Para definir cor ao �cone do formul�rio flutuante basta adicionar uma terceira sublista na lista do par�metro onde:<br/>
 * - O primeiro par�metro deve ser "iconColor" e o segundo par�metro a cor do �cone, onde este pode ser um HEX da cor (ex #000000) ou qualquer outro tipo de valor poss�vel para cores do CSS.<br/>
 * <br/>
 * Os �cones s� s�o aplicados a formul�rios do tipo flutuante, ou seja, formul�rios cuja propriedade "Abrir em Modo Pop-up" seja falsa.
 */
function ebfFormOpenForm(formGuid) {
  if (formGuid && Array.isArray(formGuid)) {
    var props = { };
    try {
      for (var i = 0; i < formGuid.length; i++) {
        if (Array.isArray(formGuid[i]) && formGuid[i].length > 1) {
          props[formGuid[i][0]] = formGuid[i][1];
        }
      }
    } catch (e) { }

    eval(getContent("wfrcore?action=ruleopenform&sys=" + sysCode + "&guid=" + URLEncode(props.formGuid) + "&props=" + URLEncode(JSON.stringify(props))));
  } else {
    eval(getContent("wfrcore?action=ruleopenform&sys=" + sysCode + "&guid=" + URLEncode(formGuid)));
  }
}

/**
 * Esta fun��o permite ativar e focar a aba descrita no primeiro par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Aba a ser ativada.<br/>
 * <br/>
 * Retorno: <br/>
 * A aba selecionada para regras cliente. Para regras servidor retorna Nulo. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metro a aba "Endere�o"(Letras), quando o fluxo for executado a aba "Endere�o" ser� <br/>
 * habilitada.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormOpenTab(tabName) {
  var t = $mainform().d.t;
  t.isCallFunction = true;
  t.timeout(t.openTab, 0, [tabName]);
  return t.tabsByName[tabName];
}

/**
 * Permuta entre a aba corrente para a anterior.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfFormPreviousTab() {
  var tabController = $mainform().d.t;
  if (tabController) {
    tabController.isCallFunction = true;  
    tabController.openPreviousTab(true);    
    tabController.isCallFunction = false;
  }
}

/**
 * Atualiza o conte�do do componente passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que ser� atualizado.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente, � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo . <br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho no in�cio do fluxo, digite o nome do componente no lugar do<br/>
 * par�metro (ao inv�s de selecion�-lo).
 */
function ebfFormRefreshComponent(componentName) {
  if (!isNullable(componentName)) {
    var component = $c(componentName);
    component.timeout(component.refresh, 0);
  }
}

/**
 * Esta fun��o altera a cor de fundo do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente cujo fundo mudar� de cor.<br/>
 * 2. Nova cor de fundo do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o fundo do componente "MakerEdit1" passar� a ser azul.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. No 2� par�metro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor preta(000000).<br/>
 * 2. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo   .<br/>
 * 3. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetBGColor() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.setBGColor(arguments[1]);
    }
  }
}

/**
 * Esta fun��o altera a cor do conte�do do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente cujo conte�do mudar� de cor.<br/>
 * 2. Nova cor do conte�do do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o conte�do do componente "MakerEdit1" passar� a ser azul.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. No 2� par�metro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor <br/>
 * preta(000000).<br/>
 * 2. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 3. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetColor() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.setColor(arguments[1]);
    }
  }
}

/**
 * Esta fun��o altera a cor de fundo do componente DIV.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente DIV cujo fundo mudar� de cor.<br/>
 * 2. Nova cor de fundo do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o fundo do componente "MakerEdit1" passar� a ser azul.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. No 2� par�metro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor preta(000000).<br/>
 * 2. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 3. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetDivBGColor(comp,cor) {
  if (comp) {
    var component = $c(comp);
    if (component) {
      component.div.style.backgroundColor = cor;
    }
  }
}

/**
 * Esta fun��o habilita o componente se a condi��o passada no segundo par�metro for verdadeira, ou desabilita <br/>
 * caso a condi��o seja falsa. Se o componente estiver desabilitado, n�o ser� poss�vel modificar seu conte�do.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que ser� habilitado ou desabilitado (Letras).<br/>
 * 2. Condi��o para habilitar o componente (L�gico).<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade" (MakerEdit1), e uma condi��o l�gica "Ano Atual= <br/>
 * 2000", quando a fun��o for executada, caso o Ano atual seja 2000 o componente "MakerEdit1" ser� <br/>
 * habilitado, caso seja diferente de 2000 o campo ser� desabilitado.<br/>
 * 2. Assumindo como par�metros o componente "Cidade"  (MakerEdit1), e uma condi��o l�gica true, quando a <br/>
 * fun��o for executada o componente sempre vai ser habilitado.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "Componente" para uma constante do tipo "Letras".
 */
function ebfFormSetEnabled(componentName, enabled) {
  var component = $c(componentName); 
  if(component && !(verifyObjectType(component, "HTMLMakerFlowComponent"))) {
    if(controller.activeElement == component) {            
      component.blur();      
    }    
    component.timeout(component.setEnabled, 0, [parseBoolean(enabled)]);
  } else if(component) {
    component.setEnabled(enabled);
  }   
}

/**
 * Essa fun��o � utilizada para focar um determinado componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que vai ter o foco.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metro o componente "Cidade" (MakerEdit1), ap�s essa fun��o ser executada, o foco do <br/>
 * cursor estar� neste componente passado como par�metro.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio no de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetFocus() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      timeout(function() {
            component.focus();
        }, 100);
    }
  }
}

/**
 * Esta fun��o altera a altura do componente do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que mudar� de tamanho.<br/>
 * 2. Nova altura do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"(MakerEdit1), e o valor 100(inteiro), quando o fluxo for <br/>
 * executado a altura do componente passar� a ser 100.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetHeight() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.setHeight(arguments[1]);
    }
  }
}

/**
 * Fun��o que altera o valor exibido na lista din�mica.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente do tipo MakerLookup.<br/>
 * 2. Componente Lista Din�mica.<br/>
 * 3. Novo valor que ser� exibido na lista din�mica.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfFormSetLookupName(form, com, newValue){
  try{
    var lk = $c(com);
        lk.setShowValue(newValue);
  }catch(e){
    throw "N�o foi poss�vel Alterar o valor do lookup";
  }
}

/**
 * Esta fun��o altera a posi��o do componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que mudar� de posi��o.<br/>
 * 2. Nova posi��o X (Horizontal) do componente.<br/>
 * 3. Nova posi��o Y (Vertical) do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"(MakerEdit1), o valor 150 e o valor 250, quando o fluxo for executado a posi��o X do componente ser� 150 e a Y ser� 250.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetPosition() {
  var component; 
  if (existArgs(arguments)) {
    component = $c(arguments[0]);
    if (component) {
      if (arguments[1])
        component.setX(arguments[1]);
      if (arguments[2])
        component.setY(arguments[2]);     
    }
  }  
}

/**
 * Esta fun��o define um campo/componente do formul�rio como Apenas Leitura. Caso o par�metro seja <br/>
 * Verdadeiro, define Apenas Leitura. Caso contr�rio retira esta defini��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. O Componente que se deseja definir como Apenas Leitura.<br/>
 * 2. "True" para o componente se tornar Apenas Leitura. "False" para retirar tal propriedade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormSetReadonly(field, readonly) {
  var component = $c(field);
  if (component) {
    component.setReadOnly(readonly);
  }
}

/**
 * Esta fun��o define se um ou mais componentes se tornar�o obrigat�rios ou n�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente ou lista de componentes.<br/>
 * 2. "True" para tornar obrigat�rio, "False" caso n�o.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormSetRequired() {
  if (existArgs(arguments)) {
    var components = arguments[0];

    if (components.constructor.toString().indexOf('Array') == -1)
      components = [arguments[0]];
      
    for(var i=0;i<components.length;i++) {
      var component = $c(components[i]);
      if (component) {
        component.required = arguments[1];
        if (component.label) {
          component.label.innerHTML = component.decorateRequired(component.description.replace(/\s/g, '&nbsp;'), component.required);
        }

      }
    }
  }
}

/**
 * Esta fun��o mostra o componente se a condi��o passada no segundo par�metro for verdadeira, ou oculta <br/>
 * caso a condi��o seja falsa. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que ficar� vis�vel ou oculto.<br/>
 * 2. Condi��o para mostrar o componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"  (MakerEdit1),  e uma condi��o l�gica "Ano Atual= <br/>
 * 2000", quando a fun��o for executada, caso o Ano atual seja 2000 o componente "MakerEdit1" ficar� vis�vel, <br/>
 * Caso seja diferente de 2000 o campo ficar� oculto.<br/>
 * 2. Assumindo como par�metros o componente "Cidade"  (MakerEdit1),  e uma condi��o l�gica  false, quando a <br/>
 * fun��o for executada o componente ficar� oculto.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "Componente" para uma constante do tipo "Letras".
 */
function ebfFormSetVisible() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) 
      component.setVisible(parseBoolean(arguments[1]));
  }  
}

/**
 * Esta fun��o altera a largura do componente do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que mudar� de tamanho.<br/>
 * 2. Nova largura do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o componente "Cidade"(MakerEdit1), e o valor 350 (inteiro), quando o fluxo for <br/>
 * executado a largura do componente passar� a ser 350.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente mudando a constante do tipo <br/>
 * "componente" para uma constante do tipo "Letras".
 */
function ebfFormSetWidth() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.setWidth(arguments[1]);
    }
  }
}

/**
 * Esta fun��o mostra ou oculta a aba a depender da condi��o l�gica passada. Caso a condi��o seja verdadeira, <br/>
 * mostra a aba, caso seja falsa, oculta.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba.<br/>
 * 2. Condi��o L�gica para mostrar ou n�o a aba.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formul�rio esteja em modo de inser��o, ap�s a fun��o ser chamada, o formul�rio passar� para o <br/>
 * modo de altera��o.<br/>
 * 2. A fun��o apenas mostrar� a ABA. Isso significa que a ABA n�o ser� ativada. Para isto utilize a fun��o "Ativar <br/>
 * Aba".<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A aba passada como par�metro deve estar no formul�rio que chama o fluxo.
 */
function ebfFormShowTab() {
  if (existArgs(arguments)) {
    mainform.d.t.setVisible(arguments[0], arguments[1]);
  }
}

/**
 * Fun��o utilizada para alterar o �ndice de profundidade de um componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * 2. Novo �ndice<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFormZindex() {
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.div.style.zIndex = arguments[1];
    }
  }
}

/**
 * Essa fun��o modifica a formata��o da data passada no primeiro par�metro para a formata��o passada no segundo par�metro. <br/>
 * <br/>
 * Tipos de formatos:<br/>
 * yyyy - ano<br/>
 * MM - m�s<br/>
 * w - semana do ano (soma das semanas (Somente camada servidor)).<br/>
 * W - semana do m�s (soma das semanas (Somente camada servidor)).<br/>
 * D - dia do ano (soma dos dias)<br/>
 * dd - dia do m�s (Somente camada servidor).<br/>
 * F - dia da semana (soma dos dias (Somente camada servidor)).<br/>
 * a - am/pm<br/>
 * H - hora (0 a 23h)<br/>
 * k - hora (1 a 24h)<br/>
 * K - hora (0 a 11h am/pm)<br/>
 * h - hora (1 a 12 am/pm)<br/>
 * mm - minutos da hora<br/>
 * ss - segundos hora<br/>
 * SSS - milisegundos da hora (Somente camada servidor).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data que deseja formatar<br/>
 * 2. Formata��o da data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com a nova formata��o.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 01/04/2007 20: 32: 16, o 2� Par�metro sendo dd/MM/yyyy K a, o retorno ser� 01/04/2007 8 PM.<br/>
 * 2. Assumindo que o 1� par�metro seja 01/04/2007 20: 32:16, o 2� Par�metro sendo dd/MM k:mm, o retorno ser� 01/04/2007 20:32
 */
function ebfFormatDateTime(date, format) {
  if (isNullable(date) || !(date instanceof Date)) {
    return null;
  }
  
  if (isNullable(format)) {
    format = "dd/MM/yyyy"; 
  }
  
  return date.format(format);
}

/**
 * Formata um n�mero de acordo com uma m�scara.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. N�mero<br/>
 * 2. M�scara<br/>
 * <br/>
 * Retorno:<br/>
 * N�mero formatado (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Deve ser seguido os padr�es da classe. Para mais informa��es sobre as m�scaras acesse:<br/>
 * http://java.sun.com/j2se/1.4.2/docs/api/java/text/DecimalFormat.html<br/>
 * 2. Caso o n�mero passado seja uma d�zima, � recomendado o arredondamento do mesmo para a quantidade de casas decimais da m�scara utilizada.<br/>
 *   Ex: 17,60 x 100 = 1760.0000000000002<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfFormatNumber(value, mask) {
    var money,
        zeroMatcher,
        number,
        beginCents,
        output,
        i,
        opts,
        decimalPrecision,
        signal;        

    decimalPrecision = mask.split('.') [mask.split('.').length - 1].length;        
    value += "";    
    if (value[0] === '-'){
      signal = '-';      
      value.slice(1, value.length);
    } else {
      signal = '';
    }
    if(value.indexOf('.') > 0){        
      if(value.split('.')[1].length >= 1){
        newdPrecision = decimalPrecision - value.split('.')[1].length;
        for(i=0; i<newdPrecision; i++){
          value += '0';
        }
      }                                            
    } else if(value.indexOf(',') > 0){    
        if(value.split(',')[1].length === 1){
          value += '0';
      }        
    } else {
      for(i = 0; i < decimalPrecision; i++){
        value += '0';
      }
     }
    opts = {
      'precision': decimalPrecision
    }        
    opts = mergeMoneyOptions(opts);
    if (opts.zeroCents) {
      opts.lastOutput = opts.lastOutput || "";
      zeroMatcher = ("("+ opts.separator +"[0]{0,"+ opts.precision +"})"),
          zeroRegExp = new RegExp(zeroMatcher, "g"),
          digitsLength = value.toString().replace(/[\D]/g, "").length || 0,
          lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, "").length || 0;
      value = value.toString().replace(zeroRegExp, "");
      if (digitsLength < lastDigitLength) {
        value = value.slice(0, value.length - 1);
      }
    }
    number = value.toString().replace(/[\D]/g, ""),
        clearDelimiter = new RegExp("^(0|\\"+ opts.delimiter +")"),
        clearSeparator = new RegExp("(\\"+ opts.separator +")$"),
        money = number.substr(0, number.length - opts.moneyPrecision),
        masked = money.substr(0, money.length % 3),
        cents = new Array(opts.precision + 1).join("0")
    ;
    money = money.substr(money.length % 3, money.length);
    for (i = 0, len = money.length; i < len; i++) {
      if (i % 3 === 0) {
        masked += opts.delimiter;
      }
      masked += money[i];
    }
    masked = masked.replace(clearDelimiter, "");
    masked = masked.length ? masked : "0";
    if (!opts.zeroCents) {
          beginCents = number.length - opts.precision,
          centsValue = number.substr(beginCents, opts.precision),
          centsLength = centsValue.length,
          centsSliced = (opts.precision > centsLength) ? opts.precision : centsLength
      ;
      cents = (cents + centsValue).slice(-centsSliced);      
    }
    output = signal + opts.unit + masked + opts.separator + cents + opts.suffixUnit;      

    return output.replace(clearSeparator, "");
  };

mergeMoneyOptions = function(opts) {
  opts = opts || {};
  opts = {
    precision: opts.hasOwnProperty("precision") ? opts.precision : 2,
    separator: opts.separator || ",",
    delimiter: opts.delimiter || ".",
    unit: opts.unit && (opts.unit.replace(/[\s]/g,'') + " ") || "",
    suffixUnit: opts.suffixUnit && (" " + opts.suffixUnit.replace(/[\s]/g,'')) || "",
    zeroCents: opts.zeroCents,
    lastOutput: opts.lastOutput
  };
  opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;
  return opts;
}

/**
 * Fecha um formul�rio aberto atrav�s da fun��o "Abrir formul�rio numa moldura".<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Formul�rio onde se encontra o componente moldura.<br/>
 * 2. Nome do componente<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFrameCloseForm(form, componentName) {
  var component = $c(componentName, form);
  if (component instanceof HTMLGroupBox) {
    var iframes = component.div.getElementsByTagName("iframe");
    if (iframes && iframes.length > 0) {
      var iframe = iframes[0];
      
      var iframeTag = eval(iframe.id);
      /*if (iframeTag.formOnUnLoadAction) {
        iframeTag.formOnUnLoadAction();
      }*/
      
      component.div.removeChild(iframe.parentNode);
    }
  }
}

/**
 * Fun��o que abre um formul�rio numa moldura filtrado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente do tipo moldura.<br/>
 * 2. Componente do tipo moldura.<br/>
 * 3. Formul�rio que ser� aberto na moldura(GUID).<br/>
 * 4. Valor l�gico que indica se a barra de rolagem dever� aparecer.<br/>
 * 5. Texto(Letras) indicando o filtro.<br/>
 * 6. Mostrar borda?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� par�metro "FORMUL�RIO" (Formul�rio), como 2� par�metro "MOLDURA", 3� par�metro <br/>
 * "CIDADE" (Formul�rio), 4� par�metro "True" e 5� par�metro "ESTADO=BAHIA", o resultado seria a abertura do <br/>
 * formul�rio "CIDADE" na moldura "MOLDURA", com barra de rolagem e somente com as cidades que <br/>
 * pertencem ao Estado Bahia.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o n�o deve ser utilizada para abrir numa moldura o mesmo formul�rio que a cont�m.<br/>
 * 2. Pode-se tipar o valor passando o formato <Valor>@<Tipo>, onde tipo pode ser: long, double, timestamp, <br/>
 * date e boolean, como por exemplo, "TAB_PESSOAS.CODIGO=100@long".<br/>
 * 3. As modifica��es feitas no formul�rio que ser� aberto na moldura, apenas ser�o visualizadas quando o <br/>
 * sistema � reiniciado.
 */
function ebfFrameOpenFilteredForm(form, componentName, formTarget, scrollbars, filter, border) {
    var component = $c(componentName, form);
    if (component instanceof HTMLGroupBox) {
      var scrolling = (scrollbars ? "yes" : "no");       
      var url = getAbsolutContextPath();
      url += 'form.jsp?sys='+sysCode+'&action=openform&formID='+ URLEncode(formTarget) +'&goto=-1&filter='+(filter?filter:'')+'&scrolling='+scrolling;
      //var url = 'form.jsp?sys='+sysCode+'&formID='+formTarget+'&goto=-1&scrolling='+scrolling;
      
      var iframes = component.div.getElementsByTagName("iframe");      
      if (iframes.length > 0) {
        
        border = (isNullable(border) ? false : border);
        if(border){
          component.div.style.boxSizing = "content-box"; 
        }
        
        var iframe = iframes[0];        
        if (iframe.src != url) {
          var iframeTag = eval(iframe.id);
          if (iframeTag.formOnUnLoadAction) {
            iframeTag.formOnUnLoadAction();
          }

          iframe.src = url;
          iframe.style.scrollbars = scrolling;
        }  
      } else {
        ebfFrameOpenURL(form, componentName, url, scrollbars,border);
      }
    }
}

/**
 * Fun��o que abre um formul�rio numa moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente do tipo moldura.<br/>
 * 2. Componente do tipo moldura.<br/>
 * 3. Formul�rio que ser� aberto na moldura.<br/>
 * 4. Valor l�gico que indica se a barra de rolagem dever� aparecer.<br/>
 * 5. Mostrar borda?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� par�metro o formul�rio "Form", 2� par�metro a moldura(presente em "Form") "Moldura", 3� <br/>
 * par�metro o formul�rio "Form Moldura" e como 4� par�metro "True", ser� aberto na moldura "Moldura" o <br/>
 * formul�rio "Form Moldura" com barra de rolagem.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o n�o deve ser utilizada para abrir numa moldura o mesmo formul�rio que a cont�m.<br/>
 * 2. As modifica��es feitas no formul�rio que est� em uma moldura, apenas ser�o visualizadas quando o sistema <br/>
 * for reiniciado, ou quando o formul�rio for atualizado manualmente.
 */
function ebfFrameOpenForm(form, componentName, formTarget, scrollbars, border){
  ebfFrameOpenFilteredForm(form, componentName, formTarget, scrollbars, null, border);
}

/**
 * Abre uma URL numa moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio da moldura.<br/>
 * 2. Nome do componente (moldura).<br/>
 * 3. URL.<br/>
 * 4. Barra de rolagem? (true para exibir e false para ocultar)<br/>
 * 5. Borda?  (true para exibir e false para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Para colocar um caracter & que esteja entre os dados do valor de um par�metro de uma URL utilize a <br/>
 * combina��o: %26 + &<br/>
 * 2. A URL deve possuir o protocolo "http://" antes do endere�o www, caso contr�rio, ser� tratato como uma URL <br/>
 * relativa.
 */
function ebfFrameOpenURL(formName, componentName, url, scrollbar, border) {
  var component = controller.getElementById(componentName, formName);
  if (component) {
    var id = 'URLFrame' + parseInt((Math.random() * 9999999));
    var div =  getDiv(id, 0, 0, component.getWidth(), component.getHeight(), 1000010, true);
    var iframe = document.createElement("iframe");
    div.style.width = "100%";
    iframe.frameBorder = 0;
    iframe.setAttribute("frameborder", "no");
    iframe.setAttribute("border", 0);
    iframe.setAttribute("marginwidth", 0);
    iframe.setAttribute("marginheight", 0);
    iframe.style.left = "0px";
    iframe.style.top = "0px";
    iframe.style.width = "100%";
    iframe.style.height = component.getHeight() + "px";
    iframe.src = url;
    iframe.id = id;
    iframe.name = id;
    iframe.componentName = componentName;
    iframe.componentForm = component.formID;
    div.appendChild(iframe);

    border = (isNullable(border) ? false : border);
    if (border) component.div.style.boxSizing = "content-box";

    component.div.appendChild(div);
    return div;
  }

  return null;
}

/**
 * Atualiza um formul�rio aberto atrav�s da fun��o "Abrir formul�rio numa moldura".<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Formul�rio onde se encontra o componente moldura.<br/>
 * 2. Nome do componente (Moldura).<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfFrameRefreshForm(form, componentName) {
  var component = $c(componentName, form);
  if (component instanceof HTMLGroupBox) {
    var iframes = component.div.getElementsByTagName("iframe");
    if (iframes && iframes.length > 0) {
      var iframe = iframes[0];
      
      var iframeTag = eval(iframe.id);
      if (iframeTag.formOnUnLoadAction) {
        iframeTag.formOnUnLoadAction();
      }
      
      iframeTag.location = "about:blank";
      iframeTag.location = iframeTag.location.toString();
    }
  }  
}

/**
 * A fun��o gera um GUID e o retorna.<br/>
 * GUID significa - Globally Unique Identifier (Identificador �nico Universal). <br/>
 * Como n�o existem dois GUIDs id�nticos, n�o importa quantos s�o gerados, eles servem para identificar de forma �nica<br/>
 * senhas, manipuladores, chaves, etc.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Retorno:<br/>
 * GUID (Identificador �nico Universal) gerado. (Variante)<br/>
 * <br/>
 * Exemplo:<br/>
 * Ao gerar um GUID, o retorno seria por exemplo: "648AAF7A-EB32-F348-EB9D-C6FD0A15D78B".
 */
function ebfGenerateGUID_S4() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

function ebfGenerateGUID() {
  var bloc1 = ebfGenerateGUID_S4() + ebfGenerateGUID_S4();
  var bloc2 = ebfGenerateGUID_S4();
  var bloc3 = ebfGenerateGUID_S4();
  var bloc4 = ebfGenerateGUID_S4();
  var bloc5 = ebfGenerateGUID_S4() + ebfGenerateGUID_S4() + ebfGenerateGUID_S4();

  return (bloc1 + "-" + bloc2 + "-" + bloc3 + "-" + bloc4 + "-" + bloc5 + "".toUpperCase());
}

/**
 * Define a localiza��o atual para uso posterior com as fun��es de Georreferenciamento. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N� onde ser� armazenada a posi��o (latitude e longitude)<br/>
 * 2. Chave <br/>
 * 3. Latitude<br/>
 * 4. Longitude<br/>
 * 5. Fluxo de callback (Opcional)<br/>
 * 6. Par�metros Extra para o fluxo de callback (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfGeoFireSetPosition(){}

/**
 * Esta fun��o remove o monitoramento da �rea.<br/>
 * <br/>
 * Desta forma, quando um elemento entrar ou sair da �rea especificada, o fluxo associado anteriormente n�o ser� executado.<br/>
 * <br/>
 * Par�metro(os):<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfGeoFireStopWatching(){}

/**
 * Monitora as atualiza��es que ocorrerem dentro de uma determinada �rea.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N� que ser� monitorado (onde s�o enviadas as atualiza��es de GPS)<br/>
 * 2. Latitude<br/>
 * 3. Longitude<br/>
 * 4. Raio (em KM)<br/>
 * 5. Fluxo que receber� os dados de monitoramento.<br/>
 *     O fluxo dever� deixar 1 par�metro reservado para recebimento das atualiza��es. Ser� enviado um JSON com as seguintes<br/>
 *     chaves/informa��es.<br/>
 *     {<br/>
 *         "action": ""<br/>
 *         "latitude": 37.7832,<br/>
 *          "longitude": -122.4056 <br/>
 *     }<br/>
 * <br/>
 * 6. Lista de par�metros extra para o fluxo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfGeoFireWatchArea(){}

/**
 * Obt�m o Caminho Absoluto da Aplica��o<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o caminho absoluto da aplica��o. (Letras)
 */
function ebfGetAbsolutContextPath(){
    return getAbsolutContextPath();
}

/**
 * Obt�m o elemento da �rvore que est� ativo no momento.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore (Ver observa��o 2)<br/>
 * <br/>
 * Retorno:  <br/>
 * Elemento da �rvore que est� ativo. (Variante)<br/>
 * <br/>
 * Observa��o: <br/>
 * 1. Caso n�o haja objeto ativo, ser� retornado "false".<br/>
 * 2. A �rvore pode ser obtida atrav�s da fun��o "Obter Componente" da categoria Formul�rio.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfGetActiveElement(tree){	
  return tree.getActiveElement();	
}

/**
 * Obt�m a refer�ncia do formul�rio no qual foi associado (ao evento do formul�rio) o fluxo de a��o que cont�m <br/>
 * esta fun��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Formul�rio. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetActualForm() {
  return $mainform();
}

/**
 * Esta fun��o obt�m a refer�ncia da janela do formul�rio aberto na moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Refer�ncia (DOM) da janela (Window) do formul�rio (Variante) da moldura.
 */
function ebfGetBevelWindowReferenceByGuid(formGUID, com) {
  var formRef = ebfGetWindowReferenceByGuid(formGUID);  
  if (formRef) {
    if (formRef.$c(com)) {    
      var iframe = formRef.$c(com).div.getElementsByTagName("iframe");      
      if (iframe) {      
        return iframe[0].contentWindow;
      }      
      throw "N�o h� nenhum formul�rio aberto na moldura";    
    }    
    throw "Formul�rio n�o encontrado";

  }  
  throw "Formul�rio n�o encontrado";
}

/**
 * Obt�m o corpo (DOM: body) da p�gina do JSP do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Corpo da p�gina (Variante).
 */
function ebfGetBodyJSP(){
  return $mainform().parent.document.body;
}

/**
 * Obtem a Classe do objeto passado como par�metro.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Objeto(qualquer tipo);<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o nome da classe do Objeto.<br/>
 *   Ex: Se o objeto passado como par�metro for uma lista, o retorno ser� 'ArrayList'. (Camada Servidor)<br/>
 *         Se o objeto passado como par�metro for uma lista, o retorno ser� 'array'. (Camada Cliente)<br/>
 * <br/>
 * Oberva��o(�es):<br/>
 * 1. Deve-se sempre ficar atento ao retorno na camada cliente, devido a cada browser ter suas peculiaridades o tipo de retorno pode mudar.
 */
function ebfGetClassObject(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * Obt�m uma vari�vel de um formul�rio, definida com a fun��o Definir Vari�vel de Formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da vari�vel.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conte�do da vari�vel passada no primeiro par�metro caso ela j� exista. Caso ela ainda n�o tenha sido <br/>
 * definida, retorna Nulo. (Variante)<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Para obter uma vari�vel de formul�rio � necess�rio antes definir essa vari�vel utilizando a fun��o "Definir <br/>
 * vari�vel de formul�rio".
 */
function ebfGetClientFormVariable(name) {
  if (!$mainform().__storage) {
    $mainform().__storage = {};
  }
  return $mainform().__storage[name];
}

/**
 * Retorna uma lista contendo todos os componentes(e seus objetos) do formul�rio passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * Lista de componentes do formul�rio. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o par�metro seja nulo, a fun��o retornar� a lista de componentes do formul�rio corrente.<br/>
 * 2. Ao utilizar a fun��o na camada cliente, os componentes da barra de navega��o tamb�m ser�o listados independente da propriedade Navega��o do Formul�rio.<br/>
 * 3. Para que os componentes da barra de navega��o n�o sejam listados, � necess�rio desabilit�-los nas defini��es do formul�rio.
 */
function ebfGetComponentList(form) {
  if (form) { 
    return controller.getElementsByForm(form);
  } else {
    return controller.getAllElements();
  }  
}

/**
 * Obt�m o valor da propriedade passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio (Opcional)<br/>
 * 2. Componente<br/>
 * 3. Propriedade<br/>
 * <br/>
 * Retorno: <br/>
 * Valor atual da propriedade<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2" e propriedade "AutoAjuste",  o retorno ser� o valor corrente desta propriedade.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Na camada servidor, caso o formul�rio n�o seja informado, a fun��o adotar� o formul�rio corrente. Na camada cliente,<br/>
 * sempre ser� o formul�rio corrente.<br/>
 * 2. O nome da propriedade dever� o nome real e n�o o de exibi��o.
 */
function ebfGetComponentProperty() {
  if (existArgs(arguments)) {  
    var comp = $c(arguments[1]);      
    if(comp){
      return comp[arguments[2]];     
    }
  }
  return null;
}

/**
 * Fun��o que obt�m o valor do componente desejado em qualquer formul�rio aberto.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente.<br/>
 * 2. Componente desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Conte�do do campo passado como par�metro. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o s� ir� funcionar caso exista algum parentesco entre os formul�rios.<br/>
 * 2. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formul�rio do Sub <br/>
 * Form como par�metro.<br/>
 * 3. Quando o formul�rio se encontra dentro de um componente moldura, deve-se utilizar a fun��o "Executar Fluxo <br/>
 * no Formul�rio" apontando para um fluxo que obt�m o valor do componente.
 */
function searchFormByGUIDGetComponentValueFromOtherForm(currentForm,GUID){
  if (currentForm && decodeURI(currentForm.formGUID) == GUID){
    return currentForm;
  }

  if (currentForm && currentForm.mainform && decodeURI(currentForm.mainform.formGUID) == GUID){
    return currentForm.mainform;
  }
  if (currentForm.children){
    for (var i=0;i<currentForm.children.length;i++){
      try {
        if (currentForm.children[i].mainform){
          if (decodeURI(currentForm.children[i].mainform.formGUID) == GUID){
            return currentForm.children[i].mainform;
          }
          var returnForm = searchFormByGUIDGetComponentValueFromOtherForm(currentForm.children[i],GUID);
          if (returnForm){
            return returnForm;
          }
        }
      }catch(e){}
    }
  }
}

function searchFloatingFormGet(formGUID) {
  var openFloatingForms, mainFormWindow, i, formIframe, formReference;
  if (isPopup) {
    mainFormWindow = top.opener;    
    if(mainFormWindow){
      while (mainFormWindow.opener) {
        mainFormWindow = mainFormWindow.opener;
      }      
      openFloatingForms = mainFormWindow.mainSystemFrame.document.getElementsByClassName("WFRIframeForm");       
    }
  } else {
    openFloatingForms = mainSystemFrame.document.getElementsByClassName("WFRIframeForm");
  }
  if(openFloatingForms){
    for (i = 0; i < openFloatingForms.length; i++) {
      formIframe = openFloatingForms[i].getElementsByTagName("iframe")[0];
      if (formIframe) {
        formReference = formIframe.contentWindow.mainform;      
        if(formReference){
          if (decodeURI(formReference.formGUID) === formGUID) {
            return formReference;
          }        
        }
      }
    }
  }
}

function searchGUIDFormComponentTabGetValueOtherForm(form){
  var formPrincipal;
  
  if($mainform().mainSystemFrame || top.opener){  
    formPrincipal = $mainform().mainSystemFrame; 
    var formFined = findGUIDFormGetValueOtherForm(formPrincipal, form);
    if(formFined){
      return formFined;
  }else if(top.opener && top.opener.mainSystemFrame){
      formPrincipal = top.opener.mainSystemFrame;
      var formFined = findGUIDFormGetValueOtherForm(formPrincipal, form);
      if(formFined){
        return formFined;
      }		 
   }else if(mainSystemFrame.document.getElementsByTagName("iframe")){
      formPrincipal = mainSystemFrame.document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("iframe"); 
      for(i=0; i < formPrincipal.length; i++){
        try{
          var guidForm = decodeURI(formPrincipal[i].contentWindow.mainform.formGUID);
          if(guidForm !== undefined && guidForm === form){
            return formPrincipal[i].contentWindow.mainform;
          } 
        }catch(e){
         //Devido a algumas URL's n�o permitirem obter o ContentWindow  
        }          
      }
    }	
  }
}

function findGUIDFormGetValueOtherForm(formP, form){
  if(formP){ 
    var formChildren = formP.children;
    if(formChildren){ 
      for(i=0; i < formChildren.length; i++){    
        if(formChildren[i].isPopup && formChildren[i].mainform){
          var guidForm = decodeURI(formChildren[i].mainform.formGUID);
        }else{
          var guidForm = decodeURI(formChildren[i].formId ? formChildren[i].formId : "");
	    }       
        if(guidForm === form && formChildren[i].mainform){
          return formChildren[i].mainform;
        }
      }	
    if(formP.mainSystemFrame.document.getElementsByTagName("iframe")){
      var findForm = formP.mainSystemFrame.document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("iframe");
      for(i=0; i < findForm.length; i++){
        try{
          var guidForm = decodeURI(findForm[i].contentWindow.mainform.formGUID);
          if(guidForm !== undefined && guidForm === form){
            return findForm[i].contentWindow.mainform;
          }
        }catch(e){
           //Devido a algumas URL's n�o permitirem obter o ContentWindow
        }  
       }	
    }
    if(formP.mainSystemFrame.document.getElementsByClassName("WFRIframeForm")){
      var openFloatingForms = formP.mainSystemFrame.document.getElementsByClassName("WFRIframeForm");
      for(i=0; i < openFloatingForms.length; i++){
        try{
          var formReference = openFloatingForms[i].children[1].children[1].contentWindow.mainform;
          if(decodeURI(formReference.formGUID) === form){
            return formReference;
          }  
        }catch(e){};
      }         		 
    }	 
    }	
  }  
}

function findInMe (formGUID) {
  var childs = parent.window.children;  
  var form;  
  if(childs) {
    for(i=0; i < childs.length; i++){
      var guid = childs[i].mainform.formGUID;
      if(guid === formGUID) {
        form = childs[i].mainform;       
        break;
      }
    }
  }     
  return form;
}

function ebfGetComponentValueFromOtherForm(formGUID, componentName){
  if (isNullable(formGUID)) {
    throw 'Defina um formul�rio para obter o valor de um componente!';
  }
  var mainWindow = top;
  while (getOpenerWindow(mainWindow) != null) {
    var openerWindow = getOpenerWindow(mainWindow);
    if (openerWindow.mainform && !isNullable(openerWindow.mainform.sysCode)) {
      mainWindow = openerWindow;
    } else {
      break;
    }
  }  

  var myForm = searchFormByGUIDGetComponentValueFromOtherForm(mainWindow, formGUID);
  if (!myForm) {
    myForm = searchGUIDFormComponentTabGetValueOtherForm(formGUID);
  }
  if (!myForm){
    myForm = searchFloatingFormGet(formGUID);
  }  
  if (!myForm){
    myForm = findInMe(formGUID);
  }
  if (myForm) {
    var component = myForm.controller.getElementById(componentName);
    if (component) {
      return component.getValue();
    } else {
      component = myForm.controller.getElementById(componentName, formGUID);
      if (component) {
        return component.getValue();
      } else {
        throw 'Componente n�o encontrado para o formul�rio escolhido!';
      }
    }
  } else {
    throw 'O Formul�rio cujo componente se deseja obter n�o est� aberto!';
  }
}

/**
 * Obt�m e retorna a posi��o horizontal (X) do componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que se deseja obter a posi��o horizontal(X).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posi��o horizontal do componente passado como par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formul�rio com um componente "Cidade" cuja posi��o horizontal � 150, assumindo como par�metros <br/>
 * este componente ("Cidade") ,o retorno seria 150(Inteiro).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente  mudando a constante do <br/>
 * tipo "formul�rio" para uma constante do tipo "Letras".
 */
function ebfGetComponenteXPosition(componente) {
  var comp = controller.getElementById(componente);
  if (comp) {
    return comp.getX();
  }
}

/**
 * Obt�m e retorna a posi��o vertical (Y) do componente passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que se deseja obter a posi��o vertical(Y).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posi��o vertical do componente passado como par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formul�rio com um componente "Cidade" cuja posi��o vertical � 250, assumindo como par�metros este <br/>
 * componente ("Cidade"), o retorno seria 250(Inteiro).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o componente � necess�rio indicar o nome do formul�rio de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do componente  mudando a constante do <br/>
 * tipo "formul�rio" para uma constante do tipo "Letras".
 */
function ebfGetComponenteYPosition(componente) {
  var comp = controller.getElementById(componente);
  if (comp) {
    return comp.getY();
  }
}

/**
 * Obt�m o valor de um Cookie.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do cookie definido.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do Cookie. (Letras)<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Existe uma fun��o "Definir Cookie" que permite criar e atribuir um valor a um cookie.
 */
function ebfGetCookie(name) { 
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0)
      return null;
  }else
    begin += 2;
  var end = document.cookie.indexOf(";", begin);
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

/**
 * Esta fun��o retorna a localiza��o atual do dispositivo.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Esta fun��o retorna um JSON com as chaves: <br/>
 * "latitude", "longitude", "altitude", "accurancy", "heading", "speed" e "timestamp".<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * Para a utiliza��o dessa fun��o, a fun��o "GPS - Iniciar monitoramento" j� deve ter sido utilizada.
 */
function ebfGetCurrentLocation(){
  alert("Dispon�vel apenas no Maker Mobile");  
}

/**
 * Obt�m a posi��o horizontal (relativa ao formul�rio atual) do cursor.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Posi��o X do Cursor (Inteiro)
 */
function ebfGetCursorX() {
return $mainform().mX;
}

/**
 * Obt�m a posi��o vertical (relativa ao formul�rio atual) do cursor.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Posi��o Y do Cursor (Inteiro).
 */
function ebfGetCursorY() {
return $mainform().mY;
}

/**
 * Retorna uma lista com a descri��o dos itens da lista principal do componente lista dupla<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribu�da a uma vari�vel do tipo variante.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGetDualListLeftText(component) {	
	var selectIN = $c(component).leftSelect;
	if(selectIN) {
		var arrElements = new Array();

		if (selectIN.options.length > 0) {
			for (var i = 0; i < selectIN.options.length; i++) {
				var text = selectIN.options[i].text;
				
				arrElements.push(text);
			}
		}
		
	} else
		throw "O componente n�o � Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com os valores dos campos chaves dos itens da lista principal do componente lista dupla<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribu�da a uma vari�vel do tipo variante.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGetDualListLeftValue(component) {
	var selectIN = $c(component).leftSelect;
	if(selectIN) {
		var arrElements = new Array();

		if (selectIN.options.length > 0) {
			for (var i = 0; i < selectIN.options.length; i++) {
				var text = selectIN.options[i].value;
				
				arrElements.push(text);
			}
		}
		
	} else
		throw "O componente n�o � Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com a descri��o dos itens da lista dos selecionados do componente lista dupla<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribu�da a uma vari�vel do tipo variante.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGetDualListRightText(component) {
	var selectIN = $c(component).rightSelect;
	if(selectIN) {
		var arrElements = new Array();

		if (selectIN.options.length > 0) {
			for (var i = 0; i < selectIN.options.length; i++) {
				var text = selectIN.options[i].text;
				
				arrElements.push(text);
			}
		}
		
	} else
		throw "O componente n�o � Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com os valores dos campos chaves dos itens da lista dos selecionados do componente lista dupla<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribu�da a uma vari�vel do tipo variante.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGetDualListRightValue(component) {
	var selectIN = $c(component).rightSelect;
	if(selectIN) {
		var arrElements = new Array();

		if (selectIN.options.length > 0) {
			for (var i = 0; i < selectIN.options.length; i++) {
				var text = selectIN.options[i].value;
				
				arrElements.push(text);
			}
		}
		
	} else
		throw "O componente n�o � Lista Dupla";
	
	
	return arrElements;
}

/**
 * Essa fun��o busca e retorna o elemento, que deseja obter, a partir da sua posi��o na lista. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posi��o do elemento na lista que deseja obter<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento correspondente � posi��o, passada no 2� par�metro, na lista. O retorno da fun��o pode ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2� par�metro seja 3. <br/>
 *     O retorno ser� "c", pois o elemento que est� na posi��o 3 da lista � o "c".<br/>
 * 2. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {2, 5, 8, 9}, o 2� par�metro seja 1. O retorno ser� "2", pois o elemento que est� na posi��o 1 da lista � o "2".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfGetElementFromList() {
  var value = null;
  if (existArgs(arguments)) {
    var position = parseInt(arguments[1]) - 1;
    position = Math.max(0, position);
    position = Math.min(position, (arguments[0].length - 1));
    value = arguments[0][position];
  }
  return value;
}

/**
 * Essa fun��o busca e retorna o elemento, que deseja obter, a partir da sua posi��o na lista.  Caso a posi��o informada n�o exista, o retorno ser� "" (Vazio).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posi��o do elemento na lista que deseja obter<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento correspondente � posi��o, passada no 2� par�metro, na lista. O retorno da fun��o pode ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2� par�metro seja 3. O retorno ser� "c", pois o elemento que est� na posi��o 3 da lista � o "c".
 */
function ebfGetElementFromListNoValidatePos() {
  var value = null;  
  var length  = arguments[0].length - 1;
  if (existArgs(arguments)) {
    var position = parseInt(arguments[1]) - 1;
    //position = Math.max(0, position);
   // position = Math.min(position,length);    
    if (position>length) {
     value = "";  
    } else {
      value = arguments[0][position];         
    }
  }
  return value;
}

/**
 * Esta fun��o obt�m o elemento HTML a partir do n� passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Elemento da �rvore<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento HTML do elemento (Variante)
 */
function ebfGetElementIdByReference(elementVar) {
  if (elementVar) return elementVar.div;
}

/**
 * Esta fun��o obt�m a refer�ncia da DIV gerada ao abrir uma inst�ncia de um formul�rio flutuante.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Nome da Janela (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do elemento HTML (Variante)<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Utilizar ap�s a fun��o Abrir URL Numa Janela Flutuante para obter a DIV.
 */
function ebfGetFloatingFormDivById(name){
  return $mainform().getFloatingFormDivById(name);
}

/**
 * Fun��o que obt�m o ID do componente em foco.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do Componente em Foco. (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetFocusedComponent(){
   if(controller && controller.activeElement)
     return controller.activeElement.id;
}

/**
 * Obt�m a janela(inst�ncia) do formul�rio definido no par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. GUID do Formul�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Formul�rio. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O formul�rio deve est� aberto no momento da execu��o da fun��o.<br/>
 * 2. Esta fun��o s� ir� funcionar caso exista algum parentesco entre os formul�rios.
 */
function searchFormByGUIDGetFormByGuid(currentForm,GUID){
  if (currentForm && currentForm.formGUID == GUID){
    return currentForm;
  }
  if (currentForm && currentForm.$mainform() && currentForm.$mainform().formGUID == GUID) {
    return currentForm.$mainform();
  }
  if (currentForm.children) {
    for (var i=0; i < currentForm.children.length; i++) {
      try {
        if (currentForm.children[i].$mainform()) {
          if (currentForm.children[i].$mainform().formGUID == GUID){
            return currentForm.children[i].$mainform();
          }
          var childForm = currentForm.children[i];
          if (currentForm.children[i].$mainform().d.n.isModal) {
            childForm = childForm.$mainform();
          }
          var returnForm = searchFormByGUIDGetFormByGuid(childForm,GUID);
          if (returnForm){
            return returnForm;
          }
        }
      }catch(e){}
    }
  }
}

function ebfGetFormByGuid(formGUID) {
  var mainWindow = top;
  while (getOpenerWindow(mainWindow) != null) {
    var openerWindow = getOpenerWindow(mainWindow);
    if (openerWindow.mainform && !isNullable(openerWindow.mainform.sysCode)) {
      mainWindow = openerWindow;
    } else {
      break;
    }
  }
  return searchFormByGUIDGetFormByGuid(mainWindow, formGUID);
}

/**
 * A fun��o retorna o c�digo do formul�rio chamado no fluxo.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o c�digo do formul�rio que chama o fluxo. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o formul�rio "Cadastro" chama o fluxo, o retorno seria o c�digo deste formul�rio.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetFormID() {
  var formID = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : null);  
  return formID;
}

/**
 * A fun��o retorna o C�digo (ou sigla) do sistema atual em que o fluxo est� sendo executado.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o c�digo (ou sigla) do sistema utilizado. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Se o fluxo for executado no "Sistema de Contabilidade P�blica", que tem como sigla "CTP", a fun��o retornar� <br/>
 * "CTP".<br/>
 * <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso existam mais de um sistema com a mesma sigla na pasta systems, esta fun��o retornar� o Sigla do sistema com<br/>
 * inst�ncia. Ex.: CTP_SISTEMA02
 */
function ebfGetFullSystemID() {
  return d.WFRForm.sys.value.toString();
}

/**
 * Obt�m as coordenadas do dispositivo m�vel que possui GPS.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo que ser� executado caso as coordenadas sejam obtidas com sucesso;<br/>
 * 2. Fluxo que ser� executado caso haja algum erro durante a execu��o da fun��o;<br/>
 * <br/>
 * O fluxo informado no primeiro par�metro dever� possuir um par�metro de entrada do tipo Variante. A fun��o enviar�<br/>
 * automaticamente para o fluxo um mapa com as seguintes chaves "longitude", "latitude", "altitude", "accuracy", <br/>
 * "altitude accuracy", "heading", "speed", "Timestamp".<br/>
 * <br/>
 * O fluxo informado no segundo par�metro dever� possuir um par�metro de entrada do tipo Letras. A fun��o enviar�<br/>
 * automaticamente para o fluxo o erro encontrado na tentativa de obten��o das coordendas.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.
 */
function ebfGetGPSCoords(flxSucess,flxError){
 
 function num() {
   var txt = "";
   for (i=0;i<8;i++) {
     txt+= new String(parseInt(parseNumeric(9) * Math.random()));
   }  
 return txt;
 }

 var obj = new Map();
 obj.add('longitude', num());
 obj.add('latitude', num());
 obj.add('altitude', '1000000');
 obj.add('accuracy', '1000000');
 obj.add('altitude Accuracy', '1000000');
 obj.add('heading', '1000000');
 obj.add('speed', '1000000');
 obj.add('timestamp', '01/01/2011 12:00');
 var list = new Array();
 list.push(obj); 
 var func = window.eval(reduceVariable(flxSucess)); 
 var system = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
 var sysCode = system.toString().substring(0, 3);
 var formID = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : null);   

 var ruleInstance = new func(null, sysCode, formID);     
 ruleInstance.run.apply(ruleInstance, list); 
}

/**
 * Obt�m o GUID do formul�rio no qual foi associado (ao evento do formul�rio) o fluxo de a��o que cont�m esta fun��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Letras (GUID do Formul�rio)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetGUIDActualForm() {
  return $mainform().formGUID;
}

/**
 * Obt�m o ID do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Deve ser utilizada a fun��o Obter Formul�rio Atual ou Obter Janela do Formul�rio, pois este par�metro espera a refer�ncia do formul�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * ID do Formul�rio. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetIdForm(formActual) {

    return formActual.idForm;
	
}

/**
 * Esta fun��o obt�m um objeto JSON e retorna o seu conte�do em forma de texto<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto.<br/>
 * 2. N�mero de espa�os para formata��o (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Texto JSON.<br/>
 * <br/>
 * Observa��o (�es):<br/>
 * 1. Na camada servidor o segundo par�metro quando informado sempre aplicar� a formata��o "Pretty" para o text JSON.
 */
function ebfGetJSONText(object, space) {
  return JSON.stringify(object, null, space);
}

/**
 * Essa fun��o obt�m a lista de chaves do objeto JSON passado no primeiro par�metro.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Objeto JSON<br/>
 * <br/>
 * Retorno:<br/>
 * Lista contendo as chaves.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro pode ser passado o retorno da fun��o "JSON - Criar Objeto".<br/>
 * <br/>
 * Exemplo(s):<br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metro um objeto JSON criado a partir do Texto {"Vers�o":"3.9","empresa":"Softwell"}, ao chamar a fun��o "JSON - Obter Lista de Chaves" o retorno ser� um objeto Lista com os valores "Vers�o" e "empresa".
 */
function ebfGetListKeysObjectJson(objetoJSON){
 if(objetoJSON){
   var listKeys = new Array;
   for(i=0; i<Object.keys(objetoJSON).length; i++){   
      listKeys.push(Object.keys(objetoJSON)[i]);
   }     
   return listKeys;
 }
}

/**
 * Obt�m o valor da vari�vel local criada atrav�s da fun��o "Definir Vari�vel Local".<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Nome da vari�vel.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor da vari�vel local definida no formul�rio.
 */
function ebfGetLocalVariable(varName) {
  return top.document[varName];
}

/**
 * Essa fun��o retorna o status de permiss�o de notifica��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui;<br/>
 * <br/>
 * Retorno:<br/>
 * Status (Letras);<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O tipo de retorno pode ser:<br/>
 *   1.1 "granted" permiss�o concedida.<br/>
 *   1.2 "denied" permiss�o negada.<br/>
 *   1.3 "default" requer solicita��o de permiss�o (Utilizar a fun��o "Notifica��o - Solicitar Permiss�o").
 */
function ebfGetNotificationStatus(){
  return Notification.permission;
}

/**
 * Obt�m a refer�ncia do formul�rio a partir do qual um outro formul�rio foi aberto; normalmente abertos atrav�s de <br/>
 * bot�es, dentre outros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Utilize a fun��o "Obter Formul�rio Atual".<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Formul�rio a partir do qual um formul�rio foi aberto. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetOpenerForm(formActual) {
  return getOpenerWindow(formActual).$mainform();
}

/**
 * Obt�m a refer�ncia do formul�rio a partir do qual um outro formul�rio foi aberto; normalmente aberto na moldura de um formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Utilize a fun��o "Obter Formul�rio Atual".<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Formul�rio a partir do qual outro formul�rio foi aberto. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfGetParentForm(formActual) {
  return formActual.parent.parent.$mainform();  
  //Anterior return formActual.top.parent.$mainform();
}

/**
 * Obt�m o elemento raiz da �rvore passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. �rvore (Ver observa��o 1).<br/>
 * <br/>
 * Retorno:  <br/>
 * Raiz da �rvore (Variante).<br/>
 * <br/>
 * Observa��o (�es):<br/>
 * 1. A �rvore pode ser obtida atrav�s da fun��o "Obter Componente" da categoria Formul�rio.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfGetRoot(tree){	
  return tree.getRoot();	
}

/**
 * Obt�m o nome do fluxo em que a fun��o se encontra.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Nome do fluxo. (Letras)
 */
function ebfGetRuleName() {
  return this.getRuleName();
}

/**
 * Fun��o para Obter Nome da Aba Ativa<br/>
 * <br/>
 * Par�metros:<br/>
 * Nenhum<br/>
 * <br/>
 * Retorno:<br/>
 * Nome da Aba Ativa (Letras)<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfGetSelectTabStringName() {
  var a = ebfSelectedTab();
  return a.description;
}

/**
 * Obt�m o conte�do da vari�vel criada pela fun��o "Definir vari�vel de sess�o" passando no 1� par�metro o nome da<br/>
 * vari�vel e no 2� par�metro o valor l�gico verdadeiro ou falso, indicando se � ou n�o uma vari�vel global. Para vari�veis<br/>
 * globais usa-se verdadeiro, para n�o globais usa-se falso.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Vari�vel<br/>
 * 2. Valor L�gico.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conte�do da vari�vel passada no primeiro par�metro caso ela j� exista. Caso ela ainda n�o tenha sido definida,<br/>
 * retorna nulo. (Variante)<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * Para obter uma vari�vel de sess�o � necess�rio antes definir essa vari�vel utilizando a fun��o "Definir vari�vel de sess�o" <br/>
 * da categoria Utilit�rios.<br/>
 * <br/>
 * Exemplos: <br/>
 * Assumindo como par�metros "Contador" (Letras) e verdadeiro (L�gico). Se existir uma vari�vel global com o nome <br/>
 * "Contador" o retorno seria o conte�do dessa vari�vel. Caso n�o exista, o retorno seria nulo.
 */
function ebfGetSessionAttribute(name, global){
  try {  
    postForceUTF8;    
  } catch (e) {
    var isFirefoxVersionAbove3 = false;
    var firefoxRegExp = new RegExp("firefox/(\\d+)", "i");
    var firefoxRegExpResult = firefoxRegExp.exec(navigator.userAgent);
    if (firefoxRegExpResult != null && firefoxRegExpResult.length > 1) {
      try {
        var version = parseInt(firefoxRegExpResult[1]);
        if (version > 2) {
          isFirefoxVersionAbove3 = true;
        }
      } catch (e) {}
    }

    postForceUTF8 = (isFirefoxVersionAbove3 || isSafari);  
  }  

  var content = getContent("sessionManager.do?sys=" + sysCode + "&nome=" + URLEncode(name, postForceUTF8) + "&global=" + global + "&acao=get");
  var ajaxReturn = eval(content);
  if (ajaxReturn) {
    return ajaxReturn;
  } else {
    return "";
  }
}

/**
 * Esta fun��o retorna o diret�rio de Skins que est� sendo utilizado pelo sistema.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Diret�rio da Skin (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O diret�rio retornado � o caminho relativo a aplica��o.
 */
function ebfGetSkinFolder() {
  return $mainform().skin;
}

/**
 * A fun��o retorna o C�digo do sistema atual em que o fluxo est� sendo executado.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o c�digo do sistema utilizado. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Se o fluxo for executado no "Contas a Pagar", que tem como sigla "CAP", a fun��o retornar� <br/>
 * "CAP".<br/>
 * <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Essa fun��o n�o retorna a SIGLA com inst�ncia  caso exista mais de um sistema com a mesma sigla. Se for necess�rio obter a SIGLA com inst�ncia, utilize a fun��o Sigla do Sistema.
 */
function ebfGetSystemID() {
  var system = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  return system.toString().substring(0, 3);
}

/**
 * Esta fun��o obt�m a refer�ncia do elemento HTML da aba passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Aba (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia da Aba (Variante)
 */
function ebfGetTabDivByName(tabName) {
  var tab = $mainform().d.t.getTabByName(tabName);
  if (tab) {
    return tab.div;
  }
}

/**
 * Esta fun��o retorna uma lista com o nome das abas (incluindo as abas criadas dinamicamente) do formul�rio em execu��o. <br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com nome das abas (Variante)
 */
function ebfGetTabList() {
  var tabList = new Array();
  $mainform().d.t.tabs.forEach(function(element, index, array){tabList.push(element["description"])});  
  return tabList;
}

/**
 * Recebe uma data como par�metro e obt�m os milissegundos da data desde 1970.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Milisegundos.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso n�o seja informada a data, a fun��o retornar� os milissegundos da data atual
 */
function ebfGetTimeFromDataSince70(dateVar){
  var date;
  if (dateVar == null || dateVar == '')
    return null;
  if (dateVar instanceof Date){
    date = dateVar;
  }else{
    date = new Date(dateVar);
  }  

  return date.getTime();
}

/**
 * Essa fun��o calcula a quantidade de milissegundos do ano de 1970 at� o dia atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a quantidade de milissegundos. (Variante)
 */
function ebfGetTimeSince70() {
  var date = new Date();
  return date.getTime();
}

/**
 * Retorna em qual plataforma o aplicativo est� sendo executado<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * iOS ou Android
 */
function ebfGetTypePlatform(){
  return "";
}

/**
 * Essa fun��o obt�m o valor de um elemento de acordo a chave passada no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor da Chave ou Nulo caso n�o exista.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro pode ser passado o retorno da fun��o "JSON - Criar Objeto".<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro um objeto JSON criado a partir do Texto {"Vers�o":"3.9","empresa":"Softwell"}, ao chamar a fun��o "JSON - Obter Valor" e passar como chave "empresa" (sem aspas), o retorno ser� "Softwell" (sem aspas).
 */
function ebfGetValueObjectJson(objectJSON, key){
  if(objectJSON){     
    return objectJSON[key];    
  }else{  
    return null;
  }
}

/**
 * Retorna a vers�o atual do Webrun.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Vers�o do webrun. (Letras)
 */
function ebfGetWebrunVersion(){
  return VERSION;
}

/**
 * Esta fun��o obt�m a refer�ncia da janela do formul�rio informado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Levantar Exce��o? (Caso o formul�rio n�o encontrado).<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Refer�ncia (DOM) da janela (Window) do formul�rio (Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o n�o d� suporte a formul�rios com as propriedades "Popup = SIM" e "Modal = SIM".<br/>
 * 2. Esta fun��o obt�m apenas formul�rios abertos em forma de janela (Popup Sim ou N�o). Para obter formul�rios na<br/>
 * moldura, utilize a fun��o "Obter Formul�rio da Moldura".
 */
function ebfGetWindowReferenceByGuid(formGUID, throwException) {
  var topLevel = isPrincipal ? principal : $mainform().parent.principal;  
  var foundWindow;  

  //Formul�rio foi atualizado. Obter do pai  
  if (!topLevel) {// && getOpenerWindow(window) && getOpenerWindow(window).$mainform()) {  
    topLevel = getOpenerWindow(window);
    while(getOpenerWindow(topLevel) != null) {
      topLevel = getOpenerWindow(topLevel);
    }    
    if (topLevel && topLevel.mainform.isPrincipal)    
      topLevel = topLevel.mainform.principal;      
    if (topLevel && topLevel.$mainform().isPrincipal)    
      topLevel = topLevel.$mainform().principal;
    /*if (getOpenerWindow(window).$mainform().principal)
      topLevel = getOpenerWindow(window).$mainform().principal;
    else
      topLevel = getOpenerWindow(window).$mainform().parent.principal;*/    
  }
  if (topLevel && topLevel.formGUID == formGUID)  
    return topLevel;
   
  //Caso da moldura
  if (!topLevel) {
    if (top.$mainform() && top.$mainform().mainform && top.$mainform().mainform.isPrincipal)    
      topLevel = top.$mainform().mainform.principal;
  }

  //Procurar Janelas
  foundWindow = ebfSearchPopupWindowRecursivelly(topLevel, formGUID);
  if (foundWindow) {
    return foundWindow.$mainform();
  }    

  //Procurar Flutuantes    
  if (topLevel && topLevel.$mainform().mainSystemFrame && topLevel.$mainform().mainSystemFrame.floatingForms) {
    for (var i=0; i<topLevel.$mainform().mainSystemFrame.floatingForms.length; i++) {      
      var currentFloatingFormWindow = topLevel.$mainform().getFloatingFormWindowById(
        topLevel.$mainform().mainSystemFrame.floatingForms[i].replace("WFRIframeForm", ""));        
      if (currentFloatingFormWindow.mainform.formGUID == formGUID) {
        return currentFloatingFormWindow.mainform;        
      } else {
        var found = ebfSearchPopupWindowRecursivelly(currentFloatingFormWindow.mainform, formGUID);
        if (found)
          return found;      
      }
    }
  }    
  //N�o encontrou 
  if(throwException == undefined || throwException){ 
    throw "Formul�rio n�o encontrado";    
  }
}

function ebfSearchPopupWindowRecursivelly(window, formGUID) {
  if (window && window.parent && window.parent.children) {
    for (var i=0; i<window.parent.children.length; i++) {
      var currentWindow = window.parent.children[i];      
      try {      
        var existCurrentWindow = currentWindow.$mainform();        
      } catch(e) {
        continue;    
      }
      if (currentWindow.$mainform() && currentWindow.$mainform().formGUID == formGUID) {
        return currentWindow.$mainform();
      } else if (currentWindow.mainform && currentWindow.mainform.formGUID == formGUID) {
        return currentWindow.mainform;      
      }
      
      var found = ebfSearchPopupWindowRecursivelly(currentWindow, formGUID);
      if (found)
        return found;
    }
    
  } else if (window && window.children) {  
    for (var i=0; i<window.children.length; i++) {
      var currentWindow = window.children[i];      
      try {      
        currentWindow.$mainform();        
      } catch(e) {
        continue;    
      }
      if (currentWindow.$mainform() && currentWindow.$mainform().formGUID == formGUID) {
        return currentWindow.$mainform();
      }
      var found = ebfSearchPopupWindowRecursivelly(currentWindow, formGUID);
      if (found)
        return found;
    }  
  }
}

/**
 * Calcula a m�dia de valores contidos em uma coluna. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Formul�rio<br/>
 * 2. Nome da Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * M�dia entre os valores referente ao campo informado (N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-r� a M�dia entre os valores encontrados na grade. <br/>
 * 1.2 Quando estiver usando a "pagina��o" ser� retornado a m�dia da coluna e da p�gina em quest�o/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verifica��o dos valores � feita em todos os registros da grid (podendo estes estarem paginados ou n�o). <br/>
 * <br/>
 * 3. Modo de Inser��o/Altera��o<br/>
 * 3.1 Caso a fun��o venha a ser usada com o formul�rio estando no modo de inser��o ou altera��o, <br/>
 * dever� ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formul�rio seja: "Formul�rio Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'C�digo', 'Nome do Estado', 'PIB'. Assumindo que o 3 par�metro<br/>
 * seja o campo PIB(Produto Interno Bruto), ser� retornado a m�dia dos valores de uma coluna.
 */
function ebfGridAVGColumn(form, grid, column) {
  var sum = 0;
  var total = 0;
  var avg = 0;
  var gridName = grid;  
  var grid = $c(grid);  
  if (!grid) {
    handleException(new Error("Componente " + gridName + " n�o encontrado"));
    return;
  }    
  var qtdLinhas = grid.getRowCount();
  var ref = grid.iscCanvas;
  for (var i =0; i<=qtdLinhas ;i++){    
    if(i<qtdLinhas){ 
      var data = grid.isFiltered ? ref.getOriginalData().localData[i] : ref.getDataSource().cacheData[i];
      var rNc = grid.getRealNameColumn(column);
      if(rNc === -1){
        handleException(new Error(getLocaleMessage("INFO.GRID_COLUMN_NOT_FOUND", column, grid.description ==="" ? gridName : grid.description)));
        return;
      } 
      sum = parseNumeric(data[rNc]);
      total = total + sum;  
    }  
    else
      avg = total / i;  
  }
  return avg;
}

/**
 * Adiciona uma coluna na Grade, informando o nome da grade e o nome da coluna que ser� adicionada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna a ser adicionada.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridAddColumn(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  //grid.addColumn(column);  
  grid.timeout(grid.addColumn, 0, [column]);
}

/**
 * Essa fun��o habilita o filtro avan�ado para o componente grade que n�o seja edit�vel.<br/>
 *  Par�metros:<br/>
 *  1. Formul�rio.<br/>
 *  2. Nome do componente.<br/>
 *   <br/>
 *  Retorno:<br/>
 *  1. N�o possui.<br/>
 *   <br/>
 *   Exemplo:<br/>
 *   1. Assumindo como par�metros:<br/>
 *     Formul�rio = "Cidades"<br/>
 *     Nome do Componente = "MakerGrid1"
 */
function ebfGridAdvancedFilter (form, comp) {
  const grid = $c(comp);  
  if(!grid){
    handleException(new Error("Componente " + comp + " n�o encontrado"));
    return;
  } else {
    if (!grid.enableSimpleFilter)   
      grid.enableSimpleFilter = true;    
    gridAdvancedFilter(comp); 
  } 
};

/**
 * Altera a posi��o da barra de rolagem Horizontal em rela��o � extremidade esquerda da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade.<br/>
 * 3. Posi��o da Barra de Rolagem.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridChangeScrollLeftValue(form, com, value){
  if(com){
    var grid = $c(com);
    if(grid.scrollLeft){
      grid.scrollLeft(value);
    } 
  }
}

/**
 * Altera a posi��o da barra de rolagem Vertical em rela��o ao topo da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade.<br/>
 * 3. Novo valor da dist�ncia da barra vertical.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridChangeScrollTopValue(form, com, value){
  if(com){
    var grid = $c(com);
    if(grid.scrollTop){
      grid.scrollTop(value);
    } 
  }
}

/**
 * Fecha todos os grupos e subgrupos existentes na Grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridCloseAllGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.closeAllGroups();
}

/**
 * Fecha um grupo passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o pr�prio Objeto do grupo, obtido atrav�s de regras de <br/>
 * neg�cio.<br/>
 * 2. Fecha apenas grupos presentes da raiz, ou seja, subgrupos n�o s�o fechados. <br/>
 * Ex: Imagine uma �rvore seguindo o princ�pio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
 * <br/>
 * {<br/>
 *   "grupo1": {<br/>
 *     "subgrupo1": "valor1"<br/>
 *   },<br/>
 *   "grupo2": {<br/>
 *     "subgrupo2": "valor2"<br/>
 *   }<br/>
 * }<br/>
 * <br/>
 * Apenas os grupos "grupo1" e "grupo2" podem ser fechados.
 */
function ebfGridCloseGroup(gridName, group) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.closeGroup(group);
}

/**
 * Essa fun��o retorna o c�digo da coluna. Informando a Grade e o nome da coluna que deseja saber o c�digo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o c�digo da coluna.(Inteiro) <br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Cadastro de Produtos" e o Nome da Coluna sendo: "Descri��o do Produto".<br/>
 * O retorno ser� o C�digo da coluna  "Descri��o do Produto".
 */
function ebfGridColumnCode(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getColumnCode(column);
}

/**
 * Cria rela��o de depend�ncia entre duas grades.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Grade Pai (Mestre)<br/>
 * 2. Grade Filha<br/>
 * 3. Filtro de liga��o no formato: <br/>
 * <Tabela da Grid Filha>.<Campo 1 da Grid Filha>=<Campo da Grid Master><br/>
 * [;<Tabela da Grid Filha>.<Campo 2 da Grid Filha>=<Campo da Grid Master>[;<Tabela da Grid Filha>.<br/>
 * <Campo N da Grid Filha>=<Campo da Grid Master>]]. <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1) TB_FILHA.CAMPO_FILHA=CAMPO_MASTER<br/>
 * 2) TB_CIDADE.COD_PAIS=COD_PAIS<br/>
 * 3) TB_CIDADE.COD_PAIS=COD_PAIS;TB_CIDADE.COD_CIDADE=COD_CIDADE<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridCreateDependence(grid1, grid2, filter) {
  $c(grid1).gridSelectRowMaster = true;
  $c(grid1).addDependentGrid(grid2, filter);
}

/**
 * Volta ao modo de navega��o da grade edit�vel se ela estiver em modo de inser��o ou em modo de edi��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da grade <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A grade precisa estar em um modo diferente de navega��o.
 */
function ebfGridEditableCancel(componentName) {
  var component = $c(componentName);
  if (component instanceof HTMLGrid) { 
    component.timeout(component.cancel, 0);  
  }
}

/**
 * Exclui o registro selecionado da grade edit�vel passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 *  1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 *  1. O registro a ser exclu�da, precisa estar previamente selecionada.
 */
function ebfGridEditableDeleteRow(grid) {
	  var grid = $c(grid);
	  if (!grid)
	    throw "Componente "+grid+" n�o encontrado"; 
	  if (!(grid.editing || grid.inserting)){
		if (!grid.editable){  
	      if (!grid.nav) grid.nav = {};  
		  if (!grid.nav.btDelete) grid.nav.btDelete = {};  
	    }		  
		var edt = grid.editable;
		grid.editable = true;
		try {
	      grid.deleteRow();
		} finally {
	      grid.editable = edt;
		}
	  }               
	}

/**
 * Entra em modo de edi��o com a grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 *  1. S� funciona se a grade n�o estiver em modo de inser��o<br/>
 *  2. A grade precisa estar com uma linha selecionada, caso contrario, entrar� em modo de edi��o com a primeira linha.
 */
function ebfGridEditableEdit(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " n�o encontrado";
  if (grid.editable) {
    if (!(grid.editing || grid.inserting)) {
      if (!grid.nav) grid.nav = { };
      if (!grid.nav.btEdit) grid.nav.btEdit = { };
      grid.timeout(grid.edit, 0);
    }
  } else {
    if (grid.callForm) {
      if (!grid.enabled || grid.readOnly || !grid.parentHasData) return;
      var gridrn = grid.currentRow;
      if (gridrn > grid.data.length - 1) gridrn = -2;
      var left = (screen.width - grid.formWidth) / 2;
      var top = (screen.height - grid.formHeight) / 2;
      var gt = 1 + parseInt(gridrn) + parseInt(grid.gridini);
      if (gt > 0) MM_openBrWindow('form.jsp?sys=' + grid.sys + '&action=openform&formID=' + grid.formCode + '&align=1&mode=2&goto=' + gt + '&filter=&onClose=opener.d.c_' + grid.code + '.refreshPage()', grid.formCode, 'toolbar=no,location=no,status=yes,menubar=no,scrollbars=no,resizable=no,width=' + grid.formWidth + ',height=' + grid.formHeight + ',left=' + left + ',top=' + top);
    }
  }
}

/**
 * Entra em modo de inser��o com a grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Ela n�o pode estar em modo de edi��o
 */
function ebfGridEditableInclude(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " n�o encontrado";
  if (grid.editable) {
    if (!grid.nav) grid.nav = { };
    if (!grid.nav.btInclude) grid.nav.btInclude = { };
    grid.timeout(grid.include, 0);
  } else {
    if (grid.callForm) {
      if (!grid.enabled || grid.readOnly || !grid.parentHasData) return;
      var gridrn = grid.currentRow;
      if (gridrn > grid.data.length - 1) gridrn = -2;
      var left = (screen.width - grid.formWidth) / 2;
      var top = (screen.height - grid.formHeight) / 2;
      var gt = 1 + parseInt(gridrn) + parseInt(grid.gridini);
      MM_openBrWindow('form.jsp?sys=' + grid.sys + '&action=openform&formID=' + grid.formCode + '&align=1&mode=1&goto=' + gt + '&filter=&onClose=opener.d.c_' + grid.code + '.refreshPage()', grid.formCode, 'toolbar=no,location=no,status=yes,menubar=no,scrollbars=no,resizable=no,width=' + grid.formWidth + ',height=' + grid.formHeight + ',left=' + left + ',top=' + top);
    }
  }
}

/**
 * Grava o registro que estiver sendo inserido ou alterado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A grade precisa ser edit�vel e estar no modo de inser��o ou edi��o no momento em que a fun��o for chamada.
 */
function ebfGridEditablePost(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.post();
}

/**
 * Essa fun��o habilita a op��o do usu�rio realizar a m�ltipla sele��o de linhas no componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente (Letras).<br/>
 * 2. Permitir (L�gico).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para realizar a m�ltipla sele��o de linhas � necess�rio pressionar a tecla CTRL.<br/>
 * 2. Para obter o conte�do das linhas, utilizar a fun��o "Grade - Obter Linhas Selecionadas".
 */
function ebfGridEnableMultiSelection (comp, enable) {
  let component = $c(comp);  
  if (component) {
    enable = enable ? 'multiple' : 'single';
    component.iscCanvas.setSelectionType(enable);
  } else {
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));
    return;
  }
}

/**
 * Habilita ou desabilita o recurso de agrupamento na Grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Habilitar?.(L�gico)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o: <br/>
 * N�o possui.
 */
function ebfGridEnableOrDisableGroup(grid, enable) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";     

  return grid.enableOrDisableGroup(enable); 
}

/**
 * Esta fun��o exporta dados uma grade de acordo com o formato passado no �ltimo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a grade<br/>
 * 2. Componente Grade<br/>
 * 3. Formato de Exporta��o<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. S� ser� poss�vel a exporta��o dos seguintes formatos:<br/>
 *     "XLS" - Excel<br/>
 *     "HTML" - Html<br/>
 *     "JSON" - Json<br/>
 *     "LST" - Listagem<br/>
 *     "PDF" - PDF<br/>
 *     "TXT" - Texto<br/>
 *     "XML" - XML<br/>
 * 2. Assumindo o terceiro par�metro PDF, ser� exportado os resultados da grade em formato PDF.
 */
function ebfGridExportData(pForm, nameGrid, format) {  
  var grade = $c(nameGrid);
  if(!grade){
    handleException(new Error(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND",nameGrid)));
    return;
  }
  if (format) format = format.toUpperCase();
  grade.exportData(format);
}

/**
 * Essa fun��o preenche uma grade a partir de um objeto JSON.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a grade<br/>
 * 2. Componente grade a ser alterado<br/>
 * 3. Lista de JSON do cabe�alho (Ver observa��o).<br/>
 * 4. Lista de JSON contendo os valores a serem adicionados na grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. No par�metro 4, cada linha da grade corresponde a um JSON dentro da lista.<br/>
 * 2. Ap�s preencher a grade com esta fun��o, n�o � permitido entrar em modo de inser��o/edi��o ou gravar/excluir os registros.<br/>
 * 3. N�o � poss�vel ordenar a grade com a funcionalidade Shift + Duplo-Clique na coluna ap�s o uso desta fun��o.<br/>
 * 4. Chaves do JSON cabe�alho:<br/>
 *    name: identificador da coluna. Obrigat�rio.<br/>
 *    title: descri��o da coluna. Obrigat�rio.<br/>
 *    width: largura da coluna. Valor padr�o: divis�o por igual do espa�o dispon�vel.<br/>
 *    type: tipo da coluna. Valor padr�o: text.<br/>
 *    align: alinhamento da coluna. Valor padr�o: left<br/>
 *    visible: define se a coluna pode ser ocultada. Valor padr�o: false<br/>
 * 5. Os valores poss�veis para alinhamento(align) das colunas s�o: center, left e right. <br/>
 * Exemplos:<br/>
 * <br/>
 * JSON cabe�alho:                                JSON conteudo<br/>
 * [                                                  [<br/>
 *   {                                                      {    <br/>
 *     "name": "codigo",                            "codigo": "1",   <br/>
 *     "title": "Codigo",                               "valor": "150" <br/>
 *     "width": 150,                                  },<br/>
 *     "type": "text",                                 {<br/>
 *     "align": "center",                              "codigo": "2",<br/>
 *     "visible": true                                   "valor": "300"  <br/>
 *                                                           }<br/>
 *   },                                                ]<br/>
 *   {<br/>
 *     "name": "valor",<br/>
 *     "title": "Valor",<br/>
 *     "width": 150,<br/>
 *     "type": "text",<br/>
 *     "align": "center",<br/>
 *    "visible":true    <br/>
 *   }<br/>
 * ]
 */
function ebfGridFillFromJson (form, grid, header, values) {
  let cGrid = $c(String(grid));
  if(cGrid){  
    cGrid.setAllColumns(parseArray(header));
    cGrid.setAllRecords(parseArray(values));
    cGrid.iscCanvas.setShowFilterEditor(false);
    cGrid.setGridPageIni(0);
    cGrid.setGridPageEnd(values.length);
    cGrid.order = function(){};   
    cGrid.columns = header;         
    cGrid.iscCanvas.markForRedraw()
    cGrid.noRefresh = true; 
  } else {
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', grid));
    return;
  }
}

function parseArray (object) {
  if (!(object instanceof Array)) {
    try {
      let newArray = new Array();
      const size = object.length;
      for(var i=0; i < size; i++) {
        newArray[i] = object[i];
      }    
      return newArray;
    } catch (e) {
      return object;
    }   
  }  
  return object;
}

/**
 * Filtra um componente grade de acordo com a condi��o passada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Grid a ser filtrada<br/>
 * 2. Filtro de liga��o no formato: <Tabela da Grid>.<Campo 1 da Grid>=<Valor>[;<Tabela da Grid>.<Campo 2 da Grid >=<valor><br/>
 * [;<Tabela da Grid>.<Campo N da Grid>=<valor>]]. <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O �nico operador que pode ser utilizado como filtro � o operador "=" (igual).<br/>
 * 2. Para utilizar tipos espec�ficos de dados como data, o valor deve ser concatenado com algumas constantes.<br/>
 * Os tipos poss�veis s�o: long, double, boolean, date, timestamp.<br/>
 * <br/>
 * Ex: 1) TB_FILHA.CAMPO_FILHA=Teste<br/>
 *       2) TB_CIDADE.COD_PAIS=55<br/>
 *       3) TB_CIDADE.COD_PAIS=55;TB_CIDADE.COD_CIDADE=856<br/>
 * <br/>
 * Exemplo de uso:<br/>
 * TABELA.CAMPO = 05/12/2009@date
 */
function ebfGridFilter(grid, filter) {
  const comp = $c(grid);
  if(!comp) {
    handleException(new Error("Componente " + grid + " n�o encontrado"));
    return;
  }
  if (comp.isFiltered)
    comp.iscCanvas.clearCriteria();
  comp.filter(filter);  
  comp.actRefresh = true;
}

/**
 * Essa fun��o encontra a posi��o da coluna na grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posi��o da coluna. Se a coluna for a primeira da Grade retorna o valor 0, se for a segunda retorna 1 <br/>
 * e assim sucessivamente. (Inteiro)<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. A numera��o das colunas come�am de 0 � N.<br/>
 * 2. Caso a coluna n�o seja encontrada, ser� retornado o valor -1.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade � "Lista de Produtos" e o nome da coluna sendo "Inform�tica". Passando esses <br/>
 * par�metros, ser�  verificado em que posi��o a coluna "Inform�tica"  est� na grade "Lista de Produtos".
 */
function ebfGridFindColumn(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";
  try {   
    return grid.findColumn(column);
  } catch(e) {
    return -1;
  }  
}

/**
 * Essa fun��o tem como objetivo congelar uma coluna da grade de acordo com os valores passados por par�metros.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Formul�rio (Formul�rio)<br/>
 * 2. Grade (Componente)<br/>
 * 3. Coluna (Letras)<br/>
 * 4. Congelar? (L�gico)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Quando informado o valor l�gico falso no quarto par�metro, a coluna ser� descongelada.
 */
function ebfGridFreezeColumn(pForm, nameGrid, nameColumn, freeze) {  
  var grade = $c(nameGrid);
  if (!grade) {
    handleException(new Error(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", nameGrid)));
    return;
  }
  if (grade.findColumn(nameColumn) == -1) {
    handleException(new Error(getLocaleMessage("INFO.GRID_COLUMN_NOT_FOUND", nameGrid, nameColumn)));
	return;
  }
  let realNameColumn = grade.getRealNameColumn(nameColumn);  
  if (parseBoolean(freeze)) grade.freezeColumn(nameColumn);
  else if (grade.iscCanvas.fieldIsFrozen(realNameColumn)) grade.unfreezeColumn(nameColumn);
}

/**
 * Essa fun��o retorna um valor inteiro que identifica o estado do componente CheckBox na Grade, a partir da informa��o <br/>
 * da linha e a coluna que deseja obter o valor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. N�mero da Linha<br/>
 * 3. Nome da Coluna que se encontra o componente CheckBox<br/>
 * <br/>
 * Retorno: <br/>
 * N�mero referente ao valor do check (Inteiro)<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * Os Valores possiveis s�o: 0 -> Desmarcado 1 -> Marcado 2 -> Neutro.
 */
function ebfGridGetCheckValue(grid, row, column) {
  var check = ebfGridGetValue(grid, row, column);
  if (check !== null){
    if(check === false) {
       return 0;
    }
    if(check === undefined || check === "") {
      return 2;
    }
    if(check === true) {
      return 1;
    }  
  }
}

/**
 * Essa fun��o obt�m informa��es do cabe�alho do componente grade informado por par�metro.<br/>
 *  <br/>
 * Par�metros:<br/>
 *  1. Formul�rio<br/>
 *  2. Componente.<br/>
 *  <br/>
 * Retorno:<br/>
 *  1. Objeto JSON com as informa��es do cabe�alho.<br/>
 *  <br/>
 * Observa��o:<br/>
 *  1. O objeto JSON retornado estar� no formato JSONArray.<br/>
 *  2. Caso a propriedade "Habilitar Coluna Num�rica" esteja defina como "true" essa tamb�m ser� retornada na posi��o 0 (zero);
 */
function ebfGridGetHeaderInfo (form, comp) {
  let grid = $c(comp);
  if(!grid) {
    handleExceptiton(new Error("O componente " + comp + "n�o encontrado."));
    return;
  }
  return grid.iscCanvas.getFields();
}

/**
 * Obt�m os grupos que est�o vis�veis na grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna uma lista contendo o nome de todos os grupos vis�veis na grade.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Obtem apenas os nomes dos grupos da raiz, ou seja, subgrupos n�o s�o obtidos. <br/>
 * Ex: Imagine uma �rvore seguindo o princ�pio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
 * <br/>
 * {<br/>
 *   "grupo1": {<br/>
 *     "subgrupo1": "valor1"<br/>
 *   },<br/>
 *   "grupo2": {<br/>
 *     "subgrupo2": "valor2"<br/>
 *   }<br/>
 * }<br/>
 * <br/>
 * Apenas os valores "grupo1" e "grupo2" v�o ser retornados.
 */
function ebfGridGetNameGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getNameGroups();
}

/**
 * Fun��o que retorna qual � o primeiro elemento real da grade, j� que a mesma pode ter paginada e n�o estar mais na<br/>
 * p�gina inicial.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o primeiro elemento real da grade (inteiro)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridGetOffset(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.gridini;
}

/**
 * Esta fun��o retorna a p�gina atual da grade informada como par�metro.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Componente Grade;<br/>
 * <br/>
 * Retorno:<br/>
 * A posi��o atual da pagina��o do componente 'Grade' informado.(Inteiro)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridGetPagingPosition(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";
  return (Math.ceil(toDouble(grid.gridini / grid.pagingSize))) + 1;    
}

/**
 * Obtem o nome real de uma coluna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade<br/>
 * 2. Nome da coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o nome real da coluna passada como par�metro.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridGetRealNameColumn(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getRealNameColumn(column);
}

/**
 * Essa fun��o retorna todos os registros contidos em um grupo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observa��o 1)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna uma lista de objetos JSON referente aos registros contidos no grupo.<br/>
 * <br/>
 * Observa��o: <br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o pr�prio Objeto do grupo, obtido atrav�s de regras de neg�cio.
 */
function ebfGridGetRecordsInGroup(grid, group) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";     

  return grid.getRecordsInGroup(group); 
}

/**
 * Fun��o que retorna a dist�ncia em pixels da barra de rolagem no sentido horizontal.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade cuja dist�ncia da barra de rolagem do topo se deseja obter.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a posi��o em pixel referente a barra de rolagem no sentido horizontal. (N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridGetScrollLeftValue(form, com){
  if (com)  
    return $c(com).getHorizontalScrollPosition();    
  return null;
}

/**
 * Fun��o que retorna a dist�ncia em pixels da barra de rolagem no sentido vertical<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a grade<br/>
 * 2. Nome do componente do tipo grade<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a posi��o em pixel referente a barra de rolagem no sentido vertical. (N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridGetScrollTopValue(form, com){
  if (com)  
    return $c(com).getVerticalScrollPosition();    
  return null;
}

/**
 * Essa fun��o retorna as informa��es das linhas selecionadas ou apenas o index das linhas.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Nome do Componente (Letras).<br/>
 * 2. Somente �ndices? (L�gico)(Ver observa��o 2)<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Lista de JSON com informa��es ou lista de �ndices (Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para que essa fun��o tenha o correto funcionamento o componente deve permitir a sele��o de m�ltiplas linhas, que pode ser habilitado por meio da fun��o "Grade - Permitir M�ltipla Sele��o de Linhas".<br/>
 * 2. Quando informado o valor como verdadeiro para o segundo par�metro a fun��o retornar� uma lista com os �ndices das linhas selecionadas, quando falso retornar� uma lista de JSON com informa��es das linhas.
 */
function ebfGridGetSelectedRecords (comp, onlyIndex) {
  let component = $c(comp);
  if (component) {
    if (component.iscCanvas.selectionType === 'multiple') {
      if (!onlyIndex) return component.getSelectedRecords();
      else return component.getSelectedRows(); 
    } 
    else return new Array();
  } else {
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));
    return;
  }
}

/**
 * Essa fun��o retorna o n�mero da linha selecionada na grade. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o n�mero da linha selecionada.(Inteiro) <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A numera��o das colunas come�am de 0 � N.<br/>
 * 2. Caso nenhuma linha esteja selecionada, ser� retornado o valor -1.<br/>
 * 3. Caso a pagina��o esteja ativa, ser� retornado o n�mero da linha da pagina��o ativa.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade �  "Sistemas". Passando esse par�metro, ao selecionar alguma linha da Grade <br/>
 * "Sistemas", o retorno ser� o n�mero da linha selecionada.
 */
function ebfGridGetSelectedRow(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getSelectedRow();
}

/**
 * Obt�m o grupo referente ao nome passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o objeto do grupo(JSON).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O retorno dessa fun��o n�o suporta a convers�o para letras.<br/>
 * 2. Obt�m apenas grupos contidos na raiz, ou seja, subgrupos n�o s�o obtidos. <br/>
 * Ex: Imagine uma �rvore seguindo o princ�pio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
 * <br/>
 * {<br/>
 *   "grupo1": {<br/>
 *     "subgrupo1": "valor1"<br/>
 *   },<br/>
 *   "grupo2": {<br/>
 *     "subgrupo2": "valor2"<br/>
 *   }<br/>
 * }<br/>
 * <br/>
 * Apenas os grupos "grupo1" e "grupo2" poder ser obtidos.
 */
function ebfGridGetSpecificGroup(gridName, group) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getSpecificGroup(group);
}

/**
 * Fun��o que retorna estado da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde o componente do tipo grade se encontra;<br/>
 * 2. Componente do tipo grade.<br/>
 * <br/>
 * Retorno:<br/>
 * "edi��o"    - se a grade estiver em modo de edi��o.<br/>
 * "inser��o" - se a grade estiver em modo de inser��o.<br/>
 * "normal"    - se estiver em modo normal.(Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridGetStatus(form, com){

  var grid = $c(com);
  if(!grid){
    throw "O componente passado � nulo!"
  }
  if(!(grid instanceof HTMLGrid)){
    throw "O componente passado por par�metro n�o � uma grade!"
  }
  
  if(grid.inserting){
    return "inser��o";
  }

  if(grid.editing){
    return "edi��o";
  }
  
  return "normal";
}

/**
 * Essa fun��o retorna o valor que est� na Grade, a partir da informa��o da linha<br/>
 *  (a primeira linha da Grade � a linha "0" (zero)) e a coluna que deseja obter o valor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade<br/>
 * 2. N�mero da Linha (N-1)<br/>
 * 3. Nome da Coluna<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido em uma determinada linha do componente. (Letras)<br/>
 * <br/>
 * Observa��o: O primeiro par�metro desta fun��o tamb�m pode ser modificado para a "Constante" do tipo "Letras",<br/>
 * sendo informado manualmente o nome do componente "Grade".<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.  Assumindo que o componente grade sendo "Grade de Cidades", o n�mero da linha sendo 0(zero) <br/>
 * e o nome da coluna sendo"PIB"(Produto Interno Bruto). O retorno ser� o valor que est� na linha 0 da coluna "PIB" <br/>
 * na "Grade de Cidades".
 */
function ebfGridGetValue(grid, row, column) {
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', gridName));
    return;
  }
  try {
    var ref = grid.iscCanvas;
    var rNc = grid.getRealNameColumn(column);
    var rec = null;
    if (grid.isGrouped())
      rec = ref.groupTree.getAllItems()[row];
    else {
      if (grid.isFiltered)
        rec = ref.getOriginalData().localData[row];
      else
        rec = ref.getDataSource().cacheData[row];
    }
    if ((rec[rNc] === '&nbsp;')||(rec[rNc] === null))
      return "";
    return rec[rNc];
  } catch (e) {
    handleException(getLocaleMessage('ERROR.GRID_NO_ROW_SELECTED'));
    return;
  }
}

/**
 * Obtem um valor espec�fico no sum�rio da Grade, a partir da informa��o do nome da coluna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Nome da Coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido do sum�rio da grade.<br/>
 * <br/>
 * Observa��o: <br/>
 * 1.� necess�rio habilitar Exibir Sum�rio Geral nas op��es de Agrupamento.
 */
function ebfGridGetValueInSummary(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";     

  return grid.getValueInSummary(column); 
}

/**
 * Obt�m um valor espec�fico no sum�rio de um grupo, a partir das informa��es fornecidas � fun��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observa��o 1)<br/>
 * 3. Nome da Coluna na qual se deseja obter a sumariza��o.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido do sum�rio de um grupo.<br/>
 * <br/>
 * Observa��o: <br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o pr�prio Objeto do grupo, obtido atrav�s de regras de neg�cio.<br/>
 * 2. Ao passar um Objeto, a sumariza��o vai respeitar os dados contidos nesse Objeto.
 */
function ebfGridGetValueInSummaryGroup(grid, group, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";     

  return grid.getValueInSummaryGroup(group, column); 
}

/**
 * Esta fun��o navega at� a posi��o da p�gina informada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade;<br/>
 * 2. Nova Posi��o da P�gina.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Necess�rio definir a pagina��o nas propriedades do componente.
 */
function ebfGridGoToPagingPosition(grid, newPagePosition) {  
  var grid = $c(grid);      
  if (newPagePosition == 1) {
    grid.paging.btFirst.children[0].click();  
  } else {
    if (!grid.paging.btNext.enabled)
       grid.paging.btFirst.children[0].click();       
    grid.paging.setGoto((newPagePosition -1) * grid.pagingSize);  
    grid.paging.btNext.children[0].click();    
  }
}

/**
 * Agrupa a grade a partir de uma coluna, informando o nome da grade e o nome da coluna que ser� agrupada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna a ser agrupada.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Ao passa uma coluna para ser agrupada e a mesma j� constar no agrupamento, a opera��o vai ser ignorada.<br/>
 * 2. Ao utilizar essa fun��o, a mesma vai levar em considera��o a propriedade 'M�ltiplos Grupos'.
 */
function ebfGridGroup(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.group(column);
}

/**
 * Essa fun��o acrescenta uma linha na grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGridInsertRow(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.includeNewRow();
}

/**
 * Essa fun��o acrescenta uma linha na grade e n�o d� refresh na grid, o que aumenta o desempenho.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A linha inserida apenas poder� ser visualizada se for utilizada a fun��o "Grade - Dar Refresh" posteriormente.
 */
function ebfGridInsertRowWithoutRefresh(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " n�o encontrado";

  grid.includeNewRow(true);
}

/**
 * Retorna se existe agrupamento na grade ou n�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor l�gico referente � exist�ncia do agrupamento.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridIsGrouped(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";    
  return grid.isGrouped();
}

/**
 * Obt�m o m�ximo valor de uma coluna. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� localizada a grade.<br/>
 * 2. Nome do componente Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor m�ximo referente ao campo informado (N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-r� o M�XIMO valor encontrado apenas dos dados visualizados na grade. <br/>
 * 1.2 Quando estiver usando a "pagina��o" ser� retornado o valor da pagina em quest�o/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verifica��o dos valores � feita em todos os registros da grid (podendo estes estarem paginados ou n�o). <br/>
 * 2.2 O retorno ser� do tipo 'Fracionado'. Independente se o campo for do tipo inteiro ou num�rico.<br/>
 * <br/>
 * 3. Modo de Inser��o/Altera��o<br/>
 * 3.1 Caso a fun��o venha a ser usada com o formul�rio estando no modo de inser��o ou altera��o, <br/>
 * dever� ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formul�rio seja: "Formul�rio Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'C�digo', 'Nome do Estado', 'PIB'. Assumindo que o 3 par�metro<br/>
 * seja o campo PIB(Produto Interno Bruto), ser� retornado o maior PIB encontrado.
 */
function ebfGridMaxColumn(form, grid, column) {
  var valor = 0;
  var maximo = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){ 
    handleException(new Error("Componente " + gridName + " n�o encontrado"));
    return;
  }
  var qtdLinhas = grid.getRowCount();
  var ref = grid.iscCanvas;
  for (var i =0; i<qtdLinhas ;i++){ 
    var data = ref.getRecord(i);
    var rNc = grid.getRealNameColumn(column);
    if(rNc === -1){
      handleException(new Error(getLocaleMessage("INFO.GRID_COLUMN_NOT_FOUND", column, grid.description ==="" ? gridName : grid.description)));
      return;
    }    
    valor = parseNumeric(data[rNc]);
    if(valor > maximo)
      maximo = valor;      
  }
  return maximo;   
}

/**
 * Obt�m o menor valor de uma determinada coluna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Formul�rio<br/>
 * 2. Nome da Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor m�nimo referente ao campo informado (N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-r� o m�nimo valor encontrado na grade. <br/>
 * 1.2 Quando estiver usando a "pagina��o" ser� retornado o m�nimo valor da coluna e da p�gina em quest�o/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verifica��o dos valores � feita em todos os registros da grid (podendo estes estarem paginados ou n�o). <br/>
 * 2.2 O retorno sempre ser� um valor fracionado.<br/>
 * <br/>
 * 3. Modo de Inser��o/Altera��o<br/>
 * 3.1 Caso a fun��o venha a ser usada com o formul�rio estando no modo de inser��o ou altera��o, <br/>
 * dever� ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formul�rio seja: "Formul�rio Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'C�digo', 'Nome do Estado', 'PIB'. Assumindo que o 3 par�metro<br/>
 * seja o campo PIB(Produto Interno Bruto), ser� retornado o m�nimo valor da coluna desejada.
 */
function ebfGridMinColumn(form, grid, column) {
  var valor = 0;
  var minimo = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid) {
    handleException(new Error("Componente " + gridName + " n�o encontrado"));
    return;
  } 
  var qtdLinhas = grid.getRowCount();
  var ref = grid.iscCanvas;
  for (var i =0; i<qtdLinhas ;i++){
    var data = ref.getRecord(i);
    var rNc = grid.getRealNameColumn(column);
    if(rNc === -1){
      handleException(new Error(getLocaleMessage("INFO.GRID_COLUMN_NOT_FOUND", column, grid.description ==="" ? gridName : grid.description)));
      return;
    }     
    valor = parseNumeric(data[rNc]);
    if(i == 0)
      minimo = valor;
    else if(valor < minimo)
      minimo = valor;      
  }
  return minimo;   
}

/**
 * Altera a largura de uma ou mais colunas de uma grade<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� localizada a grade.<br/>
 * 2. Componente grade a ser alterado.<br/>
 * 3. Lista com os nomes das colunas que ter�o a largura modificada.<br/>
 * 4. Lista contendo os valores da largura das colunas.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridModifyColumnsWidth(formName, gridName, columnList, widthList) {
  var grid = $c(gridName);
  if(!grid){
    handleException(new Error("Componente "+gridName+" n�o encontrado"));
    return;
  }
  grid.setSizeColumns(columnList, widthList);
}

/**
 * Expande todos os grupos e subgrupos existentes na Grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridOpenAllGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.openAllGroups();
}

/**
 * Expande um grupo passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observa��o 1)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o pr�prio Objeto do grupo, obtido atrav�s de regras de <br/>
 * neg�cio.<br/>
 * 2. Expande apenas grupos presentes da raiz, ou seja, subgrupos n�o s�o expandidos. <br/>
 * Ex: Imagine uma �rvore seguindo o princ�pio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
 * <br/>
 * {<br/>
 *   "grupo1": {<br/>
 *     "subgrupo1": "valor1"<br/>
 *   },<br/>
 *   "grupo2": {<br/>
 *     "subgrupo2": "valor2"<br/>
 *   }<br/>
 * }<br/>
 * <br/>
 * Apenas os grupos "grupo1" e "grupo2" podem ser expandidos(abertos).
 */
function ebfGridOpenGroup(gridName, group) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.openGroup(group);
}

/**
 * Abre o menu de configura��es do agrupamento.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1.� necess�rio habilitar Agrupamento M�ltiplo nas op��es de Agrupamento.
 */
function ebfGridOpenGroupConfig (grid) {
  var gridObj = $c(grid);
  if (!gridObj)
    throw "Componente "+grid+" n�o encontrado";    

    gridObj.openGroupConfig();
}

/**
 * Recarrega o componente grade com os dados atualizados em uma tabela (ResultSet) no servidor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfGridRefresh(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";    
  grid.actPaged = true;
  grid.paging.navigationAction(null, null, 'first');
}

/**
 * Atualiza o componente grade com os dados que j� est�o carregado em uma tabela (ResultSet) no servidor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1 - Esta fun��o n�o atualiza a grade com os dados correntes do banco de dados e sim de uma tabela j� carregada por uma consulta (cache) na primeira carga da grade. Para atualizar com dados corrente do banco, utilize a fun��o "Atualizar Componente" ou "Grade - Recarregar Dados".
 */
function ebfGridRefreshInClient (grid) {
  var comp = $c(grid);
  if(!comp){
    handleException(new Error("Componente " + grid + " n�o encontrado."));
    return false;
  }
  comp.actRefresh = true;
  comp.refreshData();
}

/**
 * Essa fun��o remove uma coluna da Grade. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso esta fun��o seja utilizada em um formul�rio que possua barra de navega��o, ser� necess�rio utiliza-la no evento<br/>
 * "Ao Navegar" do formul�rio, pois ao navegar a coluna que foi removida, ser� exibida novamente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Estado" e o nome da coluna sendo "UF". Ao chamar esta fun��o a coluna "UF" <br/>
 * ser� removida da grade "Estado".
 */
function ebfGridRemoveColumn(grid, column) {
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){
    handleException(new Error("Componente "+gridName+" n�o encontrado"));
    return;
  }
  grid.removeColumn(column);  
}

/**
 * Essa fun��o remove uma Linha da Grade. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. N�mero da Linha (De 0 � N)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Quando utilizada em uma grade com cor condicional, a remo��o da linha n�o implicar� na redefini��o da <br/>
 * condi��o(propriedade cor condicional) da(s) linha(s) posterior(es) � linha exclu�da.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Grade de Ve�culos" e o n�mero da linha sendo 2. Ao usar esta fun��o<br/>
 * a linha 2 ser� removida, assim como todo valor encontrado na mesma.
 */
function ebfGridRemoveRow(grid, row) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.removeDataRow(row);
}

/**
 * Essa fun��o retorna o total de linha que existe na grade. Informando apenas a Grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o total de linha da Grade.(Inteiro) <br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso a propriedade pagina��o esteja ativada � retornado o total de linhas da pagina��o em quest�o<br/>
 * 2. Para retornar o total geral de linhas, desative a propriedade pagina��o.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Usu�rios". Passando esse par�metro, ao chamar a fun��o, o retorno ser� o total de<br/>
 * linhas da Grade "Usu�rios".
 */
function ebfGridRowCount(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.getRowCount();
}

/**
 * Essa fun��o seleciona uma Linha da Grade. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. N�mero da Linha (De 0 � N)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Grade de Ve�culos" e o n�mero da linha sendo 2. Ao usar esta fun��o<br/>
 * a linha 2 ser� selecionada, assim como todo valor encontrado na mesma.
 */
function ebfGridSelectRow(grid, row) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";  
  var lastRow = grid.getSelectedRow();  
  if(lastRow >= 0)  
    grid.clearSelectedRows(lastRow);      
  grid.timeout(grid.selectRow, 0, [parseInt(row)]);  
  grid.timeout(grid.selectionChanged, 0, []);
  grid.timeout(grid.moveScrollToRow, 0, [parseInt(row)]);  
  if (row < 0)
    grid.currentRow = -1;
}

/**
 * Essa fun��o alterar o alinhamento de um coluna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente (Letras).<br/>
 * 2. Nome da Coluna (Letras).<br/>
 * 3. Alinhamento (Letras) (Ver Observa��o 1).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O terceiro par�metro aceita os seguintes valores para alinhamento do conte�do:<br/>
 * D (Direita)<br/>
 * E (Esquerda)<br/>
 * C (Centro)<br/>
 * 2. Essa fun��o n�o tem aplicabilidade quando o componente est� em modo de inclus�o ou edi��o.
 */
function ebfGridSetAlignColumn(comp, nameColumn, align) {
  let component = $c(comp);
  if (component) {
    if (!component.inserting && !component.editing) {    
      const aligns = { "C": "center", "D": "right", "E": "left" };
      if (align && aligns[align]) {
        let idx = component.iscCanvas.getFieldNum(component.getRealNameColumn(nameColumn));
        if (idx >= 0) {          
          component.iscCanvas.setFieldProperties(idx, { 'align': aligns[align] });
          component.iscCanvas.markForRedraw();
        } else {
          handleException(getLocaleMessage('INFO.GRID_COLUMN_NOT_FOUND', nameColumn, comp));
          return;
        }
      } else {
        console.error("O valor informado para alinhamento n�o suportado");
        return;
      }
    } else {
      console.error("O componente " + comp + " n�o pode est� em modo de inclus�o/edi��o");
      return;
    }
  } else {
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));
    return;
  }
}

/**
 * Altera o valor de todos os  CheckBoxes de uma coluna da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna que se encontra o componente CheckBox.<br/>
 * 3. Valor inteiro (0 - Desmarcar, 1- Marcar, 2 - Neutro).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGridSetAllCheckValue(grid, column, value) {  
  var totalRows = ebfGridRowCount(grid);
  if (totalRows > 0) {    
    var cgrid = $c(grid);    
    var idx = cgrid.iscCanvas.showRowNumbers ? (cgrid.findColumn(column)-1) : cgrid.findColumn(column)
    var com = cgrid.components[idx];
    var compCheck = "componentCheck"+com;     
    var counter = 0;
    while (counter < totalRows){
      cgrid.data[counter][cgrid.getRealNameColumn(column)] = cgrid.gridCheckBox(value, cgrid[compCheck]['valueCheck'], cgrid[compCheck]['valueUnCheck'], com, counter+1, null, null);     
      counter++
    }    
    cgrid.refreshData();
  }
}

/**
 * Essa fun��o altera a altura das linhas do componente grade de acordo o valor especificado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * 2. Altura (Inteiro)(Ver observa��o 2).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o altera altura do cabe�alho, filtro e c�lulas.<br/>
 * 2. O componente possui limites para a defini��o de altura das c�lulas, sendo assim, o valor m�nimo permitido para a altura da linha � 24 e o valor m�ximo permitido 35.
 */
function ebfGridSetCellHeight (comp, height) {
  const component = $c(comp);
  if (!component) {
    handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));
    return false;
  }
  if (height) {    
    height = parseInt(height); 
    if (isNaN(height)) {
      console.error("O valor informado no segundo par�metro n�o � um inteiro v�lido");
      return;
    }
    const max_height = 35; //Altura padr�o do componente.
    const min_height = 24; //Altura m�nima para o componente.
    if (height > max_height) height = max_height;
    else if (height < min_height) height = min_height;  
    component.iscCanvas.setHeaderHeight(height);
    component.iscCanvas.setCellHeight(height);
    if (component.enableSimpleFilter) component.iscCanvas.filterEditor.setHeight(height);
  }
}

/**
 * Altera o valor do CheckBox na grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. N�mero da Linha<br/>
 * 3. Nome da Coluna que se encontra o componente CheckBox<br/>
 * 4. Valor inteiro (0- Desmarcar, 1- Marcar,  2- Nulo).<br/>
 * <br/>
 * Retorno<br/>
 * N�o Possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui intera��o com o banco de dados, ou seja, s� modifica o valor na grade, por�m o conte�do no banco continua<br/>
 * sendo o mesmo.
 */
function ebfGridSetCheckValue (grid, row, column, value) {  
  if (value == 0 || value == 1 || value == 2) {
    var cgrid = $c(grid);
    var idx = cgrid.iscCanvas.showRowNumbers ? (cgrid.findColumn(column)-1) : cgrid.findColumn(column);
    var com = cgrid.components[idx];
    var compCheck = "componentCheck"+com;
    if (cgrid.isGrouped()) row = cgrid.getRowDBCursor();
    cgrid.data[row][cgrid.getRealNameColumn(column)] = cgrid.gridCheckBox(value, cgrid[compCheck]['valueCheck'], cgrid[compCheck]['valueUnCheck'], com, row, null, null);
    cgrid.refreshData();    
  }
}

/**
 * Altera a cor de uma linha da grade ou apenas algumas colunas da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a grade.<br/>
 * 2. Componente grade que se deseja mudar a cor.<br/>
 * 3. Linha que deve ser alterada (N -1).<br/>
 * 4. Cor desejada.<br/>
 * 5. Lista contendo as colunas que devem ser pintadas (primeira coluna � 0 (N-1)).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Caso o par�metro 5 seja definido como Nulo, ent�o toda a linha ser� pintada.
 */
function ebfGridSetColor(form, gridName, line, color, columns) {
  var gridObj = $c(gridName, form);
  if (!gridObj) {
    handleException(new Error("Grid \"" + gridName + "\" not found."));
    return;
  }  
  line = parseInt(line);
  var jCond = {};
  jCond.color = color;
  jCond.row = line;  
  if (columns != null && columns.length > 0) {
    jCond.colsPaint = columns;
  }

  gridObj.conditionExpressionFlow.push(jCond);
  gridObj.iscCanvas.markForRedraw();
}

/**
 * Essa fun��o modifica o nome de uma coluna da Grade. Informando a Grade, o nome da coluna que deseja alterar e o <br/>
 * novo nome dela.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * 3. Nome que deseja atribuir � coluna<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Cursos de Computa��o", e o nome da coluna sendo "Descri��o da Mat�ria",<br/>
 * e o nome que se deseja atribuir a coluna sendo "Descri��o do Curso". Passando essas informa��es o nome da coluna<br/>
 * que anteriormente era "Descri��o da Mat�ria" ser� alterado para "Descri��o do Curso".
 */
function ebfGridSetColumn(grid, column, newColumn) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  return grid.setColumn(column, newColumn);
}

/**
 * Essa fun��o modifica o modo de filtro do componente grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente<br/>
 * 3. Modo (inClient/inServer)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfGridSetFilterMode (form, comp, mode) {
  let grid = $c(comp);
  if (grid) {
    if(grid.enableSimpleFilter && mode && mode.length > 0){
      mode = mode.toUpperCase();
      mode = mode === 'INCLIENT' ? 0 : mode === 'INSERVER' ? 1 : 0;
      grid.filterMode = mode;
    }
  } else {
    handleException(new Error('Componente ' + comp + ' n�o encontrado'));
    return false;
  }
}

/**
 * Atribui um valor para a coluna especificada no 3� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. N�mero da Linha (De 0 � N-1).<br/>
 * 3. Nome da Coluna.<br/>
 * 4. Valor a ser atribu�do.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. � necess�rio que o componente Grade informado esteja em modo normal.
 */
function ebfGridSetValue(grid, row, column, value) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.setCellDataByColumn(row, column, value);
}

/**
 * Atribui um valor para a coluna especificada no 3� par�metro. O valor atribu�do n�o ser� exibido at� que a fun��o<br/>
 * "Grade - Dar Refresh" seja utilizada na grade que teve o valor da coluna atribu�do.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. N�mero da Linha (De 0 � N-1).<br/>
 * 3. Nome da Coluna.<br/>
 * 4. Valor a ser atribu�do.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. � necess�rio que o componente Grade informado esteja em modo normal.
 */
function ebfGridSetValueNoRefresh(grid, row, column, value) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 

  grid.data[row][grid.iscCanvas.getAllFields()[grid.findColumn(column)].name] = value;
}

/**
 * Esta fun��o exibe ou esconde a barra de edi��o de um componente grade passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente<br/>
 * 2. Valor l�gico<br/>
 * 3. Bloquear Edi��o ao Duplo Clicar? (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A barra de edi��o � a interface de inser��o, atualiza��o, edi��o e exclus�o.<br/>
 * 2. Ao informar o valor verdadeiro para o terceiro par�metro o componente ir� bloquear a edi��o do mesmo no duplo clique da linha.
 */
function ebfGridSetVisibleMainButtons(componentGrid, visible, lockEditable) {
  var component = $c(componentGrid);
  if (component) {
    if(component.editable){
      if(component.editing || component.inserting){
        component.nav.normal();
      }
      component.nav.showNav(visible);
    }
    component.lockEditable = Boolean(lockEditable);
  } else {
    handleException("ERRRO.COMPONENT_FIELD_NOT_FOUND", componentGrid);
    return false;
  }
}

/**
 * Esta fun��o mostra a coluna de uma grade se a condi��o passada no quarto par�metro for verdadeira, ou oculta <br/>
 * caso a condi��o seja falsa.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a grade<br/>
 * 2. Componente Grade<br/>
 * 3. Nome da coluna<br/>
 * 4. Condi��o para mostrar a coluna<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. � poss�vel obter os valores da coluna mesmo ap�s ter sido ocultada.
 */
function ebfGridShowColumn(pForm, nameGrid, nameColumn, show) {  
  var grade = $c(nameGrid);
  if(!grade){
    handleException(new Error("Componente "+nameGrid+" n�o encontrado"));
    return;
  }
  grade.setShowColumn(nameColumn, show);
}

/**
 * Exibe ou oculta o sum�rio da grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Exibir?.(L�gico)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o: <br/>
 * N�o possui.
 */
function ebfGridShowGridSummaryRow(grid, show) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado";     

  return grid.showGridSummaryRow(show); 
}

/**
 * Essa fun��o obtem o somat�rio dos os valores de um determinado campo de uma coluna na grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Formul�rio onde se encontra o componente grade<br/>
 * 2. Componente grade<br/>
 * 3. Nome da Coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Somat�rio referente ao campo informado(N�mero)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-r� a soma dos valores de uma determinada coluna na grade. <br/>
 * 1.2 Quando estiver usando a "pagina��o" ser� retornado a soma dos valores da coluna e da p�gina em quest�o/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 O somat�rio dos valores da coluna � feita em todos os registros da grid (podendo estes estarem paginados ou n�o).<br/>
 * <br/>
 * 3. Essa fun��o n�o pode ser utilizada em um fluxo servidor se for chamada a partir do evento "Ao modificar da Grade".<br/>
 * <br/>
 * Exemplos.<br/>
 * 1. Assumindo que o nome do Formul�rio seja: "Formul�rio Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'C�digo', 'Nome do Estado', 'PIB'. Assumindo que o 3 par�metro<br/>
 * seja o campo PIB(Produto Interno Bruto), ser� retornado a soma de todos os PIBs da coluna desejada.<br/>
 * 2. Assumindo que temos um campo IDADE e que os mesmos existes os seguintes valores ( 18,25,14,32,30,29 ).<br/>
 * O valor retornado ser�: (148), pois 18+25+14+32+30+29 = 148.
 */
function ebfGridSumColumn(form, grid, column) {
  var sum = 0;
  var total = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){
    handleException(new Error("Componente "+gridName+" n�o encontrado"));
    return;
  }  
  var qtdLinhas = grid.getRowCount();   
  var ref = grid.iscCanvas;
  for (var i =0; i<qtdLinhas ;i++){
    var data = grid.isFiltered ? ref.getOriginalData().localData[i] : ref.getDataSource().cacheData[i];
    var rNc = grid.getRealNameColumn(column);
    if(rNc === -1){
      handleException(new Error(getLocaleMessage("INFO.GRID_COLUMN_NOT_FOUND", column, grid.description ==="" ? gridName : grid.description)));
      return;
    }      
    sum = parseNumeric(data[rNc]);
    total = total + sum;      
  }
  return total;   
}

/**
 * Desagrupa a grade a partir de uma coluna, informando o nome da grade e o nome da coluna que ser� desagrupada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna.(Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o nome da coluna n�o seja passada, todos os agrupamentos ser�o removidos.
 */
function ebfGridUngroup(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" n�o encontrado"; 
  grid.ungroup(column);
}

/**
 * Executa um fluxo ao utilizar a navega��o do componente Grade.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra a grade;<br/>
 * 2. Componente grade que a fun��o ser� associada;<br/>
 * 3. Fluxo que ser� associado � grade;<br/>
 * 4. Lista de par�metros do fluxo (par�metro 3).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui
 */
function ebfGrigExecuteFlowOnPage(form, componentName, ruleName, ruleParams) {
  var component = $c(componentName, form);
  if ((component instanceof HTMLGrid) && (component.paging)) {
    var localRuleName = ruleName;
    var localRuleParams = ruleParams;
    component.paging.onnavigate = function() {
      ebfFlowExecute(localRuleName, localRuleParams);
    };
  }
}

/**
 * Essa fun��o adiciona ou remove a barra de rolagem (x, y) de uma moldura tomando como basse os par�metros informados.<br/>
 * <br/>
 * Par�metros<br/>
 * 1. Nome do componente  moldura.<br/>
 * 2. Barra de rolagem do eixo X.<br/>
 * 3. Barra de rolagem do eixo Y.<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O conte�do dos par�metros de entrada 2 e 3 s�o:<br/>
 * hidden - Oculta a barra de rolagem<br/>
 * none   - Exibi a barra de rolagem<br/>
 * auto   -  Deixa a barra de rolagem autom�tica
 */
function ebfGroupBoxAddScroll(component,scrollX,scrollY) {
  if($c(component)) {
    var cdiv = $c(component).div;  
    if (cdiv) {
      cdiv.style.overflowY = ebfTrim(scrollY);  
      cdiv.style.overflowX = ebfTrim(scrollX);
    }
  }
}

/**
 * For�a a remo��o do conte�do da moldura.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio da moldura<br/>
 * 2. Componente moldura<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxClean(formName, componentName) {
  var component = $c(componentName, formName);  
  if (component instanceof HTMLGroupBox) {  
    component.div.innerHTML = "";
  }
}

/**
 * Esta fun��o habilita ou n�o o componente moldura e todos os componentes que estiverem "dentro" da �rea do mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura<br/>
 * 2. Valor l�gico que habilita ou desabilita os componentes.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxEnabledComponents(groupBoxName, enable){
  var groupBox = $c(groupBoxName);
  
  if (groupBox instanceof HTMLGroupBox) {
    var rightLimit = (groupBox.getX() + groupBox.getWidth());
    var bottomLimit = (groupBox.getY() + groupBox.getHeight());
    
    var elements = controller.getElementsByDiv(d.t.tabsByName[groupBox.getTabName()].div);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element != groupBox) {
        if (element.getX() >= groupBox.getX() && element.getX() <= rightLimit) {
          if (element.getY() >= groupBox.getY() && element.getY() <= bottomLimit) {
            if (isNullable(element.parentPanelCode)) {
              element.setEnabled(enable);
            }
          }
        }
      }
    }

    groupBox.setEnabled(enable);
  }
}

/**
 * Essa fun��o recebe como par�metro o nome da moldura e retorna a posi��o da barra de rolagem.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Posi��o da barra de rolagem ( Inteiro)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxGetScrollPositionLeft (component){  
   var c = $c(component).div;
     return c.scrollLeft;

  }

/**
 * Essa fun��o recebe como par�metro o nome da moldura e retorna a posi��o da barra de rolagem.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Posi��o da barra de rolagem<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxGetScrollPositionTop (component){  
   var c = $c(component).div;
     return c.scrollTop;

  }

/**
 * Esta fun��o move o componente moldura e todos os componentes que estiverem "dentro" da �rea do mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura (Componente)<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Esta fun��o simula a funcionalidade de um Region (container)
 */
function ebfGroupBoxMoveComponents(groupBoxName, posX, posY) {  
  var groupBox = $c(groupBoxName);
  var diffDistanceX = (posX - groupBox.getX());
  var diffDistanceY = (posY - groupBox.getY());

  if (groupBox instanceof HTMLGroupBox) {
    var rightLimit = (groupBox.getX() + groupBox.getWidth());
    var bottomLimit = (groupBox.getY() + groupBox.getHeight());
    
    var elements = controller.getElementsByDiv(d.t.tabsByName[groupBox.getTabName()].div);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element != groupBox) {
        if (element.getX() >= groupBox.getX() && element.getX() <= rightLimit) {
          if (element.getY() >= groupBox.getY() && element.getY() <= bottomLimit) {
            if (isNullable(element.parentPanelCode)) {
              element.setX(element.getX() + diffDistanceX);
              element.setY(element.getY() + diffDistanceY);
            }
          }
        }
      }
    }

    groupBox.setX(posX);
    groupBox.setY(posY);
  }
}

/**
 * Fun��o que cria um novo componente Moldura dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (caso n�o seja definida, a aba ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descri��o do componente.<br/>
 * 7. Nome do componente<br/>
 * 8. Estilo ( 1.Moldura 2.Linha Acima 3.Linha Baixo 4.Linha � Esquerda 5. Linha � Direita 6.Espa�o ).<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxNew(aba,posX,posY,width,height,description,value,estilo){
  var code = getCodComponent();
  var component = new HTMLGroupBox(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, value);
  component.id = value;    
  component.style = estilo;
  component.zindex = 1;
  component.loadComponentTime = 0;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  component.design(container.div, true);
  document['c_' + code] = component;
}

/**
 * Remove Componentes da Moldura<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxRemoveComponents(groupBoxName){
  var groupBox = $c(groupBoxName);
  
  if (groupBox instanceof HTMLGroupBox) {
    var rightLimit = (groupBox.getX() + groupBox.getWidth());
    var bottomLimit = (groupBox.getY() + groupBox.getHeight());
    
    var elements = controller.getElementsByDiv(d.t.tabsByName[groupBox.getTabName()].div);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element != groupBox) {
        if (element.getX() >= groupBox.getX() && element.getX() <= rightLimit) {
          if (element.getY() >= groupBox.getY() && element.getY() <= bottomLimit) {
            if (isNullable(element.parentPanelCode)) {
              if(element.id) {
                ebfDestroyComponent(element.id);
              }
            }
          }
        }
      }
    }
     ebfDestroyComponent(groupBox .id);
  }
}

/**
 * Essa fun��o recebe o nome da moldura e altera a posi��o da barra de rolagem horizontal da mesma de acordo com o segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura<br/>
 * 2. Posi��o da barra de rolagem (inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxSetPositionScrollLeft(component,position){
  if($c(component)) {
    var cdiv = $c(component).div;  
        cdiv.scrollLeft = position;
  }
}

/**
 * Essa fun��o recebe o nome da muldura e altera a posi��o da barra de rolagem da mesma de acordo com o <br/>
 * segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da moldura<br/>
 * 2. Posi��o da barra de rolagem (inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxSetPositionScrollTop(component,position){
  if($c(component)) {
    var cdiv = $c(component).div;  
        cdiv.scrollTop = position;
  }
}

/**
 * Esta fun��o mostra ou oculta o componente moldura e todos os componentes que estiverem "dentro" da �rea do mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura<br/>
 * 2. Valor l�gico que exibe ou oculta os componentes.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxShowComponents(groupBoxName, visible){
  var groupBox = $c(groupBoxName);
  
  if (groupBox instanceof HTMLGroupBox) {
    var rightLimit = (groupBox.getX() + groupBox.getWidth());
    var bottomLimit = (groupBox.getY() + groupBox.getHeight());
    
    var elements = controller.getElementsByDiv(d.t.tabsByName[groupBox.getTabName()].div);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element != groupBox) {
        if (element.getX() >= groupBox.getX() && element.getX() <= rightLimit) {
          if (element.getY() >= groupBox.getY() && element.getY() <= bottomLimit) {
            if (isNullable(element.parentPanelCode)) {
              element.setVisible(visible);
            }
          }
        }
      }
    }

    groupBox.setVisible(visible);
  }
}

/**
 * Moldura - Alterar Profundidade dos Componentes<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente Moldura<br/>
 * 2. �ndice de Profundidade<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfGroupBoxZindexComponents(groupBoxName,zIndex){
  var groupBox = $c(groupBoxName);
  
  if (groupBox instanceof HTMLGroupBox) {
    var rightLimit = (groupBox.getX() + groupBox.getWidth());
    var bottomLimit = (groupBox.getY() + groupBox.getHeight());
    
    var elements = controller.getElementsByDiv(d.t.tabsByName[groupBox.getTabName()].div);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element != groupBox) {
        if (element.getX() >= groupBox.getX() && element.getX() <= rightLimit) {
          if (element.getY() >= groupBox.getY() && element.getY() <= bottomLimit) {
            if (isNullable(element.parentPanelCode)) {
              if(element.id) {
                ebfFormZindex(groupBoxName,zIndex+1);
              }
            }
          }
        }
      }
    }
     ebfFormZindex(groupBoxName,zIndex);
  }
}

/**
 * Alterar valor de uma celula da Tabela<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. GUID da Celula<br/>
 * 2. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfHTMLTableCellChangeValue (cell,value) {
	var c = document.getElementById(cell);
	c.innerHTML = value;
}

/**
 * Obt�m o valor da c�lula passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. C�lula<br/>
 * <br/>
 * Retorno:<br/>
 * Valor da c�lula
 */
function ebfHTMLTableCellGetValuex (cell) {
	var c = document.getElementById(cell);
        return 	c.innerHTML;
}

/**
 * Cria uma tabela em uma moldura<br/>
 * <br/>
 * Par�metros:<br/>
 * <br/>
 * 1. Formul�rio<br/>
 * 2. Moldura<br/>
 * 3. Largura da tabela (Opcional)<br/>
 * 4. Altura da tabela(Opcional)<br/>
 * 5. Cor do plano de fundo (Opcional)<br/>
 * 6. Largura da borda (Opcional)<br/>
 * 7. Cor da borda (Opcional)<br/>
 * 8. Espa�amento entre as c�lulas (Opcional)<br/>
 * 9. Espa�amento entre o texto e as bordas da c�lula (Opcional)<br/>
 * 10. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * 11. Barra de Rolagem (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da tabela
 */
function ebfHTMLTableCreate(form, componentName, width, height, bgColor, border, borderColor, cellSpace, cellPad, style, scroll){

  //Obt�m a moldura
  var component = $c(componentName);

  // Verifica se existe a moldura
  if  (component){
  
    var div = getDiv(id, 0, 0, component.getWidth(), component.getHeight(), 1000010, true);

    // Obt�m o id da tabela
    var id = 'table' + parseInt((Math.random() * 9999999));

    //Criar Elementos tbody e table
    var tbody = document.createElement("tbody");
    var table = document.createElement("table");

    //Obt�m o tamanho da borda
    var tableBorder;
    if  (!(border) ||  (border < 0)){
      tableBorder = 0;
    } else {
      tableBorder = border;
    }

    //Obt�m a largura da tabela
    var tableWidth;
    if (!(width) || (width <= 0)){
      tableWidth = component.getWidth();
    } else {
      tableWidth = width;
    }

    //Obt�m a altura da tabela
    var tableHeight;
    if (!(height) || (height <= 0)){
      tableHeight = component.getHeight();
    } else {
      tableHeight = height;
    }


    //Obt�m o espa�amento entre as c�lulas
    var tableCellSpace;
    if (!(cellSpace) ||  (cellSpace < 0)){
      tableCellSpace = 0;
    } else {
      tableCellSpace = cellSpace;
    }
 
    //Obt�m o espa�amento para as bordas
    var tableCellPad;
    if (!(cellPad) ||  (cellPad < 0)){
      tableCellPad= 0;
    } else {
      tableCellPad= cellPad;
    }

    //Altera os atributos da tabela
    table.setAttribute("id",id);
    table.setAttribute("name",id);
    table.setAttribute("width",tableWidth + "px");
    table.setAttribute("height",tableHeight + "px");
    
    table.setAttribute("border",tableBorder + "px");
    table.setAttribute("cellpadding",tableCellSpace);
    table.setAttribute("cellspacing",tableCellPad);
    if (borderColor)
      table.setAttribute("borderColor",borderColor);
  
    if (bgColor)
      table.setAttribute("bgColor",bgColor);
                 
    this._setStyle = function( object, styleText ) { 
      if( object.style.setAttribute ) { 
        object.style.setAttribute("cssText", styleText ); 
      } else { 
        object.setAttribute("style", styleText ); 
      } 
    }

    if (style) {    
      if (style.indexOf(":") == -1) {
        table.className = style;    
      } else {      
        this._setStyle(table, style); 
      }  
    }
  
    table.appendChild(tbody);
    div.appendChild(table);
    if (scroll)
      div.style.overflow = "scroll";
    component.div.innerHTML = "";
    component.div.appendChild(div);

    document.ebfHTMLTable = id; 
    return id;
  }
}

/**
 * Insere uma c�lula em uma linha<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Linha<br/>
 * 3. Largura da c�lula (Opcional)<br/>
 * 4. Alinhamento (Opcional)<br/>
 *     Valores aceitados:   <br/>
 *        + left (Esquerda)<br/>
 *        + center (Centro)<br/>
 *        + right (Direita)<br/>
 * 5. Cor do fundo (Opcional)<br/>
 * 6. Cor da borda (Opcional)<br/>
 * 7. Quantidade de linhas ocupadas (Opcional)<br/>
 * 8. Quantidade de colunas ocupadas (Opcional)<br/>
 * 9. Conte�do (Opcional)<br/>
 * 10. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da c�lula<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O par�metro dois � obtido com a fun��o "Tabela - Inserir linha em uma tabela"<br/>
 * 2. Para a utiliza��o da fun��o no servidor � necess�rio passar o par�metro "Linha" em branco e ter utilizado <br/>
 *      a fun��o "Tabela - Inserir linha em uma tabela"  antes. A c�lula ir� ser inserida na �tima linha criada na tela.
 */
function ebfHTMLTableCreateCell(form, row, width, align, bgColor, borderColor, rowspan, colspan, text, style){
                                  
  if (!row){
    if (document.ebfHTMLTableRow){
      row = document.ebfHTMLTableRow;
    }else{
      return;
    }  
  }

  //Obt�m a linha
  var component = $w(row);

  // Verifica se existe a tabela
  if  (component){
    // Obt�m o id da c�lula
    var id = 'td' + parseInt((Math.random() * 9999999));
  
    //Criar Elemento td
    var td = document.createElement("td");

    //Obt�m a largura da c�lula
    var cellWidth;
    if ((width) && (width <= 0)){
       cellWidth= 1;
    } else {
       cellWidth= width;
    }

    //Altera os atributos da c�lula
    td.setAttribute("id",id);
    td.setAttribute("width",cellWidth); 

    if ((align == 'left') || (align == 'center') || (align == 'right'))
      td.setAttribute("align",align);
 
    if ((colspan) && (colspan > 1))
      td.setAttribute("colSpan",colspan);

    if ((rowspan) && (rowspan> 1))
      td.setAttribute("rowSpan",rowspan);

    if (borderColor)
      td.setAttribute("borderColor",borderColor);
 
    if (bgColor)
      td.setAttribute("bgColor",bgColor);

   /* if (style)
      td.className = style;
     */     
      this._setStyle = function( object, styleText ) { 
      if( object.style.setAttribute ) { 
        object.style.setAttribute("cssText", styleText ); 
      } else { 
        object.setAttribute("style", styleText ); 
      } 
    }

    if (style) {    
      if (style.indexOf(":") == -1) {
        td.className = style;    
      } else {      
        this._setStyle(td, style); 
      }  
    }
    //Cria um elemento texto;
    //var elementText = document.createTextNode(text);

    //Adiciona o texto na c�lula
    //td.appendChild(elementText);
    td.innerHTML = text;
  
    //Adiciona a c�lula na linha
    component.appendChild(td);
  
    return id;       
  }
}

/**
 * Insere uma linha em uma tabela<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Tabela<br/>
 * 3. Cor de fundo (Opcional)<br/>
 * 4. Cor da borda (Opcional)<br/>
 * 5. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da linha criada<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O par�metro dois � o retorno da fun��o "Tabela - Criar tabela em uma moldura"<br/>
 * 2. Para a utiliza��o da fun��o no servidor � necess�rio passar o par�metro "Tabela" em branco e ter utilizado <br/>
 *      a fun��o "Tabela - Inserir linha em uma tabela"  antes. A linha ir� ser inserida na �tima tabela criada na tela.
 */
function ebfHTMLTableCreateRow(form, table, bgColor, borderColor, style){

  //Obt�m a tabela
  if (!table)
    if (document.ebfHTMLTable){
      table = document.ebfHTMLTable;
    }else{
      return;
    }
  var component = $w(table);               
 
  // Verifica se existe a tabela
  if  (component){ 
    var tbody = component.firstChild;
                     
    // Obt�m o id da linha
    var id = 'tr' + parseInt((Math.random() * 9999999));
  
    //Criar Elemento tr
    var tr = document.createElement("tr");

    //Altera os atributos da linha
    tr.setAttribute("id",id);
 
    if (borderColor)
      tr.setAttribute("borderColor",borderColor);
 
    if (bgColor)
      tr.setAttribute("bgColor",bgColor);

    /*if (style)
      tr.className = style;*/         
     
    this._setStyle = function( object, styleText ) { 
      if( object.style.setAttribute ) { 
        object.style.setAttribute("cssText", styleText ); 
      } else { 
        object.setAttribute("style", styleText ); 
      } 
    }

    if (style) {    
      if (style.indexOf(":") == -1) {
        tr.className = style;    
      } else {      
        this._setStyle(tr, style); 
      }  
    }

    //Adiciona a linha na tabela
    tbody.appendChild(tr);
    document.ebfHTMLTableRow = id;
    return id;
  }
}

/**
 * Cria uma tabela a partir de uma lista de listas<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Moldura<br/>
 * 3. Largura da tabela (Opcional)<br/>
 * 4. Altura da tabela (Opcional)<br/>
 * 5. Tamanho da borda da tabela (Opcional)<br/>
 * 6. Lista de listas de elementos <br/>
 * 7. Alinhamento (Opcional)<br/>
 *     Valores aceitados:   <br/>
 *        + left (Esquerda)<br/>
 *        + center (Centro)<br/>
 *        + right (Direita)<br/>
 * 8. Cor de fundo da tabela (Opcional)<br/>
 * 9. Cor da borda da tabela (Opcional)<br/>
 * 10. Cor de fundo da c�lula (Opcional)<br/>
 * 11. Espa�amento entre as c�lulas (Opcional)<br/>
 * 12. Espa�amento entre o texto e as bordas da c�lula (Opcional)<br/>
 * 13. Estilo das c�lulas (Opcional) Ex: "background-color: #000000"<br/>
 * 14. Barra de Rolagem (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHTMLTableCreateWithArray(form, componentName, width, height, border, rowList, align, bgColor, borderColor, cellBgColor, cellSpace, cellPad, style, scroll){
  //Obt�m a moldura
  var component = $c(componentName);

  // Verifica se existe a moldura
  if  (component){
    var div = getDiv(id, 0, 0, component.getWidth(), component.getHeight(), 1000010, true);

    // Obt�m o id da tabela
    var id = 'table' + parseInt((Math.random() * 9999999));
    //Criar Elementos tbody e table
    var tbody = document.createElement("tbody");
    var table = document.createElement("table");      

    //Obt�m o tamanho da borda
    var tableBorder;
    if  (!(border) ||  (border < 0)){
      tableBorder = 0;
    } else {
      tableBorder = border;
    }
    //Obt�m a largura da tabela
    var tableWidth;
    if (!(width) || (width <= 0)){
      tableWidth = component.getWidth();
    } else {
      tableWidth = width;
    }
    //Obt�m a altura da tabela
    var tableHeight;
    if (!(height) || (height <= 0)){
      tableHeight = component.getHeight();
    } else {
      tableHeight = height;
    }
    //Obt�m o espa�amento entre as c�lulas
    var tableCellSpace;
    if (!(cellSpace) ||  (cellSpace < 0)){
      tableCellSpace = 0;
    } else {
      tableCellSpace = cellSpace;
    }      
    //Obt�m o espa�amento para as bordas
    var tableCellPad;
    if (!(cellPad) ||  (cellPad < 0)){
      tableCellPad= 0;
    } else {
      tableCellPad= cellPad;
    }           

    //Altera os atributos da tabela
    table.setAttribute("id",id);
    table.setAttribute("name",id);
    table.setAttribute("width",tableWidth + "px");
    table.setAttribute("height",tableHeight + "px");

    table.setAttribute("border",tableBorder + "px");
    table.setAttribute("cellpadding",tableCellSpace);
    table.setAttribute("cellspacing",tableCellPad);
    if (borderColor)
      table.setAttribute("borderColor",borderColor);
    if (bgColor)
      table.setAttribute("bgColor",bgColor);                      


    var idCell, idRow, tr, td, cellList, cellText;
      
    for (indexRow = 0; indexRow < rowList.length; indexRow++){
      // Obt�m o id da linha
      idRow = 'tr' + parseInt((Math.random() * 9999999));
      //Criar Elemento tr
      tr = document.createElement("tr");      

      //Altera os atributos da linha
      tr.setAttribute("id",idRow);

      cellList = rowList[indexRow];

      for ( indexCell = 0; indexCell < cellList.length; indexCell++){
        // Obt�m o id da c�lula
        idCell = 'td' + parseInt((Math.random() * 9999999));
        //Criar Elemento td
        td = document.createElement("td");
        //Altera os atributos da c�lula
        td.setAttribute("id",idCell);
        if ((align == 'left') || (align == 'center') || (align == 'right'))
          td.setAttribute("align",align);
        if (cellBgColor)
          td.setAttribute("bgColor",cellBgColor );

        /*if (cellStyle)
          td.className = cellStyle;
                                       */                                       
      this._setStyle = function( object, styleText ) { 
       if( object.style.setAttribute ) { 
         object.style.setAttribute("cssText", styleText ); 
      } else { 
        object.setAttribute("style", styleText ); 
      } 
     }

    if (style) {    
      if (style.indexOf(":") == -1) {
        td.className = style;    
      } else {      
        this._setStyle(td, style); 
      }  
    }
        //Cria um elemento texto;
        //cellText = document.createTextNode(cellList[indexCell]);
        
        //Adiciona o texto na c�lula
        //td.appendChild(cellText);
        
        td.innerHTML = cellList[indexCell];

        //Adiciona a c�lula na linha
        tr.appendChild(td);
      }

      //Adiciona a linha na tabela
      tbody.appendChild(tr);
    }       

    table.appendChild(tbody);
    div.appendChild(table);
    if (scroll)
      div.style.overflow = "scroll";
    component.div.innerHTML = "";
    component.div.appendChild(div);
  }
}

/**
 * Essa fun��o recebe como par�metro o nome da tabela HTML e retorna a altura da mesma.<br/>
 * <br/>
 * Part�metros:<br/>
 * 1. Nome da tabela<br/>
 * <br/>
 * Retorno:<br/>
 * Altura da tabela
 */
function ebfHTMLTableGetHeight(component) {
  var c = document.getElementById(component);
  return c.scrollHeight;
}

/**
 * Essa fun��o recebe como par�metro o nome da tabela html e retorna o tamanho da mesma.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da tabela<br/>
 * <br/>
 * Retorno<br/>
 * Tamanho da tabela html
 */
function ebfHTMLTableGetWidth (table) {
  var t = document.getElementById(table);
  return t.scrollWidth;  
}

/**
 * Alterar valor de uma linha da Tabela<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. GUID da Linha<br/>
 * 2. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfHTMLTableLineChangeValue (line,value) {
	var l = document.getElementById(line);
	l.innerHTML = value;
}

/**
 * Esta fun��o oculta o teclado do dispositivo m�vel.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * N�o possui.
 */
function ebfHiddenKeyboard(){
 alert('Fun��o dispon�vel no Maker Mobile');
}

/**
 * Esconde a �rvore passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Vari�vel onde est� guardada a refer�ncia para a �rvore.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfHideTree(tree){	
  return tree.hideTree();		
}

/**
 * Esta fun��o anexa um elemento recebido como par�metro em um outro elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o novo elemento. (Variante)<br/>
 * 2. Refer�ncia do elemento a ser anexado (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlAppendElementAt(element, child){
  if (element && child) {  
    element.appendChild(child);
  }
}

/**
 * Essa fun��o anexa o elemento na posi��o dentro do elemento pai passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o novo elemento. (Variante)<br/>
 * 2. Refer�ncia do elemento a ser anexado. (Variante)<br/>
 * 3. Posi��o onde o elemento ser� inserido. (Inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para mais informa��es verifique: http://www.w3schools.com/jsref/met_node_insertbefore.asp
 */
function ebfHtmlAppendElementAtPosition(element, child, position){
  position = position - 1;
  if (element !== null && child !== null && position !== null && position >= 0) {
    element.insertBefore(child, element.childNodes[position])
  }
}

/**
 * Esta fun��o associa um fluxo a um evento no objeto HTML recebido como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento HTML (Variante)<br/>
 * 2. Nome do Evento (Letras)<br/>
 * 3. Nome do Fluxo (Fluxo)<br/>
 * 4. Lista de par�metros do fluxo (Variante, Opcional)<br/>
 * 5. O objeto do evento ser� passado como primeiro par�metro para o Fluxo? (L�gico, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O 4� par�metro pode ser o retorno da fun��o "Criar Lista a partir dos Elementos".<br/>
 * 2. Se o 5� par�metro for Verdadeiro (por padr�o � Falso) ser� passado como primeiro par�metro do Fluxo o objeto do tipo de evento especificado (Mouse, Teclado, etc), que usando a fun��o "HTML - Obter Atributo do Elemento (DOM)" � poss�vel, por exemplo, obter as coordenadas do cursor na tela, �ltima tecla pressionada ou o elemento HTML que disparou o evento.<br/>
 * 3. O objeto do evento se tornar� o primeiro par�metro do Fluxo a ser chamado, logo os outros par�metros come�ar�o a partir da segunda posi��o.<br/>
 * 4. O fluxo chamado no 3� par�metro pode retornar o valor L�gico Falso para interromper o comportamento padr�o do evento do navegador, como por exemplo o clique (onclick) ou o caractere digitado (onkeypress).<br/>
 * 5. Somente ser�o executados fluxos na camada cliente. Para executar fluxos na camada servidor, utilize subfluxo.
 */
function ebfHtmlAttachFlowEvent(elementVar, eventName, flowName, ruleParams, eventObject) {
  if (elementVar && eventName && flowName) {  
    // Testa se o par�metro do fluxo a ser executado � nulo
    if (typeof(ruleParams) == 'undefined' || ruleParams == null) {
      ruleParams = [];
    }    

    // Remove o 'on' do nome do evento
    if(eventName.indexOf("on") === 0){
      eventName = eventName.substr(2);
    }
    
    var totalParams = ruleParams.length;
    
    var func = function(event) {
      event = event || window.event;
      if(eventObject){
        if(totalParams === ruleParams.length){
          ruleParams.unshift(event); // Adiciona evento no primeiro par�metro
        }else{
          ruleParams[0] = event; // Substitui o objeto do evento anterior
        }
      }
      var stopEvent = executeJSRuleNoField(sysCode, idForm, flowName, ruleParams);
      
      // Se o fluxo retornar o valor L�gico Falso, ent�o ser� interrompido a propaga��o do evento
      // para os elementos pais e o evento padr�o do navegador
      if(stopEvent === false) {
        event.stopPropagation();
        event.preventDefault();
      }
    };
    
    elementVar[eventName] = func;
    addEvent(elementVar, eventName, func, false);
  }
}

/**
 * Esta fun��o retorna uma lista com os filhos de um elemento informado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento onde ser� retornado os seus filhos (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo os filhos do elemento informado como par�metro<br/>
 * <br/>
 * Obs: Caso o elemento informado n�o possua filhos, o retorno ser� uma lista vazia.
 */
function ebfHtmlChildNodes(element) {
  if (element) {
    return element.children;
  }
}

/**
 * Esta fun��o retorna uma c�pia do elemento passado como par�metro<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento a ser clonado (Variante);<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do elemento clonado (Nulo, caso o elemento n�o seja encontrado)
 */
function ebfHtmlCloneHtmlNode(element){
  return element.cloneNode(true);
}

/**
 * Esta fun��o cria um elemento HTML especificado pelos par�metros da fun��o e seus atributos e retorna sua refer�ncia.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Elemento a ser criado (Letras)<br/>
 * 2. Lista de Lista de atributos e valores (Variante, Opcional)<br/>
 * 3. Elemento que receber� o elemento criado (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento criado.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O elemento n�o deve possuir os sinais de < e >, caso deseja inserir o elemento paragrafo <p> por exemplo: <br/>
 * use somente 'p'.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Suponhamos que queremos obter o elemento 'p' passado por par�metro, o retorno ser�: [object HTMLParagraphElement]
 */
function ebfHtmlCreateHtmlElement(elementVar, attributeListVar, elementAtt) {
  if (elementVar) {
    var element = document.createElement(elementVar);
    if (attributeListVar) {
      for (var i=0; i<attributeListVar.length; i++) {
        var currentAttribute = attributeListVar[i];
        element.setAttribute(currentAttribute[0], currentAttribute[1]);
      }
    }    

    if (elementAtt){    
      elementAtt.appendChild(element);
    }
    return element;    
  }
}

/**
 * Esta fun��o define uma propriedade CSS em um elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo (Letras)<br/>
 * 3. Novo valor da propriedade (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padr�o DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Suponhamos que queremos definir a propriedade de estilo "vertical-align: middle". O nome da propriedade de acordo<br/>
 * com o padr�o DOM Style seria: verticalAlign.
 */
function ebfHtmlCssDefineStyle(element, propertyName, propertyValue) {
  if (element && propertyName) {  
    eval("element.style." + propertyName + " = \"" + propertyValue + "\"");
  } 
}

/**
 * Esta fun��o obt�m uma propriedade CSS de um elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor da Propriedade (Letras);<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padr�o DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe
 */
function ebfHtmlCssGetStyle(element, propertyName, propertyValue) {
  if (element && propertyName) {  
    return eval("element.style." + propertyName);
  } 
}

/**
 * Esta fun��o remove uma propriedade CSS de um elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo a ser removida (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padr�o DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe
 */
function ebfHtmlCssRemoveStyle(element, propertyName) {
  if (element && propertyName) {  
    eval("element.style.removeProperty(\"" + propertyName + "\")");
  } 
}

/**
 * Esta fun��o obt�m um atributo de um elemento HTML.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do Atributo (Letras)
 */
function ebfHtmlGetAttribute(element, attributeName) {
  if (element && attributeName) {
    return element.getAttribute(attributeName);
  }
}

/**
 * Obt�m o corpo (DOM: body) da p�gina do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Corpo da p�gina (Variante).
 */
function ebfHtmlGetBodyElement() {
  return $mainform().document.body;
}

/**
 * Esta fun��o obt�m um atributo de um objeto HTML (DOM).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do Atributo (Variante)<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o serve para obter atributos do objeto, permitindo acesso a propriedades avan�adas do objeto.
 */
function ebfHtmlGetDOMAttribute(elem, attr){
  return elem[attr];         
}

/**
 * Obt�m o corpo (DOM: document) da p�gina do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Document da p�gina (Variante).
 */
function ebfHtmlGetDocumentElement() {
  return $mainform().document;
}

/**
 * Esta fun��o busca todas as refer�ncias dos elementos que possuem o atributo determinado no par�metro.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Refer�ncia do Elemento HTML em que ser� feita a busca dos elementos filhos pelo atributo (Variante).<br/>
 * 2. Atributo (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com refer�ncias dos Elementos (Lista vazia caso nenhum elemento seja encontrado).<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Utilizar a fun��o Obter Objeto da Lista para percorrer todos Elementos HTML encontrados.
 */
function ebfHtmlGetElementByAttrName(ref, attrName) {
  ref = ref || document;
  return ref.querySelectorAll('[' + attrName + ']') 
}

/**
 * Esta fun��o busca todas refer�ncias dos elementos que possuem a classe determinada no par�metro.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Classe dos Elementos (Letras)<br/>
 * 2. Refer�ncia do Elemento HTML em que ser� feita a busca dos elementos filhos pelo nome da classe (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com refer�ncias dos Elementos (Lista vazia caso nenhum elemento seja encontrado).<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Utilizar a fun��o Obter Objeto da Lista para percorrer todos Elementos HTML encontrados.
 */
function ebfHtmlGetElementByClassName(classe, ref) {
  ref = ref || document;
  return ref.getElementsByClassName(classe);
}

/**
 * Esta fun��o busca a refer�ncia de um elemento HTML a partir do seu ID.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. ID do Elemento (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Elemento (Nulo, caso o elemento n�o seja encontrado).
 */
function ebfHtmlGetElementById(id) {
  try {
    return document.getElementById(id);    
  } catch(e) {
    return null;  
  }
}

/**
 * Esta fun��o busca todas as refer�ncias dos elementos que possuem a Tag determinada no par�metro.<br/>
 * <br/>
 * Par�metro: <br/>
 * 1. Nome da Tag (Letras)<br/>
 * 2. Refer�ncia do Elemento HTML em que ser� feita a busca dos elementos (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com refer�ncias dos Elementos.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Utilizar a fun��o Obter Objeto da Lista para percorrer todos Elementos HTML encontrados. <br/>
 * 2. Caso n�o encontre nenhum elemento o retorno ser� uma lista vazia.
 */
function ebfHtmlGetElementsByTagName(tagName, element) {
  element = element || document;
  return element.getElementsByTagName(tagName);
}

/**
 * Esta fun��o obt�m o conte�do do elemento HTML passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Conte�do do Elemento HTML (Letras)
 */
function ebfHtmlGetInnerHtml(elementVar) {
  if (elementVar) {
    return elementVar.innerHTML; 
  }
}

/**
 * Esta fun��o busca a refer�ncia do elemento HTML de um componente Maker a partir do seu nome.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente Maker (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Elemento (Nulo, caso o elemento n�o seja encontrado).
 */
function ebfHtmlGetMakerElementById(id) {
  var component = $c(id);  
  if (component) {
    component = component.div; 
  }  
  return component;
}

/**
 * Esta fun��o busca a refer�ncia pai do elemento HTML atual.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Elemento Pai (Variante)
 */
function ebfHtmlGetParent(elementVar) {
  if (elementVar)  
    return elementVar.parentElement;
}

/**
 * Esta fun��o define o conte�do do elemento HTML passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento (Variante)<br/>
 * 2. Conte�do (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlInnerHtml(elementVar, elementContent) {
  if (elementVar) {
    elementVar.innerHTML = elementContent; 
  }
}

/**
 * Essa fun��o possibilita a atualiza��o din�mica de um iframe recebido como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Iframe HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Obs.: Deve-se utilizar as fun��es "HTML - Obter Elemento Pelo Id" para o obter o Iframe que se deseja atualizar.
 */
function ebfHtmlRefreshElement(element){
  element.contentWindow.location.reload();
}

/**
 * Esta fun��o remove um atributo de um elemento HTML.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlRemoveAttribute(element, attributeName) {
  if (element && attributeName) {
    element.removeAttribute(attributeName);
  }
}

/**
 * Esta fun��o remove o filho de um elemento especificado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento pai que ter� seu filho removido (Variante)<br/>
 * 2. Refer�ncia do elemento filho que ser� removido (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlRemoveChild(element, child) {
  if (element && child) {
    element.removeChild(child);  
  }
}

/**
 * Esta fun��o remove um evento do elemento recebido como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento HTML (Variante)<br/>
 * 2. Nome do Evento a ser removido (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlRemoveEvent(elementVar, eventName) {
  if (elementVar && eventName){
    // Remove o 'on' do nome do evento
    if(eventName.indexOf("on") === 0){
      eventName = eventName.substr(2);
    }
    if(elementVar[eventName]){    
      removeEvent(elementVar, eventName, elementVar[eventName], false);
      elementVar[eventName] = '';      
    }  
  }
}

/**
 * Esta fun��o define um atributo a um elemento HTML.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * 3. Valor do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfHtmlSetAttribute(element, attributeName, attributeValue) {
  if (element && attributeName) {
    element.setAttribute(attributeName, attributeValue);
  }
}

/**
 * Esta fun��o define um atributo a um objeto HTML (DOM).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do elemento que receber� o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * 3. Valor do Atributo (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * O mesmo Valor do Atributo passado no terceiro par�metro (Variante)<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Esta fun��o serve para alterar atributos do objeto, permitindo acesso a propriedades avan�adas do objeto.
 */
function ebfHtmlSetDOMAttribute(elem, attr, value){
  return elem[attr] = value; 
}

/**
 * Transforma uma ou v�rias tabelas HTML para XLS.<br/>
 * Par�metros:<br/>
 * 1. Lista de IDs das tabelas HTML. (Variante)<br/>
 * 2. Lista de nomes das abas da tabela. (Variante)<br/>
 * 3. Nome do arquivo. (Letras)<br/>
 * 4. Nome da aplica��o. (Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O 3� par�metro deve conter o nome do arquivo seguido da extens�o desejada.<br/>
 * 2. O 4� par�metro � o aplicativo que ir� abrir o arquivo.  Exemplo: Excel.<br/>
 * 3. Ao abrir o arquivo pelo Excel, o aplicativo pode exibir uma mensagem de alerta informando que o <br/>
 * conte�do do arquivo � diferente da extens�o (xls). Este  comportamento � normal e se trata de uma <br/>
 * melhoria do Excel para avisar ao usu�rio sobre poss�veis conte�dos incompat�veis. Consultar link:<br/>
 * https://support.microsoft.com/en-us/kb/948615
 */
function ebfHtmlTableToXls(tables, wsnames, wbname, appname){
  var uri = 'data:application/vnd.ms-excel;base64,'
  , tmplWorkbookXML = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">'
    + '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>'
    + '<Styles>'
    + '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>'
    + '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>'
    + '</Styles>'
    + '{worksheets}</Workbook>'
  , tmplWorksheetXML = '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>'
  , tmplCellXML = '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>'
  , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
  , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  var ctx = "";
  var workbookXML = "";
  var worksheetsXML = "";
  var rowsXML = "";

  for (var i = 0; i < tables.length; i++) {
    if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);
    for (var j = 0; j < tables[i].rows.length; j++) {
      rowsXML += '<Row>'
      for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
        var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
        var dataStyle = tables[i].rows[j].cells[k].getAttribute("data-style");
        var dataValue = tables[i].rows[j].cells[k].getAttribute("data-value");
        dataValue = (dataValue)?dataValue:tables[i].rows[j].cells[k].innerHTML;
        var dataFormula = tables[i].rows[j].cells[k].getAttribute("data-formula");
        dataFormula = (dataFormula)?dataFormula:(appname=='Calc' && dataType=='DateTime')?dataValue:null;
        ctx = {  attributeStyleID: (dataStyle=='Currency' || dataStyle=='Date')?'ss:StyleID="'+dataStyle+'"':''
               , nameType: (dataType=='Number' || dataType=='DateTime' || dataType=='Boolean' || dataType=='Error')?dataType:'String'
               , data: (dataFormula)?'':dataValue
               , attributeFormula: (dataFormula)?' ss:Formula="'+dataFormula+'"':''
              };
        rowsXML += format(tmplCellXML, ctx);
      }
      rowsXML += '</Row>'
    }
    ctx = {rows: rowsXML, nameWS: wsnames[i] || 'Sheet' + i};
    worksheetsXML += format(tmplWorksheetXML, ctx);
    rowsXML = "";
  }

  ctx = {created: (new Date()).getTime(), worksheets: worksheetsXML};
  workbookXML = format(tmplWorkbookXML, ctx);    
  if(ie || IE || isIE || isIE11 || navigator.userAgent.indexOf("Edge")!== -1){  
    alert("Recurso indispon�vel no IE/Edge");
  } else{
     var link = document.createElement("a");
     link.download = wbname;
     link.href = uri + base64(workbookXML);
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link); 
    }   
  };

/**
 * Esta fun��o recebe uma URL como par�metro e abre o mesmo em um iframe criado din�micamente. O iframe criado n�o<br/>
 * possui tamanho nem apar�ncia, ficando invis�vel ao formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o � recomendada na chamada de servi�os que retornam conte�do HTML ou Elementos do tipo Script para<br/>
 * serem executados.
 */
function ebfIframeTransporter(url) {
  IframeTransporter(url);
}

/**
 * Altera a URL de um componente imagem.<br/>
 * <br/>
 * Caso a imagem possua uma URL, as caracter�sticas do componente ser�o mantidas.<br/>
 * Por exemplo: Caso a imagem inicial esteja definida como Centralizada, ao alterar a URL a mesma continuar� assim.<br/>
 * Caso seja uma imagem do banco de dados, uma impress�o digital ou a imagem esteja como estendida, ela SEMPRE aparecer� nas dimens�es do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m o componente imagem<br/>
 * 2. Nome do componente<br/>
 * 3. URL da imagem<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A fun��o n�o permitir� a utiliza��o de imagens que n�o se encontram nas pastas ?Upload? ou ?TMP?. Desta forma, caso exista alguma regra que altere a URL de um componente Imagem e o caminho da URL aponte para uma pasta diferente de ?Upload? ou ?tmp?, o funcionamento ser� incorreto.
 */
function ebfImageSetURL(formGUID, componentName, url) {
  var component = $c(componentName, formGUID);
  component.url = url;

  if (component.type == 1 || component.type == 2 || (component.getViewMode() == "stretch")) {
    // Define o tipo temporariamente para -1 para a imagem poder ser alterada via refresh
    component.type = -1;
    
    component.refresh(true);

    // Define o tipo para URL
    component.type = 3;
  } else {
    component.context.style.backgroundImage = ("url(" + url + ")");
  }
}

/**
 * Esta fun��o localiza o conte�do do 2� par�metro dentro do conte�do do primeiro par�metro e retorna a posi��o deste caso o <br/>
 * encontre. Caso n�o encontre, retorna 0.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto onde ser� feita a pesquisa.<br/>
 * 2. Valor a ser localizado.<br/>
 * <br/>
 * Retorno:  <br/>
 * Retorna a posi��o do valor a ser localizado. Caso n�o encontre retorna 0.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os par�metros como "Maker Flow" (Letras) e "e" (Letras) , o retorno seria 4.<br/>
 * 2. Assumindo os par�metros como "Maker Flow" (Letras) e "U" (Letras) , o retorno seria 0.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfIndexOf() {
  var indice = 0;
  if (existArgs(arguments)) {
    var value = arguments[0].toString();
    var valueToFind = arguments[1].toString();
    indice = value.indexOf(valueToFind);
    indice = indice == -1 ? 0 : ++indice;
  }
  return indice;
}

/**
 * Esta fun��o permite executar um fluxo sempre que o usu�rio chegar ao fim da barra de rolagem.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento<br/>
 * 2. Fluxo<br/>
 * 3. Lista de par�metros <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfInfiniteScroll (element, ruleName, params){
  if (element && ruleName) {
    element.addEventListener('scroll', function(){
      if(element.scrollTop + element.clientHeight >= element.scrollHeight){
          ebfFlowExecute(ruleName, params);
      }    
    });
  }
}

/**
 * Converte um n�mero decimal para hexadecimal com zeros a esquerda caso o n�mero a ser convertido seja menor que a<br/>
 * quantidade de caracteres a ser retornada. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido.<br/>
 * 2. Quantidade de Caracteres a ser retornada<br/>
 * <br/>
 * Retorno:<br/>
 * Valor convertido para Hexadecimal. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo os n�meros decimais (9,10,11 e 15) no primeiro par�metro e 5, no segundo par�metro<br/>
 *  o retorno ser� respectivamente (00009, 0000a, 0000b, 0000f )<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Hexadecimal � um sistema num�rico com 16 d�gitos, onde os d�gitos de 0 a 9 s�o representados por n�meros de 0 a 9, <br/>
 * e os d�gitos de 10 a 15 s�o representados por letras, que v�o de A a F.
 */
function ebfIntToHex(value, minsize) {
  if (!minsize) minsize = 2;
   var i = 0;
   var j = -1;
   var inp = value;
   value = inp;
   var a = parseInt(inp);
   var b = a.toString(16);
   var c = parseInt("0x" + b);
   if (b != 'NaN') 
   { 
     while (b.length < minsize) b =  '0' + b;
     return b; 
   }
}

/**
 * Obt�m um elemento da estrutura HTML de um componente Integra��o atrav�s do seu ID.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Integra��o. (Componente)<br/>
 * 2. ID do elemento. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a refer�ncia do elemento. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso n�o exista elemento com o ID especificado, o retorno ser� nulo.<br/>
 * 2. No primeiro par�metro tamb�m pode ser passado o nome do componente em uma vari�vel do tipo Letras.
 */
function ebfIntegracaoGetElementById(comp, id) {
  var component = $c(comp);
  if (component) return component.getElementById(id);
  else handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));  
}

/**
 * Invoca um m�todo no objeto passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto que cont�m o m�todo<br/>
 * 2. M�todo a ser executado<br/>
 * 3. Lista de par�metros do m�todo. <br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o resultado da execu��o do m�todo. (Variante)
 */
function ebfInvokeMethod(object, methodName, params){ 

  if (!object){
    throw 'Objeto inv�lido';
  }
  if (methodName == null || methodName == ''){
    throw 'Nome do m�todo inv�lido';
  }
  var _object = object;
  var _params = params;

  var callCmd = '_object.'+methodName+'(';
  if (params != null){
    if (params.length>0){
      callCmd += '_params[0]';
      for(index=1; index<params.length; index++) {
        callCmd += ', _params['+index+']';
      }
    }
  }
  callCmd += ')';
  return eval(callCmd);
}

/**
 * Verifica se um CNPJ � v�lido.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um CNPJ, caso contr�rio retorna Falso. (L�gico)<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Caso o valor seja vazio, ser� considerado que o CNPJ � v�lido.
 */
function ebfIsCnpj(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  }
  return CNPJ(value);
}

/**
 * Verifica se � um CPF V�lido.<br/>
 * Caso o valor seja vazio, ser� considerado que o CPF � v�lido.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um CPF v�lido, caso o CPF seja Inv�lido retorna Falso.
 */
function ebfIsCpf(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  }
  return CPF(value);
}

/**
 * Verifica se � um E-mail v�lido. <br/>
 * Caso o valor seja vazio, ser� considerado que o Email � inv�lido.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. E-mail a ser validado<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um E-mail v�lido, Falso, caso contr�rio.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A fun��o n�o verifica se � um e-mail existente. Apenas valida se est� na sintaxe correta.<br/>
 * 2. Recomendado o envio de um link de ativa��o para confirma��o da exist�ncia do e-mail.
 */
function ebfIsEmail(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  } 
  
  var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regExp.test(value);
}

/**
 * Essa fun��o retorna se uma determinada chave existe no objeto JSON.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave a ser buscada<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna Verdadeiro caso a chave existe no JSON. Caso contr�rio, retorna Falso.
 */
function ebfJSONExistsKey (json, key) {
  try {
    const find = Object.keys(json).find(function(e) {
      return e === key;
    });
    if (find) return true;
    return false;
  } catch (e) {}
  return false;
}

/**
 * Essa fun��o cria um objeto JSON ou um texto JSON de acordo o valor l�gico passado no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Lista de Lista contendo chave e valor.<br/>
 * 2. Objeto JSON?<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Retorna um objeto JSON ou um texto JSON (Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A fun��o possui suporte a passagem de objetos do tipo JSON e Lista como valor.<br/>
 * 2. Retorna nulo caso o primeiro par�metro n�o seja um objeto do tipo lista.
 */
function ebfJSONParamsCreate (list, obj){
  if(list && list instanceof Array){
    var objectJSON = JSON.parse('{}');
    for(i=0; i < list.length; i++){
      var key = list[i];     
      objectJSON[key[0].toString()] = key[1];
    }    
    return obj === true ? objectJSON : JSON.stringify(objectJSON);
  }
  return null;
}

/**
 * Esta fun��o gera um arquivo de sa�da a partir de um relat�rio Jasper (JRXML).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Caminho para o arquivo JRXML. (Letras)(Caminho relativo a partir do contexto ou absoluto)<br/>
 * 2. Caminho para o arquivo de sa�da. (Letras)(Caminho relativo a partir do contexto ou absoluto)<br/>
 * 3. Mapa de Par�metros (Variante, Opcional)<br/>
 * 4. Formato do arquivo de sa�da. (Letras)<br/>
 * 5. Atualizar arquivo bin�rio JASPER? (L�gico, Opcional)<br/>
 * 6. Abrir arquivo gerado? (L�gico, Opcional)<br/>
 * 7. Conex�o adicional. (Variante, Opcional)<br/>
 * 8. Ordena��o. (Variante , Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Formatos suportados para o par�metro 4:<br/>
 * PDF, HTML, TXT, RTF, XML, XLSX, DOCX, PPTX, JPG, PNG, GIF<br/>
 * <br/>
 * 2. Caso n�o exista o arquivo bin�rio JASPER, ser� criado um independente da op��o escolhida no par�metro 5.<br/>
 * <br/>
 * 3. A ordena��o deve estar no formato: campo1|[0|1][;campo2|[0|1][;campoN|[0|1]]], sendo: <br/>
 * "0" descendente e "1" ascendente. (Opcional) Exemplo: cod_pessoa|1;nome|0
 */
function __jasperOpenReportConnectionAdd(fileURL) {

  var altura = window.screen.availHeight, largura = window.screen.availWidth; 
  if(isChrome){
    altura -= 70;    
    largura -= 19;
  }
  
 window.open(fileURL, fileURL, "menubar=0,toolbar=0,location=0,personalbar=0,status=0,dependent=0,scrollbars=1,resizable=1,height="+altura+",width="+largura+",screenX=0,screenY=0,fullscreen=1");
}

function __jasperDownloadStart(fileURL) {
  var invertNameFile = ebfStringReverse(fileURL);  
  var indice         = invertNameFile.indexOf("/");  
  var nameFile       = ebfStringReverse(invertNameFile.substring(0, indice));
  if(ie || IE || isIE || isIE11){  
    ebfDonwloadStart(fileURL, true);
  }else{   
    var link           = document.createElement("a");  
    link.download      = nameFile;  
    link.href          = fileURL;
    document.body.appendChild(link);  
    link.click();
    document.body.removeChild(link);  
    delete link;    
  }
}

/**
 * Fun��o que cria um novo componente caixa de texto dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (Caso n�o seja definida, a aba ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Valor (novo texto).<br/>
 * 7. Nome do Componente.<br/>
 * 8. zIndex.<br/>
 * 9. Container.<br/>
 * 10. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfLabelNew(aba, posX, posY, width, height, value, id, index, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLLabel(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, value);
  component.wrap = true;
  component.id = id;
  component.zindex = index;
  component.loadComponentTime = 0;
  component.styleCss = styleCss;  
  if ($mainform().d) {
   var container = $mainform().d.t.getTabByName(aba);
   if(!container){   
    if(d) {
       d.t.add(aba);
       container = $mainform().d.t.getTabByName(aba);      
      }
   }
  if(compContainer){
    component.container = compContainer;
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
   document['c_' + code] = component;  
  }
}

/**
 * Essa fun��o retorna a data com o �ltimo dia do m�s a partir do m�s e ano passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. M�s.<br/>
 * 2. Ano.<br/>
 * 3. Formata��o (Opcional).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o �ltimo dia do m�s. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o 1� par�metro sendo 02 e o 2� par�metro sendo 2007, o retorno ser� 28/02/2007 23:59:59.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O m�s deve receber valores entre 1 e 12.<br/>
 * 2. Se o 3� par�metro n�o for definido a data retornada ter� o formato brasileiro.
 */
function ebfLastDay(month, year, formatting){
   var date = new Date(year, month, 0);
   formatting = (formatting === 'undefined' || formatting == null || formatting === "") ? 'dd/MM/yyyy' : formatting;   
   return date.format(formatting)+ " 23:59:59";   
}

/**
 * A fun��o localiza a �ltima subseq��ncia (passada no 2� par�metro) dentro do texto e retorna a posi��o inicial da mesma.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Texto.<br/>
 * 2. Subseq��ncia ao qual deseja obter o �ndice.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a �ltima posi��o do valor passado como par�metro. <br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metros  "Maker Maker" (Letras) e "r" (Letras), o retorno seria  11(Inteiro).<br/>
 * 2.Assumindo como par�metros "Maker Flow"(Letras) e "r" (Letras), o retorno seria 5 (Inteiro).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfLastIndexOf() {
  var indice = 0;
  if (existArgs(arguments)) {
    var value = arguments[0].toString();
    var valueToFind = arguments[1].toString();
    indice = value.lastIndexOf(valueToFind);
    indice = indice == -1 ? 0 : ++indice;
  }
  return indice;
}

/**
 * A fun��o recebe um texto e retorna o tamanho do mesmo.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Texto no qual se deseja obter o tamanho.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a quantidade de caracteres (Inteiro) presente no texto passado como par�metro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metro "Maker Flow" (Letras), o retorno seria 10.<br/>
 * 2.Assumindo como par�metro "Hoje � Segunda-Feira" (Letras), o retorno seria 20.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfLength() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0].toString().length;
  }
  return value;
}

/**
 * Essa fun��o cria uma lista vazia.<br/>
 * <br/>
 * Retorno: <br/>
 * Lista vazia. O retorno dessa fun��o deve ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Para inserir elemento na lista � necess�ria a utiliza��o de outras fun��es da categoria lista.<br/>
 * 2. N�o h� suporte para passagem de par�metro de uma lista criada na camada "Cliente" para a camada "Servidor"; a<br/>
 * a��o contr�ria � suportada.<br/>
 * 3. Caso queira criar uma lista j� definindo valores, utilize a fun��o Criar lista a partir dos Elementos.
 */
function ebfListCreate() {
  return new Array();
}

/**
 * Essa fun��o verifica se o elemento passado por par�metro existe no objeto lista, retornando o valor l�gico verdadeiro (true) se o elemento existir na lista ou falso (false) caso contr�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista (Variante).<br/>
 * 2. Elemento (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor l�gico indicando se o elemento existe na lista.
 */
function ebfListExistsValue(list, value) {
  if(list != null && list instanceof Array && list.length > 0)  
    return list.includes(value);    
  return false;
}

/**
 * Transformar uma Lista(conjunto de valores) em um Texto separando cada elemento com um delimitador(separador)<br/>
 * especificado no 2� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista.<br/>
 * 2. Separador entre os elementos da lista.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os elementos da lista passada (1� par�metro) separados pelo conte�do do 2� par�metro (Letras).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os par�metros como  uma lista com 2 elementos ("Maker" e "Flow" ) e "|"(Letras), o retorno seria "Maker|Flow" (Letras).<br/>
 * 2-Assumindo os par�metros como  uma lista com 3 elementos ("ABC" ,"DEF" e "GHI") e  nulo (Letras) no segundo par�metro,<br/>
 * o retorno seria "ABCDEFGHI" (Letras).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfListImplode(list, separator) {
  if (!(list instanceof Array)) {
    throw "Functions ebfListImplode expects an Array.";
  }
  var first = true;
  var value = "";
  for (var i = 0; i < list.length; i++) {
    var listValue = list[i];
    if (first) {
      first = false;
    } else if (separator != null && (typeof separator != "undefined")) {
      value += separator;
    }
    if (listValue != null && (typeof listValue != "undefined")) {
      value += listValue;
    }
  }
  return value;
}

/**
 * Essa fun��o retorna o tamanho da lista, ou seja, a quantidade de elementos que pertencem � lista. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Lista com os elementos<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a quantidade de elementos na lista. O retorno da fun��o pode ser armazenado numa vari�vel do tipo inteiro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a,b,c,d,e,f,g,h}. O retorno ser� o valor 8, pois<br/>
 * existem 8 elementos na lista.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfListLength() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0].length;
  }
  return value;
}

/**
 * Essa fun��o cria uma lista com todos os valores que foram passados pelos par�metros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Elemento da Lista<br/>
 * 2. Elemento da Lista<br/>
 * <br/>
 * Retorno: <br/>
 * Lista com todos os valores passados por par�metro.(Variante)<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. A fun��o pode ter (N) par�metro.<br/>
 * 2. O acesso aos elementos da lista retornada � feito atrav�s de outras fun��es da categoria lista.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que os elementos da lista sendo:1, 2 e 5, o retorno ser� uma lista com os elementos 1,2 e 5.<br/>
 * 2. Assumindo que os elementos da lista sendo: A, B e C, o retorno ser� uma lista com os elementos A, B e C.
 */
function ebfListParamsCreate() {
  var list = new Array()
  for(i = 0; i < arguments.length; i++) {
    list[i] = arguments[i];
  }
  return list;
}

/**
 * Essa fun��o ordena os elementos de uma lista. <br/>
 *     <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Valor L�gico<br/>
 *    <br/>
 * Retorno:<br/>
 * Lista ordenada. O retorno da fun��o pode ser armazenado numa vari�vel do tipo variante.<br/>
 *     <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, d, b, e, h, f, g, c}, o 2� par�metro seja "True". <br/>
 * O retorno ser� uma lista ordenada de forma ascendente com os seguintes valores: {a, b, c, d, e, f, g, h}. <br/>
 * 2. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {1, 2, 3}, o 2� par�metro seja "False". <br/>
 * O retorno ser� uma lista ordenada de forma descendente com os seguintes valores: {3, 2, 1}.
 */
function ebfListSort(lstVariant, ascending) {
  if (lstVariant) {  
    if (ascending) {
      return lstVariant.sort();    
    }
    return lstVariant.sort().reverse();  
  }
}

/**
 * Essa fun��o realiza a importa��o de um ou mais scripts de forma ass�ncrona, e ao final da importa��o um fluxo de callback � chamado.<br/>
 * <br/>
 * Par�metro(os):<br/>
 * 1. Lista de URL's;<br/>
 * 2. Fluxo de Callback(ser� chamado ap�s a importa��o a importa��o);<br/>
 * 3. Lista de Par�metros(ser� passado para o fluxo de callback);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfLoadScript(url, ruleCallback, paramsRuleCallback){
  loadAsyncWfr(url, callbackFunctionLoad);  
 
  function callbackFunctionLoad(){
    loadCallbackFunction();   
  }  

  window.loadCallbackFunction = function(){  
    var parametros = paramsRuleCallback;
    var ruleCallbackExec = ruleCallback;

    if(ruleCallbackExec){
      executeRuleFromJS(ruleCallbackExec, parametros);
    }
  }
}

/**
 * Obt�m a refer�ncia do formul�rio principal, sendo este o chamador; normalmente abertos atrav�s de bot�es, <br/>
 * dentre outros.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Formul�rio Principal a partir do qual o formul�rio atual foi aberto. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfMainFormGetInstance() {
  return getOpenerWindow(top).$mainform().top.$mainform();
}

/**
 * Essa fun��o armazena um valor no objeto mapa passando como par�metro a chave ou referencia do valor e o valor que<br/>
 * deseja armazenar.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Refer�ncia) <br/>
 * 3. Valor a ser armazenado<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. Para obter o valor armazenado � preciso utilizar a fun��o "Obter Elemento" passando como par�metro a chave ou<br/>
 * referencia do valor.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro sendo MAPA, o 2� par�metro sendo Maker e o 3� par�metro sendo Flow, o retorno ser� o conte�do Flow armazenado no objeto mapa "MAPA" com a sua chave de referencia sendo Maker.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapAddObject(obj, key, value) {
    obj.add(key, value);
}

/**
 * Esta fun��o retorna a dist�ncia linear (em metros) entre dois pontos. <br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1.  Latitude e Longitude - Ponto Inicial (Lista). <br/>
 * 2.  Latitude e Longitude - Ponto Final (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Dist�ncia Linear (Em metros).<br/>
 * <br/>
 * Observa��o (�es)<br/>
 * 1. Os par�metros devem ser passados nas respectivas ordens Latitude e Longitude.
 */
function ebfMapComputeDistanceBetween(coordsOne, coordsTwo){
  if(coordsOne instanceof Array && coordsTwo instanceof Array){
    var p1 = new google.maps.LatLng(coordsOne[0], coordsOne[1]);
    var p2 = new google.maps.LatLng(coordsTwo[0], coordsTwo[1]); 
  
    return google.maps.geometry.spherical.computeDistanceBetween(p1, p2);    
  }  
  return null;
}

/**
 * Essa fun��o retorna se uma determinada chave existe no objeto mapa.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave a ser buscada<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna Verdadeiro caso a chave existe no mapa. Caso contr�rio, retorna Falso.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapContainsKey(obj, key) {
  if (obj instanceof Map) {
    return (obj.findKey(key) != -1);
  }
  return false;
}

/**
 * Essa fun��o criar um mapa ou mapeamento para armazenar valores a partir de uma lista de "par/valor".<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Lista com "par/valor".<br/>
 * 2. Lista com "par/valor".<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto mapa com suas chaves e seus respectivos valores. O retorno pode ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Observa��es: <br/>
 * A fun��o pode ter (N) par�metros.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� e 2� par�metro sendo a Fun��o Criar Lista a partir dos par�metros contendo os pares de valores: Maker/Flow e Softwell/Freire. O retorno ser� um objeto mapa contendo esses elementos.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapCreateFromList() {
  var map = new Map();
  for (var i = 0; i < arguments.length; i++) {
    var params = arguments[i];
    if (params instanceof Array && params.length == 2) {
      map.add(params[0], params[1]);
    }
  }
  return map;
}

/**
 * Criar um mapa ou um mapeamento para armazenar valores, com uma diferen�a: ambos os valores (chave e valor) s�o Strings.<br/>
 *  <br/>
 * (� interessante saber que um Mapa associa os dois objetos: passando uma chave, ent�o se obt�m um valor).<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto mapa. O retorno pode ser armazenado numa vari�vel do tipo variante<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapCreateObject() {
  return new Map();
}

/**
 * Essa fun��o retorna o valor de uma chave numa determinada posi��o da lista.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Posi��o a buscar a chave<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto definido na posi��o.<br/>
 * Caso a posi��o seja negativa, o primeiro ser� retornado.<br/>
 * Caso a posi��o seja maior que o tamanho do mapa, o �ltimo elemento ser� retornado.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapGetElementAt(obj, position) {
  if (obj instanceof Map) {
    var keys = obj.getKeys();
    
    position = parseInt(position) - 1;
    position = Math.max(0, position);
    position = Math.min(position, (keys.length - 1));
    
    return keys[position];
  }
  return null;
}

/**
 * Essa fun��o obt�m o elemento de um objeto mapa a partir da chave (ou Refer�ncia).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Refer�ncia)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o elemento de um determinado objeto mapa a partir da chave (ou refer�ncia) do elemento. O retorno dever� ser <br/>
 * armazenado em uma vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; <br/>
 * Freire/Softwell, Banco/SQL e o 2� par�metro contendo a chave Maker. A partir desses valores o retorno ser� o valor<br/>
 * "Flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapGetObject(obj, key) {
  return obj.get(key);
}

/**
 * Essa fun��o obt�m todas as chaves ou referencias de um determinado objeto mapa.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista de chaves. O retorno dever� ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno ser� uma lista com a chave do objeto mapa, que seria Maker, Freire e Banco.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapKeys(obj) {
  return obj.getKeys();
}

/**
 * Essa fun��o retorna a quantidade de valores que existe no objeto mapa.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o tamanho do objeto mapa, ou seja, a quantidade de valores que existe no mapa. O retorno pode ser armazenado numa vari�vel do tipo Inteiro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno ser� 3, pois existe 3 valores no objeto mapa que s�o Flow, Softwell e SQL.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapLength(obj) {
  return obj.size;
}

/**
 * Essa fun��o remove o elemento de um objeto mapa a partir da chave (ou Refer�ncia).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Refer�ncia)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o elemento removido de um determinado objeto mapa a partir da chave (ou refer�ncia) do elemento. Caso o <br/>
 * elemento seja removido retorna Verdadeiro, caso contr�rio Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL e o 2� par�metro contendo a chave Freire. A partir desses valores o elemento a ser removido ser� o valor "Flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMapRemoveObject(obj, key) {
  if (obj instanceof Map) {
    return obj.remove(key);
  }
  return -1;
}

/**
 * Essa fun��o transforma um objeto Mapa em JSON.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON (Variante).<br/>
 * <br/>
 * Observa��o:<br/>
 * N�o possui.
 */
function ebfMapToJson(map){
  var ro = {};
  var keys = map.getKeys();
  for(var i = 0; i < keys.length; i++){
    if(map.get(keys[i]) instanceof Map){
      ro[keys[i]] = ebfMapToJson(map.get(keys[i]));
    }else{
      ro[keys[i]] = map.get(keys[i]);
    }
  };
  return ro;
};

/**
 * Essa fun��o obt�m todos os valores de um determinado objeto mapa.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista de valores. O retorno dever� ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno ser� uma lista com os valores do objeto mapa, que seria Flow, Softwell e SQL.<br/>
 * <br/>
 * Vers�o: 1.0.0.1
 */
function ebfMapValues(obj) {
  return obj.getValues();
}

/**
 * Esta fun��o associa um evento (ver observa��es) ao mapa passado como par�metro.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Evento (click, dblclick, drag...) (Letras)<br/>
 * 3. Fluxo (opcional)  (Ver observa��o 3)<br/>
 * 4. Lista de Par�metros do Fluxo (Variante, Opcional);<br/>
 * 5. Caminho relativo do �cone (Letras, Opcional);<br/>
 * 6. Criar Marcador? (Caso verdadeiro, ser� criado um marcador toda vez que o evento for executado)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura".<br/>
 * 2. Mais informa��es sobre os eventos suportados, consulte: <br/>
 * https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br<br/>
 * 3. O fluxo executado receber� dois par�metros autom�ticos referentes a Latitude e Longitude respectivamente.
 */
function ebfMapsAddListener(map, event, flow, param, image, addmarkers) {
  if (map) {   
    if(addmarkers==undefined){      
      addmarkers=true;          
    }
    google.maps.event.addListener(map, event, function(e){
      placeMarker(e.latLng, map, image, addmarkers);       
    });
    
    function placeMarker(position, map, image,addmarkers){
      if(addmarkers){
        var marker = new google.maps.Marker({
          position: position,
          map: map,
          icon: image
        }); 
      }

      var list = new Array();
      var pos = position.toString();
      pos = pos.replace("(", "");
      pos = pos.replace(")", "");
      var latlgn = pos.split(",");          
      list[0] = latlgn[0];
      list[1] = latlgn[1];     
      if(param){
        for (i = 0; i < param.length; i++) {
         list[i + 2] = param[i];
        }       
      }
      executeRuleFromJS(flow, list);
      map.panTo(position);
    }
  }
}

/**
 * Esta fun��o obt�m o endere�o a partir das coordenadas informadas.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Latitude<br/>
 * 2. Longitude<br/>
 * 3. Fluxo que receber� o endere�o<br/>
 * 4. Lista de par�metros adicionais (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. � necess�rio que a biblioteca do Google Maps esteja importada atrav�s da fun��o "Mapa - Importar biblioteca".<br/>
 * 2. Caso ocorra algum erro, o retorno ser� vazio e o erro ser� registrado no console.log do navegador
 */
function ebfMapsAddressFromLatLgn(lat, lgn, flow, param) {
    var geocoder = new google.maps.Geocoder();
    var latlng = {
        lat: parseFloat(lat),
        lng: parseFloat(lgn)
    };
    return geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        var address = "";
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
              address = results[0].formatted_address;
            }
        } else {
            console.log("N�o foi poss�vel obter o endere�o a partir das coordenadas. C�digo do erro: " + status)
        }
        
        if (param instanceof Array){
          param.unshift(address);
        }else{
          param = new Array();
          param[0] = address;
        }
        executeRuleFromJS(flow, param);
    });
}

/**
 * Esta fun��o altera o �ngulo de visualiza��o do mapa para 45�.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Tipo do mapa (hybrid ou satellite)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Est� fun��o apenas funciona com os mapas do tipo "hybrid" ou "satellite";
 */
function ebfMapsAngle(map, type) {
  if (map) {
    map.setMapTypeId(type);
    map.setTilt(45);
  }
}

/**
 * Esta fun��o calcula a dist�ncia e o tempo entre dois pontos.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante, opcional) Ver observa��es.<br/>
 * 2. Origem (Letras)<br/>
 * 3. Destino (Letras)<br/>
 * 4. Modo de Viagem (DRIVING, WALKING, BICYCLING);<br/>
 * 5. Nome do Fluxo de sucesso;<br/>
 * 6. Par�metros do Fluxo de sucesso (Variante, opcional);<br/>
 * 7. Nome do Fluxo de erro;<br/>
 * 8. Par�metros do Fluxo de erro (Variante, opcional).<br/>
 * <br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Ao informar o mapa no primeiro par�metro, a rota ser� tra�ada automaticamente.<br/>
 * 3. O fluxo de sucesso receber� uma lista no primeiro par�metro, contendo a dist�ncia em KM e o Tempo,  entre os dois pontos.
 */
function ebfMapsCalcDistBtwnTwoPoints(map, addressStart, addressEnd, ModeTravel, ruleName, sucessParams, ruleNameError, errorParams) {
  var addressPoints;
  var result = new Array();
  var service = new google.maps.DistanceMatrixService();
  if (map) {
    ebfMapsTraceRoute(map, addressStart, addressEnd, addressPoints, ModeTravel);
  }
  service.getDistanceMatrix({
    origins : [ addressStart ],
    destinations : [ addressEnd ],
    travelMode : ModeTravel
  }, calc);

  function calc(response, status) {
    responseElements = response.rows[0].elements[0];
    if (status == google.maps.DistanceMatrixStatus.OK && responseElements.status == google.maps.DistanceMatrixElementStatus.OK) {
      result[0] = responseElements.distance.text;
      result[1] = responseElements.duration.text;
      result[2] = responseElements.distance.value;
      result[3] = responseElements.duration.value;
      
      if(sucessParams instanceof Array && sucessParams != null){
        sucessParams.unshift(result);
      }else{
        sucessParams[0] = result;
      }
      
      sucessParams.splice(0, 0, result);
      executeRuleFromJS(ruleName, sucessParams);
    } else {    
      if(ruleNameError != null){
        executeRuleFromJS(ruleNameError, errorParams);
      }
    }
  }
}

/**
 * Esta fun��o calcula a dist�ncia e tempo entre dois ou mais pontos a partir das coordenadas informadas.<br/>
 * <br/>
 * A dist�ncia � baseada em uma rota/trajeto atrav�s do modo informado.<br/>
 * <br/>
 * Caso precise calcular dist�ncia entre dois pontos lineares, utilize a fun��o "Mapa - Obter Dist�ncia Linear Entre Dois Pontos"<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Origem Latitude (Fracionado)<br/>
 * 2. Origem Longitude (Fracionado)<br/>
 * 3. Destino Latitude (Fracionado)<br/>
 * 4. Destino Longitude (Fracionado)<br/>
 * 5. Lista de pontos (Variante, Opcional);<br/>
 * 6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 7. Fluxo de Callback<br/>
 * 8. Par�metros adicionais para o fluxo de callback<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do objeto tra�ado<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O fluxo receber� no primeiro par�metro uma lista com:<br/>
 * Dist�ncia: Texto;<br/>
 * Dura��o: Texto;<br/>
 * Dist�ncia: Valor em metros<br/>
 * Dura��o: Tempo em segundos.
 */
function ebfMapsCalcRouteCoordenate(latOrigin, lngOrigin, latDestination, lngDestination, addressPoints, travelMode, ruleName, ruleParams) {
  var directionsService;
  var directionsRenderer;
  var addressPointsAux;   
  var result = new Array();

  if (addressPoints) {
    addressPointsAux = '['; 
    for (i = 0; i < addressPoints.length; i++) {
		
      if ((i + 1) == addressPoints.length) {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}';
      } else {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}, ';
      }
    }
    addressPointsAux = addressPointsAux + ']';
  }

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  
  var addressStart = new google.maps.LatLng(latOrigin, lngOrigin);
  var addressEnd = new google.maps.LatLng(latDestination, lngDestination);

  var request = {
    origin : addressStart,
    destination : addressEnd,
    waypoints : eval(addressPointsAux),    
    optimizeWaypoints: true,
    travelMode : travelMode
  };

  directionsService.route(request, function(response, status) {
    result = ['', '', 0, 0];
    if (status == google.maps.DirectionsStatus.OK) {    
      directionsRenderer.setDirections(response);             
      var route = response.routes[0];
      result[0] = route.legs[0].distance.text;
      result[1] = route.legs[0].duration.text;      
      result[2] = route.legs[0].distance.value;
      result[3] = route.legs[0].duration.value;      
    }
    
    if(ruleParams instanceof Array && ruleParams != null){
      ruleParams.unshift(result);
    }else{
      ruleParams[0] = result;
    }
     
    executeRuleFromJS(ruleName, ruleParams);
    
  });
  
  return directionsRenderer;
}

/**
 * Esta fun��o centraliza o mapa de acordo com as coordenadas passadas.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura"
 */
function ebfMapsCenterMap(map, lat, lgt) {
  if (map) {
    var position = new google.maps.LatLng(lat, lgt);
    map.setCenter(position);
  }
}

/**
 * Esta fun��o realiza a movimenta��o do �cone na rota desejada. A rota deve ser do tipo din�mica.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Refer�ncia da Rota (Ver Observa��o 1)(Variante).<br/>
 * 2. Refer�ncia do �cone (Ver Observa��o 2)(Variante).<br/>
 * 3. Procentagem da Rota Conclu�da (Ex: 0, 9, 10, 75. Onde 0 � a origem e 100 o destino) (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Desenhar Rota Din�mica";<br/>
 * 2. O segundo par�metro � o retorno da fun��o "Mapa - Criar �cone para Rota";
 */
function ebfMapsChangeIconPosition(line, symbol, perc) {
  var icons = line.get('icons');
  icons[0].offset = perc + '%';
  line.set('icons', icons);
}

/**
 * Esta fun��o obt�m as coordenadas a partir de um endere�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Endere�o (Letras);<br/>
 * 2. Fluxo de sucesso (Fluxo);<br/>
 * 3. Lista de par�metros adicionais para o fluxo (Variante, Opcional);<br/>
 * 4. Fluxo de erro (Fluxo);<br/>
 * 5. Lista de par�metros adicionais para o fluxo de erro (Variante, Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O fluxo receber� automaticamente 2 par�metros. O 1� ser� referente � Latitude e o 2� ser� referente � Longitude;<br/>
 * 2. Os par�metros adicionais ser�o recebidos a partir do 3� par�metro.<br/>
 * 3. � necess�rio que a biblioteca do Google Maps esteja importada atrav�s da fun��o "Mapa - Importar biblioteca".
 */
function ebfMapsCodeAddress(address, flow, params, errorFlow, errorParams){
   var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var gResult;
        gResult = results[0].geometry.location.toString().replace('(','').replace(')','');
        gResult = gResult.split(",");
        if (params instanceof Array && params != null){
          for (i=0; i < params.length; i++ ){
             gResult[i + 2] = params[i];
           }
        }
      	executeJSRuleNoField(sysCode, idForm, flow, gResult);
      } else {        
        if(errorFlow != null) {      
           executeJSRuleNoField(sysCode, idForm, errorFlow, errorParams);
        }
      }
    });
  }

/**
 * Esta fun��o cria um marcador no Mapa.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * 4. T�tulo do Marcador (Letras)<br/>
 * 5. Caminho da imagem (Letras, Opcional) (Relativo ou absoluto)<br/>
 * 6. Anima��o (opcional) (1 - Bounce, 2 - Drop)<br/>
 * 7. �cone Padr�o (l�gico)<br/>
 * 8. Letra do �cone (Letras) (Um caractere)<br/>
 * 9. Cor do �cone (Letras) (Hexadecimal)<br/>
 * 10. Cor da Letra (Letras) (Hexadecimal)<br/>
 * 11. Centralizar (L�gico)<br/>
 * 12. Mensagem ao clicar (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * Marcador Criado(Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura"
 */
function ebfMapsCreateMarker(map, lat, lgt, title, image, animation, icon, letter, colorIcon, colorLetter, centralize, infowindow) {
  if (map) {
    if(icon == true && image == null) {
       image = 'https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld='+letter+'|'+colorIcon.replace('#',"")+'|'+colorLetter.replace('#',"");
    }
    var center = new google.maps.LatLng(lat, lgt);
    var marker = new google.maps.Marker({
      position : center,
      map : map,
      title : title,
      icon : image,
      animation : animation
    });
      if(centralize == true){
      map.setCenter(center);
      }

	 // Par�metros do texto que ser� exibido no clique
     if(infowindow){
    	var infowindow = new google.maps.InfoWindow({
    	  content: infowindow,
    	  maxWidth: 400
    	});

    	// Exibir texto ao clicar no pin;
    	google.maps.event.addListener(marker, 'click', function() {
    	  infowindow.open(map,marker);
    	});
    }

    return marker;
  }
}

/**
 * Esta fun��o cria um �cone para ser utilizado na rota din�mica.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. S�mbolo (Ver Observa��o 1) (Letras);<br/>
 * 2. Cor do �cone (Hexadecimal ou  constante Cor);<br/>
 * 3. Opacidade do �cone (Ex: 1.0, 0.5, 0.8) (Letras);<br/>
 * 4. Cor da borda do �cone (Hexadecimal ou  constante Cor);<br/>
 * 5. Tamanho da borda (Ex: 1, 4, 6, 14) (Inteiro);<br/>
 * 6. Rota��o do �cone em Graus (Ex: 45, 90, 180, 360) (Inteiro);<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do �cone criado para ser utilizado na rota.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Os s�mbolos podem ser obtidos atrav�s dos link's abaixo:<br/>
 * <br/>
 *     Exemplo de s�mbolos predefinidos:<br/>
 *     https://developers.google.com/maps/documentation/javascript/symbols?hl=pt-br#predefined<br/>
 * <br/>
 *     Exemplo de s�mbolos customizados:<br/>
 *     https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-custom?hl=pt-br
 */
function ebfMapsDrawIcon(iconSymbol, iconColor, iconOpacity, borderColor, borderWeight, iconRotation) {
  
  var lineSymbol = {
    path: eval(iconSymbol),
    fillColor: iconColor,
    fillOpacity: iconOpacity,     
    strokeColor: borderColor,
    strokeWeight: borderWeight,
    rotation: iconRotation?iconRotation:0
  };  

  return lineSymbol;
}

/**
 * Esta fun��o tra�a rota entre dois pontos.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Origem Latitude (Letras);<br/>
 * 3. Origem Longitude (Letras);<br/>
 * 4. Destino Latitude (Letras);<br/>
 * 5. Destino Longitude (Letras);<br/>
 * 6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING) (Letras);<br/>
 * 7. �cone (Ver Observa��o 3)(Variante);<br/>
 * 8. Posi��o Inicial do �cone na Rota (Ver Observa��o 4)(Inteiro);<br/>
 * 9. Flexibilidade do �cone (Define se o �cone deve rotacionar de acordo com a rota) (L�gico); <br/>
 * 10. Cor da Linha (Hexadecimal ou constante Cor);<br/>
 * 11. Opacidade da Linha (Ex: 0.3, 0.5 1.0, quanto mais pr�ximo de 0, mais transparente fica) (Letras);<br/>
 * 12. Callback que receber� o objeto de resposta do tra�ado;<br/>
 * 13. Lista de par�metros adicionais (Opcional);<br/>
 * 14. Callback de erro;<br/>
 * 15. Lista de par�metros adicionais para o callback de erro (Opcional);<br/>
 * 16. Lista de pontos (Variante, Opcional); <br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo Refer�ncia da rota tra�ada;<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. As coordenadas precisam ter coer�ncia para que a rota seja tra�ada;<br/>
 * 3. O s�timo par�metro � o retorno da fun��o "Mapa - Criar �cone Para Rota Din�mica";<br/>
 * 4. Posi��o do �cone na rota, sendo 0 a origem e 100 o destino;<br/>
 * 5. O callback de erro recebe no primeiro par�metro o status referente ao erro;
 */
function ebfMapsDrawRouteDinamicaly(map, latOrigin, lngOrigin, latDestination, lngDestination, travelMode, iconLine, iconPosition, iconFlex, lineColor, lineOpacity, callback, param, callbackError, paramError, addressPoints) {
  var line;
  var directionsService = new google.maps.DirectionsService();
  var call;
  var callError;
  var addressPointsAux;

  if (addressPoints) {
    addressPointsAux = '['; 
    for (i = 0; i < addressPoints.length; i++) {
		
      if ((i + 1) == addressPoints.length) {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}';
      } else {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}, ';
      }
    }
    addressPointsAux = addressPointsAux + ']';
  }

  if(!iconLine){
    iconLine = {};
  }else{
    iconLine = { fixedRotation: !iconFlex, icon: iconLine, offset: iconPosition + '%' }
  }

  line = new google.maps.Polyline({
    strokeColor: lineColor?lineColor:'black',
    strokeOpacity: lineOpacity?lineOpacity:0.4,
    path: [],
    icons: [iconLine],
  });

  calcRoute();

  function calcRoute() {
    var start = new google.maps.LatLng(latOrigin, lngOrigin);
    var end = new google.maps.LatLng(latDestination, lngDestination);
    var request = {
        origin:start,
        destination:end,
        waypoints : eval(addressPointsAux),
        travelMode: eval('google.maps.TravelMode.' + travelMode)
    };

    call = callback;
    callError = callbackError;
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        //Adiciona a dist�ncia/tempo entre os pontos.
        line.duration = response.routes[0].legs[0].duration;
        line.distance = response.routes[0].legs[0].distance;
        var legs = response.routes[0].legs;


        for (i=0;i<legs.length;i++) {
          var steps = legs[i].steps;
          for (j=0;j<steps.length;j++) {
            var nextSegment = steps[j].path;
            for (k=0;k<nextSegment.length;k++) {
              line.getPath().push(nextSegment[k]);
            }
          }
        }
        if(call){
          if (param instanceof Array){
            param.unshift(response);
          }else{
            param = new Array();
            param[0] = response;
          }
          executeRuleFromJS(call, param);
        }

      } else {
        if(callError) {
          if(paramError instanceof Array) {
            paramError.unshift(status);
          } else {
            paramError = new Array();
            paramError[0] = status;
          }
          executeRuleFromJS(callError, paramError);
        }
      }
    });
  }

  line.setMap(map);

  return line;
}

/**
 * Esta fun��o cria um mapa na moldura especificada.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Formul�rio;<br/>
 * 2. Moldura (Componente)<br/>
 * 3. Zoom (Inteiro, Opcional);<br/>
 * 4. Latitude (Fracionado)<br/>
 * 5. Longitude (Fracionado)<br/>
 * 6. Tipo do Mapa (hybrid, roadmap, satellite ou terrain) (Letras);<br/>
 * 7. Objeto JSON contendo as configura��es do Mapa (Variante, Opcional) (Ver observa��o 4);<br/>
 * <br/>
 * Retorno:<br/>
 * Mapa Criado (Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Utilize a fun��o "Mapa - Importar biblioteca" antes de utilizar esta fun��o.<br/>
 * 2. No Internet Explorer caso o mapa seja criada em outra aba, a mesma s� ser� renderizada a parti da vers�o do (IE 11).<br/>
 * 3. Por determina��o da API do GoogleMaps, � recomendado que o Mapa seja criado em um elemento vis�vel na tela. Caso seja necess�rio criar um Mapa em uma Aba que n�o esteja ativa, basta utilizar o evento 'Ao Clicar na Aba' e realizar as opera��es desejadas.<br/>
 * 4. As configura��es desejadas podem ser obtidas atrav�s do link a seguir: <br/>
 * <br/>
 * https://mapstyle.withgoogle.com<br/>
 * <br/>
 * Ap�s configurar o Mapa no link acima, o mesmo devolve um JSON que ser� semelhante ao c�digo abaixo. Caso o retorno n�o seja semelhante ao dispon�vel abaixo, copie<br/>
 * o modelo abaixo e atualize apenas a chave "styles".<br/>
 * <br/>
 * {<br/>
 *     "center": {"lat": -33.86, "lng": 151.209},<br/>
 *     "zoom": 13,<br/>
 *     "mapTypeControl": false,<br/>
 *     "disableDefaultUI": true,<br/>
 *   "styles": [{<br/>
 *       "featureType": "poi",<br/>
 *       "stylers": [{"visibility": "off"}]<br/>
 *     },<br/>
 *     {<br/>
 *       "featureType": "transit",<br/>
 *       "elementType": "labels.icon",<br/>
 *       "stylers": [{"visibility": "off"}]<br/>
 *     }]<br/>
 *   }
 */
function ebfMapsFrameOpenMap(form, component, zoom, lat, lgt, type, mapConfig) {
  if (form && component) {
    var mapOptions = {
      "zoom" : zoom || 8,
      "center" : new google.maps.LatLng(lat, lgt),
      "mapTypeId" : type,
      "gestureHandling": "greedy"
    };
    var groupBox = $c(component, form);
    var map = new google.maps.Map(groupBox.div, mapOptions);
    // Caso o navegador suporte MutationObserver, cria um listener para quando houver modifica��o
    // no atributo style da Aba, for�ar um recarregamento do mapa, assim corrigindo o problema quando
    // se cria um mapa dentro de um elemento invis�vel
    if (typeof MutationObserver === "function") {
      var mo = new MutationObserver(function () {
        google.maps.event.trigger(map, "resize");
      });
      mo.observe(groupBox.doc, {"attributes" : true, "attributeFilter" : ["style"]});
    }    

    if(mapConfig != null && mapConfig != '' && mapConfig != undefined){    
      map.setOptions(mapConfig);
    }

    return map;
  }
}

/**
 * Esta fun��o obt�m as coordenadas baseado na posi��o do Street View.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Objeto Street View (Variante)<br/>
 * 2. Fluxo a ser Chamado (Fluxo)<br/>
 * 3. Lista de Par�metros (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Entrar em Modo Street View";<br/>
 * 2. O fluxo receber� automaticamente 2 par�metros. O 1� ser� referente � Latitude e o 2� ser� referente � Longitude;<br/>
 * 3. Os par�metros adicionais ser�o recebidos a partir do 3� par�metro.
 */
function ebfMapsGetCoordnateStreetView(street, flow, param) {
  google.maps.event.addListener(street, 'position_changed', function() {
    var position = street.getPosition();
    var list = new Array();
    var pos = position.toString();
    pos = pos.replace("(", "");
    pos = pos.replace(")", "");
    var latlgn = pos.split(",");  
    list[0] = latlgn[0];
    list[1] = latlgn[1];    
    if(param instanceof Array && param != null){ 
      for (i = 0; i < param.length; i++) {
        list[i + 2] = param[i];
      } 
     }     
     executeRuleFromJS(flow, list);
  });
}

/**
 * Esta fun��o obt�m o objeto Geocode a partir das coordenadas informadas. O fluxo informado receber� o endere�o das coordenadas e<br/>
 * o retorno dessa fun��o poder� ser executado para obter atributos do objeto GeoCode.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Latitude<br/>
 * 2. Longitude<br/>
 * 3. Fluxo que receber� o endere�o(Fluxo)<br/>
 * 4. Lista de par�metros adicionais (Opcional)(Lista)<br/>
 * 5. Enviar retorno como objeto JSON(Opcional)(L�gico)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. � necess�rio que a biblioteca do Google Maps esteja importada atrav�s da fun��o "Mapa - Importar biblioteca".<br/>
 * 2. Caso ocorra algum erro, o retorno ser� vazio e o erro ser� registrado no console.log do navegador<br/>
 * 3. Caso seja informado 'Verdadeiro'(true), ser� enviado para o fluxo de sucesso o objeto completo do retorno. Os atributos contidos no retorno em quest�o dispon�veis para consulta no link abaixo: <br/>
 * (https://developers.google.com/maps/documentation/javascript/geocoding?hl=pt)
 */
function ebfMapsGetGeoCodeFromLatLgn(lat, lgn, flow, param, resultObj) {
  var geocoder = new google.maps.Geocoder();
  var latlng = {
      lat: parseFloat(lat),
      lng: parseFloat(lgn)
  };
  return geocoder.geocode({
      'location': latlng
  }, function(results, status) {
      var GeoObject = "";
      if (status == google.maps.GeocoderStatus.OK) {
        if(resultObj){
          GeoObject = results; 
        } else {
          if(results[0]){ 
            GeoObject = results[0].formatted_address;
          }
        }
      } else {
          console.log("N�o foi poss�vel obter o endere�o a partir das coordenadas. C�digo do erro: " + status)
      }
      
      if(param instanceof Array){
        param.unshift(GeoObject);
      }else{
        param = new Array();
        param[0] = GeoObject;
      }
      executeRuleFromJS(flow, param);
  });
}

/**
 * Essa fun��o retorna de forma ass�ncrona uma lista de locais pr�ximos de acordo a localiza��o e o filtro informado.<br/>
 *   <br/>
 * Par�metros:<br/>
 * 1. Objeto Mapa (Variante) Retorno da fun��o Mapa - Criar Mapa em uma Moldura.<br/>
 * 2. Latitude (Letras).<br/>
 * 3. Longitude (Letras).<br/>
 * 4. Raio (Opcional)  (Inteiro) Ver observa��o 1.<br/>
 * 5. Filtro (Letras) Ex.:airport,  hospital, police e etc.  (Ver observa��o 2).<br/>
 * 6. Criar marcador? (L�gico).<br/>
 * 7. URL do �cone (Opcional) (Letras).<br/>
 * 8. Fluxo de Callback (Ver observa��o 3).<br/>
 *   <br/>
 * Retorno:<br/>
 * N�o possui;<br/>
 *   <br/>
 * Observa��es:<br/>
 * 1. O Raio � definido em km, caso n�o seja informado o mesmo assumir� o padr�o de 1km.<br/>
 * 2. Para consultar os tipos suportados consultar https://developers.google.com/places/supported_types?hl=pt-br.<br/>
 * 3. O fluxo definido no 8� par�metro deve conter dois par�metros que receber�o o retorno da fun��o: <br/>
 *     1� Lista de JSON com informa��es dos locais.<br/>
 *     2� Lista com as refer�ncias dos marcadores, nulo caso o 6� par�metro esteja definido como falso.<br/>
 * 4. A fun��o possu� um limite de 50 km para o raio informado.
 */
function ebfMapsGetNearbySearch (map, lat, lng, radius, filter, mk, urlIcon, callback){
  if(isNullOrEmpty(map)){
    handleException(new Error("Objeto Mapa (GoogleMaps) n�o definido."));
  } else{
    var pyrmont = new google.maps.LatLng(lat, lng);
    var service;
    var infowindow;
    radius = radius === undefined || radius === null ? 1000 : (radius * 1000);
    
    var request = {
      location: pyrmont,
      radius: radius,
      type:[filter]
    };
    
    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callBack);    
  }
  
  function callBack (results, status){
    if(status === google.maps.places.PlacesServiceStatus.OK){
    var lm = new Array();  
      if(mk){ 
        for(var i=0; i < results.length; i++){
          lm.push(createMarkerPlace(results[i]));
        }
      }  
      
      executeRuleFromJS(callback, new Array(results, lm));
    } else {
      handleException(new Error("Houve um problema, status do erro:" + status));
    }
  };

  function createMarkerPlace (place){
    var placeLoc = place.geometry.location;
    urlIcon = urlIcon === undefined || urlIcon === null ? place.icon : urlIcon;    
    
    var image = {
      url: urlIcon,      
      size: new google.maps.Size(20, 20),
      scaledSize: new google.maps.Size(20, 20)    
    };
    
    var options = {
      map: map,
      position: placeLoc,
      icon: image     
    };
    
    var marker = new google.maps.Marker(options);
    google.maps.event.addListener(marker, 'click', function(){     
      infowindow.setContent(place.name);
      infowindow.open(map, this);      
    });    
    return marker;
  }; 
};

/**
 * Esta fun��o importa a biblioteca de fun��es para utiliza��o das fun��es dispon�veis na categoria Google Maps.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Chave(API Key) (Letras);<br/>
 * 2. Regra a ser executada (Fluxo)(Ver observa��o 1);<br/>
 * 3. Par�metros da regra (Variante)(Lista com os valores);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. A regra ser� executada assim que a biblioteca for carregada.
 */
function ebfMapsImportLibrary (key, callbackRule, Params) {

  window.googlemapsCallbackFunction = function(){
    var parametros = Params;
    var ruleCallback = callbackRule;
    if(ruleCallback){
      executeRuleFromJS(callbackRule, parametros);
    }
  }

  var library = document.createElement("script");
  var url = "//maps.googleapis.com/maps/api/js?sensor=false&callback=googlemapsCallbackFunction&libraries=geometry,places";

  if (key){
    url = url + "&key=" + key;
  }
 
  library.setAttribute("type", "text/javascript");

  library.setAttribute("src",  url);
  document.head.appendChild(library);
}

/**
 * Esta fun��o define um per�metro, de forma poligonal, no mapa. <br/>
 * <br/>
 * Par�metro(s):.<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Lista com Latitude/Longitude (Ver observa��o 2)(Variante);<br/>
 * 3. Cor (Letras, Cor em hexadecimal. Exemplo: FF0000);<br/>
 * 4. Opacidade da Borda (Fracionado);<br/>
 * 5. Tamanho da Borda (Inteiro);<br/>
 * 6. Opacidade da �rea Interna  (Fracionado);<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Lista de lista. A primeira posi��o ser� a Latitude e a segunda posi��o ser� a Longitude;
 */
function ebfMapsPolygonsArea(map, lat, color, borderOpacity, borderWeight, areaOpacity) {
  var lats = [];
  for (var i = 0; i < lat.length; i++) {
    var aux = lat[i]
    var mapAux = new Object();
    mapAux['lat'] = aux[0];
    mapAux['lng'] = aux[1]
    lats.push(mapAux);
  }

  var poly = new google.maps.Polygon({
    map: map,
    paths: lats,
    strokeColor: color,
    strokeOpacity: borderOpacity,
    strokeWeight: borderWeight,
    fillColor: color,
    fillOpacity: areaOpacity,
    draggable: false
  });

  poly.setMap(map);
  return poly;
}

/**
 * Remove todos os eventos associados ao mapa.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.
 */
function ebfMapsRemoveAllListeners(map){
  if(map){
    google.maps.event.clearInstanceListeners(map);
  }
}

/**
 * Esta fun��o remove um ou v�rios marcadores do mapa.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Marcador ou Lista de Marcadores (Variante);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. S� ser�o removidos os marcadores que foram criados a partir da fun��o "Mapa - Criar Marcador";<br/>
 * 2. Ao passar uma lista de marcadores, todos ser�o removidos do Mapa.
 */
function ebfMapsRemoveMarkers(marker){
  if(marker){
    if(marker instanceof Array){
      for(i=0; i < marker.length; i++){
        if(marker[i] instanceof google.maps.Marker){
          marker[i].setMap(null);
        }	
      }
    }
    
	if(marker instanceof google.maps.Marker){
      marker.setMap(null);
    }
  }
}

/**
 * Permite criar ou modificar uma camada respons�vel pela visualiza��o o tr�fego atual, as rotas de transporte p�blico ou rotas de ciclovia da cidade. <br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Refer�ncia da Camada (Variante - Opcional);<br/>
 * 3. Inteiro (1-Tr�fego, 2-Transporte P�blico, 3- Ciclovias);<br/>
 * 4. Vis�vel? (L�gico).<br/>
 * <br/>
 * Retorno:<br/>
 * A fun��o ter� como retorno a refer�ncia da Camada criada/modificada. (Variante).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. O segundo par�metro s� deve especificado, caso seja necess�rio modificar uma camada existente.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como 1� Par�metro: a Refer�ncia do Mapa, 2� Par�metro: Nulo, 3� Par�metro: 1, 4� Par�metro: Verdadeiro. Ser� retornado a refer�ncia de uma camada vis�vel respons�vel por exibir o tr�fego atual no mapa.
 */
function ebfMapsSetOverlay(map, mapLayer, opt, visible) {
    if (mapLayer instanceof google.maps.MVCObject && typeof mapLayer.setMap === 'function') {
        mapLayer.setMap(null);
    }
    if (opt === 1 || opt === '1') { 
      mapLayer = new google.maps.TrafficLayer();
    } else if (opt === 2 || opt === '2') {
      mapLayer = new google.maps.TransitLayer();
    } else if (opt === 3 || opt === '3') {
      mapLayer = new google.maps.BicyclingLayer();
    }
    if (visible) {
        mapLayer.setMap(map);
    }else{
      mapLayer.setMap(null);
    }
    return mapLayer;
}

/**
 * Esta fun��o define um per�metro circular com base em uma coordenada.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * 4. Raio (Inteiro);<br/>
 * 5. Unidade de Medida;(Letras, Opcional)(km para Quil�metro, ml para Milhas)<br/>
 * 6. T�tulo(Letras)<br/>
 * 7. Cor (Letras, Cor em hexadecimal. Exemplo: FF0000).<br/>
 * 8. Centralizar? (L�gico)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do Objeto Per�metro Circular<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";
 */
function ebfMapsShowArea(map, lat, lng, radius, typeRadius, title, color, centralize) {
  var miles;
   
  if (typeRadius == 'km') {
    miles = radius / 1.609;    
  } else {
    miles = radius;      
  }

  var center = new google.maps.LatLng(lat, lng);
  var placemap = {};
  placemap[title] = {
    center : center,
    radius : miles
  };

  for ( var place in placemap) {
    var radiusOptions = {
      strokeColor : color,
      strokeOpacity : 0.8,
      strokeWeight : 2,
      fillColor : color,
      fillOpacity : 0.35,
      map : map,
      center : placemap[place].center,
      radius : placemap[place].radius * 1655
    };
    if(centralize == true){    
      map.setCenter(center)
    }
    return new google.maps.Circle(radiusOptions);
  }
}

/**
 * Esta fun��o habilita a fun��o street view no mapa.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Formul�rio<br/>
 * 2. Componente<br/>
 * 3. Mapa (Variante)<br/>
 * 4. Latitude (Letras)<br/>
 * 5. Longitude (Letras)<br/>
 * 6. �ngulo Vertical (Inteiro)<br/>
 * 7. �ngulo Horizontal (Inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referencia do objeto street view panorama.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";
 */
function ebfMapsStreetView(form, component, map, lat, lng, vertical, horizontal) {
  if (form && component) {
    var streetview;
    component = controller.getElementById(component, form);
    var position = new google.maps.LatLng(lat, lng);
    var streetOptions = {
      position : position,
      pov : {
        heading : vertical,
        pitch : horizontal
      }
    };
    streetview = new google.maps.StreetViewPanorama(component.div,streetOptions);
    map.setStreetView(streetview);
    return streetview;
  }
}

/**
 * Esta fun��o alterna entre o modo normal e o modo street view do mapa.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Objeto Street View (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Entrar em Modo Street View";
 */
function ebfMapsToggleStreetView(streetview) {
  if (streetview) {
    var toggle = streetview.getVisible();
    if (toggle == false) {
      streetview.setVisible(true);
    } else {
      streetview.setVisible(false);
    }
  }
}

/**
 * Esta fun��o tra�a rota entre dois ou mais pontos.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Origem (Letras)<br/>
 * 3. Destino (Letras)<br/>
 * 4. Lista de pontos (Variante, Opcional);<br/>
 * 5. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 6. Criar Marcadores (L�gico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura".
 */
function ebfMapsTraceRoute(map, addressStart, addressEnd, addressPoints, travelMode, designMarker) {
  var directionsService;
  var directionsRenderer;
  var addressPointsAux;

  if (addressPoints) {
    addressPointsAux = '[';
    for (i = 0; i < addressPoints.length; i++) {
      if ((i + 1) == addressPoints.length) {
        addressPointsAux = addressPointsAux + '{location: \"' + addressPoints[i] + '\"}';
      } else {
        addressPointsAux = addressPointsAux + '{location: \"' + addressPoints[i] + '\"},';
      }
    }
    addressPointsAux = addressPointsAux + ']';
  }
  directionsService = new google.maps.DirectionsService();   
  designMarker = designMarker ? false : !designMarker;
  directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: designMarker});
  directionsRenderer.setMap(map);

  var request = {
    origin : addressStart,
    destination : addressEnd,
    waypoints : eval(addressPointsAux),
    travelMode : travelMode 
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(response);
    }
  });  
  return directionsRenderer;
}

/**
 * Esta fun��o tra�a rota entre dois ou mais pontos.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Origem Latitude (Fracionado)<br/>
 * 3. Origem Longitude (Fracionado)<br/>
 * 4. Destino Latitude (Fracionado)<br/>
 * 5. Destino Longitude (Fracionado)<br/>
 * 6. Lista de pontos (Variante, Opcional);<br/>
 * 7. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 8. Criar Marcadores (L�gico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia do objeto tra�ado<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. As coordenadas precisam ter coer�ncia para que a rota seja tra�ada.
 */
function ebfMapsTraceRouteCoordenate(map, latOrigin, lngOrigin, latDestination, lngDestination, addressPoints, travelMode, designMarker) {
  var directionsService;
  var directionsRenderer;
  var addressPointsAux;

  if (addressPoints) {
    addressPointsAux = '['; 
    for (i = 0; i < addressPoints.length; i++) {
		
      if ((i + 1) == addressPoints.length) {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}';
      } else {
        addressPointsAux = addressPointsAux + '{location: new google.maps.LatLng(' + addressPoints[i][0] + ', ' + addressPoints[i][1] + ')}, ';
      }
    }
    addressPointsAux = addressPointsAux + ']';
  }

    
    directionsService = new google.maps.DirectionsService();  
    designMarker = designMarker ? false : !designMarker;
    directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers: designMarker});

  directionsRenderer.setMap(map);
  var addressStart = new google.maps.LatLng(latOrigin, lngOrigin);
  var addressEnd = new google.maps.LatLng(latDestination, lngDestination);

  var request = {
    origin : addressStart,
    destination : addressEnd,
    waypoints : eval(addressPointsAux),
    travelMode : travelMode
  };

  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(response);
    } else {
      return status;
    }
  });
  
  return directionsRenderer;
}

/**
 * Esta fun��o associa um fluxo � um determinado marcador do mapa que ser� executado quando o evento for disparado.<br/>
 * <br/>
 * Par�metros:<br/>
 * <br/>
 * 1. Refer�ncia do Marcador (Variante).<br/>
 * 2. Tipo de Evento (Letras).<br/>
 * 3. Nome do Fluxo (Letras).<br/>
 * 4. Lista de Par�metros do Fluxo (Variante).<br/>
 * 5. Objeto do Evento (L�gico).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * Observa��es:<br/>
 * <br/>
 * 1. A refer�ncia do marcador deve ser obtida atrav�s da fun��o Mapa - Criar Marcador.<br/>
 * 2. Os tipos de evento s�o os mesmos do JavaScript (click, dblclick, mouseover, etc...).<br/>
 * 3. Caso o par�metro Objeto do Evento for verdadeiro, o primeiro par�metro do fluxo ir� receber o objeto do evento.
 */
function ebfMarkerAddEventListener (obj, evt, flow, params, eventObject){
  //params = params || [];
  eventObject = parseBoolean(eventObject);
  if(eventObject){  
    params.unshift(this);
    obj.addListener(evt, function(){               
      ebfSetRuleExecutionTime(flow, params, 0);
    });
  } else {
      obj.addListener(evt, function(){
        ebfSetRuleExecutionTime(flow, params, 0);
      }); 
  }
}

/**
 * Essa fun��o mascara o conte�do passado no primeiro par�metro de acordo com a m�scara <br/>
 * passada no segundo par�metro.<br/>
 * <br/>
 * Par�metros<br/>
 * 1. Conte�do a ser mascarado <br/>
 * 2. M�scara (Letras)<br/>
 * <br/>
 * Retorno<br/>
 * Conte�do Mascarado (Letras)<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O tipo de dado passado no primeiro par�metro � levado em considera��o. Se o conte�do passado no primeiro<br/>
 * par�metro for um valor, o mesmo tem que ser passado como fracionado.<br/>
 * 2. A fun��o, funciona apenas como uma m�scara para o valor da tela. N�o influencia no resultado que ir� para o banco.<br/>
 * <br/>
 * Ex.:  CPF e CNPJ - Letras<br/>
 *         PLACA - Letras<br/>
 *         ANO/M�s - Letras<br/>
 *         Valor - Fracionado<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMaskFormatter(value, mask) {

  var pos = mask.indexOf(";");
  if(pos != -1)
    mask = mask.substring(0, pos);
  
  switch (mask) {
    case "###,#":
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{1})$/, "$1,$2");
    break;
    case "###.##":
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    break;
    case "$":
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{20})$/, "$1.$2");
    value = value.replace(/(\d)(\d{17})$/, "$1.$2");
    value = value.replace(/(\d)(\d{14})$/, "$1.$2");
    value = value.replace(/(\d)(\d{11})$/, "$1.$2");
    value = value.replace(/(\d)(\d{8})$/, "$1.$2");
    value = value.replace(/(\d)(\d{5})$/, "$1.$2");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    break;
    case "99\\.999\\-999":
    value = value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{3})$/, "$1-$2");
    break;
    case "99\\.999\\-\\0\\0\\0":
    value = value.replace(/\D/g, "");
    if (value.length > 8)
      value = value.substring(0, 8);
  	if (value.length < 8){
    	var length = 8 - value.length;
    	for (var i = 0; i < length; i++)
    	  value = value + '0';
    }
    value = value.replace(/^(\d{5})(\d)/, "$1-$2")
    break;
    case "99\\.999\\.999\\/9999\\-99":
    value = value.replace(/\D/g, "");
    if (value.length > 14)
      value = value.substring(0, 14);
    value = value.replace(/^(\d{2})(\d)/, "$1.$2");
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
    value = value.replace(/(\d{4})(\d)/, "$1-$2");
    break;
    case "999\\.999\\.999\\-99":
    value = value.replace(/\D/g, "");
    if (value.length > 11)
      value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    break;
    case "99-99999":
    value = value.replace(/\D/g, "");
    if (value.length > 7)
      value = value.substring(0, 7);
    value = value.replace(/(\d{2})(\d)/, "$1-$2");
    break;
    case "99.99.999":
    value = value.replace(/\D/g, "");
    if (value.length > 7)
      value = value.substring(0, 7);
    value = value.replace(/(\d)(\d{5})$/, "$1.$2");
    value = value.replace(/(\d)(\d{3})$/, "$1.$2");
    break;
    case "99.99.99.999.999":
    value = value.replace(/\D/g, "");
    if (value.length > 12)
      value = value.substring(0, 12);
	  value = value.replace(/(\d)(\d{10})$/, "$1.$2");
 	  value = value.replace(/(\d)(\d{8})$/, "$1.$2");
    value = value.replace(/(\d)(\d{6})$/, "$1.$2");
    value = value.replace(/(\d)(\d{3})$/, "$1.$2");
    break;
    case "999\\.99999\\.99\\-9":
    value = value.replace(/\D/g, "");
    if (value.length > 11)
      value = value.substring(0, 11);
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/^(\d{3})\.(\d{5})(\d)/, "$1.$2.$3");
    value = value.replace(/^(\d{3})\.(\d{5})\.(\d{2})(\d)$/, "$1.$2.$3-$4")
    break;
    case "99999/9999":
    value = value.replace(/\D/g, "");
    if (value.length > 9)
      value = value.substring(0, 9);
    value = value.replace(/(\d)(\d{4})$/, "$1/$2");
    break;
    case "9.9.99.99.99.99":
    value = value.replace(/\D/g, "");
    if (value.length > 10)
      value = value.substring(0, 10);
    value = value.replace(/(\d)(\d{9})$/, "$1.$2");
    value = value.replace(/(\d)(\d{8})$/, "$1.$2");
    value = value.replace(/(\d)(\d{6})$/, "$1.$2");
    value = value.replace(/(\d)(\d{4})$/, "$1.$2");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    break;
    case "9.9.99.99.99.99.99":
    value = value.replace(/\D/g, "");
    if (value.length > 12)
      value = value.substring(0, 12);
    value = value.replace(/(\d)(\d{11})$/, "$1.$2");
    value = value.replace(/(\d)(\d{10})$/, "$1.$2");
    value = value.replace(/(\d)(\d{8})$/, "$1.$2");
    value = value.replace(/(\d)(\d{6})$/, "$1.$2");
    value = value.replace(/(\d)(\d{4})$/, "$1.$2");
    value = value.replace(/(\d)(\d{2})$/, "$1.$2");
    break;
    case "(99) 9999-9999":
    value = value.replace(/\D/g, "");
    if (value.length > 10)
      value = value.substring(0, 10);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    break;
    case "99":
    value = value.replace(/\D/g, "");
    if (value.length > 2)
      value = value.substring(0, 2);
    break;
    case "SP":
    value = value.replace(/\D/g, "");
    if (value.length > 11)
      value = value.substring(0, 11);
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    break;

    default:
    return ebfMaskFormatter_(value, mask);
  }

  return value;
}

function ebfMaskFormatter_(_v, _d){
  var v = _v, m = convertToJsMask(_d);
  var r = "xU#*l", rt = [], nv = "", t, x, a = [], j=0, index=0; rx = {"x": "A-Za-z", "U": "A-Z�-�a-z�-�", "#": "0-9", "*": "A-Za-z0-9", "l": "A-Z�-�a-z�-�" };
  var ry = {"x": "A-Za-z�-�", "*": "A-Za-z�-�0-9", "c": " .,;:%()'{}|?&<>!{}*^_"};
  var b=[];
  for( var i=0; i < m.length; i++ ){

    x = m.charAt(i);

    t = (r.indexOf(x) > -1);

    if( x == "!" ) x = m.charAt(i++);

    if( (t) || (t && (rt.length < v.length)) ) rt[rt.length] = "[" + rx[x] + "]";

    a[a.length] = { "chr": x, "mask": t };
  }

   if( (v.length > 0) ){
    for( i=0; i < a.length; i++ ){
      if( a[i].mask ){
        while( v.length > 0 && !(new RegExp(rt[j])).test(v.charAt(j)) ) v = (v.length == 1) ? "" : v.substring(1);
        if( v.length > 0 ){
          nv += v.charAt(j);
        }
        j++;
        if( a[i].chr == "U") nv = nv.setCharAtUpper(nv.length-1, nv);    
        if( a[i].chr == "l") nv = nv.setCharAtLower(nv.length-1, nv);
      } else nv += a[i].chr;
      if( (j > v.length) ) break;
            
    }
  }

  return nv;
}

/**
 * Calcula o logaritmo na base 10 de um valor.<br/>
 * <br/>
 * Par�metros<br/>
 * 1. Valor para c�lculo (Logaritmando).<br/>
 * <br/>
 * Retorno: <br/>
 * Logaritmo na base 10 do valor determinado. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como o 1� Par�metro sendo: 86 o retorno ser� 1,934498451.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMath10Logarithm(theta) {
  var result = Math.log(toDouble(theta)) / Math.log(10);
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Logaritmo na Base 10.";
  }
  return result;
}

/**
 * A fun��o trigonom�trica arco cosseno ou co-seno retorna o cosseno inverso de um n�mero. O �ngulo cosseno em radianos � passado<br/>
 * no primeiro par�metro, retornando assim o arco cosseno do �ngulo passado.<br/>
 *  <br/>
 * Par�metros: <br/>
 * 1. �ngulo em radianos (deve estar entre -1 e 1).<br/>
 * <br/>
 * Retorno: <br/>
 * Arco cosseno do �ngulo determinado. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� par�metro sendo: -0,5 o retorno ser� aproximadamente 2,094395.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O �ngulo retornado � fornecido em radianos no intervalo de 0 (zero) a pi. <br/>
 * 2. Para garantir a integridade das opera��es matem�ticas, utilize convers�o: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por par�metro.<br/>
 * 3. Se voc� quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a fun��o Para Graus.
 */
function ebfMathArcCosine(theta) {
  var result = Math.acos(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Arco Cosseno.";
  }
  return result;
}

/**
 * A fun��o trigonom�trica arco seno obt�m o arco seno ou o seno inverso de um n�mero. O �ngulo seno � passado no primeiro par�metro,<br/>
 * retornando assim o �ngulo em radianos no intervalo de -pi/2 a pi/2.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Seno do �ngulo desejado e deve estar entre -1 e 1.<br/>
 * <br/>
 * Retorno: <br/>
 * Arco seno do �ngulo determinado. (Num�rico)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo: -0,5 o retorno ser� aproximadamente -0,5235987.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por par�metro.<br/>
 * 2. Se voc� quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a fun��o Para Graus.
 */
function ebfMathArcSine(theta) {
  var result = Math.asin(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Arco Seno.";
  }
  return result;
}

/**
 * A fun��o trigonom�trica arco tangente obt�m o arco tangente ou a tangente inversa de um n�mero. O �ngulo tangente �<br/>
 * passado no primeiro par�metro, retornando assim o �ngulo em radianos no intervalo de -pi/2 a pi/2.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Tangente do �ngulo desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Arco tangente do �ngulo determinado. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo: 1 o retorno ser� aproximadamente 0,78539816.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por par�metro.<br/>
 * 2. Se voc� quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a fun��o Para Graus.
 */
function ebfMathArcTangent(theta) {
  var result = Math.atan(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Arco Tangente.";
  }
  return result;
}

/**
 * Um Arranjo simples ou arranjo sem repeti��o obt�m o c�lculo do arranjo de um valor. <br/>
 * Um arranjo ou permuta��o sem repeti��o � o c�lculo de quantas maneiras diferentes � poss�vel colocar n elementos de um <br/>
 * conjunto com d elementos escolhidos em seq��ncia, sem repeti��o. A f�rmula do c�lculo de um arranjo � a seguinte: n! / (n-d)!<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Corresponde ao n�mero de elementos do conjunto (n na f�rmula acima);<br/>
 * 2. Corresponde a quantidade de elementos do conjunto (d na f�rmula acima).<br/>
 * <br/>
 * Retorno:<br/>
 * C�lculo do arranjo do valor determinado. (Inteiro)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1� par�metro sendo: 5 e o 2� par�metro sendo: 3 o retorno ser� 60 (Inteiro).<br/>
 * 1. Assumindo como o 1� par�metro sendo: 20 e o 2� par�metro sendo: 3 o retorno ser� 6840 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathArrangement(elements, choices) {
  elements = toLong(elements);
  choices = toLong(choices);
  var occurrences = elements - choices;
  return ebfMathFactorial(elements) / ebfMathFactorial(occurrences);
}

/**
 * Arredonda um valor fracionado para cima.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N�mero a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor arredondado para cima. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� par�metro sendo: 9,5 o retorno ser� 10<br/>
 * 2. Assumindo como o 1� par�metro sendo: 5,4 o retorno ser� 6.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathCeil(theta) {
  var result = Math.ceil(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido arredondando o valor para cima.";
  }
  return result;
}

/**
 * Uma combina��o simples ou combina��o sem repeti��o indica quantas variedades de subconjuntos diferentes com s elementos existem em um conjunto com n elementos. <br/>
 * S� � usada quando n�o h� repeti��o de membros dentro do conjunto. A f�rmula de c�lculo de uma combina��o � a seguinte: n! / s! * (n - s)!<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Quantidade de elementos do conjunto (corresponde ao n da f�rmula acima).<br/>
 * 2. Quantidade de elementos nos subconjuntos (corresponde ao s da f�rmula acima).<br/>
 * <br/>
 * Retorno: <br/>
 * C�lculo da combina��o. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como o 1� par�metro sendo: 3 e o 2� par�metro sendo: 2, o retorno ser� 3.<br/>
 * 2.Assumindo como o 1� par�metro sendo: 4 e o 2� par�metro sendo: 2, o retorno seria 6.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathCombination(elements, choices) {
  return ebfMathArrangement(elements, choices) / ebfMathFactorial(choices);
}

/**
 * Obt�m o cosseno de um �ngulo. Se o �ngulo estiver em graus, multiplique-o por PI/180 ou use a fun��o Para Radianos para convert�-lo em radianos.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �ngulo em radianos cujo cosseno voc� deseja obter.<br/>
 * <br/>
 * Retorno:<br/>
 * Cosseno do �ngulo determinado. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo: 1,047 o retorno ser� 0,500171.<br/>
 * 2. Assumindo como o 1� Par�metro sendo: 60*PI/180 o retorno ser� 0,5.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathCosine(theta) {
  var result = Math.cos(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Cosseno.";
  }
  return result;
}

/**
 * Obt�m a raiz c�bica de um valor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Raiz c�bica do valor determinado. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo: 8, o retorno ser� 2.<br/>
 * 1. Assumindo como o 1� Par�metro sendo: 27, o retorno ser� 3.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathCubeRoot(value) {
  value = toDouble(value); 
  var result = Math.pow(value, 1/3);
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo da Raiz C�bica.";
  }  
  var ceilValue = Math.ceil(result);
  if (Math.pow(ceilValue, 3) == value) {  
    return ceilValue;
  }  
  var floorValue = Math.floor(result);  
  if (Math.pow(floorValue, 3) == value) {  
    return floorValue;
  }
  return result;
}

/**
 * Retorna o Logaritmo natural de um n�mero. Os Logaritmos naturais se baseiam na constante e (2,71828182845904).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. � o n�mero real positivo para o qual voc� deseja obter o logaritmo natural.<br/>
 * <br/>
 * Retorno: <br/>
 * Logaritmo na base E do valor determinado. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo:86, o resultado ser�:4,454347.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathELogarithm(theta) {
  var result = Math.log(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Logaritmo Neperiano.";
  }
  return result;
}

/**
 * O Fatorial de um n�mero natural n � o produto de todos os inteiros positivos menores ou iguais a n. <br/>
 * Isso � escrito como n! e lido como "fatorial de n ".<br/>
 * <br/>
 * Par�metros <br/>
 * 1. Valor (n).<br/>
 * <br/>
 * Retorno: <br/>
 * Fatorial do valor determinado. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo: 5 o retorno ser�: 120.<br/>
 * 2. Assumindo como o 1� Par�metro sendo: 4 o retorno ser�: 24.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathFactorial(value) {
  var result = 1;
  value = toLong(value);
  if (value < 0) {
    throw "Argumento inv�lido no c�lculo em an�lise combinat�ria.";
  }
  if (value > 1) {
    while (value > 1) {
      result *= value;
      value--;
    }
  }
  return result;
}

/**
 * Arredonda um valor fracionado para baixo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. N�mero a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor arredondado para baixo. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� par�metro sendo: 9,5 o retorno ser� 9,0.<br/>
 * 2. Assumindo como o 1� par�metro sendo: 5,7 o retorno ser� 5,0.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathFloor(theta) {
  var result = Math.floor(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido arredondando o valor para baixo.";
  }
  return result;
}

/**
 * Constante de N�per ou Exponencial Neperiano. O n�mero de N�per � a base dos logaritmos naturais.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a constante de N�per � aproximadamente  (2,718 281 828 459 045 235 360 287). (Fracionado)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathNeper() {
  return Math.E;
}

/**
 * Obt�m o valor de PI.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor de PI (3,1415926535897...) (Fracionado.)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathPI() {
  return Math.PI;
}

/**
 * Obt�m o seno de um �ngulo.<br/>
 * Se o par�metro estiver em graus, multiplique-o por PI/180 ou use a fun��o Para Radianos para convert�-lo em radianos.<br/>
 * <br/>
 * Par�metros <br/>
 * 1. �ngulo em radianos para o qual voc� deseja obter o seno.<br/>
 * <br/>
 * Retorno: <br/>
 * Seno do �ngulo determinado. (N�mero)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1� Par�metro sendo PI (3.14159265359) , o retorno ser� aproximadamente 0.0206...<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfMathSine(theta) {
  var result = Math.sin(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo do Seno.";
  }
  return result;
}

/**
 * Obt�m a tangente de um �ngulo.<br/>
 * Se o par�metro estiver em graus, multiplique-o por PI/180 ou use a fun��o Para Radianos para convert�-lo em radianos.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. �ngulo em radianos para o qual se deseja a tangente.<br/>
 * <br/>
 * Retorno: <br/>
 * Tangente do �ngulo determinado.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo o Par�metro 1 como 0,785, o retorno seria 0,99920 aproximadamente.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfMathTangent(theta) {
  var result = Math.tan(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inv�lido para o c�lculo da Tangente.";
  }
  return result;
}

/**
 * Esta fun��o recebe um elemento de �udio ou v�deo e carrega o seu conte�do.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Refer�ncia do elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfMediaLoad(media){
  if (media instanceof HTMLDivElement) {
    media = media.getElementsByTagName("video")[0] || media.getElementsByTagName("audio")[0];
  } 
  if (media instanceof HTMLVideoElement || media instanceof HTMLAudioElement) {
    media.load();
  }
}

/**
 * Esta fun��o recebe um elemento de �udio ou v�deo e reproduz o seu conte�do.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Refer�ncia do elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfMediaPlay(media){
  if (media instanceof HTMLDivElement) {
    media = media.getElementsByTagName("video")[0] || media.getElementsByTagName("audio")[0];
  } 
  if (media instanceof HTMLVideoElement || media instanceof HTMLAudioElement) {
    media.play();
  }
}

/**
 * Fun��o que cria um novo componente Texto Longo dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da aba (caso ainda n�o exista,ser� criada);<br/>
 * 2. Posi��o X do componente;<br/>
 * 3. Posi��o Y do componente;<br/>
 * 4. Largura do componente;<br/>
 * 5. Altura do componente;<br/>
 * 6. Descri��o do componente;<br/>
 * 7. Valor inicial do componente;<br/>
 * 8. Nome interno do componente. Caso n�o definido, ser� dado com a descri��o (Par�metro 6);<br/>
 * 9. Quebra de Linha do valor inserido (Par�metro 7);<br/>
 * 10. Container;<br/>
 * 11. Estilo CSS;<br/>
 * <br/>
 * Retorno:<br/>
 * Nome interno definido para o componente.(Variante)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A fun��o n�o vai ter retorno caso seja salva na camada servidor.
 */
function ebfMemoNewComponent(tabName, posX, posY, width, height, description, value, id, wrap, compContainer, styleCss) {
  var code = getCodComponent();
  
  var component = new HTMLMemo(ebfGetSystemID(), ebfGetFormID(), code, posX, posY, width, height, description, value);
  component.id = (!isNullable(id) ? id : reduceVariable(description));
  component.wrap = !!wrap;
  component.zindex = 3;
  component.loadComponentTime = 0;
  component.styleCss = styleCss;
  
  var tabDiv;
  var tab = $mainform().d.t.getTabByName(tabName);
  if (tab) {
    tabDiv = tab.div;
  } else {
    tabDiv = d.t.add(tabName);
  }
  
  d['c_' + code] = component;
  if(compContainer){
    component.container = compContainer;
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
  component.design(tabDiv, true);   
  }
    
  setOrderTabDynamically(component);
  return component;
}

/**
 * Recebe um componente memo e transforma em texto rico b�sico.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� localizado o componente Memo.<br/>
 * 2. Componente memo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfMemoToBasicRichText(form, componentName) {
  var component = $c(componentName, form);
  if ((component instanceof HTMLMemo) && (!component.isRichText())) {
    component.richText = 1;    
    component.richTextLoad();
  }
}

/**
 * Altera o modo do menu (Projeto, Gerente e Normal)<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Sigla do modo do sistema.<br/>
 * <br/>
 * Sigla do Modo:<br/>
 * d - Modo Projeto<br/>
 * p - Modo Gerente<br/>
 * n - Modo Normal<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.
 */
function ebfMenuChangeMode(mode) {
  mainSystemFrame.changeMode = true;

  let openXHR = function(method, url, async, formdata, callback, params) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.setRequestHeader("Accept", "application/javascript,*/*;q=0.9");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded" + (isSafari ? ";charset=UTF-8" : ""));
    xhr.addEventListener("load", function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 299) {
          if (callback && typeof callback === "function") {
            callback.apply(params && Array.isArray(params) ? params : []);
          }
        } else {
          console.error(xhr.responseText);
        }
      }
    });

    xhr.addEventListener("error", function() {
      console.error(xhr.responseText);
    });

    xhr.send(formdata);
  };

  openXHR("POST", "form.do", true, "sys=" + sysCode + "&param=closeForm&formID=" + mainform.idForm +
    (mainform.WEBRUN_CSRFTOKEN ? "&WEBRUN-CSRFTOKEN=" + mainform.WEBRUN_CSRFTOKEN : ""), function() {

    openXHR("POST", "changeMode.do", true, "sys=" + sysCode + "&action=changeMode&mode=" + mode + "&back=true", ebfNavRefreshForm);
  });
}

/**
 * Moda � um termo estat�stico usado para para obter o valor que mais se repete ou que possui a maior freq��ncia <br/>
 * dentro de uma coluna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor que mais se repete entre os valores referente ao campo informado (Inteiro)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso a propriedade pagina��o esteja ativado, s� ser� retornado os valores referente a p�gina em quest�o.<br/>
 * 2. Caso n�o exista moda(nenhum valor que se repete) ser� retornado um campo em branco, ou seja nenhum valor.<br/>
 * <br/>
 * Exemplos: <br/>
 * Calculando a idade da moda de uma classe de alunos a pesquisa revelou as seguintes idades:<br/>
 * 18, 18, 19, 20, 21, 21, 22, 23, 23, 23, 24, 25, 26.<br/>
 * A fun��o retornar� a idade que mais aparece na pesquisa. Neste caso a idade foi de 23 ano de idade.
 */
function ebfModaGridColumn(form, gridName, columnName) {  
  var values = new Map();
  var mode = null;  
  var grid = $c(gridName, form);
  if(!grid){
    handleException(new Error("Componente "+gridName+" n�o encontrado"));
    return;
  }
  var lines = grid.getRowCount()
  var rNc = grid.getRealNameColumn(columnName);
  var ref = grid.iscCanvas;
  // Percorre os elementos da grid e adiciona no Map seus valores sem repeti��o.
  // No momento que um valor j� existe, incrementa-se apenas a quantidade de repeti��o.
  for (var i = 0; i < lines; i++) {
    var data = grid.isFiltered ? ref.getOriginalData().localData[i] : ref.getDataSource().cacheData[i];
    var value = parseNumeric(data[rNc]);
    if (!isNullable(value)) {
      var amount = 1;
      var currentAmount = values.get(value);
      if (currentAmount != null) {
        amount = currentAmount + 1;
      }
      values.add(value, amount);
    }
  }

  // Percorre o Map em busca da moda, ou seja, o elemento que tenha maior repeti��o.
  // Caso haja mais de um com a mesma repeti��o, o primeiro será retornado.
  var repetition = 1;
  for (var i = 0; i < values.size; i++) {
    var quantity = values.getValues()[i];
    if (quantity > repetition) {
      repetition = quantity;
      mode = values.getKeys()[i];
    }
  }
  
  // Se a repeti��o for 1, ent�o n�o houve moda.
  if (repetition == 1) {
    mode = null;
  }
  
  return mode;
}

/**
 * Esta fun��o recebe o nome do componente MultiSelect e retorna os valores que foram selecionados.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do MultiSelect. (Componente)<br/>
 * <br/>
 * Retorno:<br/>
 * Valores selecionados. (Variante)
 */
function ebfMultiSelectGetValues(componentName){
    let component = $c(componentName);
    return component.selected;
}

/**
 * Esta fun��o altera os valores selecionados na lista do componente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do MultiSelect. (Componente)<br/>
 * 2. Sequ�ncia de valores separados por v�rgula ','. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * 		<br/>
 * Observa��o:<br/>
 * 1.Ao inserir a sequ�ncia de valores como par�metro, colocar valores como: 1,2,3.<br/>
 * 2.Utilizar os mesmo valores contidos na lista de valores do componente. <br/>
 * 3.Caso um dos valores inseridos n�o esteja na lista ele ser� ignorado.
 */
function ebfMultiSelectSetValues(componentName, values) {
  let component = $c(componentName);
  let listValues = values.split(",").map(function(el) {
    return el.trim();
  });

  for (let i = 0; i < component.keys.length; i++) {
    component.unselectOption(component.keys[i]);
  }

  for (let i = 0; i < listValues.length; i++) {
    if (component.keys.indexOf(listValues[i]) != -1) {
      component.selectOption(listValues[i]);
    }
  }
}

/**
 * Essa fun��o remove todos os elementos do componente Multiselect passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente Multiselect<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. Ir� ser exibido a lista Carros com os elementos removidos.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfMultiselectClean(componentName) {
  let component = $c(componentName);
  if(component){
    component.clean();   
  }else{
    handleException(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", arguments[0]));
  }
}

/**
 * Essa fun��o Insere um elemento no componente Multiselect.  Passando como par�metro o componente Lista, o valor chave (que ser� o valor � ser salvo no banco) e o valor que representar� o valor chave.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente Multiselect<br/>
 * 2. Valor Chave (Letras)<br/>
 * 3. Valor que representar� a chave (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno (variante) somente para a camada Servidor, ser� o valor inserido no componente Multiselect.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O campo chave deve obrigatoriamente ser do tipo Letras. Caso contr�rio, o componente n�o ir� exibir os valores.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O 2� par�metro sendo 3 e o 3� par�metro sendo "Quebrado". O retorno ser� a lista Carros contendo os elementos 1 - Usado, 2 - Novo e 3 - Quebrado.
 */
function ebfMultiselectPut(componentName, key, value) {
  let component = $c(componentName);
  if(component){
    component.add(key, value);    
  }else{
    handleException(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", arguments[0]));
  }
}

/**
 * Remove o registro atual do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavDeleteCurrentRecord() {
  var nav = $mainform().d.n;
  if (nav) { 
    if(nav.actDeleteSync)
      nav.actDeleteSync();
    else 
      nav.actDelete();
  }
}

/**
 * Cancela o modo de edi��o de um registro.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * O uso desta fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavEditCancel() {
  var nav = $mainform().d.n;
  if (nav) {
    nav.timeout(nav.actEditCancel, 0);
  }
}

/**
 * Salva o registro corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavEditSaveRecord() {
  var nav = $mainform().d.n;
  if (nav) {  
    if(nav.actEditSaveSync)
      nav.actEditSaveSync();
    else
      nav.actEditSave();
  }
}

/**
 * Salva o registro corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Utilizar quando existir um fluxo associado ao evento "Depois de Alterar" e este fluxo receba como par�metros valores dos componentes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavEditSaveRecordAsync() {
  var nav = $mainform().d.n;
  if (nav) {  
    nav.actEditSave();
  }
}

/**
 * Vai para o primeiro registro do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavFirstRecord() {
  var nav = $mainform().d.n;
  if (nav) {
   if(nav.actFirstSync)	
     nav.actFirstSync();
   else
     nav.actFirst(); 
  }
}

/**
 * Vai para o registro definido no par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Posi��o do registro<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavGotoRecord(value) {
  var nav = $mainform().d.n;
  if (nav) {  
    if(nav.actGotoSync)
      nav.actGotoSync(value);
    else
      nav.actGoto(value);
  }
}

/**
 * Cancela o modo de inclus�o de um registro.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * O uso desta fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavIncludeCancel() {
  var nav = $mainform().d.n;
  if (nav) {
    nav.timeout(nav.actIncludeCancel, 0);
  }
}

/**
 * Inclui os dados como um novo registro no banco e fica novamente em modo de inser��o para um novo cadastro.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavIncludeMoreSaveRecord() {
  var nav = $mainform().d.n;
  if (nav) {
    if(nav.actIncludeSaveMoreSync) {
      try {
        nav.actIncludeSaveMoreSync();
      } finally {
        hideWait();
      }
    } else {
      nav.actIncludeSaveMore();
    }
  }
}

/**
 * Inclui os dados como um novo registro no banco e fica novamente em modo de inser��o para um novo cadastro.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Utilizar quando existir um fluxo associado ao evento "Depois de Inserir" e este fluxo receba como par�metros valores dos componentes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavIncludeMoreSaveRecordAsync() {
  var nav = $mainform().d.n;
  if (nav) {
    nav.actIncludeSaveMore();
  }
}

/**
 * Inclui os dados como um novo registro no banco.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Caso ocorra um erro durante a inser��o dos dados no banco, n�o � poss�vel capturar a exce��o com as fun��es<br/>
 * try/catch, pois a fun��o simula a grava��o de um registro que est� sendo editado e, em seguida, gravado no formul�rio.<br/>
 * Caso deseje tratar as exce��es, deve ser utilizada a fun��o "Executar Atualiza��o".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavIncludeSaveRecord() {
  var nav = $mainform().d.n;
  if (nav) {
    if(nav.actIncludeSaveSync)
      nav.actIncludeSaveSync();
    else
      nav.actIncludeSave();
  }
}

/**
 * Inclui os dados como um novo registro no banco.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Caso ocorra um erro durante a inser��o dos dados no banco, n�o � poss�vel capturar a exce��o com as fun��es<br/>
 * try/catch, pois a fun��o simula a grava��o de um registro que est� sendo editado e, em seguida, gravado no formul�rio.<br/>
 * Caso deseje tratar as exce��es, deve ser utilizada a fun��o "Executar Atualiza��o".<br/>
 * 3. Utilizar quando existir um fluxo associado ao evento "Depois de Inserir" e este fluxo receba como par�metros valores dos componentes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavIncludeSaveRecordAsync() {
  var nav = $mainform().d.n;
  if (nav) {
      nav.actIncludeSave();
  }
}

/**
 * Vai para o �ltimo registro do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Esta fun��o ao ser executada no evento ao entrar de um formul�rio, corre o risco do form ainda est� carregando e a<br/>
 * fun��o ocasionar um erro, pois se trata de um processo ass�ncrono. Para evitar tal problema, agende a execu��o do fluxo.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavLastRecord() {
  var nav = $mainform().d.n;
  if (nav) {  
    if(nav.actLastSync) 
      nav.actLastSync();
    else
      nav.actLast();
  }
}

/**
 * Vai para o pr�ximo registro do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavNextRecord() {
  var nav = $mainform().d.n;
  if (nav) {  
    if(nav.actNextSync)
      nav.actNextSync();
    else
      nav.actNext();
  }
}

/**
 * Vai para o registro anterior do formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavPreviousRecord() {
  var nav = $mainform().d.n;
  if (nav) {
    if(nav.actPreviousSync) 
      nav.actPreviousSync();
    else
      nav.actPrevious();      
  }
}

/**
 * Atualiza o registro corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNavRefreshCurrentRecord() {
  var nav = $mainform().d.n;
  if (nav) {  
    nav.execAjaxEval("refresh");
  }
}

/**
 * Atualiza o formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O uso dessa fun��o tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Esta fun��o atualiza todo o formul�rio.
 */
function ebfNavRefreshForm() {
  parent.location.reload();
}

/**
 * Fun��o que permite que um novo bot�o seja adicionado na barra de navega��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da imagem que dever� aparecer (A mesma dever� estar localizada em "assets/icons" no contexto utilizado).<br/>
 * 2. Descri��o (hint) que dever� aparecer<br/>
 * 3. Nome da REGRA (fluxo) que ser� executada ao se clicar no bot�o (esta regra dever� ser do tipo cliente).<br/>
 * 4. Lista de par�metros para execu��o da fun��o.<br/>
 * 5. Largura da Imagem.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Ao posicionar o mouse sobre a imagem, � necess�rio que haja outra com o mesmo nome da primeira mais '_over' para reproduzir o efeito de destaque neste evento.<br/>
 * Ex.: Nome da imagem : "enviar_email.gif"<br/>
 *        Imagem necess�ria: "enviar_email_over.gif"<br/>
 * 2. A imagem dever� ser colocada no diret�rio "assets/icons" no contexto utilizado.
 */
function ebfNavigationFormAddButton(img, caption, func, params, size){
  if(!size){
    size = 40;
  }
  func = reduceVariable(func, false);
  d.n.addMainButton("assets/icons/"+img, caption, function(){executeJSRule(ebfGetSystemID(), ebfGetFormID(), func, params)}, size);  
}

/**
 * Fun��o que cria um novo componente Imagem dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (caso n�o seja definida, a aba n�o ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descri��o do componente.,<br/>
 * 7. URL relativa da imagem desejada. (Exemplo:Skins/Default/background.jpg)<br/>
 * 8. Tipo  - Tipo  = 1 (Upload) / Tipo  = 2 (Digital Capture) / Tipo  = 3 (URL)  <br/>
 * 9. Nome do componente<br/>
 * 10. Dica do Componente (Letras)<br/>
 * 11. Container (Letras)<br/>
 * 12. Estilo CSS (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfNewImage(aba, posX, posY, width, height, description, value, type, id, hint, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLImage(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, value, type,false);    
  component.hasImage = true;
  component.viewMode = 'Estender';
  component.zoomWidth = 0;
  component.zoomHeight = 0;
  //d.c_260.md5 = '';
  component.id = id;
  //component.type = type;  
  component.exhibitionType = 2;   
  component.loadComponentTime = 0;
  component.styleCss = styleCss;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  } 
  if(compContainer){
    component.container = compContainer; 
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
    component.design(container.div, true);  
  }
  component.setHint(hint);
  document['c_' + code] = component;
}

/**
 * Usado para quebrar a linha (pular linha) em um texto, onde o par�metro recebido ser� a quantidade de linhas � serem<br/>
 * puladas.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Quantidade de quebra de linhas.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um texto com a quantidade de quebra de linha passada como par�metro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Em um processamento com uma concatena��o onde o 1� par�metro � "Maker" (Texto) o segundo � uma Quebra de 1 Linha <br/>
 * (Fun��o "Quebra de linha" passando 1(Inteiro) como par�metro) e o terceiro � "Flow" (texto), o retorno seria:<br/>
 * "Maker<br/>
 * // Quebra de Linha<br/>
 * Flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfNewLine() {
  var value = "";
  if (existArgs(arguments)) {
    var qtd = arguments[0];
    while (qtd-- > 0) {
      value += "\n";
    }
  }
  return value;
}

/**
 * Usado para quebrar a linha (pular linha) com retorno (\r\n) em um texto, onde o par�metro recebido ser� a <br/>
 * quantidade de<br/>
 * linhas � serem puladas.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Quantidade de quebra de linhas.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um texto com a quantidade de quebra de linha passada como par�metro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Em um processamento com uma concatena��o onde o 1� par�metro � "Maker" (Texto) o segundo � uma <br/>
 * Quebra de 1 Linha <br/>
 * (Fun��o "Quebra de linha" passando 1(Inteiro) como par�metro) e o terceiro � "Flow" (texto), o retorno seria:<br/>
 * "Maker<br/>
 * // Quebra de Linha<br/>
 * Flow".
 */
function ebfNewLineWithEscape() {
  var value = "";
  if (existArgs(arguments)) {
    var qtd = arguments[0];
    while (qtd-- > 0) {
      value += "\r\n";
    }
  }
  return value;
}

/**
 * Muda o foco do componente para o pr�ximo componente de acordo com a tabula��o.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. ID ou Nome do Componente em foco.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Pode ser utilizado o nome do componente ou o ID, obtendo atrav�s da fun��o "Obter ID do Componente".
 */
function ebfNextFocus(componentAtual) {
  componentAtual = $c(componentAtual);
  if (typeof(componentAtual) != "undefined") {
     controller.next(componentAtual, false);
  } else  {
      controller.focusFirst();
   }  
}

/**
 * Esse fun��o exibe uma notifica��o ao usu�rio fora do contexto de uma p�gina da web.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. T�tulo.<br/>
 * 2. Mensagem.<br/>
 * 3. URL do �cone (Opcional);<br/>
 * 4. URL da Imagem (Opcional);<br/>
 * 5. Tempo de Exibi��o em segundos (Opcional);<br/>
 * 6. ID (Opcional);<br/>
 * 7. Fluxo ao clicar na notifica��o (Opcional);<br/>
 * 8. Lista de par�metros do fluxo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o s� ir� notificar o usu�rio, se o mesmo tiver concedido permiss�o.<br/>
 * 2. Ao definir o 6� par�metro, caso a notifica��o esteja em exibi��o e uma nova seja lan�ada esta ser� sobreescrita.
 */
function ebfNotification(title, message, icon, image, timer, tag, flow, params){
  if(Notification.permission === "default"){
    Notification.requestPermission(function(permission){
      if(permission === "granted")
        notify();
      else if(permission === "denied")
        console.log("Solicita��o de permiss�o bloqueada pelo usu�rio");
    });
  }else if(Notification.permission === "denied"){
     console.log("Notifica��o bloqueada pelo usu�rio");
  }else{
    notify();
  }
  function notify(){
    tag = tag === undefined || tag === null ? "" : tag;
    var renotify = tag === "" ? false : true;
    timer = timer === undefined || timer === null || timer === "" ? 5000 : (timer * 1000);

    var options = {    
      body     : message,  
      icon     : icon,
      image    : image,
      tag      : tag,
      renotify : renotify
    }

    var notification = new Notification(title, options);
    notification.onshow = function(){setTimeout(closeNotify, timer, notification)};
    if(flow){
      params !== null && params instanceof Array ? params : [];
      notification.onclick = function(){ebfFlowExecute(flow, params)};
    }  
   
    function closeNotify(notification){
      notification.close();
    }
  }
}

/**
 * Esse fun��o solicita a permiss�o de notifica��o ao usu�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * Essa fun��o s� realizar a solicita��o ao usu�rio caso o status da permiss�o seja "default". Utilizar a fun��o "Notifica��o - Obter Status".
 */
function ebfNotificationRequestPermission(){
  Notification.permission != "default" ? null : Notification.requestPermission();
}

/**
 * Esta fun��o associa um evento no padr�o W3C ( DOM Events Specification ) a uma linha ou c�lula de uma tabela criada<br/>
 * previamente com as fun��es da categoria Tabela.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. GUID da linha ou GUID da c�lula.. <br/>
 * 2. Descri��o do evento.<br/>
 * 3. Fluxo que ser� executado quando o evento ocorrer.<br/>
 * 4. Lista com os par�metros a serem passados para o fluxo. (Variante)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o componente passado no primeiro par�metro seja nulo, o evento � associado ao formul�rio.<br/>
 * 2. O fluxo que ser� associado ao componente deve obrigatoriamente ser do tipo cliente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usu�rio passar o mouse sobre um<br/>
 *  componente Texto chamado "MakerLabel1", a fun��o ficaria:<br/>
 *    1� PAR�METRO: Guid (Retorno das fun��es: Tabela - Inserir linha em uma tabela e Tabela - Inserir c�lula em uma tabela);<br/>
 *    2� PAR�METRO: onmouseover (Letras);<br/>
 *    3� PAR�METRO: Observador de eventos (Letras);<br/>
 *    4� PAR�METRO: nulo;<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
var DOMEvent = new Array();

function ebfObjectEventAssociate(componente,evento,rule, ruleParams) {
          
     // Testa se o par�metro do fluxo a ser executado � nulo
     if (typeof(ruleParams) == 'undefined' || ruleParams == null) {
            ruleParams = '';
     }
     
     var component = $w(componente);
     
     // Remove o 'on' do evento
     var startsWithOn = /^on(.+)/;
     var found = evento.match(startsWithOn);
     if (found != null && found != -1)
       evento = RegExp.$1;
       
     // Formata o nome do fluxo e define algumas vari�veis
     var _ruleName = rule;
     var _params = ruleParams;
     var _sys = sysCode;
     var _formID = idForm;
     
     var func = function() {
       executeJSRuleNoField(_sys, _formID, _ruleName, _params);
     }
     
     DOMEvent[evento] = func;
     
     // Associa ao objeto
     addEvent(component,evento,func,true);
}

/**
 * Esta fun��o retorna uma lista contendo as chaves de  um elemento (DOM).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia do Elemento<br/>
 * <br/>
 * Retorno:<br/>
 * Lista de chaves do elemento (DOM)
 */
function ebfObjectKeys(object){
  return Object.keys(object);
}

/**
 * Fun��o que possibilita que um componente seja movimentado dentro de um formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente.<br/>
 * 2. Permitir movimenta��o? (Opcional).<br/>
 * 3. Fluxo (Opcional).  <br/>
 * 4. Lista de par�metros (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A regra associada no 3� par�metro ser� dispara ao movimentar o componente, sendo que a mesma s� poder� ser do <br/>
 * tipo cliente. A regra definida receber� automaticamente oito par�metros. (Posi��o X, Posi��o Y, Posi��o X anterior, Posi��o Y anterior, Refer�ncia do Componente, Mouse X, Mouse Y, Refer�ncia da DIV).<br/>
 * 2. Caso n�o seja definido o 2� par�metro o mesmo assumir� o valor true, permitindo a movimenta��o do componente.
 */
function ebfOnDragInit(componentVar,flag,ruleName,ruleParams){   
  var components = $c(componentVar);
  if(components){
    components.setDraggable(flag == undefined ? true : flag, components.div.parentElement);
    if(components.divDragComponent){ 
    components.divDragComponent.style.cursor = 'pointer';  
    components.divDragComponent.style.zIndex = parseInt(components.div.style.zIndex) + 1;
    components.ondragdrop = function(x,y,oldX,oldY,component,mouseDiffX,mouseDiffY,componentDiv){ 
      var newList = new Array();
      newList.push(x);
      newList.push(y);
      newList.push(oldX);
      newList.push(oldY);
      newList.push(component);
      newList.push(mouseDiffX);
      newList.push(mouseDiffY);
      newList.push(componentDiv);
      if(ruleName){
        if (ruleParams){
          for(var i = 0; i < ruleParams.length; i++){
            newList.push(ruleParams[i]);
          }
        } 
        executeJSRuleNoField(ebfGetSystemID(),ebfGetFormID(),ruleName,newList,false);
      }  
    };
  }
  } 
}

/**
 * Fun��o iniciada ao finalizar a movimenta��o de um componente no formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente.<br/>
 * 2. Nome do fluxo a ser chamado.<br/>
 * 3. Lista de par�metros para o fluxo.<br/>
 * <br/>
 * Retorno.<br/>
 * N�o Possui
 */
function ebfOndragEnd(componentName,ruleName,ruleParams) {    
    $c(componentName).ondragend = function(comp,div){        
         executeJSRuleNoField(ebfGetSystemID(),ebfGetFormID(),ruleName,ruleParams);
     };
}

/**
 * Movimentar componentes de um formul�rio (Ondragdrop).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do componente que ser� movido<br/>
 * 2. Nome de um fluxo chamado (Opcional)<br/>
 * 3. Par�metros da regra (Lista contendo par�metros "Opcional")<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.
 */
function ebfOndragdrop(componentName,ruleName,ruleParams) {    
    if($c(componentName))    
      if($c(componentName).div){
    //$c(componentName).div.style="cursor:pointer";
    //$c(componentName).div.setAttribute('style','cursor:pointer'); 
    $c(componentName).ondragdrop = function(x, y, oldX, oldY, component, mouseDiffX, mouseDiffY, componentDiv){        
         var newList = new Array();
         newList.push(x);   
         newList.push(y);  
         newList.push(oldX);  
         newList.push(oldY);  
         newList.push(component);  
         newList.push(mouseDiffX);     
         newList.push(mouseDiffY);  
         newList.push(componentDiv);      

         if (!isNullable(ruleParams)) {
            for(var i = 0; i < ruleParams.length; i++){
                newList.push(ruleParams[i]);
            }
            
         }
         executeJSRuleNoField(ebfGetSystemID(),ebfGetFormID(),ruleName,newList,false);
     };                                                                 
      }


}

/**
 * Abre uma url em uma janela flutuante.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL que ser� aberta.<br/>
 * 2. Nome da janela (N�o deve conter espa�o nem caracteres especiais).<br/>
 * 3. Descri��o da janela (T�tulo do formul�rio flutuante, Opcional, Letras).<br/>
 * 4. Largura (Inteiro)<br/>
 * 5. Altura (Inteiro)<br/>
 * 6. Classe HTML adicional (Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para colocar um caractere & que esteja entre os dados do valor de um par�metro de uma URL utilize a combina��o: %26 + &<br/>
 * 2. A URL deve possuir o protocolo "http://" antes do endere�o www, caso contr�rio, ser� tratato como uma URL relativa.<br/>
 * 3. O nome da janela n�o deve conter espa�o.<br/>
 * 4. A fun��o deve ser utilizara sempre a partir de um formul�rio flutuante.
 */
function ebfOpenFloatingUrl(pURL, pWindowName, pWindowDescription, pWindowWidth, pWindowHeight, pClass) {
  var formDiv = mainSystemFrame.document.getElementById("WFRIframeForm" + pWindowName);  
  if(formDiv !== null && formDiv.className.indexOf("WFRIframeForm-Active") === -1){
    formDiv.style.zIndex = ++mainSystemFrame.lastFormZindex;
    var activeForms = mainSystemFrame.document.getElementsByClassName("WFRIframeForm-Active");
    if(activeForms.length > 0){
      activeForms[0].getElementsByTagName("iframe")[0].contentWindow.document.getElementsByTagName("iframe")[0].contentWindow.document.activeElement.blur();
      activeForms[0].className = activeForms[0].className.replace(" WFRIframeForm-Active", "");
    }
    formDiv.className += " WFRIframeForm-Active";
  }
  if(formDiv === null){
    openFloatingUrl(pURL, pWindowName, pWindowDescription, pWindowWidth, pWindowHeight, pClass);    
  }else if(mainSystemFrame.document.getElementById("Min" + formDiv.id) !== null){
    mainSystemFrame.document.getElementById("minimizedFloatingDivs").removeChild(mainSystemFrame.document.getElementById("Min" + formDiv.id));    
    formDiv.style.display = "";
  }
}

/**
 * Abre o formul�rio associado ao componente grade passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para aparecer a lista de componente do formul�rio � necess�rio selecionar o formul�rio de trabalho no "Inicio" <br/>
 * do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio no in�cio, pode-se escrever o nome (Letras) do componente (nome da <br/>
 * grade) como par�metro.<br/>
 * 3. O evento deve estar no mesmo formul�rio onde est� o componente grade.<br/>
 * 4. O Componente Grade deve estar com a propriedade Apenas Leitura definido como "N�o".
 */
function ebfOpenFormGrid(gridName) {
  if (gridName) {
    var grid = $c(gridName);
    if (grid.currentRow == -1 && grid.getRowCount() > 0) {
      grid.selectRow(0, true);
    }

    grid.timeout(grid.openNormalForm, 0);
  }
}

/**
 * Faz o login no sistema utilizando a leitura biom�trica.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Sigla do sistema (Letras);<br/>
 * 2. DataConnection (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfOpenLogonDigitalCapture(system, dataConnection) {
  openLogonDigitalCapture(system, dataConnection ? dataConnection : "");
}

/**
 * Esta fun��o abre um determinado relat�rio podendo este estar ou n�o filtrado, a depender do par�metro <br/>
 * passado. Se for filtrado, o segundo par�metro deve receber valor l�gico "verdadeiro" e no terceiro par�metro <br/>
 * deve ter o filtro. Se n�o for filtrado, o segundo par�metro deve ter valor l�gico "falso" e o terceiro n�o deve <br/>
 * ser preenchido.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do relat�rio que ser� aberto.<br/>
 * 2. Para abrir filtrado, "verdadeiro", caso contr�rio, "falso".<br/>
 * 3. Filtro personalizado a ser passado.<br/>
 * 4. T�tulo da Janela.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros o nome do relat�rio "Cidade" (Letras), a op��o de filtro "verdadeiro" (L�gico) e o <br/>
 * filtro "cidade=Salvador", o resultado seria a abertura do relat�rio "Cidade" somente onde o campo Cidade <br/>
 * fosse Salvador.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O segundo par�metro que recebe "verdadeiro" ou "falso" indica se o relat�rio deve ser filtrado pelo <br/>
 * formul�rio que o abre. Para casos em que os campos do filtro coincidem com campos presentes na consulta <br/>
 * do formul�rio. Exemplo: se o relat�rio tiver um filtro chamado "PES_COD" e esse campo estiver presente na <br/>
 * consulta do formul�rio chamador, o relat�rio resultante ser� filtrado pelo valor corrente do campo em quest�o.<br/>
 * 2. Caso o relat�rio tenha sido feito pelo gerador de relat�rios legado (RB7), o filtro do terceiro par�metro deve <br/>
 * ser montado com a seguinte sintaxe: <campo>=<valor>[;<campo>=<valor>[;...]].<br/>
 * Exemplo: PES_UF=BA; PES_CIDADE=4. Tamb�m pode usar uma lista com tamanho par, onde os �ndices <br/>
 * �mpares s�o os nomes dos campos e os pares s�o os valores. O valor do campo utilizado nesse par�metro <br/>
 * sobrep�e o valor do campo que coincidir com a consulta do formul�rio, conforme explicado no segundo <br/>
 * par�metro.<br/>
 * 2.1 Caso o relat�rio tenha sido feito pelo RB10, deve ser utilizado o nome do par�metro definido no crit�rio da <br/>
 * consulta.<br/>
 * 3. Caso o relat�rio possua o filtro between (Entre), deve ser utilizada ao fim a express�o _copy (em <br/>
 * min�sculo).
 */
function ebfOpenReport(reportID, useForm, filter, title) {
  openWFRReport2(sysCode, reportID, idForm, title?title:reportID, useForm, filter);
}

/**
 * Abre um relat�rio, passado no 1� par�metro, sem desviar para uma tela ou perguntar por par�metros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. C�digo/Nome do Relat�rio.<br/>
 * 2. Par�metros do Relat�rio.<br/>
 * 3. Tipo do relat�rio gerado (PDF, HTM, JPG, XLS, TXT, SCR).<br/>
 * 4. Abrir em uma nova janela ?<br/>
 * 5. Usar o gerador local ? ("True" para usar o gerador local, "False" caso contr�rio)<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. O tipo SCR que pode ser informado no 3� par�metro desta fun��o est� relacionado � abertura do relat�rio <br/>
 * em tela.<br/>
 * 2. Caso o relat�rio tenha sido criado no Report Builder 7 (Gerador de Relat�rios legado), o filtro funciona da <br/>
 * seguinte forma: CAMPO=valor<br/>
 * 3. Caso o relat�rio tenha sido criado no Report Builder 10, o filtro deve ser o nome do par�metro definido no <br/>
 * crit�rio da consulta: PARAMETRO=valor.<br/>
 * 4. Caso queira definir v�rios par�metros, basta separ�-los por ponto e v�rgula(;). Exemplo: <br/>
 * PARAMETRO1=valor;PARAMETRO2=valor2.<br/>
 * 5. Caso o relat�rio tenha sido criado no Report Builder 7, o filtro between (Entre), deve ser utilizada ao fim a <br/>
 * express�o _copy. Exemplo: CAMPO=valor ; CAMPO_copy = valor. As datas devem ser separadas por ponto <br/>
 * e v�rgula e o copy deve ser todo min�sculo.<br/>
 * 6. Caso o relat�rio tenha sido criado no Report Builder 10, basta passar os par�metros inicial e final <br/>
 * separados por ponto e v�rgula.
 */
function ebfOpenReportInline(reportID, params, type, popup, local) {
  url = "wfrcore";
  url += "?action=reportOpenExternal&Order=";
  url += "&localreport=" + (local?"ON":"OFF");
  url += "&nopopup=" + (!popup?"true":"false");
  url += "&sys=" + sysCode;
  url += "&reportID=" + URLEncode(reportID, "GET");
  url += "&exptype=" + type;
  url += "&callfunction=true"  
  params = URLEncode(params, "GET");
  if (params != null) {                             
    url += ("&" + params.replace(/%3B/g,"&").replace(/%3D/g,'='));
  }
  IframeTransporter(url);
}

/**
 * Abre um relat�rio(passado no 1� par�metro) com ordena��o, sem desviar para uma tela ou perguntar por <br/>
 * par�metros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. C�digo/Nome do Relat�rio.<br/>
 * 2. Par�metros do Relat�rio.<br/>
 * 3. Ordena��o do Relat�rio.<br/>
 * 4. Tipo do relat�rio a ser gerado (PDF, HTM, JPG, XLS, TXT, SCR).<br/>
 * 5. Abrir em uma nova janela? ('True" para abrir em nova janela, "False" para abrir na mesma janela)<br/>
 * 6. Usar o gerador local? ("True" para usar o gerador local, "False" caso contr�rio)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A ordena��o deve estar no formato: tabela.campo1|[0|1][;tabela.campo2|[0|1][;tabela.campoN|[0|1]]], sendo: <br/>
 * "0" descendente e "1" ascendente. (Opcional) Exemplo: pessoa.cod_pessoa|1;pessoa.nome|0<br/>
 * 2. Caso o relat�rio tenha sido criado pelo gerador de relat�rios legado (Report Builder 7), o filtro funciona a <br/>
 * partir do campo. Exemplo: CAMPO=valor;<br/>
 * 3. Caso o relat�rio tenha sido criado pelo Report Builder 10, o filtro funciona a partir do nome do par�metro <br/>
 * definido no crit�rio da consulta do relat�rio. Exemplo: PARAMETRO=valor;<br/>
 * 4. O filtro a ser passado (no segundo par�metro) deve existir no relat�rio.<br/>
 * 5. Caso o relat�rio no Report Builder 7 possua o filtro between (Entre), deve ser utilizada ao fim a express�o <br/>
 * _copy. Exemplo: Data_Pagamento_copy=14/11/1987,14/11/2009. As datas devem ser separadas por v�rgula <br/>
 * e o copy deve ser todo min�sculo.
 */
function ebfOpenReportInlineOrder(reportID, params, order, type, popup, local) {
  url = "wfrcore";
  url += "?action=reportOpenExternal&Order="+URLEncode(order, "GET");
  url += "&localreport=" + (local?"ON":"OFF");
  url += "&nopopup=" + (!popup?"true":"false");
  url += "&sys=" + sysCode;
  url += "&reportID=" + URLEncode(reportID, "GET");
  url += "&exptype=" + type; 
  url += "&callfunction=true";
  params = URLEncode(params, "GET");
  if (params != null) {
    url += ("&" + params.replace(/%3B/g,"&").replace(/%3D/g,'='));
  }
  IframeTransporter(url);
}

/**
 * Essa fun��o ativa o aparelho de leitura/captura de uma digital.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Fluxo. <br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui;<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O fluxo que for passado por par�metro, deve possuir um  par�metro de entrada do tipo inteiro, e deve estar<br/>
 * associado a um outro fluxo que tenha como par�metro de entrada do tipo Letras.<br/>
 * <br/>
 * 2. Se a propriedade impress�o digital do componente imagem estiver selecionado, a fun��o "Abrir Leitor Digital" � executada automaticamente.<br/>
 * <br/>
 * 3. Insira um componente imagem no formul�rio, configure as propriedades da imagem, selecionando a propriedade 'campo' de tipo byte e a propriedade 'impress�o digital' um campo do tipo inteiro.<br/>
 * <br/>
 * 4. Para utilizar essa fun��o � necess�rio instalar o Servidor de Digitais e o Driver do Dispositivo. O Servidor de Digitais se encontra no DVD de instala��o e pode tamb�m ser obtido com a Softwell Solutions. O Driver de Dispositivo deve ser obtido junto com o seu fabricante (http://www.fingertech.com.br/downloads/drivers)<br/>
 * <br/>
 * 5. Apenas ser� identificado o usu�rio que esteja cadastrado no Servidor de Digitais.<br/>
 * Este servidor deve estar na mesma m�quina onde se encontra o banco de dados da aplica��o.<br/>
 * <br/>
 * 6. Quando o retorno � igual a -2, sabe-se que o Servidor de Digitais n�o foi encontrado.<br/>
 * Quando o retorno � igual a -1, sabe-se que o usu�rio n�o est� cadastrado no Servidor de Digitais.<br/>
 * Caso contr�rio, ser� retornado o inteiro equivalente � impress�o digital.<br/>
 * <br/>
 * 7. Configure corretamente seu aparelho de leitor de digitais, verificando se o mesmo foi instalado corretamente.
 */
function ebfOpenRuleDigitalCapture(ruleName) {
  openRuleDigitalCapture(sysCode, idForm, ruleName);
}

/**
 * Essa fun��o ativa o leitor para a captura da string biom�trica de uma digital.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O fluxo que for passado por par�metro, ir� receber a string da digital e deve possuir um  par�metro de entrada do tipo Letras.
 */
function ebfOpenRuleDigitalCaptureString(ruleName) {
  openRuleDigitalCapture(sysCode, idForm, ruleName, "string");
}

/**
 * Esta fun��o abre uma URL (p�gina) na mesma janela em que esta fun��o for chamada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL da p�gina (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfOpenUrlSameWindow(urlToOpen) {     
  window.top.location.href = urlToOpen;
}

/**
 * Calcula o resto da divis�o de dois n�meros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Dividendo.<br/>
 * 2. Divisor.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o resto da divis�o do n�mero do 1� Par�metro com o n�mero do 2� Par�metro.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os par�metros como: 7,5 e 2,5 , o retorno seria: 0.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function ebfOprMod() {
  var value = 0;
  if (existArgs(arguments)) {
    value = parseNumeric(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      var temp = parseNumeric(arguments[i]);
      value %= temp;
    }
  }
  return value;
}

/**
 * Essa fun��o calcula um pagamento, o qual retorna o valor das parcelas adicionando o juros.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor<br/>
 * 2. Quantidade de Meses<br/>
 * 3. Porcentagem dos Juros<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor das parcelas adicionando o juros.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro sendo 1000 (fracionado), o 2� par�metro sendo 5 e o 3� par�metro sendo 0,2. O retorno ser� 334,38.<br/>
 * <br/>
 * Observa��es: <br/>
 * A porcentagem tem que ser passada com as casas decimais, Exemplo: 1% � 0,01, 10% 0,1  etc.).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfPayment() {
  var result = 0.0;
  if (existArgs(arguments)) {
    result = (parseNumeric(arguments[0]) * parseNumeric(arguments[2])) / (1 - Math.pow( (1 / (1 + parseNumeric(arguments[2]))), toLong(parseNumeric(arguments[1]))));
  }
  return result;
}

/**
 * Recebe como par�metro uma lista de URLs e inclui ou substitui a lista de reprodu��o anterior.<br/>
 * Par�metros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Lista de URLs.<br/>
 * 3. Adicionar no fim da lista.<br/>
 * 	<br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * Se o par�metro "Adicionar no fim da lista" for verdadeiro, a nova lista de URLs ser� adicionada no fim da lista anterior, <br/>
 * caso contr�rio, a lista ser� totalmente substitu�da.
 */
function ebfPlayerSetPlaylist(componentName, URLList, add){
    component = $c(componentName);
    if(component){
        if(!add){
            component.clearPlaylist();
        }
        URLList.map(function(el){
            component.addMediaToPlaylist(el, "");
        });
    } else {
        interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", componentName));
    }
}

/**
 * Esta fun��o efetua a postagem (POST) de dados para uma determinada URL informada pelo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL (Letras)<br/>
 * 2. Dados (Letras)<br/>
 * 3. Levantar exce��o? (L�gico)<br/>
 * 4. Ass�ncrono ? (L�gico)<br/>
 * 5. Regra a ser executada (Fluxo, Opcional, Somente Ass�ncrono)<br/>
 * 6. Regra a ser executada caso ocorra erro (Fluxo, Opcional, Somente Ass�ncrono)<br/>
 * <br/>
 * Retorno:<br/>
 * Conte�do (Letras para S�ncrono e Variante para Ass�ncrono)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso seja definido a postagem como Ass�ncrono, deve-se informar um fluxo no 5� par�metro. O mesmo <br/>
 * ser� chamado assim que a postagem dos dados for conclu�da. O fluxo definido dever� possuir um par�metro de entrada <br/>
 * do tipo Letras que ser� a resposta (caso possua) do servidor.<br/>
 * 2. O 3� par�metro define se uma exce��o dever� ser levantada em caso de erros na postagem dos dados.<br/>
 * 3. Caso deseje passar os dados com caracteres especiais o mesmo deve ser codificado/escapado, conforme definido pelo w3c. Pode-se <br/>
 * efetuar essa codifica��o utilizando a fun��o "URL - Codificar".<br/>
 * 4. Esta fun��o somente retorna valores se a mesma for definida como S�ncrona (4� par�metro = falso). Caso seja definida como Ass�ncrona, o retorno ser� enviado para o fluxo que ser� chamado (Definido no 5� par�metro).<br/>
 * <br/>
 * Exemplo:<br/>
 * Primeiro par�metro definimos a URL:http://localhost:8036/webrun/FluxoWebPostarDados.rule?sys=M3B Segundo par�metro os dados: &EMPRESA=Softwell&PRODUTO=Maker<br/>
 * OBS:(EMPRESA e PRODUTO) s�o par�metros de entrada do fluxo e os mesmos devem ser passados separado por &.
 */
function ebfPostData(url, postData, throwsException, async, ruleCallback, ruleCallbackError) {
  if (async) {
    postURLAsync(url, postData, throwsException, ruleCallback, ruleCallbackError);
  } else {
    return postURL(url, postData, throwsException);
  }
}

/**
 * Muda o foco do componente para o componente anterior de acordo com a tabula��o.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. ID ou Nome do Componente em foco.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Pode ser utilizado o nome do componente ou o ID, obtendo atrav�s da fun��o "Obter ID do Componente".
 */
function ebfPrevFocus(componentAtual) {
  componentAtual = $c(componentAtual);
  if (componentAtual) {
     controller.next(componentAtual, true);
  } else  {
      controller.focusFirst();
   }  
}

/**
 * Essa fun��o realiza a impress�o do texto ou do arquivo de acordo as informa��es passada por par�metro.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Texto ou Link do Arquivo (Letras).<br/>
 * 2. � arquivo? (L�gico) (Ver Observa��o 3)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para que esta fun��o funcione corretamente � necess�rio instalar o servidor de impress�o e realizar as devidas configura��es. <br/>
 *   Para maiores informa��es, consultar a documenta��o. Link: http://suporte.softwell.com.br/maker/manual_3/pt/novidades/configuracao_impressao.html<br/>
 * 2. A impress�o ser� realizada na impressora definida como  padr�o.<br/>
 * 3. Ao informar o valor como Verdadeiro(true), ser� impresso o arquivo informado no primeiro par�metro, caso contr�rio <br/>
 * ser� impresso o texto.<br/>
 * <br/>
 * Tipos de arquivo suportados: .pdf .png .jpeg<br/>
 * <br/>
 * No caso da impress�o de arquivo, o mesmo deve estar dispon�vel via HTTP, EX: <br/>
 *   http://localhost:8049/webrunstudio/tmp/<nome do arquivo>.pdf<br/>
 * <br/>
 * Lembrando que, o link deve ser acess�vel externamente ou dentro da rede onde est� o servi�o.
 */
function ebfPrintDirect(texto, file){
  var iframe = document.createElement("iframe");
  iframe.frameBorder = 0;
  iframe.setAttribute("frameborder", "no");
  iframe.setAttribute("border", 0);
  iframe.setAttribute("marginwidth", 0);
  iframe.setAttribute("marginheight", 0);
  iframe.width = 0;
  iframe.height = 0;   

  var obj = {};  
  obj.file = file;  
  obj.text = texto;

  iframe.src = "printdirect.jsp?sys=" + sysCode + "&texto=" + URLEncode(ebfToJSString(translateAcentos(JSON.stringify(obj))));
  document.body.appendChild(iframe);     
}

/**
 * Esta fun��o imprime o conte�do do elemento passado no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. T�tulo da Janela.<br/>
 * 2. Elemento HTML (Utilize a fun��o HTML - Obter Elemento pelo ID).<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o elemento que se deseja imprimir tenha elementos de desenho, EX: canvas, o mesmo ser� ignorado na impress�o.
 */
function ebfPrintHTMLContent(title, data){
  var mywindow = window.open('', '');  
  if (!title){  
    title = "";
  }
  mywindow.document.write('<html><head><title>' + title + '</title>');
  css = document.getElementsByTagName('link');
  for(i = 0; i < css.length; i++){
    if(css[i].rel === "stylesheet"){
      mywindow.document.write('<link rel="stylesheet" href="' + css[i].href + '" type="text/css" />');
    }
  }
  mywindow.document.write('</head><body >');
  mywindow.document.write(data.innerHTML);
  mywindow.document.write('</body></html>');
  mywindow.document.close();
  mywindow.print();
  return true;
}

/**
 * Esta fun��o imprime o conte�do da p�gina da forma que a mesma � exibida no navegador.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.
 */
function ebfPrintHTMLContentPage(){
  window.print();
}

/**
 * Esta fun��o exibe uma caixa de di�logo solicitando uma entrada do usu�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto do di�logo.<br/>
 * 2. Texto pr�-definido.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o texto que o usu�rio digitou. Caso o usu�rio click em Cancelar, o retorno � nulo.
 */
function ebfPrompt(dialog, stringDefault) {
  stringDefault = stringDefault || "";
  return prompt(dialog, stringDefault);
}

/**
 * Essa fun��o realiza um registro para que a aplica��o possa receber notifica��es via Push.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo que ser� executado ao registrar o dispositivo/usu�rio. (Ver observa��o 3)<br/>
 * 2. ID do Projeto (Utilizado para o Google Cloud Message/Firebase).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * <br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para obter o registro da aplica��o no Google, utilize o link https://console.firebase.google.com/<br/>
 * 2. Para obter o registro da aplica��o na Apple (APNS), utilize o link https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194-CH3-SW1<br/>
 * 3. O fluxo associado no primeiro par�metro, receber� automaticamente o c�digo do dispositivo registrado no servidor de push. Caso ocorra falha, o fluxo receber� o c�digo -403, que indica que ocorreu um erro no registro
 */
function ebfPushRegister(onsucess, senderid){
  
  function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  ebfFlowExecute(onsucess, [guid()]);
}

/**
 * Recebe como par�metro uma nova URL e recarrega o componente RSS especificado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente.<br/>
 * 2. URL do RSS.<br/>
 * 3. Charset.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * Se o par�metro URL for nulo, o componente ser� recarregado mantendo a URL anterior.
 */
function ebfRSSReload(name, URL, charset) {
  let component = $c(name); 
  if(component) {
    component.setUrl(URL, charset);
  } else {
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", name));
  }
}

/**
 * Fun��o que adiciona um item ao componente Op��es passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente (Componente Op��es)<br/>
 * 3. Valor (Referente ao item adicionado (pode ser passado como par�metro) )<br/>
 * 4. Label (Nome que aparecer� (pode ser passado como par�metro) )<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Ao adicionar item ao componente dinamicamente, n�o � poss�vel salvar a op��o selecionada no banco.
 */
function ebfRadioGroupAdd(form, component, value, label){
  var component = $c(component);
  if(!(isIE || isIE11)){  
    document.getElementsByName("WFRInput"+component.code)[0].remove();
  }else{
    var child = document.getElementsByName("WFRInput"+component.code)[0];    
    child.parentElement.removeChild(child);
  }
  component.add(value, label);
}

/**
 * Fun��o que remove/limpa todos os itens do componente Op��es (RadioGroup).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio.<br/>
 * 2. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfRadioGroupClean(form, component){
  var component = $c(component);
  var size = component.options.length;
  for(i=0;i<size;i++){
    component.labels.splice(0, 1);
    component.values.splice(0, 1);
  }  
  document.getElementsByName("WFRInput"+component.code)[0].remove();
  component.reDesign();
}

/**
 * Fun��o que retorna a quantidade itens de um componente Op��es<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se encontra o componente<br/>
 * 2. Componente Op��es<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a quantidade de itens do componente (Inteiro)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfRadioGroupGetSize(form, component){  
  component = $c(component);
  return component.options.length;
}

/**
 * Fun��o que cria um novo componente Op��es din�micamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Aba (Caso a aba definida neste par�metro n�o exista, a mesma ser� criada).<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente<br/>
 * 6. Descri��o do Componente<br/>
 * 7. Valor do Componente<br/>
 * 8. Lista de Labels (fun��o: "Criar lista apartir dos elementos" ajuda na cria��o de labels)<br/>
 * 9. Lista de Valores (fun��o: "Criar lista apartir dos elementos" ajuda na cria��o dos valores)<br/>
 * 10. Container<br/>
 * 11. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfRadioGroupNew(aba,posX,posY,width,height,description,value,labels,values, compContainer, styleCss){
  var code = getCodComponent();
  var component = new HTMLRadioGroup(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, description, value, labels, values);
  component.id = description;
  component.zindex = 3;
  component.loadComponentTime = 0;
  component.styleCss = styleCss;
  var container = $mainform().d.t.getTabByName(aba);
  if(!container){
     d.t.add(aba);
     container = $mainform().d.t.getTabByName(aba);
  }
  setOrderTabDynamically(code); 
  if(compContainer){
    component.container = compContainer;
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  }else{ 
     component.design(container.div, true);  
   }
  document['c_' + code] = component;  
}

/**
 * Fun��o que remove um item do componente Op��es tomando o label do item como refer�ncia.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde est� localizado o componente Op��es.<br/>
 * 2. Componente<br/>
 * 3. Label do item a ser removido<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfRadioGroupRemoveByLabel(form, component, label){  
  component = $c(component);
  var idx = arrayIndexOf(component.labels, label);
  if (idx != -1) {     
    component.options.splice(idx, 1);
    component.values.splice(idx, 1);
    component.labels.splice(idx, 1);     
  }else
    interactionError(getLocaleMessage("INFO.KEY_ELEMENT_DOES_NOT_EXIST",key));

  element = document.getElementsByName("WFRInput"+component.code);
  if (element)  {
    element[0].parentNode.removeChild(element[0]);      
    component.reDesign();     
  }
  
  component.reDesign();  
}

/**
 * Fun��o que remove um item do componente Op��es tomando o �ndice como refer�ncia.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio<br/>
 * 2. Componente<br/>
 * 3. �ndice do item a ser removido (O Primeiro � 0)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O �ndice dos itens est�o na ordem N-1.
 */
function ebfRadioGroupRemoveItem(form, component, idx){  
  component = $c(component);
  component.values.splice(idx, 1);
  component.labels.splice(idx, 1);
  element = document.getElementsByName("WFRInput"+component.code);
  if (element)  {
    element[0].parentNode.removeChild(element[0]);      
    component.reDesign();     
  }
}

/**
 * Fun��o que seleciona o item do componente Op��es.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio.<br/>
 * 2. Componente.<br/>
 * 3. Valor (o configurado no componente para ser salvo no banco).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfRadioGroupSetChecked(form, component, idx){
  var component = $c(component);
  for(i=0;i<component.options.length;i++){
    if(component.options[i].value == idx){
      component.options[i].setChecked(true);
    } else {
      component.options[i].setChecked(false);
    }
  }
}

/**
 * Retorna um n�mero inteiro aleat�rio entre 0 e o valor informado como par�metro (ver exemplo).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor que definir� o intervalo do n�mero. <br/>
 * <br/>
 * Retorno:<br/>
 * N�mero aleat�rio ( Inteiro).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metro 7 (Inteiro), o retorno seria um n�mero aleat�rio entre 0 e 6 (n-1).
 */
function ebfRandom(value) {
  return parseInt(parseNumeric(value) * Math.random());
}

/**
 * Esta fun��o obt�m o challenge do captcha aberto no formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Challenge (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ReCaptcha � um servi�o anti-spam gratu�to e mantigo pelo Google. Para obter informa��es, cria��o de chaves <br/>
 * p�blicas<br/>
 * e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaGetChallenge() {
  var challenge = $mainform().document.getElementById("recaptcha_challenge_field");  
  if (challenge) {
    return challenge.value;  
  }
}

/**
 * Esta fun��o obt�m a resposta do captcha aberto no formul�rio corrente e digitado pelo usu�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Resposta do usu�rio (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ReCaptcha � um servi�o anti-spam gratu�to e mantigo pelo Google. Para obter informa��es, cria��o de chaves <br/>
 * p�blicas e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaGetResponse() {
  var response = $mainform().document.getElementById("recaptcha_response_field");  
  if (response) {
    return response.value;  
  }
}

/**
 * Esta fun��o atualiza o captcha para um novo challenge (novas combina��es de letras).<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ReCaptcha � um servi�o anti-spam gratu�to e mantigo pelo Google. Para obter informa��es, cria��o de chaves <br/>
 * p�blicas e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaRefresh() {
  if ($mainform().Recaptcha) {
    $mainform().Recaptcha.reload();  
  }
}

/**
 * Esta fun��o cria uma inst�ncia do ReCaptcha (Ferramenta de verifica��o anti-spam) e exibe dentro da moldura informada<br/>
 * como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Moldura (Componente)<br/>
 * 2. Chave P�blica do ReCaptcha (Letras)<br/>
 * 2. Chave Privada do ReCaptcha (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O ReCaptcha � um servi�o anti-spam gratu�to e mantigo pelo Google. Para obter informa��es, cria��o de chaves <br/>
 * p�blicas<br/>
 * e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaShow(componentVar, publicKey, privateKey) {
  if ($c(componentVar)) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://www.google.com/recaptcha/api/js/recaptcha_ajax.js";     
    script.onload = function() {
      Recaptcha.create(publicKey, $c(componentVar).div, {
        theme: "white",        
        lang: "pt",
        callback: Recaptcha.focus_response_field
      });
    };
    $c(componentVar).div.style.border = "0";
    $c(componentVar).div.appendChild(script);
  }
}

/**
 * A fun��o atualiza o registro corrente de um formul�rio que est� em uma moldura a partir de outro formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde a moldura se encontra.<br/>
 * 2. Moldura onde se encontra o outro formul�rio.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o s� ir� funcionar caso exista algum parentesco entre os formul�rios.
 */
function searchFormByGUIDRefreshBevelOtherForm(currentForm, GUID){
  if (currentForm && currentForm.formGUID == GUID){
    return currentForm;
  }
  if (currentForm && currentForm.$mainform() && currentForm.$mainform().formGUID == GUID) {
    return currentForm.$mainform();
  }
  if (currentForm.children) {
    for (var i=0; i < currentForm.children.length; i++) {
      try {
        if (currentForm.children[i].$mainform()) {
          if (currentForm.children[i].$mainform().formGUID == GUID){
            return currentForm.children[i].$mainform();
          }
          var childForm = currentForm.children[i];
          if (currentForm.children[i].$mainform().d.n.isModal) {
            childForm = childForm.$mainform();
          }
          var returnForm = searchFormByGUIDRefreshBevelOtherForm(childForm,GUID);
          if (returnForm){
            return returnForm;
          }
        }
      }catch(e){}
    }
  }
}

function searchFloatingFormRefreshOtherForm(formGUID) {
  var openFloatingForms;
  if (isPopup) {  
    var mainFormWindow = top.opener;
    while(mainFormWindow.opener) {    
      mainFormWindow = mainFormWindow.opener;
    }    
    openFloatingForms = mainFormWindow.mainSystemFrame.document.getElementsByClassName("WFRIframeForm");
  } else {
    openFloatingForms = mainSystemFrame.document.getElementsByClassName("WFRIframeForm");  
  }
  for (var i=0; i<openFloatingForms.length; i++) {
    var formReference = openFloatingForms[i].children[1].children[1].contentWindow.mainform;
    if (formReference.formGUID == formGUID) {
      return formReference;    
    }
  }
}

function ebfRefreshBevelOtherForm(form, componentName){
  var mainWindow = top;
  while (getOpenerWindow(mainWindow) != null) {
    var openerWindow = getOpenerWindow(mainWindow);
    if (openerWindow.mainform && !isNullable(openerWindow.mainform.sysCode)) {
      mainWindow = openerWindow;
    } else {
      break;
    }
  }
  
  var formFounded = searchFormByGUIDRefreshBevelOtherForm(mainWindow, form);    
  if (!formFounded) {
    formFounded = searchFloatingFormGet(form);  
  }
  if (formFounded){
    formFounded.mainform.ebfFrameRefreshForm(form, componentName);
  }
}

/**
 * Atualiza o componente em outro formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Constante formul�rio ou GUID.<br/>
 * 2. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Para o funcionamento correto desta fun��o o formul�rio passado como par�metro deve est� aberto.
 */
function ebfRefreshComponentOtherForm (form, component) {
  if(webrunBroadcast) {
    const jsonProperties = {};
    jsonProperties.formGUID = form;
    jsonProperties.action = "wrc";
    jsonProperties.component = component;
    jsonProperties.formTarget = decodeURI(mainform.formGUID);

    webrunBroadcast.postMessage(jsonProperties);
  }
}

/**
 * Atualiza o registro corrente do formul�rio pai.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfRefreshCurrentRecortParentForm() {
  if (parent && parent.frameElement && parent.frameElement.targetContext) {  
    parent.frameElement.targetContext.mainform.d.n.execAjaxEval("refresh");
  } else if (top.opener) {
    top.opener.mainform.d.n.execAjaxEval("refresh");
  } else if (parent.opener) {
    parent.opener.mainform.d.n.execAjaxEval("refresh");
  }
}

/**
 * A fun��o atualiza o formul�rio onde est� o evento.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o Possui<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Se essa fun��o for executada antes de salvar altera��es feitas no formul�rio, estas ser�o perdidas, pois a <br/>
 * essa fun��o traz os dados existentes no banco.<br/>
 * 2. Esta fun��o pergunta ao usu�rio se deseja atualizar o registro corrente ou todo o formul�rio,
 */
function ebfRefreshForm() {
  $mainform().d.n.actRefresh();
}

/**
 * A fun��o atualiza o formul�rio( apenas o registro corrente) onde est� o evento sem intera��o de confirma��o com o usu�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Se essa fun��o for executada antes de salvar altera��es feitas no formul�rio, estas ser�o perdidas, pois a <br/>
 * essa fun��o traz os dados existente no banco.<br/>
 * 2. Indicada para atualizar formul�rio Modal.<br/>
 * 3. Esta fun��o deve ser utilizada em formul�rio com consulta.
 */
function ebfRefreshFormModal() {
  $mainform().d.n.execAjaxEval("refresh");
}

/**
 * Essa fun��o � utilizada para atualizar o registro que est� sendo mostrado no formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfRefreshRecord() {
  $mainform().d.n.execAjaxEval("refresh");
}

/**
 * Esta fun��o retorna as subsequ�ncias correspondentes � express�o regular passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * <br/>
 * 1. Express�o Regular (Letras) (Ver Observa��o 1)<br/>
 * 2. Texto (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * <br/>
 * O retorno desta fun��o � uma lista de listas contendo todas as subsequ�ncias encontradas.<br/>
 *   - As listas possuem em seu primeiro �ndice a subsequ�ncia geral da express�o seguida das subsequ�ncias obtidas pelos grupos de captura.<br/>
 * <br/>
 * Lista de subsequ�ncias (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * <br/>
 * 1.  O primeiro par�metro deve conter a express�o regular, as express�es tem formatos divergentes na camada cliente e servidor.<br/>
 *   Como exemplo, temos a seguinte express�o que retorna todos caracteres diferente de n�mero:<br/>
 *   -  Camada Cliente:<br/>
 *   Exemplo:<br/>
 *     /EXPRESS�O_REGULAR/MODIFICADORES<br/>
 *     /[^0-9]/gm (Express�o exemplo)<br/>
 * <br/>
 *   - Camada Servidor:<br/>
 *   Exemplo:<br/>
 *     EXPRESS�O_REGULAR<br/>
 *     [^0-9] (Express�o exemplo)<br/>
 * <br/>
 * Para validar as express�es tando na camada cliente(JavaScript) quanto na camada servidor(Java), sugerimos a utiliza��o da ferramenta Regex101 que, ao inserir a express�o regular � poss�vel verificar a formata��o da express�o de acordo com a camada clicando na op��o 'Code Generator'.<br/>
 * <br/>
 * Regex101:<br/>
 * https://regex101.com/
 */
function ebfRegExpGetMatches(regexp, text){
  var sub, re, i;
  regexp += '';
  text += '';
  subsequences = []; 
  re = new RegExp(regexp.split('/')[1], regexp.split('/')[2]);
  for(i = 0; ; i++){
    sub = re.exec(text);
    if(sub === null || i >= re.lastIndex){
      break;
    } else {
      subsequences.push(sub);
    }
  }
  return subsequences;
}

/**
 * Esta fun��o troca todas as subsequ�ncias de um texto por outro valor atrav�s de uma express�o regular.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Express�o Regular (Letras)(Ver Observa��o 1).<br/>
 * 2. Texto (Letras).<br/>
 * 3. Novo Valor (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * <br/>
 * Texto atualizado (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * <br/>
 * 1. O primeiro par�metro deve conter a express�o regular, as express�es tem formatos divergentes na camada cliente e servidor.<br/>
 *   Como exemplo, temos a seguinte express�o que retorna todos caracteres diferente de n�mero:<br/>
 *   -  Camada Cliente:<br/>
 *   Exemplo:<br/>
 *     /EXPRESS�O_REGULAR/MODIFICADORES<br/>
 *     /[^0-9]/gm (Express�o exemplo)<br/>
 * <br/>
 *   - Camada Servidor:<br/>
 *   Exemplo:<br/>
 *     EXPRESS�O_REGULAR<br/>
 *     [^0-9] (Express�o exemplo)<br/>
 * <br/>
 * Para validar as express�es tando na camada cliente(JavaScript) quanto na camada servidor(Java), sugerimos a utiliza��o da ferramenta Regex101 que, ao inserir a express�o regular � poss�vel verificar a formata��o da express�o de acordo com a camada clicando na op��o 'Code Generator'.<br/>
 * <br/>
 * Regex101:<br/>
 * https://regex101.com<br/>
 * <br/>
 * Mais informa��es para a camada cliente(JavaScript): <br/>
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
function ebfRegExpReplaceText (regexp, text, replaceText){
  regexp += '';
  text += '';
  replaceText += '';
  var re = new RegExp(regexp.split('/')[1], regexp.split('/')[2]);
  return text.replace(re, replaceText);
}

/**
 * Remove acentos do texto passado por par�metro<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Texto sem acentos (Letras)<br/>
 * <br/>
 * Exemplo:<br/>
 * ������������������������������������������������<br/>
 * Sera retornado isto:<br/>
 * aeiouaeiouaeiouaocnaeiouAEIOUAEIOUAEIOUAOCNAEIOU<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfRemoveAccents(text) {
  if (text == null || typeof text == "undefined") {
    return null;
  }
  return translateAcentos(text);
}

/**
 * Remove todos os filhos do elemento passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore <br/>
 * 2. Elemento do qual ser�o removidos os filhos.<br/>
 * <br/>
 * Exemplo:<br/>
 * Para remover todos os filhos do elemento que est� na vari�vel "Elemento" e pertence � �rvore cuja refer�ncia est� <br/>
 * armazenada na vari�vel "�rvore", dever�o ser passados os par�metros "�rvore" e "Elemento".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfRemoveAllChildsOf(tree,element){	
  return tree.removeAllChildsOf(element);	
}

/**
 * Remove o bot�o de valores padr�o do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o deve ser utilizada no evento ao entrar.
 */
function ebfRemoveDefaultValuesButton() {
  var nav = $mainform().d.n;

  if (nav) {
    if (nav.btDefaultValues) { 
      nav.btDefaultValues.div.style.display = "none";
    }
  } 
}

/**
 * Remove o elemento passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore <br/>
 * 2. Elemento que ser� removido<br/>
 * <br/>
 * Exemplo:<br/>
 * Para remover o elemento que est� na vari�vel "Elemento" e pertence � �rvore cuja refer�ncia est� armazenada na <br/>
 * vari�vel "�rvore", dever�o ser passados os par�metros "�rvore" e "Elemento".<br/>
 * <br/>
 * Vers�o: 1.0.0.1
 */
function ebfRemoveELement(tree,element){	
  tree.removeElement(element);	
}

/**
 * Essa fun��o busca o elemento, que deseja obter, a partir da sua posi��o na lista e o remove do mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posi��o do elemento na lista que ser� removido<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento removido da lista. O retorno da fun��o pode ser armazenado numa vari�vel do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, b, c, h}, o 2� par�metro seja 4. O retorno<br/>
 * ser� o elemento "h" removido da lista, pois o elemento que est� na posi��o 4 da lista � o "h".<br/>
 * 2. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {56, 26, 95, 62}, o 2� par�metro seja 2.<br/>
 * O retorno ser� o elemento "26" removido da lista, pois o elemento que est� na posi��o 2 da lista � o "26";.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Ao utilizar esta fun��o num fluxo do tipo cliente, � necess�rio atribuir o retorno da mesma � lista cujo elemento se <br/>
 * deseja remover.<br/>
 *   - A fun��o quando executada no cliente retorna a lista resultante ap�s a remo��o do objeto desejado.<br/>
 *   - A fun��o quando executada no servidor retorna o objeto removido.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfRemoveElementFromList(list, idx) {
  if (list) {
    if ((idx) && (list.splice)) {
       list.splice((idx-1), 1);
    }
  }
  return list;
}

/**
 * Remove as quebras de linhas existentes no texto informado via par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que ter� a quebra de linha removida<br/>
 * <br/>
 * Retorno:  <br/>
 * Texto sem quebra de linha<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metro "Maker <br/>
 * Flow " (Letras), o retorno seria "Maker Flow".
 */
function ebfRemoveLineBreak() {
  var value = "";
  if (existArgs(arguments)) {
    value = arguments[0].replace(/(\r\n|\n|\r)/gm,"");
  }
  return value;
}

/**
 * Remover Sele��o do Componente<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Remove o evento onselectstart e onmousedown do componente.
 */
function ebfRemoveOnSelectStart(ComponentName) {
	var c = $c(ComponentName);
	if (c) {
		if ('undefined' !== typeof c.div.onselectstart) {
			c.div.onselectstart = function () { return false; };
		} else {
			c.div.onmousedown   = function () { return false; };
		}
	}
}

/**
 * Remove os bot�es de Gravar e Gravar+ do formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o remove os bot�es de Gravar e Gravar+ do modo de Inser��o/altera��o.
 */
function ebfRemoveSaveButtons() {
  var navigation = $mainform().d.n;
   if (navigation) {
    if (navigation.insButtons[0] != null) {
      navigation.insButtons[1].setVisible(false);
      navigation.insButtons[0].setVisible(false);
      navigation.insButtons[1] = null;
      navigation.insButtons[0] = null;
    } else if(navigation.edtButtons[0]!=null) {
      navigation.edtButtons[0].setVisible(false);
      navigation.edtButtons[0] = null;
    }
  }
}

/**
 * Remove  o bot�o de Gravar+ do formul�rio. Este bot�o � vis�vel quando o formul�rio se encontra em modo de <br/>
 * inser��o.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A fun��o deve ser utilizada no evento ao entrar ou em modo normal do formul�rio.
 */
function ebfRemoveSaveMoreButton() {
  var navigation = $mainform().d.n;
  if ((navigation)&&(navigation.insButtons[0] != null)) {
    if((navigation.insButtons[1] != null)&&(navigation.insButtons[2] == null)) {      
      navigation.insButtons[0].setVisible(false);      
      navigation.insButtons[0] = null;
    } else if (navigation.insButtons.length == 3) {
      navigation.insButtons[0].setVisible(false);
      navigation.insButtons[0] = null;
    }
  }
}

/**
 * Remove a vari�vel de sess�o passando no 1� par�metro o nome da vari�vel e no 2� o valor L�gico que indica se ela � ou<br/>
 * n�o global.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Vari�vel<br/>
 * 2. Valor L�gico (verdadeiro = vari�vel global, falso = vari�vel n�o global).<br/>
 * <br/>
 * Retorno:<br/>
 * Vari�vel removida. (Variante)
 */
function ebfRemoveSessionAttribute(name, global){
  try {  
    postForceUTF8;    
  } catch (e) {
    var isFirefoxVersionAbove3 = false;
    var firefoxRegExp = new RegExp("firefox/(\\d+)", "i");
    var firefoxRegExpResult = firefoxRegExp.exec(navigator.userAgent);
    if (firefoxRegExpResult != null && firefoxRegExpResult.length > 1) {
      try {
        var version = parseInt(firefoxRegExpResult[1]);
        if (version > 2) {
          isFirefoxVersionAbove3 = true;
        }
      } catch (e) {}
    }

    postForceUTF8 = (isFirefoxVersionAbove3 || isSafari);  
  }  

  var content = getContent("sessionManager.do?sys=" + sysCode + "&nome=" + URLEncode(name, postForceUTF8) + "&global=" + global + "&acao=remove");
  var ajaxReturn = eval(content);
  if (ajaxReturn) {
    return ajaxReturn;
  } else {
    return "";
  }
}

/**
 * Essa fun��o remove um elemento Spinner.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Refer�ncia do Elemento (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. A refer�ncia do elemento � obtida por meio da fun��o "Spinner - Criar".
 */
function ebfRemoveSpinner (spinner) {
  if (spinner) spinner.parentElement.removeChild(spinner);
}

/**
 * A fun��o localiza o 2� par�metro dentro do texto e o substitui pelo conte�do passado no 3� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto.<br/>
 * 2. Valor � encontrar.<br/>
 * 3. Novo Valor.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto modificado. <br/>
 * <br/>
 * Observa��o:<br/>
 * A fun��o s� substitui a primeira ocorr�ncia encontrada. Para substituir todas as subsequ�ncias encontradas utilize a fun��o<br/>
 * Troca Todas as Subsequ�ncias.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.Assumindo os par�metros como "Maker Flow" (Letras),"a"(Letras), e "%" (Letras), o retorno ser� "M%ker Flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfReplace() {
  var value = "";
  if (existArgs(arguments)) {
    value = arguments[0].toString();
    var valueToFind = arguments[1].toString();
    var valueToReplace = arguments[2].toString();
    value = value.replace(valueToFind, valueToReplace);
  }
  return value;
}

/**
 * Esta fun��o localiza todas as subseq��ncias iguais ao  2� par�metro dentro do texto e os substituem pelo conte�do passado no<br/>
 * 3� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto.<br/>
 * 2. Valor � encontrar.<br/>
 * 3. Valor desejado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto modificado. <br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A substitui��o � feita em todas as subseq��ncias encontradas.<br/>
 * 2. Caso deseje trocar a subsequ�ncia por um valor nulo, no terceiro par�metro deve-se desmarcar o check "Nulo".<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.Assumindo os par�metros como "Banana" (Letras),"na"(Letras), e "&" (Letras), o retorno ser� "Ba&&".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfReplaceAll(OldString,FindString,ReplaceString) {
   if(!OldString) OldString = "";
   var SearchIndex = 0;
   var NewString = "";
   OldString = OldString.toString(); 
   FindString = FindString.toString();
   ReplaceString = ReplaceString.toString();
   while (OldString.indexOf(FindString,SearchIndex) != -1) {
   NewString += OldString.substring(SearchIndex,OldString.indexOf(FindString,SearchIndex));
   NewString += ReplaceString;
   SearchIndex = (OldString.indexOf(FindString,SearchIndex) + FindString.length);
   }
   NewString += OldString.substring(SearchIndex,OldString.length);
   return NewString;
}

/**
 * Essa fun��o busca um elemento, a partir da sua posi��o na lista e o substitui por um novo elemento.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posi��o do elemento na lista que ser� substitu�do<br/>
 * 3. Novo elemento<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento substitu�do<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, t, c, h}, o 2� par�metro seja 1 e o 3� par�metro "k". O retorno ser� a lista atualizada com os seguintes elementos: {k, t, c, h}, pois o elemento que est� na posi��o 1 da lista � o "a".<br/>
 * 2. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {95, 35, 02, 806}, o 2� par�metro seja 3 e o 3� par�metro "357". O retorno ser� a lista atualizada com os seguintes elementos: {95, 35, 357, 806}, pois o elemento que est� na posi��o 3 da lista � o "02".
 */
function ebfReplaceElementFromList() {
  listReturn = null;
  if (existArgs(arguments)) {
    listReturn = arguments[0];
    var position = parseInt(arguments[1]) - 1;
    position = Math.max(0, position);
    position = Math.min(position, (arguments[0].length - 1));
    listReturn[position] = arguments[2];
  }
  return listReturn;
}

/**
 * Obt�m um par�metro da requisi��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do par�metro na requisi��o.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor do par�metro definido na requisi��o ou Nulo caso o mesmo n�o exista. (Letras)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o deve ser utilizada no evento "Ao Entrar" do Formul�rio.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1 - Suponhamos que temos a fun��o em quest�o no evento ao entrar de um formul�rio, passando o par�metro formID como par�metro<br/>
 * o retorno ser� o valor do par�metro formID.
 */
function ebfRequestGetParameter(str) {
 var c = window.location;
 var  x = "";
  if (c) {
    c = new String(c);   
    var p = c.indexOf(str);  
    if (p > 0) {
      var  x = c.slice((p + str.length + 1),c.length);    
      if(x.indexOf("&") === 0){
        return "";
      }else{    
        p = (x.indexOf("&") > 0) ? x.indexOf("&") : x.length; 
        x = x.slice(0,p);
        return x;
      }
    }	  
  }
 return x;  
}

/**
 * Esta fun��o consome um WebService atrav�s da API REST<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. A��o (Letras);<br/>
 * 2. URL (Letras);<br/>
 * 3. Par�metros da Postagem (Letras ou Mapa) (Ver observa��o 3);<br/>
 * 4. Regra a ser executada (Fluxo)(Somente camada cliente ou Mobile);<br/>
 * 5. Par�metros da Regra (Variante)(Somente camada cliente ou Mobile);<br/>
 * 6. Par�metros do Cabe�alho (Mapa de Par�metros);<br/>
 * 7. Par�metro do Corpo (Letras) (Somente camada servidor, na camada cliente usar o 3� par�metro)(Ver observa��o 5);<br/>
 * 8. Charset (Letras) (Somente camada servidor) (Opcional) (Ex.: UTF-8, ISO-8859-1)<br/>
 * 9. Regra a ser executada caso tenha ocorrido um erro (Fluxo)(Somente camada cliente ou Mobile)(Ver observa��o 6);<br/>
 * 10. Par�metros da Regra caso tenha ocorrido um erro (Variante)(Somente camada cliente ou Mobile);<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON com o formato abaixo: <br/>
 * {<br/>
 *   "headers": {<br/>
 *     "key1": "value1",<br/>
 *     "key2": "value2"<br/>
 *   },<br/>
 *   "result": "Resultado do Webservice",<br/>
 *   "status": "OK",<br/>
 *   "statusCode": 200<br/>
 * }<br/>
 * <br/>
 * Variante (Ver observa��o 4 e 8).<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. A regra do quarto par�metro dever� possuir um par�metro de entrada que ir� receber o retorno do WebService.<br/>
 * 2. A��es dispon�veis (GET, POST, PUT, DELETE, HEADER, OPTIONS), � importante observar se o servidor suporta essas a��es.<br/>
 * 3. Caso a a��o seja POST dever� ser criado um Mapa com par�metros, Letras caso contr�rio.<br/>
 * 4. A execu��o desta fun��o na camada cliente ou Mobile � ass�ncrona e o retorno ser� enviado automaticamente como primeiro par�metro do fluxo. (4� par�metro) . Caso a execu��o desta fun��o seja camada servidor, a execu��o ser� s�ncrona.<br/>
 * 5. O 7� par�metro somente � suportado para as a��es PUT e POST, ao ser definir o 3� par�metro ser� ignorado.<br/>
 * 6. O 9� par�metro somente � suportado na camada cliente e recebe automaticamente no primeiro par�metro o c�digo do erro da resposta. Ex.: 500 = "Erro interno do servidor".<br/>
 * 7. Caso a URL para consumo seja um Fluxo WEB e o m�todo solicitado seja POST/PUT deve-se setar o 6� par�metro (Par�metros do Cabe�alho) para Content-Type = application/x-www-form-urlencoded (Camada Cliente).<br/>
 * 8. Quando utilizada na camada Cliente, as chaves do cabe�alho(headers) tem o retorno em caixa baixa, exceto no Internet Explorer.<br/>
 *   Exemplo: Na camada cliente o par�metro "Content-Type" � escrito como "content-type", como mostra a documenta��o: <br/>
 *   https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
 */
function ebfRestCallNew(action, url, ParamsURL, ruleCallback, Params, headerParams, paramBody, charset, ruleCallbackError, paramsRuleError) {
  var data = "";
  action = action.toUpperCase();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      if(this.status == 200 || this.status == 201 || this.status == 202 ){
        if (ruleCallback) {
          var content = convertNonUnicodeChars(this.responseText);
          Params = Params == null ? [] : Params          
          var jsonReturn = {};
          jsonReturn.headers = getResponseHeaderMap(this);
          jsonReturn.status = "OK";
          jsonReturn.statusCode = this.status;          
          jsonReturn.result = content;          
          ebfSetElementAtList(Params, jsonReturn, 1)
          executeRuleFromJS(ruleCallback, Params);
        }
      }else{
        if (ruleCallbackError) {
          var content = convertNonUnicodeChars(this.responseText);
          paramsRuleError = paramsRuleError == null ? [] : paramsRuleError          
          var jsonReturn = {};
          jsonReturn.headers = getResponseHeaderMap(this);
          jsonReturn.status = "ERROR";
          jsonReturn.statusCode = this.status;          
          jsonReturn.result = content;
          ebfSetElementAtList(paramsRuleError, jsonReturn, 1)
          executeRuleFromJS(ruleCallbackError, paramsRuleError);
        }
      }
    }
  };

  if (action == "POST" || action == "PUT") {
    if(ParamsURL !== undefined && ParamsURL !== 'undefined' && ParamsURL !== null && ParamsURL instanceof Map){
      var paramsMap = ParamsURL.getKeys();
      for(j=0; j < ParamsURL.size; j++){
        if(ParamsURL.size > 1 && j + 1 < ParamsURL.size ){          
          data += "" + paramsMap[j]+'='+ebfMapGetObject(ParamsURL, paramsMap[j])+'&';
        }else{
          data += "" + paramsMap[j]+'='+ebfMapGetObject(ParamsURL, paramsMap[j]);
        }
      }
    }else{
      data = ParamsURL;
    }
  } else {
    if (ParamsURL != "" && ParamsURL !== undefined && ParamsURL !== 'undefined' && ParamsURL !== null) {
      url = url + "?" + ParamsURL;
    }
  }

  xhr.overrideMimeType('text/plain; charset=' + (charset ? charset : ENCODING));
  xhr.open(action, url, true);

  if(headerParams !== undefined && headerParams instanceof Map){
    var paramsHeader = headerParams.getKeys();
    for(i=0; i < headerParams.size; i++){
      xhr.setRequestHeader(paramsHeader[i], ebfMapGetObject(headerParams, paramsHeader[i]));
    }
  }

  xhr.send(data == "" ? null : data);
}


function getResponseHeaderMap(xhr) {
  const headers = {};
  var responseHeaders = xhr.getAllResponseHeaders();
  if(responseHeaders){
    responseHeaders.trim()
      .split(/[\r\n]+/)
      .map(function(value){return value.split(/: /)})
      .forEach(function(keyValue) {
        headers[keyValue[0].trim()] = keyValue[1].trim();
      });
  }
  return headers;
}

/**
 * Paleta que possibilita a escolha de uma cor retornando o c�digo html da cor escolhida.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Moldura na qual a paleta de cores aparecer�;<br/>
 * 2. Nome da regra chamada<br/>
 * 3. Lista contendo par�metros da regra chamada.<br/>
 * <br/>
 * Retorno:<br/>
 * C�digo html da Cor. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo que temos uma moldura no 1� par�metro, um fluxo no 2� par�metro com uma vari�vel chamada "Cor" como par�metro de entrada<br/>
 * e o uso da fun��o: "Alertar Aguardando Ok" retornando a vari�vel "Cor", 3� par�metro nulo.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. A regra chamada no 2� par�metro deve possuir uma vari�vel do tipo letras como par�metro de entrada.
 */
function ebfDrawColorPalette(stageID, callback) {
    var listColor = ["00", "33", "66", "99", "CC", "FF"];
    var table = document.createElement("table");
    table.border = 1;
    table.cellPadding = 0;
    table.cellSpacing = 0;
    table.style.borderColor = "#666666";
    table.style.borderCollapse = "collapse";
    var tr, td;
    var color = "";
    var tbody = document.createElement("tbody");
    for (var i = 0; i < listColor.length; i++){
        tr = document.createElement("tr");
        for (var x = 0; x < listColor.length; x++) {
            for (var y = 0; y < listColor.length; y++) {
                color = "#"+listColor[i]+listColor[x]+listColor[y];
                td = document.createElement("td");
                td.style.width = "11px";
                td.style.height = "11px";
                td.style.background = color;
                td.color = color;
                td.style.borderColor = "#000";
                td.style.cursor = "pointer";
               
                if (typeof(callback) == "function") {
                    td.onclick = function() {
                        callback.apply(this, [this.color]);
                    }
                }
                tr.appendChild(td); 
            }
        }
        tbody.appendChild(tr);
    }  
    table.appendChild(tbody);
    //var element = document.getElementById(stageID);     
    var element = $c(stageID).div; 
    if (element){ 
      element.innerHTML = '';
      element.appendChild(table);      
    }    
    
    return table;
}

 function ebfReturnColor(divName,ruleName,ruleParams){  
    
     ebfDrawColorPalette(divName, function(color) {        
      //---                             
      if (!isNullable(ruleName)) {
         var params = new Array();       
         var newList = new Array();
         newList.push(color);          

         if (!isNullable(ruleParams)) {
            for(var i = 0; i < ruleParams.length; i++){
                newList.push(ruleParams[i]);
            }
            
         }     
         executeJSRuleNoField(ebfGetSystemID(),ebfGetFormID(),ruleName,newList,false);         
         $c(divName).div.innerHTML = '';
         
      }
    //---        
        
        return color;
    });       
    
 }

/**
 * Insere um texto na posi��o do cursor em um Texto Rico<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente Texto Rico<br/>
 * 2. Texto em HTML a ser inserido (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Esta fun��o s� funciona para o memo quando a propriedade texto rico est� setada como <br/>
 * "HTML B�sico" e "HTML Avan�ado".<br/>
 * 2. Para utilizar esta fun��o no Internet Explorer, deve-se previamente utilizar a fun��o "Monitorar posi��o do cursor no Texto Rico".
 */
function ebfRichTextInsertTextAtPosition(component, htmlText) {
  var comp = $c(component);
  if (comp) comp.insertHtmlAtCaret(htmlText);
}

/**
 * Agenda a execu��o de um fluxo para ser executado ap�s um determinado tempo. <br/>
 * O tempo deve ser definido em milisegundos.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Digite o nome da regra. (Letras)<br/>
 * 2. Lista de par�metros da regra<br/>
 * 3. Tempo para a regra ser executada, em milissegundos<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Fluxo cliente somente agenda para a camada CLIENTE, e servidor somente para a camada SERVIDOR, para agendar fluxos de outra camada utilize um subfluxo para agendar;<br/>
 * 2. Essa fun��o n�o agenda fluxos de intera��o com a tela, fun��es como "Abrir Formul�rio" ou mensagens n�o ser�o exibidos.
 */
function ebfRuleSchedulerNoParent(ruleName, ruleParams, delay){
  var system = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  var formID = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : "");
  
  var params = new Array();
  params.push(system);
  params.push(formID);
  params.push(ruleName);
  if (!isNullable(ruleParams)) {
    params.push(ruleParams);
  }else {
     params.push("");
   }
  
  timeout(executeJSRuleNoField, delay, params);
}

/**
 * Executar Fluxo Ao Abrir Formul�rio na Moldura<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio;<br/>
 * 2. Fluxo;<br/>
 * 3. Lista de Par�metros;<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O fluxo ser� executado somente se o formul�rio informado no primeiro par�metro da fun��o for aberto em uma moldura.
 */
function ebfRunFlowAfterOpen(formGUID,FlowName,ruleParams) {
        var values = top.children;
        if (values && values.length > 0) {
		for (i = 0; i < values.length; i++) {
                           try {
                                var mainform = values[i].$mainform();
			        if (mainform.formGUID == formGUID ) {
			         var myOpenForm = values[i].$mainform();
		        	}
                           }   catch(e) {}
		}
        }
        var elems = $mainform().controller.getAllElements();
        for (var i = 0; i < elems.length; i++) {
		if (elems[i] instanceof HTMLGroupBox) {
			var iframes = elems[i].div.getElementsByTagName("iframe");    
			if (iframes.length > 0) {
			  var iframe = iframes[0];
			  var mainform = eval(iframe.id).mainform;
                          if(mainform) {

			  	if (mainform.formGUID == formGUID) {
			   		var myBevelForm = elems[i].id;
			  	}  
                          }
                        }
                }
	}  
 	
        _formGUID = formGUID;
	_FlowName = FlowName;
	_ruleParams = ruleParams;
	
        if (myOpenForm) {
                 try {
  		
                    setTimeout(function(){
			ebfExecuteRuleOnForm(myOpenForm,FlowName,ruleParams);
  	            },100);  
                                       
                 } catch(e) {                 
		    setTimeout(function(){
			ebfRunFlowAfterOpen(_formGUID,_FlowName,_ruleParams);
  	            },100);                     
                 }
	} 
			
	else if (myBevelForm) {
                 try {    
                       
 		    setTimeout(function(){
			ebfExecuteRuleOnFormOpenedBevel(ebfGetGUIDActualForm(),myBevelForm,FlowName,ruleParams);
  	            },100);               

                 } catch(e) {                 
		    setTimeout(function(){
			ebfRunFlowAfterOpen(_formGUID,_FlowName,_ruleParams);
  	            },100);                     
                 }
	} 

	else {
		setTimeout(function(){
			ebfRunFlowAfterOpen(_formGUID,_FlowName,_ruleParams);
		},100);

	}
  
}

/**
 * Obt�m o conte�do de um componente do formul�rio principal ou de qualquer outro passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio onde se localiza o componente a ser obtido o valor. <br/>
 * 2. Componente do qual se deseja obter o valor. <br/>
 * <br/>
 * Retorno: <br/>
 * Conte�do do campo passado como par�metro. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. No formul�rio "Cadastro" cujo conte�do do campo "Cidade" � "Salvador", assumindo como par�metros <br/>
 * Cadastros(Formul�rio), "Cidade"(Campo), o retorno seria "Salvador".<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. � necess�rio que o componente esteja associado a um campo da tabela.<br/>
 * 2. Se n�o for o formul�rio principal (que chama o fluxo) e o mesmo estiver aberto, o retorno ser� o conte�do <br/>
 * do campo passado naquele registro. Caso o formul�rio passado n�o esteja sendo utilizado, o retorno ser� o primeiro <br/>
 * registro no banco.<br/>
 * 3. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formul�rio do <br/>
 * Sub Form como par�metro.
 */
function ebfSQLGetFieldFromForm(form, com) {
  return controller.getElementById(com, form).getValue(); 
}

/**
 * Obt�m o conte�do do campo passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Campo no qual deseja obter o conte�do.<br/>
 * <br/>
 * Retorno: <br/>
 * Conte�do do campo. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formul�rio cujo conte�do do campo "Cidade" � "Salvador", assumindo como par�metro este campo <br/>
 * ("Cidade"), o retorno seria "Salvador".<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o campo � necess�rio indicar o nome do formul�rio no de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso n�o queira selecionar o formul�rio de trabalho, digite o nome do campo mudando a constante do tipo <br/>
 * "formul�rio" para uma constante do tipo "Letras".<br/>
 * 3. � necess�rio que o componente esteja associado a um campo da tabela.<br/>
 * 4. Caso o formul�rio que se deseja obter o campo esteja dentro de um componente moldura, deve-se utilizar a <br/>
 * fun��o "Executar Fluxo no Formul�rio" apontar para um fluxo que contenha esta fun��o.
 */
function ebfSQLGetFormField() {
  var value = "";
  if (existArgs(arguments)) {
    value = getFormFieldValue(arguments[0]);
  }
  return value;
}

/**
 * Altera o campo do formul�rio com o conte�do passado no 2� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Campo para ser alterado.<br/>
 * 2. Novo valor do campo.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como par�metros o campo "Telefone" (Letras) de uma tabela qualquer e o valor "3354-9554"(Letras), <br/>
 * ap�s o fluxo ser executado o campo "Telefone" conter� o conte�do "3354-9554".<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para selecionar o campo � necess�rio indicar o nome do formul�rio no "Inicio" do fluxo . <br/>
 * 2. Caso n�o queira indicar o formul�rio no in�cio, pode escrever o nome (Letras) do campo como par�metro.<br/>
 * 3. O campo precisa estar associado a um campo da Tabela. Caso o isso n�o ocorra, usa-se a fun��o "Alterar <br/>
 * valor do componente" da categoria "Formul�rio".<br/>
 * 4. A fun��o n�o determina qual o formul�rio onde deve ser alterado, no entanto caso queira alterar um valor da <br/>
 * grade ser� necess�rio usar a fun��o "Alterar valor do componente".<br/>
 * 5. Ao utilizar a fun��o na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a fun��o s� funcionar� com o formul�rio em modo de inser��o ou altera��o.
 */
function ebfSQLSetFormField() {
  if (existArgs(arguments)) {
    changeFormFieldValue(arguments[0], arguments[1]);
  }
  return true;
}

/**
 * Fun��o para realizar a leitura de c�digo de barras, QRCode e outros padr�es.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo a ser executado em caso de sucesso (Letras);<br/>
 * 2. Fluxo a ser executado em caso de erro (Letras);<br/>
 * 3. Formato a escanear (Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conte�do do c�digo de barras (Letras).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1) Por padr�o, o Scan buscar� por qualquer tipo de c�digo de barras suportado pela biblioteca, que s�o:<br/>
 *     - QR_CODE<br/>
 *     - CODE_128<br/>
 *     - CODE_39<br/>
 *     - EAN_13<br/>
 *     - EAN_8<br/>
 *     - ITF<br/>
 *     - UPC_A<br/>
 * 2) O terceiro par�metro deve ser informado os tipos a serem buscado. Caso n�o seja informado nenhum tipo, o scanner<br/>
 * buscar� por qualquer tipo.<br/>
 * 3) Os formatos devem ser passados como texto e separados por v�rgula.
 */
function ebfScanCode(success, error, types) {
 
}

/**
 * Esta fun��o procura dentro do 1� par�metro a subseq��ncia passada no 2� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto onde ser� feita a pesquisa.<br/>
 * 2. Valor a ser localizado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se encontrar a subseq��ncia ou falso caso n�o encontre.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os par�metros como 'Maker'(Letras), e 'Ma '(Letras) , o retorno seria verdadeiro.<br/>
 * 2.Assumindo os par�metros como 'Maker'(Letras), e 'Ja '(Letras) , o retorno seria falso.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSearchSubstring() {
  var indice = 0;
  if (existArgs(arguments)) {
    var value = arguments[0].toString();
    var valueToFind = arguments[1].toString();
    indice = value.indexOf(valueToFind);
  }
  return indice != -1;
}

/**
 * Esta fun��o obt�m e retorna o objeto da aba que est� ativa quando o fluxo � executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Objeto da aba ativa. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se a aba � "Cadastros", a fun��o gera um objeto desta aba: [object HTMLab Cadastro].<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfSelectedTab() {
  return d.t.getSelectedTab();
}

/**
 * Essa fun��o envia um ou mais arquivos via POST para o endere�o especificado.<br/>
 * <br/>
 * O arquivo � enviado de forma ass�ncrona, sem travar a tela.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL para POST<br/>
 * 2. Par�metros do POST (Mapa com chave/valor);<br/>
 * 3. Mapa com Arquivos (Mapa com o nome do par�metro que receber� o arquivo e o caminho completo do arquivo que ser� enviado ) (chave/valor).<br/>
 * 4. Fluxo de Sucesso<br/>
 * 5. Par�metros  para o fluxo sucesso (Opcional)<br/>
 * 6. Fluxo de Erro<br/>
 * 7. Par�metros para o fluxo de erro (Opcional)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.
 */
function ebfSendFilePOSTAsync(){
  console.log('MakerMobile');
}

/**
 * Cria uma vari�vel em um formul�rio corrente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da vari�vel.<br/>
 * 2. Valor a ser armazenado.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfSetClientFormVariable(name, value) {
  if (!$mainform().__storage) {
    $mainform().__storage = {};
  }
  $mainform().__storage[name] = value;
}

/**
 * Alterar Cor da Fonte e Fundo do Componente<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Cor da Fonte<br/>
 * 3. Cor do Fundo<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfSetColorComponent(ComponentName,color,bgcolor) {
   var c = $c(ComponentName);   
   if (color) {    
      c.setColor(color);
   }   
   if (bgcolor) {     
      c.setBGColor(bgcolor);
   }
}

/**
 * Define uma propriedade para o componente passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio (Opcional)<br/>
 * 2. Componente<br/>
 * 3. Propriedade<br/>
 * 4. Valor<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2", propriedade "AoPesquisar" e valor "Sim", ser� criada uma propriedade de nome e valor<br/>
 * definido no par�metro.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Na camada servidor, caso o formul�rio n�o seja informado, a fun��o adotar� o formul�rio corrente. Na camada cliente,<br/>
 * sempre ser� o formul�rio corrente.
 */
function ebfSetComponentProperty() {
  if (existArgs(arguments)) {  
    var comp = $c(arguments[1]);      
    if(comp){
      comp[arguments[2]] = arguments[3];    
    }
  }
  return null;
}

/**
 * Define um valor de um Cookie.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do cookie definido.<br/>
 * 2. Valor do cookie.<br/>
 * 3. Coment�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos.:<br/>
 * 1.�Par�metro: senhaUsuarios<br/>
 * 2.�Par�metro: 123<br/>
 * 3.�Par�metro: Senha de um usu�rio logado em uma m�quina<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Existe uma fun��o "Obter valor de um Cookie" que permite obter o cookie criado por essa fun��o.<br/>
 * 2. Esta fun��o est� homologada apenas com os servidores de aplica��es "TomCat" e "JBoss".
 */
function ebfSetCookie(cookieName,cookieValue,cookieComment) { 
  var today = new Date(); 
  var expire = new Date(); 	 
  expire.setTime(today.getTime() + 3600000*24); 
  document.cookie = cookieName+"="+escape(cookieValue) 
  + ";expires="+expire.toGMTString(); 
}

/**
 * Essa fun��o insere um elemento numa lista, podendo indicar a sua posi��o na lista. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Elemento a ser inserido<br/>
 * 3. Inteiro indicando a posi��o do elemento na Lista ou nulo indicando inclus�o no final da lista (OPCIONAL)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor inserido na lista.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2� par�metro "s" e o 3�<br/>
 * par�metro NULO. O retorno ser� uma lista com os seguintes valores: {a, b, c, d, e, f, g, h, s}. Como n�o indicou a posi��o<br/>
 * do elemento, ele � inserido na ultima posi��o da lista.<br/>
 * 2. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {v, y, d}, o 2� par�metro "u" e o 3� par�metro 2. <br/>
 * O retorno ser� uma lista com os seguintes valores: {v, u, y, d}. Como o 3� par�metro determina a posi��o do elemento na<br/>
 * lista, ele ser� inserido na posi��o 2 da lista.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSetElementAtList (list, value, position) {
  if (list) {
    if (position !== null && position !== undefined) {
      position--;
      position = Math.max(0, position);
      position = Math.min(position, list.length);
      list.splice(position, 0, value);
    } else {
      list.push(value)
    }
  }
  return list; 
}

/**
 * Essa fun��o associa um fluxo que ser� executando quando a aplica��o for ativada.<br/>
 * <br/>
 * Desta forma, toda vez que aplica��o se tornar "Ativa", ou seja, ir para background e voltar, o fluxo ser� executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do fluxo(Fluxo);<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfSetFlowOnBecomeActive(flow){}

/**
 * Essa fun��o associa um fluxo ao evento de recebimento de Push Notification (iOS e Android).<br/>
 * <br/>
 * Desta forma, toda vez que uma notifica��o Push for recebida, o fluxo associado ser� executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do fluxo<br/>
 * 2. Lista de Par�metros (Opcional)<br/>
 * <br/>
 * <br/>
 * Observa��o: <br/>
 * 1. O primeiro par�metro do fluxo dever� ser reservado para a mensagem(ens) que ser� enviada automaticamente.
 */
function ebfebfSetFlowOnPushMessage(flow, params){}

/**
 * Altera o tipo, tamanho e cor da fonte dos elementos da �rvore.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore (Ver observa��o 1)<br/>
 * 2. Tipo de Letra (Exemplo: Arial,Helvetica, sans-serif)<br/>
 * 3. Tamanho da Fonte<br/>
 * 4. Cor da Fonte<br/>
 * <br/>
 * Exemplo: <br/>
 * 1 - Assumindo como par�metros a �rvore, "arial black",  12 e #666600, a fonte dos elementos da �rvore ir� alterar para o tipo e tamanho passado por par�metro e a cor da fonte ser� vermelha.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. A �rvore pode ser obtida atrav�s da fun��o "Obter Componente" da categoria Formul�rio.<br/>
 * <br/>
 * Vers�o: 1.0.0.1
 */
function ebfSetFontStyle(tree,font,size,color) {
  tree.font = font;
  tree.size = size;
  tree.color = color;
  tree.setFontStyle();		
}

/**
 * Alterar Hint do Componente<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente  (definir o formul�rio de trabalho no par�metro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * 2. Hint (dica)<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfSetHint(ComponentName,text) {
  var c = $c(ComponentName);
  c.setHint(text);
}

/**
 * Altera a altura dos �cones da �rvore para a passada por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore. <br/>
 * 2. Nova altura dos �cones.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1.Assumindo como par�metros a refer�ncia para a �rvore e 20, a altura dos �cones ser� alterada para 20. <br/>
 * <br/>
 * Observa��o:<br/>
 * A �rvore pode ser obtida atrav�s da fun��o "Obter Componente" da categoria Formul�rio.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSetIconsHeight(tree,height){	
  tree.setIconsHeight(height);	
}

/**
 * Altera a imagem de um compontente do tipo "Imagem" dispon�vel no formul�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente que ser� alterado;<br/>
 * 2. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o Possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O valor do 2� par�metro deve ser o byte de uma imagem.<br/>
 * 2. Para a camada servidor no 2� par�metro � necess�rio a utiliza��o da "fun��o de bin�rio para base 64" e abrir uma consulta com o campo de tipo byte de uma imagem.
 */
function ebfSetImageSrc(componentName, imageData) {
  var imgComp = $c(componentName);
  if (imgComp.setImageBase64) {
    imgComp.setImageBase64(imageData);
  } else {
    imgComp.img.src = 'data:image/jpeg;base64,' + imageData;
    imgComp.noImage.style.display = 'none';
    imgComp.img.style.display = 'block';
  }
}

/**
 * Define uma vari�vel local. As vari�veis definidas com esta fun��o ficar�o dispon�veis somente para o formul�rio onde o <br/>
 * fluxo foi executado.<br/>
 * <br/>
 * Par�metro(s):<br/>
 * 1. Nome da vari�vel.<br/>
 * 2. Valor a ser armazenado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o antigo valor da vari�vel. Caso a vari�vel n�o exista, retorna Nulo<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo como par�metros: TESTE (Letras) e Valor (Letras), quando a fun��o for executada vai ser criada uma <br/>
 * vari�vel local chamada TESTE com o conte�do Valor.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * 1. A fun��o que acessa a vari�vel local �: 'Obter Vari�vel Local'.<br/>
 * 2. Ao definir essa fun��o em formul�rio flutuante a mesma estar� acess�vel para os demais formul�rios flutuantes.<br/>
 * 3. Ao definir essa fun��o para formul�rios pop up, as vari�veis estar�o dispon�veis para o formul�rio corrente.
 */
function ebfSetLocalVariable(varName, varValue) {
  return top.document[varName] = varValue;
}

/**
 * Loga uma mensagem passada como par�metro de entrada. Caso o uso dessa fun��o seja na camada servidor, a mensagem ser� adicionada no arquivo de log do servidor de aplica��es. Caso o uso seja na camada cliente, a mensagem ser� exibida no console do navegador.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Mensagem (Letras)<br/>
 * 2. N�vel de log (Inteiro)(Somente camada servidor)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * 1. No segundo par�metro pode ser passado os seguintes n�meros:<br/>
 *     [1] Debug<br/>
 *     [2] Info<br/>
 *     [3] Erro<br/>
 * Caso estiver nulo ser� configurado o n�vel Default.
 */
function ebfSetLogDebug() {
  console.log(arguments[0]);
}

/**
 * Associa um fluxo ao evento do bot�o Voltar do Android.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo para a fun��o (Fluxo);<br/>
 * 2. Par�metros do fluxo (Lista).
 */
function ebfSetOnBackPress(){
  alert("Fun��o dispon�vel apenas no Maker Mobile!");
}

/**
 * Agenda a execu��o de um fluxo para ser executado ap�s um determinado tempo. <br/>
 * O tempo deve ser definido em milisegundos.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo a ser executado. (Fluxo)<br/>
 * 2. Lista de par�metros da regra<br/>
 * 3. Tempo para a regra ser executada, em milissegundos<br/>
 * <br/>
 * Retorno:<br/>
 * Identificador do agendamento (Inteiro).<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. CAMADA CLIENTE - o fluxo a ser executado deve ser da mesma camada.<br/>
 * CAMADA SERVIDOR - o fluxo a ser executado deve ser da mesma camada.<br/>
 * Para agendar fluxos de camadas diferentes, use o subfluxo para agendar.<br/>
 * <br/>
 * 2. Fluxo servidor n�o interage com a tela, fun��es como "Habilitar Controle" ou mensagens n�o ser�o exibidos.<br/>
 * <br/>
 * 3. O primeiro par�metro pode ser do tipo Letras tendo como valor o nome do fluxo.<br/>
 * <br/>
 * ATEN��O: PARA AGENDAR UM FLUXO SEM V�NCULO COM QUEM O INICIOU, UTILIZE A FUN��O "AGENDAR<br/>
 * EXECU��O DE FLUXO SEM PAI", COM ISSO, O GARBAGE COLLECTOR DO JAVA CONSEGUIR� LIMPAR MAIS OS OBJETOS TENDO UMA MAIOR LIBERA��O DE MEM�RIA
 */
function ebfSetRuleExecutionTime(ruleName, ruleParams, delay) {
  var system = ($mainform() && $mainform().d && $mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  var formID = ($mainform() && $mainform().d && $mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : "");
  
  var params = new Array();
  params.push(system);
  params.push(formID);
  params.push(ruleName);  
  
  if (!isNullable(ruleParams)) {
    params.push(ruleParams);        
  } else {
    params.push("");
  }
  
  return timeout(executeJSRuleNoField, delay, params);
}

/**
 * Esta fun��o define um fluxo para ser executado quando o dispositivo conectar com a Internet<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo a ser executado (Fluxo);<br/>
 * 2. Par�metros da regra (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O fluxo definido ser� executado sem pai.
 */
function ebfSetRuleOnConnect(){
}

/**
 * Esta fun��o define um fluxo para ser executado quando o dispositivo perder a conex�o com a Internet<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fluxo a ser executado (Fluxo);<br/>
 * 2. Par�metros da regra (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O fluxo definido ser� executado sem pai.
 */
function ebfSetRuleOnDisconnect(){
}

/**
 * As vari�veis de sess�o s�o utilizadas quando houver a necessidade de ter uma vari�vel que se mant�m para regras<br/>
 * diferentes. Vari�veis de sess�o n�o globais se mant�m de acordo com o usu�rio e as globais se mant�m para todo usu�rio.<br/>
 * Se for necess�rio, por exemplo, guardar a hora de login de um usu�rio para ser utilizada em v�rias regras diferentes, essa<br/>
 * vari�vel de sess�o ser� local. Se for necess�rio, por exemplo, guardar a quantidade de usu�rios logados, essa vari�vel de<br/>
 * sess�o ser� global.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da vari�vel.<br/>
 * 2. Valor a ser armazenado.<br/>
 * 3. Escopo da vari�vel. Recebe verdadeiro(se ela vai ser global) ou falso (n�o global - exclusiva da sess�o do navegador).<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o antigo valor da vari�vel. Caso a vari�vel n�o exista, retorna Nulo. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo como par�metros: Contador (Letras),6 (Inteiro) e Verdadeiro (L�gico), quando a fun��o for executada vai ser criada uma var�vel global chamada Contador com o conte�do 6.<br/>
 * <br/>
 * Observa��o(�es).: <br/>
 * 1. Filtragem de relat�rios por vari�vel de sess�o. Caso exista uma vari�vel de sess�o com o formato<br/>
 * 2. REPORT_FILTER_<campo do filtro do relat�rio>, o sistema preenche automaticamente o filtro.
 */
function ebfSetSessionAttribute(name, value, global){
  try {  
    postForceUTF8;    
  } catch (e) {
    var isFirefoxVersionAbove3 = false;
    var firefoxRegExp = new RegExp("firefox/(\\d+)", "i");
    var firefoxRegExpResult = firefoxRegExp.exec(navigator.userAgent);
    if (firefoxRegExpResult != null && firefoxRegExpResult.length > 1) {
      try {
        var version = parseInt(firefoxRegExpResult[1]);
        if (version > 2) {
          isFirefoxVersionAbove3 = true;
        }
      } catch (e) {}
    }

    postForceUTF8 = (isFirefoxVersionAbove3 || isSafari);  
  }

  var postData = ("sys=" + sysCode + "&nome=" + URLEncode(name, postForceUTF8) + "&valor=" + URLEncode(value, postForceUTF8) + "&global=" + global + "&acao=set");
  var content = postURL("sessionManager.do", postData);
  return content;
}

/**
 * Esta fun��o � usada para exibir uma Intera��o de Confirma��o com personaliza��o do t�tulo.<br/>
 * Ser� executado um fluxo quando o usu�rio clicar em OK ou CANCELAR, caso o usu�rio clique OK, o fluxo receber� como par�metro de entrada a constante "1" ou "0" caso clique em CANCELAR.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Posi��o do bot�o CANCELAR. (Informe "D" para Direita ou "E" para Esquerda).<br/>
 * 2. T�tulo da Intera��o.<br/>
 * 3. Mensagem a ser exibida.<br/>
 * 4. Fluxo que ser� executado ao clicar em OK ou CANCELAR.<br/>
 * 5. Lista de Par�metros adicionais para o fluxo (Opcional).<br/>
 * <br/>
 * Observa��o (�es):<br/>
 * 1. O fluxo do 4� dever� ter obrigatoriamente 1 par�metro para receber o resultado do clique.
 */
function ebfShowConfirm(orderOK, title,msg,func,args) {
//Somente para MakerMobile.
}

/**
 * Exibe uma mensagem de impress�o de relat�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Mensagem. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Essa fun��o deve ser utilizada antes das fun��es de "Abrir Relat�rio Imediatamente" ou "Abrir relat�rio imediatamente com ordena��o".<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1� par�metro "O relat�rio est� sendo gerado...", tal mensagem ser� exibida antes do relat�rio <br/>
 * ser gerado.
 */
function ebfShowMainMessage(msg) {
  showMainMessage(msg, null);
}

/**
 * Mostra a �rvore<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore<br/>
 * 2. Valor L�gico<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como "�rvore" (Variante) e "False" (L�gico). Ent�o a �rvore ser� escondida. Caso o valor <br/>
 * l�gico seja "True", a �rvore aparecer�.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfShowTree(tree,view){	
  if (view)
    tree.showTree();
  else
    tree.hideTree();		
}

/**
 * Cria o componente Slider dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Largura.<br/>
 * 5. Altura.<br/>
 * 6. Nome do Componente.<br/>
 * 7. Valor Inicial (Opcional).<br/>
 * 8. Valor Final (Opcional). <br/>
 * 9. Posi��o Inicial (Opcional).<br/>
 * 10. Habilitar?.<br/>
 * 11. Vis�vel?.<br/>
 * 12. Acess�vel (0 = Modo Inclus�o/Altera��o - 1 = Todos os Modos).<br/>
 * 13. Exibir Numera��o (1 = Exibir - 0 = Ocultar).<br/>
 * 14. Precis�o Decimal (Opcional).<br/>
 * 15. Dica.<br/>
 * 16. Container.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.
 */
function ebfSliderNew (tab, posX, posY, width, height, name, startValue, endValue, posStart,
enable, visible, accessible, showNumber, precisionDecimal, tips, compContainer) {
  
  let code = getCodComponent();
  let component = new HTMLSlider(ebfGetSystemID(), ebfGetFormID(), code, posX, posY, width, height, "", "");

  component.zindex = 3;
  component.Categoria = 'Maker 3';
  component.Aba = tab;
  component.PosicaoX = posX;
  component.Posicaoy = posY;
  component.Tamanho = width;
  component.Altura = height;
  component.id = name;
  component.ValorInicio = (startValue != null && typeof startValue != "undefined") ? startValue : 0;
  component.ValorFim = (endValue != null && typeof endValue === "undefined") ? endValue : 100;
  component.ValorInicialMarcador = (posStart != null && typeof posStart != "undefined") ? posStart : 0;
  component.Habilitado = enable;
  component.Visivel = visible;
  component.Acessivel = accessible;
  component.ExibirNumeracao = showNumber;
  component.Precisao = (precisionDecimal != null && typeof precisionDecimal != "undefined") ? precisionDecimal: 0;
  component.Dica = tips;
  component.Container = compContainer;

  let container =  $mainform().d.t.getTabByName(tab);
  if (!container) {
    d.t.add(tab);
    container = $mainform().d.t.getTabByName(tab);
  } 
  if (compContainer) {   
    compContainer = document.getElementById(compContainer);
    component.design(compContainer, true);
  } else{ 
    component.design(container.div, true);  
  }  
}

/**
 * Essa fun��o cria o componente SliderPanel dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Posi��o X.<br/>
 * 3. Posi��o Y.<br/>
 * 4. Altura.<br/>
 * 5. Tamanho.<br/>
 * 6. Nome do Componente.<br/>
 * 7. Lista de Imagens.<br/>
 * 8. Vis�vel?<br/>
 * 9. Habilitar?<br/>
 * 10. Acess�vel (0 = Modo Inclus�o/Altera��o - 1 = Todos os Modos).<br/>
 * 11. Tamanho da Fonte.<br/>
 * 12. Tempo.<br/>
 * 13. Cor da Fonte do Texto.<br/>
 * 14. Cor do Rodap� Ativo.<br/>
 * 15. Container.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O s�timo par�metro � passado uma lista de lista, onde cada lista devar� possu� 3 par�metros:<br/>
 * URL da imagem, Descri��o da imagem e Link, sendo o primeiro par�metro obrigat�rio. Se imagem estiver<br/>
 * no contexto do Webrun pode-se passar o caminho relativo da mesma.<br/>
 * 2. O valor passado no 12� par�metro � executado em milissegundos.
 */
function ebfSliderPanelNew(tab, posX, posY, height, width, name, imageList, visible,
  enable, acessible, fontSize, time, fontColor, footerColor, compContainer) {

    let code = getCodComponent();
    let component = new HTMLSliderPanel(ebfGetSystemID(),ebfGetFormID(), code, posX, posY, width, height, "", "");

    /*Realiza o tratamento da lista de URL's passa por argumento*/     
    if (imageList instanceof Array) {
      let size =  imageList.length;
      let _JSON_URLs = {};
      var _JSON_Instance = {sliderpanel:{}};      
      for(var i=0; i < size; i++){      
        let currentList = imageList[i];        
        _JSON_URLs.path = currentList[0] === null ? "" : currentList[0];     
        _JSON_URLs.description = currentList[1] === null ? "" : currentList[1];        
        _JSON_URLs.link = currentList[2] === null ? "" : currentList[2];        
        _JSON_Instance.sliderpanel[i+1] = _JSON_URLs;
        _JSON_URLs = {} 
      }      

      _JSON_Instance = "JSONInstance(" + JSON.stringify(_JSON_Instance) + ")";
    }
    /*Fim*/
    
    component.id = name;
    component.zindex = 3;

    component.Aba = tab;
    component.Tamanho = width;
    component.Container = compContainer;
    component.Categoria = 'Maker 3';
    component.Habilitado = enable;
    component.Acessivel = acessible;
    component.Nome = name;
    component.Visivel = visible;
    component.CorFonteTexto = fontColor;
    component.CorRodapeAtivo = footerColor;
    component.TamanhoFonte = fontSize;
    component.TabelaImagem = _JSON_Instance;
    component.Tempo = time;
    component.Altura = height;
    component.PosicaoY = posX;
    component.PosicaoX = posY;

    let container = $mainform().d.t.getTabByName(tab);  
    if (!container) {
      d.t.add(tab);
      container = $mainform().d.t.getTabByName(tab);
    } 
    if (compContainer) {   
      compContainer = document.getElementById(compContainer);
      component.design(compContainer, true);
    } else{ 
      component.design(container.div, true);  
    }  
}

/**
 * Separa o texto em um determinado caractere passado no 2� par�metro e retorna cada parte deste texto em uma posi��o<br/>
 * de uma lista.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que ser� quebrado.<br/>
 * 2. Caractere.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista com o texto separado (Lista).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como "M,A,K,E,R,F,L,O,W" (Letras), e "," (Letras),  o retorno ser� uma lista com 09 elementos<br/>
 * contendo "M"|"A"|"K"|"E"|"R"|"F"|"L"|"O"|"W" respectivamente.<br/>
 * <br/>
 * Observa��o:<br/>
 * A fun��o Quebrar Texto, sempre vai considerar o �ltimo caracter, ou seja, caso voc� passe o seguinte texto:<br/>
 *          "teste1,teste2,teste3,"<br/>
 *  o retorno vai ser:<br/>
 *         [teste1, teste2, teste3, ]<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSplit(text, caracterSplit) {
  return text.split(caracterSplit);
}

/**
 * Essa fun��o inicia o monitoramento de localiza��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1- Fluxo para receber dados do monitoramento. (Fluxo)<br/>
 * 2- Par�metros do fluxo. (Variante)<br/>
 * 3- Prioridade. (Inteiro)<br/>
 * 4- Intervalo em milissegundos. (Inteiro)<br/>
 * 5- Intervalo mais r�pido em milissegundos. (Inteiro)<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1- O par�metro "Prioridade" poder� ser:<br/>
 *   a- 100 para PRIORITY_HIGH_ACCURACY<br/>
 *   b- 104 para PRIORITY_LOW_POWER<br/>
 *   c- 105 para PRIORITY_NO_POWER<br/>
 *   d- 102 para PRIORITY_BALANCED_POWER_ACCURACY<br/>
 * 2- Define o intervalo desejado para a atualiza��o da localiza��o.<br/>
 * 3- Para mais informa��es sobre o par�metro Prioridade, verifique a documenta��o do Android: https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html
 */
function ebfStartMonitoringGPS(){
  alert("Dispon�vel apenas no Maker Mobile");       
}

/**
 * Verifica se o conte�do do primeiro par�metro inicia com o conte�do do 2� par�metro.<br/>
 * <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto onde ser� feita a pesquisa;<br/>
 * 2. Valor inicial do texto.<br/>
 * <br/>
 * Retorno:  <br/>
 * Verdadeiro se o texto do 1� par�metro iniciar com o valor informado no 2� par�metro, caso contr�rio, retornar� Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como "Maker Flow" (Letras) e "Ma" (Letras) , o retorno seria Verdadeiro.<br/>
 * 2. Assumindo os par�metros como "Maker Flow" (Letras) e "Flow" (Letras) , o retorno seria Falso.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Ao informar o 2� par�metro como "" (vazio), o retorno ser� Verdadeiro.
 */
function ebfStartsWith (value, startValue){
  if(!isNullable(value))  
    return toString(value).startsWith(startValue);    
  return false;
}

/**
 * Interrompe a execu��o do fluxo. Caso seja passado alguma mensagem por par�metro, esta � exibida.<br/>
 * Se houver algum processamento ap�s a utiliza��o dessa fun��o, este n�o ser� executado.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Mensagem a ser exibida (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como par�metro "Opera��o Cancelada" (Letras), quando a fun��o for executada exibir� a mensagem "Opera��o Cancelada" e o fluxo ser� interrompido. <br/>
 * Nenhum processamento depois dele ser� executado.
 */
function ebfStopRuleExecution(msg) {
  document.hasRuleErrors = true;
  throw new StopRuleExecution(msg);
}

/**
 * Inverte o texto passado por par�metro.  <br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Texto a ser invertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto invertido(Letras).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metro a palavra "Maker"; (Letras), o retorno seria "rekaM".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfStringReverse(value) {
  var output = "";
  for (i = 0; i <= value.length; i++) {
    output = value.charAt (i) + output;
  }
  return output;
}

/**
 * Converte um texto para o formato HTML.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que ser� convertido. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto no formato HTML. (Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. HTML � uma linguagem de marca��o utilizada para produzir p�ginas na Web<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro a vari�vel "Softwell", o retorno ser� o conte�do da vari�vel "Softwell" convertido para o formato HTML.
 */
function ebfStringToHTMLString(value) {
  return stringToHTMLString(value);
}

/**
 * Converte um texto passado por par�metro para o formato JavaScript. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto normal para ser convertido para o formato padr�o JavaScript.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto passado por par�metro convertido para o Padr�o JavaScript. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * Assumindo como par�metro o conte�do "", o retorno ser� "\r", pois "" � um caractere especial JavaScript.
 */
function ebfStringToJs(value) {
  return stringToJs(value);
}

/**
 * Converte um texto para o formato XML.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que ser� convertido. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto no formato XML.(Letras)
 */
function ebfStringToXMLString(value) {
  return stringToXMLString(value);
}

/**
 * A fun��o recebe um texto (1� par�metro) e retorna uma subsequ�ncia deste texto. A subsequ�ncia inicia na posi��o<br/>
 * indicada no 2� par�metro, com o tamanho indicado no 3� par�metro, <br/>
 * <br/>
 * Par�metros:<br/>
 * 1.Texto<br/>
 * 2. Posi��o inicial da subsequ�ncia que se deseja obter.<br/>
 * 3. Quantidade de caracteres da subsequ�ncia.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a subsequ�ncia contida no texto(Letras) passado no 1� par�metro, que inicia na posi��o informada no<br/>
 * 2� par�metro, e cont�m o n�mero de caracteres informado no 3� par�metro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metros "Fluxo de a��es" (Letras), 2 (Inteiro) e 10(Inteiro). O retorno ser� "luxo de a�".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSubstring() {
  var retorno = "";
  if (existArgs(arguments)) {
    var value = arguments[0].toString();
    var length = value.length;
    var ini = parseInt(arguments[1]) - 1;
    var fim = ini + parseInt(arguments[2]);
    ini = ini < 0 ? 0 : ini;
    fim = fim > length ? length : fim;
    if (!(ini > length || ini >= fim)) {
      try {
        retorno = value.substring(ini, fim);
      } catch (ex) {
      }
    }
  }
  return retorno;
}

/**
 * A fun��o recebe um texto (primeiro par�metro) e retorna apenas a quantidade de caracteres passada no segundo<br/>
 * par�metro a partir do final, ou seja, contados de tr�s pra frente.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1.Texto<br/>
 * 2. Quantidade de caracteres que n�o ser�o removidos do texto.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto (Letras) com apenas a quantidade de caracteres passado no segundo par�metro do texto, contados de<br/>
 * tr�s para frente.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como par�metros:<br/>
 * 1�: Maker Flow (Letras)<br/>
 * 2�:3(Inteiro)<br/>
 * Retorno: low(Letras)<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfSubstringInverse(value, size) {
  var valor = ebfStringReverse(value);
  valor = ebfSubstring(valor, 1, size);
  valor = ebfStringReverse(valor);
  return valor;
}

/**
 * Esta fun��o efetua logoff do sistema atual e redireciona para a tela de login do sistema.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfSystemChangeUser() {
  var win = top; 
  if (parent.opener) { 
    win = parent.opener.top; 
  } else if (getOpenerWindow(top)) { 
    win = getOpenerWindow(top).top; 
  }
  var param = d.WFRForm.sys.value.toString();
  win.document.location.href = "open.do?sys=" + param;
}

/**
 * Esta fun��o efetua logout do usu�rio autenticado no sistema. Caso esta fun��o seja chamada atrav�s de aplicativos m�veis (Maker Mobile), a aplica��o ser� encerrada.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfSystemExit() {
  var win = top; 
  if (parent.opener) { 
    win = parent.opener.top; 
  } else if (getOpenerWindow(top)) { 
    win = getOpenerWindow(top).top; 
  }
  var param = d.WFRForm.sys.value.toString();
  win.document.location.href = getAbsolutContextPath() + "?sys=" + param + "&back=false&action=logout";
  return true;
}

/**
 * Fun��o que cria uma nova aba dinamicamente.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Valor l�gico que confirma a cria��o da aba mesmo que j� exista outra de mesmo nome.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfTabNew(name,duplicate){
  var container = $mainform().d.t.getTabByName(name); 
  if(!container || duplicate){
    if(d.t){
      d.t.add(name);
    }
  }
}

/**
 * Esta fun��o altera a folha de estilo do elemento<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Elemento da tabela.<br/>
 * 2. Nome da nova folha de estilo.<br/>
 * <br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTableChangeCSS(componente,estilo) {
     var componente = $w(componente);
     if(componente != null) {
       componente.className = estilo;
     }
}

/**
 * Esta fun��o altera a folha de estilo do elemento<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Elemento da tabela.<br/>
 * 2. Estilo.<br/>
 * <br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTableChangeStyleCSS(componente,estilo) {
     var componente = document.getElementById(componente);
     if(componente != null) {      
       if (componente) {         
/*       var style = componente.style.cssText;           
       style += estilo;
        componente.setAttribute("style",style); */
        componente.setAttribute("style",estilo);       
       }
     }
}

/**
 * Essa fun��o recebe como par�metro a linha ou a c�lula de uma tabela html e exibe ou oculta <br/>
 * de acordo com o valor passado no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Linha ou C�lula da tabela HTML.<br/>
 * 2. Verdadeiro (para exibir), Falso (para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfTableColumnVisible(idColumn, Visible){
  var cell = document.getElementById(idColumn);  
  if (Visible) {
    cell.style.display = "block";  
  }
  else {  
    cell.style.display = "none";    
  }  
}

/**
 * Essa fun��o recebe como par�metro a linha ou coluna de uma tabela html e alterar a cor da mesma.<br/>
 * <br/>
 * Par�metros<br/>
 * 1. Linha ou Coluna de uma tabela HTML.<br/>
 * 2. Cor que a linha ou coluna ir� assumir.<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.
 */
function ebfTableHTMLAlterLineColor(component, colorLine) {
  var line = document.getElementById(component);

  line.style.backgroundColor=colorLine;
}

/**
 * Essa fun��o recebe como par�metro o Id da linha de uma tabela html e exibe ou oculta a mesma<br/>
 * de acordo com o valor passado no segundo par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Id da linha da tabela HTML.<br/>
 * 2. Par�metro para exibir ou ocultar a linha (1 - para exibir e 0 - para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui
 */
function ebfTableRowVisible(idColumn, Visible){
  var cell = document.getElementById(idColumn);  
  if (Visible==1) {
    cell.style.display = "";  
  }
  else {  
    cell.style.display = "none";    
  }  
}

/**
 * Lan�a uma exce��o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Mensagem da exce��o.<br/>
 * 2. Causa da exce��o (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso essa fun��o seja usada dentro das fun��es "Monitorar Exce��es" e "Capturar Exce��es", ent�o as <br/>
 * informa��es chegar�o no fluxo definido em "Capturar Exce��es".
 */
function ebfThrowException(message, cause) {
  var ex = new Object();
  ex.message = message;
  ex.cause = cause;
  throw ex;
}

/**
 * Recebe como par�metro uma data/hora e a retorna com a data modificada para  01/01/1900<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data/Hora<br/>
 * <br/>
 * Retorno:<br/>
 * Data/Hora<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Obter hora("05/10/2007 11:20:30") o Retorno: "01/01/1900 11:20:30".
 */
function ebfTimeOfDateTime(date) {
  if (date != null && date instanceof Date) {
    date.setYear(1900);
    date.setMonth(0);
    date.setDate(1);
  }
  return date;
}

/**
 * Esta fun��o cria um novo objeto Temporizador, recebe como par�metro o nome do temporizador, que ser� usado nas fun��es de iniciar, pausar, parar e zerar. Recebe ainda, o Formul�rio e o componente do tipo caixa de texto no qual este temporizador ser� constantemente atualizado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Temporizador (Letras)<br/>
 * 2. Formul�rio onde est� localizado um componente a ser utilizado pelo Timer.<br/>
 * 3. Componente. (Caixa de Texto)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a refer�ncia do timer. (Variante)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1� Par�metro : temporizador (letras)<br/>
 * 2� Par�metro : Cadastro de Tempo<br/>
 * 3� Par�metro : tempo.<br/>
 * <br/>
 * Neste exemplo, o edit com nome tempo do Formul�rio Cadastro de Tempo ir� constantemente ser atualizado com o valor do temporizador criado.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso seja necess�rio utilizar as fun��es que manipulam componente, Exemplo: 'Mostrar Componente', deve-se utilizar o ID do componente informado nessa fun��o.
 */
function ebfTimerCreate(name, form, com) {
  let container = $c(com);  
  if (container) {
    let timer = new HTMLTimer(ebfGetSystemID(), form, getCodComponent(), container.posX, container.posY,
                  container.width, container.height, name);
    container.div.classList.add("d-none");
    timer.id = name;
    timer.parent = container;    
    timer.valorInicial = "00:00:00";     
    if (container.decorationChanged)
      timer.setDecoration(container.font, container.size, container.weight, container.italic,
         container.underline, container.strikeout, container.bgColor, container.color);
    timer.design(container.doc, false);
    timer.setVisible(container.visible);              
    return timer;               
  } else {
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", com));
  }  
}

/**
 * Esta fun��o recebe como par�metro o nome do componente Timer e o tipo de formata��o que a fun��o deve seguir no retorno do hor�rio.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente Timer (Letras).<br/>
 * 2. Tipo de Retorno.(Opcional) (H=Horas, M=Minutos, S=Segundos)<br/>
 * <br/>
 * Retorno:<br/>
 * Hor�rio (Variante).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o segundo par�metro n�o seja definido, o retorno ser� o hor�rio completo do Timer.
 */
function ebfTimerGetTime(componentName, format) {
    let component = $c(componentName);
    let time = component.getTimerString();   
    switch (format){
        case 'H':
            time = time.substring(0, 2);
            break;
        case 'M':
            time = time.substring(3, 5);
            break;
        case 'S':
            time = time.substring(6);
            break;
    }
    return time;  
}

/**
 * Pausa ou Continua a contagem no temporizador passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Temporizador. (Timer)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o timer ja esteja pausado e a fun��o seja novamente chamada, o contador ir� continuar de onde parou.
 */
function ebfTimerPause(id){
  var timer = $c(id);
  if (timer) {
    timer.pause();
  }
}

/**
 * Reinicia a contagem no temporizador passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Temporizador (Timer).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfTimerReset(id){
  var timer = $c(id);
  if (timer) {
    timer.reset();
  }  
}

/**
 * Inicia a contagem no temporizador passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Temporizador. (Timer)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O Temporizador deve ter sido criado anteriormente.
 */
function ebfTimerStart(id){
  var timer = $c(id);
  if (timer) {
    timer.start();
  }
}

/**
 * Para a contagem no temporizador passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Temporizador (Timer).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfTimerStop(id){
  var timer = $c(id);
  if (timer) {
    timer.stop();
  }
}

/**
 * Converte para o formato Texto removendo os caracteres especiais de JavaScript. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto JavaScript para ser convertido para o formato de texto normal.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto passado por par�metro convertido para o formato de texto normal. (Letras)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como par�metro o conte�do: ""(aspas), o retorno ser� "\"(barra), pois ""(aspas) � um caractere especial JavaScript.<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * N�o Possui.
 */
function ebfToJSString(str) {
  var sb = ""; 
  if (str != null) {
    str = str.toString();
    for (var i = 0; i < str.length; i++) {
      c = str.charAt(i);
      if (c == '\\') {
        sb += "\\\\";
      } else if (c == '\'') {
        sb += "\\'";
      } else if (c == '"') {
        sb += "\\\"";
      } else if (c == '\n') {
        sb += "\\n";
      } else if (c == '\r') {
      } else {
        sb += c;
      }
    }
    return sb;
  } else {
    return "";
  }
}

/**
 * Essa fun��o formata uma data de acordo os valores passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data (Data).<br/>
 * 2. Idioma (Opcional)(Letras).<br/>
 * 3. Formato (Texto JSON)(Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Data formatada (Letras);<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Caso o segundo par�metro n�o seja informado o mesmo assumir� o idioma do Webrun.<br/>
 * 2. Os par�metros suportados para formata��o s�o: weekday, year, month, day, hour, minute e second.<br/>
 * 3. Os valores poss�veis para formata��o s�o:<br/>
 *   - weekday: "narrow", "short", "long".<br/>
 *   - year: "numeric" e "2-digit".<br/>
 *   - month: "numeric", "2-digit", "narrow", "short" e "long".<br/>
 *   - day: "numeric" e "2-digit".<br/>
 *   - hour: "numeric" e "2-digit".<br/>
 *   - minute: "numeric" e "2-digit".<br/>
 *   - second: "numeric" e "2-digit".<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como primeiro par�metro a data 31/08/2016 00:00:00, segundo par�metro pt-BR e terceiro par�metro o texto JSON {"weekday":"long"},<br/>
 * o retorno ser� quarta-feira;<br/>
 * <br/>
 * 2. Assumindo como primeiro par�metro a data 31/08/2016 00:00:00, segundo par�metro pt-BR e terceiro par�metro o texto JSON{"weekday":"long", "day":"numeric", "month":"long", "year":"numeric"},<br/>
 * o retorno ser� quarta-feira, 31 de agosto de 2016<br/>
 * <br/>
 * Mais informa��es:<br/>
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 */
function ebfToLocaleDateString(date, locale ,format){
 locale = locale===undefined || locale===null ? resources_locale : locale;   
 //For�a a remo��o do underline por tra�o caso o idioma seja o padr�o do Webrun.
 locale = ebfReplace(locale, "_", "-");
 if(date instanceof Date){
   try{
    var options = JSON.parse(format);
   }catch(e){
     handleException(new Error("Texto JSON n�o est� em um formato v�lido"));
   } 
   return date.toLocaleDateString(locale, options);
 }
}

/**
 * Transforma o texto passado como par�metro para  min�sculo.<br/>
 * <br/>
 * Par�metros:  <br/>
 * 1. Texto a ser transformado.<br/>
 * <br/>
 * Retorno: <br/>
 * Converte o texto passado no primeiro par�metro para  letras min�sculas e retorna.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo o par�metro como "MAKER FLOW" (Letras),  o retorno seria "maker flow".<br/>
 * 2-Assumindo o par�metro como "Maker Flow" (Letras),  o retorno seria "maker flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfToLowerCase() {
  var value = "";
  if (existArgs(arguments)) {
    value = arguments[0].toLowerCase();
  }
  return value;
}

/**
 * Transforma o texto passado como par�metro para mai�sculo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto a ser transformado.<br/>
 * <br/>
 * Retorno: <br/>
 * Converte as o texto passado no primeiro par�metro para  letras mai�sculas e retorna.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo o par�metro como "maker flow" (Letras),  o retorno seria "MAKER FLOW".<br/>
 * 2-Assumindo o par�metro como "Maker Flow" (Letras),  o retorno seria "MAKER FLOW".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfToUpperCase() {
  var value = "";
  if (existArgs(arguments)) {
    value = arguments[0].toUpperCase();
  }
  return value;
}

/**
 * Traduz um texto para um determinado idioma.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto a ser traduzido<br/>
 * 2. Lista de par�metros do texto<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o texto traduzido para o idioma definido no par�metro. (Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Quando utilizada na camada servidor, a fun��o ir� buscar o texto passado na Tabela de Tradu��es. Se for utilizada<br/>
 * na camada cliente, o texto j� tem que estar determinado no fluxo para que ele possa buscar na tabela antes da chamada da fun��o.<br/>
 * 2. O segundo par�metro � para definir nomes pr�prios que n�o possuem tradu��o.<br/>
 * <br/>
 * Exemplo:<br/>
 * Se definirmos o texto<br/>
 * 1� Par�metro = Meu nome � {0} e meu pai � {1}.<br/>
 * No 2�par�metro devemos criar uma lista a partir dos elementos com os valores correspondentes a posi��o no texto.<br/>
 * Ex: Lista [Maria, Jo�o]. Desta forma, a fun��o ir� retornar: My name is Maria and my father is Jo�o.
 */
function ebfTranslate(text) {
  // Caso o texto n�o tenha sida definido, ent�o retorna o pr�prio valor
  if ((text == null) || (typeof text == "undefined") || (text === "")) {
    return text;
  }
	
  var value = text;
	
  // Traduz o texto
  if (this.translations.findKey(resources_locale) != -1) {
    var resourcesMap = this.translations.get(resources_locale);
    if (resourcesMap.findKey(text) != -1) {
      value = resourcesMap.get(text);
    }
  }  

  // Tabela de Tradu��o.  
  try {
    if (eval("resources_" + resources_locale) && eval("resources_" + resources_locale)[text]) {  
      return eval("resources_" + resources_locale)[text];
    }  
  } catch(e) {}

  // Trata os par�metros, caso haja
  if ((arguments.length > 1) && (arguments[1] != null) && (typeof arguments[1] != "undefined")) {
    if (arguments[1] instanceof Array) {
      // Obt�m o Array
      var params = arguments[1];

      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        if (param != null && typeof param != "undefined") {
          var regexp = new RegExp("\\{" + (i) + "\\}", "g");
          value = value.replace(regexp, param);
        }
      }
    } else {
      // Obt�m os par�metros definidos a partir do segundo par�metro
      for (var i = 1; i < arguments.length; i++) {
        var param = arguments[i];
        if (param != null && typeof param != "undefined") {
          var regexp = new RegExp("\\{" + (i-1) + "\\}", "g");
          value = value.replace(regexp, param);
        }
      }
    }    
  }
  return value;
}

/**
 * Altera borda da �rvore<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore<br/>
 * 2. Tamanho da borda (pixel)<br/>
 * 3. Cor<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os par�metros como "�rvore" (Variante), "2" (Inteiro) e a Cor(Azul). Ser� criada uma borda em volta da �rvore de 2 pixeis de largura e de cor Azul.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeChangeBorder(tree,borderSize,color) {
  tree.otherDiv.style.border = borderSize + "px solid " + color;
}

/**
 * Fun��o que retorna um elemento da �rvore a partir do seu ID.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore na qual o elemento se encontra<br/>
 * 2. ID do elemento desejado<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a refer�ncia do elemento. (Variante)<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeGetElementById(tree, id){
  if(!tree)
    throw "O objeto �rvore n�o foi definido!";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado n�o � do tipo �rvore!";
    
  if(!id)
    throw "O ID do elemento desejado n�o pode ser nulo!";
    
  return tree.getElement(id);  
}

/**
 * Obter Informa��es do Elemento<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore.<br/>
 * 2. Elemento.<br/>
 * <br/>
 * Retorno:<br/>
 * Informa��o (Letras)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como "�rvore" (Variante), "Elemento" (Variante). Caso haja alguma informa��o sobre o elemento passado por par�metro, ela ser� retornada para uma vari�vel do tipo Letras.
 */
function ebfTreeGetElementDBInfo(tree,element){	
  return tree.getElementDBInfo(element);	
}

/**
 * Obt�m o nome do Elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros<br/>
 * 1. �rvore<br/>
 * 2. Elemento (Refer�ncia)<br/>
 * <br/>
 * Retorno<br/>
 * 1. Retorna o Nome do Elemento.
 */
function ebfTreeGetElementDesc(tree, element){

  if(!tree)
    throw "O objeto �rvore n�o foi definido";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado n�o � do tipo �rvore";
  if(!element)
    throw "O objeto passado n�o � um elemento de uma �rvore";

  try {
    return element.caption;
   
    
  } catch(e){
    throw e;
  }
  
  return -1;
}

/**
 * Fun��o que retorna a chave do elemento passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore na qual o elemento se encontra; (Variante)  Ex: Retorno da fun��o "�rvore - Criar �rvore".<br/>
 * 2. Elemento desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Chave do elemento. (Variante)<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeGetElementKey(tree, element){

  if(!tree)
    throw "O objeto �rvore n�o foi definido";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado n�o � do tipo �rvore";
  if(!element)
    throw "O objeto passado n�o � um elemento de uma �rvore";

  try {
    var key = tree.getElementDBInfo(element).chave;
    //var key = tree.getElementById(element);
    return key;
    
  } catch(e){
    throw e;
  }
  
  return -1;
}

/**
 * Adiciona Informa��es ao Elemento.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore.<br/>
 * 2. Elemento.<br/>
 * 3. Lista de Informa��es Adicionais<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como uma "�rvore" (Variante),  o "Elemento" (Variante) e uma "Lista" com informa��es adicionais, esta ser� atribu�da ao Elemento. Podendo ser obtida com a fun��o �rvore - Obter Informa��es do Elemento.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeSetElementDBInfo(tree,element,arrInfo){	
  tree.setElementDBInfo(element,arrInfo);	
}

/**
 * Altera o �cone da �rvore.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore.<br/>
 * 2. Elemento.<br/>
 * 3. Nome do arquivo imagem.<br/>
 * <br/>
 * Observa��o:<br/>
 * A fun��o ir� sempre buscar a imagem a partir do diret�rio Skin definido na propriedade "Skin" da �rea de trabalho do <br/>
 * Maker. Caso n�o haja um Skin definido, ser� buscado no diret�rio padr�o ("Skins/Default/")
 */
function ebfTreeSetIcon(tree, element, iconFile) {	
  tree.setIcon(element, iconFile);	
}

/**
 * Contrai todos os n�s da �rvore.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a �rvore<br/>
 * 2. Componente �rvore<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o: <br/>
 * Para que a fun��o funcione corretamente a propriedade "Carga Postergada"  deve est� desativada<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeviewCollapseElement(element, isRoot) {
  if (isNullable(element)) {  
    return;
  }  
  if (!isNullable(element._children)) {
    if (!isRoot && element._children.length > 0) {    
      element.close();
    }
    for (var i = 0; i < element._children.length; i++) {
      ebfTreeviewCollapseElement(element._children[i]);
    }
  }  
}

function ebfTreeviewCollapseAll(formName, componentName) {
  var component = $c(componentName);  
  if (component instanceof HTMLTreeview) {  
    component.tree.autoCollapse = false;    
    ebfTreeviewCollapseElement(component.getRoot(), true);
  }
}

/**
 * Contra� o elemento da �rvore passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Elemento da �rvore (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o: <br/>
 * Para que a fun��o funcione corretamente a propriedade ""Carga Postergada"  deve est� desativada
 */
function ebfTreeviewElementClose(element) {
  if (element) {
    element.close();  
  }  
}

/**
 * Expande todos os n�s da �rvore.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio que cont�m a �rvore<br/>
 * 2. Componente �rvore<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui<br/>
 * <br/>
 * Observa��o: <br/>
 * Para que a fun��o funcione corretamente a propriedade ""Carga Postergada"  deve est� desativada<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeviewExpandElement(element, isRoot) {
  if (isNullable(element)) {  
    return;
  } 
  if (!isNullable(element._children)) {
    for (var i = 0; i < element._children.length; i++) {
      ebfTreeviewExpandElement(element._children[i]);
    }
    if (!isRoot && element._children.length > 0) {    
      element.open();
    }    
  }
}

function ebfTreeviewExpandAll(formName, componentName) {
  var component = $c(componentName);  
  if (component instanceof HTMLTreeview) {  
    component.tree.autoCollapse = false;    
    ebfTreeviewExpandElement(component.getRoot(), true);
  }
}

/**
 * Filtra a �rvore de acordo com a palavra-chave passada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. �rvore a ser filtrada<br/>
 * 2. Filtro (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Somente s�o considerados no filtro, os elementos Ra�zes.<br/>
 * 2. O filtro ocorre de acordo com a descri��o dos elementos e n�o pelo campo-chave.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTreeviewFilter(com, filter) {
  $c(com).filter(filter);
}

/**
 * Remove os espa�os existentes antes e depois do texto passado por par�metro e retorna.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto a ser utilizado.<br/>
 * <br/>
 * Retorno:  <br/>
 * Retorna o texto passado como par�metro, por�m sem espa�os no in�cio e no final (Letras).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como par�metro "           Maker Flow          " (Letras), o retorno seria "Maker Flow".<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfTrim() {
  var value = "";
  if (existArgs(arguments)) {
    value = trim(arguments[0]);
  }
  return value;
}

/**
 * Essa fun��o decodifica uma URL passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. URL.<br/>
 * 2. Charset (Opcional) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * URL decodificada.<br/>
 * <br/>
 * Observa��o (�es):<br/>
 * 1. Caso o 2� par�metro seja nulo, a fun��o pega o Charset utilizado na aplica��o.<br/>
 * 2. A URL s� ser� decodificada corretamente se a mesma estiva codificada na mesma camada.
 */
function ebfURLDecoder (url, charset) {
  charset = charset === null || charset === undefined ? ENCODING : charset;
  if(charset.toUpperCase() === 'ISO-8859-1') {
    return unescape(url);
  } else {
    return decodeURI(url);
  }
}

/**
 * Essa fun��o codifica uma URL passada por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. URL.<br/>
 * 2. Charset (Opcional) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a URL codificada. (Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Caso o 2� par�metro seja nulo, a fun��o pega o charset utilizado na aplica��o.<br/>
 * 2. Ao codificar uma URL na camada cliente a mesma deve ser decodificada na mesma camada.
 */
function ebfURLEncoder (url, charset){
  charset = charset === null || charset === undefined ? ENCODING : charset;
  if(charset.toUpperCase() === 'ISO-8859-1') {
    return escape(url);
  } else {
    return encodeURI(url);
  }
}

/**
 * Essa fun��o atualiza um elemento no objeto JSON passado no primeiro par�metro.<br/>
 * Caso a chave passada no segundo par�metro n�o exista a mesma ser� criada.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave<br/>
 * 3. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON atualizado.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro pode ser passado o retorno da fun��o "JSON - Criar Objeto".<br/>
 * 2. Caso uma chave a ser atualizada tenha como valor um objeto Mapa, esta ser� convertida para JSON.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro um objeto JSON criado a partir do Texto {"Vers�o":"3.9","empresa":"Softwell"}, ao chamar a fun��o "JSON - Atualizar Valor" e passar como chave "Vers�o" (sem aspas) e valor (3� par�metro) "4.0", o objeto JSON (1� par�metro) ter� a chave "Vers�o" atualizada de "3.9" para "4.0".
 */
function ebfUpdateValueObjectJson(objectJSON, key, value){
  objectJSON[key] = value instanceof Map ? ebfMapToJson(value) : value;
  return objectJSON;
}

/**
 * Atualiza a posi��o X do componente passado como par�metro. Fun��o apenas para componentes<br/>
 * que possuem a propriedade de movimenta��o habilitada.<br/>
 * <br/>
 * Par�metros:<br/>
 *    1. Componente a ser atualizado;<br/>
 *    2. Nova posi��o para a coordenada X do componente.
 */
function ebfUpdateX(componentVar,newPosition){
    var component = $c(componentVar);
    if(component){
        component.updateX(newPosition);
    }
}

/**
 * Atualiza a posi��o Y do componente passado como par�metro. Fun��o apenas para componentes<br/>
 * que possuem a propriedade de movimenta��o habilitada.<br/>
 * <br/>
 * Par�metros:<br/>
 *    1. Componente a ser atualizado;<br/>
 *    2. Nova posi��o para a coordenada Y do componente.
 */
function ebfUpdateY(componentVar,newPosition){
    var component = $c(componentVar);
    if(component){
        component.updateY(newPosition);
    }
}

/**
 * Realiza o upload de um arquivo. Poder� ser informado o caminho onde ser� armazenado o <br/>
 * arquivo, uma regra para efetuar a valida��o do arquivo a ser enviado e uma poss�vel regra chamada e os par�metros <br/>
 * que essa regra poder� receber(caso exista).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Caminho para armazenamento (Caso nulo ser� armazenado na "Upload" dentro do contexto do Webrun).<br/>
 * 2. Nome de uma regra cliente para valida��o (Opcional: Caso nulo, n�o haver� valida��o do arquivo antes do envio).<br/>
 * 3. Nome de uma regra (Caso nulo a fun��o realizar� apenas o upload do arquivo).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A regra chamada no 2� par�metro pela fun��o upload, receber� como par�metro de entrada uma lista <br/>
 * (Variante) de arquivos a serem enviados. Esta lista possui informa��es como: nome do arquivo, tamanho (em bytes) e o tipo do arquivo (se identificado pelo browser).<br/>
 * 2.  A regra chamada no 2� par�metro pela fun��o upload, caso seja definida, dever� retornar verdadeiro ou <br/>
 * falso (L�gico) informando se deve ser permitido ou n�o o envio do arquivo.<br/>
 * 3. A regra chamada no 2� par�metro deve ser da camada CLIENTE.<br/>
 * 4. A regra chamada no 3� par�metro pela fun��o upload, caso seja definida na camada servidor, n�o pode <br/>
 * chamar um sub fluxo cliente.<br/>
 * 5. A regra chamada no 3� par�metro pela fun��o upload, recebe como par�metro de entrada o caminho para <br/>
 * onde foi enviado o arquivo. Para passar par�metros adicionais, al�m do enviado automaticamente pelo Webrun, basta <br/>
 * clicar no bot�o (com sinal de adi��o) que se encontra ao lado do nome da fun��o.
 */
function ebfUploadFile2(url, ruleValidation, ruleName) {
  var securityVersion1 = false;
  try { securityVersion1 = (securityVersion == "1"); } catch (e) { }
  if (isNullable(url) || (securityVersion1 && !(/^(\w+-)+\w+$/.test(url)))) url = "";
  if (isNullable(ruleName)) ruleName = "";
  if (isNullable(ruleValidation)) ruleValidation = "";

  var params = "";
  if (arguments.length > 3) {
    for (var i = 3; i < arguments.length; i++) {
      params += ("&P_" + (i - 3) + "=" + URLEncode(arguments[i], "GET"));
    }
  }  

  openRuleUpload(sysCode, idForm, ruleName, url, params, ruleValidation, false);
}

/**
 * Realiza o upload de m�ltiplos arquivos. Poder� ser informado o caminho que ser�(�o) armazenado(s) <br/>
 * o(s) arquivo(s), uma regra para efetuar a valida��o do arquivo a ser enviado e uma poss�vel regra chamada e os<br/>
 * par�metros que essa regra poder� receber(caso exista).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Caminho para armazenamento (Caso nulo ser� armazenado na "Upload" dentro do contexto do Webrun).<br/>
 * 2. Nome de uma regra cliente para valida��o (Caso nulo, n�o haver� valida��o do arquivo antes do envio).<br/>
 * 3. Nome de uma regra (Caso nulo a fun��o realizar� apenas o upload do arquivo).<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. A regra chamada no 2� par�metro pela fun��o upload, receber� como par�metro de entrada uma lista (Variante) de<br/>
 * arquivos a serem enviados. Esta lista possui informa��es como: nome do arquivo, tamanho (em bytes) e o tipo do <br/>
 * arquivo<br/>
 * (se identificado pelo browser).<br/>
 * 2.  A regra chamada no 2� par�metro pela fun��o upload, caso seja definida, dever� retornar verdadeiro ou falso <br/>
 * (L�gico) informando se deve ser permitido ou n�o o envio do arquivo.<br/>
 * 3. A regra chamada no 2� par�metro deve ser da camada CLIENTE.<br/>
 * 4. A regra chamada no 3� par�metro pela fun��o upload, caso seja definida na camada servidor, n�o pode chamar um sub fluxo cliente.<br/>
 * 5. A regra chamada no 3� par�metro pela fun��o upload, recebe como par�metro de entrada o caminho para onde foi<br/>
 * enviado o arquivo. Para passar par�metros adicionais, al�m do enviado automaticamente pelo Webrun, basta clicar no <br/>
 * bot�o (com sinal de adi��o) que se encontra ao lado do nome da fun��o.
 */
function ebfUploadMultipleFiles2(url, ruleValidation, ruleName) {
  var securityVersion1 = false;
  try { securityVersion1 = (securityVersion == "1"); } catch (e) { }
  if (isNullable(url) || (securityVersion1 && !(/^(\w+-)+\w+$/.test(url)))) url = "";
  if (isNullable(ruleName)) ruleName = "";
  if (isNullable(ruleValidation)) ruleValidation = "";

  var params = "";
  if (arguments.length > 3) {
    for (var i = 3; i < arguments.length; i++) {
      params += ("&P_" + (i - 3) + "=" + URLEncode(arguments[i], "GET"));
    }
  }  

  openRuleUpload(sysCode, idForm, ruleName, url, params, ruleValidation, true);
}

/**
 * Criar o nome de uma vari�vel. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Vari�vel.<br/>
 * 2. Valor l�gico (Verdadeiro ou falso).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o nome da vari�vel sem acentos nem cedilhas. (Letras)<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Se o nome passado por par�metro possuir acentos ou cedilhas, a fun��o retornar� valores diferentes conforme o 2� par�metro L�gico.<br/>
 * 2. Se o 2� par�metro for "true" o retorno ser� a vari�vel sem acentos ou cedilhas, caso seja "false" o retorno ser� a vari�vel<br/>
 * sem acentos ou cedilhas e em formato uppercase (em mai�sculo).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como par�metro "A��o" (Letras), se o segundo par�metro for Falso, o resultado ser� "ACAO", se for verdadeiro<br/>
 * ser� "Acao".
 */
function ebfUtilReduceVariable(texto, className) {
  return reduceVariable(texto, !parseBoolean(className));
}

/**
 * Essa fun��o faz uma valida��o numa string utilizando express�o regular.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Recebe o texto que ser� validado pela express�o regular.<br/>
 * 2. Recebe a express�o regular para validar o texto.<br/>
 * <br/>
 * Retorno:<br/>
 * L�gico<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Os retornos podem ser:<br/>
 *     True  - O texto informado � v�lido, segundo a express�o regular informada.<br/>
 *     False - O texto informado n�o � v�lido.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfValidateTextER (text, regEx) {
  
  if (regEx == null || typeof regEx == "undefined" || regEx == "") {
    return false;
  }
  
  var regExp = new RegExp(regEx);
  return regExp.test(text);
  
}

/**
 * Retorna o status da conex�o.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da conex�o<br/>
 * <br/>
 * Retorno:<br/>
 * Status (Inteiro)<br/>
 * <br/>
 * 0 - Conectando<br/>
 * 1 - Conectado<br/>
 * 2 - Fechando<br/>
 * 3 - Fechado<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "WebSocket - Conectar ao Servidor".
 */
function ebfWebSocketClientCheckConnection(ws) {
  return ws.readyState;  
}

/**
 * Essa fun��o encerra a conex�o com o EndPoint passado como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da conex�o<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "WebSocket - Conectar".<br/>
 * 2. Ao desconectar, ser� executado o fluxo associado ao par�metro "Fluxo Ao desconectar", caso especificado.
 */
function ebfWebSocketClientDisconnect (ws) {
  if (ws.readyState === WebSocket.OPEN)
      ws.close();
}

/**
 * Essa fun��o envia uma mensagem para o servidor de acordo os par�metros passados.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Refer�ncia da Conex�o<br/>
 * 2. Mensagem.<br/>
 * <br/>
 * Retorno<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. O primeiro par�metro � o retorno da fun��o "WebSocket - Conectar.<br/>
 * 2. A mensagem enviada ao servidor ser� automaticamente enviada pelo mesmo para todos os clientes, acionando o fluxo "Ao enviar mensagem" de cada um.
 */
function ebfWebSocketClientSendMessage(ws, message) {
  ws.send(message);  
}

/**
 * Essa fun��o conecta ao Endpoint dispon�vel.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. URL<br/>
 * 2. Fluxo Ao Abrir Conex�o (Opcional)<br/>
 * 3. Par�metros Opcionais (Ao abrir conex�o) (Opcional)<br/>
 * 4. Fluxo ao receber mensagem (Opcional)<br/>
 * 5. Par�metros opcionais (Ao receber mensagem) (Opcional)<br/>
 * 6. Fluxo ao Ocorrer Erro (Opcional)<br/>
 * 7. Par�metros opcionais (Ao ocorrer erro) (Opcional)<br/>
 * 8. Fluxo Ao Fechar Conex�o (Opcional)<br/>
 * 9. Par�metros Opcionais (Ao fechar conex�o) (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Refer�ncia da conex�o (Variante).<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Passando um fluxo "Ao abrir conex�o" e uma lista de par�metro com 2 (dois) elementos, o primeiro par�metro do fluxo passado ser� reservado para a refer�ncia, o segundo sera reservado para o primeiro elemento da lista e o terceiro ser� reservado para o segundo elemento da lista.<br/>
 * 2. Passando um fluxo "Ao receber mensagem" e uma lista de par�metro com 1 (um) elemento, o primeiro par�metro do fluxo passado ser� reservado para a mensagem recebida e o segundo sera reservado para a mensagem recebida do servidor.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso o fluxo "Ao abrir conex�o" seja passado, o primeiro par�metro deve ser reservado para a refer�ncia da conex�o, mesmo que n�o v� usar.<br/>
 * 2. Caso o fluxo "Ao receber mensagem", o primeiro elemento dos par�metros de entrada sempre ser� a mensagem recebida.<br/>
 * 3. O segundo par�metro � o retorno da fun��o "WebSocket - Obter EndPoint"<br/>
 * 4. No fluxo "Ao fechar conex�o" n�o utilize fun��es que precisem da refer�ncia da conex�o, pois neste estado a conex�o j� est� sendo fechada e n�o funcionar�o.<br/>
 * 5. Caso queira enviar mensagem do servidor para os clientes sem que seja uma mensagem enviada por um cliente, utilize a fun��o "WebSocket - Enviar mensagem servidor p/ clientes" da camada Servidor.
 */
function ebfWebSocketConnectClient (url, flowOnOpen, onOpenParams, flowOnMessage, onMessageParams, flowOnError, onErrorParams, flowOnClose, onCloseParams) {
  ws = new WebSocket(url);  
  ruleOnOpen = flowOnOpen;  
  ruleOnMessage = flowOnMessage;  
  ruleonError = flowOnError;
  ruleOnClose = flowOnClose;  
  arrayOnOpen = onOpenParams;  
  arrayOnMessage = onMessageParams;  
  arrayOnerror = onErrorParams;
  arrayOnClose = onCloseParams;  

//A inst�ncia do ws cliente sempre ficar� na primeira posi��o do array de par�metros, sendo passados ou n�o.
  ws.onopen = function() {
    if (ruleOnOpen != null) {
      if (arrayOnOpen != null)
        arrayOnOpen.splice(0, 0, ws);
      else {
        arrayOnOpen = [];
        arrayOnOpen.push(ws);      
     }
      ebfFlowExecute(ruleOnOpen, arrayOnOpen);
      arrayOnOpen = arrayOnOpen.slice(1, arrayOnOpen.length);
    }
  }  

  //A mensagem captada sempre ficar� na primeira posi��o do array de par�metros, sendo passados ou n�o.
  ws.onmessage = function (evt) {
    if (arrayOnMessage != null)
      arrayOnMessage.splice(0, 0, evt.data);
    else {
      arrayOnMessage = [];
      arrayOnMessage.push(evt.data);
    }
    ebfFlowExecute(ruleOnMessage, arrayOnMessage);
    arrayOnMessage = arrayOnMessage.slice(1, arrayOnMessage.length);
  } 

  ws.onerror = function(evt) {  
    if (ruleOnerror != null)  
      ebfFlowExecute(ruleonError, arrayOnerror);  
          
  }

  ws.onclose = function() {
    if (ruleOnClose != null)
      ebfFlowExecute(ruleOnClose, arrayOnClose);
  }

   return ws;
}

/**
 * Verifica o estado da grade passada por par�metro, retornando 'I' caso esteja em modo de inser��o, 'A' caso esteja em <br/>
 * modo de edi��o, ou 'N' se n�o for nenhum dos dois casos.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a letra (' I ', ' A ' ou ' N ') correspondente ao modo da grade.(Letras)<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo que o nome da grade �: "Grade Estados do Brasil"  e a mesma encontra-se em modo de inser��o.<br/>
 * Ao chamar o fluxo o retorno ser� ' I '.
 */
function ebfWhatIsGridModeStatus(grid) {
  var grid = $c(grid);
  if (!grid) throw "Componente " + grid + " n�o encontrado";
  if (grid.editing) return 'A';
  else if (grid.inserting) return 'I';
  else return 'N';
}

/**
 * Retorna a largura(em pixels) do formul�rio onde o fluxo for executado.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui<br/>
 * <br/>
 * Retorno:<br/>
 * Largura do Formul�rio. (Inteiro)<br/>
 * <br/>
 * Observa��es:<br/>
 * N�o possui.
 */
function ebfWindowGetWidth() {
  return getWindowDimensions().width;
}

/**
 * Compartilha um texto/link atrav�s do dispositivo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Assunto<br/>
 * 2. Conte�do<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
function ebfWirelessSendText(subject, content) {
  //To-do
}

/**
 * Obt�m o atributo do Elemento XML informado <br/>
 * (Atributos s�o informa��es adicionais que s�o acrescentadas a uma tag(delimitadores)).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML.<br/>
 * 2. Nome do Atributo.<br/>
 * <br/>
 * Retorno: <br/>
 * A vari�vel de Retorno dever� ser do tipo Letras<br/>
 * <br/>
 * Observa��es: <br/>
 * A linguagem XML � definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, <br/>
 * pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Se tivermos ent�o um elemento XML: <br/>
 *     <br/>
 *   <?xml version="1.0"?><br/>
 *     <aviso date="25/10/2007"><br/>
 *       <para>Janice</para><br/>
 *       <de>Jefferson</de><br/>
 *       <cabecalho>Lembre-se</cabecalho><br/>
 *       <corpo>Lan�amento do oficial do Maker</corpo><br/>
 *     </aviso> <br/>
 *     <br/>
 * e obtemos o atributo "date" o retorno ser� "25/10/2007".
 */
function ebfXMLGetAttribute(node, attribute) {
  return node.getAttribute(attribute);
}

/**
 * Retorna o primeiro elemento do Objeto XML passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML<br/>
 * 2. Nome do Elemento<br/>
 * 3. NameSpace (Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * A vari�vel de Retorno dever� ser do tipo variante. Retorna a refer�ncia do elemento passado como par�metro.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. A linguagem XML � definida como o formato universal para dados estruturados na Web. Para saber mais sobre o<br/>
 * assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplo 01: <br/>
 * 1. Tendo um XML onde o nome do elemento a ser obtido � "SQL"<br/>
 * <TEXTO>	<br/>
 *   <SQL>Sequel</SQL>	   <br/>
 *   <MAKER>Flow</MAKER><br/>
 *   <SQL>Sequel2</SQL><br/>
 * </TEXTO> <br/>
 * Ent�o o retorno seria a refer�ncia para o primeiro elemento "SQL"<br/>
 * <br/>
 * Exemplo 02: <br/>
 * 1. Tendo um XML onde o nome do elemento a ser obtido � "MAKER" onde o mesmo possui o NameSpace "flow"<br/>
 * <TEXTO>	<br/>
 *   <SQL>Sequel</SQL>	   <br/>
 *   <MAKER xmlns="flow">Flow</MAKER><br/>
 *   <SQL>Sequel2</SQL><br/>
 * </TEXTO> <br/>
 * Ent�o o retorno seria a refer�ncia para o primeiro elemento "MAKER".
 */
function ebfXMLGetChildElement(node, childName) {
  var c = node.getElementsByTagName(childName);
  if (c.length > 0) 
   return c[0];
}

/**
 * Obt�m todos os filhos de um determinado Elemento XML informado.<br/>
 * (Os Filhos do Elemento no caso seria ent�o os Sub-Elementos do Elemento.).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML. (Raiz, N�, etc...)<br/>
 * 2. Nome do Elemento.<br/>
 * <br/>
 * Retorno: <br/>
 * A vari�vel de Retorno dever� ser do tipo Variante.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. A linguagem XML � definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, <br/>
 *    pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Tendo uma XML onde o elemento � <br/>
 *     <TEXTO>	<br/>
 *       <SQL>Sequel</SQL>	   <br/>
 *       <MAKER>Flow</MAKER>	 <br/>
 *     </TEXTO><br/>
 *     Ent�o o retorno seria o que estive-se dentro do n� <TEXTO>, no caso,  <SQL> e <MAKER>.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfXMLGetChildrenElement(node, childName) {
  if (childName) {
    return node.getElementsByTagName(childName);
  }
  else {
    return node.childNodes;  
  }
}

/**
 * Obt�m o nome de um elemento XML.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Objeto XML.<br/>
 * <br/>
 * Retorno:<br/>
 * Letras<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se temos ent�o <br/>
 *          <TEXTO><br/>
 *                Maker Flow  Vers�o = 3.0 <br/>
 *          </TEXTO><br/>
 *     O retorno ser�: TEXTO<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfXMLGetElementTagName(node) {
  return node.tagName;
}

/**
 * Obt�m todo o conte�do e  todos os sub-elementos que est�o dentro do Elemento.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML (n� do elemento)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se temos  ent�o <br/>
 *     <TEXTO><br/>
 *             Maker Flow	<br/>
 *             <SQL>Sequel</SQL>	    <br/>
 *             <MAKER>Flow</MAKER>	<br/>
 *     </TEXTO><br/>
 *     Ent�o o retorno seria: Maker Flow , <SQL>Sequel</SQL> e <MAKER>Flow</MAKER><br/>
 * <br/>
 * Vers�o: 1.0.0.1
 */
function ebfXMLGetElementValue(node) {
  if (node && node.firstChild)
    return node.firstChild.nodeValue;
  else
    return null;
}

/**
 * Obt�m o Elemento acima do Sub-Elemento<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML.  (Raiz, N�, etc...)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Tendo uma XML onde o Sub-Elemento �  <MAKER>Flow</MAKER> e acima dele tem um Elemento pai<br/>
 *     <TEXTO>		   <br/>
 * 	   <MAKER>Flow</MAKER>	<br/>
 *     </TEXTO><br/>
 *     Ent�o o seu Elemento pai � "<TEXTO>"<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfXMLGetParentElement(node) {
  return node.parentNode
}

/**
 * Obt�m um elemento raiz de um XML.<br/>
 * (O Elemento raiz seria o elemento pai de um arquivo XML)<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Objeto XML<br/>
 * <br/>
 * Retorno:<br/>
 * A vari�vel de Retorno dever� ser do tipo Variante<br/>
 * <br/>
 * Observa��es:: <br/>
 * 1. A linguagem XML � definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Se tivermos ent�o um elemento XML .<br/>
 *       <?xml version="1.0" encoding="ISO-8859-1"?><br/>
 *       <software><br/>
 *         <titulo>Maker</titulo><br/>
 *         <direitos>SOFTWELL</direitos><br/>
 *         <ano>2007</ano><br/>
 *       </software ><br/>
 *     Ent�o retorna: < software >.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfXMLGetRoot(doc) {
  if (doc) return doc.documentElement;
}

/**
 * Essa fun��o cria um objeto XML passando como par�metro o texto no formato em XML. E atribui o objeto criado a uma<br/>
 * vari�vel do tipo Variante.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. O texto em XML;<br/>
 * 2. Charset(Opcional) (Servidor) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * Cria o objeto XML. O retorno deve ser armazenado numa vari�vel do tipo Variante.<br/>
 * <br/>
 * Observa��es: <br/>
 * 1. No segundo par�metro, dever� ser informado o charset do arquivo. Caso n�o seja passado o charset, a fun��o adotar� o charset corrente do Webrun.<br/>
 * 2. A linguagem XML � definida como o formato universal para dados estruturados na Web. Para saber mais sobre o<br/>
 * assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1� par�metro sendo: <br/>
 *         <?xml version="1.0" encoding="ISO-8859-1"?><br/>
 *           <CURSO><br/>
 *                <DISCIPLINA><br/>
 *                    <OBJETIVO><br/>
 *                         Ensinar XML<br/>
 *                    </OBJETIVO><br/>
 *                    <METODOLOGIA><br/>
 *                          Laborat�rio<br/>
 *                    </METODOLOGIA><br/>
 *                    <AVALIACAO><br/>
 *                          3 provas<br/>
 *                    </AVALIACAO><br/>
 *                </DISCIPLINA><br/>
 *           </CURSO><br/>
 *     O retorno ser� a cria��o do objeto XML.
 */
function ebfXMLOpen(XMLText) {
  var doc = null;
  if (document.implementation && document.implementation.createDocument) {//Mozzila
   var domParser = new DOMParser();
   doc = domParser.parseFromString(XMLText, 'application/xml');
   fixXMLDocument(doc);
   return doc;
  }
  else {//IE
    doc = new ActiveXObject("MSXML2.DOMDocument");
    doc.loadXML(XMLText);
  }
  return doc;
};

/**
 * Converte uma texto no padr�o XML para o padr�o JSON texto.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Texto XML.<br/>
 * <br/>
 * Retorno:<br/>
 * JSON texto (Letras).<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como par�metro o texto <Softwell><IDE>Maker</IDE><Framework>Webrun</Framework></Softwell> o retorno ser� o texto JSON <br/>
 * {"Softwell":{"IDE":"Maker", "Framework":"Webrun"}};
 */
function ebfXMLToJSON(xml) {
  if (xml != null && typeof xml === "string") {
    //Converte a string em objeto
    var parse = new DOMParser()
    xml = parse.parseFromString (xml, 'text/xml');
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (var j = 0; j < xml.attributes.length; j++) {
          var attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
      for (var i = 0; i < xml.childNodes.length; i++) {
        var item = xml.childNodes.item(i);
        var nodeName = item.nodeName;
        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = ebfXMLToJSON(item);
        } else {
          if (typeof (obj[nodeName].length) == "undefined") {
            var old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(ebfXMLToJSON(item));
        }
      }
    }
    return obj;
  }
};

/**
 * Iniciar Captura Digital do Logon<br/>
 * <br/>
 * Par�metros:<br/>
 * Nenhum
 */
function ebfopenLogonDigitalCapture() {
 openLogonDigitalCapture(ebfGetSystemID());
}

/**
 * Alterar Tamanho da Fonte do Componente<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente (definir o formul�rio de trabalho no par�metro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * 2. Tamanho da Fonte<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebfsetSizeFontComponent(ComponentName,s) {
    s = (s ? s : 11);
   $c(ComponentName).setSize(s);
}

/**
 * Recarrega o sistema em execu��o onde a fun��o foi chamada.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function ebfshortcutReloadSystem() {
 shortcutReloadSystem(ebfGetFullSystemID());
}

/**
 * Moldura - Altera o Conte�do da Moldura<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Novo conte�do<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * N�o possui.
 */
function ebgChangeValueGroupBox(ComponentName,HTML) {
   var c = $c(ComponentName);   
   c.div.innerHTML = "";   
   c.div.innerHTML = HTML;
}

/**
 * Verifica se o formul�rio passado como par�metro est� aberto.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Formul�rio.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna verdadeiro se o formul�rio estiver aberto, caso contr�rio retorna falso. (L�gico)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Esta fun��o n�o identifica os formul�rios que foram abertos numa moldura. Para tal, deve utilizar a fun��o <br/>
 * "Executar fluxo no Formul�rio numa Moldura" passando uma regra que ir� verificar se o formul�rio na moldura <br/>
 * est� aberto.<br/>
 * 2. Esta fun��o s� ir� funcionar caso exista algum parentesco entre os formul�rios.
 */
function searchFormByGUIDFormIsOpened(currentForm,GUID){
  if (currentForm && currentForm.formGUID == GUID){
    return currentForm;
  }
  if (currentForm && currentForm.$mainform() && currentForm.$mainform().formGUID == GUID) {
    return currentForm.$mainform();
  }
  if (currentForm.children) {
    for (var i=0; i < currentForm.children.length; i++) {
      try {
        if (currentForm.children[i].$mainform()) {
          if (currentForm.children[i].$mainform().formGUID == GUID){
            return currentForm.children[i].$mainform();
          }
          var childForm = currentForm.children[i];
          if (currentForm.children[i].$mainform().d.n.isModal) {
            childForm = childForm.$mainform();
          }
          var returnForm = searchFormByGUIDFormIsOpened(childForm,GUID);
          if (returnForm){
            return returnForm;
          }
        }
      }catch(e){}
    }
  }
}

function searchFloatingFormIsOpenned(formGUID) {
  var openFloatingForms;
  if (isPopup) {  
    var mainFormWindow = top.opener;
    while(mainFormWindow && mainFormWindow.opener) {    
      mainFormWindow = mainFormWindow.opener;
    }
    if (mainFormWindow.mainSystemFrame)   
      openFloatingForms = mainFormWindow.mainSystemFrame.document.getElementsByClassName("WFRIframeForm");      
    else    
      openFloatingForms = [];
  } else {

    openFloatingForms = mainSystemFrame.document.getElementsByClassName("WFRIframeForm");  


  }
  for (var i=0; i<openFloatingForms.length; i++) {
    var formReference = openFloatingForms[i].children[1].children[1].contentWindow.mainform;
    if (formReference.formGUID == formGUID) {
      return formReference;    
    }
  }
}

function formIsOpenned(form) {
  if (isNull(form)) {
    return false;
  }
    
  var mainWindow = top;
  while (getOpenerWindow(mainWindow) != null) {
    var openerWindow = getOpenerWindow(mainWindow);
    if (openerWindow.mainform && !isNullable(openerWindow.mainform.sysCode)) {
      mainWindow = openerWindow;
    } else {
      break;
    }
  }  

  var myForm = searchFormByGUIDFormIsOpened(mainWindow, form);
  if (myForm) {
    return true;
  } else {  
    myForm = searchFloatingFormIsOpenned(form);    
    if (myForm) {    
      return true;      
    }
    return false;
  }
}

/**
 * Insere o texto na posi��o atual do cursor dentro de um campo do tipo Memo<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente (Letras)<br/>
 * 2. Texto desejado (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Esta fun��o insere apenas o texto na posi��o do cursor em um componente Memo.<br/>
 * 2. Esta fun��o s� funciona para o memo quando a propriedade texto rico est� setada como "Texto".<br/>
 * 3. Para utilizar esta fun��o, deve-se criar um novo processamento e utilizar previamente a fun��o "Monitorar posi��o do cursor no Memo".
 */
function freTextAreaInsertTextoAtCursor() { 
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    var stringToInsert = arguments[1];
    if (component) {
      var cPos = component.input.__cursorPos;
      var sText = component.input.value;
      var firstPart = sText;
      var secondPart = "";
      if(cPos){
        firstPart = sText.substring(0, cPos);
        secondPart = sText.substring(cPos, sText.length);
      }
      component.setValue(firstPart + stringToInsert + secondPart);
    }
    else {
      handleException(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", arguments[0]));
    }
  }
}

/**
 * Inicia o monitoramento do deslocamento do cursor dentro de um campo do tipo Memo<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Componente (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Esta fun��o monitora apenas o posicionamento do cursor em um componente MEMO<br/>
 * 2. Esta fun��o n�o funciona para o memo quando a propriedade texto rico est� setada como "HTML B�sico" ou "HTML Avan�ado".
 */
function __freMonitorarCursor_setCursorPos(tArea) {
  tArea.__cursorPos = __freMonitorarCursor_getCursorPos(tArea);  
}

function __freMonitorarCursor_getCursorPos(textElement) {
 //Firefox/Mozzila
 if (textElement.selectionStart || textElement.selectionStart == '0') {
   return textElement.selectionStart;    
 }
 //save off the current value to restore it later,
 var sOldText = textElement.value;

//create a range object and save off it's text
 var objRange = document.selection.createRange();
 var sOldRange = objRange.text;

//set this string to a small string that will not normally be encountered
 var sWeirdString = '#%~';

//insert the weirdstring where the cursor is at
 objRange.text = sOldRange + sWeirdString; 
 objRange.moveStart('character', (0 - sOldRange.length - sWeirdString.length));

//save off the new string with the weirdstring in it
 var sNewText = textElement.value;

//set the actual text value back to how it was
 objRange.text = sOldRange;

//look through the new string we saved off and find the location of
//the weirdstring that was inserted and return that value
 for (i=0; i <= sNewText.length; i++) {
   var sTemp = sNewText.substring(i, i + sWeirdString.length);
   if (sTemp == sWeirdString) {
     var cursorPos = (i - sOldRange.length);
     return cursorPos;
   }
 }
}

function freTextAreaMonitorarCursor() { 
  if (existArgs(arguments)) {
    var component = $c(arguments[0]);
    if (component) {
      component.input.onchange = function() { __freMonitorarCursor_setCursorPos(this); };      
      component.input.onclick  = function() { __freMonitorarCursor_setCursorPos(this); };      
    }     
    else {
      alert('Componente n�o encontrado!');    
    }
  }
}

/**
 * Esta fun��o retorna uma lista com o nome de todos os componentes presentes na tela onde esta fun��o foi <br/>
 * chamada.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com Nome dos Componentes. (Variante)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Caso queira utilizar na camada servidor, escolha a fun��o "Obter Lista de Componentes de um Formul�rio".
 */
function getAllComponentNames() {
  var all = controller.getAllElements();
  var elems = new Array();
  for (var i in all) {
    if (typeof(all[i]) == 'function' || all[i].code == -1 || all[i].code == 0 || all[i].code == undefined || all[i].id == undefined ) continue;
    elems.push(all[i].id);
  }
  return elems;
}

/**
 * Essa fun��o retorna o dia da semana a partir da data passada como par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Data que voc� deseja saber o dia da semana<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um n�mero inteiro que representa o dia da semana. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1� par�metro seja 23/09/2007. O retorno ser� 1, pois o dia a data cai no domingo.<br/>
 * 2. Assumindo que o 1� par�metro seja 04/10/2007. O retorno ser� 5, pois a data cai na quinta-feira.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * A fun��o retorna um n�mero inteiro representando o dia da semana (1 = Domingo; 2 = Segunda-Feira; 3 = Ter�a-Feira; 4 = Quarta-Feira; 5 = Quinta-Feira; 6 = Sexta-Feira; 7 = S�bado).
 */
function getDayOfWeek(paramDate) {   
  var date = toDate(paramDate);
  return date.getDay() + 1;  
}

/**
 * Essa fun��o verifica se o 1� par�metro � diferente do 2� par�metro. Caso seja, retorna verdadeiro, caso contr�rio, falso.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Primeiro valor.<br/>
 * 2. Segundo valor.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o 1� par�metro for diferente do 2� par�metro, caso contr�rio retorna falso. (L�gico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os par�metros como 10 (inteiro) e 2 (Inteiro), o retorno ser� verdadeiro.<br/>
 * 2. Assumindo os par�metros como A (letra) e A (letra), o retorno falso.<br/>
 * <br/>
 * Observa��o(�es): <br/>
 * 1. Essa fun��o diferencia letras mai�sculas e min�sculas.<br/>
 * 2. Devido a tipagem din�mica das vari�veis na camada cliente a fun��o em quest�o considera que os par�metros criados como num�ricos<br/>
 * necessita que seus valores sejam convertidos para inteiro ou fracionado, atrav�s do uso das fun��es: (Para Inteiro e Para Fracionado.)
 */
function isDiferent() {
  var value = false;
  if (existArgs(arguments)) {
    var param1 = arguments[0];
    var param2 = arguments[1];
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) != 0);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) != 0);
      }
    } else {
      value = (param1 != param2);
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se os valores passados por par�metro s�o iguais, ou seja, possuem o mesmo valor.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * O Retorno ser� verdadeiro se o valor do 1� par�metro for igual ao valor do 2� par�metro, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1� par�metro sendo "ab" e o 2� par�metro sendo "AB" o valor de retorno ser� falso, pois a fun��o diferencia letras mai�sculas e min�sculas.<br/>
 * 2. Assumindo o valor do 1� par�metro sendo "80" e o 2� par�metro sendo "80" o valor de retorno ser� verdadeiro, pois 80 � igual a 80.<br/>
 * <br/>
 * Observa��es: <br/>
 * Essa fun��o diferencia letras mai�sculas e min�sculas.<br/>
 * Devido a tipagem din�mica das vari�veis na camada cliente. Para que a fun��o considere que os par�metros s�o<br/>
 *  num�ricos, ser� necess�rio converter os valores para n�mero (inteiro ou fracionario) ao passar os par�metros para a<br/>
 *  fun��o (mesmo se as vari�veis utilizadas j� forem num�ricas).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function isEqual() {
  var value = false;
  if (existArgs(arguments)) {
    var param1 = arguments[0];
    var param2 = arguments[1];
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) == 0);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) == 0);
      }
    } else {
      value = (param1 == param2);
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se o valor do 1� par�metro � maior que o do 2� par�metro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * Se os valores dos par�metros forem iguais o retorno ser� falso, pois o mesmo valor n�o � maior que ele mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1� par�metro for maior que o valor do 2� par�metro, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1� par�metro sendo 20 e o 2� par�metro sendo 30 o valor de retorno ser� falso, pois 20 n�o � maior que 30.<br/>
 * 2. Assumindo o valor do 1� par�metro sendo 80 e o 2� par�metro sendo 80 o valor de retorno ser� falso, pois 80 n�o � maior que 80.<br/>
 * <br/>
 * Observa��o:<br/>
 * Devido a tipagem din�mica das vari�veis na camada cliente. Para que a fun��o considere que os par�metros s�o<br/>
 *  num�ricos, ser� necess�rio converter os valores para n�mero (inteiro ou fracionario) ao passar os par�metros para a<br/>
 *  fun��o (mesmo se as vari�veis utilizadas j� forem num�ricas).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function isGreater(value1, value2) {
  var value = false;
  if (value1 != null && typeof value1 != "undefined" && value2 != null && typeof value2 != "undefined") {
    var param1 = value1;
    var param2 = value2;
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) == 1);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) == 1);
      }
    } else {
      value = param1 > param2;
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se o valor do 1� par�metro � maior ou igual a do 2� par�metro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1� par�metro for maior ou igual que o valor do 2� par�metro, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1� par�metro sendo 36 e o 2� par�metro sendo 52 o valor de retorno ser� falso, pois 36 n�o � maior nem igual a 52.<br/>
 * 2. Assumindo o valor do 1� par�metro sendo 55 e o 2� par�metro sendo 55 o valor de retorno ser� verdadeiro, pois a condi��o � maior ou igual e 55 � igual a 55.<br/>
 * <br/>
 * Observa��o:<br/>
 * Devido a tipagem din�mica das vari�veis na camada cliente. Para que a fun��o considere que os par�metros s�o<br/>
 *  num�ricos, ser� necess�rio converter os valores para n�mero (inteiro ou fracionario) ao passar os par�metros para a<br/>
 *  fun��o (mesmo se as vari�veis utilizadas j� forem num�ricas).<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function isGreaterOrEqual(value1, value2) {
  var value = false;
  if (value1 != null && typeof value1 != "undefined" && value2 != null && typeof value2 != "undefined") {
    var param1 = value1;
    var param2 = value2;
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) == 0 || data1.compareTo(data2) == 1);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) == 0 || hora1.compareTo(hora2) == 1);
      }
    } else {
      value = param1 >= param2;
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se o valor do 1� par�metro � menor que o valor do 2� par�metro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * Se os valores dos par�metros forem iguais o retorno ser� falso, pois o mesmo valor n�o � menor que ele mesmo.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2.  Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1� par�metro for menor que o valor do 2� par�metro, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1� par�metro sendo 26 e o 2� par�metro sendo 12 o valor de retorno ser� falso, pois 26 n�o � menor que 12.<br/>
 * 2. Assumindo o valor do 1� par�metro sendo 5 e o 2� par�metro sendo 87 o valor de retorno ser� verdadeiro, pois 5 � menor que 87.<br/>
 * <br/>
 * Observa��o:<br/>
 * Devido a tipagem din�mica das vari�veis na camada cliente. Para que a fun��o considere que os par�metros s�o<br/>
 *  num�ricos, ser� necess�rio converter os valores para n�mero (inteiro ou fracion�rio) ao passar os par�metros para a<br/>
 *  fun��o (mesmo se as vari�veis utilizadas j� forem num�ricas).
 */
function isMinor(value1, value2) {
  var value = false;
  if (value1 != null && typeof value1 != "undefined" && value2 != null && typeof value2 != "undefined") {
    var param1 = value1;
    var param2 = value2;
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) == -1);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) == -1);
      }
    } else {
      value = param1 < param2;
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se o valor do 1� par�metro � menor ou igual ao valor do 2� par�metro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1� par�metro for menor ou igual ao valor do 2� par�metro, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1� par�metro sendo 65 e o 2� par�metro sendo 15 o valor de retorno ser� falso, pois 65 n�o � menor nem igual que 15.<br/>
 * 2. Assumindo o valor do 1� par�metro sendo 505 e o 2� par�metro sendo 632 o valor de retorno ser� verdadeiro, pois 505 � menor que 632.<br/>
 * 3. Assumindo o valor do 1� par�metro sendo 39 e o 2� par�metro sendo 39 o valor de retorno ser� verdadeiro, pois a condi��o � menor ou igual e 39 � igual a 39.<br/>
 * <br/>
 * Observa��o:<br/>
 * Devido a tipagem din�mica das vari�veis na camada cliente. Para que a fun��o considere que os par�metros s�o<br/>
 *  num�ricos, ser� necess�rio converter os valores para n�mero (inteiro ou fracion�rio) ao passar os par�metros para a<br/>
 *  fun��o (mesmo se as vari�veis utilizadas j� forem num�ricas).
 */
function isMinorOrEqual(value1, value2) {
  var value = false;
  if (value1 != null && typeof value1 != "undefined" && value2 != null && typeof value2 != "undefined") {
    var param1 = value1;
    var param2 = value2;
    if (param1 instanceof Date) {
      var data1 = param1;
      var data2 = toDate(param2);
      if (data1 != null && data2 != null) {
        value = (data1.compareTo(data2) == 0 || data1.compareTo(data2) == -1);
      }
    } else if (param1 instanceof Times) {
      var hora1 = param1;
      var hora2 = parseTime(param2);
      if (hora1 != null && hora2 != null) {
        value = (hora1.compareTo(hora2) == 0 || hora1.compareTo(hora2) == -1);
      }
    } else {
      value = param1 <= param2;
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se o par�metro � nulo. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1.Recebe um valor ou uma fun��o para ser avaliada.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor for nulo, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1.Valores iguais a 0 (zero) s�o considerados como nulo.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas fun��es a fun��o � Nulo, caso a consulta n�o retorne valor de FOL_COD o retorno ser� verdadeiro, pois o campo est� com o valor nulo.<br/>
 * 2. Assumindo que tenhamos obtido o valor de um componente do formul�rio, se n�o tiver valor no componente o retorno ser� verdadeiro, caso o componente tenha algum valor atribu�do a ele o retorno ser� falso.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o n�o � v�lida para verificar se um Objeto Lista ou Mapa � nulo ou vazio, para tal, utilizar a fun��o Tamanho da Lista ou Tamanho do Mapa verificando se o retorno da mesma � maior que 0 (zero).<br/>
 * <br/>
 * Vers�o: 1.0.0.1
 */
function isNull(value) {
 if (value == null) {
   return true;          
 }
 if (isTypeOf(value, 'ActiveXObject')) {
   return (value == null || typeof value == 'undefined');  
 }
 return (typeof value == 'undefined' || value == '' || value.toString() == 'NaN');
}

/**
 * Essa fun��o verifica se o par�metro � nulo ou vazio. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1.Recebe um valor ou uma fun��o para ser avaliada.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor for nulo ou vazio, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas fun��es a fun��o � Nulo, caso a consulta n�o retorne valor de FOL_COD o retorno ser� verdadeiro, pois o campo est� com o valor nulo.<br/>
 * 2. Assumindo que tenhamos obtido o valor de um componente do formul�rio, se n�o tiver valor no componente o retorno ser� verdadeiro, caso o componente tenha algum valor atribu�do a ele o retorno ser� falso.<br/>
 * 3. Verificando se um campo no formul�rio est� em branco, a fun��o retornar� verdadeiro caso o campo esteja vazio caso contr�rio retornar� falso.<br/>
 * <br/>
 * Observa��o:<br/>
 * 1. Essa fun��o n�o � v�lida para verificar se um Objeto Lista ou Mapa � nulo ou vazio, para tal, utilizar a fun��o Tamanho da Lista ou Tamanho do Mapa verificando se o retorno da mesma � maior que 0 (zero).
 */
function isNullOrEmpty(variavel) {
  return (variavel == null || typeof variavel == 'undefined' || trim(variavel+'') == '' || variavel.toString() == 'NaN');
}

/**
 * Essa fun��o busca a posi��o do elemento que foi informado na lista. Se encontrar retorna a posi��o. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Lista onde ser� procurado o elemento<br/>
 * 2. Elemento que ser� procurado<br/>
 * <br/>
 * Retorno:<br/>
 * A posi��o do elemento na lista, caso n�o seja encontrado, retorna 0. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1� par�metro seja uma lista com os seguintes valores: {a,b,c,d,e,f,g,h} e o 2� par�metro seja o valor  "d". O retorno ser� o valor 4, pois "d" est� na posi��o 4 da lista.
 */
function listContainsObject(list, obj) {
  position = 0;
  if(list) {
    for (i = 0; i < list.length; i++) {
      if(list[i] == obj) {
        position = i + 1;
      }  
    }  
  }
  return position;
}

/**
 * Retorna a soma dos n�meros dos par�metros passados.<br/>
 * <br/>
 * Par�metros: <br/>
 * n. Informar o valor para ser somado.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da Soma dos par�metros passados. (N�mero)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os par�metros sendo: 2 (Inteiro) e 2 (Inteiro), o retorno ser�: 4 (Inteiro).<br/>
 * 2. Assumindo os par�metros sendo: 4 (Inteiro) e 6 (Inteiro), o retorno ser�: 10 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprAdd() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0];
    if (value instanceof Date) {
      for (var i = 1; i < arguments.length; i++) {
        var temp = toDate(arguments[i]);
        value.incDay(temp.getDate());
      }
    } else if (value instanceof Times) {
      for (var i = 1; i < arguments.length; i++) {
        var temp = parseTime(arguments[i]);
        value.incHour(temp.getHour());
      }
    } else {
      value = parseNumeric(value);
      for (var i = 1; i < arguments.length; i++) {
        var temp = parseNumeric(arguments[i]);
        value += temp;
      }
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se algum valor passado � Falso, para retornar falso ou se s�o verdadeiros para retornar verdadeiro.<br/>
 * <br/>
 * Par�metros:<br/>
 * n. Valores ou fun��es que retornem valores l�gicos.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se todos os valores forem verdadeiros, caso um valor seja falso o retorno ser� falso. (L�gico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos dois par�metros: o 1� recebe a Fun��o "Maior" contendo os par�metros: 3 e 5 (3>5) e o 2� recebe a <br/>
 * Fun��o "Menor" contendo os par�metros: 7 e 10 (7<10), o retorno ser� falso,pois 3 � menor que 5.<br/>
 * 2. Assumindo que tenhamos dois par�metros: o 1� recebe a Fun��o "Igual" contendo os par�metros: A e A (A=A) e o 2� recebe a <br/>
 * Fun��o "Diferente" contendo os par�metros: 56 e 65 (56<>65), o retorno ser� verdadeiro, pois as duas condi��es s�o <br/>
 * verdadeiras.<br/>
 * <br/>
 * Observa��o(�es)<br/>
 * 1. Podem ser n par�metros, utilize o mais (+) para acrescentar os par�metros desejados.
 */
function oprAnd() {
  var value = true;
  if (existArgs(arguments)) {
    for (var i = 0; i < arguments.length; i++) {
      var temp = arguments[i];
      value = value && temp;
    }
  }
  return value;
}

/**
 * Calcula a m�dia aritm�tica dos valores passados como par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * n. Valor a ser somado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a divis�o da soma dos n�meros passados por par�metro pela quantidade de par�metros. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Informando os par�metros como: 10 (Inteiro) e 2 (Inteiro), o resultado � 6,0 (Fracionado).<br/>
 * 2. Informando os par�mteros como: 7 (Inteiro), 7 (Inteiro) e 7 (Inteiro) o resultado � 7,0 (Fracionado).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprAverage() {
  var average = 0.0;
  if (existArgs(arguments)) {
    var divisor = 0.0;
    var dividendo = arguments.length;
    for (var i = 0; i < arguments.length; i++) {
      var temp = arguments[i];
      if (temp) {
        divisor += parseNumeric(temp);
      }
    }
    average = divisor / dividendo;
  }
  return average;
}

/**
 * Essa fun��o verifica se o valor passado no 1� par�metro est� contido no intervalo que � delimitado pelo 2� e 3� par�metros. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Par�metro:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Menor valor do intervalo<br/>
 * 3. Maior valor do intervalo<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor verificado estiver no intervalo, caso contr�rio o retorno ser� falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o valor do 1� par�metro seja 50, o do 2� par�metro 10 e o valor do 3� par�metro 100 o retorno ser� verdadeiro, pois 50 est� entre 10 e 100.<br/>
 * 2. Assumindo que o valor do 1� par�metro seja 5, o do 2� par�metro 35 e o valor do 3� par�metro 70 o retorno ser� falso, pois 5 n�o est� entre 35 e 70.
 */
function oprBetween() {
  var between = false;
  if (existArgs(arguments)) {
    var value = arguments[0];
    var v1 = arguments[1];
    var v2 = arguments[2];
    if (!isNullable(value) && !isNullable(v1) && !isNullable(v2)) {
      if ((value instanceof Date) && (v1 instanceof Date) && (v2 instanceof Date)) {
        between = value.compareTo(v1) >= 0 && value.compareTo(v2) <= 0;
      } else if ((value instanceof Times) && (v1 instanceof Times) && (v2 instanceof Times)) {
        between = value.compareTo(v1) >= 0 && value.compareTo(v2) <= 0;
      } else if ((typeof value == "number") && (typeof v1 == "number") && (typeof v2 == "number")) {
        between = value >= v1 && value <= v2;
      } else {
        between = value.toString() >= v1.toString() && value.toString() <= v2.toString();
      }
    }
  }
  return between;
}

/**
 * Essa fun��o � utilizada para realizar a divis�o.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Valor do dividendo.<br/>
 * 2. Valor do divisor.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da divis�o dos n�meros passados por par�metros. (Fracionado)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1� Par�metro sendo: 10 (Inteiro) e o 2� Par�metro sendo: 5 (Inteiro), o retorno ser� : 2.<br/>
 * 2. Assumindo como o 1� Par�metro sendo: 10,5 e o 2� Par�metro sendo: 2,5 o retorno ser�: 4.2.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprDivide() {
  var value = 0;
  if (existArgs(arguments)) {
    value = parseNumeric(arguments[0]);
    for (var i = 1; i < arguments.length; i++) {
      var temp = arguments[i];
      value /= parseNumeric(temp);
    }
  }
  return value;
}

/**
 * Essa fun��o verifica o valor l�gico do 1� par�metro, se o mesmo for verdadeiro o retorno ser� o valor que estiver no 2� <br/>
 * par�metro, caso contr�rio o valor do 3� par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Fun��o que tenha um retorno l�gico<br/>
 * 2. Valor a ser retornado caso o primeiro par�metro seja verdadeiro<br/>
 * 3. Valor a ser retornado caso o primeiro par�metro seja falso<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor do 2� par�metro ou do 3� par�metro a depender do retorno l�gico do 1� par�metro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o valor do 1� par�metro seja a fun��o igual contendo os valores 7 e 7 (7=7), o 2� par�metro o valor 7 e o 3�<br/>
 * par�metro o valor 5, o retorno ser� 7, pois a condi��o do 1� par�metro � verdadeira.<br/>
 * 2. Assumindo que o valor do 1� par�metro seja a fun��o diferente contendo os valores 19 e 19 (19<>19), o 2� par�metro o <br/>
 * valor 35 e o 3� par�metro a fun��o soma contendo 5 e 15 (5+15) , o retorno ser� o resultado da soma no caso 20, pois a <br/>
 * condi��o do 1� par�metro � falsa.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function oprIf() {
  var value = null;
  if (existArgs(arguments)) {
    value = arguments[0] ? arguments[1] : arguments[2];
  }
  return value;
}

/**
 * Essa fun��o � utilizada para obter o maior dos valores passados por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * n. Valor a ser comparado.<br/>
 * <br/>
 * Retorno:<br/>
 * Obt�m o maior valor dentre os passados por par�metro, pode ter (n) par�metros a serem avaliados. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo que os par�metros sejam: 100 (Inteiro), 66 (Inteiro), 13 (Inteiro) e 99 (Inteiro) o retorno ser�: 100.0 (Fracionado).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprMaximum() {
  var maximum = null;
  if (existArgs(arguments)) {
    maximum = parseNumeric(arguments[0]);
    for (var i = 0; i < arguments.length; i++) {
      var temp = parseNumeric(arguments[i]);
      if (temp > maximum) {
        maximum = temp;
      }
    }
  }
  return maximum;
}

/**
 * Essa fun��o � utilizada para obter o menor dos valores passados por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * n. Valor a ser comparado.<br/>
 * <br/>
 * Retorno:<br/>
 * Obt�m o menor valor dentre os passados por par�metro, pode ter (n) par�metros a serem avaliados. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os par�metros sendo: 100 (Inteiro), 66 (Inteiro) e 99 (Inteiro) o retorno ser�: 66.0 (Fracionado).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprMinimum() {
  var minimum = null;
  if (existArgs(arguments)) {
    minimum = parseNumeric(arguments[0]);
    for (var i = 0; i < arguments.length; i++) {
      var temp = parseNumeric(arguments[i]);      
      if (temp < minimum) {      	
        minimum = temp;
      }
    }
  }
  return minimum;
}

/**
 * Calcula o valor absoluto de um n�mero, ou seja, retorna sempre o valor positivo.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Valor para retornar um valor absoluto.<br/>
 * <br/>
 * Retorno:<br/>
 * M�dulo do n�mero passado por par�metro. (N�mero)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como 1� Par�metro sendo: -10 (Inteiro), o retorno ser� 10 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprModulus() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.abs(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Retorna a multiplica��o dos n�meros passados por par�metro.<br/>
 * <br/>
 * Par�metros: <br/>
 * n.Valor a ser multiplicado.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da multiplica��o dos par�metros passados. (N�mero)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os valores dos par�metros 5 (Inteiro) e 4 (Inteiro), o retorno ser� 20 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprMultiply() {
  var value = 1.0;
  if (existArgs(arguments)) {
    for (var i = 0; i < arguments.length; i++) {
      var temp = arguments[i];
      value *= parseNumeric(temp);
    }
  }
  return value;
}

/**
 * Essa fun��o inverte o valor l�gico. Se o valor do par�metro for verdadeiro o retorno dele ter� o valor l�gico falso. Caso <br/>
 * contr�rio ser� verdadeiro.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1.Valor L�gico<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor l�gico invertido. <br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1� par�metro � uma vari�vel do tipo l�gica de valor verdadeiro, o retorno ser� falso. <br/>
 * 2. Assumindo que o 1� par�metro � a fun��o igual contendo os valores 5 e 5 (5=5) o retorno ser� falso, pois (5=5 � verdadeiro)<br/>
 * a nega��o dessa opera��o � falso.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function oprNot() {
  var value = null;
  if (existArgs(arguments)) {
    var temp = arguments[0];
    if (temp != null) {
      if (typeof temp == "number") {
        value = -temp;
      } else if (typeof temp == "boolean") {
        value = !temp;
      } else {
        interactionError("Tipo de par�metro desconhecido para a opera��o NOT.");
        value = temp;
      }
    }
  }
  return value;
}

/**
 * Essa fun��o verifica se algum valor passado por par�metro � verdadeiro, para retornar verdadeiro ou se todos os par�metros s�o valores falsos, para retornar falso.<br/>
 * <br/>
 * Par�metros:<br/>
 * n. Recebe valores ou fun��es que retornem valores l�gicos.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se apenas um par�metro for verdadeiro e retorna falso se todos os par�metros forem falsos.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos dois par�metros: o 1� recebe a fun��o maior contendo os par�metros: 3 e 5 (3>5) e o 2� recebe a fun��o menor contendo os par�metros: 7 e 10 (7<10), o retorno ser� verdadeiro,pois um par�metro � verdadeiro.<br/>
 * 2. Assumindo que tenhamos dois par�metros: o 1� recebe a fun��o igual contendo os par�metros: A e F (A=F) e o 2� recebe a fun��o diferente contendo os par�metros: 64 e 64 (64<>64), o retorno ser� falso, pois as duas condi��es s�o falsas.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function oprOr() {
  var value = false;
  if (existArgs(arguments)) {
    for (var i = 0; i < arguments.length; i++) {
      var temp = arguments[i];
      value = temp || value;
    }
  }
  return value;
}

/**
 * Eleva o coeficiente passado no Par�metro 1, ao expoente passado no Par�metro 2.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Valor a ser elevado � pot�ncia (base).<br/>
 * 2. Valor para ser informado como expoente.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor calculado. (Fracionado)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os par�metros sendo: 4 (Inteiro) e 2 (Inteiro), o retorno ser�: 16.0 (Fracionado).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprPow() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.pow(parseNumeric(arguments[0]), parseNumeric(arguments[1]));
  }
  return value;
}

/**
 * Obt�m o valor inteiro de um n�mero arredondando para cima ou para baixo, a depender da parte fracionada do n�mero.<br/>
 * Se a parte fracionada do n�mero for maior ou igual a 0,5 o n�mero ser� arredondado para cima, caso contr�rio para baixo.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Valor a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor (inteiro) arredondado de um n�mero passado por par�metro. (Inteiro)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1� par�metro sendo: 9,5 o retorno ser� 10 (Inteiro).<br/>
 * 2. Assumindo como o 1� par�metro sendo: 9,4 o retorno ser� 9 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprRound() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.round(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Calcula a raiz quadrada de um n�mero.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1.Valor para ser tirado a raiz quadrada.<br/>
 * <br/>
 * Retorno:<br/>
 * Raiz quadrada do n�mero passado. (Fracionado)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como par�metro como 16 (Inteiro), o retorno ser�: 4.0 (Fracionado), pois  4� = 16.<br/>
 * 2. Assumindo como par�metro como 81 (Inteiro), o retorno ser�: 9.0 (Fracionado), pois  9� = 81.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprSqrt() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.sqrt(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Subtra��o de valores informados nos par�metros.<br/>
 * <br/>
 * Par�metro: <br/>
 * n.Valor para a subtra��o.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a subtra��o de dois ou mais n�meros. (N�mero)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os par�metros sendo: 10 (Inteiro) e 5 (Inteiro), o retorno ser�: 5(Inteiro).<br/>
 * 1. Assumindo os par�metros sendo: 20 (Inteiro) e 2 (Inteiro), o retorno seria: 18 (Inteiro).<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O tipo de retorno resultante depende do tipo do primeiro par�metro.<br/>
 * 2. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.
 */
function oprSubtract() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0];
    if (value instanceof Date) {
      for (var i = 1; i < arguments.length; i++) {
        var temp = toDate(arguments[i]);
        value.subtractDay(temp.getDate());
      }
    } else if (value instanceof Times) {
      for (var i = 1; i < arguments.length; i++) {
        var temp = parseTime(arguments[i]);
        value.subtractHour(temp.getHour());
      }
    } else {
      value = parseNumeric(value);
      for (var i = 1; i < arguments.length; i++) {
        var temp = parseNumeric(arguments[i]);
        value -= temp;
      }
    }
  }
  return value;
}

/**
 * Arredonda para baixo um n�mero fracionado.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor fracionado.<br/>
 * <br/>
 * Retorno:<br/>
 * N�mero arredondado para baixo.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo o par�metro: 9,6 (Fracionado), o retorno seria: 9 (Inteiro)<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. Para garantir a integridade das opera��es matem�ticas, utilize convers�o para o tipo de dado nos par�metros.<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function oprTrunc() {
  var value = 0;
  if (existArgs(arguments)) {
    value = parseNumeric(arguments[0]).trunc();
  }
  return value;
}

/**
 * Remove a barra de navega��o do formul�rio que chama o fluxo.<br/>
 * <br/>
 * Par�metros:<br/>
 * N�o possui.<br/>
 * <br/>
 * Retorno: <br/>
 * N�o possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formul�rio que possua barra de navega��o, quando essa fun��o for executada esta barra ser� removida.<br/>
 * <br/>
 * Observa��es:<br/>
 * 1. O navegador que vai ser removido ser� a do formul�rio que chama o fluxo.
 */
function removeNavigator() {
  controller.removeNavigator();
}

/**
 * Causa um atraso na execu��o de um fluxo. Conhecida tamb�m como sleep.<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Tempo em segundos.<br/>
 * <br/>
 * Retorno:<br/>
 * N�o possui.
 */
/* Fun��o em implementa��o, n�o utilize.*/
/*
function sleep() {
  document.flag = true;
  if (existArgs(arguments)) {
     window.setTimeout("document.flag = false;", arguments[0] * 1000);
     while(document.flag);
  }
  return true;
}
*/

/**
 * Transforma o texto normal em um texto para Delphi com a identa��o passada no segundo par�metro.<br/>
 * (Coloca os caracteres especiais para serem executados em Delphi , como por exemplo caracteres de quebra de linha e<br/>
 * etc..)<br/>
 * <br/>
 * Par�metros: <br/>
 * 1. Texto que ser� transformado para Delphi.<br/>
 * 2. Par�metro: Identa��o.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto em Delphi.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.A quebra de linha em Delphi � representada por "#13#10". Assim, passando como par�metros "Maker(Quebra de Linha)<br/>
 * All " (Letras) e "   " (3 espa�os em branco), o resultado ser� (   '"Maker'#13#10'All "').<br/>
 * <br/>
 * Vers�o: 1.0.0.0
 */
function stringToDelphiString(v, ident) { 
  if((typeof v == "undefined") || (v == null)) return '';
  v = "" + v; 
  var SIZE = 67;
  var strings = new Array();
  var i = 0; 
  var s;
  do {
    s = v.substr(i, SIZE);
    if (s!='') strings.push(s);
    i += SIZE;
  } while (s != '');
  var r = '';
  for (var i=0;i<strings.length;i++) {
    r += ((ident?ident:'') + convertToDelphiString(strings[i]));
    if (i != strings.length-1)
      r += '+\r\n';
  }
  if (r == '')
    return '\'\'';
  else
    return r; 
}
function convertToDelphiString(v) { 
  var r = '';
  var opened = false;
  for (var i=0;i<v.length;i++) {
    var code = v.charCodeAt(i);
    if (code == 13)
      continue;
    var especial = !((code >= 32 && code <= 126 && code != 39)) ;
    if (especial) {
      if (opened) {
        r += '\'';
        opened = false;
      }
      if (code == 10)
        r += '#13#10';
      else 
        r += '#'+code;
    } else {
      if (!opened) {
        r += '\'';
        opened = true;
      } 
      if (code == 39)
        r += '\'\''; 
      else
        r += v.charAt(i);
      if (i == v.length-1 && opened)
        r += '\'';
    }
  }
  return r;
}

/**
 * Converte para valor L�gico o texto passado por par�metro. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Texto que ser� convertido para L�gico.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor L�gico correspondente ao texto enviado.(L�gico)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como par�metro o conte�do " 1", o retorno ser� o valor L�gico Verdadeiro.<br/>
 * 2. Assumindo como par�metro o conte�do " 0 ", o retorno ser� o valor L�gico Falso.
 */
function toBoolean(value) {
  return parseBoolean(value);
}

/**
 * Converte um valor passado por par�metro para Bytes.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Conte�do que ser� convertido para bytes.<br/>
 * <br/>
 * Retorno:<br/>
 * Array de Bytes equivalente ao conte�do passado por par�metro.(Variante)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o par�metro "Maker", ser� retornado um array de bytes equivalente � palavra "Maker".<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * Para manipular os bytes de retorno dessa fun��o � necess�ria a utiliza��o da fun��o "Array para Lista" da categoria "Convers�o". <br/>
 * Ap�s convertido pra lista o conte�do poder� ser manipulado pelas fun��es da categoria "Lista".
 */
function toBytes(obj) {
  return obj ? obj.toString() : "";
}

/**
 * Converte para data o valor passado no primeiro par�metro. O segundo par�metro � opcional, e por ele pode-se informar o formato da data que ser� retornada (v�lido apenas para fluxo servidor).<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido<br/>
 * 2. Formato do par�metro a ser convertido. (OPCIONAL, v�lido apenas para fluxo servidor)<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para data.(Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1.Assumindo como par�metros a data 10/10/2007 09:12:40 e  o formato dd/MM/yyyy,  o retorno ser� 10/10/2007 00:00:00.<br/>
 * <br/>
 * Observa��o(�es):<br/>
 * 1. O formato da Data referente ao segundo par�metro deve ser escrito no seguinte formato:<br/>
 *          dd    - Para dia do m�s da data do primeiro par�metro.<br/>
 *          MM  - Para M�s do Ano da data do primeiro par�metro.<br/>
 *         yyyy  - Para o Ano da data do primeiro par�metro.<br/>
 * 2. O formato da data n�o remove as horas.
 */
function toDate(value) {
  var toDate = null;
  if (value instanceof Date) {
    toDate = value;
  } else {
    if (value != null && (typeof value != "undefined")) {
      var dtExpReg = /^\s*(\d+)[\/\.-](\d+)[\/\.-](\d+)(\s(\d+):(\d+):(\d+))?\s*$/;
      var dataArr = dtExpReg.exec(value);
      if (dataArr != null) {
        var dia = retirarZerosIniciais(dataArr[1]);
        var mes = retirarZerosIniciais(dataArr[2]);
        var ano = retirarZerosIniciais(dataArr[3]);
        var hora = retirarZerosIniciais(dataArr[5]);
        var minuto = retirarZerosIniciais(dataArr[6]);
        var segundo = retirarZerosIniciais(dataArr[7]);
        if (hora != null && (typeof hora != "undefined")) {
          toDate = new Date(ano, mes-1, dia, hora, minuto, segundo);
        } else {
          toDate = new Date(ano, mes-1, dia, 0, 0, 0);
        }
      }
    }
  }
  return toDate;
}

/**
 * Converte um valor em "Radianos" para Grau.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor em Radianos a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * 1. "Radianos" convertido para "Graus". (N�mero)
 */
function toDegrees(radians) {
  return (Math.PI * toDouble(radians)) / 180;
}

/**
 * Converte para fracionado o valor passado por par�metro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Fracionado. (Fracionado)<br/>
 * <br/>
 * Observa��o(es):<br/>
 * 1. O valor apresentado ser� conforme o idioma do sistema.
 */
function toDouble(value) {
  return parseNumeric(value);
}

/**
 * Converte um valor passado por par�metro para Inteiro.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Inteiro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metros "12,54"  ,  o retorno ser� 12.
 */
function toLong() {
  var value = 0;
  if (existArgs(arguments)) {
    value = parseInt(toDouble(arguments[0]));
  }
  return value;
}

/**
 * Converte um valor em "graus" para radiano.<br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Grau a ser convertido.<br/>
 * <br/>
 * Retorno:<br/>
 * Grau convertido para radianos. (N�mero)
 */
function toRadians(degrees) {
  return (180 * toDouble(degrees)) / Math.PI;
}

/**
 * Converte um valor passado por par�metro para letras. <br/>
 * <br/>
 * Par�metros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Letras.(Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como par�metro o fracionado 7.4, o retorno ser� o valor 7.4 convertido para letras.
 */
function toString(obj) {
  return isNullable(obj) ? "" : obj.toString();
}
