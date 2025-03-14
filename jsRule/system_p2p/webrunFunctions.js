/*
 * @@hash=857946739
 */

/**
 * Esta função deixa o componente acessível, não importando o modo do formulário.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Utilizando a função em um componente Texto Longo, o componente ficará em modo de edição, permitindo que a<br/>
 * barra de rolagem possa ser movida mesmo que o formulário esteja em modo de navegação.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ComponenteEditavel(componente) {
  $c(componente).div.style.zIndex = 100000
}

/**
 * Função remove a barra do formulário em modal<br/>
 * <br/>
 * <br/>
 * Marcilon Mendonca<br/>
 * Cel. (41) 99243-9091<br/>
 * m.marcilon@yahoo.com<br/>
 * Comunidade EasyCodar
 */
/*
Desenvolvido por: Marcilon Mendonça
Comunidade EasyCodar!
*/

function EasyRemoveDivFormModal() {
 top.document.children[0].children[1].children[0].contentDocument.getElementById("WFRIframeForm"+ebfGetFormID()).children[0].remove();
}

/**
 * Abre uma url em outra janela<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Url que será aberta.<br/>
 * 2. Nome da janela (Caso nulo, ou não exista a janela, será criada uma nova janela).<br/>
 * 3. Propriedade para a abertura da janela. (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. As propriedades devem ser definidas em pares separados por vírgula. Ex: scrollbars=yes,resizable=yes<br/>
 * 2. As propriedades válidas e seus possíveis valores são:<br/>
 *     - toolbar = yes | no<br/>
 *     - location = yes | no<br/>
 *     - status = yes | no<br/>
 *     - menubar = yes | no<br/>
 *     - scrollbars = yes | no<br/>
 *     - resizable = yes | no<br/>
 *     - width = yes | no<br/>
 *     - height = Número inteiro<br/>
 *     - left = Número inteiro<br/>
 *     - top = Número inteiro<br/>
 * 3. Para colocar um caractere & que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &<br/>
 * 4. A URL deve possuir o protocolo "http://" antes do endereço www, caso contrário, será tratato como uma URL relativa.<br/>
 * 5. O nome da janela não deve conter espaço<br/>
 * 6. Para o mobile não é necessário informar o nome da janela, caso seja informada a página será aberta sobre a própria aplicação.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * 1. Url que será aberta<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. As propriedades devem ser definidas em pares separados por vírgula. Ex: scrollbars=yes,resizable=yes<br/>
 * 2. As propriedades válidas e seus possíveis valores são:<br/>
 *     - toolbar = yes | no<br/>
 *     - location = yes | no<br/>
 *     - status = yes | no<br/>
 *     - menubar = yes | no<br/>
 *     - scrollbars = yes | no<br/>
 *     - resizable = yes | no<br/>
 *     - width = yes | no<br/>
 *     - height = Número inteiro<br/>
 *     - left = Número inteiro<br/>
 *     - top = Número inteiro<br/>
 * 3. Para colocar um caractere & que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &<br/>
 * 4. A URL deve possuir o protocolo "http://" antes do endereço www, caso contrário, será tratato como uma URL relativa.<br/>
 * 5. O nome da janela não deve conter espaço<br/>
 * 6. Para o mobile não é necessário informar o nome da janela, caso seja informada a página será aberta sobre a própria aplicação.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * 1. Formulário do Componente a ser atualizado.<br/>
 * 2. Componente a ser atualizado.<br/>
 * 3. Procurar Componente em qualquer tela chamadora ?<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Essa função abre um formulário na seção de acordo o valor informado no segundo parâmetro.<br/>
 *     <br/>
 * Parâmetros:<br/>
 * 1. Nome da Seção (Enviado automaticamente no evento Ao Expandir).<br/>
 * 2. Formulário.<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.
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
 * Essa função abre uma URL na Seção de acordo o valor informado no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Seção (Enviado automaticamente no evento Ao Expandir).<br/>
 * 2. URL (Ex: http://www.softwell.com.br).<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.
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
 * Atualiza o conteúdo da seção especificada<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Seção (Enviado automaticamente no evento Ao Expandir)<br/>
 * 2. Novo Conteúdo (No formato HTML)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfAccordionSetContent (section, content) {
   if (section && content) {   
     section = document.getElementById(section);
     if(section)
       section.innerHTML = content;
  }
}

/**
 * Essa função executa uma ação pré definida.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Ação Pré Definida (Letras) (Ver observação 1)<br/>
 * <br/>
 * Retorno;<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O tipo da ação pré definida de ser uma das listadas a seguir:<br/>
 * "Grupos" - Abrir formulário de Cadastro de Grupos;<br/>
 * "Usuarios" - Abrir formulário de Cadastro de Usuário;<br/>
 * "LOG" - Abrir formulário de LOG;<br/>
 * "AlterarSenha" - Abrir formulário de Alteração de Senha;<br/>
 * "ExecutarScriptSQL" - Abrir formulário de Executar Script SQL;<br/>
 * " RecarregarSistema" - Recarregar sistema atual;<br/>
 * "AlterarUsuario" - Realizar logoff do usuário atual para login com outro usuário;<br/>
 * "Sair" - Logoff do sistema;<br/>
 * "ModoNormal" - Ir para modo Normal;<br/>
 * "ModoGerente" - Ir para modo Gerente;<br/>
 * "ModoProjeto" - Ir para modo Projeto;<br/>
 * "ConfigurarConexoesAdicionais" - Abrir formulário de Conexões Adicionais;<br/>
 * "Incluir" - Entra em modo de inserção no formulário corrente;<br/>
 * "Alterar" - Entra em modo de alteração no formulário corrente;<br/>
 * "Excluir" -Exclui o registro corrente;<br/>
 * "Gravar" - Grava o registro corrente; <br/>
 * "GravarMais" - Grava mais de um registro simultaneamente;<br/>
 * "PrimeiroReg" - Vai para o primeiro registro do formulário corrente;<br/>
 * "AnteriorReg" - Vai para o registro anterior do formulário corrente;<br/>
 * "ProximoReg" - Vai para o próximo registro do formulário corrente;<br/>
 * "UltimoReg" - Vai para o último registro do formulário corrente;<br/>
 * "Cancelar" - Cancela as alterações efetuadas no formulário corrente;
 */
function ebfActionExecute(action) {
  switch (action.trim().toLowerCase()) {
    // Ações do Formulário
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

    // Ações Pre-Definidas
    case "grupos": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormGroup"); break; } // Abrir Formulário de Cadastro de Grupos
    case "usuarios": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormUser"); break; } // Abrir Formulário de Cadastro de Usuário
    case "log": { openFormLog(ebfGetFullSystemID(), '', 'Log', '', 2); break; }
    case "alterarsenha": { IframeTransporter("executeFunction.do?action=executeFunction&sys=" + ebfGetFullSystemID() + "&function=ebfFormOpenFormPassword"); break; } // Abrir Formulário de Alteração de Senha
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
 * Função que cria um novo componente Ação dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (caso não seja definida, a aba não será criada).<br/>
 * 2. Nome do componente.<br/>
 * 3. Posição X.<br/>
 * 4. Posição Y.<br/>
 * 5. Altura do componente.<br/>
 * 6. Largura do componente.<br/>
 * 7. URL Imagem.<br/>
 * 8. URL Imagem Ao Clicar.<br/>
 * 9. URL Imagem Ao Passar o Mouse.<br/>
 * 10. GUID Imagem.<br/>
 * 11. GUID Imagem Ao Clicar.<br/>
 * 12. GUID Imagem Ao Passar o Mouse.<br/>
 * 13. Acessível (0 = Modo Inclusão/Alteração - 1 = Todos os Modos).<br/>
 * 14. Ação Pré Definida (Configurar Conexões Adicionais, Grupos, Usuários, LOG, Alterar Senha, Importação de Relatório, Executar Script SQL, <br/>
 * Recarregar Sistema,Modo Normal,Modo Gerente. Modo Projeto, Alterar Usuário, Sair).<br/>
 * 15. Dica.<br/>
 * 16. Habilitado?<br/>
 * 17. Container.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Nome do Componente.<br/>
 * 2. URL ou Guid da Imagem (Ver observação 1).<br/>
 * 3. Evento (Ver observação 2) (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para informar uma GUID no segundo parâmetro, deve utilizar a galeria de imagens do Maker.<br/>
 * 2. O terceiro parâmetro determina qual evento será executado para alterar a imagem (Ao Clicar/Ao Passar o Mouse). Caso nulo apenas altera a imagem.
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
 * Adiciona um filho ao elemento passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore <br/>
 * 2. Elemento pai<br/>
 * 3. Descrição do filho que será adicionado<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento que foi adicionado como filho. (Variante)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1- Para adicionar um filho com a descrição "Módulo" ao elemento cuja referência está armazenada na variável "Elemento" e assumindo que esse elemento pertence à árvore que está na variável "Árvore", os parâmetros seriam "Árvore", "Elemento", "Módulo". Armazenar o retorno na variável "Filho".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfAddChild(tree,parentElement, description){	
  return tree.addChild(parentElement,description);	
}

/**
 * Associa um evento ao formulário que chama o fluxo<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Evento.<br/>
 * 2. Fluxo que será executado quando o evento ocorrer.<br/>
 * 3. Lista de parâmetros do fluxo.<br/>
 * <br/>
 * Obs:  <br/>
 * 1. Alguns eventos que podem ser passados no 1º parâmetro onclick, onkeypress e onblur. Mais informações em http://www.w3schools.com/jsref/dom_obj_event.asp<br/>
 *  <br/>
 * Retorno: <br/>
 * Não possui.
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
 * Exibe uma mensagem de alerta junto com um botão "Ok"  e o fluxo só continua a ser executado após o usuário clicar<br/>
 * neste botão.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mensagem que será exibida.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Exemplo: 1º Assumindo como parâmetro a mensagem "Maker ALL", junto com este aparecerá um botão de OK.<br/>
 * O fluxo só continuará sendo executado quando o usuário clicar no botão "OK". <br/>
 * <br/>
 * Observações:<br/>
 * 1. Maker Mobile: No iOS, o fluxo continuará sua execução independente do usuário clicar no botão OK.
 */
function ebfAlertMessage(msg) {
  alert(msg);
}

/**
 * Traz a aplicação para primeiro plano. <br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O sistema operacional iOS não permite que o app seja colocado em primeiro plano sem a interação do usuário.
 */
function ebfAppBringToFront(){
 alert('Função disponível apenas no MakerMobile');
}

/**
 * Essa função verifica se o aplicativo está em segundo plano.<br/>
 * <br/>
 * Caso verdadeiro, a aplicação está em segundo plano, caso falso, a aplicação está em execução.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Lógico
 */
function stoneSDKCreateTransaction(){
 alert('Função disponível apenas no MakerMobile');
}

/**
 * Junta vários itens de texto em apenas um item.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor que terá outros valores adicionados<br/>
 * 2. Valor que será concatenado junto ao texto do primeiro parâmetro.<br/>
 * ...<br/>
 * N. Valor n a ser adicionado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor concatenado.<br/>
 * <br/>
 * Observação:<br/>
 * Esta função tem um melhor desempenho em relação a função "Concatenação".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função é utilizada para fazer o arredondamento de valores por casas decimais.<br/>
 * O número será arredondado para cima ou para baixo a depender do valor das casas decimais.<br/>
 * Caso o valor das casas decimais seja menor ou igual a 0,5 o número será arredondado para baixo, caso contrário, para cima.<br/>
 * Informando o terceiro parâmetro como verdadeiro, o arredondamento seguirá as normas da ABNT NBR 5891, cujo as regras podem ser encontradas no site oficial.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Número a ser arredondado.<br/>
 * 2. Quantidade de casas decimais, para a qual o número será arredondado.<br/>
 * 3. Seguir padrão ABTN? (Lógico)(Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o número fracionado passado por parâmetro com as casas decimais arredondadas. (Fracionado)<br/>
 * <br/>
 * Exemplo(este exemplo não se aplica para as normas ABNT):<br/>
 * 1. Assumindo como o 1° parâmetro sendo: 9,5782 e o 2° parâmetro sendo: 2 (Inteiro) o retorno será 9.58.<br/>
 * 2. Assumindo como o 1° parâmetro sendo: 9,5566 e o 2° parâmetro sendo: 2 (Inteiro) o retorno será 9.56.<br/>
 * <br/>
 * Exemplo(normas ABNT):<br/>
 * 1. Assumindo como o 1° parâmetro sendo: 4,550, o 2° parâmetro sendo: 1 (Inteiro) e o 3º parâmetro sendo: Verdadeiro (Lógico) o retorno será 4.6.<br/>
 * 2. Assumindo como o 1° parâmetro sendo: 4,850, o 2° parâmetro sendo: 1 (Inteiro) e o 3º parâmetro sendo: Verdadeiro (Lógico) o retorno será 4.8.<br/>
 * <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Converte um Texto Normal para um Texto Binário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto normal em letras. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto Binário.(letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro o texto "ALL", o retorno será o texto binário "010000010100110001001100".
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
 * Associa uma regra ao clicar no elemento passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore <br/>
 * 2. Elemento<br/>
 * 3. Nome da regra que será associada<br/>
 * 4. Lista de parâmetros que serão enviados para a regra.<br/>
 * <br/>
 * Observações:<br/>
 * Os parâmetros deverão ser passados por uma lista de valores.<br/>
 * Essa função só pode chamar regras clientes.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Supondo que a regra "Imprimir"  mostra na tela a soma dos números passados por parâmetro e assumindo os <br/>
 * parâmetros como Árvore, Elemento, "Imprimir", [5,6], será mostrado na tela o valor 11.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfAssociateRuletoElement(tree, element, ruleName, ruleParams){
  tree.associateRuleToElement(element, ruleName, ruleParams);	
}

/**
 * Esta função associa o evento a aba 'Quando clicar na aba' definida como parâmetro<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da aba (Letras);<br/>
 * 2. Nome da regra (Letras ou Fluxo). A regra deve estar na camada cliente;<br/>
 * 3. Lista contendo os parâmetros da regra (Variante). Ver observação 2.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Esta função deve ser utilizada no evento "Ao Entrar" do formulário;<br/>
 * 2. Mesmo que a regra executada não possua parâmetros, é necessário criar uma lista vazia;<br/>
 * 3. O não preenchimento do 3° parâmetro inutilizará a função;<br/>
 * 4. Ao associar o evento À aba localizar, esta não carregará os dados padrão, pois o mesmo será sobrescrito pelo evento associado
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
 * Essa função associa(juntar ou unir) um componente a uma moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente que deseja associar.<br/>
 * 2. Nome da moldura que o componente será associado.<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função executa uma regra servidor de forma assíncrona.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Regra a ser executada.<br/>
 * 2. Lista de parâmetros da regra.<br/>
 * 3. Fluxo de sucesso.<br/>
 * 4. Lista de parâmetros do fluxo de sucesso.<br/>
 * 5. Fluxo de erro.<br/>
 * 6. Lista de parâmetro do fluxo de erro.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O fluxo definido no terceiro parâmetro receberá automaticamente como parâmetro o retorno da regra executada caso<br/>
 * a mesma retorne. O primeiro parâmetro da regra deve ser reservado.<br/>
 * 2. O fluxo definido no quinto parâmetro receberá automaticamente como parâmetro o detalhes do erro. O primeiro parâmetro da regra deve ser reservado.
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
    // Cria a requisição.
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
 * Envia uma mensagem para o servidor Firebase solicitando um código de validação. A mensagem com o código será enviada para o número informado no primeiro parâmetro.<br/>
 * <br/>
 * Uma caixa/input será criada para que o usuário informe o código. Caso esteja OK, será executado o fluxo de sucesso, caso contrário, o fluxo de erro será executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Número de Telefone (No formato: + CÓDIGO DO PAÍS + DDD + Nº do Telefone). Ex.: +557121083800<br/>
 * 2. Fluxo que será executado caso a operação seja realizado com sucesso<br/>
 * 3. Parâmetros adicionais do fluxo de sucesso<br/>
 * 4. Fluxo que será executado caso haja algum erro durante a operação<br/>
 * 5. Parâmetros adicionais do fluxo de erro<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Antes de utilizar essa função, é necessário configurar o projeto no Firebase  conforme instruções nos links<br/>
 * http://suporte.softwell.com.br/maker/manual_3/pt/makermobile/autenticacao_via_sms.html<br/>
 * http://suporte.softwell.com.br/maker/manual_3/pt/makermobile/arquivo_firebase.html
 */
function ebfAuthSMS(phone, onSuccess, onSuccessParams, onFail, onFailParams){
  console.log("Disponível apenas no MakerMobile");
}

/**
 * Autenticar Usuário<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Usuário (Letras)<br/>
 * 2. Senha (Letras)<br/>
 * 3. Redirecionar para o formulário principal? (Apenas na Camada Servidor, Lógico)<br/>
 * 4. Conexão-Ponte (DataConnection, Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * True quando a autenticação for realizada com sucesso.  (Ver observação 4).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso a função seja utilizada na camada servidor, o sistema não pode possuir o evento "Ao Autenticar" definido. Caso <br/>
 * o tenha, deve-se utilizar esta função na camada cliente.<br/>
 * 2. O parâmetro de redirecionamento apenas tem efeito na camada servidor. Na camada cliente, sempre será <br/>
 * redirecionado para o formulário principal.<br/>
 * 3. A conexão ponte pode ser obtida através da função "Obter Lista de Conexões-Ponte". Este parâmetro serve para<br/>
 * definir qual a ENTIDADE que será utilizada para acessar o sistema.<br/>
 * 4. O retorno da função só poderá ser obtido quando o terceiro parâmetro da função for definido como falso e estiver na camada servidor, visto que, caso verdadeiro, ocorrerá o redirecionamento automático da página.
 */
function ebfAuthUser(user, password, redirect, dataConnection) {
  var url = "logon.do?sys=" + sysCode + "&user=" + URLEncode(user) + "&password=" + URLEncode(password.trim());  
  if (dataConnection && dataConnection != "undefined") {
    url += "&dataConnection=" + URLEncode(dataConnection);  
  }
  IframeTransporter(url);
}

/**
 * Retorna o valor de um componente contido em um formulário aberto numa moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a moldura.<br/>
 * 2. Nome do componente moldura.<br/>
 * 3. Formulário que será aberto na moldura.<br/>
 * 4. Componente que será obtido o valor.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do componente que se encontra na moldura. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Elemento do Modal (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfBootstrapCloseModal(modal) {
  bootstrapCloseModal(modal);
}

/**
 * Essa função cria um modal do Bootstrap.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Título do Modal (Letras, Opcional)<br/>
 * 2. Fechável? (Lógico, Opcional)<br/>
 * 3. Conteúdo do Corpo (Letras, Opcional)<br/>
 * 4. Conteúdo do Rodapé (Letras, Opcional)<br/>
 * 5. Atributos do Modal (Variante, Opcional)<br/>
 * 6. Elemento que receberá o Modal criado (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com os elementos (Variante): Modal (1), Cabeçalho (2), Corpo (3) e Rodapé (4)
 */
function ebfBootstrapCreateModal(title, closeable, bodyContent, footerContent, attributes, elementAtt) {
  return bootstrapCreateModal(title, closeable, bodyContent, footerContent, attributes, elementAtt);
}

/**
 * Função que cria um novo componente Botão dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (Caso não seja definida, a aba não será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descrição do Componente<br/>
 * 7. Imagem (A mesma deve estar no local Skins\Default)<br/>
 * 8. ID do Componente (identificador do componente, ex: MakerButton1)<br/>
 * 9. Container<br/>
 * 10. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Esta função importa uma folha de estilo e anexa ao formulário. <br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Conteúdo da folha de estilo no padrão CSS. (Letras)<br/>
 * 2. ID para o CSS a ser importado (Letras, Opcional)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
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
 * Essa função decrementa um mês na data atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Não possui.
 */
function ebfCalendarDecMonth (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.prevMonth();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa função decrementa um ano na data atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Não possui.
 */
function ebfCalendarDecYear (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.prevYear();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa função obtém o mês corrente do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente.<br/>
 * 2. Por extenso?<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Mês corrente (Variante).
 */
function ebfCalendarGetMonth (comp, monthName) {
  let rComp = $c(comp);  
  if (rComp)  
    return rComp.getMonth(monthName);    
  interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa função obtém a ano corrente do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
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
 * Essa função navega o componente para o mês e ano passados por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * 2. Mês<br/>
 * 3. Ano<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Essa função incrementa um mês na data atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Não possui.
 */
function ebfCalendarIncMonth (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.nextMonth();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa função incrementa um Ano na data atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Não possui.
 */
function ebfCalendarIncYear (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.nextYear();
  else      
    interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Essa função modifica o componente para a data atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfCalendarToday (comp) {
  let rComp = $c(comp);  
  if (rComp)  
    rComp.goToday();
  else   
   interactionError(getLocaleMessage("ERROR.COMPONENT_FIELD_NOT_FOUND", comp));
}

/**
 * Cria uma referência para o "Objeto Área de Desenho" e a retorna.<br/>
 * Este objeto é necessário para que seja utilizada as demais funções da categoria Desenho.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura que será utilizada como referência para a criação dos desenhos.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referência do objeto. (Variante)
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
 * Desenha um círculo na área de desenho passada como parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Área de Desenho (Variante)<br/>
 * 2. Coordenada da posição X.<br/>
 * 3. Coordenada da posição Y.<br/>
 * 4. Raio<br/>
 * 5. Valor lógico que informa se o círculo será preenchido<br/>
 * 6. Cor de preechimento<br/>
 * 7. Valor lógico que informa se o círculo será delineado<br/>
 * 8. Cor da Borda.<br/>
 * 9. Espessura da Borda<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Desenha uma elipse na área de desenho passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Área de Desenho (Variante)<br/>
 * 2. Coordenada X inicial.<br/>
 * 3. Coordenada Y inicial.<br/>
 * 4. Valor de A<br/>
 * 5. Valor de B<br/>
 * 6. Valor lógico que informa se a elipse será preenchida.<br/>
 * 7. Cor de preenchimento.<br/>
 * 8. Valor lógico que informa se a elipse será delineada.<br/>
 * 9. Cor da Borda.<br/>
 * 10. Espessura da borda.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Desenha uma linha na área de desenho passada como parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Objeto Área de Desenho;<br/>
 * 2. Coordenada X inicial;<br/>
 * 3. Coordenada Y inicial;<br/>
 * 4. Coordenada X final;<br/>
 * 5. Coordenada Y final;<br/>
 * 6. Cor da linha;<br/>
 * 7. Espessura da linha.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Desenha um retângulo na área de desenho passada como parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Área de Desenho (Variante)<br/>
 * 2. Coordenada X inicial.<br/>
 * 3. Coordenada Y inicial.<br/>
 * 4. Largura<br/>
 * 5. Altura<br/>
 * 6. Valor lógico que informa se o retângulo será preenchido.<br/>
 * 7. Cor de preenchimento.<br/>
 * 8. Valor lógico que informa se o retângulo será delineado<br/>
 * 9. Cor da borda.<br/>
 * 10. Espessura da borda<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Desenha um losango na área de desenho passada como parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Área de Desenho;<br/>
 * 2. Coordenada X inicial;<br/>
 * 3. Coordenada Y inicial;<br/>
 * 4. Dimensão da diagonal 1;<br/>
 * 5. Dimensão da diagonal 2;<br/>
 * 6. Valor lógico que informa se o losango será preenchido;<br/>
 * 7. Cor de preenchimento;<br/>
 * 8. Valor lógico que informa se o losango será delineado;<br/>
 * 9. Cor da Borda;<br/>
 * 10. Espessura da borda.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Remove uma referência para área de desenho<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Objeto (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfCanvasRemove(canvas) {
  if (canvas){   
   var context = canvas.getContext("2d");    
   context.clearRect(0,0, canvas.width, canvas.height);
  }
}

/**
 * Altera o valor de um componente que esteja em outro formulário que não o corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Constante formulário ou GUID.<br/>
 * 2. Componente.<br/>
 * 3. Novo Valor.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1º parâmetro o formulário "FORMULARIO1", 2º parâmetro o componente "COMPONENTE" e <br/>
 * como 3º parâmetro o valor "CONTEÚDO", o componente "COMPONENTE" receberá o valor "CONTEÚDO".<br/>
 * <br/>
 * Observações: <br/>
 * 1. Esta função não altera o valor do componente Lista Dinâmica. Para isso, utilize a função: Alterar Valor da Lista <br/>
 * Dinâmica.<br/>
 * 2. É necessário que o outro formulário esteja aberto, para que a alteração venha a ser executada com sucesso.
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
 * Esta função altera o tamanho da janela do formulário onde o fluxo está sendo executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Largura;<br/>
 * 2. Altura.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O Internet Explorer não permite que formulários (pop-up) modais sejam redimensionados.
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
 * Parâmetro:<br/>
 * 1. Nome do Componente (Componente)<br/>
 * 2. Tipo do Cursor (default, pointer, etc) (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observações:<br/>
 * 1 - Pode-se utilizar no evento ao entrar do formulário, para modificar o cursor.
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
 * Muda a descrição do componente escolhido no primeiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * 2. Nova Descrição.<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfChangeDescription(c, d) {
  $c(c).setDescription(d);  
}

/**
 * Esta função altera o título do formulário corrente.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Novo título que o formulário receberá. (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função não tem suporte para formulário aberto no componente Aba e/ou Moldura.
 */
function ebfChangeFormTitle(newTitle){
  try {
    if(isPopup){    
      top.document.title = newTitle;
    } else{
      var div = "WFRIframeForm" + ebfGetFormID();
      // Obtenção do elemento pai.
      let parent = mainform.parent.parent.document.getElementById(div).children[0].children[0];
      // Verificação se o formulário possui definição de ícone.
      div = parent.childElementCount > 1 ? parent.children[1] : parent.children[0];
      div.innerText = newTitle;
    }    
  } catch (e) {
    console.error("Função: 'Alterar Título do Formulário' não é suportado no componente Aba ou Moldura.");    
    return;
  }
}

/**
 * Altera a imagem do componente botão passado no primeiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente;<br/>
 * 2. Caminho da imagem.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * A imagem deve estar no contexto do Webrun ou URL externa ex.: http://suporte.softwell.com.br/logo.jpg
 */
function ebfChangeImageButton(component, path){
       $c(component).setImage(path);        
}

/**
 * Altera o conteúdo da barra de status.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Conteúdo para a barra de status<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Só funciona no evento "Ao Entrar".<br/>
 * 2. No Browser Firefox é preciso marcar a opção "MODIFICAR TEXTO NA BARRA DE <br/>
 * STATUS" no caminho abaixo:<br/>
 *   I.   FERRAMENTAS<br/>
 *   II.  OPÇÕES<br/>
 *   III. CONTEÚDO<br/>
 *   IV.  BOTÃO AVANÇADO<br/>
 * <br/>
 * 3. No Browser Internet Explorer verifique se está habilitado o recurso de atualizações da barra de status.<br/>
 * Caminho:<br/>
 *   I. FERRAMENTAS<br/>
 *   II. OPÇÕES<br/>
 *   III.  ABA SEGURANÇA<br/>
 *   IV.  NÍVEL PERSONALIZADO<br/>
 *   V.  "PERMITIR ATUALIZAÇÕES DA BARRA DE STATUS VIA SCRIPT"
 */
function ebfChangeWindowStatusBar(text){
  // Caso o texto passado como parâmetro seja nulo, a barra de status não é modificada
  if (text == null){
    return;
  } else {
    $mainframe().sbtext = text;
  }
}

/**
 * Executa uma regra em um determinado formulário passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Constante formulário ou GUID.<br/>
 * 2. Fluxo.<br/>
 * 3. Lista de Parâmetros (Opcional).<br/>
 * 4. Fluxo de Callback (Opcional)(Ver observação 1).<br/>
 * 5. Lista de Parâmetros (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O fluxo de callback receberá automaticamente o valor de retorno do fluxo executado, caso o mesmo retorne.<br/>
 * 2. Essa função não executa um fluxo no formulário corrente.
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
 * Obtém o valor de um componente em outro formulário de forma assíncrona, executando o fluxo de callback após a sua execução.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Constante formulário ou GUID.<br/>
 * 2. Componente.<br/>
 * 3. Fluxo de Callback<br/>
 * 4. Lista de Parâmetros (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Para que essa função funcione da forma esperada, o formulário informado no primeiro parâmetro precisa estar aberto.<br/>
 * 2. O fluxo definido como callback receberá automaticamente no primeiro parâmetro o valor do componente.
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
 * Esta função localiza, dentro do primeiro parâmetro, o conteúdo que está na posição passada no 2º parâmetro e o retorna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto onde será feita a pesquisa<br/>
 * 2.  Posição da letra.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna qual a letra que está na posição que foi passado por parâmetro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os parâmetros como "Maker Flow" (Letras) e 4 (Inteiro) , o retorno seria "e".<br/>
 * 2. Assumindo os parâmetros como "Hoje é Segunda-Feira" (Letras) e "8" (Inteiro) , o retorno seria "S" .<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Passado um número, a função obtém e retorna o símbolo, em ASCII, do número passado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Número que se deseja obter o valor da tabela ASCII.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o símbolo correspondente na tabela ASCII do número passado como parâmetro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como 35 (Inteiro), o retorno seria "#".<br/>
 * 2. Assumindo os parâmetros como 360 (Inteiro), o retorno seria "?".<br/>
 * 3. Assumindo os parâmetros como 166 (Inteiro), o retorno seria "|".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfCharacter(asciiCode) {
  var res = String.fromCharCode(asciiCode);
  return res; 
}

/**
 * Fecha a conversa ativa no chat.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfChatCloseActiveConversation(chat) {
    var chatComponent = $c(chat);
    if (chatComponent && chatComponent.activeContainer) {
        chatComponent.activeContainer.setActive(false);
        chatComponent.activeContainer = null;
    }
}

/**
 * Remove o usuário logado de um grupo ao qual ele faz parte (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função não irá fazer nada.<br/>
 * 3. Alterações em grupos só serão feitas se o chat estiver com a propriedade "Permitir Criação de Grupos" habilitada.
 */
function ebfChatExitGroup(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupExit();
    }
}

/**
 * Exporta uma conversa do usuário logado com outro usuário/grupo do chat.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário/Grupo (Inteiro).<br/>
 * 3. ID do 2º parâmetro é um grupo? (Lógico).<br/>
 * 4. Formato de Exportação (pode ser: PDF) (Letras).<br/>
 * 5. Ordem de Exportação das Mensagens (0: antigas para novas, 1: novas para antigas) (Inteiro).<br/>
 * 6. Layout da página (de 1 a 6, onde 1 é A1 e 6 é A6) (Inteiro).<br/>
 * 7. Rotacionar Página? (Lógico).<br/>
 * 8. Estilo da Tabela (0: simples, 1: escuro) (Inteiro).<br/>
 * 9. Bordas na Tabela? (Lógico).<br/>
 * 10. Data Inicial (Data).<br/>
 * 11. Data Final (Data).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. As datas nos 10º e 11º parâmetros podem ser nulas. Se a data inicial e a data final forem nulas, todo o histórico será exportado. Se somente a data final for nula, todas as mensagens da data inicial até o final serão exportadas.<br/>
 * 2. Após o processamento, o download da conversa exportada será iniciado automaticamente.
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
 * Obtém o nome de um grupo do chat (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do grupo (Letras).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função retornará um texto vazio.<br/>
 * 3. O resultado dessa função pode não refletir o nome do grupo em tempo real no banco de dados. Se a cache do chat estiver desatualizada, ele irá apresentar diferenças. Para isso é possível utilizar a função "Chat - Atualizar Componente" para atualizar a cache do chat.
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
 * Obtém a lista de usuários de um grupo (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Lista contendo os IDs usuários no grupo (Lista).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função retornará uma lista vazia.
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
 * Obtém o total de mensagens não lidas (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Total de mensagens não lidas entre o usuário logado e o usuário especificado no 2º parâmetro ou com o chat inteiro (Inteiro).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat.<br/>
 * 2. Se nenhum valor for especificado no 2º parâmetro, a função irá retornar o total de mensagens não lidas para o chat inteiro.<br/>
 * 3. Quando o 2º parâmetro for especificado e o usuário não estiver na lista do chat, a função irá retornar 0.
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
 * Obtém o nome de um usuário do chat (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do usuário (Letras).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o usuário não estiver na lista do chat especificado, a função retornará um texto vazio.<br/>
 * 3. O resultado dessa função pode não refletir o nome do usuário em tempo real no banco de dados. Se a cache do chat estiver desatualizada, ele irá apresentar diferenças. Para isso é possível utilizar a função "Chat - Atualizar Componente" para atualizar a cache do chat.
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
 * Adiciona usuários a um grupo (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. Lista contendo os IDs dos Usuários (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função não irá fazer nada.<br/>
 * 3. Alterações em grupos só serão feitas se o chat estiver com a propriedade "Permitir Criação de Grupos" habilitada.<br/>
 * 4. O usuário logado deve ser administrador do grupo especificado para poder adicionar/remover usuários.
 */
function ebfChatGroupAddUsers(chat, groupId, users) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupAddUsers(users);
    }
}

/**
 * Remove usuários de um grupo (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. Lista contendo os IDs dos Usuários (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função não irá fazer nada.<br/>
 * 3. Alterações em grupos só serão feitas se o chat estiver com a propriedade "Permitir Criação de Grupos" habilitada.<br/>
 * 4. O usuário logado deve ser administrador do grupo especificado para poder adicionar/remover usuários.
 */
function ebfChatGroupRemoveUsers(chat, groupId, users) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.groupRemoveUsers(users);
    }
}

/**
 * Verifica se um usuário é administrador de um grupo (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * 3. ID do Usuário (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor lógico indicando se o usuário é administrador do grupo (Lógico).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o grupo não estiver na lista do chat especificado, a função retornará falso.
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
 * Verifica se um usuário está online no chat (em cache).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor lógico indicando se o usuário está online (Lógico).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função utiliza a cache do componente chat. <br/>
 * 2. Se o usuário não estiver na lista do chat especificado, a função irá retornar falso.
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
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Grupo (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ID do Grupo definido no 2º parâmetro deve ser obtido através da tabela responsável por armazenar as definições do grupo.
 */
function ebfChatOpenGroupConversation(chat, groupId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatGroup = chatComponent.getGroupById(groupId);
        if (chatGroup) chatGroup.setActive(true);
    }
}

/**
 * Abre a conversa com um usuário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ID do Usuário definido no 2º parâmetro deve ser obtido através da tabela responsável por armazenar as definições do usuário.
 */
function ebfChatOpenUserConversation(chat, userId) {
    var chatComponent = $c(chat);
    if (chatComponent) {
        var chatUser = chatComponent.getUserById(userId);
        if (chatUser) chatUser.setActive(true);
    }
}

/**
 * Envia uma mensagem para um usuário/grupo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * 2. ID do Usuário/Grupo (Inteiro).<br/>
 * 3. ID do 2º parâmetro é um grupo? (Lógico).<br/>
 * 4. Mensagem (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Se a mensagem estiver vazia ou somente preenchida com espaços, a função não irá efetuar a operação de envio da mensagem.
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
 * Atualiza os dados em cache do componente (lista de grupos, usuários, etc).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Chat (Componente).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfChatUpdateComponent(chat) {
    var chatComponent = $c(chat);
    if (chatComponent) chatComponent.updateData(true);
}

/**
 * Função que cria um novo objeto CheckBox dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (caso não seja definida, a aba não será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descrição do Componente.<br/>
 * 7. Valor do Componente.<br/>
 * 8. Valor Marcado.<br/>
 * 9. Valor Desmarcado.<br/>
 * 10. ID do Componente.<br/>
 * 11. Container.<br/>
 * 12. Estilo CSS.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Converte o caractere passado por parâmetro para código ASCII.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Caractere do qual se deseja obter o código ASCII.<br/>
 * <br/>
 * Retorno:<br/>
 * Código ASCII do caractere passado por parâmetro.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o parâmetro como "d" o retorno será  100.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A Tabela ASCII (American Standard Code for Information Interchange) é usada pela maior parte das industrias de computadores para a troca de informações. Cada caractere é representado por um código de 8 bits(um byte).
 */
function ebfChrToAscii(achar){
  if (isNullable(achar)) {
    return null;
  } else {
    return (achar.charCodeAt(0));
  }
}

/**
 * Essa função interrompe a execução de um fluxo agendado de acordo o ID passado por parâmetro.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. ID do fluxo agendado (retorno da função Agendar Execução do Fluxo);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função interrompe apenas fluxos que foram agendados na camada cliente.
 */
function ebfClearTimeOut(ID){
 if(typeof ID === 'number'){
   window.clearTimeout(ID); 
 }
}

/**
 * Essa função é utilizada para fechar o formulário que chama o fluxo.<br/>
 * <br/>
 * Parâmetros: <br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Quando essa função for chamada em um formulário, o mesmo será fechado.<br/>
 * <br/>
 * Observações: <br/>
 * 1. Não é necessário passar o nome do formulário. O formulário sempre vai ser o que chama o fluxo.<br/>
 * 2. Caso o formulário seja a janela principal(propriedade "Formulário Principal" do Maker), o mesmo não poderá ser <br/>
 * fechado através desta função.
 */
function ebfCloseForm() {
    $mainform().d.n.actExit();
}

/**
 * Essa função remove o vinculo de parentesco entre os formulários e relatório.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Ela pode ser usada no evento ao entrar do formulário pai. Uma vez feito isso, os filhos desse formulário ficarão abertos depois que o formulário pai for fechado ou atualizado.
 */
function ebfCloseFormWithoutChildren() {
  closeChildrenForms = false;
}

/**
 * Fecha todos os fomulários que foram utilizados para abrir o formulário atual(exceto o primeiro) e ele mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Não fecha o formulário principal.
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
 * Fecha a janela que abriu a janela corrente. (Formulário pai)<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Cria um novo componente Lista de forma dinâmica.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (Caso não seja definida, a aba será criada).<br/>
 * 2. Posição X no formulário.<br/>
 * 3. Posição Y no formulário.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descrição do Componente.<br/>
 * 7. Lista de valores. (Campo Chave).<br/>
 * 8. Lista de descrições a serem exibidas. (Campo Lista).<br/>
 * 9. ID do Componente.<br/>
 * 10. Container.<br/>
 * 11. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * As listas podem conter um ou mais elementos, e irão se referenciar uma com a outra de acordo com a posição delas na lista.
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
 * Essa função remove todos os elementos do componente Lista. Passando como parâmetro a componente Lista.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente Lista<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno será os elementos da Lista apagadas.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O retorno será a lista Carros com os elementos removidos.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfComboClean(obj) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.clean) {
    obj.clean();
  }
}

/**
 * Essa função Insere um elemento no componente Lista. Passando como parâmetro o componente Lista, o valor chave (que será o valor à ser salvo no banco) e o valor que representará o valor chave.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente Lista<br/>
 * 2. Valor Chave (Letras)<br/>
 * 3. Valor que representará a chave (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno (variante) somente para a camada Servidor, será o valor inserido no componente Lista <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O campo chave deve obrigatoriamente ser do tipo Letras. Caso contrário, a lista não irá exibir os valores.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O 2º parâmetro sendo 3 e o 3º parâmetro sendo "Quebrado". O retorno será a lista Carros contendo os elementos 1 - Usado, 2 - Novo e 3 - Quebrado.
 */
function ebfComboPut(obj, key, value) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.add) {
    obj.add(key, value);
  }
}

/**
 * Função que remove um item do componente Lista tomando a chave como referência.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário;<br/>
 * 2. Nome do Componente;<br/>
 * 3. Chave(Letras)(Ver observação 1);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A chave deve ser do tipo Letras.
 */
function ebfComboRemoveByKey(form, obj, key) {
  obj = controller.verifyComponent(obj);
  if (obj && obj.removeByKey) {
    obj.removeByKey(key);
  }
}

/**
 * Esta função associa um evento no padrão W3C ( DOM Events Specification ) ao componente.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente cujo evento será associado.<br/>
 * 2. Descrição do evento (ver abaixo alguns eventos utilizados pelo Webrun).<br/>
 * 3. Fluxo que será executado quando o evento ocorrer.<br/>
 * 4. Lista com os parâmetros a serem passados para o fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * Esta função não possui retorno<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o componente passado no primeiro parâmetro seja nulo, o evento será associado ao formulário.<br/>
 * 2. O fluxo que será associado ao componente deve obrigatoriamente ser do tipo cliente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usuário passar o mouse sobre um componente Texto chamado "MakerLabel1", a função ficaria:<br/>
 * 1º Parâmetro: MakerLabel1 (Componente);<br/>
 * 2º Parâmetro: onmouseover (Letras);<br/>
 * 3º Parâmetro: Fluxo Observador de eventos (Letras);<br/>
 * 4º Parâmetro: nulo;<br/>
 * <br/>
 * 2. Alguns eventos utilizados pelo Webrun no padrão W3C (Dom Events):<br/>
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
  // Testa se o objeto é nulo e associa o evento ao formulário
  var component = controller.verifyComponent(componentName);
  
  // Obtém a DIV onde o evento será associado
  var componentDiv;
  if(component == null) { 
    componentDiv = $mainform().d;
  } else {
    componentDiv = component.div;
  }
  
  // Testa se o parâmetro do fluxo a ser executado é nulo
  if (typeof(ruleParams) == 'undefined' || ruleParams == null) {
    ruleParams = '';
  }
  
  // Remove o 'on' do evento
  var startsWithOn = /^on(.+)/;
  var found = eventName.match(startsWithOn);
  if (found != null && found != -1) {
    eventName = RegExp.$1;
  }
  
  // Associa o evento ao componente e define a função num array 
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
    // Necessário, pois o componente pode ainda não ter evento associado o que o deixaria desabilitado
    component.setEnabled(true);
  }
}

/**
 * Esta função remove um evento no padrão W3C ( DOM Events Specification ) associado ao componente através da <br/>
 * função Associar Evento ao componente.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente cujo evento foi associado (nulo caso o evento seja o formulário).<br/>
 * 2. Descrição do evento.<br/>
 * 3. Fluxo que é executado quando o evento ocorre.<br/>
 * 4. Lista com os parâmetros que são passados ao fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfComponentEventRemove(componentName, eventName) {  
  // Testa se o objeto é nulo e associa o evento ao formulário
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
 * Esta função recebe o nome de um componente e retorna verdadeiro ou falso caso o mesmo exista no formulário onde o fluxo foi chamado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente (definir o formulário de trabalho no parâmetro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * <br/>
 * Retorno:(Lógico)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Formulário que contém o componente<br/>
 * 2. Componente a ser verificado<br/>
 * <br/>
 * Retorno:(Lógico)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfComponentIsEnabled(formGUID, componentName) {
  return $c(componentName, formGUID).getEnabled();
}

/**
 * Altera a máscara de um componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém o componente<br/>
 * 2. Nome do componente<br/>
 * 3. Nova máscara<br/>
 * 4. Tipo da máscara (Letras, Número ou Data)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Observe que os valores no quarto parâmetros devem ser exatamente como estão descritos. Acentuação e caixas altas devem ser seguidas.
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
    } else if (type == 'Número') {
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
 * Junta vários itens de texto em apenas um item.<br/>
 * <br/>
 * Parâmetros:<br/>
 * n. Valor a ser concatenado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os valores concatenados (Letras).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os parâmetros como 'Maker'(Letras) e 'Flow'(Letras), o retorno seria 'Maker Flow'.<br/>
 * 2.Assumindo os parâmetros como 'Maker'(Letras) e 3(inteiro), o retorno seria 'Maker3'.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Completa o conteúdo do terceiro parâmetro à esquerda do primeiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto.<br/>
 * 2. Quantidade de caracteres que o retorno deve ter.<br/>
 * 3. Conteúdo que será concatenado à esquerda do primeiro parâmetro (1 caractere).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o primeiro parâmetro concatenado à esquerda com o conteúdo do terceiro parâmetro até a quantidade de caracteres for atingida.<br/>
 * <br/>
 * Exemplo:<br/>
 * Assumindo como parâmetros:<br/>
 * 1ºParâmetro: Maker <br/>
 * 2ºParâmetro: 10 <br/>
 * 3ºParâmetro: r<br/>
 * O retorno seria: rrrrrMaker<br/>
 * <br/>
 * Observação:<br/>
 * 1. O terceiro parâmetro deve ter apenas 1 caractere (Somente servidor).
 */
function ebfConcatLeft (value, size, pad) {
  if (value && value != null && value.length > 0)   
    return value.padStart(size, pad); 
}

/**
 * Completa o conteúdo do terceiro parâmetro à direita do primeiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto.<br/>
 * 2. Quantidade de caracteres que o retorno deve ter.<br/>
 * 3. Conteúdo que será concatenado à esquerda do primeiro parâmetro (1 caractere). <br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o primeiro parâmetro concatenado à direita com o conteúdo do terceiro parâmetro até a quantidade de caracteres for atingida.<br/>
 * <br/>
 * Exemplo:<br/>
 * Assumindo como parâmetros:<br/>
 * 1º Parâmetro: Maker <br/>
 * 2º Parâmetro: 10 <br/>
 * 3º Parâmetro: r<br/>
 * O retorno seria: Makerrrrrr<br/>
 * <br/>
 * Observação:<br/>
 * 1. O terceiro parâmetro deve ter apenas 1 caractere.
 */
function ebfConcatRight (value, size, pad) {
  if (value && value !== null && value.length > 0) 
    return value.padEnd(size, pad);  
}

/**
 * É passado um parâmetro que será um texto, onde esse será confirmado ou negado conforme a escolha do usuário.<br/>
 * Essa função abre uma caixa com opções "Ok" ou "Cancel".<br/>
 * Ao clicar em "Ok" usuário confirmará uma operação retornando verdadeiro,  ou cancelará a mesma retornando falso.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto que servirá para interagir com o usuário.<br/>
 * <br/>
 * Retorno:<br/>
 * Se o usuário clicar em "OK" retorna verdadeiro (Lógico), se clicar em "Cancel", retorna falso. (Lógico)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Passando como parâmetro "Confirmar operação?", o resultado será uma caixa de diálogo com os botões "OK" e "Cancel". Se o usuário clicar "Ok" o retorno será verdadeiro, caso contrário, será falso.
 */
function ebfConfirm (src) {
  return window.confirm(src);
}

/**
 * Retorna o tipo de conexão usada para acesso a internet pelo dispositivo móvel.<br/>
 * <br/>
 * Retorno:<br/>
 *  Tipo da conexão.<br/>
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
 * Chama um Webservice (são componentes que permitem às aplicações enviar e receber dados em formato XML) para aplicações em dispositivos móveis.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL do Web Service (possibilita conexão com https)<br/>
 * 2. Parâmetro de entrada do Web Service<br/>
 * 3. Tipo de Conteúdo (Padrão: JSON)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorno do Webservice (Letras)
 */
function ebfConsumeWsSsl(urlPost, postData, contentType){

}

/**
 * Função que cria um novo componente Container dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (caso não seja definida, a aba será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descrição do componente<br/>
 * 7. Nome do componente<br/>
 * 8. Estilo CSS<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Função que abre um formulário no Container. O Container pode ser uma Moldura, uma DIV existente na tela ou o componente Container.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Referência do Container<br/>
 * 3. Formulário que será aberto no Container<br/>
 * 4. Texto (Letras) indicando o filtro (Opcional)<br/>
 * 5. Modo de Abertura (Modos de Abertura: 1 - Inclusão, 2 - Edição . (Mobile: 1: Inclusão, 2: Edição, -1: Navegação, 3: <br/>
 * - Exclusão).<br/>
 * 6. Barra de Rolagem?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1º parâmetro o formulário "Form", 2º parâmetro o container (presente em "Form") "Moldura", 3º parâmetro o formulário "Form Moldura" e como 6º parâmetro "True", será aberto no Container "Moldura" o formulário "Form Moldura" com barra de rolagem.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função não deve ser utilizada para abrir no container o mesmo formulário que o contém.<br/>
 * 2. As modificações feitas no formulário que está em um Container, apenas serão visualizadas quando o sistema for reiniciado, ou quando o formulário for atualizado manualmente.
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
 * O valor passado por parâmetro deve iniciar com JSONInstance ou ArrayInstance.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto convertido a partir do JSON. (Variante)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como primeiro parâmetro o valor JSONInstance({"a":1}), o retorno seria um variavel do tipo variante com os <br/>
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
 * Recebe um componente memo e transforma em texto rico avançado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está localizado o componente Memo.<br/>
 * 2. Componente memo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfConvertRichText(form, componentName) {
  var component = $c(componentName, form);
  if ((component instanceof HTMLMemo) && (!component.isRichText())) {
    component.richText = 2;    
    component.richTextLoad();
  }
}

/**
 * Essa função converte um Componente "Caixa de Texto" para um componente "Caixa de Texto" do tipo Arquivo.<br/>
 * Através dela você poderá selecionar um arquivo do sistema.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente do tipo texto que será convertido em um do tipo arquivo.<br/>
 * 2. Quantidade de caracteres (aproximados) que aparecerão. O Firefox 3 necessita dessa propriedade para alterar a largura.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Exemplo(s): <br/>
 * Assumindo que um Componente do tipo Texto no formulário. O uso desta converterá o Componente em um do tipo arquivo.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O componente não pode estar relacionado a um campo do banco de dados.<br/>
 * 2. Por questões de segurança, a exibição do caminho correto do arquivo ficará a critério do navegador utilizado.<br/>
 * 3. Necessário o uso da função no evento "Ao Entrar" do formulário.
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
 * Cria uma data a partir da passagem do ano, mês, dia, hora, minuto e segundo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Ano<br/>
 * 2. Mês<br/>
 * 3. Dia<br/>
 * 4. Hora (De 0 a 23)<br/>
 * 5. Minuto (De 0 a 59)<br/>
 * 6. Segundo (De 0 a 59)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a data criada. (Data)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetros os valores (2007,5,11,11,5,20) o Retorno "11/05/2007 11:05:20"
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
 * Esta função recebe um texto JSON e retorna um objeto.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Texto em JSON.<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON.<br/>
 * <br/>
 * Observação (ões):<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro da função o texto {"Versão":"3.9","empresa":"Softwell"}, o retorno será um Objeto JSON.
 */
function ebfCreateObjectJSON(json) {
  try {
    return JSON.parse(json == null || json == "" ? "{}" : json);
  } catch (ex) {
    handleException(new Error("Texto JSON não está em um formato válido"));
  }
}

/**
 * Essa função tem por objetivo criar um elemento Spinner(carregamento) de acordo os parâmetros informados.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento Pai (Variante)(Opcional).<br/>
 * 2. Classe adicional (Letras)(Opcional) Ex.: spinner-border text-primary (Ver Observação 2).<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Elemento (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Quando o primeiro parâmetro não é informado o mesmo assume como valor o corpo da pagina.<br/>
 * 2. Para maiores informações sobre Spinners e as classes adicionais acessar: https://getbootstrap.com/docs/4.4/components/spinners/<br/>
 * 3. Essa função bloqueia o acesso do elemento pai, ou seja, o elemento ficara bloqueado até que a função "Spinner - Remover" seja executada.
 */
function ebfCreateSpinner (parent, addClass) {
  parent = parent ? parent : document.body;      
  return bootstrapCreateSpinner(parent, addClass, true)[0]; 
}

/**
 * Cria uma árvore na aba passada por parâmetro, na posição e tamanho especificados.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Árvore.<br/>
 * 2. Nome da aba do formulário onde será adicionada a árvore.<br/>
 * 3. Posição x.<br/>
 * 4. Posição y<br/>
 * 5. Tamanho<br/>
 * 6. Altura<br/>
 * <br/>
 * Retorno: <br/>
 * Árvore Criada. (Variante)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os parâmetros como "Projetos" (Letras), "Visualização" (Letras) , 100(Inteiro), 100(Inteiro), 250(Inteiro) e 250(Inteiro), será criada uma árvore de nome "projetos", na aba "Visualização" do formulário, na posição x=100 e y=100, com 250 de tamanho e de altura.<br/>
 * Observação: É obrigatório a existência de pelo menos um componente no formulário no qual será criada a árvore.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Obtém o idioma que está sendo utilizado no momento.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o idioma da aplicação. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Caso o idioma corrente que esteja sendo utilizado for o inglês, então a função retornará o valor: "en_US"
 */
function ebfCurrentLanguage() {
  return resources_locale;
}

/**
 * Essa função retira as horas da data, retornando apenas a Data com as horas zeradas.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data com Hora<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com as horas zeradas. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 23/09/2008 23: 30: 00. O retorno será 23/09/2008 00:00:00.<br/>
 * 2. Assumindo que o 1º parâmetro seja 10/12/1998 11: 52: 25. O retorno será 10/12/1998 00:00:00.
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
 * Essa função obtém o dia da data passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data de onde será obtido o dia<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o dia a partir de uma data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 23/09/2008. O retorno será 23.<br/>
 * 2. Assumindo que o 1º parâmetro seja 10/12/1998. O retorno será 10.<br/>
 * 3. Assumindo que o 1º parâmetro seja o retorno da função "hoje", o retorno será o dia atual
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
 * Essa função calcula a diferença de dias (levando em consideração as horas) entre as datas passadas por parâmetros.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferença de dias da data do 1º parâmetro com a data do 2º parâmetro.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 09/02/2005 00:00:00 e o 2º parâmetro 11/03/2005 00:00:00. O retorno será -30.<br/>
 * 2. Assumindo que o 1º parâmetro seja 11/03/2004 00:00:00 e o 2º parâmetro 09/02/2004  00:00:00. O retorno será 30.
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
 * Essa função obtém as horas a partir da data.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data que deseja extrair as horas<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a hora extraída da data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 22/08/2008 18: 30: 02. O retorno será 18.<br/>
 * <br/>
 * Observação(ões): <br/>
 * Se no primeiro parâmetro for passada uma data sem as horas, a função retornará o valor 0 (zero).
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
 * Essa função incrementa o dia de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data que deseja incrementar o dia<br/>
 * 2. Valor a ser incrementado no dia<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o dia incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 22/09/2008 e o 2º parâmetro seja 2 . O retorno será 24/09/2008.
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
 * Essa função incrementa o mês de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data que deseja incrementar o mês<br/>
 * 2. Valor a ser incrementado no mês<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o mês incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 05/08/2005 e o 2º parâmetro seja 2 . O retorno será 05/10/2005.
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
 * Essa função incrementa o ano de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data que deseja incrementar o ano<br/>
 * 2. Valor a ser incrementado no ano<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o ano incrementado. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 22/08/2008 e o 2º parâmetro seja 2 . O retorno será 22/08/2010.
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
 * Essa função obtém os minutos de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data que será extraído os minutos<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os minutos da data passada por parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 02/11/2010 12: 53: 26. O retorno será 53.<br/>
 * <br/>
 * Observação(ões): <br/>
 * Se no primeiro parâmetro for passada uma data sem os minutos, a função retornará o valor 0(zero).
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
 * Essa função obtém o mês de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data que deseja extrair o mês<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o mês da data. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 22/09/2008. O retorno será 9.<br/>
 * 2  Assumindo que o 1º parâmetro seja o retorno da função "hoje", o retorno será o mês atual
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
 * Essa função calcula a diferença de meses entre as datas passadas por parâmetros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferença de meses. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 09/02/2005 e o 2º parâmetro 11/03/2005. O retorno será -1.<br/>
 * 2. Assumindo que o 1º parâmetro seja 11/03/2004 e o 2º parâmetro 09/02/2004. O retorno será 1.
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
 * Essa função obtém os segundos de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data que será extraído os segundos<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os segundos da data passada por parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 02/11/2010 11: 58: 26. O retorno será 26.<br/>
 * <br/>
 * Observação(ões): <br/>
 * 1. Se no primeiro parâmetro for passada uma data sem os segundos, a função retornará o valor 0(zero).
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
 * Parâmetros:<br/>
 * 1. Data com a hora que será incrementada.<br/>
 * 2. Quantidade a ser incrementada.<br/>
 * 3. Qual parte da hora deve ser incrementada. Use H para hora, M para minuto e S para segundo.<br/>
 * <br/>
 * Retorno: <br/>
 * Data com a hora incrementada. (Data)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Utilizando a função na Camada Cliente se for passada no 1º parâmetro somente a data o retorno da função será a data e<br/>
 * a hora com o valor incrementado na parte da hora informada,  Ex: Assumindo no 1º parâmetro 10/12/2013, 2º parâmetro 30, 3º parâmetro M<br/>
 * retorno da função será 10/12/2013 00:30:00.
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
 * Essa função obtém a data atual e retorna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data atual com as horas. (Data)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Ao utilizar a função em um fluxo na camada Servidor, a hora retornada será a definida no relógio do servidor de aplicações (Webrun).<br/>
 * 2. Ao utilizar a função em um fluxo na camada Cliente, a hora retornada será a definida no relógio do cliente (não confiável).<br/>
 * 3. Ao utilizar a função em um fluxo na camada Banco de Dados, a hora retornada será a definida no relógio do servidor de banco de dados.
 */
function ebfDateToday() {
  return new Date();
}

/**
 * Essa função obtém o ano a partir de uma data passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Data de onde será obtido o ano.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o ano da data passada por parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplos(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 05/08/2008. O retorno será 2008.<br/>
 * 2. Assumindo que o 1º parâmetro seja 29/12/2004. O retorno será 2004.<br/>
 * 3. Assumindo que o 1º parâmetro seja o retorno da função "hoje", o retorno será o ano atual.
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
 * Essa função calcula a diferença de anos entre as datas passadas por parâmetros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Primeira Data<br/>
 * 2. Segunda Data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a diferença de anos. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 23/12/2009 e o 2º parâmetro 02/02/2007. O retorno será 2, pois (2009 - 2007 = 2).<br/>
 * 2. Assumindo que o 1º parâmetro seja 18/05/2004 e o 2º parâmetro 28/01/2007. O retorno será -3, pois (2004 - 2007 = -3).
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
 * Esta função remove um atributo de um objeto HTML (DOM).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Verdadeiro, se exclusão bem sucedida, caso contrário, falso.
 */
function ebfDeleteObject(object, attribute){
  return delete object[attribute];
}

/**
 * Converte a cor para o formato RGB.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Cor, exemplo clBlue. <br/>
 * <br/>
 * Retorno:<br/>
 * Cor em RGB.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1.Assumindo como parâmetro "clGreen", o retorno será #008000<br/>
 * 2.Assumindo como parâmetro "clPurple", o retorno será #800080<br/>
 * 3.Assumindo como parâmetro "clWhite", o retorno será  #FFFFFF <br/>
 * <br/>
 * Observação(ões):<br/>
 * O formato RGB é uma forma utilizada para se reproduzir diversas cores através das cores básicas iniciais:<br/>
 * vermelho (Red), verde (Green) e azul (Blue). Em computação utiliza-se muito esse padrão para se definir uma cor a ser mostrada na tela, se representa a cor RGB em números tendo cada cor, vermelho (R), verde (G) e azul (B) 256 combinações possíveis de 0 a 255 sendo 0 a ausência de dessa cor e 255 a sua plenitude. <br/>
 * Sendo Representado da seguinte forma:<br/>
 *       - Branco como é o conjunto de todas as cores sendo representado como 255 255 255.<br/>
 *       - Preto como sendo a ausência de cores sendo representado com  0 0 0.<br/>
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
 * Retorna o valor do texto no formato Java, a partir de um texto no formato Delphi mudando os caracteres especiais que são usados nas linguagens.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto Delphi.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto JAVA. (Letras)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como parâmetro o texto 'softwell solutions' (entre aspas simples), o retorno será " softwell solutions " sem <br/>
 * aspas, visto que java não usa aspas simples e sim aspas duplas.
 */
function ebfDelphiStringToJavaString(delphiString) {
  return delphiStringToJavaString(delphiString);
}

/**
 * Essa função destrói o componente retirando o mesmo da memória.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Nome do Componente (definir o formulário de trabalho no parâmetro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O componente destruído não mais poderá ser referenciado.
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
 * Essa função detecta se é um dispositivo móvel e retorna o tamanho e altura da tela.<br/>
 * <br/>
 * Paramêtros:<br/>
 * Nenhum<br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo três elementos , o primeiro é o valor lógico informando se é ou não mobile, o segundo a largura da tela e o terceiro a altura da tela.
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
 * Essa função recebe um elemento HTML por parâmetro e retorna se ele possui barra de rolagem.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Elemento<br/>
 * 2. Posição<br/>
 * <br/>
 * Retorno(s):<br/>
 * Lógico<br/>
 * <br/>
 * Observação(ões):<br/>
 * No segundo parâmetro é necessário informar a posição da barra de rolagem que se deseja saber, passando 1 como a vertical e 2 para horizontal.
 */
function ebfDetectScroll(elem, pos){
  if(pos === 1)
    scrollbar = elem.scrollHeight > elem.clientHeight;
  else if(pos === 2)
    scrollbar = elem.scrollWidth > elem.clientWidth; 
  return scrollbar;
}

/**
 * Desabilita o componente Grade passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente.<br/>
 * 2. Desabilitar? (True ou False)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfDisableGrid() {
  if (existArgs(arguments)) {     
    var componentGrid = $c(arguments[0]);    
    var disable = parseBoolean(arguments[1]);
    if (!componentGrid)
      return handleException(new Error('Componente '+ arguments[0] + ' não encontrado.'));      
    componentGrid.iscCanvas.setDisabled(disable);      
    componentGrid.setEnabled(!disable);      
    
  }
  return null;
}

/**
 * Essa função encerra a conexão com o serviço GPS.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
 */
function ebfDisconnectLocationService(){
  alert("Disponível apenas no Maker Mobile");       
}

/**
 * Utilizada para fazer o download de um arquivo passando o endereço do mesmo.<br/>
 * O caminho deve ser relativo ao diretório do deploy webrun, e deve começar por "/tmp/" ou "/download/" ou "/upload/" <br/>
 * ou "/downloads/" ou "/uploads<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL do arquivo que será baixado. Ex: /tmp/arquivo.zip<br/>
 * 2. WEB: Indica se deve ser exibido uma mensagem informativa, com o link do arquivo.<br/>
 *     Se for verdadeiro aparecerá uma mensagem informando o endereço do arquivo, e iniciará o download.<br/>
 *     Se for falso apenas iniciará o download do arquivo.<br/>
 *     Maker Mobile: Indica o nome (com extensão) do arquivo que será baixado.<br/>
 * <br/>
 * Retorno<br/>
 * WEB: Não possui<br/>
 * Maker Mobile: Retorna o caminho completo do arquivo salvo.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Caso o caminho da URL não seja relativo ao diretório do deploy do webrun, o download não iniciará automaticamente.<br/>
 * Ex: http://sistemas.webrun.com.br/tmp/arquivo.zip<br/>
 * 2. Caso a função seja utilizada para a plataforma Maker Mobile, o segundo parâmetro deverá ser informado o nome (com extensão) para o arquivo que será salvo. A função retornará automaticamente o caminho do arquivo salvo (Maker Mobile)
 */
function ebfDonwloadStart(url, showWarning) {
  var execWin = top;
  
  if (!IE && d && d.n && d.n.isModal === true) {
    execWin = $mainframe();
  }

  // Condição para funcionar em formulário principal no IE  
  if (IE && top.systemOnLoadAction) {
    IframeTransporter('download?download_file=' + URLEncode(url, 'GET') + '&sys=' + sysCode + '&formID=' + URLEncode(idForm, 'GET'));
  } else {
    execWin.IframeTransporter('download?download_file=' + URLEncode(url, 'GET') + '&sys=' + sysCode + '&formID=' + URLEncode(idForm, 'GET'));
  }
  
  if (showWarning) {
    interactionInfo("Se o download não iniciar automaticamente clique no link abaixo: \n<a href=\"" + url + "\" target=\"_NEW\">" + url + "</a>");
  }
}

/**
 * Essa função remove todos os elementos em tela do componente Lista Dupla passado como parâmetro. <br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Componente Lista Dupla.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função não remove os registros armazenados no banco de dados.
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
 * Retorna uma lista com os campos chaves da lista principal do componente lista dupla. é necessário selecionar os itens nas quais, quer-se obter os campos chaves.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Formulário que contém a Lista Dupla<br/>
 * 2. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista com os selecionados da lista principal (Variante).<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Retorna uma lista dos selecionados com os valores dos campos chaves, dos itens que foram selecionados pelo usuário do componente lista dupla.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Formulário que contém a Lista Dupla<br/>
 * 2. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista com os selecionados da lista principal. (Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função adiciona um elemento em tela no componente Lista Dupla de acordo os valores passados como parâmetros.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Componente Lista Dupla.<br/>
 * 2. Valor Chave (Letras).<br/>
 * 3. Valor que representará a chave (Letras).<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como 1º parâmetro um componente Lista Dupla com os valores na lista principal:<br/>
 *  1 - Pedra<br/>
 *  2 - Papel<br/>
 * ao passar o valor "3" no 2º parâmetro e "Tesoura" no 3º parâmetro o resultado será uma Lista Dupla com os valores <br/>
 * 1 - Pedra<br/>
 * 2 - Papel<br/>
 * 3 - Tesoura.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O valor adicionado ao componente, não será armazenado no banco de dados, caso o mesmo esteja vinculado a campo.
 */
function ebfDualListPut(obj, value, label) {
  obj = controller.verifyComponent(obj);  
  
  if (obj && obj.addItem) {
    obj.addItem(obj.leftSelect, value, label);
  }  
}

/**
 * Define o tipo de filtro que deve ser executado para todas as Listas Dinâmicas do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * <br/>
 * 1. Tipo de filtro:<br/>
 * 1- Igual, 2- Contendo, 3- Iniciando com, 4- Terminando com<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Definir o fluxo ao entrar no formulário ou na lista dinâmica
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
 * Função que cria um novo componente caixa de texto dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (Caso não seja definida, a aba não será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Descrição do Componente.<br/>
 * 7. Valor.<br/>
 * 8. ID para o componente (Letras)<br/>
 * 9. Tipo (moeda, inteiro, data) (Opcional, Letras)<br/>
 * 10. Texto quando Nulo (Opcional, Letras)<br/>
 * 11. Posição da Descrição (Opcional, Inteiro)<br/>
 * 12. Auto Completar ? (Opcional, Lógico)<br/>
 * 13. Container (Letras)<br/>
 * 14. Estilo CSS (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1) Caso se deseje utilizar um dos tipos de dados acima, deve-se escrever o tipo do mesmo, conforme as opções. O <br/>
 * mesmo irá definir a máscara escolhida ao componente.
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
 * Essa função habilita o modo de depuração no aplicativo em questão quando executado no Android.<br/>
 * <br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Ativar? (true/false)<br/>
 * <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * A depuração remota deve está habilitado no computador e dispositivo. Mais detalhes:<br/>
 * https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br
 */
function ebfEnableDebugMode(status){
  console.log('Compatível com o Maker Mobile');
}

/**
 * Habilitar ou desabilitar botão de exclusão.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lógico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Habilitar ou desabilitar botão de alteração.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lógico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfEnableEditButton(enabled) {
  var navigation = $mainform().d.n;
  if (navigation) {
    navigation.canEdit = enabled;
    navigation.btEdit.setEnabled(enabled);
  }
}

/**
 * Essa função habilita ou desabilita o GPS do dispositivo<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * Não Possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Verdadeiro, caso seja ativado. Falso, caso contrário.
 */
function ebfEnableGPS(){}

/**
 * Essa função habilita ou desabilita a exportação dos dados de um componente Grade de acordo o valor lógico informado no terceiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente Grade.<br/>
 * 3. Habilitar? (Lógico).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfEnableGridExportData (form, comp, enable){
  var grid = $c(comp);  
  if(!grid){
    handleException(new Error('O componente ' + comp + ' não encontrado.'));     
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
 * Habilitar ou desabilitar botão de inserção.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lógico (Verdadeiro para Habilitar, Falso para Desabilitar).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfEnableIncludeButton() {

var navigation = $mainform().d.n;

if (navigation) {
   navigation.btInclude.setEnabled(arguments[0]);
 
}

}

/**
 * Verifica se o conteúdo do primeiro parâmetro termina com o conteúdo do 2° parâmetro.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto onde será feita a pesquisa;<br/>
 * 2. Valor final do texto.<br/>
 * <br/>
 * Retorno:  <br/>
 * Verdadeiro se o texto do 1º parâmetro iniciar com o valor informado no 2º parâmetro, caso contrário, retornará Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como "Maker Flow" (Letras) e "ow" (Letras) , o retorno seria Verdadeiro.<br/>
 * 2. Assumindo os parâmetros como "Maker Flow" (Letras) e "wo" (Letras) , o retorno seria Falso.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Ao informar o 2º parâmetro como "" (vazio), o retorno será Verdadeiro.
 */
function ebfEndsWith (value, valueEndsWith){
  if(!isNullable(value))  
    return toString(value).endsWith(valueEndsWith);    
  return false;
}

/**
 * Esta função recebe como parâmetro um objeto e uma função que pertence aquele objeto e executa passando parâmetros se houver.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto (Variante) (Opcional)<br/>
 * 2. Nome da função (Letras)<br/>
 * 3. Lista de parâmetros (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * O retorno da função chamada. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o 1º parâmetro não seja informado, implicitamente será obtido o objeto Window (equivalente ao retorno da função Obter Formulário Atual na maioria dos casos).
 */
function ebfExecuteCustomJSFunction(obj, fun, params){
  if(typeof(fun) === "string"){
    if(typeof(obj) !== "object" || obj === null)
      obj = window;
    return obj[fun].apply(obj, params);
  }
}

/**
 * Executa um comando Javascript passado como parâmetro. <br/>
 * (JavaScript é uma linguagem de hiper-texto.É uma nova linguagem para criação de Home-Pages.Funções escritas em JavaScript podem ser embutidas dentro de seu  documento HTML.)<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Comando JavaScript<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o resultado do comando executado. (Variante) <br/>
 * <br/>
 * Exemplos: <br/>
 * 1° Parâmetro: alert("Messagem a ser Enviada");
 */
function ebfExecuteJS(js, context) {
  return executeJS.call(this, js, context);
}

/**
 * Executa um comando Javascript a partir de um contexto específico. <br/>
 * (JavaScript é uma linguagem de hiper-texto. Funções escritas em JavaScript podem ser embutidas dentro de seu documento HTML)<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do contexto<br/>
 * 2. Comando JavaScript<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o resultado do comando executado. (Variante) <br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o primeiro parâmetro seja nulo, a função será executada a partir do contexto principal do formulário.<br/>
 * 2. O primeiro parâmetro pode ser a referência do contexto (objeto window) ou do iframe (elemento HTML).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1º Parâmetro: referência de um elemento iframe;<br/>
 * 2° Parâmetro: alert("Messagem a ser enviada");
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
 * Exporta os dados do formulário passado no primeiro parâmetro de acordo com o tipo de exportação escolhida.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário cujos dados serão exportados<br/>
 * 2. Tipo de exportação<br/>
 *      LST     - Exportar como uma lista;<br/>
 *      HTML  - Exportar como tabelas HTML;<br/>
 *      XML     - Exportar como árvore XML;<br/>
 *      TXT      - Exportar como arquivo de texto;<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função pode ser usada somente pra exportação de dados, ou seja, vinculados ao registro da tabela referente ao formulário passado no 1º parâmetro.
 */
function ebfExportFormData(formGuid,type) {
  window.open("export.jsp?sys=" + sysCode + "&formID=" + URLEncode(formGuid) + "&type=" + type, "ExportFormData", "fullscreen");
}

/**
 * Esta função verifica o estado do aplicativo e se a sessão do usuário está definida como logado ou não no Facebook. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo que receberá o Status do Aplicativo (Fluxo);<br/>
 * 2. Lista de Parâmetros do fluxo (Variante, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O fluxo chamado no primeiro parâmetro receberá o Status do aplicativo. O status pode ser "connected" quando o <br/>
 * usuário autenticou a permissão do aplicativo no Facebook, "not_authorized" quando está logado no Facebook mas não <br/>
 * autenticado no Aplicativo ou  "unknown" quando não está logado no Facebook, então não se sabe se está autenticado <br/>
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
 * Esta função abre uma caixa de comentários no componente moldura.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. AppID do Facebook (Letras);<br/>
 * 3. Tema: "light" ou "dark" (Letras);<br/>
 * 4. Link da página que será associada aos comentários (Letras);<br/>
 * 5. Número de postagens exibidas (Inteiro, opcional);<br/>
 * 6. Ordem: "social", "reverse_time" ou "time" (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O número de postagens mínimo é de "1" e o máximo "10";<br/>
 * 2. Caso o 6º parâmetro não seja informado, o valor padrão adotado é "social";
 */
function ebfFacebookComments(component, appid, colorscheme, href, num_posts, order_by){
  if(isNullable(appid)){
    throw "App ID é um parâmetro obrigatório";
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
 * Esta função habilita a opção de curtir/recomendar para uma determinada página/link.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Layout: "standard", "box_count", "button_count" ou "button" (Letras, Opcional);<br/>
 * 3. Ação: "like" ou "recommend" (Letras, Opcional);<br/>
 * 4. Mostrar foto do perfil? (Lógico, Opcional);<br/>
 * 5. Link da página a ser curtida/recomendada (Letras, Opcional);<br/>
 * 6. Incluir compartilhar? (Lógico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O 4º só é aplicado para o layout "standard";<br/>
 * 2. Caso o 5º parâmetro não seja informado, a página atual será adotada.
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
 * Esta função permite a visualização das últimas publicações da página e/ou os usuários do Facebook que curtem a página.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Moldura (Componente)<br/>
 * 2. Link da página do Facebook a ser curtida (Letras)<br/>
 * 3. Tema: "light" ou "dark", padrão é "light" (Letras, Opcional)<br/>
 * 4. Mostrar cabeçalho? (Lógico, Opcional)<br/>
 * 5. Mostrar borda da caixa? (Lógico, Opcional)<br/>
 * 6. Mostrar fotos dos perfis? (Lógico, Opcional)<br/>
 * 7. Mostrar últimas postagens da página? (Lógico, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O 4º e o 5º possuem o valor padrão "verdadeiro";<br/>
 * 2. Por padrão, as fotos dos perfis não são exibidas (6º parâmetro);<br/>
 * 3. Por padrão, as últimas postagens da página não são exibidas (7º parâmetro);
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
 * Esta função habilita a opção de login/logout no Facebook.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. AppID do Facebook (Letras);<br/>
 * 3. Habilitar Sair? (Lógico);<br/>
 * 4. Quantidade de linhas de perfis a serem exibidos (Inteiro, Opcional);<br/>
 * 5. Fluxo a ser executado no login/logout (Fluxo, Opcional);<br/>
 * 6. Parâmetros adicionais para o fluxo;<br/>
 * 7. Lista de permissões requisitadas (Variante, Opcional);<br/>
 * 8. Tamanho do botão de login;<br/>
 * 9. Mostrar Foto do Perfil<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações<br/>
 * 1. Por padrão, somente o perfil público do usuário é requisitado (7º Parâmetro). A lista completa de permissões poderá ser obtida em https://developers.facebook.com/docs/facebook-login/permissions/v2.0#reference<br/>
 * 2. As seguintes opções são válidas para o 8º parâmetro: "small", "medium", "large" ou "xlarge";
 */
function ebfFacebookLogin(component, appid, auto_logout_link, max_rows, onlogin, params, scope, size, show_faces){
  if(isNullable(appid)){
    throw "App ID é um parâmetro obrigatório";
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
 * Solicita autorização para logar com o Facebook do usuário.<br/>
 * <br/>
 * Parametros:<br/>
 * 1. Fluxo de sucesso;<br/>
 * 2. Parâmetros extras para o fluxo de sucesso;<br/>
 * 3. Fluxo de erro;<br/>
 * 4. Parâmetros extras para o fluxo de erro;<br/>
 * 5. Lista de parâmetros de permissões para o Facebook.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui<br/>
 * <br/>
 * Observações:<br/>
 * 1. É necessário definir o ID da aplicação do Facebook na propriedade "Avançado" da área de trabalho do projeto, com a descrição FacebookID.<br/>
 * 2. O fluxo de sucesso deverá conter um parâmetro do tipo variante, onde receberá um JSON com as informações solicitadas no parâmetro 5.<br/>
 *    2.1. As permissões podem ser encontradas no seguinte link: https://developers.facebook.com/docs/facebook-login/permissions<br/>
 * 3. É necessário definir a seguinte Hash chave nas definições do seu projeto Android: 0WIQzU0HT5kEuWsgE7jqZDZDQOU=
 */
function ebfFacebookLoginMobile(){
  console.log("Disponível apenas no Maker Mobile");
}

/**
 * Esta função exibe uma postagem do Facebook no componente moldura passado como parâmetro.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Link da postagem do Facebook (Letras);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Esta função permite recomendar uma página/link de sites externos.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. App ID do Facebook (Letras);<br/>
 * 2. Ação: "like" ou "recommend" (Letras, Opcional);<br/>
 * 3. Link da página a ser recomendada (Letras, Opcional);<br/>
 * 4. Lista de domínios (Variante, Opcional;<br/>
 * 5. Quantidade de recomendações (Inteiro, Opcional);<br/>
 * 6. Posição da barra de recomendações: "left" ou "right" (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso 5º não seja informado, o valor padrão adotado são 2. O valor máximo de domínios são 5.
 */
function ebfFacebookRecommendationsBar(appid, action, href, site, num_recommendations, side){
  if(isNullable(appid)){
    throw "App ID é um parâmetro obrigatório";
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
 * Esta função habilita a opção de compartilhar um determinado link/página.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente);<br/>
 * 2. Layout: "box_count", "button_count", "button", "icon_link", "icon" ou "link" (Letras, Opcional);<br/>
 * 3. Link da página a ser compartilhada (Letras);<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A altura do botão "compartilhar" é determinada pelo layout escolhido no 2º parâmetro. A largura do botão será determinada pela largura do componente moldura.
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
 * Efetua a conexão com o banco de dados Firebase. Nos casos de utilização no Mobile, o banco a ser conectado será o configurado no projeto cadastrado no Firebase.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Caminho do arquivo de conexão '.json' (No Maker Mobile, será obtido automaticamente. Informar o JSON de conexão quando utilizada na camada Cliente); Ver observação 5.<br/>
 * 2. URL do banco (No Maker Mobile e na camada Cliente, será obtido automaticamente);<br/>
 * 3. Fluxo de Callback (Aplicado apenas para camada Cliente, este parâmetro recebe o nome do fluxo que será executado quando a conexão com o banco for estabelecida);<br/>
 * 4. Lista de Parâmetros para o fluxo indicado no 3º parâmetros;<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referência da conexão quando utilizado na camada servidor ou mobile(quando utilizada na camada Cliente, o retorno será nulo);<br/>
 * <br/>
 * Observações:<br/>
 * 1. Os dados para conexão com o banco de dados são obtidos no cadastro do projeto no Console do Firebase.<br/>
 * 2. Endereço do console do Firebase: https://console.firebase.google.com/<br/>
 * 3. No Mobile o arquivo de configuração deverá ser upado no servidor do Maker Mobile através da opção "Configurações Adicionais" disponível na tela de exportação do projeto.<br/>
 * 4. A  leitura do arquivo "google-services.json" (Android) ou "google-services.plist" (iOS) será realizada de forma automática.<br/>
 * 5. Para a camada cliente deverá ser o retorno da função JSON - Criar Objeto, copiar o JSON (texto) disponibilizado após configurar o projeto para Web no Firebase ( No link https://firebase.google.com/docs/web/setup?hl=pt-br e seção "Objeto de configuração do Firebase") . Para utilizar na camada servidor, deverá ser habilitado o Firebase Admin SDK conforme documentação: https://firebase.google.com/docs/admin/setup
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
 * Monitora alterações/atualizações de um nó/registro em um no banco de dados Firebase.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da Conexão (No Maker Mobile e na camada Cliente, será obtido automaticamente).<br/>
 * 2. Nome do Nó a ser monitorado.<br/>
 * 3. Filtro a ser realizado (JSON).<br/>
 * 4. Tipo de Ordenação ("F": Ordenar resultados pelo valor de uma chave filho específica; "C": Ordenar resultados por chaves filho;<br/>
 *     "V": Ordenar resultados por valores filhos. <br/>
 * 5. Valor de ordenação (Somente para o tipo "F". Informar o nome de um nó filho para ordenação)<br/>
 * 6. Fluxo que receberá os dados de monitoramento.<br/>
 *     O fluxo deverá deixar dois parâmetros reservados. O primeiro receberá a ação realizada que é "A": Adição; "D": Remoção; "U": Atualização<br/>
 *     O segundo será o JSON com os dados recebidos.<br/>
 * 7. Lista de parâmetros extra para o fluxo(Na camada cliente não se faz necessário reservar os parâmetros automáticos da função).<br/>
 * <br/>
 * Exemplo de filtro: <br/>
 * No exemplo abaixo, serão monitorados os primeiros 12 elementos que iniciam com "A" e terminam com "D"<br/>
 * {<br/>
 *   "first": 12,<br/>
 *   "startWith": "A",<br/>
 *   "endWith": "D"<br/>
 * }<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Atualiza o valor de um nó/chave quando a conexão com o Firebase for encerrada. <br/>
 * A conexão com o Firebase pode ser encerrada por falta de conexão com internet, por exemplo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da conexão.(No Maker Mobile e na camada Cliente, será obtido automaticamente);<br/>
 * 1. Nome do Nó<br/>
 * 3. JSON ou Valor (Literal).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * Não possui.
 */
function ebfFirebaseOnDisconnect(ref, node, data){
  var database = firebase.database().ref(node);
  database.onDisconnect().set(data);
}

/**
 * Lê um nó/registro em um no banco de dados Firebase.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da Conexão(No Maker Mobile e na camada Cliente, será obtido automaticamente).<br/>
 * 2. Nome do Nó.<br/>
 * 3. Filtro a ser realizado (JSON).<br/>
 * 4. Tipo de Ordenação ("F": Ordenar resultados pelo valor de uma chave filho específica; "C": Ordenar resultados por chaves filho;<br/>
 *     "V": Ordenar resultados por valores filhos. <br/>
 * 5. Valor de ordenação (Somente para o tipo "F". Informar o nome de um nó filho para ordenação).<br/>
 * 6. Fluxo que receberá os dados lidos (JSON).<br/>
 * 7. Lista de parâmetros extra para o fluxo(Na camada cliente não se faz necessário reservar os parâmetros automáticos da função).<br/>
 * 8. Fluxo que receberá no primeiro parâmetro a mensagem de erro, quando o mesmo ocorrer (Letras).<br/>
 * 9. Lista de parâmetros extra para o fluxo de Erro.<br/>
 * <br/>
 * Exemplo de filtro: <br/>
 * No exemplo abaixo, serão retornados os primeiros 12 elementos que iniciam com "A" e terminam com "D"<br/>
 * {<br/>
 *   "first": 12,<br/>
 *   "startWith": "A",<br/>
 *   "endsWith": "D"<br/>
 * }<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O fluxo deverá ter o primeiro parâmetro reservado para recebimento dos dados lidos (Objeto JSON).
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
 * Atualiza ou insere um nó no banco de dados Firebase.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da Conexão(No Maker Mobile e na camada Cliente, será obtido automaticamente);<br/>
 * 2. Nó de Inserção/Atualização;<br/>
 * 3. ID do Registro;<br/>
 * 4. Dados (JSON);<br/>
 * 5. Assíncrono? (Lógico) (Ver observação 2);<br/>
 * 6. Fluxo de sucesso (Fluxo);<br/>
 * 7. Parâmetros do fluxo de sucesso. (Lista de Parâmetros);<br/>
 * 8. Fluxo de erro (Fluxo);<br/>
 * 9. Parâmetros do fluxo de erro. (Lista de Parâmetros);<br/>
 * <br/>
 * Retorno:<br/>
 * ID Gerado (no caso de inserção, ao atualizar, será retornado o mesmo ID), caso a função seja assíncrona, o fluxo de sucesso receberá o ID no primeiro parâmetro.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o ID não seja informado, os dados serão inseridos no banco. Caso o ID seja informado, os dados serão atualizados<br/>
 * 2. Ao passar esse parâmetro como TRUE, a função irá se comportar de forma assíncrona. Após a escrita, o fluxo de sucesso é chamado recebendo no primeiro parâmetro o ID do registro, caso contrario, o fluxo de erro será acionado recebendo a causa do erro no primeiro parâmetro.
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
 * Essa função a partir do mês e ano passado por parâmetro retorna a data com o primeiro dia do mês.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mês<br/>
 * 2. Ano<br/>
 * 3. Formatação (Opcional).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o primeiro dia do mês. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o 1º parâmetro sendo 02 e o 2º parâmetro sendo 2007, o retorno será 01/02/2007 00:00:00.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O mês deve receber valores entre 1 e 12.<br/>
 * 2. Se o 3º parâmetro não for definido, a data retornada terá o formato brasileiro.
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
 * Executa o fluxo determinado pelo 1° parâmetro. Pode-se passar uma lista de parâmetros para o fluxo através do 2° parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do fluxo que se deseja executar. Deve-se passar o nome exato ao cadastrado.<br/>
 * 2. Lista de parâmetros que o fluxo necessita (Caso não haja, deixar Nulo).<br/>
 * <br/>
 * Retorno: <br/>
 * Caso seja um fluxo Servidor executando um Cliente, o retorno será nulo visto que, por não haver sincronia nesse tipo de execução, não é possível obter o retorno do fluxo Cliente. (Variante)<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Utilize a Função "Criar Lista a partidos do Elementos" para atender o 2° parâmetro.
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
    if (ruleInstance && ruleInstance.run) { // é JS
      value = executeJSRule(sysCode, formCode, reducedName, params, true);
    }
  } 
  return value;
}

/**
 * Efetua o produtório dentro de um intervalo definido.<br/>
 * Para cada valor definido no intervalo (a partir do incremento), a regra definida será executada e retornará um valor.<br/>
 * Todos esses valores serão multiplicados num total, o qual será o retorno da função.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da regra. (Fluxo)<br/>
 * 2. Valor inicial, padrão 1<br/>
 * 3. Valor final<br/>
 * 4. Incremento, padrão 1<br/>
 * <br/>
 * Retorno: <br/>
 * Produtório, no intervalo definido, da execução das funções. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1° Parâmetro sendo o fluxo: "XYZ" onde este fluxo recebe um parâmetro e eleva o mesmo ao quadrado,<br/>
 * o 2° Parâmetro sendo o valor: 1, o 3° Parâmetro sendo o valor: 2, e o 4° Parâmetro sendo o valor: 1, o retorno da função será 4 (1² * 2²).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.<br/>
 * 2. Utilize a função: "Potência" para elevar um número ao quadrado.
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
  // Execução para quando o valor inicial é igual ao final. Este caso não entra no laço acima.
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
 * Efetua o somatório dentro de um intervalo definido.<br/>
 * Para cada valor definido no intervalo (a partir do incremento), a regra definida será executada e retornará um valor.<br/>
 * Todos esses valores serão somados num total, o qual será o retorno da função.<br/>
 * <br/>
 * Parâmetro<br/>
 *  1. Nome da regra<br/>
 *  2. Valor inicial, padrão 0<br/>
 *  3. Valor final<br/>
 *  4. incremento, padrão 1<br/>
 * <br/>
 * Retorno: <br/>
 * Somatório, no intervalo definido, da execução das funções.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo o Parâmetro 1 como um fluxo "XYZ" que recebe um parâmetro e eleva o mesmo ao quadrado,<br/>
 * o Parâmetro 2 como 1, o Parâmetro 3 como 2, e o Parâmetro 4 como 1, o retorno da função seria 5 (1² + 2²).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
  // Execução para quando o valor inicial é igual ao final. Este caso não entra no laço acima.
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
 * A função altera o conteúdo do componente que está no formulário passado como parâmetro pelo conteúdo <br/>
 * passado no 3º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está o componente.<br/>
 * 2. Componente que será alterado.<br/>
 * 3. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros "Cadastro" (Constante do tipo Formulário), MakerEdit1(Constante do tipo <br/>
 * Componente) e "Salvador" (Letras), ao fluxo ser executado, o componente "MakerEdit1" passaria a ter o <br/>
 * conteúdo "Salvador".<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função altera valores somente de componentes do formulário da qual ela foi chamada. Para alterar valor <br/>
 * do componente em outro formulário, deve-se utilizar a função "Alterar Valor do Componente em Outro <br/>
 * Formulário".<br/>
 * 2. Ao utilizar a função na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a função só funcionará com o formulário em modo de inserção ou alteração.
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
 * A função altera o conteúdo do componente que está no formulário passado como parâmetro pelo conteúdo passado no 3º parâmetro. Após o valor ser definido a máscara que está no componente é aplicada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está o componente.<br/>
 * 2. Componente que será alterado.<br/>
 * 3. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor já aplicado com a máscara. O retorno só se aplica para a camada cliente. (Variante)
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
 * Fecha a árvore de formulários a partir do definido por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário de onde deve-se partir para fechar todos seus formulários filhos.<br/>
 * 2. Define-se se o formulário, definido no Parâmetro 1, deve ser recarregado.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Retorna a referência do componente passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a referência do componente. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2", o retorno será o objeto deste componente.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Se o formulário não for o principal (o que chama o fluxo), essa função não vai funcionar em regras do tipo <br/>
 * cliente;<br/>
 * 2. Se não for o formulário principal (que chama o fluxo) e o mesmo estiver aberto, o retorno será o conteúdo do <br/>
 * campo passado naquele registro. Caso o formulário passado não esteja sendo utilizado, o retorno será o primeiro <br/>
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
 * Parâmetros:<br/>
 * 1. Nome da moldura (Usada no formulário para exibir o ActiveX).<br/>
 * 2. Classid do ActiveX. (CLSID)<br/>
 * 3. Codebase do ActiveX.<br/>
 * 4. Objeto Mapa contendo os parâmetros.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. ActiveX são objetos para serem utilizados no Internet Explorer.<br/>
 * 2. Necessário definir no objeto inicio o formulário de trabalho, para o correto preenchimento do 1° parâmetro.
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
 * Cria uma imagem estática em um componente moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura (usada no formulário para exibir a imagem).<br/>
 * 2. Endereço onde está armazenada a imagem na Internet.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como 1º parâmetro a moldura "MOLDURA" e como 2º parâmetro a URL <br/>
 * "http://www.softwell.com.br/downloads/Foto.jpg", a imagem estática será criada na moldura "MOLDURA".<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Esta função permite adicionar vídeos a formulários.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura (usada no formulário para exibir o vídeo).<br/>
 * 2. Endereço na Internet onde está armazenado o vídeo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como 1º parâmetro a moldura "MOLDURA" e como 2º parâmetro a URL <br/>
 * "http://www.softwell.com.br/downloads/exemplo.mpg", a imagem estática será criada na moldura "MOLDURA".<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Esta função muda o modo do formulário para o modo de alteração.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formulário esteja em modo de navegação, após a função ser chamada, o formulário passará para o modo de alteração.<br/>
 * <br/>
 * Observações: <br/>
 * 1. O formulário que vai entrar em modo de alteração será o mesmo que chama o fluxo.
 */
function ebfFormEditMode()  {
  if (d.n) {
    d.n.timeout(d.n.actEdit, 100);
  }
}

/**
 * Retorna a altura(em pixels) do formulário onde o fluxo for executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui<br/>
 * <br/>
 * Retorno:<br/>
 * Altura do Formulário. (Inteiro)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfFormGetClientHeight() {
  return parseInt(getWindowHeight());
}

/**
 * Obtém o conteúdo do componente passado no segundo parâmetro e o retorna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Formulário.<br/>
 * 2. Nome do Componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o conteúdo do componente passado como parâmetro. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do <br/>
 * Sub Form como parâmetro.<br/>
 * 2. Para obter o valor de um componente que se encontra em outro formulário, utilize a função "Obter Valor do <br/>
 * Componente do Formulário".<br/>
 * 3. Para obter o valor de um componente que se encontra em uma moldura, deve ser utilizada a função <br/>
 * "Executar Fluxo no Formulário" e apontar para um fluxo que chama esta função.
 */
function ebfFormGetComponentValue(form, com) {
  return $c(com, form).getValue();
}

/**
 * Retorna a altura(em pixels) do componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Altura do componente. (Inteiro)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Função que obtém o valor exibido na lista dinâmica.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente do tipo Lista Dinâmica.<br/>
 * 2. Componente Lista Dinâmica.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor que estiver no componente. (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfFormGetLookupName(form, com){
  try{
    var lk = $c(com);
    var idx = lk.value;
    return lk.showValue;
  }catch(e){
    throw "Não foi possível obter o valor do componente.";
  }
}

/**
 * A função retorna valor lógico "True" caso o componente passado pelo parâmetro esteja visível, ou "False" caso <br/>
 * contrário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que deseja obter o valor (Se está visível ou não).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna valor lógico "True" caso o componente passado esteja visível, ou "False" caso contrário. (Lógico)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário no de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do <br/>
 * tipo "formulário" para uma constante do tipo "Letras".
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
 * Obtém a largura(em pixels) do componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Largura do Componente. (Inteiro)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Esta função muda o modo do formulário para o modo de inserção.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formulário esteja em modo de navegação, após a função ser chamada, o formulário passará para o modo de inserção.<br/>
 * <br/>
 * Observações: <br/>
 * 1. O formulário que vai entrar em modo de alteração será o mesmo que chama o fluxo.<br/>
 * 2. O formulário deve estar com o modo de inclusão habilitado (Definições do Formulário) para que esta função tenha efeito.
 */
function ebfFormInsertMode()  {  
  if (d.n) {
    d.n.timeout(d.n.actInclude, 100);
  }
}

/**
 * A função obtém o estado do formulário no momento que o fluxo é chamado, retornando true(verdadeiro) caso <br/>
 * esteja em modo de navegação ou false(falso) caso contrário.<br/>
 * <br/>
 * Parâmetros<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formulário esteja em modo de navegação  ou "False" caso contrário. (Lógico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formulário está em modo de navegação no momento que o fluxo é chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observações: <br/>
 * 1. Não é necessário passar o nome do formulário. O formulário sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInBrowserMode()  {
  return (!ebfFormIsInInsertMode() && !ebfFormIsInEditMode());
}

/**
 * A função obtém o estado do formulário no momento que o fluxo é chamado retornando true(verdadeiro) caso <br/>
 * esteja em modo de alteração ou false(falso) caso contrário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formulário esteja em modo de alteração ou "False" caso contrário. (Lógico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formulário está em modo de alteração no momento que o fluxo é chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observações: <br/>
 * 1. Não é necessário passar o nome do formulário. O formulário sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInEditMode()  {
  return $mainform().edit;
}

/**
 * A função obtém o estado do formulário no momento que o fluxo é chamado, retornando true(verdadeiro) caso <br/>
 * esteja em modo de inserção ou false(falso) caso contrário.<br/>
 * <br/>
 * Parâmetros<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna "True" caso o formulário esteja em modo de inserção ou "False" caso contrário. (Lógico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que um formulário está em modo de inserção no momento que o fluxo é chamado. Neste caso, o <br/>
 * retorno seria "True".<br/>
 * <br/>
 * Observações: <br/>
 * 1. Não é necessário passar o nome do formulário. O formulário sempre vai ser o que chama o fluxo.
 */
function ebfFormIsInInsertMode()  {
  return $mainform().insert;
}

/**
 * Vai para a guia seguinte à corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Abre o formulário passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário a ser aberto (GUID).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetro a constante formulário "Form" ou a GUID do mesmo, a função irá abrir em outra <br/>
 * janela o formulário "Form".<br/>
 * <br/>
 * Observações:<br/>
 * Para abrir um formulário flutuante com ícone basta passar uma lista como parâmetro que contenha duas sublistas onde:<br/>
 * - O primeiro parâmetro da primeira lista deve ser "formGuid" e o segundo o GUID do formulário a ser aberto.<br/>
 * - O primeiro parâmetro da segunda lista deve ser "icon" e o segundo parâmetro a classe do ícone do formulário (ex "fas fa-home").<br/>
 * <br/>
 * Para definir cor ao ícone do formulário flutuante basta adicionar uma terceira sublista na lista do parâmetro onde:<br/>
 * - O primeiro parâmetro deve ser "iconColor" e o segundo parâmetro a cor do ícone, onde este pode ser um HEX da cor (ex #000000) ou qualquer outro tipo de valor possível para cores do CSS.<br/>
 * <br/>
 * Os ícones só são aplicados a formulários do tipo flutuante, ou seja, formulários cuja propriedade "Abrir em Modo Pop-up" seja falsa.
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
 * Esta função permite ativar e focar a aba descrita no primeiro parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Aba a ser ativada.<br/>
 * <br/>
 * Retorno: <br/>
 * A aba selecionada para regras cliente. Para regras servidor retorna Nulo. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetro a aba "Endereço"(Letras), quando o fluxo for executado a aba "Endereço" será <br/>
 * habilitada.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Atualiza o conteúdo do componente passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que será atualizado.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente, é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo . <br/>
 * 2. Caso não queira selecionar o formulário de trabalho no início do fluxo, digite o nome do componente no lugar do<br/>
 * parâmetro (ao invés de selecioná-lo).
 */
function ebfFormRefreshComponent(componentName) {
  if (!isNullable(componentName)) {
    var component = $c(componentName);
    component.timeout(component.refresh, 0);
  }
}

/**
 * Esta função altera a cor de fundo do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente cujo fundo mudará de cor.<br/>
 * 2. Nova cor de fundo do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o fundo do componente "MakerEdit1" passará a ser azul.<br/>
 * <br/>
 * Observações:<br/>
 * 1. No 2º parâmetro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor preta(000000).<br/>
 * 2. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo   .<br/>
 * 3. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Esta função altera a cor do conteúdo do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente cujo conteúdo mudará de cor.<br/>
 * 2. Nova cor do conteúdo do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o conteúdo do componente "MakerEdit1" passará a ser azul.<br/>
 * <br/>
 * Observações:<br/>
 * 1. No 2º parâmetro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor <br/>
 * preta(000000).<br/>
 * 2. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 3. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Esta função altera a cor de fundo do componente DIV.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente DIV cujo fundo mudará de cor.<br/>
 * 2. Nova cor de fundo do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e a cor Azul(0000FF), quando o fluxo for executado <br/>
 * o fundo do componente "MakerEdit1" passará a ser azul.<br/>
 * <br/>
 * Observações:<br/>
 * 1. No 2º parâmetro deve ser passado o hexadecimal correspondente a cor desejada, como por exemplo, a cor preta(000000).<br/>
 * 2. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 3. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Esta função habilita o componente se a condição passada no segundo parâmetro for verdadeira, ou desabilita <br/>
 * caso a condição seja falsa. Se o componente estiver desabilitado, não será possível modificar seu conteúdo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que será habilitado ou desabilitado (Letras).<br/>
 * 2. Condição para habilitar o componente (Lógico).<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade" (MakerEdit1), e uma condição lógica "Ano Atual= <br/>
 * 2000", quando a função for executada, caso o Ano atual seja 2000 o componente "MakerEdit1" será <br/>
 * habilitado, caso seja diferente de 2000 o campo será desabilitado.<br/>
 * 2. Assumindo como parâmetros o componente "Cidade"  (MakerEdit1), e uma condição lógica true, quando a <br/>
 * função for executada o componente sempre vai ser habilitado.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do <br/>
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
 * Essa função é utilizada para focar um determinado componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que vai ter o foco.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetro o componente "Cidade" (MakerEdit1), após essa função ser executada, o foco do <br/>
 * cursor estará neste componente passado como parâmetro.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário no de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do <br/>
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
 * Esta função altera a altura do componente do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que mudará de tamanho.<br/>
 * 2. Nova altura do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e o valor 100(inteiro), quando o fluxo for <br/>
 * executado a altura do componente passará a ser 100.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do <br/>
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
 * Função que altera o valor exibido na lista dinâmica.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente do tipo MakerLookup.<br/>
 * 2. Componente Lista Dinâmica.<br/>
 * 3. Novo valor que será exibido na lista dinâmica.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfFormSetLookupName(form, com, newValue){
  try{
    var lk = $c(com);
        lk.setShowValue(newValue);
  }catch(e){
    throw "Não foi possível Alterar o valor do lookup";
  }
}

/**
 * Esta função altera a posição do componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que mudará de posição.<br/>
 * 2. Nova posição X (Horizontal) do componente.<br/>
 * 3. Nova posição Y (Vertical) do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"(MakerEdit1), o valor 150 e o valor 250, quando o fluxo for executado a posição X do componente será 150 e a Y será 250.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Esta função define um campo/componente do formulário como Apenas Leitura. Caso o parâmetro seja <br/>
 * Verdadeiro, define Apenas Leitura. Caso contrário retira esta definição.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. O Componente que se deseja definir como Apenas Leitura.<br/>
 * 2. "True" para o componente se tornar Apenas Leitura. "False" para retirar tal propriedade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfFormSetReadonly(field, readonly) {
  var component = $c(field);
  if (component) {
    component.setReadOnly(readonly);
  }
}

/**
 * Esta função define se um ou mais componentes se tornarão obrigatórios ou não.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente ou lista de componentes.<br/>
 * 2. "True" para tornar obrigatório, "False" caso não.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Esta função mostra o componente se a condição passada no segundo parâmetro for verdadeira, ou oculta <br/>
 * caso a condição seja falsa. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que ficará visível ou oculto.<br/>
 * 2. Condição para mostrar o componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"  (MakerEdit1),  e uma condição lógica "Ano Atual= <br/>
 * 2000", quando a função for executada, caso o Ano atual seja 2000 o componente "MakerEdit1" ficará visível, <br/>
 * Caso seja diferente de 2000 o campo ficará oculto.<br/>
 * 2. Assumindo como parâmetros o componente "Cidade"  (MakerEdit1),  e uma condição lógica  false, quando a <br/>
 * função for executada o componente ficará oculto.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do <br/>
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
 * Esta função altera a largura do componente do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que mudará de tamanho.<br/>
 * 2. Nova largura do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o componente "Cidade"(MakerEdit1), e o valor 350 (inteiro), quando o fluxo for <br/>
 * executado a largura do componente passará a ser 350.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente mudando a constante do tipo <br/>
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
 * Esta função mostra ou oculta a aba a depender da condição lógica passada. Caso a condição seja verdadeira, <br/>
 * mostra a aba, caso seja falsa, oculta.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba.<br/>
 * 2. Condição Lógica para mostrar ou não a aba.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Caso um formulário esteja em modo de inserção, após a função ser chamada, o formulário passará para o <br/>
 * modo de alteração.<br/>
 * 2. A função apenas mostrará a ABA. Isso significa que a ABA não será ativada. Para isto utilize a função "Ativar <br/>
 * Aba".<br/>
 * <br/>
 * Observações:<br/>
 * 1. A aba passada como parâmetro deve estar no formulário que chama o fluxo.
 */
function ebfFormShowTab() {
  if (existArgs(arguments)) {
    mainform.d.t.setVisible(arguments[0], arguments[1]);
  }
}

/**
 * Função utilizada para alterar o índice de profundidade de um componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * 2. Novo índice<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Essa função modifica a formatação da data passada no primeiro parâmetro para a formatação passada no segundo parâmetro. <br/>
 * <br/>
 * Tipos de formatos:<br/>
 * yyyy - ano<br/>
 * MM - mês<br/>
 * w - semana do ano (soma das semanas (Somente camada servidor)).<br/>
 * W - semana do mês (soma das semanas (Somente camada servidor)).<br/>
 * D - dia do ano (soma dos dias)<br/>
 * dd - dia do mês (Somente camada servidor).<br/>
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
 * Parâmetros:<br/>
 * 1. Data que deseja formatar<br/>
 * 2. Formatação da data<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com a nova formatação.<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 01/04/2007 20: 32: 16, o 2º Parâmetro sendo dd/MM/yyyy K a, o retorno será 01/04/2007 8 PM.<br/>
 * 2. Assumindo que o 1º parâmetro seja 01/04/2007 20: 32:16, o 2º Parâmetro sendo dd/MM k:mm, o retorno será 01/04/2007 20:32
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
 * Formata um número de acordo com uma máscara.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Número<br/>
 * 2. Máscara<br/>
 * <br/>
 * Retorno:<br/>
 * Número formatado (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Deve ser seguido os padrões da classe. Para mais informações sobre as máscaras acesse:<br/>
 * http://java.sun.com/j2se/1.4.2/docs/api/java/text/DecimalFormat.html<br/>
 * 2. Caso o número passado seja uma dízima, é recomendado o arredondamento do mesmo para a quantidade de casas decimais da máscara utilizada.<br/>
 *   Ex: 17,60 x 100 = 1760.0000000000002<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Fecha um formulário aberto através da função "Abrir formulário numa moldura".<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Formulário onde se encontra o componente moldura.<br/>
 * 2. Nome do componente<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Função que abre um formulário numa moldura filtrado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente do tipo moldura.<br/>
 * 2. Componente do tipo moldura.<br/>
 * 3. Formulário que será aberto na moldura(GUID).<br/>
 * 4. Valor lógico que indica se a barra de rolagem deverá aparecer.<br/>
 * 5. Texto(Letras) indicando o filtro.<br/>
 * 6. Mostrar borda?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1º parâmetro "FORMULÁRIO" (Formulário), como 2º parâmetro "MOLDURA", 3º parâmetro <br/>
 * "CIDADE" (Formulário), 4º parâmetro "True" e 5º parâmetro "ESTADO=BAHIA", o resultado seria a abertura do <br/>
 * formulário "CIDADE" na moldura "MOLDURA", com barra de rolagem e somente com as cidades que <br/>
 * pertencem ao Estado Bahia.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função não deve ser utilizada para abrir numa moldura o mesmo formulário que a contém.<br/>
 * 2. Pode-se tipar o valor passando o formato <Valor>@<Tipo>, onde tipo pode ser: long, double, timestamp, <br/>
 * date e boolean, como por exemplo, "TAB_PESSOAS.CODIGO=100@long".<br/>
 * 3. As modificações feitas no formulário que será aberto na moldura, apenas serão visualizadas quando o <br/>
 * sistema é reiniciado.
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
 * Função que abre um formulário numa moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente do tipo moldura.<br/>
 * 2. Componente do tipo moldura.<br/>
 * 3. Formulário que será aberto na moldura.<br/>
 * 4. Valor lógico que indica se a barra de rolagem deverá aparecer.<br/>
 * 5. Mostrar borda?<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1º parâmetro o formulário "Form", 2º parâmetro a moldura(presente em "Form") "Moldura", 3º <br/>
 * parâmetro o formulário "Form Moldura" e como 4º parâmetro "True", será aberto na moldura "Moldura" o <br/>
 * formulário "Form Moldura" com barra de rolagem.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função não deve ser utilizada para abrir numa moldura o mesmo formulário que a contém.<br/>
 * 2. As modificações feitas no formulário que está em uma moldura, apenas serão visualizadas quando o sistema <br/>
 * for reiniciado, ou quando o formulário for atualizado manualmente.
 */
function ebfFrameOpenForm(form, componentName, formTarget, scrollbars, border){
  ebfFrameOpenFilteredForm(form, componentName, formTarget, scrollbars, null, border);
}

/**
 * Abre uma URL numa moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário da moldura.<br/>
 * 2. Nome do componente (moldura).<br/>
 * 3. URL.<br/>
 * 4. Barra de rolagem? (true para exibir e false para ocultar)<br/>
 * 5. Borda?  (true para exibir e false para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações: <br/>
 * 1. Para colocar um caracter & que esteja entre os dados do valor de um parâmetro de uma URL utilize a <br/>
 * combinação: %26 + &<br/>
 * 2. A URL deve possuir o protocolo "http://" antes do endereço www, caso contrário, será tratato como uma URL <br/>
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
 * Atualiza um formulário aberto através da função "Abrir formulário numa moldura".<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Formulário onde se encontra o componente moldura.<br/>
 * 2. Nome do componente (Moldura).<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * A função gera um GUID e o retorna.<br/>
 * GUID significa - Globally Unique Identifier (Identificador Único Universal). <br/>
 * Como não existem dois GUIDs idênticos, não importa quantos são gerados, eles servem para identificar de forma única<br/>
 * senhas, manipuladores, chaves, etc.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não Possui.<br/>
 * <br/>
 * Retorno:<br/>
 * GUID (Identificador Único Universal) gerado. (Variante)<br/>
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
 * Define a localização atual para uso posterior com as funções de Georreferenciamento. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nó onde será armazenada a posição (latitude e longitude)<br/>
 * 2. Chave <br/>
 * 3. Latitude<br/>
 * 4. Longitude<br/>
 * 5. Fluxo de callback (Opcional)<br/>
 * 6. Parâmetros Extra para o fluxo de callback (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
 */
function ebfGeoFireSetPosition(){}

/**
 * Esta função remove o monitoramento da área.<br/>
 * <br/>
 * Desta forma, quando um elemento entrar ou sair da área especificada, o fluxo associado anteriormente não será executado.<br/>
 * <br/>
 * Parâmetro(os):<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfGeoFireStopWatching(){}

/**
 * Monitora as atualizações que ocorrerem dentro de uma determinada área.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nó que será monitorado (onde são enviadas as atualizações de GPS)<br/>
 * 2. Latitude<br/>
 * 3. Longitude<br/>
 * 4. Raio (em KM)<br/>
 * 5. Fluxo que receberá os dados de monitoramento.<br/>
 *     O fluxo deverá deixar 1 parâmetro reservado para recebimento das atualizações. Será enviado um JSON com as seguintes<br/>
 *     chaves/informações.<br/>
 *     {<br/>
 *         "action": ""<br/>
 *         "latitude": 37.7832,<br/>
 *          "longitude": -122.4056 <br/>
 *     }<br/>
 * <br/>
 * 6. Lista de parâmetros extra para o fluxo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfGeoFireWatchArea(){}

/**
 * Obtém o Caminho Absoluto da Aplicação<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o caminho absoluto da aplicação. (Letras)
 */
function ebfGetAbsolutContextPath(){
    return getAbsolutContextPath();
}

/**
 * Obtém o elemento da árvore que está ativo no momento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore (Ver observação 2)<br/>
 * <br/>
 * Retorno:  <br/>
 * Elemento da árvore que está ativo. (Variante)<br/>
 * <br/>
 * Observação: <br/>
 * 1. Caso não haja objeto ativo, será retornado "false".<br/>
 * 2. A árvore pode ser obtida através da função "Obter Componente" da categoria Formulário.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfGetActiveElement(tree){	
  return tree.getActiveElement();	
}

/**
 * Obtém a referência do formulário no qual foi associado (ao evento do formulário) o fluxo de ação que contém <br/>
 * esta função.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Formulário. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetActualForm() {
  return $mainform();
}

/**
 * Esta função obtém a referência da janela do formulário aberto na moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Referência (DOM) da janela (Window) do formulário (Variante) da moldura.
 */
function ebfGetBevelWindowReferenceByGuid(formGUID, com) {
  var formRef = ebfGetWindowReferenceByGuid(formGUID);  
  if (formRef) {
    if (formRef.$c(com)) {    
      var iframe = formRef.$c(com).div.getElementsByTagName("iframe");      
      if (iframe) {      
        return iframe[0].contentWindow;
      }      
      throw "Não há nenhum formulário aberto na moldura";    
    }    
    throw "Formulário não encontrado";

  }  
  throw "Formulário não encontrado";
}

/**
 * Obtém o corpo (DOM: body) da página do JSP do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Corpo da página (Variante).
 */
function ebfGetBodyJSP(){
  return $mainform().parent.document.body;
}

/**
 * Obtem a Classe do objeto passado como parâmetro.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Objeto(qualquer tipo);<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o nome da classe do Objeto.<br/>
 *   Ex: Se o objeto passado como parâmetro for uma lista, o retorno será 'ArrayList'. (Camada Servidor)<br/>
 *         Se o objeto passado como parâmetro for uma lista, o retorno será 'array'. (Camada Cliente)<br/>
 * <br/>
 * Obervação(ões):<br/>
 * 1. Deve-se sempre ficar atento ao retorno na camada cliente, devido a cada browser ter suas peculiaridades o tipo de retorno pode mudar.
 */
function ebfGetClassObject(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

/**
 * Obtêm uma variável de um formulário, definida com a função Definir Variável de Formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da variável.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conteúdo da variável passada no primeiro parâmetro caso ela já exista. Caso ela ainda não tenha sido <br/>
 * definida, retorna Nulo. (Variante)<br/>
 * <br/>
 * Observações: <br/>
 * 1. Para obter uma variável de formulário é necessário antes definir essa variável utilizando a função "Definir <br/>
 * variável de formulário".
 */
function ebfGetClientFormVariable(name) {
  if (!$mainform().__storage) {
    $mainform().__storage = {};
  }
  return $mainform().__storage[name];
}

/**
 * Retorna uma lista contendo todos os componentes(e seus objetos) do formulário passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário.<br/>
 * <br/>
 * Retorno:<br/>
 * Lista de componentes do formulário. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o parâmetro seja nulo, a função retornará a lista de componentes do formulário corrente.<br/>
 * 2. Ao utilizar a função na camada cliente, os componentes da barra de navegação também serão listados independente da propriedade Navegação do Formulário.<br/>
 * 3. Para que os componentes da barra de navegação não sejam listados, é necessário desabilitá-los nas definições do formulário.
 */
function ebfGetComponentList(form) {
  if (form) { 
    return controller.getElementsByForm(form);
  } else {
    return controller.getAllElements();
  }  
}

/**
 * Obtém o valor da propriedade passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário (Opcional)<br/>
 * 2. Componente<br/>
 * 3. Propriedade<br/>
 * <br/>
 * Retorno: <br/>
 * Valor atual da propriedade<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2" e propriedade "AutoAjuste",  o retorno será o valor corrente desta propriedade.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Na camada servidor, caso o formulário não seja informado, a função adotará o formulário corrente. Na camada cliente,<br/>
 * sempre será o formulário corrente.<br/>
 * 2. O nome da propriedade deverá o nome real e não o de exibição.
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
 * Função que obtém o valor do componente desejado em qualquer formulário aberto.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente.<br/>
 * 2. Componente desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Conteúdo do campo passado como parâmetro. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função só irá funcionar caso exista algum parentesco entre os formulários.<br/>
 * 2. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do Sub <br/>
 * Form como parâmetro.<br/>
 * 3. Quando o formulário se encontra dentro de um componente moldura, deve-se utilizar a função "Executar Fluxo <br/>
 * no Formulário" apontando para um fluxo que obtêm o valor do componente.
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
         //Devido a algumas URL's não permitirem obter o ContentWindow  
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
           //Devido a algumas URL's não permitirem obter o ContentWindow
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
    throw 'Defina um formulário para obter o valor de um componente!';
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
        throw 'Componente não encontrado para o formulário escolhido!';
      }
    }
  } else {
    throw 'O Formulário cujo componente se deseja obter não está aberto!';
  }
}

/**
 * Obtém e retorna a posição horizontal (X) do componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que se deseja obter a posição horizontal(X).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posição horizontal do componente passado como parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formulário com um componente "Cidade" cuja posição horizontal é 150, assumindo como parâmetros <br/>
 * este componente ("Cidade") ,o retorno seria 150(Inteiro).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo   .<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente  mudando a constante do <br/>
 * tipo "formulário" para uma constante do tipo "Letras".
 */
function ebfGetComponenteXPosition(componente) {
  var comp = controller.getElementById(componente);
  if (comp) {
    return comp.getX();
  }
}

/**
 * Obtém e retorna a posição vertical (Y) do componente passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que se deseja obter a posição vertical(Y).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posição vertical do componente passado como parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formulário com um componente "Cidade" cuja posição vertical é 250, assumindo como parâmetros este <br/>
 * componente ("Cidade"), o retorno seria 250(Inteiro).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o componente é necessário indicar o nome do formulário de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do componente  mudando a constante do <br/>
 * tipo "formulário" para uma constante do tipo "Letras".
 */
function ebfGetComponenteYPosition(componente) {
  var comp = controller.getElementById(componente);
  if (comp) {
    return comp.getY();
  }
}

/**
 * Obtém o valor de um Cookie.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do cookie definido.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do Cookie. (Letras)<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Existe uma função "Definir Cookie" que permite criar e atribuir um valor a um cookie.
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
 * Esta função retorna a localização atual do dispositivo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Esta função retorna um JSON com as chaves: <br/>
 * "latitude", "longitude", "altitude", "accurancy", "heading", "speed" e "timestamp".<br/>
 * <br/>
 * Observação(ões):<br/>
 * Para a utilização dessa função, a função "GPS - Iniciar monitoramento" já deve ter sido utilizada.
 */
function ebfGetCurrentLocation(){
  alert("Disponível apenas no Maker Mobile");  
}

/**
 * Obtém a posição horizontal (relativa ao formulário atual) do cursor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Posição X do Cursor (Inteiro)
 */
function ebfGetCursorX() {
return $mainform().mX;
}

/**
 * Obtém a posição vertical (relativa ao formulário atual) do cursor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Posição Y do Cursor (Inteiro).
 */
function ebfGetCursorY() {
return $mainform().mY;
}

/**
 * Retorna uma lista com a descrição dos itens da lista principal do componente lista dupla<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribuída a uma variável do tipo variante.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
		throw "O componente não é Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com os valores dos campos chaves dos itens da lista principal do componente lista dupla<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribuída a uma variável do tipo variante.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
		throw "O componente não é Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com a descrição dos itens da lista dos selecionados do componente lista dupla<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribuída a uma variável do tipo variante.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
		throw "O componente não é Lista Dupla";
	
	
	return arrElements;
}

/**
 * Retorna uma lista com os valores dos campos chaves dos itens da lista dos selecionados do componente lista dupla<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Componente do tipo Lista Dupla<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma Lista que deve ser atribuída a uma variável do tipo variante.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
		throw "O componente não é Lista Dupla";
	
	
	return arrElements;
}

/**
 * Essa função busca e retorna o elemento, que deseja obter, a partir da sua posição na lista. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posição do elemento na lista que deseja obter<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento correspondente à posição, passada no 2º parâmetro, na lista. O retorno da função pode ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2º parâmetro seja 3. <br/>
 *     O retorno será "c", pois o elemento que está na posição 3 da lista é o "c".<br/>
 * 2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {2, 5, 8, 9}, o 2º parâmetro seja 1. O retorno será "2", pois o elemento que está na posição 1 da lista é o "2".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função busca e retorna o elemento, que deseja obter, a partir da sua posição na lista.  Caso a posição informada não exista, o retorno será "" (Vazio).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posição do elemento na lista que deseja obter<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento correspondente à posição, passada no 2º parâmetro, na lista. O retorno da função pode ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2º parâmetro seja 3. O retorno será "c", pois o elemento que está na posição 3 da lista é o "c".
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
 * Esta função obtém o elemento HTML a partir do nó passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Elemento da Árvore<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento HTML do elemento (Variante)
 */
function ebfGetElementIdByReference(elementVar) {
  if (elementVar) return elementVar.div;
}

/**
 * Esta função obtém a referência da DIV gerada ao abrir uma instância de um formulário flutuante.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Nome da Janela (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do elemento HTML (Variante)<br/>
 * <br/>
 * Observação:<br/>
 * 1. Utilizar após a função Abrir URL Numa Janela Flutuante para obter a DIV.
 */
function ebfGetFloatingFormDivById(name){
  return $mainform().getFloatingFormDivById(name);
}

/**
 * Função que obtém o ID do componente em foco.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Nome do Componente em Foco. (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetFocusedComponent(){
   if(controller && controller.activeElement)
     return controller.activeElement.id;
}

/**
 * Obtém a janela(instância) do formulário definido no parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. GUID do Formulário.<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Formulário. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. O formulário deve está aberto no momento da execução da função.<br/>
 * 2. Esta função só irá funcionar caso exista algum parentesco entre os formulários.
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
 * A função retorna o código do formulário chamado no fluxo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o código do formulário que chama o fluxo. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o formulário "Cadastro" chama o fluxo, o retorno seria o código deste formulário.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetFormID() {
  var formID = ($mainform().d.WFRForm ? $mainform().d.WFRForm.formID.value : null);  
  return formID;
}

/**
 * A função retorna o Código (ou sigla) do sistema atual em que o fluxo está sendo executado.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o código (ou sigla) do sistema utilizado. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Se o fluxo for executado no "Sistema de Contabilidade Pública", que tem como sigla "CTP", a função retornará <br/>
 * "CTP".<br/>
 * <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso existam mais de um sistema com a mesma sigla na pasta systems, esta função retornará o Sigla do sistema com<br/>
 * instância. Ex.: CTP_SISTEMA02
 */
function ebfGetFullSystemID() {
  return d.WFRForm.sys.value.toString();
}

/**
 * Obtém as coordenadas do dispositivo móvel que possui GPS.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo que será executado caso as coordenadas sejam obtidas com sucesso;<br/>
 * 2. Fluxo que será executado caso haja algum erro durante a execução da função;<br/>
 * <br/>
 * O fluxo informado no primeiro parâmetro deverá possuir um parâmetro de entrada do tipo Variante. A função enviará<br/>
 * automaticamente para o fluxo um mapa com as seguintes chaves "longitude", "latitude", "altitude", "accuracy", <br/>
 * "altitude accuracy", "heading", "speed", "Timestamp".<br/>
 * <br/>
 * O fluxo informado no segundo parâmetro deverá possuir um parâmetro de entrada do tipo Letras. A função enviará<br/>
 * automaticamente para o fluxo o erro encontrado na tentativa de obtenção das coordendas.<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.
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
 * Obtém o GUID do formulário no qual foi associado (ao evento do formulário) o fluxo de ação que contém esta função.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Letras (GUID do Formulário)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetGUIDActualForm() {
  return $mainform().formGUID;
}

/**
 * Obtém o ID do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Deve ser utilizada a função Obter Formulário Atual ou Obter Janela do Formulário, pois este parâmetro espera a referência do formulário.<br/>
 * <br/>
 * Retorno:<br/>
 * ID do Formulário. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetIdForm(formActual) {

    return formActual.idForm;
	
}

/**
 * Esta função obtém um objeto JSON e retorna o seu conteúdo em forma de texto<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto.<br/>
 * 2. Número de espaços para formatação (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Texto JSON.<br/>
 * <br/>
 * Observação (ões):<br/>
 * 1. Na camada servidor o segundo parâmetro quando informado sempre aplicará a formatação "Pretty" para o text JSON.
 */
function ebfGetJSONText(object, space) {
  return JSON.stringify(object, null, space);
}

/**
 * Essa função obtém a lista de chaves do objeto JSON passado no primeiro parâmetro.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Objeto JSON<br/>
 * <br/>
 * Retorno:<br/>
 * Lista contendo as chaves.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".<br/>
 * <br/>
 * Exemplo(s):<br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetro um objeto JSON criado a partir do Texto {"Versão":"3.9","empresa":"Softwell"}, ao chamar a função "JSON - Obter Lista de Chaves" o retorno será um objeto Lista com os valores "Versão" e "empresa".
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
 * Obtém o valor da variável local criada através da função "Definir Variável Local".<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Nome da variável.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor da variável local definida no formulário.
 */
function ebfGetLocalVariable(varName) {
  return top.document[varName];
}

/**
 * Essa função retorna o status de permissão de notificação.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui;<br/>
 * <br/>
 * Retorno:<br/>
 * Status (Letras);<br/>
 * <br/>
 * Observações:<br/>
 * 1. O tipo de retorno pode ser:<br/>
 *   1.1 "granted" permissão concedida.<br/>
 *   1.2 "denied" permissão negada.<br/>
 *   1.3 "default" requer solicitação de permissão (Utilizar a função "Notificação - Solicitar Permissão").
 */
function ebfGetNotificationStatus(){
  return Notification.permission;
}

/**
 * Obtém a referência do formulário a partir do qual um outro formulário foi aberto; normalmente abertos através de <br/>
 * botões, dentre outros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Utilize a função "Obter Formulário Atual".<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Formulário a partir do qual um formulário foi aberto. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetOpenerForm(formActual) {
  return getOpenerWindow(formActual).$mainform();
}

/**
 * Obtém a referência do formulário a partir do qual um outro formulário foi aberto; normalmente aberto na moldura de um formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Utilize a função "Obter Formulário Atual".<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Formulário a partir do qual outro formulário foi aberto. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfGetParentForm(formActual) {
  return formActual.parent.parent.$mainform();  
  //Anterior return formActual.top.parent.$mainform();
}

/**
 * Obtém o elemento raiz da árvore passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Árvore (Ver observação 1).<br/>
 * <br/>
 * Retorno:  <br/>
 * Raiz da árvore (Variante).<br/>
 * <br/>
 * Observação (ões):<br/>
 * 1. A árvore pode ser obtida através da função "Obter Componente" da categoria Formulário.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfGetRoot(tree){	
  return tree.getRoot();	
}

/**
 * Obtém o nome do fluxo em que a função se encontra.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Nome do fluxo. (Letras)
 */
function ebfGetRuleName() {
  return this.getRuleName();
}

/**
 * Função para Obter Nome da Aba Ativa<br/>
 * <br/>
 * Parâmetros:<br/>
 * Nenhum<br/>
 * <br/>
 * Retorno:<br/>
 * Nome da Aba Ativa (Letras)<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfGetSelectTabStringName() {
  var a = ebfSelectedTab();
  return a.description;
}

/**
 * Obtém o conteúdo da variável criada pela função "Definir variável de sessão" passando no 1º parâmetro o nome da<br/>
 * variável e no 2º parâmetro o valor lógico verdadeiro ou falso, indicando se é ou não uma variável global. Para variáveis<br/>
 * globais usa-se verdadeiro, para não globais usa-se falso.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Variável<br/>
 * 2. Valor Lógico.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conteúdo da variável passada no primeiro parâmetro caso ela já exista. Caso ela ainda não tenha sido definida,<br/>
 * retorna nulo. (Variante)<br/>
 * <br/>
 * Observação(ões)<br/>
 * Para obter uma variável de sessão é necessário antes definir essa variável utilizando a função "Definir variável de sessão" <br/>
 * da categoria Utilitários.<br/>
 * <br/>
 * Exemplos: <br/>
 * Assumindo como parâmetros "Contador" (Letras) e verdadeiro (Lógico). Se existir uma variável global com o nome <br/>
 * "Contador" o retorno seria o conteúdo dessa variável. Caso não exista, o retorno seria nulo.
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
 * Esta função retorna o diretório de Skins que está sendo utilizado pelo sistema.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Diretório da Skin (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * 1. O diretório retornado é o caminho relativo a aplicação.
 */
function ebfGetSkinFolder() {
  return $mainform().skin;
}

/**
 * A função retorna o Código do sistema atual em que o fluxo está sendo executado.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o código do sistema utilizado. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Se o fluxo for executado no "Contas a Pagar", que tem como sigla "CAP", a função retornará <br/>
 * "CAP".<br/>
 * <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Essa função não retorna a SIGLA com instância  caso exista mais de um sistema com a mesma sigla. Se for necessário obter a SIGLA com instância, utilize a função Sigla do Sistema.
 */
function ebfGetSystemID() {
  var system = ($mainform().d.WFRForm ? $mainform().d.WFRForm.sys.value : $mainform().sysCode);
  return system.toString().substring(0, 3);
}

/**
 * Esta função obtém a referência do elemento HTML da aba passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Aba (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência da Aba (Variante)
 */
function ebfGetTabDivByName(tabName) {
  var tab = $mainform().d.t.getTabByName(tabName);
  if (tab) {
    return tab.div;
  }
}

/**
 * Esta função retorna uma lista com o nome das abas (incluindo as abas criadas dinamicamente) do formulário em execução. <br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
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
 * Recebe uma data como parâmetro e obtém os milissegundos da data desde 1970.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Milisegundos.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso não seja informada a data, a função retornará os milissegundos da data atual
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
 * Essa função calcula a quantidade de milissegundos do ano de 1970 até o dia atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a quantidade de milissegundos. (Variante)
 */
function ebfGetTimeSince70() {
  var date = new Date();
  return date.getTime();
}

/**
 * Retorna em qual plataforma o aplicativo está sendo executado<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * iOS ou Android
 */
function ebfGetTypePlatform(){
  return "";
}

/**
 * Essa função obtém o valor de um elemento de acordo a chave passada no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor da Chave ou Nulo caso não exista.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro um objeto JSON criado a partir do Texto {"Versão":"3.9","empresa":"Softwell"}, ao chamar a função "JSON - Obter Valor" e passar como chave "empresa" (sem aspas), o retorno será "Softwell" (sem aspas).
 */
function ebfGetValueObjectJson(objectJSON, key){
  if(objectJSON){     
    return objectJSON[key];    
  }else{  
    return null;
  }
}

/**
 * Retorna a versão atual do Webrun.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Versão do webrun. (Letras)
 */
function ebfGetWebrunVersion(){
  return VERSION;
}

/**
 * Esta função obtém a referência da janela do formulário informado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Levantar Exceção? (Caso o formulário não encontrado).<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Referência (DOM) da janela (Window) do formulário (Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função não dá suporte a formulários com as propriedades "Popup = SIM" e "Modal = SIM".<br/>
 * 2. Esta função obtém apenas formulários abertos em forma de janela (Popup Sim ou Não). Para obter formulários na<br/>
 * moldura, utilize a função "Obter Formulário da Moldura".
 */
function ebfGetWindowReferenceByGuid(formGUID, throwException) {
  var topLevel = isPrincipal ? principal : $mainform().parent.principal;  
  var foundWindow;  

  //Formulário foi atualizado. Obter do pai  
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
  //Não encontrou 
  if(throwException == undefined || throwException){ 
    throw "Formulário não encontrado";    
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
 * Calcula a média de valores contidos em uma coluna. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Formulário<br/>
 * 2. Nome da Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Média entre os valores referente ao campo informado (Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-rá a Média entre os valores encontrados na grade. <br/>
 * 1.2 Quando estiver usando a "paginação" será retornado a média da coluna e da página em questão/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não). <br/>
 * <br/>
 * 3. Modo de Inserção/Alteração<br/>
 * 3.1 Caso a função venha a ser usada com o formulário estando no modo de inserção ou alteração, <br/>
 * deverá ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3 parâmetro<br/>
 * seja o campo PIB(Produto Interno Bruto), será retornado a média dos valores de uma coluna.
 */
function ebfGridAVGColumn(form, grid, column) {
  var sum = 0;
  var total = 0;
  var avg = 0;
  var gridName = grid;  
  var grid = $c(grid);  
  if (!grid) {
    handleException(new Error("Componente " + gridName + " não encontrado"));
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
 * Adiciona uma coluna na Grade, informando o nome da grade e o nome da coluna que será adicionada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna a ser adicionada.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridAddColumn(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  //grid.addColumn(column);  
  grid.timeout(grid.addColumn, 0, [column]);
}

/**
 * Essa função habilita o filtro avançado para o componente grade que não seja editável.<br/>
 *  Parâmetros:<br/>
 *  1. Formulário.<br/>
 *  2. Nome do componente.<br/>
 *   <br/>
 *  Retorno:<br/>
 *  1. Não possui.<br/>
 *   <br/>
 *   Exemplo:<br/>
 *   1. Assumindo como parâmetros:<br/>
 *     Formulário = "Cidades"<br/>
 *     Nome do Componente = "MakerGrid1"
 */
function ebfGridAdvancedFilter (form, comp) {
  const grid = $c(comp);  
  if(!grid){
    handleException(new Error("Componente " + comp + " não encontrado"));
    return;
  } else {
    if (!grid.enableSimpleFilter)   
      grid.enableSimpleFilter = true;    
    gridAdvancedFilter(comp); 
  } 
};

/**
 * Altera a posição da barra de rolagem Horizontal em relação à extremidade esquerda da grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade.<br/>
 * 3. Posição da Barra de Rolagem.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Altera a posição da barra de rolagem Vertical em relação ao topo da grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade.<br/>
 * 3. Novo valor da distância da barra vertical.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridCloseAllGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.closeAllGroups();
}

/**
 * Fecha um grupo passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o próprio Objeto do grupo, obtido através de regras de <br/>
 * negócio.<br/>
 * 2. Fecha apenas grupos presentes da raiz, ou seja, subgrupos não são fechados. <br/>
 * Ex: Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
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
    throw "Componente "+grid+" não encontrado"; 
  grid.closeGroup(group);
}

/**
 * Essa função retorna o código da coluna. Informando a Grade e o nome da coluna que deseja saber o código.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o código da coluna.(Inteiro) <br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Cadastro de Produtos" e o Nome da Coluna sendo: "Descrição do Produto".<br/>
 * O retorno será o Código da coluna  "Descrição do Produto".
 */
function ebfGridColumnCode(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.getColumnCode(column);
}

/**
 * Cria relação de dependência entre duas grades.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Grade Pai (Mestre)<br/>
 * 2. Grade Filha<br/>
 * 3. Filtro de ligação no formato: <br/>
 * <Tabela da Grid Filha>.<Campo 1 da Grid Filha>=<Campo da Grid Master><br/>
 * [;<Tabela da Grid Filha>.<Campo 2 da Grid Filha>=<Campo da Grid Master>[;<Tabela da Grid Filha>.<br/>
 * <Campo N da Grid Filha>=<Campo da Grid Master>]]. <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1) TB_FILHA.CAMPO_FILHA=CAMPO_MASTER<br/>
 * 2) TB_CIDADE.COD_PAIS=COD_PAIS<br/>
 * 3) TB_CIDADE.COD_PAIS=COD_PAIS;TB_CIDADE.COD_CIDADE=COD_CIDADE<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridCreateDependence(grid1, grid2, filter) {
  $c(grid1).gridSelectRowMaster = true;
  $c(grid1).addDependentGrid(grid2, filter);
}

/**
 * Volta ao modo de navegação da grade editável se ela estiver em modo de inserção ou em modo de edição.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da grade <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A grade precisa estar em um modo diferente de navegação.
 */
function ebfGridEditableCancel(componentName) {
  var component = $c(componentName);
  if (component instanceof HTMLGrid) { 
    component.timeout(component.cancel, 0);  
  }
}

/**
 * Exclui o registro selecionado da grade editável passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 *  1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 *  1. O registro a ser excluída, precisa estar previamente selecionada.
 */
function ebfGridEditableDeleteRow(grid) {
	  var grid = $c(grid);
	  if (!grid)
	    throw "Componente "+grid+" não encontrado"; 
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
 * Entra em modo de edição com a grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 *  1. Só funciona se a grade não estiver em modo de inserção<br/>
 *  2. A grade precisa estar com uma linha selecionada, caso contrario, entrará em modo de edição com a primeira linha.
 */
function ebfGridEditableEdit(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " não encontrado";
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
 * Entra em modo de inserção com a grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Ela não pode estar em modo de edição
 */
function ebfGridEditableInclude(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " não encontrado";
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
 * Parâmetros:<br/>
 * 1. Nome da grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A grade precisa ser editável e estar no modo de inserção ou edição no momento em que a função for chamada.
 */
function ebfGridEditablePost(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.post();
}

/**
 * Essa função habilita a opção do usuário realizar a múltipla seleção de linhas no componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente (Letras).<br/>
 * 2. Permitir (Lógico).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para realizar a múltipla seleção de linhas é necessário pressionar a tecla CTRL.<br/>
 * 2. Para obter o conteúdo das linhas, utilizar a função "Grade - Obter Linhas Selecionadas".
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
 * Parâmetros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Habilitar?.(Lógico)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação: <br/>
 * Não possui.
 */
function ebfGridEnableOrDisableGroup(grid, enable) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";     

  return grid.enableOrDisableGroup(enable); 
}

/**
 * Esta função exporta dados uma grade de acordo com o formato passado no último parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém a grade<br/>
 * 2. Componente Grade<br/>
 * 3. Formato de Exportação<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Só será possível a exportação dos seguintes formatos:<br/>
 *     "XLS" - Excel<br/>
 *     "HTML" - Html<br/>
 *     "JSON" - Json<br/>
 *     "LST" - Listagem<br/>
 *     "PDF" - PDF<br/>
 *     "TXT" - Texto<br/>
 *     "XML" - XML<br/>
 * 2. Assumindo o terceiro parâmetro PDF, será exportado os resultados da grade em formato PDF.
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
 * Essa função preenche uma grade a partir de um objeto JSON.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém a grade<br/>
 * 2. Componente grade a ser alterado<br/>
 * 3. Lista de JSON do cabeçalho (Ver observação).<br/>
 * 4. Lista de JSON contendo os valores a serem adicionados na grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. No parâmetro 4, cada linha da grade corresponde a um JSON dentro da lista.<br/>
 * 2. Após preencher a grade com esta função, não é permitido entrar em modo de inserção/edição ou gravar/excluir os registros.<br/>
 * 3. Não é possível ordenar a grade com a funcionalidade Shift + Duplo-Clique na coluna após o uso desta função.<br/>
 * 4. Chaves do JSON cabeçalho:<br/>
 *    name: identificador da coluna. Obrigatório.<br/>
 *    title: descrição da coluna. Obrigatório.<br/>
 *    width: largura da coluna. Valor padrão: divisão por igual do espaço disponível.<br/>
 *    type: tipo da coluna. Valor padrão: text.<br/>
 *    align: alinhamento da coluna. Valor padrão: left<br/>
 *    visible: define se a coluna pode ser ocultada. Valor padrão: false<br/>
 * 5. Os valores possíveis para alinhamento(align) das colunas são: center, left e right. <br/>
 * Exemplos:<br/>
 * <br/>
 * JSON cabeçalho:                                JSON conteudo<br/>
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
 * Filtra um componente grade de acordo com a condição passada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Grid a ser filtrada<br/>
 * 2. Filtro de ligação no formato: <Tabela da Grid>.<Campo 1 da Grid>=<Valor>[;<Tabela da Grid>.<Campo 2 da Grid >=<valor><br/>
 * [;<Tabela da Grid>.<Campo N da Grid>=<valor>]]. <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O único operador que pode ser utilizado como filtro é o operador "=" (igual).<br/>
 * 2. Para utilizar tipos específicos de dados como data, o valor deve ser concatenado com algumas constantes.<br/>
 * Os tipos possíveis são: long, double, boolean, date, timestamp.<br/>
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
    handleException(new Error("Componente " + grid + " não encontrado"));
    return;
  }
  if (comp.isFiltered)
    comp.iscCanvas.clearCriteria();
  comp.filter(filter);  
  comp.actRefresh = true;
}

/**
 * Essa função encontra a posição da coluna na grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a posição da coluna. Se a coluna for a primeira da Grade retorna o valor 0, se for a segunda retorna 1 <br/>
 * e assim sucessivamente. (Inteiro)<br/>
 * <br/>
 * Observações: <br/>
 * 1. A numeração das colunas começam de 0 à N.<br/>
 * 2. Caso a coluna não seja encontrada, será retornado o valor -1.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade é "Lista de Produtos" e o nome da coluna sendo "Informática". Passando esses <br/>
 * parâmetros, será  verificado em que posição a coluna "Informática"  está na grade "Lista de Produtos".
 */
function ebfGridFindColumn(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";
  try {   
    return grid.findColumn(column);
  } catch(e) {
    return -1;
  }  
}

/**
 * Essa função tem como objetivo congelar uma coluna da grade de acordo com os valores passados por parâmetros.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Formulário (Formulário)<br/>
 * 2. Grade (Componente)<br/>
 * 3. Coluna (Letras)<br/>
 * 4. Congelar? (Lógico)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Quando informado o valor lógico falso no quarto parâmetro, a coluna será descongelada.
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
 * Essa função retorna um valor inteiro que identifica o estado do componente CheckBox na Grade, a partir da informação <br/>
 * da linha e a coluna que deseja obter o valor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Número da Linha<br/>
 * 3. Nome da Coluna que se encontra o componente CheckBox<br/>
 * <br/>
 * Retorno: <br/>
 * Número referente ao valor do check (Inteiro)<br/>
 * <br/>
 * Observação(ões): <br/>
 * Os Valores possiveis são: 0 -> Desmarcado 1 -> Marcado 2 -> Neutro.
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
 * Essa função obtém informações do cabeçalho do componente grade informado por parâmetro.<br/>
 *  <br/>
 * Parâmetros:<br/>
 *  1. Formulário<br/>
 *  2. Componente.<br/>
 *  <br/>
 * Retorno:<br/>
 *  1. Objeto JSON com as informações do cabeçalho.<br/>
 *  <br/>
 * Observação:<br/>
 *  1. O objeto JSON retornado estará no formato JSONArray.<br/>
 *  2. Caso a propriedade "Habilitar Coluna Numérica" esteja defina como "true" essa também será retornada na posição 0 (zero);
 */
function ebfGridGetHeaderInfo (form, comp) {
  let grid = $c(comp);
  if(!grid) {
    handleExceptiton(new Error("O componente " + comp + "não encontrado."));
    return;
  }
  return grid.iscCanvas.getFields();
}

/**
 * Obtém os grupos que estão visíveis na grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna uma lista contendo o nome de todos os grupos visíveis na grade.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Obtem apenas os nomes dos grupos da raiz, ou seja, subgrupos não são obtidos. <br/>
 * Ex: Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
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
 * Apenas os valores "grupo1" e "grupo2" vão ser retornados.
 */
function ebfGridGetNameGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.getNameGroups();
}

/**
 * Função que retorna qual é o primeiro elemento real da grade, já que a mesma pode ter paginada e não estar mais na<br/>
 * página inicial.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o primeiro elemento real da grade (inteiro)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridGetOffset(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.gridini;
}

/**
 * Esta função retorna a página atual da grade informada como parâmetro.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Componente Grade;<br/>
 * <br/>
 * Retorno:<br/>
 * A posição atual da paginação do componente 'Grade' informado.(Inteiro)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridGetPagingPosition(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";
  return (Math.ceil(toDouble(grid.gridini / grid.pagingSize))) + 1;    
}

/**
 * Obtem o nome real de uma coluna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade<br/>
 * 2. Nome da coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o nome real da coluna passada como parâmetro.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridGetRealNameColumn(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.getRealNameColumn(column);
}

/**
 * Essa função retorna todos os registros contidos em um grupo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observação 1)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna uma lista de objetos JSON referente aos registros contidos no grupo.<br/>
 * <br/>
 * Observação: <br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o próprio Objeto do grupo, obtido através de regras de negócio.
 */
function ebfGridGetRecordsInGroup(grid, group) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";     

  return grid.getRecordsInGroup(group); 
}

/**
 * Função que retorna a distância em pixels da barra de rolagem no sentido horizontal.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a grade.<br/>
 * 2. Nome do componente do tipo grade cuja distância da barra de rolagem do topo se deseja obter.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a posição em pixel referente a barra de rolagem no sentido horizontal. (Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridGetScrollLeftValue(form, com){
  if (com)  
    return $c(com).getHorizontalScrollPosition();    
  return null;
}

/**
 * Função que retorna a distância em pixels da barra de rolagem no sentido vertical<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a grade<br/>
 * 2. Nome do componente do tipo grade<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a posição em pixel referente a barra de rolagem no sentido vertical. (Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridGetScrollTopValue(form, com){
  if (com)  
    return $c(com).getVerticalScrollPosition();    
  return null;
}

/**
 * Essa função retorna as informações das linhas selecionadas ou apenas o index das linhas.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Nome do Componente (Letras).<br/>
 * 2. Somente Índices? (Lógico)(Ver observação 2)<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Lista de JSON com informações ou lista de índices (Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para que essa função tenha o correto funcionamento o componente deve permitir a seleção de múltiplas linhas, que pode ser habilitado por meio da função "Grade - Permitir Múltipla Seleção de Linhas".<br/>
 * 2. Quando informado o valor como verdadeiro para o segundo parâmetro a função retornará uma lista com os índices das linhas selecionadas, quando falso retornará uma lista de JSON com informações das linhas.
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
 * Essa função retorna o número da linha selecionada na grade. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o número da linha selecionada.(Inteiro) <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A numeração das colunas começam de 0 à N.<br/>
 * 2. Caso nenhuma linha esteja selecionada, será retornado o valor -1.<br/>
 * 3. Caso a paginação esteja ativa, será retornado o número da linha da paginação ativa.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade é  "Sistemas". Passando esse parâmetro, ao selecionar alguma linha da Grade <br/>
 * "Sistemas", o retorno será o número da linha selecionada.
 */
function ebfGridGetSelectedRow(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.getSelectedRow();
}

/**
 * Obtém o grupo referente ao nome passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o objeto do grupo(JSON).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O retorno dessa função não suporta a conversão para letras.<br/>
 * 2. Obtém apenas grupos contidos na raiz, ou seja, subgrupos não são obtidos. <br/>
 * Ex: Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
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
    throw "Componente "+grid+" não encontrado"; 
  return grid.getSpecificGroup(group);
}

/**
 * Função que retorna estado da grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde o componente do tipo grade se encontra;<br/>
 * 2. Componente do tipo grade.<br/>
 * <br/>
 * Retorno:<br/>
 * "edição"    - se a grade estiver em modo de edição.<br/>
 * "inserção" - se a grade estiver em modo de inserção.<br/>
 * "normal"    - se estiver em modo normal.(Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridGetStatus(form, com){

  var grid = $c(com);
  if(!grid){
    throw "O componente passado é nulo!"
  }
  if(!(grid instanceof HTMLGrid)){
    throw "O componente passado por parâmetro não é uma grade!"
  }
  
  if(grid.inserting){
    return "inserção";
  }

  if(grid.editing){
    return "edição";
  }
  
  return "normal";
}

/**
 * Essa função retorna o valor que está na Grade, a partir da informação da linha<br/>
 *  (a primeira linha da Grade é a linha "0" (zero)) e a coluna que deseja obter o valor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade<br/>
 * 2. Número da Linha (N-1)<br/>
 * 3. Nome da Coluna<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido em uma determinada linha do componente. (Letras)<br/>
 * <br/>
 * Observação: O primeiro parâmetro desta função também pode ser modificado para a "Constante" do tipo "Letras",<br/>
 * sendo informado manualmente o nome do componente "Grade".<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.  Assumindo que o componente grade sendo "Grade de Cidades", o número da linha sendo 0(zero) <br/>
 * e o nome da coluna sendo"PIB"(Produto Interno Bruto). O retorno será o valor que está na linha 0 da coluna "PIB" <br/>
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
 * Obtem um valor específico no sumário da Grade, a partir da informação do nome da coluna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Nome da Coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido do sumário da grade.<br/>
 * <br/>
 * Observação: <br/>
 * 1.È necessário habilitar Exibir Sumário Geral nas opções de Agrupamento.
 */
function ebfGridGetValueInSummary(grid, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";     

  return grid.getValueInSummary(column); 
}

/**
 * Obtém um valor específico no sumário de um grupo, a partir das informações fornecidas à função.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observação 1)<br/>
 * 3. Nome da Coluna na qual se deseja obter a sumarização.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor obtido do sumário de um grupo.<br/>
 * <br/>
 * Observação: <br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o próprio Objeto do grupo, obtido através de regras de negócio.<br/>
 * 2. Ao passar um Objeto, a sumarização vai respeitar os dados contidos nesse Objeto.
 */
function ebfGridGetValueInSummaryGroup(grid, group, column) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";     

  return grid.getValueInSummaryGroup(group, column); 
}

/**
 * Esta função navega até a posição da página informada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade;<br/>
 * 2. Nova Posição da Página.<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Necessário definir a paginação nas propriedades do componente.
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
 * Agrupa a grade a partir de uma coluna, informando o nome da grade e o nome da coluna que será agrupada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna a ser agrupada.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Ao passa uma coluna para ser agrupada e a mesma já constar no agrupamento, a operação vai ser ignorada.<br/>
 * 2. Ao utilizar essa função, a mesma vai levar em consideração a propriedade 'Múltiplos Grupos'.
 */
function ebfGridGroup(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.group(column);
}

/**
 * Essa função acrescenta uma linha na grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
 */
function ebfGridInsertRow(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.includeNewRow();
}

/**
 * Essa função acrescenta uma linha na grade e não dá refresh na grid, o que aumenta o desempenho.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A linha inserida apenas poderá ser visualizada se for utilizada a função "Grade - Dar Refresh" posteriormente.
 */
function ebfGridInsertRowWithoutRefresh(gridName) {
  var grid = $c(gridName);
  if (!grid) throw "Componente " + gridName + " não encontrado";

  grid.includeNewRow(true);
}

/**
 * Retorna se existe agrupamento na grade ou não.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor lógico referente à existência do agrupamento.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridIsGrouped(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";    
  return grid.isGrouped();
}

/**
 * Obtém o máximo valor de uma coluna. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está localizada a grade.<br/>
 * 2. Nome do componente Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor máximo referente ao campo informado (Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-rá o MÁXIMO valor encontrado apenas dos dados visualizados na grade. <br/>
 * 1.2 Quando estiver usando a "paginação" será retornado o valor da pagina em questão/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não). <br/>
 * 2.2 O retorno será do tipo 'Fracionado'. Independente se o campo for do tipo inteiro ou numérico.<br/>
 * <br/>
 * 3. Modo de Inserção/Alteração<br/>
 * 3.1 Caso a função venha a ser usada com o formulário estando no modo de inserção ou alteração, <br/>
 * deverá ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3 parâmetro<br/>
 * seja o campo PIB(Produto Interno Bruto), será retornado o maior PIB encontrado.
 */
function ebfGridMaxColumn(form, grid, column) {
  var valor = 0;
  var maximo = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){ 
    handleException(new Error("Componente " + gridName + " não encontrado"));
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
 * Obtém o menor valor de uma determinada coluna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Formulário<br/>
 * 2. Nome da Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor mínimo referente ao campo informado (Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-rá o mínimo valor encontrado na grade. <br/>
 * 1.2 Quando estiver usando a "paginação" será retornado o mínimo valor da coluna e da página em questão/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 A verificação dos valores é feita em todos os registros da grid (podendo estes estarem paginados ou não). <br/>
 * 2.2 O retorno sempre será um valor fracionado.<br/>
 * <br/>
 * 3. Modo de Inserção/Alteração<br/>
 * 3.1 Caso a função venha a ser usada com o formulário estando no modo de inserção ou alteração, <br/>
 * deverá ser usado um fluxo na camada cliente para que se obtenha o resultado desejado.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3 parâmetro<br/>
 * seja o campo PIB(Produto Interno Bruto), será retornado o mínimo valor da coluna desejada.
 */
function ebfGridMinColumn(form, grid, column) {
  var valor = 0;
  var minimo = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid) {
    handleException(new Error("Componente " + gridName + " não encontrado"));
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
 * Parâmetros:<br/>
 * 1. Formulário onde está localizada a grade.<br/>
 * 2. Componente grade a ser alterado.<br/>
 * 3. Lista com os nomes das colunas que terão a largura modificada.<br/>
 * 4. Lista contendo os valores da largura das colunas.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridModifyColumnsWidth(formName, gridName, columnList, widthList) {
  var grid = $c(gridName);
  if(!grid){
    handleException(new Error("Componente "+gridName+" não encontrado"));
    return;
  }
  grid.setSizeColumns(columnList, widthList);
}

/**
 * Expande todos os grupos e subgrupos existentes na Grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGridOpenAllGroups(gridName) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.openAllGroups();
}

/**
 * Expande um grupo passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome do Grupo ou Objeto do Grupo.(Ver Observação 1)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Pode ser passado tanto o nome referente ao grupo, quanto o próprio Objeto do grupo, obtido através de regras de <br/>
 * negócio.<br/>
 * 2. Expande apenas grupos presentes da raiz, ou seja, subgrupos não são expandidos. <br/>
 * Ex: Imagine uma árvore seguindo o princípio de pai(grupo) e filho(subgrupo) da seguinte forma.<br/>
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
    throw "Componente "+grid+" não encontrado"; 
  grid.openGroup(group);
}

/**
 * Abre o menu de configurações do agrupamento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1.È necessário habilitar Agrupamento Múltiplo nas opções de Agrupamento.
 */
function ebfGridOpenGroupConfig (grid) {
  var gridObj = $c(grid);
  if (!gridObj)
    throw "Componente "+grid+" não encontrado";    

    gridObj.openGroupConfig();
}

/**
 * Recarrega o componente grade com os dados atualizados em uma tabela (ResultSet) no servidor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfGridRefresh(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";    
  grid.actPaged = true;
  grid.paging.navigationAction(null, null, 'first');
}

/**
 * Atualiza o componente grade com os dados que já estão carregado em uma tabela (ResultSet) no servidor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1 - Esta função não atualiza a grade com os dados correntes do banco de dados e sim de uma tabela já carregada por uma consulta (cache) na primeira carga da grade. Para atualizar com dados corrente do banco, utilize a função "Atualizar Componente" ou "Grade - Recarregar Dados".
 */
function ebfGridRefreshInClient (grid) {
  var comp = $c(grid);
  if(!comp){
    handleException(new Error("Componente " + grid + " não encontrado."));
    return false;
  }
  comp.actRefresh = true;
  comp.refreshData();
}

/**
 * Essa função remove uma coluna da Grade. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso esta função seja utilizada em um formulário que possua barra de navegação, será necessário utiliza-la no evento<br/>
 * "Ao Navegar" do formulário, pois ao navegar a coluna que foi removida, será exibida novamente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Estado" e o nome da coluna sendo "UF". Ao chamar esta função a coluna "UF" <br/>
 * será removida da grade "Estado".
 */
function ebfGridRemoveColumn(grid, column) {
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){
    handleException(new Error("Componente "+gridName+" não encontrado"));
    return;
  }
  grid.removeColumn(column);  
}

/**
 * Essa função remove uma Linha da Grade. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Número da Linha (De 0 à N)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Quando utilizada em uma grade com cor condicional, a remoção da linha não implicará na redefinição da <br/>
 * condição(propriedade cor condicional) da(s) linha(s) posterior(es) à linha excluída.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Grade de Veículos" e o número da linha sendo 2. Ao usar esta função<br/>
 * a linha 2 será removida, assim como todo valor encontrado na mesma.
 */
function ebfGridRemoveRow(grid, row) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.removeDataRow(row);
}

/**
 * Essa função retorna o total de linha que existe na grade. Informando apenas a Grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o total de linha da Grade.(Inteiro) <br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso a propriedade paginação esteja ativada é retornado o total de linhas da paginação em questão<br/>
 * 2. Para retornar o total geral de linhas, desative a propriedade paginação.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Usuários". Passando esse parâmetro, ao chamar a função, o retorno será o total de<br/>
 * linhas da Grade "Usuários".
 */
function ebfGridRowCount(grid) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.getRowCount();
}

/**
 * Essa função seleciona uma Linha da Grade. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Número da Linha (De 0 à N)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo: "Grade de Veículos" e o número da linha sendo 2. Ao usar esta função<br/>
 * a linha 2 será selecionada, assim como todo valor encontrado na mesma.
 */
function ebfGridSelectRow(grid, row) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";  
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
 * Essa função alterar o alinhamento de um coluna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente (Letras).<br/>
 * 2. Nome da Coluna (Letras).<br/>
 * 3. Alinhamento (Letras) (Ver Observação 1).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O terceiro parâmetro aceita os seguintes valores para alinhamento do conteúdo:<br/>
 * D (Direita)<br/>
 * E (Esquerda)<br/>
 * C (Centro)<br/>
 * 2. Essa função não tem aplicabilidade quando o componente está em modo de inclusão ou edição.
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
        console.error("O valor informado para alinhamento não suportado");
        return;
      }
    } else {
      console.error("O componente " + comp + " não pode está em modo de inclusão/edição");
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
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna que se encontra o componente CheckBox.<br/>
 * 3. Valor inteiro (0 - Desmarcar, 1- Marcar, 2 - Neutro).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função altera a altura das linhas do componente grade de acordo o valor especificado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * 2. Altura (Inteiro)(Ver observação 2).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função altera altura do cabeçalho, filtro e células.<br/>
 * 2. O componente possui limites para a definição de altura das células, sendo assim, o valor mínimo permitido para a altura da linha é 24 e o valor máximo permitido 35.
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
      console.error("O valor informado no segundo parâmetro não é um inteiro válido");
      return;
    }
    const max_height = 35; //Altura padrão do componente.
    const min_height = 24; //Altura mínima para o componente.
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
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Número da Linha<br/>
 * 3. Nome da Coluna que se encontra o componente CheckBox<br/>
 * 4. Valor inteiro (0- Desmarcar, 1- Marcar,  2- Nulo).<br/>
 * <br/>
 * Retorno<br/>
 * Não Possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui interação com o banco de dados, ou seja, só modifica o valor na grade, porém o conteúdo no banco continua<br/>
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
 * Parâmetros:<br/>
 * 1. Formulário que contém a grade.<br/>
 * 2. Componente grade que se deseja mudar a cor.<br/>
 * 3. Linha que deve ser alterada (N -1).<br/>
 * 4. Cor desejada.<br/>
 * 5. Lista contendo as colunas que devem ser pintadas (primeira coluna é 0 (N-1)).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Caso o parâmetro 5 seja definido como Nulo, então toda a linha será pintada.
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
 * Essa função modifica o nome de uma coluna da Grade. Informando a Grade, o nome da coluna que deseja alterar e o <br/>
 * novo nome dela.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * 2. Nome da Coluna<br/>
 * 3. Nome que deseja atribuir à coluna<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o nome da grade sendo "Cursos de Computação", e o nome da coluna sendo "Descrição da Matéria",<br/>
 * e o nome que se deseja atribuir a coluna sendo "Descrição do Curso". Passando essas informações o nome da coluna<br/>
 * que anteriormente era "Descrição da Matéria" será alterado para "Descrição do Curso".
 */
function ebfGridSetColumn(grid, column, newColumn) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  return grid.setColumn(column, newColumn);
}

/**
 * Essa função modifica o modo de filtro do componente grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente<br/>
 * 3. Modo (inClient/inServer)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
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
    handleException(new Error('Componente ' + comp + ' não encontrado'));
    return false;
  }
}

/**
 * Atribui um valor para a coluna especificada no 3º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Número da Linha (De 0 à N-1).<br/>
 * 3. Nome da Coluna.<br/>
 * 4. Valor a ser atribuído.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. É necessário que o componente Grade informado esteja em modo normal.
 */
function ebfGridSetValue(grid, row, column, value) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.setCellDataByColumn(row, column, value);
}

/**
 * Atribui um valor para a coluna especificada no 3º parâmetro. O valor atribuído não será exibido até que a função<br/>
 * "Grade - Dar Refresh" seja utilizada na grade que teve o valor da coluna atribuído.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Número da Linha (De 0 à N-1).<br/>
 * 3. Nome da Coluna.<br/>
 * 4. Valor a ser atribuído.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. É necessário que o componente Grade informado esteja em modo normal.
 */
function ebfGridSetValueNoRefresh(grid, row, column, value) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 

  grid.data[row][grid.iscCanvas.getAllFields()[grid.findColumn(column)].name] = value;
}

/**
 * Esta função exibe ou esconde a barra de edição de um componente grade passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente<br/>
 * 2. Valor lógico<br/>
 * 3. Bloquear Edição ao Duplo Clicar? (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A barra de edição é a interface de inserção, atualização, edição e exclusão.<br/>
 * 2. Ao informar o valor verdadeiro para o terceiro parâmetro o componente irá bloquear a edição do mesmo no duplo clique da linha.
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
 * Esta função mostra a coluna de uma grade se a condição passada no quarto parâmetro for verdadeira, ou oculta <br/>
 * caso a condição seja falsa.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém a grade<br/>
 * 2. Componente Grade<br/>
 * 3. Nome da coluna<br/>
 * 4. Condição para mostrar a coluna<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. É possível obter os valores da coluna mesmo após ter sido ocultada.
 */
function ebfGridShowColumn(pForm, nameGrid, nameColumn, show) {  
  var grade = $c(nameGrid);
  if(!grade){
    handleException(new Error("Componente "+nameGrid+" não encontrado"));
    return;
  }
  grade.setShowColumn(nameColumn, show);
}

/**
 * Exibe ou oculta o sumário da grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade.<br/>
 * 2. Exibir?.(Lógico)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação: <br/>
 * Não possui.
 */
function ebfGridShowGridSummaryRow(grid, show) {
  var grid = $c(grid);
  if (!grid)
    throw "Componente "+grid+" não encontrado";     

  return grid.showGridSummaryRow(show); 
}

/**
 * Essa função obtem o somatório dos os valores de um determinado campo de uma coluna na grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Formulário onde se encontra o componente grade<br/>
 * 2. Componente grade<br/>
 * 3. Nome da Coluna.<br/>
 * <br/>
 * Retorno:<br/>
 * Somatório referente ao campo informado(Número)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Camada Cliente<br/>
 * 1.1 Quando usada na camada cliente, retorna-rá a soma dos valores de uma determinada coluna na grade. <br/>
 * 1.2 Quando estiver usando a "paginação" será retornado a soma dos valores da coluna e da página em questão/atual.<br/>
 * <br/>
 * 2. Camada Servidor <br/>
 * 2.1 O somatório dos valores da coluna é feita em todos os registros da grid (podendo estes estarem paginados ou não).<br/>
 * <br/>
 * 3. Essa função não pode ser utilizada em um fluxo servidor se for chamada a partir do evento "Ao modificar da Grade".<br/>
 * <br/>
 * Exemplos.<br/>
 * 1. Assumindo que o nome do Formulário seja: "Formulário Grade de Estados" o nome do componente grade sendo<br/>
 * "MakerGradeEstados" e na grade temos os campo: 'Código', 'Nome do Estado', 'PIB'. Assumindo que o 3 parâmetro<br/>
 * seja o campo PIB(Produto Interno Bruto), será retornado a soma de todos os PIBs da coluna desejada.<br/>
 * 2. Assumindo que temos um campo IDADE e que os mesmos existes os seguintes valores ( 18,25,14,32,30,29 ).<br/>
 * O valor retornado será: (148), pois 18+25+14+32+30+29 = 148.
 */
function ebfGridSumColumn(form, grid, column) {
  var sum = 0;
  var total = 0;
  var gridName = grid;
  var grid = $c(grid);
  if (!grid){
    handleException(new Error("Componente "+gridName+" não encontrado"));
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
 * Desagrupa a grade a partir de uma coluna, informando o nome da grade e o nome da coluna que será desagrupada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade.<br/>
 * 2. Nome da Coluna.(Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o nome da coluna não seja passada, todos os agrupamentos serão removidos.
 */
function ebfGridUngroup(gridName, column) {
  var grid = $c(gridName);
  if (!grid)
    throw "Componente "+grid+" não encontrado"; 
  grid.ungroup(column);
}

/**
 * Executa um fluxo ao utilizar a navegação do componente Grade.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra a grade;<br/>
 * 2. Componente grade que a função será associada;<br/>
 * 3. Fluxo que será associado à grade;<br/>
 * 4. Lista de parâmetros do fluxo (parâmetro 3).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui
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
 * Essa função adiciona ou remove a barra de rolagem (x, y) de uma moldura tomando como basse os parâmetros informados.<br/>
 * <br/>
 * Parâmetros<br/>
 * 1. Nome do componente  moldura.<br/>
 * 2. Barra de rolagem do eixo X.<br/>
 * 3. Barra de rolagem do eixo Y.<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O conteúdo dos parâmetros de entrada 2 e 3 são:<br/>
 * hidden - Oculta a barra de rolagem<br/>
 * none   - Exibi a barra de rolagem<br/>
 * auto   -  Deixa a barra de rolagem automática
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
 * Força a remoção do conteúdo da moldura.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário da moldura<br/>
 * 2. Componente moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGroupBoxClean(formName, componentName) {
  var component = $c(componentName, formName);  
  if (component instanceof HTMLGroupBox) {  
    component.div.innerHTML = "";
  }
}

/**
 * Esta função habilita ou não o componente moldura e todos os componentes que estiverem "dentro" da área do mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura<br/>
 * 2. Valor lógico que habilita ou desabilita os componentes.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função recebe como parâmetro o nome da moldura e retorna a posição da barra de rolagem.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Posição da barra de rolagem ( Inteiro)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGroupBoxGetScrollPositionLeft (component){  
   var c = $c(component).div;
     return c.scrollLeft;

  }

/**
 * Essa função recebe como parâmetro o nome da moldura e retorna a posição da barra de rolagem.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Posição da barra de rolagem<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGroupBoxGetScrollPositionTop (component){  
   var c = $c(component).div;
     return c.scrollTop;

  }

/**
 * Esta função move o componente moldura e todos os componentes que estiverem "dentro" da área do mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura (Componente)<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Esta função simula a funcionalidade de um Region (container)
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
 * Função que cria um novo componente Moldura dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (caso não seja definida, a aba será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descrição do componente.<br/>
 * 7. Nome do componente<br/>
 * 8. Estilo ( 1.Moldura 2.Linha Acima 3.Linha Baixo 4.Linha à Esquerda 5. Linha à Direita 6.Espaço ).<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Nome da Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função recebe o nome da moldura e altera a posição da barra de rolagem horizontal da mesma de acordo com o segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura<br/>
 * 2. Posição da barra de rolagem (inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGroupBoxSetPositionScrollLeft(component,position){
  if($c(component)) {
    var cdiv = $c(component).div;  
        cdiv.scrollLeft = position;
  }
}

/**
 * Essa função recebe o nome da muldura e altera a posição da barra de rolagem da mesma de acordo com o <br/>
 * segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da moldura<br/>
 * 2. Posição da barra de rolagem (inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfGroupBoxSetPositionScrollTop(component,position){
  if($c(component)) {
    var cdiv = $c(component).div;  
        cdiv.scrollTop = position;
  }
}

/**
 * Esta função mostra ou oculta o componente moldura e todos os componentes que estiverem "dentro" da área do mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura<br/>
 * 2. Valor lógico que exibe ou oculta os componentes.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Nome do Componente Moldura<br/>
 * 2. Índice de Profundidade<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. GUID da Celula<br/>
 * 2. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfHTMLTableCellChangeValue (cell,value) {
	var c = document.getElementById(cell);
	c.innerHTML = value;
}

/**
 * Obtém o valor da célula passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Célula<br/>
 * <br/>
 * Retorno:<br/>
 * Valor da célula
 */
function ebfHTMLTableCellGetValuex (cell) {
	var c = document.getElementById(cell);
        return 	c.innerHTML;
}

/**
 * Cria uma tabela em uma moldura<br/>
 * <br/>
 * Parâmetros:<br/>
 * <br/>
 * 1. Formulário<br/>
 * 2. Moldura<br/>
 * 3. Largura da tabela (Opcional)<br/>
 * 4. Altura da tabela(Opcional)<br/>
 * 5. Cor do plano de fundo (Opcional)<br/>
 * 6. Largura da borda (Opcional)<br/>
 * 7. Cor da borda (Opcional)<br/>
 * 8. Espaçamento entre as células (Opcional)<br/>
 * 9. Espaçamento entre o texto e as bordas da célula (Opcional)<br/>
 * 10. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * 11. Barra de Rolagem (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da tabela
 */
function ebfHTMLTableCreate(form, componentName, width, height, bgColor, border, borderColor, cellSpace, cellPad, style, scroll){

  //Obtém a moldura
  var component = $c(componentName);

  // Verifica se existe a moldura
  if  (component){
  
    var div = getDiv(id, 0, 0, component.getWidth(), component.getHeight(), 1000010, true);

    // Obtém o id da tabela
    var id = 'table' + parseInt((Math.random() * 9999999));

    //Criar Elementos tbody e table
    var tbody = document.createElement("tbody");
    var table = document.createElement("table");

    //Obtém o tamanho da borda
    var tableBorder;
    if  (!(border) ||  (border < 0)){
      tableBorder = 0;
    } else {
      tableBorder = border;
    }

    //Obtém a largura da tabela
    var tableWidth;
    if (!(width) || (width <= 0)){
      tableWidth = component.getWidth();
    } else {
      tableWidth = width;
    }

    //Obtém a altura da tabela
    var tableHeight;
    if (!(height) || (height <= 0)){
      tableHeight = component.getHeight();
    } else {
      tableHeight = height;
    }


    //Obtém o espaçamento entre as células
    var tableCellSpace;
    if (!(cellSpace) ||  (cellSpace < 0)){
      tableCellSpace = 0;
    } else {
      tableCellSpace = cellSpace;
    }
 
    //Obtém o espaçamento para as bordas
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
 * Insere uma célula em uma linha<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Linha<br/>
 * 3. Largura da célula (Opcional)<br/>
 * 4. Alinhamento (Opcional)<br/>
 *     Valores aceitados:   <br/>
 *        + left (Esquerda)<br/>
 *        + center (Centro)<br/>
 *        + right (Direita)<br/>
 * 5. Cor do fundo (Opcional)<br/>
 * 6. Cor da borda (Opcional)<br/>
 * 7. Quantidade de linhas ocupadas (Opcional)<br/>
 * 8. Quantidade de colunas ocupadas (Opcional)<br/>
 * 9. Conteúdo (Opcional)<br/>
 * 10. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da célula<br/>
 * <br/>
 * Observações:<br/>
 * 1. O parâmetro dois é obtido com a função "Tabela - Inserir linha em uma tabela"<br/>
 * 2. Para a utilização da função no servidor é necessário passar o parâmetro "Linha" em branco e ter utilizado <br/>
 *      a função "Tabela - Inserir linha em uma tabela"  antes. A célula irá ser inserida na útima linha criada na tela.
 */
function ebfHTMLTableCreateCell(form, row, width, align, bgColor, borderColor, rowspan, colspan, text, style){
                                  
  if (!row){
    if (document.ebfHTMLTableRow){
      row = document.ebfHTMLTableRow;
    }else{
      return;
    }  
  }

  //Obtém a linha
  var component = $w(row);

  // Verifica se existe a tabela
  if  (component){
    // Obtém o id da célula
    var id = 'td' + parseInt((Math.random() * 9999999));
  
    //Criar Elemento td
    var td = document.createElement("td");

    //Obtém a largura da célula
    var cellWidth;
    if ((width) && (width <= 0)){
       cellWidth= 1;
    } else {
       cellWidth= width;
    }

    //Altera os atributos da célula
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

    //Adiciona o texto na célula
    //td.appendChild(elementText);
    td.innerHTML = text;
  
    //Adiciona a célula na linha
    component.appendChild(td);
  
    return id;       
  }
}

/**
 * Insere uma linha em uma tabela<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Tabela<br/>
 * 3. Cor de fundo (Opcional)<br/>
 * 4. Cor da borda (Opcional)<br/>
 * 5. Folha de estilo (Opcional) Ex: "background-color: #000000"<br/>
 * <br/>
 * Retorno:<br/>
 * GUID da linha criada<br/>
 * <br/>
 * Observações:<br/>
 * 1. O parâmetro dois é o retorno da função "Tabela - Criar tabela em uma moldura"<br/>
 * 2. Para a utilização da função no servidor é necessário passar o parâmetro "Tabela" em branco e ter utilizado <br/>
 *      a função "Tabela - Inserir linha em uma tabela"  antes. A linha irá ser inserida na útima tabela criada na tela.
 */
function ebfHTMLTableCreateRow(form, table, bgColor, borderColor, style){

  //Obtém a tabela
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
                     
    // Obtém o id da linha
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
 * Parâmetros:<br/>
 * 1. Formulário<br/>
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
 * 10. Cor de fundo da célula (Opcional)<br/>
 * 11. Espaçamento entre as células (Opcional)<br/>
 * 12. Espaçamento entre o texto e as bordas da célula (Opcional)<br/>
 * 13. Estilo das células (Opcional) Ex: "background-color: #000000"<br/>
 * 14. Barra de Rolagem (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHTMLTableCreateWithArray(form, componentName, width, height, border, rowList, align, bgColor, borderColor, cellBgColor, cellSpace, cellPad, style, scroll){
  //Obtém a moldura
  var component = $c(componentName);

  // Verifica se existe a moldura
  if  (component){
    var div = getDiv(id, 0, 0, component.getWidth(), component.getHeight(), 1000010, true);

    // Obtém o id da tabela
    var id = 'table' + parseInt((Math.random() * 9999999));
    //Criar Elementos tbody e table
    var tbody = document.createElement("tbody");
    var table = document.createElement("table");      

    //Obtém o tamanho da borda
    var tableBorder;
    if  (!(border) ||  (border < 0)){
      tableBorder = 0;
    } else {
      tableBorder = border;
    }
    //Obtém a largura da tabela
    var tableWidth;
    if (!(width) || (width <= 0)){
      tableWidth = component.getWidth();
    } else {
      tableWidth = width;
    }
    //Obtém a altura da tabela
    var tableHeight;
    if (!(height) || (height <= 0)){
      tableHeight = component.getHeight();
    } else {
      tableHeight = height;
    }
    //Obtém o espaçamento entre as células
    var tableCellSpace;
    if (!(cellSpace) ||  (cellSpace < 0)){
      tableCellSpace = 0;
    } else {
      tableCellSpace = cellSpace;
    }      
    //Obtém o espaçamento para as bordas
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
      // Obtém o id da linha
      idRow = 'tr' + parseInt((Math.random() * 9999999));
      //Criar Elemento tr
      tr = document.createElement("tr");      

      //Altera os atributos da linha
      tr.setAttribute("id",idRow);

      cellList = rowList[indexRow];

      for ( indexCell = 0; indexCell < cellList.length; indexCell++){
        // Obtém o id da célula
        idCell = 'td' + parseInt((Math.random() * 9999999));
        //Criar Elemento td
        td = document.createElement("td");
        //Altera os atributos da célula
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
        
        //Adiciona o texto na célula
        //td.appendChild(cellText);
        
        td.innerHTML = cellList[indexCell];

        //Adiciona a célula na linha
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
 * Essa função recebe como parâmetro o nome da tabela HTML e retorna a altura da mesma.<br/>
 * <br/>
 * Partâmetros:<br/>
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
 * Essa função recebe como parâmetro o nome da tabela html e retorna o tamanho da mesma.<br/>
 * <br/>
 * Parâmetros:<br/>
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
 * Parâmetros:<br/>
 * 1. GUID da Linha<br/>
 * 2. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfHTMLTableLineChangeValue (line,value) {
	var l = document.getElementById(line);
	l.innerHTML = value;
}

/**
 * Esta função oculta o teclado do dispositivo móvel.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * Não possui.
 */
function ebfHiddenKeyboard(){
 alert('Função disponível no Maker Mobile');
}

/**
 * Esconde a árvore passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Variável onde está guardada a referência para a árvore.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfHideTree(tree){	
  return tree.hideTree();		
}

/**
 * Esta função anexa um elemento recebido como parâmetro em um outro elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o novo elemento. (Variante)<br/>
 * 2. Referência do elemento a ser anexado (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHtmlAppendElementAt(element, child){
  if (element && child) {  
    element.appendChild(child);
  }
}

/**
 * Essa função anexa o elemento na posição dentro do elemento pai passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o novo elemento. (Variante)<br/>
 * 2. Referência do elemento a ser anexado. (Variante)<br/>
 * 3. Posição onde o elemento será inserido. (Inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para mais informações verifique: http://www.w3schools.com/jsref/met_node_insertbefore.asp
 */
function ebfHtmlAppendElementAtPosition(element, child, position){
  position = position - 1;
  if (element !== null && child !== null && position !== null && position >= 0) {
    element.insertBefore(child, element.childNodes[position])
  }
}

/**
 * Esta função associa um fluxo a um evento no objeto HTML recebido como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento HTML (Variante)<br/>
 * 2. Nome do Evento (Letras)<br/>
 * 3. Nome do Fluxo (Fluxo)<br/>
 * 4. Lista de parâmetros do fluxo (Variante, Opcional)<br/>
 * 5. O objeto do evento será passado como primeiro parâmetro para o Fluxo? (Lógico, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O 4º parâmetro pode ser o retorno da função "Criar Lista a partir dos Elementos".<br/>
 * 2. Se o 5º parâmetro for Verdadeiro (por padrão é Falso) será passado como primeiro parâmetro do Fluxo o objeto do tipo de evento especificado (Mouse, Teclado, etc), que usando a função "HTML - Obter Atributo do Elemento (DOM)" é possível, por exemplo, obter as coordenadas do cursor na tela, última tecla pressionada ou o elemento HTML que disparou o evento.<br/>
 * 3. O objeto do evento se tornará o primeiro parâmetro do Fluxo a ser chamado, logo os outros parâmetros começarão a partir da segunda posição.<br/>
 * 4. O fluxo chamado no 3º parâmetro pode retornar o valor Lógico Falso para interromper o comportamento padrão do evento do navegador, como por exemplo o clique (onclick) ou o caractere digitado (onkeypress).<br/>
 * 5. Somente serão executados fluxos na camada cliente. Para executar fluxos na camada servidor, utilize subfluxo.
 */
function ebfHtmlAttachFlowEvent(elementVar, eventName, flowName, ruleParams, eventObject) {
  if (elementVar && eventName && flowName) {  
    // Testa se o parâmetro do fluxo a ser executado é nulo
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
          ruleParams.unshift(event); // Adiciona evento no primeiro parâmetro
        }else{
          ruleParams[0] = event; // Substitui o objeto do evento anterior
        }
      }
      var stopEvent = executeJSRuleNoField(sysCode, idForm, flowName, ruleParams);
      
      // Se o fluxo retornar o valor Lógico Falso, então será interrompido a propagação do evento
      // para os elementos pais e o evento padrão do navegador
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
 * Esta função retorna uma lista com os filhos de um elemento informado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento onde será retornado os seus filhos (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo os filhos do elemento informado como parâmetro<br/>
 * <br/>
 * Obs: Caso o elemento informado não possua filhos, o retorno será uma lista vazia.
 */
function ebfHtmlChildNodes(element) {
  if (element) {
    return element.children;
  }
}

/**
 * Esta função retorna uma cópia do elemento passado como parâmetro<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento a ser clonado (Variante);<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do elemento clonado (Nulo, caso o elemento não seja encontrado)
 */
function ebfHtmlCloneHtmlNode(element){
  return element.cloneNode(true);
}

/**
 * Esta função cria um elemento HTML especificado pelos parâmetros da função e seus atributos e retorna sua referência.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Elemento a ser criado (Letras)<br/>
 * 2. Lista de Lista de atributos e valores (Variante, Opcional)<br/>
 * 3. Elemento que receberá o elemento criado (Variante, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Elemento criado.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O elemento não deve possuir os sinais de < e >, caso deseja inserir o elemento paragrafo <p> por exemplo: <br/>
 * use somente 'p'.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Suponhamos que queremos obter o elemento 'p' passado por parâmetro, o retorno será: [object HTMLParagraphElement]
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
 * Esta função define uma propriedade CSS em um elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo (Letras)<br/>
 * 3. Novo valor da propriedade (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padrão DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Suponhamos que queremos definir a propriedade de estilo "vertical-align: middle". O nome da propriedade de acordo<br/>
 * com o padrão DOM Style seria: verticalAlign.
 */
function ebfHtmlCssDefineStyle(element, propertyName, propertyValue) {
  if (element && propertyName) {  
    eval("element.style." + propertyName + " = \"" + propertyValue + "\"");
  } 
}

/**
 * Esta função obtém uma propriedade CSS de um elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor da Propriedade (Letras);<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padrão DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe
 */
function ebfHtmlCssGetStyle(element, propertyName, propertyValue) {
  if (element && propertyName) {  
    return eval("element.style." + propertyName);
  } 
}

/**
 * Esta função remove uma propriedade CSS de um elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento (Variante)<br/>
 * 2. Nome da propriedade de estilo a ser removida (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O nome da propriedade de estilo deve seguir o padrão DOM Style. Uma lista de exemplo pode ser visto em:<br/>
 * http://goo.gl/PGSe
 */
function ebfHtmlCssRemoveStyle(element, propertyName) {
  if (element && propertyName) {  
    eval("element.style.removeProperty(\"" + propertyName + "\")");
  } 
}

/**
 * Esta função obtém um atributo de um elemento HTML.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o atributo (Variante)<br/>
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
 * Obtém o corpo (DOM: body) da página do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Corpo da página (Variante).
 */
function ebfHtmlGetBodyElement() {
  return $mainform().document.body;
}

/**
 * Esta função obtém um atributo de um objeto HTML (DOM).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor do Atributo (Variante)<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função serve para obter atributos do objeto, permitindo acesso a propriedades avançadas do objeto.
 */
function ebfHtmlGetDOMAttribute(elem, attr){
  return elem[attr];         
}

/**
 * Obtém o corpo (DOM: document) da página do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Document da página (Variante).
 */
function ebfHtmlGetDocumentElement() {
  return $mainform().document;
}

/**
 * Esta função busca todas as referências dos elementos que possuem o atributo determinado no parâmetro.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Referência do Elemento HTML em que será feita a busca dos elementos filhos pelo atributo (Variante).<br/>
 * 2. Atributo (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com referências dos Elementos (Lista vazia caso nenhum elemento seja encontrado).<br/>
 * <br/>
 * Observação:<br/>
 * 1. Utilizar a função Obter Objeto da Lista para percorrer todos Elementos HTML encontrados.
 */
function ebfHtmlGetElementByAttrName(ref, attrName) {
  ref = ref || document;
  return ref.querySelectorAll('[' + attrName + ']') 
}

/**
 * Esta função busca todas referências dos elementos que possuem a classe determinada no parâmetro.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Classe dos Elementos (Letras)<br/>
 * 2. Referência do Elemento HTML em que será feita a busca dos elementos filhos pelo nome da classe (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com referências dos Elementos (Lista vazia caso nenhum elemento seja encontrado).<br/>
 * <br/>
 * Observação:<br/>
 * 1. Utilizar a função Obter Objeto da Lista para percorrer todos Elementos HTML encontrados.
 */
function ebfHtmlGetElementByClassName(classe, ref) {
  ref = ref || document;
  return ref.getElementsByClassName(classe);
}

/**
 * Esta função busca a referência de um elemento HTML a partir do seu ID.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. ID do Elemento (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Elemento (Nulo, caso o elemento não seja encontrado).
 */
function ebfHtmlGetElementById(id) {
  try {
    return document.getElementById(id);    
  } catch(e) {
    return null;  
  }
}

/**
 * Esta função busca todas as referências dos elementos que possuem a Tag determinada no parâmetro.<br/>
 * <br/>
 * Parâmetro: <br/>
 * 1. Nome da Tag (Letras)<br/>
 * 2. Referência do Elemento HTML em que será feita a busca dos elementos (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com referências dos Elementos.<br/>
 * <br/>
 * Observações: <br/>
 * 1. Utilizar a função Obter Objeto da Lista para percorrer todos Elementos HTML encontrados. <br/>
 * 2. Caso não encontre nenhum elemento o retorno será uma lista vazia.
 */
function ebfHtmlGetElementsByTagName(tagName, element) {
  element = element || document;
  return element.getElementsByTagName(tagName);
}

/**
 * Esta função obtém o conteúdo do elemento HTML passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Conteúdo do Elemento HTML (Letras)
 */
function ebfHtmlGetInnerHtml(elementVar) {
  if (elementVar) {
    return elementVar.innerHTML; 
  }
}

/**
 * Esta função busca a referência do elemento HTML de um componente Maker a partir do seu nome.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente Maker (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Elemento (Nulo, caso o elemento não seja encontrado).
 */
function ebfHtmlGetMakerElementById(id) {
  var component = $c(id);  
  if (component) {
    component = component.div; 
  }  
  return component;
}

/**
 * Esta função busca a referência pai do elemento HTML atual.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Elemento Pai (Variante)
 */
function ebfHtmlGetParent(elementVar) {
  if (elementVar)  
    return elementVar.parentElement;
}

/**
 * Esta função define o conteúdo do elemento HTML passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento (Variante)<br/>
 * 2. Conteúdo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHtmlInnerHtml(elementVar, elementContent) {
  if (elementVar) {
    elementVar.innerHTML = elementContent; 
  }
}

/**
 * Essa função possibilita a atualização dinâmica de um iframe recebido como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Iframe HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Obs.: Deve-se utilizar as funções "HTML - Obter Elemento Pelo Id" para o obter o Iframe que se deseja atualizar.
 */
function ebfHtmlRefreshElement(element){
  element.contentWindow.location.reload();
}

/**
 * Esta função remove um atributo de um elemento HTML.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHtmlRemoveAttribute(element, attributeName) {
  if (element && attributeName) {
    element.removeAttribute(attributeName);
  }
}

/**
 * Esta função remove o filho de um elemento especificado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento pai que terá seu filho removido (Variante)<br/>
 * 2. Referência do elemento filho que será removido (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHtmlRemoveChild(element, child) {
  if (element && child) {
    element.removeChild(child);  
  }
}

/**
 * Esta função remove um evento do elemento recebido como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento HTML (Variante)<br/>
 * 2. Nome do Evento a ser removido (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Esta função define um atributo a um elemento HTML.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * 3. Valor do Atributo (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfHtmlSetAttribute(element, attributeName, attributeValue) {
  if (element && attributeName) {
    element.setAttribute(attributeName, attributeValue);
  }
}

/**
 * Esta função define um atributo a um objeto HTML (DOM).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do elemento que receberá o atributo (Variante)<br/>
 * 2. Nome do Atributo (Letras)<br/>
 * 3. Valor do Atributo (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * O mesmo Valor do Atributo passado no terceiro parâmetro (Variante)<br/>
 * <br/>
 * Observação:<br/>
 * 1. Esta função serve para alterar atributos do objeto, permitindo acesso a propriedades avançadas do objeto.
 */
function ebfHtmlSetDOMAttribute(elem, attr, value){
  return elem[attr] = value; 
}

/**
 * Transforma uma ou várias tabelas HTML para XLS.<br/>
 * Parâmetros:<br/>
 * 1. Lista de IDs das tabelas HTML. (Variante)<br/>
 * 2. Lista de nomes das abas da tabela. (Variante)<br/>
 * 3. Nome do arquivo. (Letras)<br/>
 * 4. Nome da aplicação. (Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O 3º parâmetro deve conter o nome do arquivo seguido da extensão desejada.<br/>
 * 2. O 4º parâmetro é o aplicativo que irá abrir o arquivo.  Exemplo: Excel.<br/>
 * 3. Ao abrir o arquivo pelo Excel, o aplicativo pode exibir uma mensagem de alerta informando que o <br/>
 * conteúdo do arquivo é diferente da extensão (xls). Este  comportamento é normal e se trata de uma <br/>
 * melhoria do Excel para avisar ao usuário sobre possíveis conteúdos incompatíveis. Consultar link:<br/>
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
    alert("Recurso indisponível no IE/Edge");
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
 * Esta função recebe uma URL como parâmetro e abre o mesmo em um iframe criado dinâmicamente. O iframe criado não<br/>
 * possui tamanho nem aparência, ficando invisível ao formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função é recomendada na chamada de serviços que retornam conteúdo HTML ou Elementos do tipo Script para<br/>
 * serem executados.
 */
function ebfIframeTransporter(url) {
  IframeTransporter(url);
}

/**
 * Altera a URL de um componente imagem.<br/>
 * <br/>
 * Caso a imagem possua uma URL, as características do componente serão mantidas.<br/>
 * Por exemplo: Caso a imagem inicial esteja definida como Centralizada, ao alterar a URL a mesma continuará assim.<br/>
 * Caso seja uma imagem do banco de dados, uma impressão digital ou a imagem esteja como estendida, ela SEMPRE aparecerá nas dimensões do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém o componente imagem<br/>
 * 2. Nome do componente<br/>
 * 3. URL da imagem<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A função não permitirá a utilização de imagens que não se encontram nas pastas ?Upload? ou ?TMP?. Desta forma, caso exista alguma regra que altere a URL de um componente Imagem e o caminho da URL aponte para uma pasta diferente de ?Upload? ou ?tmp?, o funcionamento será incorreto.
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
 * Esta função localiza o conteúdo do 2° parâmetro dentro do conteúdo do primeiro parâmetro e retorna a posição deste caso o <br/>
 * encontre. Caso não encontre, retorna 0.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto onde será feita a pesquisa.<br/>
 * 2. Valor a ser localizado.<br/>
 * <br/>
 * Retorno:  <br/>
 * Retorna a posição do valor a ser localizado. Caso não encontre retorna 0.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os parâmetros como "Maker Flow" (Letras) e "e" (Letras) , o retorno seria 4.<br/>
 * 2. Assumindo os parâmetros como "Maker Flow" (Letras) e "U" (Letras) , o retorno seria 0.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Esta função permite executar um fluxo sempre que o usuário chegar ao fim da barra de rolagem.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento<br/>
 * 2. Fluxo<br/>
 * 3. Lista de parâmetros <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
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
 * Converte um número decimal para hexadecimal com zeros a esquerda caso o número a ser convertido seja menor que a<br/>
 * quantidade de caracteres a ser retornada. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido.<br/>
 * 2. Quantidade de Caracteres a ser retornada<br/>
 * <br/>
 * Retorno:<br/>
 * Valor convertido para Hexadecimal. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo os números decimais (9,10,11 e 15) no primeiro parâmetro e 5, no segundo parâmetro<br/>
 *  o retorno será respectivamente (00009, 0000a, 0000b, 0000f )<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Hexadecimal é um sistema numérico com 16 dígitos, onde os dígitos de 0 a 9 são representados por números de 0 a 9, <br/>
 * e os dígitos de 10 a 15 são representados por letras, que vão de A a F.
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
 * Obtém um elemento da estrutura HTML de um componente Integração através do seu ID.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Integração. (Componente)<br/>
 * 2. ID do elemento. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referência do elemento. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso não exista elemento com o ID especificado, o retorno será nulo.<br/>
 * 2. No primeiro parâmetro também pode ser passado o nome do componente em uma variável do tipo Letras.
 */
function ebfIntegracaoGetElementById(comp, id) {
  var component = $c(comp);
  if (component) return component.getElementById(id);
  else handleException(getLocaleMessage('ERROR.COMPONENT_FIELD_NOT_FOUND', comp));  
}

/**
 * Invoca um método no objeto passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto que contém o método<br/>
 * 2. Método a ser executado<br/>
 * 3. Lista de parâmetros do método. <br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o resultado da execução do método. (Variante)
 */
function ebfInvokeMethod(object, methodName, params){ 

  if (!object){
    throw 'Objeto inválido';
  }
  if (methodName == null || methodName == ''){
    throw 'Nome do método inválido';
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
 * Verifica se um CNPJ é válido.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um CNPJ, caso contrário retorna Falso. (Lógico)<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Caso o valor seja vazio, será considerado que o CNPJ é válido.
 */
function ebfIsCnpj(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  }
  return CNPJ(value);
}

/**
 * Verifica se é um CPF Válido.<br/>
 * Caso o valor seja vazio, será considerado que o CPF é válido.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um CPF válido, caso o CPF seja Inválido retorna Falso.
 */
function ebfIsCpf(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  }
  return CPF(value);
}

/**
 * Verifica se é um E-mail válido. <br/>
 * Caso o valor seja vazio, será considerado que o Email é inválido.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. E-mail a ser validado<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna Verdadeiro se for um E-mail válido, Falso, caso contrário.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A função não verifica se é um e-mail existente. Apenas valida se está na sintaxe correta.<br/>
 * 2. Recomendado o envio de um link de ativação para confirmação da existência do e-mail.
 */
function ebfIsEmail(value) {
  if (value == null || typeof value == "undefined" || value == "") {
    return false;
  } 
  
  var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regExp.test(value);
}

/**
 * Essa função retorna se uma determinada chave existe no objeto JSON.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave a ser buscada<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna Verdadeiro caso a chave existe no JSON. Caso contrário, retorna Falso.
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
 * Essa função cria um objeto JSON ou um texto JSON de acordo o valor lógico passado no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lista de Lista contendo chave e valor.<br/>
 * 2. Objeto JSON?<br/>
 * <br/>
 * Retorno:<br/>
 * 1. Retorna um objeto JSON ou um texto JSON (Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. A função possui suporte a passagem de objetos do tipo JSON e Lista como valor.<br/>
 * 2. Retorna nulo caso o primeiro parâmetro não seja um objeto do tipo lista.
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
 * Esta função gera um arquivo de saída a partir de um relatório Jasper (JRXML).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Caminho para o arquivo JRXML. (Letras)(Caminho relativo a partir do contexto ou absoluto)<br/>
 * 2. Caminho para o arquivo de saída. (Letras)(Caminho relativo a partir do contexto ou absoluto)<br/>
 * 3. Mapa de Parâmetros (Variante, Opcional)<br/>
 * 4. Formato do arquivo de saída. (Letras)<br/>
 * 5. Atualizar arquivo binário JASPER? (Lógico, Opcional)<br/>
 * 6. Abrir arquivo gerado? (Lógico, Opcional)<br/>
 * 7. Conexão adicional. (Variante, Opcional)<br/>
 * 8. Ordenação. (Variante , Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Formatos suportados para o parâmetro 4:<br/>
 * PDF, HTML, TXT, RTF, XML, XLSX, DOCX, PPTX, JPG, PNG, GIF<br/>
 * <br/>
 * 2. Caso não exista o arquivo binário JASPER, será criado um independente da opção escolhida no parâmetro 5.<br/>
 * <br/>
 * 3. A ordenação deve estar no formato: campo1|[0|1][;campo2|[0|1][;campoN|[0|1]]], sendo: <br/>
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
 * Função que cria um novo componente caixa de texto dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (Caso não seja definida, a aba será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente.<br/>
 * 6. Valor (novo texto).<br/>
 * 7. Nome do Componente.<br/>
 * 8. zIndex.<br/>
 * 9. Container.<br/>
 * 10. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função retorna a data com o último dia do mês a partir do mês e ano passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mês.<br/>
 * 2. Ano.<br/>
 * 3. Formatação (Opcional).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a data com o último dia do mês. (Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o 1º parâmetro sendo 02 e o 2º parâmetro sendo 2007, o retorno será 28/02/2007 23:59:59.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O mês deve receber valores entre 1 e 12.<br/>
 * 2. Se o 3º parâmetro não for definido a data retornada terá o formato brasileiro.
 */
function ebfLastDay(month, year, formatting){
   var date = new Date(year, month, 0);
   formatting = (formatting === 'undefined' || formatting == null || formatting === "") ? 'dd/MM/yyyy' : formatting;   
   return date.format(formatting)+ " 23:59:59";   
}

/**
 * A função localiza a última subseqüência (passada no 2º parâmetro) dentro do texto e retorna a posição inicial da mesma.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Texto.<br/>
 * 2. Subseqüência ao qual deseja obter o índice.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a última posição do valor passado como parâmetro. <br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetros  "Maker Maker" (Letras) e "r" (Letras), o retorno seria  11(Inteiro).<br/>
 * 2.Assumindo como parâmetros "Maker Flow"(Letras) e "r" (Letras), o retorno seria 5 (Inteiro).<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * A função recebe um texto e retorna o tamanho do mesmo.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Texto no qual se deseja obter o tamanho.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a quantidade de caracteres (Inteiro) presente no texto passado como parâmetro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetro "Maker Flow" (Letras), o retorno seria 10.<br/>
 * 2.Assumindo como parâmetro "Hoje é Segunda-Feira" (Letras), o retorno seria 20.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfLength() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0].toString().length;
  }
  return value;
}

/**
 * Essa função cria uma lista vazia.<br/>
 * <br/>
 * Retorno: <br/>
 * Lista vazia. O retorno dessa função deve ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Observações: <br/>
 * 1. Para inserir elemento na lista é necessária a utilização de outras funções da categoria lista.<br/>
 * 2. Não há suporte para passagem de parâmetro de uma lista criada na camada "Cliente" para a camada "Servidor"; a<br/>
 * ação contrária é suportada.<br/>
 * 3. Caso queira criar uma lista já definindo valores, utilize a função Criar lista a partir dos Elementos.
 */
function ebfListCreate() {
  return new Array();
}

/**
 * Essa função verifica se o elemento passado por parâmetro existe no objeto lista, retornando o valor lógico verdadeiro (true) se o elemento existir na lista ou falso (false) caso contrário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista (Variante).<br/>
 * 2. Elemento (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Valor lógico indicando se o elemento existe na lista.
 */
function ebfListExistsValue(list, value) {
  if(list != null && list instanceof Array && list.length > 0)  
    return list.includes(value);    
  return false;
}

/**
 * Transformar uma Lista(conjunto de valores) em um Texto separando cada elemento com um delimitador(separador)<br/>
 * especificado no 2º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista.<br/>
 * 2. Separador entre os elementos da lista.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna os elementos da lista passada (1° parâmetro) separados pelo conteúdo do 2º parâmetro (Letras).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo os parâmetros como  uma lista com 2 elementos ("Maker" e "Flow" ) e "|"(Letras), o retorno seria "Maker|Flow" (Letras).<br/>
 * 2-Assumindo os parâmetros como  uma lista com 3 elementos ("ABC" ,"DEF" e "GHI") e  nulo (Letras) no segundo parâmetro,<br/>
 * o retorno seria "ABCDEFGHI" (Letras).<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função retorna o tamanho da lista, ou seja, a quantidade de elementos que pertencem à lista. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lista com os elementos<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a quantidade de elementos na lista. O retorno da função pode ser armazenado numa variável do tipo inteiro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a,b,c,d,e,f,g,h}. O retorno será o valor 8, pois<br/>
 * existem 8 elementos na lista.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfListLength() {
  var value = 0;
  if (existArgs(arguments)) {
    value = arguments[0].length;
  }
  return value;
}

/**
 * Essa função cria uma lista com todos os valores que foram passados pelos parâmetros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Elemento da Lista<br/>
 * 2. Elemento da Lista<br/>
 * <br/>
 * Retorno: <br/>
 * Lista com todos os valores passados por parâmetro.(Variante)<br/>
 * <br/>
 * Observações: <br/>
 * 1. A função pode ter (N) parâmetro.<br/>
 * 2. O acesso aos elementos da lista retornada é feito através de outras funções da categoria lista.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que os elementos da lista sendo:1, 2 e 5, o retorno será uma lista com os elementos 1,2 e 5.<br/>
 * 2. Assumindo que os elementos da lista sendo: A, B e C, o retorno será uma lista com os elementos A, B e C.
 */
function ebfListParamsCreate() {
  var list = new Array()
  for(i = 0; i < arguments.length; i++) {
    list[i] = arguments[i];
  }
  return list;
}

/**
 * Essa função ordena os elementos de uma lista. <br/>
 *     <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Valor Lógico<br/>
 *    <br/>
 * Retorno:<br/>
 * Lista ordenada. O retorno da função pode ser armazenado numa variável do tipo variante.<br/>
 *     <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, d, b, e, h, f, g, c}, o 2º parâmetro seja "True". <br/>
 * O retorno será uma lista ordenada de forma ascendente com os seguintes valores: {a, b, c, d, e, f, g, h}. <br/>
 * 2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {1, 2, 3}, o 2º parâmetro seja "False". <br/>
 * O retorno será uma lista ordenada de forma descendente com os seguintes valores: {3, 2, 1}.
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
 * Essa função realiza a importação de um ou mais scripts de forma assíncrona, e ao final da importação um fluxo de callback é chamado.<br/>
 * <br/>
 * Parâmetro(os):<br/>
 * 1. Lista de URL's;<br/>
 * 2. Fluxo de Callback(será chamado após a importação a importação);<br/>
 * 3. Lista de Parâmetros(será passado para o fluxo de callback);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Obtém a referência do formulário principal, sendo este o chamador; normalmente abertos através de botões, <br/>
 * dentre outros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Formulário Principal a partir do qual o formulário atual foi aberto. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfMainFormGetInstance() {
  return getOpenerWindow(top).$mainform().top.$mainform();
}

/**
 * Essa função armazena um valor no objeto mapa passando como parâmetro a chave ou referencia do valor e o valor que<br/>
 * deseja armazenar.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Referência) <br/>
 * 3. Valor a ser armazenado<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações: <br/>
 * 1. Para obter o valor armazenado é preciso utilizar a função "Obter Elemento" passando como parâmetro a chave ou<br/>
 * referencia do valor.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro sendo MAPA, o 2º parâmetro sendo Maker e o 3º parâmetro sendo Flow, o retorno será o conteúdo Flow armazenado no objeto mapa "MAPA" com a sua chave de referencia sendo Maker.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapAddObject(obj, key, value) {
    obj.add(key, value);
}

/**
 * Esta função retorna a distância linear (em metros) entre dois pontos. <br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1.  Latitude e Longitude - Ponto Inicial (Lista). <br/>
 * 2.  Latitude e Longitude - Ponto Final (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Distância Linear (Em metros).<br/>
 * <br/>
 * Observação (ões)<br/>
 * 1. Os parâmetros devem ser passados nas respectivas ordens Latitude e Longitude.
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
 * Essa função retorna se uma determinada chave existe no objeto mapa.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave a ser buscada<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna Verdadeiro caso a chave existe no mapa. Caso contrário, retorna Falso.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapContainsKey(obj, key) {
  if (obj instanceof Map) {
    return (obj.findKey(key) != -1);
  }
  return false;
}

/**
 * Essa função criar um mapa ou mapeamento para armazenar valores a partir de uma lista de "par/valor".<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lista com "par/valor".<br/>
 * 2. Lista com "par/valor".<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto mapa com suas chaves e seus respectivos valores. O retorno pode ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Observações: <br/>
 * A função pode ter (N) parâmetros.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º e 2º parâmetro sendo a Função Criar Lista a partir dos parâmetros contendo os pares de valores: Maker/Flow e Softwell/Freire. O retorno será um objeto mapa contendo esses elementos.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Criar um mapa ou um mapeamento para armazenar valores, com uma diferença: ambos os valores (chave e valor) são Strings.<br/>
 *  <br/>
 * (É interessante saber que um Mapa associa os dois objetos: passando uma chave, então se obtém um valor).<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto mapa. O retorno pode ser armazenado numa variável do tipo variante<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapCreateObject() {
  return new Map();
}

/**
 * Essa função retorna o valor de uma chave numa determinada posição da lista.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Posição a buscar a chave<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o objeto definido na posição.<br/>
 * Caso a posição seja negativa, o primeiro será retornado.<br/>
 * Caso a posição seja maior que o tamanho do mapa, o último elemento será retornado.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função obtém o elemento de um objeto mapa a partir da chave (ou Referência).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Referência)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o elemento de um determinado objeto mapa a partir da chave (ou referência) do elemento. O retorno deverá ser <br/>
 * armazenado em uma variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; <br/>
 * Freire/Softwell, Banco/SQL e o 2º parâmetro contendo a chave Maker. A partir desses valores o retorno será o valor<br/>
 * "Flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapGetObject(obj, key) {
  return obj.get(key);
}

/**
 * Essa função obtém todas as chaves ou referencias de um determinado objeto mapa.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista de chaves. O retorno deverá ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno será uma lista com a chave do objeto mapa, que seria Maker, Freire e Banco.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapKeys(obj) {
  return obj.getKeys();
}

/**
 * Essa função retorna a quantidade de valores que existe no objeto mapa.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o tamanho do objeto mapa, ou seja, a quantidade de valores que existe no mapa. O retorno pode ser armazenado numa variável do tipo Inteiro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno será 3, pois existe 3 valores no objeto mapa que são Flow, Softwell e SQL.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapLength(obj) {
  return obj.size;
}

/**
 * Essa função remove o elemento de um objeto mapa a partir da chave (ou Referência).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * 2. Chave (ou Referência)<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o elemento removido de um determinado objeto mapa a partir da chave (ou referência) do elemento. Caso o <br/>
 * elemento seja removido retorna Verdadeiro, caso contrário Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL e o 2º parâmetro contendo a chave Freire. A partir desses valores o elemento a ser removido será o valor "Flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMapRemoveObject(obj, key) {
  if (obj instanceof Map) {
    return obj.remove(key);
  }
  return -1;
}

/**
 * Essa função transforma um objeto Mapa em JSON.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON (Variante).<br/>
 * <br/>
 * Observação:<br/>
 * Não possui.
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
 * Essa função obtém todos os valores de um determinado objeto mapa.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista de valores. O retorno deverá ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro contendo um objeto mapa com as seguintes chaves e respectivos valores: Maker/Flow; Freire/Softwell, Banco/SQL. A partir desses valores o retorno será uma lista com os valores do objeto mapa, que seria Flow, Softwell e SQL.<br/>
 * <br/>
 * Versão: 1.0.0.1
 */
function ebfMapValues(obj) {
  return obj.getValues();
}

/**
 * Esta função associa um evento (ver observações) ao mapa passado como parâmetro.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Evento (click, dblclick, drag...) (Letras)<br/>
 * 3. Fluxo (opcional)  (Ver observação 3)<br/>
 * 4. Lista de Parâmetros do Fluxo (Variante, Opcional);<br/>
 * 5. Caminho relativo do Ícone (Letras, Opcional);<br/>
 * 6. Criar Marcador? (Caso verdadeiro, será criado um marcador toda vez que o evento for executado)<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura".<br/>
 * 2. Mais informações sobre os eventos suportados, consulte: <br/>
 * https://developers.google.com/maps/documentation/javascript/reference?hl=pt-br<br/>
 * 3. O fluxo executado receberá dois parâmetros automáticos referentes a Latitude e Longitude respectivamente.
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
 * Esta função obtém o endereço a partir das coordenadas informadas.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Latitude<br/>
 * 2. Longitude<br/>
 * 3. Fluxo que receberá o endereço<br/>
 * 4. Lista de parâmetros adicionais (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. É necessário que a biblioteca do Google Maps esteja importada através da função "Mapa - Importar biblioteca".<br/>
 * 2. Caso ocorra algum erro, o retorno será vazio e o erro será registrado no console.log do navegador
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
            console.log("Não foi possível obter o endereço a partir das coordenadas. Código do erro: " + status)
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
 * Esta função altera o ângulo de visualização do mapa para 45°.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Tipo do mapa (hybrid ou satellite)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Está função apenas funciona com os mapas do tipo "hybrid" ou "satellite";
 */
function ebfMapsAngle(map, type) {
  if (map) {
    map.setMapTypeId(type);
    map.setTilt(45);
  }
}

/**
 * Esta função calcula a distância e o tempo entre dois pontos.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante, opcional) Ver observações.<br/>
 * 2. Origem (Letras)<br/>
 * 3. Destino (Letras)<br/>
 * 4. Modo de Viagem (DRIVING, WALKING, BICYCLING);<br/>
 * 5. Nome do Fluxo de sucesso;<br/>
 * 6. Parâmetros do Fluxo de sucesso (Variante, opcional);<br/>
 * 7. Nome do Fluxo de erro;<br/>
 * 8. Parâmetros do Fluxo de erro (Variante, opcional).<br/>
 * <br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Ao informar o mapa no primeiro parâmetro, a rota será traçada automaticamente.<br/>
 * 3. O fluxo de sucesso receberá uma lista no primeiro parâmetro, contendo a distância em KM e o Tempo,  entre os dois pontos.
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
 * Esta função calcula a distância e tempo entre dois ou mais pontos a partir das coordenadas informadas.<br/>
 * <br/>
 * A distância é baseada em uma rota/trajeto através do modo informado.<br/>
 * <br/>
 * Caso precise calcular distância entre dois pontos lineares, utilize a função "Mapa - Obter Distância Linear Entre Dois Pontos"<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Origem Latitude (Fracionado)<br/>
 * 2. Origem Longitude (Fracionado)<br/>
 * 3. Destino Latitude (Fracionado)<br/>
 * 4. Destino Longitude (Fracionado)<br/>
 * 5. Lista de pontos (Variante, Opcional);<br/>
 * 6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 7. Fluxo de Callback<br/>
 * 8. Parâmetros adicionais para o fluxo de callback<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do objeto traçado<br/>
 * <br/>
 * Observações:<br/>
 * 1. O fluxo receberá no primeiro parâmetro uma lista com:<br/>
 * Distância: Texto;<br/>
 * Duração: Texto;<br/>
 * Distância: Valor em metros<br/>
 * Duração: Tempo em segundos.
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
 * Esta função centraliza o mapa de acordo com as coordenadas passadas.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura"
 */
function ebfMapsCenterMap(map, lat, lgt) {
  if (map) {
    var position = new google.maps.LatLng(lat, lgt);
    map.setCenter(position);
  }
}

/**
 * Esta função realiza a movimentação do ícone na rota desejada. A rota deve ser do tipo dinâmica.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Referência da Rota (Ver Observação 1)(Variante).<br/>
 * 2. Referência do Ícone (Ver Observação 2)(Variante).<br/>
 * 3. Procentagem da Rota Concluída (Ex: 0, 9, 10, 75. Onde 0 é a origem e 100 o destino) (Inteiro).<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Desenhar Rota Dinâmica";<br/>
 * 2. O segundo parâmetro é o retorno da função "Mapa - Criar Ícone para Rota";
 */
function ebfMapsChangeIconPosition(line, symbol, perc) {
  var icons = line.get('icons');
  icons[0].offset = perc + '%';
  line.set('icons', icons);
}

/**
 * Esta função obtém as coordenadas a partir de um endereço.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Endereço (Letras);<br/>
 * 2. Fluxo de sucesso (Fluxo);<br/>
 * 3. Lista de parâmetros adicionais para o fluxo (Variante, Opcional);<br/>
 * 4. Fluxo de erro (Fluxo);<br/>
 * 5. Lista de parâmetros adicionais para o fluxo de erro (Variante, Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação:<br/>
 * 1. O fluxo receberá automaticamente 2 parâmetros. O 1º será referente à Latitude e o 2º será referente à Longitude;<br/>
 * 2. Os parâmetros adicionais serão recebidos a partir do 3º parâmetro.<br/>
 * 3. É necessário que a biblioteca do Google Maps esteja importada através da função "Mapa - Importar biblioteca".
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
 * Esta função cria um marcador no Mapa.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * 4. Título do Marcador (Letras)<br/>
 * 5. Caminho da imagem (Letras, Opcional) (Relativo ou absoluto)<br/>
 * 6. Animação (opcional) (1 - Bounce, 2 - Drop)<br/>
 * 7. Ícone Padrão (lógico)<br/>
 * 8. Letra do Ícone (Letras) (Um caractere)<br/>
 * 9. Cor do Ícone (Letras) (Hexadecimal)<br/>
 * 10. Cor da Letra (Letras) (Hexadecimal)<br/>
 * 11. Centralizar (Lógico)<br/>
 * 12. Mensagem ao clicar (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * Marcador Criado(Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura"
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

	 // Parâmetros do texto que será exibido no clique
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
 * Esta função cria um ícone para ser utilizado na rota dinâmica.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Símbolo (Ver Observação 1) (Letras);<br/>
 * 2. Cor do Ícone (Hexadecimal ou  constante Cor);<br/>
 * 3. Opacidade do Ícone (Ex: 1.0, 0.5, 0.8) (Letras);<br/>
 * 4. Cor da borda do ícone (Hexadecimal ou  constante Cor);<br/>
 * 5. Tamanho da borda (Ex: 1, 4, 6, 14) (Inteiro);<br/>
 * 6. Rotação do Ícone em Graus (Ex: 45, 90, 180, 360) (Inteiro);<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do ícone criado para ser utilizado na rota.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Os símbolos podem ser obtidos através dos link's abaixo:<br/>
 * <br/>
 *     Exemplo de símbolos predefinidos:<br/>
 *     https://developers.google.com/maps/documentation/javascript/symbols?hl=pt-br#predefined<br/>
 * <br/>
 *     Exemplo de símbolos customizados:<br/>
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
 * Esta função traça rota entre dois pontos.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Origem Latitude (Letras);<br/>
 * 3. Origem Longitude (Letras);<br/>
 * 4. Destino Latitude (Letras);<br/>
 * 5. Destino Longitude (Letras);<br/>
 * 6. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING) (Letras);<br/>
 * 7. Ícone (Ver Observação 3)(Variante);<br/>
 * 8. Posição Inicial do Ícone na Rota (Ver Observação 4)(Inteiro);<br/>
 * 9. Flexibilidade do Ícone (Define se o ícone deve rotacionar de acordo com a rota) (Lógico); <br/>
 * 10. Cor da Linha (Hexadecimal ou constante Cor);<br/>
 * 11. Opacidade da Linha (Ex: 0.3, 0.5 1.0, quanto mais próximo de 0, mais transparente fica) (Letras);<br/>
 * 12. Callback que receberá o objeto de resposta do traçado;<br/>
 * 13. Lista de parâmetros adicionais (Opcional);<br/>
 * 14. Callback de erro;<br/>
 * 15. Lista de parâmetros adicionais para o callback de erro (Opcional);<br/>
 * 16. Lista de pontos (Variante, Opcional); <br/>
 * <br/>
 * Retorno:<br/>
 * Uma lista contendo Referência da rota traçada;<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. As coordenadas precisam ter coerência para que a rota seja traçada;<br/>
 * 3. O sétimo parâmetro é o retorno da função "Mapa - Criar Ícone Para Rota Dinâmica";<br/>
 * 4. Posição do ícone na rota, sendo 0 a origem e 100 o destino;<br/>
 * 5. O callback de erro recebe no primeiro parâmetro o status referente ao erro;
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
        //Adiciona a distância/tempo entre os pontos.
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
 * Esta função cria um mapa na moldura especificada.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Formulário;<br/>
 * 2. Moldura (Componente)<br/>
 * 3. Zoom (Inteiro, Opcional);<br/>
 * 4. Latitude (Fracionado)<br/>
 * 5. Longitude (Fracionado)<br/>
 * 6. Tipo do Mapa (hybrid, roadmap, satellite ou terrain) (Letras);<br/>
 * 7. Objeto JSON contendo as configurações do Mapa (Variante, Opcional) (Ver observação 4);<br/>
 * <br/>
 * Retorno:<br/>
 * Mapa Criado (Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. Utilize a função "Mapa - Importar biblioteca" antes de utilizar esta função.<br/>
 * 2. No Internet Explorer caso o mapa seja criada em outra aba, a mesma só será renderizada a parti da versão do (IE 11).<br/>
 * 3. Por determinação da API do GoogleMaps, é recomendado que o Mapa seja criado em um elemento visível na tela. Caso seja necessário criar um Mapa em uma Aba que não esteja ativa, basta utilizar o evento 'Ao Clicar na Aba' e realizar as operações desejadas.<br/>
 * 4. As configurações desejadas podem ser obtidas através do link a seguir: <br/>
 * <br/>
 * https://mapstyle.withgoogle.com<br/>
 * <br/>
 * Após configurar o Mapa no link acima, o mesmo devolve um JSON que será semelhante ao código abaixo. Caso o retorno não seja semelhante ao disponível abaixo, copie<br/>
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
    // Caso o navegador suporte MutationObserver, cria um listener para quando houver modificação
    // no atributo style da Aba, forçar um recarregamento do mapa, assim corrigindo o problema quando
    // se cria um mapa dentro de um elemento invisível
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
 * Esta função obtém as coordenadas baseado na posição do Street View.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Objeto Street View (Variante)<br/>
 * 2. Fluxo a ser Chamado (Fluxo)<br/>
 * 3. Lista de Parâmetros (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Entrar em Modo Street View";<br/>
 * 2. O fluxo receberá automaticamente 2 parâmetros. O 1º será referente à Latitude e o 2º será referente à Longitude;<br/>
 * 3. Os parâmetros adicionais serão recebidos a partir do 3º parâmetro.
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
 * Esta função obtém o objeto Geocode a partir das coordenadas informadas. O fluxo informado receberá o endereço das coordenadas e<br/>
 * o retorno dessa função poderá ser executado para obter atributos do objeto GeoCode.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Latitude<br/>
 * 2. Longitude<br/>
 * 3. Fluxo que receberá o endereço(Fluxo)<br/>
 * 4. Lista de parâmetros adicionais (Opcional)(Lista)<br/>
 * 5. Enviar retorno como objeto JSON(Opcional)(Lógico)<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. É necessário que a biblioteca do Google Maps esteja importada através da função "Mapa - Importar biblioteca".<br/>
 * 2. Caso ocorra algum erro, o retorno será vazio e o erro será registrado no console.log do navegador<br/>
 * 3. Caso seja informado 'Verdadeiro'(true), será enviado para o fluxo de sucesso o objeto completo do retorno. Os atributos contidos no retorno em questão disponíveis para consulta no link abaixo: <br/>
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
          console.log("Não foi possível obter o endereço a partir das coordenadas. Código do erro: " + status)
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
 * Essa função retorna de forma assíncrona uma lista de locais próximos de acordo a localização e o filtro informado.<br/>
 *   <br/>
 * Parâmetros:<br/>
 * 1. Objeto Mapa (Variante) Retorno da função Mapa - Criar Mapa em uma Moldura.<br/>
 * 2. Latitude (Letras).<br/>
 * 3. Longitude (Letras).<br/>
 * 4. Raio (Opcional)  (Inteiro) Ver observação 1.<br/>
 * 5. Filtro (Letras) Ex.:airport,  hospital, police e etc.  (Ver observação 2).<br/>
 * 6. Criar marcador? (Lógico).<br/>
 * 7. URL do ícone (Opcional) (Letras).<br/>
 * 8. Fluxo de Callback (Ver observação 3).<br/>
 *   <br/>
 * Retorno:<br/>
 * Não possui;<br/>
 *   <br/>
 * Observações:<br/>
 * 1. O Raio é definido em km, caso não seja informado o mesmo assumirá o padrão de 1km.<br/>
 * 2. Para consultar os tipos suportados consultar https://developers.google.com/places/supported_types?hl=pt-br.<br/>
 * 3. O fluxo definido no 8º parâmetro deve conter dois parâmetros que receberão o retorno da função: <br/>
 *     1º Lista de JSON com informações dos locais.<br/>
 *     2º Lista com as referências dos marcadores, nulo caso o 6º parâmetro esteja definido como falso.<br/>
 * 4. A função possuí um limite de 50 km para o raio informado.
 */
function ebfMapsGetNearbySearch (map, lat, lng, radius, filter, mk, urlIcon, callback){
  if(isNullOrEmpty(map)){
    handleException(new Error("Objeto Mapa (GoogleMaps) não definido."));
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
 * Esta função importa a biblioteca de funções para utilização das funções disponíveis na categoria Google Maps.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Chave(API Key) (Letras);<br/>
 * 2. Regra a ser executada (Fluxo)(Ver observação 1);<br/>
 * 3. Parâmetros da regra (Variante)(Lista com os valores);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. A regra será executada assim que a biblioteca for carregada.
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
 * Esta função define um perímetro, de forma poligonal, no mapa. <br/>
 * <br/>
 * Parâmetro(s):.<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Lista com Latitude/Longitude (Ver observação 2)(Variante);<br/>
 * 3. Cor (Letras, Cor em hexadecimal. Exemplo: FF0000);<br/>
 * 4. Opacidade da Borda (Fracionado);<br/>
 * 5. Tamanho da Borda (Inteiro);<br/>
 * 6. Opacidade da Área Interna  (Fracionado);<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. Lista de lista. A primeira posição será a Latitude e a segunda posição será a Longitude;
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
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.
 */
function ebfMapsRemoveAllListeners(map){
  if(map){
    google.maps.event.clearInstanceListeners(map);
  }
}

/**
 * Esta função remove um ou vários marcadores do mapa.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Marcador ou Lista de Marcadores (Variante);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Só serão removidos os marcadores que foram criados a partir da função "Mapa - Criar Marcador";<br/>
 * 2. Ao passar uma lista de marcadores, todos serão removidos do Mapa.
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
 * Permite criar ou modificar uma camada responsável pela visualização o tráfego atual, as rotas de transporte público ou rotas de ciclovia da cidade. <br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante);<br/>
 * 2. Referência da Camada (Variante - Opcional);<br/>
 * 3. Inteiro (1-Tráfego, 2-Transporte Público, 3- Ciclovias);<br/>
 * 4. Visível? (Lógico).<br/>
 * <br/>
 * Retorno:<br/>
 * A função terá como retorno a referência da Camada criada/modificada. (Variante).<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. O segundo parâmetro só deve especificado, caso seja necessário modificar uma camada existente.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como 1º Parâmetro: a Referência do Mapa, 2º Parâmetro: Nulo, 3º Parâmetro: 1, 4º Parâmetro: Verdadeiro. Será retornado a referência de uma camada visível responsável por exibir o tráfego atual no mapa.
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
 * Esta função define um perímetro circular com base em uma coordenada.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Latitude (Fracionado)<br/>
 * 3. Longitude (Fracionado)<br/>
 * 4. Raio (Inteiro);<br/>
 * 5. Unidade de Medida;(Letras, Opcional)(km para Quilômetro, ml para Milhas)<br/>
 * 6. Título(Letras)<br/>
 * 7. Cor (Letras, Cor em hexadecimal. Exemplo: FF0000).<br/>
 * 8. Centralizar? (Lógico)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do Objeto Perímetro Circular<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";
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
 * Esta função habilita a função street view no mapa.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Formulário<br/>
 * 2. Componente<br/>
 * 3. Mapa (Variante)<br/>
 * 4. Latitude (Letras)<br/>
 * 5. Longitude (Letras)<br/>
 * 6. Ângulo Vertical (Inteiro)<br/>
 * 7. Ângulo Horizontal (Inteiro)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referencia do objeto street view panorama.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";
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
 * Esta função alterna entre o modo normal e o modo street view do mapa.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Objeto Street View (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Entrar em Modo Street View";
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
 * Esta função traça rota entre dois ou mais pontos.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Origem (Letras)<br/>
 * 3. Destino (Letras)<br/>
 * 4. Lista de pontos (Variante, Opcional);<br/>
 * 5. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 6. Criar Marcadores (Lógico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura".
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
 * Esta função traça rota entre dois ou mais pontos.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Mapa (Variante)<br/>
 * 2. Origem Latitude (Fracionado)<br/>
 * 3. Origem Longitude (Fracionado)<br/>
 * 4. Destino Latitude (Fracionado)<br/>
 * 5. Destino Longitude (Fracionado)<br/>
 * 6. Lista de pontos (Variante, Opcional);<br/>
 * 7. Modo da Rota (BICYCLING, DRIVING, TRANSIT ou WALKING).<br/>
 * 8. Criar Marcadores (Lógico, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Referência do objeto traçado<br/>
 * <br/>
 * Observações:<br/>
 * 1. O primeiro parâmetro é o retorno da função "Mapa - Criar Mapa em uma Moldura";<br/>
 * 2. As coordenadas precisam ter coerência para que a rota seja traçada.
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
 * Esta função associa um fluxo à um determinado marcador do mapa que será executado quando o evento for disparado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * <br/>
 * 1. Referência do Marcador (Variante).<br/>
 * 2. Tipo de Evento (Letras).<br/>
 * 3. Nome do Fluxo (Letras).<br/>
 * 4. Lista de Parâmetros do Fluxo (Variante).<br/>
 * 5. Objeto do Evento (Lógico).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * Observações:<br/>
 * <br/>
 * 1. A referência do marcador deve ser obtida através da função Mapa - Criar Marcador.<br/>
 * 2. Os tipos de evento são os mesmos do JavaScript (click, dblclick, mouseover, etc...).<br/>
 * 3. Caso o parâmetro Objeto do Evento for verdadeiro, o primeiro parâmetro do fluxo irá receber o objeto do evento.
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
 * Essa função mascara o conteúdo passado no primeiro parâmetro de acordo com a máscara <br/>
 * passada no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros<br/>
 * 1. Conteúdo a ser mascarado <br/>
 * 2. Máscara (Letras)<br/>
 * <br/>
 * Retorno<br/>
 * Conteúdo Mascarado (Letras)<br/>
 * <br/>
 * Observação:<br/>
 * 1. O tipo de dado passado no primeiro parâmetro é levado em consideração. Se o conteúdo passado no primeiro<br/>
 * parâmetro for um valor, o mesmo tem que ser passado como fracionado.<br/>
 * 2. A função, funciona apenas como uma máscara para o valor da tela. Não influencia no resultado que irá para o banco.<br/>
 * <br/>
 * Ex.:  CPF e CNPJ - Letras<br/>
 *         PLACA - Letras<br/>
 *         ANO/Mês - Letras<br/>
 *         Valor - Fracionado<br/>
 * <br/>
 * Versão: 1.0.0.0
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
  var r = "xU#*l", rt = [], nv = "", t, x, a = [], j=0, index=0; rx = {"x": "A-Za-z", "U": "A-ZÀ-Úa-zà-ú", "#": "0-9", "*": "A-Za-z0-9", "l": "A-ZÀ-Úa-zà-ú" };
  var ry = {"x": "A-Za-zÀ-ú", "*": "A-Za-zÀ-ú0-9", "c": " .,;:%()'{}|?&<>!{}*^_"};
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
 * Parâmetros<br/>
 * 1. Valor para cálculo (Logaritmando).<br/>
 * <br/>
 * Retorno: <br/>
 * Logaritmo na base 10 do valor determinado. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como o 1° Parâmetro sendo: 86 o retorno será 1,934498451.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMath10Logarithm(theta) {
  var result = Math.log(toDouble(theta)) / Math.log(10);
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Logaritmo na Base 10.";
  }
  return result;
}

/**
 * A função trigonométrica arco cosseno ou co-seno retorna o cosseno inverso de um número. O ângulo cosseno em radianos é passado<br/>
 * no primeiro parâmetro, retornando assim o arco cosseno do ângulo passado.<br/>
 *  <br/>
 * Parâmetros: <br/>
 * 1. Ângulo em radianos (deve estar entre -1 e 1).<br/>
 * <br/>
 * Retorno: <br/>
 * Arco cosseno do ângulo determinado. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° parâmetro sendo: -0,5 o retorno será aproximadamente 2,094395.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O ângulo retornado é fornecido em radianos no intervalo de 0 (zero) a pi. <br/>
 * 2. Para garantir a integridade das operações matemáticas, utilize conversão: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por parâmetro.<br/>
 * 3. Se você quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a função Para Graus.
 */
function ebfMathArcCosine(theta) {
  var result = Math.acos(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Arco Cosseno.";
  }
  return result;
}

/**
 * A função trigonométrica arco seno obtém o arco seno ou o seno inverso de um número. O ângulo seno é passado no primeiro parâmetro,<br/>
 * retornando assim o ângulo em radianos no intervalo de -pi/2 a pi/2.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Seno do ângulo desejado e deve estar entre -1 e 1.<br/>
 * <br/>
 * Retorno: <br/>
 * Arco seno do ângulo determinado. (Numérico)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: -0,5 o retorno será aproximadamente -0,5235987.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por parâmetro.<br/>
 * 2. Se você quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a função Para Graus.
 */
function ebfMathArcSine(theta) {
  var result = Math.asin(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Arco Seno.";
  }
  return result;
}

/**
 * A função trigonométrica arco tangente obtém o arco tangente ou a tangente inversa de um número. O ângulo tangente é<br/>
 * passado no primeiro parâmetro, retornando assim o ângulo em radianos no intervalo de -pi/2 a pi/2.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Tangente do ângulo desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Arco tangente do ângulo determinado. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 1 o retorno será aproximadamente 0,78539816.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão: "Para Graus" ou "Para Radiano"<br/>
 * conforme o tipo de dados passado por parâmetro.<br/>
 * 2. Se você quiser converter o resultado de radianos em graus, multiplique-o por 180/PI ou use a função Para Graus.
 */
function ebfMathArcTangent(theta) {
  var result = Math.atan(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Arco Tangente.";
  }
  return result;
}

/**
 * Um Arranjo simples ou arranjo sem repetição obtém o cálculo do arranjo de um valor. <br/>
 * Um arranjo ou permutação sem repetição é o cálculo de quantas maneiras diferentes é possível colocar n elementos de um <br/>
 * conjunto com d elementos escolhidos em seqüência, sem repetição. A fórmula do cálculo de um arranjo é a seguinte: n! / (n-d)!<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Corresponde ao número de elementos do conjunto (n na fórmula acima);<br/>
 * 2. Corresponde a quantidade de elementos do conjunto (d na fórmula acima).<br/>
 * <br/>
 * Retorno:<br/>
 * Cálculo do arranjo do valor determinado. (Inteiro)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1° parâmetro sendo: 5 e o 2° parâmetro sendo: 3 o retorno será 60 (Inteiro).<br/>
 * 1. Assumindo como o 1° parâmetro sendo: 20 e o 2° parâmetro sendo: 3 o retorno será 6840 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Parâmetros:<br/>
 * 1. Número a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor arredondado para cima. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° parâmetro sendo: 9,5 o retorno será 10<br/>
 * 2. Assumindo como o 1° parâmetro sendo: 5,4 o retorno será 6.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathCeil(theta) {
  var result = Math.ceil(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido arredondando o valor para cima.";
  }
  return result;
}

/**
 * Uma combinação simples ou combinação sem repetição indica quantas variedades de subconjuntos diferentes com s elementos existem em um conjunto com n elementos. <br/>
 * Só é usada quando não há repetição de membros dentro do conjunto. A fórmula de cálculo de uma combinação é a seguinte: n! / s! * (n - s)!<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Quantidade de elementos do conjunto (corresponde ao n da fórmula acima).<br/>
 * 2. Quantidade de elementos nos subconjuntos (corresponde ao s da fórmula acima).<br/>
 * <br/>
 * Retorno: <br/>
 * Cálculo da combinação. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como o 1° parâmetro sendo: 3 e o 2° parâmetro sendo: 2, o retorno será 3.<br/>
 * 2.Assumindo como o 1° parâmetro sendo: 4 e o 2° parâmetro sendo: 2, o retorno seria 6.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathCombination(elements, choices) {
  return ebfMathArrangement(elements, choices) / ebfMathFactorial(choices);
}

/**
 * Obtém o cosseno de um ângulo. Se o ângulo estiver em graus, multiplique-o por PI/180 ou use a função Para Radianos para convertê-lo em radianos.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Ângulo em radianos cujo cosseno você deseja obter.<br/>
 * <br/>
 * Retorno:<br/>
 * Cosseno do ângulo determinado. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 1,047 o retorno será 0,500171.<br/>
 * 2. Assumindo como o 1° Parâmetro sendo: 60*PI/180 o retorno será 0,5.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathCosine(theta) {
  var result = Math.cos(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Cosseno.";
  }
  return result;
}

/**
 * Obtém a raiz cúbica de um valor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser avaliado.<br/>
 * <br/>
 * Retorno:<br/>
 * Raiz cúbica do valor determinado. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 8, o retorno será 2.<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 27, o retorno será 3.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathCubeRoot(value) {
  value = toDouble(value); 
  var result = Math.pow(value, 1/3);
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo da Raiz Cúbica.";
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
 * Retorna o Logaritmo natural de um número. Os Logaritmos naturais se baseiam na constante e (2,71828182845904).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. É o número real positivo para o qual você deseja obter o logaritmo natural.<br/>
 * <br/>
 * Retorno: <br/>
 * Logaritmo na base E do valor determinado. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo:86, o resultado será:4,454347.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathELogarithm(theta) {
  var result = Math.log(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Logaritmo Neperiano.";
  }
  return result;
}

/**
 * O Fatorial de um número natural n é o produto de todos os inteiros positivos menores ou iguais a n. <br/>
 * Isso é escrito como n! e lido como "fatorial de n ".<br/>
 * <br/>
 * Parâmetros <br/>
 * 1. Valor (n).<br/>
 * <br/>
 * Retorno: <br/>
 * Fatorial do valor determinado. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 5 o retorno será: 120.<br/>
 * 2. Assumindo como o 1° Parâmetro sendo: 4 o retorno será: 24.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathFactorial(value) {
  var result = 1;
  value = toLong(value);
  if (value < 0) {
    throw "Argumento inválido no cálculo em análise combinatória.";
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
 * Parâmetros:<br/>
 * 1. Número a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor arredondado para baixo. (Fracionado)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° parâmetro sendo: 9,5 o retorno será 9,0.<br/>
 * 2. Assumindo como o 1° parâmetro sendo: 5,7 o retorno será 5,0.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathFloor(theta) {
  var result = Math.floor(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido arredondando o valor para baixo.";
  }
  return result;
}

/**
 * Constante de Néper ou Exponencial Neperiano. O número de Néper é a base dos logaritmos naturais.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a constante de Néper é aproximadamente  (2,718 281 828 459 045 235 360 287). (Fracionado)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathNeper() {
  return Math.E;
}

/**
 * Obtém o valor de PI.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor de PI (3,1415926535897...) (Fracionado.)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathPI() {
  return Math.PI;
}

/**
 * Obtém o seno de um ângulo.<br/>
 * Se o parâmetro estiver em graus, multiplique-o por PI/180 ou use a função Para Radianos para convertê-lo em radianos.<br/>
 * <br/>
 * Parâmetros <br/>
 * 1. Ângulo em radianos para o qual você deseja obter o seno.<br/>
 * <br/>
 * Retorno: <br/>
 * Seno do ângulo determinado. (Número)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como o 1° Parâmetro sendo PI (3.14159265359) , o retorno será aproximadamente 0.0206...<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function ebfMathSine(theta) {
  var result = Math.sin(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo do Seno.";
  }
  return result;
}

/**
 * Obtém a tangente de um ângulo.<br/>
 * Se o parâmetro estiver em graus, multiplique-o por PI/180 ou use a função Para Radianos para convertê-lo em radianos.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Ângulo em radianos para o qual se deseja a tangente.<br/>
 * <br/>
 * Retorno: <br/>
 * Tangente do ângulo determinado.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo o Parâmetro 1 como 0,785, o retorno seria 0,99920 aproximadamente.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfMathTangent(theta) {
  var result = Math.tan(toDouble(theta));
  if (isNaN(result)) {
    throw "Argumento inválido para o cálculo da Tangente.";
  }
  return result;
}

/**
 * Esta função recebe um elemento de áudio ou vídeo e carrega o seu conteúdo.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Referência do elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Nâo possui.
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
 * Esta função recebe um elemento de áudio ou vídeo e reproduz o seu conteúdo.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Referência do elemento HTML (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Nâo possui.
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
 * Função que cria um novo componente Texto Longo dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da aba (caso ainda não exista,será criada);<br/>
 * 2. Posição X do componente;<br/>
 * 3. Posição Y do componente;<br/>
 * 4. Largura do componente;<br/>
 * 5. Altura do componente;<br/>
 * 6. Descrição do componente;<br/>
 * 7. Valor inicial do componente;<br/>
 * 8. Nome interno do componente. Caso não definido, será dado com a descrição (Parâmetro 6);<br/>
 * 9. Quebra de Linha do valor inserido (Parâmetro 7);<br/>
 * 10. Container;<br/>
 * 11. Estilo CSS;<br/>
 * <br/>
 * Retorno:<br/>
 * Nome interno definido para o componente.(Variante)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A função não vai ter retorno caso seja salva na camada servidor.
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
 * Recebe um componente memo e transforma em texto rico básico.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está localizado o componente Memo.<br/>
 * 2. Componente memo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Sigla do modo do sistema.<br/>
 * <br/>
 * Sigla do Modo:<br/>
 * d - Modo Projeto<br/>
 * p - Modo Gerente<br/>
 * n - Modo Normal<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.
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
 * Moda é um termo estatístico usado para para obter o valor que mais se repete ou que possui a maior freqüência <br/>
 * dentro de uma coluna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente Grade<br/>
 * 3. Nome do Campo<br/>
 * <br/>
 * Retorno:<br/>
 * Valor que mais se repete entre os valores referente ao campo informado (Inteiro)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso a propriedade paginação esteja ativado, só será retornado os valores referente a página em questão.<br/>
 * 2. Caso não exista moda(nenhum valor que se repete) será retornado um campo em branco, ou seja nenhum valor.<br/>
 * <br/>
 * Exemplos: <br/>
 * Calculando a idade da moda de uma classe de alunos a pesquisa revelou as seguintes idades:<br/>
 * 18, 18, 19, 20, 21, 21, 22, 23, 23, 23, 24, 25, 26.<br/>
 * A função retornará a idade que mais aparece na pesquisa. Neste caso a idade foi de 23 ano de idade.
 */
function ebfModaGridColumn(form, gridName, columnName) {  
  var values = new Map();
  var mode = null;  
  var grid = $c(gridName, form);
  if(!grid){
    handleException(new Error("Componente "+gridName+" não encontrado"));
    return;
  }
  var lines = grid.getRowCount()
  var rNc = grid.getRealNameColumn(columnName);
  var ref = grid.iscCanvas;
  // Percorre os elementos da grid e adiciona no Map seus valores sem repetição.
  // No momento que um valor já existe, incrementa-se apenas a quantidade de repetição.
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

  // Percorre o Map em busca da moda, ou seja, o elemento que tenha maior repetição.
  // Caso haja mais de um com a mesma repetição, o primeiro serÃ¡ retornado.
  var repetition = 1;
  for (var i = 0; i < values.size; i++) {
    var quantity = values.getValues()[i];
    if (quantity > repetition) {
      repetition = quantity;
      mode = values.getKeys()[i];
    }
  }
  
  // Se a repetição for 1, então não houve moda.
  if (repetition == 1) {
    mode = null;
  }
  
  return mode;
}

/**
 * Esta função recebe o nome do componente MultiSelect e retorna os valores que foram selecionados.<br/>
 * <br/>
 * Parâmetros:<br/>
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
 * Esta função altera os valores selecionados na lista do componente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do MultiSelect. (Componente)<br/>
 * 2. Sequência de valores separados por vírgula ','. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * 		<br/>
 * Observação:<br/>
 * 1.Ao inserir a sequência de valores como parâmetro, colocar valores como: 1,2,3.<br/>
 * 2.Utilizar os mesmo valores contidos na lista de valores do componente. <br/>
 * 3.Caso um dos valores inseridos não esteja na lista ele será ignorado.
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
 * Essa função remove todos os elementos do componente Multiselect passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente Multiselect<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. Irá ser exibido a lista Carros com os elementos removidos.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Essa função Insere um elemento no componente Multiselect.  Passando como parâmetro o componente Lista, o valor chave (que será o valor à ser salvo no banco) e o valor que representará o valor chave.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente Multiselect<br/>
 * 2. Valor Chave (Letras)<br/>
 * 3. Valor que representará a chave (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * O retorno (variante) somente para a camada Servidor, será o valor inserido no componente Multiselect.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O campo chave deve obrigatoriamente ser do tipo Letras. Caso contrário, o componente não irá exibir os valores.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro: Carros(Lista) contendo os elementos 1 - Usado e 2 - Novo, sendo 1 e 2 o valor chave e  "Usado e Novo" o valor que representam o valor chave. O 2º parâmetro sendo 3 e o 3º parâmetro sendo "Quebrado". O retorno será a lista Carros contendo os elementos 1 - Usado, 2 - Novo e 3 - Quebrado.
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
 * Remove o registro atual do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Cancela o modo de edição de um registro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * O uso desta função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Utilizar quando existir um fluxo associado ao evento "Depois de Alterar" e este fluxo receba como parâmetros valores dos componentes.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfNavEditSaveRecordAsync() {
  var nav = $mainform().d.n;
  if (nav) {  
    nav.actEditSave();
  }
}

/**
 * Vai para o primeiro registro do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Vai para o registro definido no parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Posição do registro<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Cancela o modo de inclusão de um registro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * O uso desta função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfNavIncludeCancel() {
  var nav = $mainform().d.n;
  if (nav) {
    nav.timeout(nav.actIncludeCancel, 0);
  }
}

/**
 * Inclui os dados como um novo registro no banco e fica novamente em modo de inserção para um novo cadastro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Inclui os dados como um novo registro no banco e fica novamente em modo de inserção para um novo cadastro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Utilizar quando existir um fluxo associado ao evento "Depois de Inserir" e este fluxo receba como parâmetros valores dos componentes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * Não possui<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Caso ocorra um erro durante a inserção dos dados no banco, não é possível capturar a exceção com as funções<br/>
 * try/catch, pois a função simula a gravação de um registro que está sendo editado e, em seguida, gravado no formulário.<br/>
 * Caso deseje tratar as exceções, deve ser utilizada a função "Executar Atualização".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * Não possui<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Caso ocorra um erro durante a inserção dos dados no banco, não é possível capturar a exceção com as funções<br/>
 * try/catch, pois a função simula a gravação de um registro que está sendo editado e, em seguida, gravado no formulário.<br/>
 * Caso deseje tratar as exceções, deve ser utilizada a função "Executar Atualização".<br/>
 * 3. Utilizar quando existir um fluxo associado ao evento "Depois de Inserir" e este fluxo receba como parâmetros valores dos componentes.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfNavIncludeSaveRecordAsync() {
  var nav = $mainform().d.n;
  if (nav) {
      nav.actIncludeSave();
  }
}

/**
 * Vai para o último registro do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Esta função ao ser executada no evento ao entrar de um formulário, corre o risco do form ainda está carregando e a<br/>
 * função ocasionar um erro, pois se trata de um processo assíncrono. Para evitar tal problema, agende a execução do fluxo.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Vai para o próximo registro do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Vai para o registro anterior do formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfNavRefreshCurrentRecord() {
  var nav = $mainform().d.n;
  if (nav) {  
    nav.execAjaxEval("refresh");
  }
}

/**
 * Atualiza o formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O uso dessa função tem uma melhor performance quando usada em regras clientes.<br/>
 * 2. Esta função atualiza todo o formulário.
 */
function ebfNavRefreshForm() {
  parent.location.reload();
}

/**
 * Função que permite que um novo botão seja adicionado na barra de navegação.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da imagem que deverá aparecer (A mesma deverá estar localizada em "assets/icons" no contexto utilizado).<br/>
 * 2. Descrição (hint) que deverá aparecer<br/>
 * 3. Nome da REGRA (fluxo) que será executada ao se clicar no botão (esta regra deverá ser do tipo cliente).<br/>
 * 4. Lista de parâmetros para execução da função.<br/>
 * 5. Largura da Imagem.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Ao posicionar o mouse sobre a imagem, é necessário que haja outra com o mesmo nome da primeira mais '_over' para reproduzir o efeito de destaque neste evento.<br/>
 * Ex.: Nome da imagem : "enviar_email.gif"<br/>
 *        Imagem necessária: "enviar_email_over.gif"<br/>
 * 2. A imagem deverá ser colocada no diretório "assets/icons" no contexto utilizado.
 */
function ebfNavigationFormAddButton(img, caption, func, params, size){
  if(!size){
    size = 40;
  }
  func = reduceVariable(func, false);
  d.n.addMainButton("assets/icons/"+img, caption, function(){executeJSRule(ebfGetSystemID(), ebfGetFormID(), func, params)}, size);  
}

/**
 * Função que cria um novo componente Imagem dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (caso não seja definida, a aba não será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do componente.<br/>
 * 5. Altura do componente.<br/>
 * 6. Descrição do componente.,<br/>
 * 7. URL relativa da imagem desejada. (Exemplo:Skins/Default/background.jpg)<br/>
 * 8. Tipo  - Tipo  = 1 (Upload) / Tipo  = 2 (Digital Capture) / Tipo  = 3 (URL)  <br/>
 * 9. Nome do componente<br/>
 * 10. Dica do Componente (Letras)<br/>
 * 11. Container (Letras)<br/>
 * 12. Estilo CSS (Letras)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Usado para quebrar a linha (pular linha) em um texto, onde o parâmetro recebido será a quantidade de linhas à serem<br/>
 * puladas.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Quantidade de quebra de linhas.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um texto com a quantidade de quebra de linha passada como parâmetro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Em um processamento com uma concatenação onde o 1º parâmetro é "Maker" (Texto) o segundo é uma Quebra de 1 Linha <br/>
 * (Função "Quebra de linha" passando 1(Inteiro) como parâmetro) e o terceiro é "Flow" (texto), o retorno seria:<br/>
 * "Maker<br/>
 * // Quebra de Linha<br/>
 * Flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Usado para quebrar a linha (pular linha) com retorno (\r\n) em um texto, onde o parâmetro recebido será a <br/>
 * quantidade de<br/>
 * linhas à serem puladas.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Quantidade de quebra de linhas.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um texto com a quantidade de quebra de linha passada como parâmetro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Em um processamento com uma concatenação onde o 1º parâmetro é "Maker" (Texto) o segundo é uma <br/>
 * Quebra de 1 Linha <br/>
 * (Função "Quebra de linha" passando 1(Inteiro) como parâmetro) e o terceiro é "Flow" (texto), o retorno seria:<br/>
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
 * Muda o foco do componente para o próximo componente de acordo com a tabulação.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. ID ou Nome do Componente em foco.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Pode ser utilizado o nome do componente ou o ID, obtendo através da função "Obter ID do Componente".
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
 * Esse função exibe uma notificação ao usuário fora do contexto de uma página da web.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Título.<br/>
 * 2. Mensagem.<br/>
 * 3. URL do Ícone (Opcional);<br/>
 * 4. URL da Imagem (Opcional);<br/>
 * 5. Tempo de Exibição em segundos (Opcional);<br/>
 * 6. ID (Opcional);<br/>
 * 7. Fluxo ao clicar na notificação (Opcional);<br/>
 * 8. Lista de parâmetros do fluxo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função só irá notificar o usuário, se o mesmo tiver concedido permissão.<br/>
 * 2. Ao definir o 6º parâmetro, caso a notificação esteja em exibição e uma nova seja lançada esta será sobreescrita.
 */
function ebfNotification(title, message, icon, image, timer, tag, flow, params){
  if(Notification.permission === "default"){
    Notification.requestPermission(function(permission){
      if(permission === "granted")
        notify();
      else if(permission === "denied")
        console.log("Solicitação de permissão bloqueada pelo usuário");
    });
  }else if(Notification.permission === "denied"){
     console.log("Notificação bloqueada pelo usuário");
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
 * Esse função solicita a permissão de notificação ao usuário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Essa função só realizar a solicitação ao usuário caso o status da permissão seja "default". Utilizar a função "Notificação - Obter Status".
 */
function ebfNotificationRequestPermission(){
  Notification.permission != "default" ? null : Notification.requestPermission();
}

/**
 * Esta função associa um evento no padrão W3C ( DOM Events Specification ) a uma linha ou célula de uma tabela criada<br/>
 * previamente com as funções da categoria Tabela.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. GUID da linha ou GUID da célula.. <br/>
 * 2. Descrição do evento.<br/>
 * 3. Fluxo que será executado quando o evento ocorrer.<br/>
 * 4. Lista com os parâmetros a serem passados para o fluxo. (Variante)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o componente passado no primeiro parâmetro seja nulo, o evento é associado ao formulário.<br/>
 * 2. O fluxo que será associado ao componente deve obrigatoriamente ser do tipo cliente.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Caso um fluxo de nome "Observador de eventos" precise ser chamado sempre que o usuário passar o mouse sobre um<br/>
 *  componente Texto chamado "MakerLabel1", a função ficaria:<br/>
 *    1º PARÂMETRO: Guid (Retorno das funções: Tabela - Inserir linha em uma tabela e Tabela - Inserir célula em uma tabela);<br/>
 *    2º PARÂMETRO: onmouseover (Letras);<br/>
 *    3º PARÂMETRO: Observador de eventos (Letras);<br/>
 *    4º PARÂMETRO: nulo;<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
var DOMEvent = new Array();

function ebfObjectEventAssociate(componente,evento,rule, ruleParams) {
          
     // Testa se o parâmetro do fluxo a ser executado é nulo
     if (typeof(ruleParams) == 'undefined' || ruleParams == null) {
            ruleParams = '';
     }
     
     var component = $w(componente);
     
     // Remove o 'on' do evento
     var startsWithOn = /^on(.+)/;
     var found = evento.match(startsWithOn);
     if (found != null && found != -1)
       evento = RegExp.$1;
       
     // Formata o nome do fluxo e define algumas variáveis
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
 * Esta função retorna uma lista contendo as chaves de  um elemento (DOM).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência do Elemento<br/>
 * <br/>
 * Retorno:<br/>
 * Lista de chaves do elemento (DOM)
 */
function ebfObjectKeys(object){
  return Object.keys(object);
}

/**
 * Função que possibilita que um componente seja movimentado dentro de um formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente.<br/>
 * 2. Permitir movimentação? (Opcional).<br/>
 * 3. Fluxo (Opcional).  <br/>
 * 4. Lista de parâmetros (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A regra associada no 3º parâmetro será dispara ao movimentar o componente, sendo que a mesma só poderá ser do <br/>
 * tipo cliente. A regra definida receberá automaticamente oito parâmetros. (Posição X, Posição Y, Posição X anterior, Posição Y anterior, Referência do Componente, Mouse X, Mouse Y, Referência da DIV).<br/>
 * 2. Caso não seja definido o 2º parâmetro o mesmo assumirá o valor true, permitindo a movimentação do componente.
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
 * Função iniciada ao finalizar a movimentação de um componente no formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente.<br/>
 * 2. Nome do fluxo a ser chamado.<br/>
 * 3. Lista de parâmetros para o fluxo.<br/>
 * <br/>
 * Retorno.<br/>
 * Não Possui
 */
function ebfOndragEnd(componentName,ruleName,ruleParams) {    
    $c(componentName).ondragend = function(comp,div){        
         executeJSRuleNoField(ebfGetSystemID(),ebfGetFormID(),ruleName,ruleParams);
     };
}

/**
 * Movimentar componentes de um formulário (Ondragdrop).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do componente que será movido<br/>
 * 2. Nome de um fluxo chamado (Opcional)<br/>
 * 3. Parâmetros da regra (Lista contendo parâmetros "Opcional")<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.
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
 * Parâmetros:<br/>
 * 1. URL que será aberta.<br/>
 * 2. Nome da janela (Não deve conter espaço nem caracteres especiais).<br/>
 * 3. Descrição da janela (Título do formulário flutuante, Opcional, Letras).<br/>
 * 4. Largura (Inteiro)<br/>
 * 5. Altura (Inteiro)<br/>
 * 6. Classe HTML adicional (Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para colocar um caractere & que esteja entre os dados do valor de um parâmetro de uma URL utilize a combinação: %26 + &<br/>
 * 2. A URL deve possuir o protocolo "http://" antes do endereço www, caso contrário, será tratato como uma URL relativa.<br/>
 * 3. O nome da janela não deve conter espaço.<br/>
 * 4. A função deve ser utilizara sempre a partir de um formulário flutuante.
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
 * Abre o formulário associado ao componente grade passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Grade.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para aparecer a lista de componente do formulário é necessário selecionar o formulário de trabalho no "Inicio" <br/>
 * do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário no início, pode-se escrever o nome (Letras) do componente (nome da <br/>
 * grade) como parâmetro.<br/>
 * 3. O evento deve estar no mesmo formulário onde está o componente grade.<br/>
 * 4. O Componente Grade deve estar com a propriedade Apenas Leitura definido como "Não".
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
 * Faz o login no sistema utilizando a leitura biométrica.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Sigla do sistema (Letras);<br/>
 * 2. DataConnection (Letras, Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfOpenLogonDigitalCapture(system, dataConnection) {
  openLogonDigitalCapture(system, dataConnection ? dataConnection : "");
}

/**
 * Esta função abre um determinado relatório podendo este estar ou não filtrado, a depender do parâmetro <br/>
 * passado. Se for filtrado, o segundo parâmetro deve receber valor lógico "verdadeiro" e no terceiro parâmetro <br/>
 * deve ter o filtro. Se não for filtrado, o segundo parâmetro deve ter valor lógico "falso" e o terceiro não deve <br/>
 * ser preenchido.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do relatório que será aberto.<br/>
 * 2. Para abrir filtrado, "verdadeiro", caso contrário, "falso".<br/>
 * 3. Filtro personalizado a ser passado.<br/>
 * 4. Título da Janela.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros o nome do relatório "Cidade" (Letras), a opção de filtro "verdadeiro" (Lógico) e o <br/>
 * filtro "cidade=Salvador", o resultado seria a abertura do relatório "Cidade" somente onde o campo Cidade <br/>
 * fosse Salvador.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O segundo parâmetro que recebe "verdadeiro" ou "falso" indica se o relatório deve ser filtrado pelo <br/>
 * formulário que o abre. Para casos em que os campos do filtro coincidem com campos presentes na consulta <br/>
 * do formulário. Exemplo: se o relatório tiver um filtro chamado "PES_COD" e esse campo estiver presente na <br/>
 * consulta do formulário chamador, o relatório resultante será filtrado pelo valor corrente do campo em questão.<br/>
 * 2. Caso o relatório tenha sido feito pelo gerador de relatórios legado (RB7), o filtro do terceiro parâmetro deve <br/>
 * ser montado com a seguinte sintaxe: <campo>=<valor>[;<campo>=<valor>[;...]].<br/>
 * Exemplo: PES_UF=BA; PES_CIDADE=4. Também pode usar uma lista com tamanho par, onde os índices <br/>
 * ímpares são os nomes dos campos e os pares são os valores. O valor do campo utilizado nesse parâmetro <br/>
 * sobrepõe o valor do campo que coincidir com a consulta do formulário, conforme explicado no segundo <br/>
 * parâmetro.<br/>
 * 2.1 Caso o relatório tenha sido feito pelo RB10, deve ser utilizado o nome do parâmetro definido no critério da <br/>
 * consulta.<br/>
 * 3. Caso o relatório possua o filtro between (Entre), deve ser utilizada ao fim a expressão _copy (em <br/>
 * minúsculo).
 */
function ebfOpenReport(reportID, useForm, filter, title) {
  openWFRReport2(sysCode, reportID, idForm, title?title:reportID, useForm, filter);
}

/**
 * Abre um relatório, passado no 1º parâmetro, sem desviar para uma tela ou perguntar por parâmetros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Código/Nome do Relatório.<br/>
 * 2. Parâmetros do Relatório.<br/>
 * 3. Tipo do relatório gerado (PDF, HTM, JPG, XLS, TXT, SCR).<br/>
 * 4. Abrir em uma nova janela ?<br/>
 * 5. Usar o gerador local ? ("True" para usar o gerador local, "False" caso contrário)<br/>
 * <br/>
 * Observações: <br/>
 * 1. O tipo SCR que pode ser informado no 3º parâmetro desta função está relacionado à abertura do relatório <br/>
 * em tela.<br/>
 * 2. Caso o relatório tenha sido criado no Report Builder 7 (Gerador de Relatórios legado), o filtro funciona da <br/>
 * seguinte forma: CAMPO=valor<br/>
 * 3. Caso o relatório tenha sido criado no Report Builder 10, o filtro deve ser o nome do parâmetro definido no <br/>
 * critério da consulta: PARAMETRO=valor.<br/>
 * 4. Caso queira definir vários parâmetros, basta separá-los por ponto e vírgula(;). Exemplo: <br/>
 * PARAMETRO1=valor;PARAMETRO2=valor2.<br/>
 * 5. Caso o relatório tenha sido criado no Report Builder 7, o filtro between (Entre), deve ser utilizada ao fim a <br/>
 * expressão _copy. Exemplo: CAMPO=valor ; CAMPO_copy = valor. As datas devem ser separadas por ponto <br/>
 * e vírgula e o copy deve ser todo minúsculo.<br/>
 * 6. Caso o relatório tenha sido criado no Report Builder 10, basta passar os parâmetros inicial e final <br/>
 * separados por ponto e vírgula.
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
 * Abre um relatório(passado no 1º parâmetro) com ordenação, sem desviar para uma tela ou perguntar por <br/>
 * parâmetros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Código/Nome do Relatório.<br/>
 * 2. Parâmetros do Relatório.<br/>
 * 3. Ordenação do Relatório.<br/>
 * 4. Tipo do relatório a ser gerado (PDF, HTM, JPG, XLS, TXT, SCR).<br/>
 * 5. Abrir em uma nova janela? ('True" para abrir em nova janela, "False" para abrir na mesma janela)<br/>
 * 6. Usar o gerador local? ("True" para usar o gerador local, "False" caso contrário)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A ordenação deve estar no formato: tabela.campo1|[0|1][;tabela.campo2|[0|1][;tabela.campoN|[0|1]]], sendo: <br/>
 * "0" descendente e "1" ascendente. (Opcional) Exemplo: pessoa.cod_pessoa|1;pessoa.nome|0<br/>
 * 2. Caso o relatório tenha sido criado pelo gerador de relatórios legado (Report Builder 7), o filtro funciona a <br/>
 * partir do campo. Exemplo: CAMPO=valor;<br/>
 * 3. Caso o relatório tenha sido criado pelo Report Builder 10, o filtro funciona a partir do nome do parâmetro <br/>
 * definido no critério da consulta do relatório. Exemplo: PARAMETRO=valor;<br/>
 * 4. O filtro a ser passado (no segundo parâmetro) deve existir no relatório.<br/>
 * 5. Caso o relatório no Report Builder 7 possua o filtro between (Entre), deve ser utilizada ao fim a expressão <br/>
 * _copy. Exemplo: Data_Pagamento_copy=14/11/1987,14/11/2009. As datas devem ser separadas por vírgula <br/>
 * e o copy deve ser todo minúsculo.
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
 * Essa função ativa o aparelho de leitura/captura de uma digital.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Fluxo. <br/>
 * <br/>
 * Retorno:<br/>
 * Não possui;<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O fluxo que for passado por parâmetro, deve possuir um  parâmetro de entrada do tipo inteiro, e deve estar<br/>
 * associado a um outro fluxo que tenha como parâmetro de entrada do tipo Letras.<br/>
 * <br/>
 * 2. Se a propriedade impressão digital do componente imagem estiver selecionado, a função "Abrir Leitor Digital" é executada automaticamente.<br/>
 * <br/>
 * 3. Insira um componente imagem no formulário, configure as propriedades da imagem, selecionando a propriedade 'campo' de tipo byte e a propriedade 'impressão digital' um campo do tipo inteiro.<br/>
 * <br/>
 * 4. Para utilizar essa função é necessário instalar o Servidor de Digitais e o Driver do Dispositivo. O Servidor de Digitais se encontra no DVD de instalação e pode também ser obtido com a Softwell Solutions. O Driver de Dispositivo deve ser obtido junto com o seu fabricante (http://www.fingertech.com.br/downloads/drivers)<br/>
 * <br/>
 * 5. Apenas será identificado o usuário que esteja cadastrado no Servidor de Digitais.<br/>
 * Este servidor deve estar na mesma máquina onde se encontra o banco de dados da aplicação.<br/>
 * <br/>
 * 6. Quando o retorno é igual a -2, sabe-se que o Servidor de Digitais não foi encontrado.<br/>
 * Quando o retorno é igual a -1, sabe-se que o usuário não está cadastrado no Servidor de Digitais.<br/>
 * Caso contrário, será retornado o inteiro equivalente à impressão digital.<br/>
 * <br/>
 * 7. Configure corretamente seu aparelho de leitor de digitais, verificando se o mesmo foi instalado corretamente.
 */
function ebfOpenRuleDigitalCapture(ruleName) {
  openRuleDigitalCapture(sysCode, idForm, ruleName);
}

/**
 * Essa função ativa o leitor para a captura da string biométrica de uma digital.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O fluxo que for passado por parâmetro, irá receber a string da digital e deve possuir um  parâmetro de entrada do tipo Letras.
 */
function ebfOpenRuleDigitalCaptureString(ruleName) {
  openRuleDigitalCapture(sysCode, idForm, ruleName, "string");
}

/**
 * Esta função abre uma URL (página) na mesma janela em que esta função for chamada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL da página (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfOpenUrlSameWindow(urlToOpen) {     
  window.top.location.href = urlToOpen;
}

/**
 * Calcula o resto da divisão de dois números.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Dividendo.<br/>
 * 2. Divisor.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o resto da divisão do número do 1° Parâmetro com o número do 2° Parâmetro.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os parâmetros como: 7,5 e 2,5 , o retorno seria: 0.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função calcula um pagamento, o qual retorna o valor das parcelas adicionando o juros.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor<br/>
 * 2. Quantidade de Meses<br/>
 * 3. Porcentagem dos Juros<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor das parcelas adicionando o juros.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro sendo 1000 (fracionado), o 2º parâmetro sendo 5 e o 3º parâmetro sendo 0,2. O retorno será 334,38.<br/>
 * <br/>
 * Observações: <br/>
 * A porcentagem tem que ser passada com as casas decimais, Exemplo: 1% é 0,01, 10% 0,1  etc.).<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfPayment() {
  var result = 0.0;
  if (existArgs(arguments)) {
    result = (parseNumeric(arguments[0]) * parseNumeric(arguments[2])) / (1 - Math.pow( (1 / (1 + parseNumeric(arguments[2]))), toLong(parseNumeric(arguments[1]))));
  }
  return result;
}

/**
 * Recebe como parâmetro uma lista de URLs e inclui ou substitui a lista de reprodução anterior.<br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Lista de URLs.<br/>
 * 3. Adicionar no fim da lista.<br/>
 * 	<br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * Se o parâmetro "Adicionar no fim da lista" for verdadeiro, a nova lista de URLs será adicionada no fim da lista anterior, <br/>
 * caso contrário, a lista será totalmente substituída.
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
 * Esta função efetua a postagem (POST) de dados para uma determinada URL informada pelo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL (Letras)<br/>
 * 2. Dados (Letras)<br/>
 * 3. Levantar exceção? (Lógico)<br/>
 * 4. Assíncrono ? (Lógico)<br/>
 * 5. Regra a ser executada (Fluxo, Opcional, Somente Assíncrono)<br/>
 * 6. Regra a ser executada caso ocorra erro (Fluxo, Opcional, Somente Assíncrono)<br/>
 * <br/>
 * Retorno:<br/>
 * Conteúdo (Letras para Síncrono e Variante para Assíncrono)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso seja definido a postagem como Assíncrono, deve-se informar um fluxo no 5º parâmetro. O mesmo <br/>
 * será chamado assim que a postagem dos dados for concluída. O fluxo definido deverá possuir um parâmetro de entrada <br/>
 * do tipo Letras que será a resposta (caso possua) do servidor.<br/>
 * 2. O 3º parâmetro define se uma exceção deverá ser levantada em caso de erros na postagem dos dados.<br/>
 * 3. Caso deseje passar os dados com caracteres especiais o mesmo deve ser codificado/escapado, conforme definido pelo w3c. Pode-se <br/>
 * efetuar essa codificação utilizando a função "URL - Codificar".<br/>
 * 4. Esta função somente retorna valores se a mesma for definida como Síncrona (4º parâmetro = falso). Caso seja definida como Assíncrona, o retorno será enviado para o fluxo que será chamado (Definido no 5º parâmetro).<br/>
 * <br/>
 * Exemplo:<br/>
 * Primeiro parâmetro definimos a URL:http://localhost:8036/webrun/FluxoWebPostarDados.rule?sys=M3B Segundo parâmetro os dados: &EMPRESA=Softwell&PRODUTO=Maker<br/>
 * OBS:(EMPRESA e PRODUTO) são parâmetros de entrada do fluxo e os mesmos devem ser passados separado por &.
 */
function ebfPostData(url, postData, throwsException, async, ruleCallback, ruleCallbackError) {
  if (async) {
    postURLAsync(url, postData, throwsException, ruleCallback, ruleCallbackError);
  } else {
    return postURL(url, postData, throwsException);
  }
}

/**
 * Muda o foco do componente para o componente anterior de acordo com a tabulação.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. ID ou Nome do Componente em foco.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Pode ser utilizado o nome do componente ou o ID, obtendo através da função "Obter ID do Componente".
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
 * Essa função realiza a impressão do texto ou do arquivo de acordo as informações passada por parâmetro.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Texto ou Link do Arquivo (Letras).<br/>
 * 2. É arquivo? (Lógico) (Ver Observação 3)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para que esta função funcione corretamente é necessário instalar o servidor de impressão e realizar as devidas configurações. <br/>
 *   Para maiores informações, consultar a documentação. Link: http://suporte.softwell.com.br/maker/manual_3/pt/novidades/configuracao_impressao.html<br/>
 * 2. A impressão será realizada na impressora definida como  padrão.<br/>
 * 3. Ao informar o valor como Verdadeiro(true), será impresso o arquivo informado no primeiro parâmetro, caso contrário <br/>
 * será impresso o texto.<br/>
 * <br/>
 * Tipos de arquivo suportados: .pdf .png .jpeg<br/>
 * <br/>
 * No caso da impressão de arquivo, o mesmo deve estar disponível via HTTP, EX: <br/>
 *   http://localhost:8049/webrunstudio/tmp/<nome do arquivo>.pdf<br/>
 * <br/>
 * Lembrando que, o link deve ser acessível externamente ou dentro da rede onde está o serviço.
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
 * Esta função imprime o conteúdo do elemento passado no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Título da Janela.<br/>
 * 2. Elemento HTML (Utilize a função HTML - Obter Elemento pelo ID).<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o elemento que se deseja imprimir tenha elementos de desenho, EX: canvas, o mesmo será ignorado na impressão.
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
 * Esta função imprime o conteúdo da página da forma que a mesma é exibida no navegador.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.
 */
function ebfPrintHTMLContentPage(){
  window.print();
}

/**
 * Esta função exibe uma caixa de diálogo solicitando uma entrada do usuário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto do diálogo.<br/>
 * 2. Texto pré-definido.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o texto que o usuário digitou. Caso o usuário click em Cancelar, o retorno é nulo.
 */
function ebfPrompt(dialog, stringDefault) {
  stringDefault = stringDefault || "";
  return prompt(dialog, stringDefault);
}

/**
 * Essa função realiza um registro para que a aplicação possa receber notificações via Push.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo que será executado ao registrar o dispositivo/usuário. (Ver observação 3)<br/>
 * 2. ID do Projeto (Utilizado para o Google Cloud Message/Firebase).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * <br/>
 * <br/>
 * Observações:<br/>
 * 1. Para obter o registro da aplicação no Google, utilize o link https://console.firebase.google.com/<br/>
 * 2. Para obter o registro da aplicação na Apple (APNS), utilize o link https://developer.apple.com/library/content/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/index.html#//apple_ref/doc/uid/TP40008194-CH3-SW1<br/>
 * 3. O fluxo associado no primeiro parâmetro, receberá automaticamente o código do dispositivo registrado no servidor de push. Caso ocorra falha, o fluxo receberá o código -403, que indica que ocorreu um erro no registro
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
 * Recebe como parâmetro uma nova URL e recarrega o componente RSS especificado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente.<br/>
 * 2. URL do RSS.<br/>
 * 3. Charset.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * Se o parâmetro URL for nulo, o componente será recarregado mantendo a URL anterior.
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
 * Função que adiciona um item ao componente Opções passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente (Componente Opções)<br/>
 * 3. Valor (Referente ao item adicionado (pode ser passado como parâmetro) )<br/>
 * 4. Label (Nome que aparecerá (pode ser passado como parâmetro) )<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Ao adicionar item ao componente dinamicamente, não é possível salvar a opção selecionada no banco.
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
 * Função que remove/limpa todos os itens do componente Opções (RadioGroup).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário.<br/>
 * 2. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Função que retorna a quantidade itens de um componente Opções<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se encontra o componente<br/>
 * 2. Componente Opções<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a quantidade de itens do componente (Inteiro)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfRadioGroupGetSize(form, component){  
  component = $c(component);
  return component.options.length;
}

/**
 * Função que cria um novo componente Opções dinâmicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Aba (Caso a aba definida neste parâmetro não exista, a mesma será criada).<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura do Componente.<br/>
 * 5. Altura do Componente<br/>
 * 6. Descrição do Componente<br/>
 * 7. Valor do Componente<br/>
 * 8. Lista de Labels (função: "Criar lista apartir dos elementos" ajuda na criação de labels)<br/>
 * 9. Lista de Valores (função: "Criar lista apartir dos elementos" ajuda na criação dos valores)<br/>
 * 10. Container<br/>
 * 11. Estilo CSS<br/>
 * <br/>
 * Retorno:<br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Função que remove um item do componente Opções tomando o label do item como referência.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde está localizado o componente Opções.<br/>
 * 2. Componente<br/>
 * 3. Label do item a ser removido<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Função que remove um item do componente Opções tomando o índice como referência.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário<br/>
 * 2. Componente<br/>
 * 3. Índice do item a ser removido (O Primeiro é 0)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O índice dos itens estão na ordem N-1.
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
 * Função que seleciona o item do componente Opções.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário.<br/>
 * 2. Componente.<br/>
 * 3. Valor (o configurado no componente para ser salvo no banco).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Retorna um número inteiro aleatório entre 0 e o valor informado como parâmetro (ver exemplo).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor que definirá o intervalo do número. <br/>
 * <br/>
 * Retorno:<br/>
 * Número aleatório ( Inteiro).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetro 7 (Inteiro), o retorno seria um número aleatório entre 0 e 6 (n-1).
 */
function ebfRandom(value) {
  return parseInt(parseNumeric(value) * Math.random());
}

/**
 * Esta função obtém o challenge do captcha aberto no formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Challenge (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ReCaptcha é um serviço anti-spam gratuíto e mantigo pelo Google. Para obter informações, criação de chaves <br/>
 * públicas<br/>
 * e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaGetChallenge() {
  var challenge = $mainform().document.getElementById("recaptcha_challenge_field");  
  if (challenge) {
    return challenge.value;  
  }
}

/**
 * Esta função obtém a resposta do captcha aberto no formulário corrente e digitado pelo usuário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Resposta do usuário (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ReCaptcha é um serviço anti-spam gratuíto e mantigo pelo Google. Para obter informações, criação de chaves <br/>
 * públicas e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaGetResponse() {
  var response = $mainform().document.getElementById("recaptcha_response_field");  
  if (response) {
    return response.value;  
  }
}

/**
 * Esta função atualiza o captcha para um novo challenge (novas combinações de letras).<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ReCaptcha é um serviço anti-spam gratuíto e mantigo pelo Google. Para obter informações, criação de chaves <br/>
 * públicas e privadas, acesse: http://www.google.com/recaptcha
 */
function ebfReCaptchaRefresh() {
  if ($mainform().Recaptcha) {
    $mainform().Recaptcha.reload();  
  }
}

/**
 * Esta função cria uma instância do ReCaptcha (Ferramenta de verificação anti-spam) e exibe dentro da moldura informada<br/>
 * como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Moldura (Componente)<br/>
 * 2. Chave Pública do ReCaptcha (Letras)<br/>
 * 2. Chave Privada do ReCaptcha (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O ReCaptcha é um serviço anti-spam gratuíto e mantigo pelo Google. Para obter informações, criação de chaves <br/>
 * públicas<br/>
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
 * A função atualiza o registro corrente de um formulário que está em uma moldura a partir de outro formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde a moldura se encontra.<br/>
 * 2. Moldura onde se encontra o outro formulário.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função só irá funcionar caso exista algum parentesco entre os formulários.
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
 * Atualiza o componente em outro formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Constante formulário ou GUID.<br/>
 * 2. Componente.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Para o funcionamento correto desta função o formulário passado como parâmetro deve está aberto.
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
 * Atualiza o registro corrente do formulário pai.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * A função atualiza o formulário onde está o evento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não Possui<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Se essa função for executada antes de salvar alterações feitas no formulário, estas serão perdidas, pois a <br/>
 * essa função traz os dados existentes no banco.<br/>
 * 2. Esta função pergunta ao usuário se deseja atualizar o registro corrente ou todo o formulário,
 */
function ebfRefreshForm() {
  $mainform().d.n.actRefresh();
}

/**
 * A função atualiza o formulário( apenas o registro corrente) onde está o evento sem interação de confirmação com o usuário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Se essa função for executada antes de salvar alterações feitas no formulário, estas serão perdidas, pois a <br/>
 * essa função traz os dados existente no banco.<br/>
 * 2. Indicada para atualizar formulário Modal.<br/>
 * 3. Esta função deve ser utilizada em formulário com consulta.
 */
function ebfRefreshFormModal() {
  $mainform().d.n.execAjaxEval("refresh");
}

/**
 * Essa função é utilizada para atualizar o registro que está sendo mostrado no formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfRefreshRecord() {
  $mainform().d.n.execAjaxEval("refresh");
}

/**
 * Esta função retorna as subsequências correspondentes à expressão regular passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * <br/>
 * 1. Expressão Regular (Letras) (Ver Observação 1)<br/>
 * 2. Texto (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * <br/>
 * O retorno desta função é uma lista de listas contendo todas as subsequências encontradas.<br/>
 *   - As listas possuem em seu primeiro índice a subsequência geral da expressão seguida das subsequências obtidas pelos grupos de captura.<br/>
 * <br/>
 * Lista de subsequências (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * <br/>
 * 1.  O primeiro parâmetro deve conter a expressão regular, as expressões tem formatos divergentes na camada cliente e servidor.<br/>
 *   Como exemplo, temos a seguinte expressão que retorna todos caracteres diferente de número:<br/>
 *   -  Camada Cliente:<br/>
 *   Exemplo:<br/>
 *     /EXPRESSÃO_REGULAR/MODIFICADORES<br/>
 *     /[^0-9]/gm (Expressão exemplo)<br/>
 * <br/>
 *   - Camada Servidor:<br/>
 *   Exemplo:<br/>
 *     EXPRESSÃO_REGULAR<br/>
 *     [^0-9] (Expressão exemplo)<br/>
 * <br/>
 * Para validar as expressões tando na camada cliente(JavaScript) quanto na camada servidor(Java), sugerimos a utilização da ferramenta Regex101 que, ao inserir a expressão regular é possível verificar a formatação da expressão de acordo com a camada clicando na opção 'Code Generator'.<br/>
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
 * Esta função troca todas as subsequências de um texto por outro valor através de uma expressão regular.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Expressão Regular (Letras)(Ver Observação 1).<br/>
 * 2. Texto (Letras).<br/>
 * 3. Novo Valor (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * <br/>
 * Texto atualizado (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * <br/>
 * 1. O primeiro parâmetro deve conter a expressão regular, as expressões tem formatos divergentes na camada cliente e servidor.<br/>
 *   Como exemplo, temos a seguinte expressão que retorna todos caracteres diferente de número:<br/>
 *   -  Camada Cliente:<br/>
 *   Exemplo:<br/>
 *     /EXPRESSÃO_REGULAR/MODIFICADORES<br/>
 *     /[^0-9]/gm (Expressão exemplo)<br/>
 * <br/>
 *   - Camada Servidor:<br/>
 *   Exemplo:<br/>
 *     EXPRESSÃO_REGULAR<br/>
 *     [^0-9] (Expressão exemplo)<br/>
 * <br/>
 * Para validar as expressões tando na camada cliente(JavaScript) quanto na camada servidor(Java), sugerimos a utilização da ferramenta Regex101 que, ao inserir a expressão regular é possível verificar a formatação da expressão de acordo com a camada clicando na opção 'Code Generator'.<br/>
 * <br/>
 * Regex101:<br/>
 * https://regex101.com<br/>
 * <br/>
 * Mais informações para a camada cliente(JavaScript): <br/>
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
 * Remove acentos do texto passado por parâmetro<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Texto sem acentos (Letras)<br/>
 * <br/>
 * Exemplo:<br/>
 * àèìòùáéíóúâêîôûãõçñäëïöüÀÈÌÒÙÁÉÍÓÚÂÊÎÔÛÃÕÇÑÄËÏÖÜ<br/>
 * Sera retornado isto:<br/>
 * aeiouaeiouaeiouaocnaeiouAEIOUAEIOUAEIOUAOCNAEIOU<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfRemoveAccents(text) {
  if (text == null || typeof text == "undefined") {
    return null;
  }
  return translateAcentos(text);
}

/**
 * Remove todos os filhos do elemento passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore <br/>
 * 2. Elemento do qual serão removidos os filhos.<br/>
 * <br/>
 * Exemplo:<br/>
 * Para remover todos os filhos do elemento que está na variável "Elemento" e pertence à árvore cuja referência está <br/>
 * armazenada na variável "Árvore", deverão ser passados os parâmetros "Árvore" e "Elemento".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfRemoveAllChildsOf(tree,element){	
  return tree.removeAllChildsOf(element);	
}

/**
 * Remove o botão de valores padrão do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função deve ser utilizada no evento ao entrar.
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
 * Remove o elemento passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore <br/>
 * 2. Elemento que será removido<br/>
 * <br/>
 * Exemplo:<br/>
 * Para remover o elemento que está na variável "Elemento" e pertence à árvore cuja referência está armazenada na <br/>
 * variável "Árvore", deverão ser passados os parâmetros "Árvore" e "Elemento".<br/>
 * <br/>
 * Versão: 1.0.0.1
 */
function ebfRemoveELement(tree,element){	
  tree.removeElement(element);	
}

/**
 * Essa função busca o elemento, que deseja obter, a partir da sua posição na lista e o remove do mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posição do elemento na lista que será removido<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento removido da lista. O retorno da função pode ser armazenado numa variável do tipo variante.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, b, c, h}, o 2º parâmetro seja 4. O retorno<br/>
 * será o elemento "h" removido da lista, pois o elemento que está na posição 4 da lista é o "h".<br/>
 * 2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {56, 26, 95, 62}, o 2º parâmetro seja 2.<br/>
 * O retorno será o elemento "26" removido da lista, pois o elemento que está na posição 2 da lista é o "26";.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Ao utilizar esta função num fluxo do tipo cliente, é necessário atribuir o retorno da mesma à lista cujo elemento se <br/>
 * deseja remover.<br/>
 *   - A função quando executada no cliente retorna a lista resultante após a remoção do objeto desejado.<br/>
 *   - A função quando executada no servidor retorna o objeto removido.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Remove as quebras de linhas existentes no texto informado via parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto que terá a quebra de linha removida<br/>
 * <br/>
 * Retorno:  <br/>
 * Texto sem quebra de linha<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetro "Maker <br/>
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
 * Remover Seleção do Componente<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente Moldura<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
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
 * Remove os botões de Gravar e Gravar+ do formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função remove os botões de Gravar e Gravar+ do modo de Inserção/alteração.
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
 * Remove  o botão de Gravar+ do formulário. Este botão é visível quando o formulário se encontra em modo de <br/>
 * inserção.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A função deve ser utilizada no evento ao entrar ou em modo normal do formulário.
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
 * Remove a variável de sessão passando no 1º parâmetro o nome da variável e no 2º o valor Lógico que indica se ela é ou<br/>
 * não global.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Variável<br/>
 * 2. Valor Lógico (verdadeiro = variável global, falso = variável não global).<br/>
 * <br/>
 * Retorno:<br/>
 * Variável removida. (Variante)
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
 * Essa função remove um elemento Spinner.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Referência do Elemento (Variante).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. A referência do elemento é obtida por meio da função "Spinner - Criar".
 */
function ebfRemoveSpinner (spinner) {
  if (spinner) spinner.parentElement.removeChild(spinner);
}

/**
 * A função localiza o 2º parâmetro dentro do texto e o substitui pelo conteúdo passado no 3º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto.<br/>
 * 2. Valor à encontrar.<br/>
 * 3. Novo Valor.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto modificado. <br/>
 * <br/>
 * Observação:<br/>
 * A função só substitui a primeira ocorrência encontrada. Para substituir todas as subsequências encontradas utilize a função<br/>
 * Troca Todas as Subsequências.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.Assumindo os parâmetros como "Maker Flow" (Letras),"a"(Letras), e "%" (Letras), o retorno será "M%ker Flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Esta função localiza todas as subseqüências iguais ao  2º parâmetro dentro do texto e os substituem pelo conteúdo passado no<br/>
 * 3º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto.<br/>
 * 2. Valor à encontrar.<br/>
 * 3. Valor desejado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto modificado. <br/>
 * <br/>
 * Observações:<br/>
 * 1. A substituição é feita em todas as subseqüências encontradas.<br/>
 * 2. Caso deseje trocar a subsequência por um valor nulo, no terceiro parâmetro deve-se desmarcar o check "Nulo".<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.Assumindo os parâmetros como "Banana" (Letras),"na"(Letras), e "&" (Letras), o retorno será "Ba&&".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função busca um elemento, a partir da sua posição na lista e o substitui por um novo elemento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Posição do elemento na lista que será substituído<br/>
 * 3. Novo elemento<br/>
 * <br/>
 * Retorno: <br/>
 * Elemento substituído<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, t, c, h}, o 2º parâmetro seja 1 e o 3º parâmetro "k". O retorno será a lista atualizada com os seguintes elementos: {k, t, c, h}, pois o elemento que está na posição 1 da lista é o "a".<br/>
 * 2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {95, 35, 02, 806}, o 2º parâmetro seja 3 e o 3º parâmetro "357". O retorno será a lista atualizada com os seguintes elementos: {95, 35, 357, 806}, pois o elemento que está na posição 3 da lista é o "02".
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
 * Obtém um parâmetro da requisição.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do parâmetro na requisição.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor do parâmetro definido na requisição ou Nulo caso o mesmo não exista. (Letras)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função deve ser utilizada no evento "Ao Entrar" do Formulário.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1 - Suponhamos que temos a função em questão no evento ao entrar de um formulário, passando o parâmetro formID como parâmetro<br/>
 * o retorno será o valor do parâmetro formID.
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
 * Esta função consome um WebService através da API REST<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Ação (Letras);<br/>
 * 2. URL (Letras);<br/>
 * 3. Parâmetros da Postagem (Letras ou Mapa) (Ver observação 3);<br/>
 * 4. Regra a ser executada (Fluxo)(Somente camada cliente ou Mobile);<br/>
 * 5. Parâmetros da Regra (Variante)(Somente camada cliente ou Mobile);<br/>
 * 6. Parâmetros do Cabeçalho (Mapa de Parâmetros);<br/>
 * 7. Parâmetro do Corpo (Letras) (Somente camada servidor, na camada cliente usar o 3º parâmetro)(Ver observação 5);<br/>
 * 8. Charset (Letras) (Somente camada servidor) (Opcional) (Ex.: UTF-8, ISO-8859-1)<br/>
 * 9. Regra a ser executada caso tenha ocorrido um erro (Fluxo)(Somente camada cliente ou Mobile)(Ver observação 6);<br/>
 * 10. Parâmetros da Regra caso tenha ocorrido um erro (Variante)(Somente camada cliente ou Mobile);<br/>
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
 * Variante (Ver observação 4 e 8).<br/>
 * <br/>
 * Observação:<br/>
 * 1. A regra do quarto parâmetro deverá possuir um parâmetro de entrada que irá receber o retorno do WebService.<br/>
 * 2. Ações disponíveis (GET, POST, PUT, DELETE, HEADER, OPTIONS), é importante observar se o servidor suporta essas ações.<br/>
 * 3. Caso a ação seja POST deverá ser criado um Mapa com parâmetros, Letras caso contrário.<br/>
 * 4. A execução desta função na camada cliente ou Mobile é assíncrona e o retorno será enviado automaticamente como primeiro parâmetro do fluxo. (4º parâmetro) . Caso a execução desta função seja camada servidor, a execução será síncrona.<br/>
 * 5. O 7º parâmetro somente é suportado para as ações PUT e POST, ao ser definir o 3º parâmetro será ignorado.<br/>
 * 6. O 9º parâmetro somente é suportado na camada cliente e recebe automaticamente no primeiro parâmetro o código do erro da resposta. Ex.: 500 = "Erro interno do servidor".<br/>
 * 7. Caso a URL para consumo seja um Fluxo WEB e o método solicitado seja POST/PUT deve-se setar o 6º parâmetro (Parâmetros do Cabeçalho) para Content-Type = application/x-www-form-urlencoded (Camada Cliente).<br/>
 * 8. Quando utilizada na camada Cliente, as chaves do cabeçalho(headers) tem o retorno em caixa baixa, exceto no Internet Explorer.<br/>
 *   Exemplo: Na camada cliente o parâmetro "Content-Type" é escrito como "content-type", como mostra a documentação: <br/>
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
 * Paleta que possibilita a escolha de uma cor retornando o código html da cor escolhida.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Moldura na qual a paleta de cores aparecerá;<br/>
 * 2. Nome da regra chamada<br/>
 * 3. Lista contendo parâmetros da regra chamada.<br/>
 * <br/>
 * Retorno:<br/>
 * Código html da Cor. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo que temos uma moldura no 1° parâmetro, um fluxo no 2° parâmetro com uma variável chamada "Cor" como parâmetro de entrada<br/>
 * e o uso da função: "Alertar Aguardando Ok" retornando a variável "Cor", 3° parâmetro nulo.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. A regra chamada no 2° parâmetro deve possuir uma variável do tipo letras como parâmetro de entrada.
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
 * Insere um texto na posição do cursor em um Texto Rico<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente Texto Rico<br/>
 * 2. Texto em HTML a ser inserido (Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Esta função só funciona para o memo quando a propriedade texto rico está setada como <br/>
 * "HTML Básico" e "HTML Avançado".<br/>
 * 2. Para utilizar esta função no Internet Explorer, deve-se previamente utilizar a função "Monitorar posição do cursor no Texto Rico".
 */
function ebfRichTextInsertTextAtPosition(component, htmlText) {
  var comp = $c(component);
  if (comp) comp.insertHtmlAtCaret(htmlText);
}

/**
 * Agenda a execução de um fluxo para ser executado após um determinado tempo. <br/>
 * O tempo deve ser definido em milisegundos.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Digite o nome da regra. (Letras)<br/>
 * 2. Lista de parâmetros da regra<br/>
 * 3. Tempo para a regra ser executada, em milissegundos<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Fluxo cliente somente agenda para a camada CLIENTE, e servidor somente para a camada SERVIDOR, para agendar fluxos de outra camada utilize um subfluxo para agendar;<br/>
 * 2. Essa função não agenda fluxos de interação com a tela, funções como "Abrir Formulário" ou mensagens não serão exibidos.
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
 * Executar Fluxo Ao Abrir Formulário na Moldura<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário;<br/>
 * 2. Fluxo;<br/>
 * 3. Lista de Parâmetros;<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O fluxo será executado somente se o formulário informado no primeiro parâmetro da função for aberto em uma moldura.
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
 * Obtém o conteúdo de um componente do formulário principal ou de qualquer outro passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário onde se localiza o componente a ser obtido o valor. <br/>
 * 2. Componente do qual se deseja obter o valor. <br/>
 * <br/>
 * Retorno: <br/>
 * Conteúdo do campo passado como parâmetro. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. No formulário "Cadastro" cujo conteúdo do campo "Cidade" é "Salvador", assumindo como parâmetros <br/>
 * Cadastros(Formulário), "Cidade"(Campo), o retorno seria "Salvador".<br/>
 * <br/>
 * Observações:<br/>
 * 1. É necessário que o componente esteja associado a um campo da tabela.<br/>
 * 2. Se não for o formulário principal (que chama o fluxo) e o mesmo estiver aberto, o retorno será o conteúdo <br/>
 * do campo passado naquele registro. Caso o formulário passado não esteja sendo utilizado, o retorno será o primeiro <br/>
 * registro no banco.<br/>
 * 3. Para obter o valor de um componente que se encontra em um Sub Form, deve ser passado o formulário do <br/>
 * Sub Form como parâmetro.
 */
function ebfSQLGetFieldFromForm(form, com) {
  return controller.getElementById(com, form).getValue(); 
}

/**
 * Obtém o conteúdo do campo passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Campo no qual deseja obter o conteúdo.<br/>
 * <br/>
 * Retorno: <br/>
 * Conteúdo do campo. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formulário cujo conteúdo do campo "Cidade" é "Salvador", assumindo como parâmetro este campo <br/>
 * ("Cidade"), o retorno seria "Salvador".<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o campo é necessário indicar o nome do formulário no de trabalho no "Inicio" do fluxo.<br/>
 * 2. Caso não queira selecionar o formulário de trabalho, digite o nome do campo mudando a constante do tipo <br/>
 * "formulário" para uma constante do tipo "Letras".<br/>
 * 3. É necessário que o componente esteja associado a um campo da tabela.<br/>
 * 4. Caso o formulário que se deseja obter o campo esteja dentro de um componente moldura, deve-se utilizar a <br/>
 * função "Executar Fluxo no Formulário" apontar para um fluxo que contenha esta função.
 */
function ebfSQLGetFormField() {
  var value = "";
  if (existArgs(arguments)) {
    value = getFormFieldValue(arguments[0]);
  }
  return value;
}

/**
 * Altera o campo do formulário com o conteúdo passado no 2° parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Campo para ser alterado.<br/>
 * 2. Novo valor do campo.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como parâmetros o campo "Telefone" (Letras) de uma tabela qualquer e o valor "3354-9554"(Letras), <br/>
 * após o fluxo ser executado o campo "Telefone" conterá o conteúdo "3354-9554".<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para selecionar o campo é necessário indicar o nome do formulário no "Inicio" do fluxo . <br/>
 * 2. Caso não queira indicar o formulário no início, pode escrever o nome (Letras) do campo como parâmetro.<br/>
 * 3. O campo precisa estar associado a um campo da Tabela. Caso o isso não ocorra, usa-se a função "Alterar <br/>
 * valor do componente" da categoria "Formulário".<br/>
 * 4. A função não determina qual o formulário onde deve ser alterado, no entanto caso queira alterar um valor da <br/>
 * grade será necessário usar a função "Alterar valor do componente".<br/>
 * 5. Ao utilizar a função na camada servidor, caso o componente a ser alterado esteja vinculado a campo, a função só funcionará com o formulário em modo de inserção ou alteração.
 */
function ebfSQLSetFormField() {
  if (existArgs(arguments)) {
    changeFormFieldValue(arguments[0], arguments[1]);
  }
  return true;
}

/**
 * Função para realizar a leitura de código de barras, QRCode e outros padrões.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo a ser executado em caso de sucesso (Letras);<br/>
 * 2. Fluxo a ser executado em caso de erro (Letras);<br/>
 * 3. Formato a escanear (Opcional);<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o conteúdo do código de barras (Letras).<br/>
 * <br/>
 * Observações:<br/>
 * 1) Por padrão, o Scan buscará por qualquer tipo de código de barras suportado pela biblioteca, que são:<br/>
 *     - QR_CODE<br/>
 *     - CODE_128<br/>
 *     - CODE_39<br/>
 *     - EAN_13<br/>
 *     - EAN_8<br/>
 *     - ITF<br/>
 *     - UPC_A<br/>
 * 2) O terceiro parâmetro deve ser informado os tipos a serem buscado. Caso não seja informado nenhum tipo, o scanner<br/>
 * buscará por qualquer tipo.<br/>
 * 3) Os formatos devem ser passados como texto e separados por vírgula.
 */
function ebfScanCode(success, error, types) {
 
}

/**
 * Esta função procura dentro do 1° parâmetro a subseqüência passada no 2º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto onde será feita a pesquisa.<br/>
 * 2. Valor a ser localizado.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se encontrar a subseqüência ou falso caso não encontre.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os parâmetros como 'Maker'(Letras), e 'Ma '(Letras) , o retorno seria verdadeiro.<br/>
 * 2.Assumindo os parâmetros como 'Maker'(Letras), e 'Ja '(Letras) , o retorno seria falso.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Esta função obtém e retorna o objeto da aba que está ativa quando o fluxo é executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Objeto da aba ativa. (Variante)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se a aba é "Cadastros", a função gera um objeto desta aba: [object HTMLab Cadastro].<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfSelectedTab() {
  return d.t.getSelectedTab();
}

/**
 * Essa função envia um ou mais arquivos via POST para o endereço especificado.<br/>
 * <br/>
 * O arquivo é enviado de forma assíncrona, sem travar a tela.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL para POST<br/>
 * 2. Parâmetros do POST (Mapa com chave/valor);<br/>
 * 3. Mapa com Arquivos (Mapa com o nome do parâmetro que receberá o arquivo e o caminho completo do arquivo que será enviado ) (chave/valor).<br/>
 * 4. Fluxo de Sucesso<br/>
 * 5. Parâmetros  para o fluxo sucesso (Opcional)<br/>
 * 6. Fluxo de Erro<br/>
 * 7. Parâmetros para o fluxo de erro (Opcional)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.
 */
function ebfSendFilePOSTAsync(){
  console.log('MakerMobile');
}

/**
 * Cria uma variável em um formulário corrente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da variável.<br/>
 * 2. Valor a ser armazenado.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Cor da Fonte<br/>
 * 3. Cor do Fundo<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Define uma propriedade para o componente passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário (Opcional)<br/>
 * 2. Componente<br/>
 * 3. Propriedade<br/>
 * 4. Valor<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como componente "MakerEdit2", propriedade "AoPesquisar" e valor "Sim", será criada uma propriedade de nome e valor<br/>
 * definido no parâmetro.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Na camada servidor, caso o formulário não seja informado, a função adotará o formulário corrente. Na camada cliente,<br/>
 * sempre será o formulário corrente.
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
 * Parâmetros:<br/>
 * 1. Nome do cookie definido.<br/>
 * 2. Valor do cookie.<br/>
 * 3. Comentário.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos.:<br/>
 * 1.°Parâmetro: senhaUsuarios<br/>
 * 2.°Parâmetro: 123<br/>
 * 3.°Parâmetro: Senha de um usuário logado em uma máquina<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Existe uma função "Obter valor de um Cookie" que permite obter o cookie criado por essa função.<br/>
 * 2. Esta função está homologada apenas com os servidores de aplicações "TomCat" e "JBoss".
 */
function ebfSetCookie(cookieName,cookieValue,cookieComment) { 
  var today = new Date(); 
  var expire = new Date(); 	 
  expire.setTime(today.getTime() + 3600000*24); 
  document.cookie = cookieName+"="+escape(cookieValue) 
  + ";expires="+expire.toGMTString(); 
}

/**
 * Essa função insere um elemento numa lista, podendo indicar a sua posição na lista. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto Lista<br/>
 * 2. Elemento a ser inserido<br/>
 * 3. Inteiro indicando a posição do elemento na Lista ou nulo indicando inclusão no final da lista (OPCIONAL)<br/>
 * <br/>
 * Retorno:<br/>
 * Valor inserido na lista.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a, b, c, d, e, f, g, h}, o 2º parâmetro "s" e o 3º<br/>
 * parâmetro NULO. O retorno será uma lista com os seguintes valores: {a, b, c, d, e, f, g, h, s}. Como não indicou a posição<br/>
 * do elemento, ele é inserido na ultima posição da lista.<br/>
 * 2. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {v, y, d}, o 2º parâmetro "u" e o 3º parâmetro 2. <br/>
 * O retorno será uma lista com os seguintes valores: {v, u, y, d}. Como o 3º parâmetro determina a posição do elemento na<br/>
 * lista, ele será inserido na posição 2 da lista.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função associa um fluxo que será executando quando a aplicação for ativada.<br/>
 * <br/>
 * Desta forma, toda vez que aplicação se tornar "Ativa", ou seja, ir para background e voltar, o fluxo será executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do fluxo(Fluxo);<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfSetFlowOnBecomeActive(flow){}

/**
 * Essa função associa um fluxo ao evento de recebimento de Push Notification (iOS e Android).<br/>
 * <br/>
 * Desta forma, toda vez que uma notificação Push for recebida, o fluxo associado será executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do fluxo<br/>
 * 2. Lista de Parâmetros (Opcional)<br/>
 * <br/>
 * <br/>
 * Observação: <br/>
 * 1. O primeiro parâmetro do fluxo deverá ser reservado para a mensagem(ens) que será enviada automaticamente.
 */
function ebfebfSetFlowOnPushMessage(flow, params){}

/**
 * Altera o tipo, tamanho e cor da fonte dos elementos da árvore.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore (Ver observação 1)<br/>
 * 2. Tipo de Letra (Exemplo: Arial,Helvetica, sans-serif)<br/>
 * 3. Tamanho da Fonte<br/>
 * 4. Cor da Fonte<br/>
 * <br/>
 * Exemplo: <br/>
 * 1 - Assumindo como parâmetros a árvore, "arial black",  12 e #666600, a fonte dos elementos da árvore irá alterar para o tipo e tamanho passado por parâmetro e a cor da fonte será vermelha.<br/>
 * <br/>
 * Observação:<br/>
 * 1. A árvore pode ser obtida através da função "Obter Componente" da categoria Formulário.<br/>
 * <br/>
 * Versão: 1.0.0.1
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
 * Parâmetros:<br/>
 * 1. Nome do Componente  (definir o formulário de trabalho no parâmetro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * 2. Hint (dica)<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfSetHint(ComponentName,text) {
  var c = $c(ComponentName);
  c.setHint(text);
}

/**
 * Altera a altura dos ícones da árvore para a passada por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore. <br/>
 * 2. Nova altura dos ícones.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1.Assumindo como parâmetros a referência para a árvore e 20, a altura dos ícones será alterada para 20. <br/>
 * <br/>
 * Observação:<br/>
 * A árvore pode ser obtida através da função "Obter Componente" da categoria Formulário.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfSetIconsHeight(tree,height){	
  tree.setIconsHeight(height);	
}

/**
 * Altera a imagem de um compontente do tipo "Imagem" disponível no formulário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente que será alterado;<br/>
 * 2. Novo valor do componente.<br/>
 * <br/>
 * Retorno: <br/>
 * Não Possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O valor do 2º parâmetro deve ser o byte de uma imagem.<br/>
 * 2. Para a camada servidor no 2° parâmetro é necessário a utilização da "função de binário para base 64" e abrir uma consulta com o campo de tipo byte de uma imagem.
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
 * Define uma variável local. As variáveis definidas com esta função ficarão disponíveis somente para o formulário onde o <br/>
 * fluxo foi executado.<br/>
 * <br/>
 * Parâmetro(s):<br/>
 * 1. Nome da variável.<br/>
 * 2. Valor a ser armazenado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o antigo valor da variável. Caso a variável não exista, retorna Nulo<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo como parâmetros: TESTE (Letras) e Valor (Letras), quando a função for executada vai ser criada uma <br/>
 * variável local chamada TESTE com o conteúdo Valor.<br/>
 * <br/>
 * Observação(ões): <br/>
 * 1. A função que acessa a variável local é: 'Obter Variável Local'.<br/>
 * 2. Ao definir essa função em formulário flutuante a mesma estará acessível para os demais formulários flutuantes.<br/>
 * 3. Ao definir essa função para formulários pop up, as variáveis estarão disponíveis para o formulário corrente.
 */
function ebfSetLocalVariable(varName, varValue) {
  return top.document[varName] = varValue;
}

/**
 * Loga uma mensagem passada como parâmetro de entrada. Caso o uso dessa função seja na camada servidor, a mensagem será adicionada no arquivo de log do servidor de aplicações. Caso o uso seja na camada cliente, a mensagem será exibida no console do navegador.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mensagem (Letras)<br/>
 * 2. Nível de log (Inteiro)(Somente camada servidor)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões): <br/>
 * 1. No segundo parâmetro pode ser passado os seguintes números:<br/>
 *     [1] Debug<br/>
 *     [2] Info<br/>
 *     [3] Erro<br/>
 * Caso estiver nulo será configurado o nível Default.
 */
function ebfSetLogDebug() {
  console.log(arguments[0]);
}

/**
 * Associa um fluxo ao evento do botão Voltar do Android.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo para a função (Fluxo);<br/>
 * 2. Parâmetros do fluxo (Lista).
 */
function ebfSetOnBackPress(){
  alert("Função disponível apenas no Maker Mobile!");
}

/**
 * Agenda a execução de um fluxo para ser executado após um determinado tempo. <br/>
 * O tempo deve ser definido em milisegundos.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo a ser executado. (Fluxo)<br/>
 * 2. Lista de parâmetros da regra<br/>
 * 3. Tempo para a regra ser executada, em milissegundos<br/>
 * <br/>
 * Retorno:<br/>
 * Identificador do agendamento (Inteiro).<br/>
 * <br/>
 * Observações:<br/>
 * 1. CAMADA CLIENTE - o fluxo a ser executado deve ser da mesma camada.<br/>
 * CAMADA SERVIDOR - o fluxo a ser executado deve ser da mesma camada.<br/>
 * Para agendar fluxos de camadas diferentes, use o subfluxo para agendar.<br/>
 * <br/>
 * 2. Fluxo servidor não interage com a tela, funções como "Habilitar Controle" ou mensagens não serão exibidos.<br/>
 * <br/>
 * 3. O primeiro parâmetro pode ser do tipo Letras tendo como valor o nome do fluxo.<br/>
 * <br/>
 * ATENÇÃO: PARA AGENDAR UM FLUXO SEM VÍNCULO COM QUEM O INICIOU, UTILIZE A FUNÇÃO "AGENDAR<br/>
 * EXECUÇÃO DE FLUXO SEM PAI", COM ISSO, O GARBAGE COLLECTOR DO JAVA CONSEGUIRÁ LIMPAR MAIS OS OBJETOS TENDO UMA MAIOR LIBERAÇÃO DE MEMÓRIA
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
 * Esta função define um fluxo para ser executado quando o dispositivo conectar com a Internet<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo a ser executado (Fluxo);<br/>
 * 2. Parâmetros da regra (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O fluxo definido será executado sem pai.
 */
function ebfSetRuleOnConnect(){
}

/**
 * Esta função define um fluxo para ser executado quando o dispositivo perder a conexão com a Internet<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Fluxo a ser executado (Fluxo);<br/>
 * 2. Parâmetros da regra (Lista).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O fluxo definido será executado sem pai.
 */
function ebfSetRuleOnDisconnect(){
}

/**
 * As variáveis de sessão são utilizadas quando houver a necessidade de ter uma variável que se mantém para regras<br/>
 * diferentes. Variáveis de sessão não globais se mantém de acordo com o usuário e as globais se mantém para todo usuário.<br/>
 * Se for necessário, por exemplo, guardar a hora de login de um usuário para ser utilizada em várias regras diferentes, essa<br/>
 * variável de sessão será local. Se for necessário, por exemplo, guardar a quantidade de usuários logados, essa variável de<br/>
 * sessão será global.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da variável.<br/>
 * 2. Valor a ser armazenado.<br/>
 * 3. Escopo da variável. Recebe verdadeiro(se ela vai ser global) ou falso (não global - exclusiva da sessão do navegador).<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o antigo valor da variável. Caso a variável não exista, retorna Nulo. (Letras)<br/>
 * <br/>
 * Exemplos:<br/>
 * Assumindo como parâmetros: Contador (Letras),6 (Inteiro) e Verdadeiro (Lógico), quando a função for executada vai ser criada uma varável global chamada Contador com o conteúdo 6.<br/>
 * <br/>
 * Observação(ões).: <br/>
 * 1. Filtragem de relatórios por variável de sessão. Caso exista uma variável de sessão com o formato<br/>
 * 2. REPORT_FILTER_<campo do filtro do relatório>, o sistema preenche automaticamente o filtro.
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
 * Esta função é usada para exibir uma Interação de Confirmação com personalização do título.<br/>
 * Será executado um fluxo quando o usuário clicar em OK ou CANCELAR, caso o usuário clique OK, o fluxo receberá como parâmetro de entrada a constante "1" ou "0" caso clique em CANCELAR.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Posição do botão CANCELAR. (Informe "D" para Direita ou "E" para Esquerda).<br/>
 * 2. Título da Interação.<br/>
 * 3. Mensagem a ser exibida.<br/>
 * 4. Fluxo que será executado ao clicar em OK ou CANCELAR.<br/>
 * 5. Lista de Parâmetros adicionais para o fluxo (Opcional).<br/>
 * <br/>
 * Observação (ões):<br/>
 * 1. O fluxo do 4º deverá ter obrigatoriamente 1 parâmetro para receber o resultado do clique.
 */
function ebfShowConfirm(orderOK, title,msg,func,args) {
//Somente para MakerMobile.
}

/**
 * Exibe uma mensagem de impressão de relatório.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mensagem. (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Essa função deve ser utilizada antes das funções de "Abrir Relatório Imediatamente" ou "Abrir relatório imediatamente com ordenação".<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como 1º parâmetro "O relatório está sendo gerado...", tal mensagem será exibida antes do relatório <br/>
 * ser gerado.
 */
function ebfShowMainMessage(msg) {
  showMainMessage(msg, null);
}

/**
 * Mostra a Árvore<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore<br/>
 * 2. Valor Lógico<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como "Árvore" (Variante) e "False" (Lógico). Então a árvore será escondida. Caso o valor <br/>
 * lógico seja "True", a árvore aparecerá.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Largura.<br/>
 * 5. Altura.<br/>
 * 6. Nome do Componente.<br/>
 * 7. Valor Inicial (Opcional).<br/>
 * 8. Valor Final (Opcional). <br/>
 * 9. Posição Inicial (Opcional).<br/>
 * 10. Habilitar?.<br/>
 * 11. Visível?.<br/>
 * 12. Acessível (0 = Modo Inclusão/Alteração - 1 = Todos os Modos).<br/>
 * 13. Exibir Numeração (1 = Exibir - 0 = Ocultar).<br/>
 * 14. Precisão Decimal (Opcional).<br/>
 * 15. Dica.<br/>
 * 16. Container.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.
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
 * Essa função cria o componente SliderPanel dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Posição X.<br/>
 * 3. Posição Y.<br/>
 * 4. Altura.<br/>
 * 5. Tamanho.<br/>
 * 6. Nome do Componente.<br/>
 * 7. Lista de Imagens.<br/>
 * 8. Visível?<br/>
 * 9. Habilitar?<br/>
 * 10. Acessível (0 = Modo Inclusão/Alteração - 1 = Todos os Modos).<br/>
 * 11. Tamanho da Fonte.<br/>
 * 12. Tempo.<br/>
 * 13. Cor da Fonte do Texto.<br/>
 * 14. Cor do Rodapé Ativo.<br/>
 * 15. Container.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O sétimo parâmetro é passado uma lista de lista, onde cada lista devará possuí 3 parâmetros:<br/>
 * URL da imagem, Descrição da imagem e Link, sendo o primeiro parâmetro obrigatório. Se imagem estiver<br/>
 * no contexto do Webrun pode-se passar o caminho relativo da mesma.<br/>
 * 2. O valor passado no 12º parâmetro é executado em milissegundos.
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
 * Separa o texto em um determinado caractere passado no 2° parâmetro e retorna cada parte deste texto em uma posição<br/>
 * de uma lista.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto que será quebrado.<br/>
 * 2. Caractere.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna uma lista com o texto separado (Lista).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como "M,A,K,E,R,F,L,O,W" (Letras), e "," (Letras),  o retorno será uma lista com 09 elementos<br/>
 * contendo "M"|"A"|"K"|"E"|"R"|"F"|"L"|"O"|"W" respectivamente.<br/>
 * <br/>
 * Observação:<br/>
 * A função Quebrar Texto, sempre vai considerar o último caracter, ou seja, caso você passe o seguinte texto:<br/>
 *          "teste1,teste2,teste3,"<br/>
 *  o retorno vai ser:<br/>
 *         [teste1, teste2, teste3, ]<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfSplit(text, caracterSplit) {
  return text.split(caracterSplit);
}

/**
 * Essa função inicia o monitoramento de localização.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1- Fluxo para receber dados do monitoramento. (Fluxo)<br/>
 * 2- Parâmetros do fluxo. (Variante)<br/>
 * 3- Prioridade. (Inteiro)<br/>
 * 4- Intervalo em milissegundos. (Inteiro)<br/>
 * 5- Intervalo mais rápido em milissegundos. (Inteiro)<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1- O parâmetro "Prioridade" poderá ser:<br/>
 *   a- 100 para PRIORITY_HIGH_ACCURACY<br/>
 *   b- 104 para PRIORITY_LOW_POWER<br/>
 *   c- 105 para PRIORITY_NO_POWER<br/>
 *   d- 102 para PRIORITY_BALANCED_POWER_ACCURACY<br/>
 * 2- Define o intervalo desejado para a atualização da localização.<br/>
 * 3- Para mais informações sobre o parâmetro Prioridade, verifique a documentação do Android: https://developers.google.com/android/reference/com/google/android/gms/location/LocationRequest.html
 */
function ebfStartMonitoringGPS(){
  alert("Disponível apenas no Maker Mobile");       
}

/**
 * Verifica se o conteúdo do primeiro parâmetro inicia com o conteúdo do 2° parâmetro.<br/>
 * <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto onde será feita a pesquisa;<br/>
 * 2. Valor inicial do texto.<br/>
 * <br/>
 * Retorno:  <br/>
 * Verdadeiro se o texto do 1º parâmetro iniciar com o valor informado no 2º parâmetro, caso contrário, retornará Falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como "Maker Flow" (Letras) e "Ma" (Letras) , o retorno seria Verdadeiro.<br/>
 * 2. Assumindo os parâmetros como "Maker Flow" (Letras) e "Flow" (Letras) , o retorno seria Falso.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Ao informar o 2º parâmetro como "" (vazio), o retorno será Verdadeiro.
 */
function ebfStartsWith (value, startValue){
  if(!isNullable(value))  
    return toString(value).startsWith(startValue);    
  return false;
}

/**
 * Interrompe a execução do fluxo. Caso seja passado alguma mensagem por parâmetro, esta é exibida.<br/>
 * Se houver algum processamento após a utilização dessa função, este não será executado.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Mensagem a ser exibida (Opcional).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como parâmetro "Operação Cancelada" (Letras), quando a função for executada exibirá a mensagem "Operação Cancelada" e o fluxo será interrompido. <br/>
 * Nenhum processamento depois dele será executado.
 */
function ebfStopRuleExecution(msg) {
  document.hasRuleErrors = true;
  throw new StopRuleExecution(msg);
}

/**
 * Inverte o texto passado por parâmetro.  <br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Texto a ser invertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto invertido(Letras).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetro a palavra "Maker"; (Letras), o retorno seria "rekaM".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * 1. Texto que será convertido. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto no formato HTML. (Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. HTML é uma linguagem de marcação utilizada para produzir páginas na Web<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro a variável "Softwell", o retorno será o conteúdo da variável "Softwell" convertido para o formato HTML.
 */
function ebfStringToHTMLString(value) {
  return stringToHTMLString(value);
}

/**
 * Converte um texto passado por parâmetro para o formato JavaScript. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto normal para ser convertido para o formato padrão JavaScript.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto passado por parâmetro convertido para o Padrão JavaScript. (Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * Assumindo como parâmetro o conteúdo "", o retorno será "\r", pois "" é um caractere especial JavaScript.
 */
function ebfStringToJs(value) {
  return stringToJs(value);
}

/**
 * Converte um texto para o formato XML.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto que será convertido. <br/>
 * <br/>
 * Retorno:<br/>
 * Texto no formato XML.(Letras)
 */
function ebfStringToXMLString(value) {
  return stringToXMLString(value);
}

/**
 * A função recebe um texto (1º parâmetro) e retorna uma subsequência deste texto. A subsequência inicia na posição<br/>
 * indicada no 2º parâmetro, com o tamanho indicado no 3º parâmetro, <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1.Texto<br/>
 * 2. Posição inicial da subsequência que se deseja obter.<br/>
 * 3. Quantidade de caracteres da subsequência.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a subsequência contida no texto(Letras) passado no 1º parâmetro, que inicia na posição informada no<br/>
 * 2º parâmetro, e contém o número de caracteres informado no 3º parâmetro.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetros "Fluxo de ações" (Letras), 2 (Inteiro) e 10(Inteiro). O retorno será "luxo de aç".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * A função recebe um texto (primeiro parâmetro) e retorna apenas a quantidade de caracteres passada no segundo<br/>
 * parâmetro a partir do final, ou seja, contados de trás pra frente.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1.Texto<br/>
 * 2. Quantidade de caracteres que não serão removidos do texto.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto (Letras) com apenas a quantidade de caracteres passado no segundo parâmetro do texto, contados de<br/>
 * trás para frente.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo como parâmetros:<br/>
 * 1°: Maker Flow (Letras)<br/>
 * 2°:3(Inteiro)<br/>
 * Retorno: low(Letras)<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfSubstringInverse(value, size) {
  var valor = ebfStringReverse(value);
  valor = ebfSubstring(valor, 1, size);
  valor = ebfStringReverse(valor);
  return valor;
}

/**
 * Esta função efetua logoff do sistema atual e redireciona para a tela de login do sistema.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Esta função efetua logout do usuário autenticado no sistema. Caso esta função seja chamada através de aplicativos móveis (Maker Mobile), a aplicação será encerrada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
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
 * Função que cria uma nova aba dinamicamente.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Aba.<br/>
 * 2. Valor lógico que confirma a criação da aba mesmo que já exista outra de mesmo nome.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Esta função altera a folha de estilo do elemento<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Elemento da tabela.<br/>
 * 2. Nome da nova folha de estilo.<br/>
 * <br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTableChangeCSS(componente,estilo) {
     var componente = $w(componente);
     if(componente != null) {
       componente.className = estilo;
     }
}

/**
 * Esta função altera a folha de estilo do elemento<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Elemento da tabela.<br/>
 * 2. Estilo.<br/>
 * <br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função recebe como parâmetro a linha ou a célula de uma tabela html e exibe ou oculta <br/>
 * de acordo com o valor passado no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Linha ou Célula da tabela HTML.<br/>
 * 2. Verdadeiro (para exibir), Falso (para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
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
 * Essa função recebe como parâmetro a linha ou coluna de uma tabela html e alterar a cor da mesma.<br/>
 * <br/>
 * Parâmetros<br/>
 * 1. Linha ou Coluna de uma tabela HTML.<br/>
 * 2. Cor que a linha ou coluna irá assumir.<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.
 */
function ebfTableHTMLAlterLineColor(component, colorLine) {
  var line = document.getElementById(component);

  line.style.backgroundColor=colorLine;
}

/**
 * Essa função recebe como parâmetro o Id da linha de uma tabela html e exibe ou oculta a mesma<br/>
 * de acordo com o valor passado no segundo parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Id da linha da tabela HTML.<br/>
 * 2. Parâmetro para exibir ou ocultar a linha (1 - para exibir e 0 - para ocultar)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui
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
 * Lança uma exceção.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Mensagem da exceção.<br/>
 * 2. Causa da exceção (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso essa função seja usada dentro das funções "Monitorar Exceções" e "Capturar Exceções", então as <br/>
 * informações chegarão no fluxo definido em "Capturar Exceções".
 */
function ebfThrowException(message, cause) {
  var ex = new Object();
  ex.message = message;
  ex.cause = cause;
  throw ex;
}

/**
 * Recebe como parâmetro uma data/hora e a retorna com a data modificada para  01/01/1900<br/>
 * <br/>
 * Parâmetros:<br/>
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
 * Esta função cria um novo objeto Temporizador, recebe como parâmetro o nome do temporizador, que será usado nas funções de iniciar, pausar, parar e zerar. Recebe ainda, o Formulário e o componente do tipo caixa de texto no qual este temporizador será constantemente atualizado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Temporizador (Letras)<br/>
 * 2. Formulário onde está localizado um componente a ser utilizado pelo Timer.<br/>
 * 3. Componente. (Caixa de Texto)<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referência do timer. (Variante)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1º Parâmetro : temporizador (letras)<br/>
 * 2º Parâmetro : Cadastro de Tempo<br/>
 * 3º Parâmetro : tempo.<br/>
 * <br/>
 * Neste exemplo, o edit com nome tempo do Formulário Cadastro de Tempo irá constantemente ser atualizado com o valor do temporizador criado.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso seja necessário utilizar as funções que manipulam componente, Exemplo: 'Mostrar Componente', deve-se utilizar o ID do componente informado nessa função.
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
 * Esta função recebe como parâmetro o nome do componente Timer e o tipo de formatação que a função deve seguir no retorno do horário.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente Timer (Letras).<br/>
 * 2. Tipo de Retorno.(Opcional) (H=Horas, M=Minutos, S=Segundos)<br/>
 * <br/>
 * Retorno:<br/>
 * Horário (Variante).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o segundo parâmetro não seja definido, o retorno será o horário completo do Timer.
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
 * Pausa ou Continua a contagem no temporizador passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Temporizador. (Timer)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o timer ja esteja pausado e a função seja novamente chamada, o contador irá continuar de onde parou.
 */
function ebfTimerPause(id){
  var timer = $c(id);
  if (timer) {
    timer.pause();
  }
}

/**
 * Reinicia a contagem no temporizador passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Temporizador (Timer).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfTimerReset(id){
  var timer = $c(id);
  if (timer) {
    timer.reset();
  }  
}

/**
 * Inicia a contagem no temporizador passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Temporizador. (Timer)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O Temporizador deve ter sido criado anteriormente.
 */
function ebfTimerStart(id){
  var timer = $c(id);
  if (timer) {
    timer.start();
  }
}

/**
 * Para a contagem no temporizador passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Temporizador (Timer).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
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
 * Parâmetros:<br/>
 * 1. Texto JavaScript para ser convertido para o formato de texto normal.<br/>
 * <br/>
 * Retorno:<br/>
 * Texto passado por parâmetro convertido para o formato de texto normal. (Letras)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como parâmetro o conteúdo: ""(aspas), o retorno será "\"(barra), pois ""(aspas) é um caractere especial JavaScript.<br/>
 * <br/>
 * Observação(ões)<br/>
 * Não Possui.
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
 * Essa função formata uma data de acordo os valores passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data (Data).<br/>
 * 2. Idioma (Opcional)(Letras).<br/>
 * 3. Formato (Texto JSON)(Letras).<br/>
 * <br/>
 * Retorno:<br/>
 * Data formatada (Letras);<br/>
 * <br/>
 * Observação:<br/>
 * 1. Caso o segundo parâmetro não seja informado o mesmo assumirá o idioma do Webrun.<br/>
 * 2. Os parâmetros suportados para formatação são: weekday, year, month, day, hour, minute e second.<br/>
 * 3. Os valores possíveis para formatação são:<br/>
 *   - weekday: "narrow", "short", "long".<br/>
 *   - year: "numeric" e "2-digit".<br/>
 *   - month: "numeric", "2-digit", "narrow", "short" e "long".<br/>
 *   - day: "numeric" e "2-digit".<br/>
 *   - hour: "numeric" e "2-digit".<br/>
 *   - minute: "numeric" e "2-digit".<br/>
 *   - second: "numeric" e "2-digit".<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como primeiro parâmetro a data 31/08/2016 00:00:00, segundo parâmetro pt-BR e terceiro parâmetro o texto JSON {"weekday":"long"},<br/>
 * o retorno será quarta-feira;<br/>
 * <br/>
 * 2. Assumindo como primeiro parâmetro a data 31/08/2016 00:00:00, segundo parâmetro pt-BR e terceiro parâmetro o texto JSON{"weekday":"long", "day":"numeric", "month":"long", "year":"numeric"},<br/>
 * o retorno será quarta-feira, 31 de agosto de 2016<br/>
 * <br/>
 * Mais informações:<br/>
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
 */
function ebfToLocaleDateString(date, locale ,format){
 locale = locale===undefined || locale===null ? resources_locale : locale;   
 //Força a remoção do underline por traço caso o idioma seja o padrão do Webrun.
 locale = ebfReplace(locale, "_", "-");
 if(date instanceof Date){
   try{
    var options = JSON.parse(format);
   }catch(e){
     handleException(new Error("Texto JSON não está em um formato válido"));
   } 
   return date.toLocaleDateString(locale, options);
 }
}

/**
 * Transforma o texto passado como parâmetro para  minúsculo.<br/>
 * <br/>
 * Parâmetros:  <br/>
 * 1. Texto a ser transformado.<br/>
 * <br/>
 * Retorno: <br/>
 * Converte o texto passado no primeiro parâmetro para  letras minúsculas e retorna.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo o parâmetro como "MAKER FLOW" (Letras),  o retorno seria "maker flow".<br/>
 * 2-Assumindo o parâmetro como "Maker Flow" (Letras),  o retorno seria "maker flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfToLowerCase() {
  var value = "";
  if (existArgs(arguments)) {
    value = arguments[0].toLowerCase();
  }
  return value;
}

/**
 * Transforma o texto passado como parâmetro para maiúsculo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto a ser transformado.<br/>
 * <br/>
 * Retorno: <br/>
 * Converte as o texto passado no primeiro parâmetro para  letras maiúsculas e retorna.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1-Assumindo o parâmetro como "maker flow" (Letras),  o retorno seria "MAKER FLOW".<br/>
 * 2-Assumindo o parâmetro como "Maker Flow" (Letras),  o retorno seria "MAKER FLOW".<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Parâmetros:<br/>
 * 1. Texto a ser traduzido<br/>
 * 2. Lista de parâmetros do texto<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o texto traduzido para o idioma definido no parâmetro. (Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Quando utilizada na camada servidor, a função irá buscar o texto passado na Tabela de Traduções. Se for utilizada<br/>
 * na camada cliente, o texto já tem que estar determinado no fluxo para que ele possa buscar na tabela antes da chamada da função.<br/>
 * 2. O segundo parâmetro é para definir nomes próprios que não possuem tradução.<br/>
 * <br/>
 * Exemplo:<br/>
 * Se definirmos o texto<br/>
 * 1° Parâmetro = Meu nome é {0} e meu pai é {1}.<br/>
 * No 2°parâmetro devemos criar uma lista a partir dos elementos com os valores correspondentes a posição no texto.<br/>
 * Ex: Lista [Maria, João]. Desta forma, a função irá retornar: My name is Maria and my father is João.
 */
function ebfTranslate(text) {
  // Caso o texto não tenha sida definido, então retorna o próprio valor
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

  // Tabela de Tradução.  
  try {
    if (eval("resources_" + resources_locale) && eval("resources_" + resources_locale)[text]) {  
      return eval("resources_" + resources_locale)[text];
    }  
  } catch(e) {}

  // Trata os parâmetros, caso haja
  if ((arguments.length > 1) && (arguments[1] != null) && (typeof arguments[1] != "undefined")) {
    if (arguments[1] instanceof Array) {
      // Obtém o Array
      var params = arguments[1];

      for (var i = 0; i < params.length; i++) {
        var param = params[i];
        if (param != null && typeof param != "undefined") {
          var regexp = new RegExp("\\{" + (i) + "\\}", "g");
          value = value.replace(regexp, param);
        }
      }
    } else {
      // Obtém os parâmetros definidos a partir do segundo parâmetro
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
 * Altera borda da árvore<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore<br/>
 * 2. Tamanho da borda (pixel)<br/>
 * 3. Cor<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo os parâmetros como "Árvore" (Variante), "2" (Inteiro) e a Cor(Azul). Será criada uma borda em volta da árvore de 2 pixeis de largura e de cor Azul.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTreeChangeBorder(tree,borderSize,color) {
  tree.otherDiv.style.border = borderSize + "px solid " + color;
}

/**
 * Função que retorna um elemento da árvore a partir do seu ID.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore na qual o elemento se encontra<br/>
 * 2. ID do elemento desejado<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a referência do elemento. (Variante)<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTreeGetElementById(tree, id){
  if(!tree)
    throw "O objeto árvore não foi definido!";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado não é do tipo Árvore!";
    
  if(!id)
    throw "O ID do elemento desejado não pode ser nulo!";
    
  return tree.getElement(id);  
}

/**
 * Obter Informações do Elemento<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore.<br/>
 * 2. Elemento.<br/>
 * <br/>
 * Retorno:<br/>
 * Informação (Letras)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como "Árvore" (Variante), "Elemento" (Variante). Caso haja alguma informação sobre o elemento passado por parâmetro, ela será retornada para uma variável do tipo Letras.
 */
function ebfTreeGetElementDBInfo(tree,element){	
  return tree.getElementDBInfo(element);	
}

/**
 * Obtém o nome do Elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros<br/>
 * 1. Árvore<br/>
 * 2. Elemento (Referência)<br/>
 * <br/>
 * Retorno<br/>
 * 1. Retorna o Nome do Elemento.
 */
function ebfTreeGetElementDesc(tree, element){

  if(!tree)
    throw "O objeto árvore não foi definido";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado não é do tipo Árvore";
  if(!element)
    throw "O objeto passado não é um elemento de uma árvore";

  try {
    return element.caption;
   
    
  } catch(e){
    throw e;
  }
  
  return -1;
}

/**
 * Função que retorna a chave do elemento passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore na qual o elemento se encontra; (Variante)  Ex: Retorno da função "Árvore - Criar Árvore".<br/>
 * 2. Elemento desejado.<br/>
 * <br/>
 * Retorno:<br/>
 * Chave do elemento. (Variante)<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTreeGetElementKey(tree, element){

  if(!tree)
    throw "O objeto árvore não foi definido";
  if(! (tree instanceof HTMLTreeview) )
    throw "O objeto passado não é do tipo Árvore";
  if(!element)
    throw "O objeto passado não é um elemento de uma árvore";

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
 * Adiciona Informações ao Elemento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore.<br/>
 * 2. Elemento.<br/>
 * 3. Lista de Informações Adicionais<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como uma "Árvore" (Variante),  o "Elemento" (Variante) e uma "Lista" com informações adicionais, esta será atribuída ao Elemento. Podendo ser obtida com a função Árvore - Obter Informações do Elemento.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTreeSetElementDBInfo(tree,element,arrInfo){	
  tree.setElementDBInfo(element,arrInfo);	
}

/**
 * Altera o ícone da árvore.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore.<br/>
 * 2. Elemento.<br/>
 * 3. Nome do arquivo imagem.<br/>
 * <br/>
 * Observação:<br/>
 * A função irá sempre buscar a imagem a partir do diretório Skin definido na propriedade "Skin" da área de trabalho do <br/>
 * Maker. Caso não haja um Skin definido, será buscado no diretório padrão ("Skins/Default/")
 */
function ebfTreeSetIcon(tree, element, iconFile) {	
  tree.setIcon(element, iconFile);	
}

/**
 * Contrai todos os nós da árvore.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém a árvore<br/>
 * 2. Componente Árvore<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação: <br/>
 * Para que a função funcione corretamente a propriedade "Carga Postergada"  deve está desativada<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Contraí o elemento da árvore passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Elemento da Árvore (Variante)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação: <br/>
 * Para que a função funcione corretamente a propriedade ""Carga Postergada"  deve está desativada
 */
function ebfTreeviewElementClose(element) {
  if (element) {
    element.close();  
  }  
}

/**
 * Expande todos os nós da árvore.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário que contém a árvore<br/>
 * 2. Componente Árvore<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui<br/>
 * <br/>
 * Observação: <br/>
 * Para que a função funcione corretamente a propriedade ""Carga Postergada"  deve está desativada<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Filtra a árvore de acordo com a palavra-chave passada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Árvore a ser filtrada<br/>
 * 2. Filtro (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Somente são considerados no filtro, os elementos Raízes.<br/>
 * 2. O filtro ocorre de acordo com a descrição dos elementos e não pelo campo-chave.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTreeviewFilter(com, filter) {
  $c(com).filter(filter);
}

/**
 * Remove os espaços existentes antes e depois do texto passado por parâmetro e retorna.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto a ser utilizado.<br/>
 * <br/>
 * Retorno:  <br/>
 * Retorna o texto passado como parâmetro, porém sem espaços no início e no final (Letras).<br/>
 * <br/>
 * Exemplos:<br/>
 * 1.Assumindo como parâmetro "           Maker Flow          " (Letras), o retorno seria "Maker Flow".<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfTrim() {
  var value = "";
  if (existArgs(arguments)) {
    value = trim(arguments[0]);
  }
  return value;
}

/**
 * Essa função decodifica uma URL passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. URL.<br/>
 * 2. Charset (Opcional) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * URL decodificada.<br/>
 * <br/>
 * Observação (ões):<br/>
 * 1. Caso o 2º parâmetro seja nulo, a função pega o Charset utilizado na aplicação.<br/>
 * 2. A URL só será decodificada corretamente se a mesma estiva codificada na mesma camada.
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
 * Essa função codifica uma URL passada por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. URL.<br/>
 * 2. Charset (Opcional) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a URL codificada. (Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Caso o 2º parâmetro seja nulo, a função pega o charset utilizado na aplicação.<br/>
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
 * Essa função atualiza um elemento no objeto JSON passado no primeiro parâmetro.<br/>
 * Caso a chave passada no segundo parâmetro não exista a mesma será criada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto JSON<br/>
 * 2. Chave<br/>
 * 3. Valor<br/>
 * <br/>
 * Retorno:<br/>
 * Objeto JSON atualizado.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro pode ser passado o retorno da função "JSON - Criar Objeto".<br/>
 * 2. Caso uma chave a ser atualizada tenha como valor um objeto Mapa, esta será convertida para JSON.<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro um objeto JSON criado a partir do Texto {"Versão":"3.9","empresa":"Softwell"}, ao chamar a função "JSON - Atualizar Valor" e passar como chave "Versão" (sem aspas) e valor (3º parâmetro) "4.0", o objeto JSON (1º parâmetro) terá a chave "Versão" atualizada de "3.9" para "4.0".
 */
function ebfUpdateValueObjectJson(objectJSON, key, value){
  objectJSON[key] = value instanceof Map ? ebfMapToJson(value) : value;
  return objectJSON;
}

/**
 * Atualiza a posição X do componente passado como parâmetro. Função apenas para componentes<br/>
 * que possuem a propriedade de movimentação habilitada.<br/>
 * <br/>
 * Parâmetros:<br/>
 *    1. Componente a ser atualizado;<br/>
 *    2. Nova posição para a coordenada X do componente.
 */
function ebfUpdateX(componentVar,newPosition){
    var component = $c(componentVar);
    if(component){
        component.updateX(newPosition);
    }
}

/**
 * Atualiza a posição Y do componente passado como parâmetro. Função apenas para componentes<br/>
 * que possuem a propriedade de movimentação habilitada.<br/>
 * <br/>
 * Parâmetros:<br/>
 *    1. Componente a ser atualizado;<br/>
 *    2. Nova posição para a coordenada Y do componente.
 */
function ebfUpdateY(componentVar,newPosition){
    var component = $c(componentVar);
    if(component){
        component.updateY(newPosition);
    }
}

/**
 * Realiza o upload de um arquivo. Poderá ser informado o caminho onde será armazenado o <br/>
 * arquivo, uma regra para efetuar a validação do arquivo a ser enviado e uma possível regra chamada e os parâmetros <br/>
 * que essa regra poderá receber(caso exista).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Caminho para armazenamento (Caso nulo será armazenado na "Upload" dentro do contexto do Webrun).<br/>
 * 2. Nome de uma regra cliente para validação (Opcional: Caso nulo, não haverá validação do arquivo antes do envio).<br/>
 * 3. Nome de uma regra (Caso nulo a função realizará apenas o upload do arquivo).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A regra chamada no 2º parâmetro pela função upload, receberá como parâmetro de entrada uma lista <br/>
 * (Variante) de arquivos a serem enviados. Esta lista possui informações como: nome do arquivo, tamanho (em bytes) e o tipo do arquivo (se identificado pelo browser).<br/>
 * 2.  A regra chamada no 2º parâmetro pela função upload, caso seja definida, deverá retornar verdadeiro ou <br/>
 * falso (Lógico) informando se deve ser permitido ou não o envio do arquivo.<br/>
 * 3. A regra chamada no 2º parâmetro deve ser da camada CLIENTE.<br/>
 * 4. A regra chamada no 3º parâmetro pela função upload, caso seja definida na camada servidor, não pode <br/>
 * chamar um sub fluxo cliente.<br/>
 * 5. A regra chamada no 3º parâmetro pela função upload, recebe como parâmetro de entrada o caminho para <br/>
 * onde foi enviado o arquivo. Para passar parâmetros adicionais, além do enviado automaticamente pelo Webrun, basta <br/>
 * clicar no botão (com sinal de adição) que se encontra ao lado do nome da função.
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
 * Realiza o upload de múltiplos arquivos. Poderá ser informado o caminho que será(ão) armazenado(s) <br/>
 * o(s) arquivo(s), uma regra para efetuar a validação do arquivo a ser enviado e uma possível regra chamada e os<br/>
 * parâmetros que essa regra poderá receber(caso exista).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Caminho para armazenamento (Caso nulo será armazenado na "Upload" dentro do contexto do Webrun).<br/>
 * 2. Nome de uma regra cliente para validação (Caso nulo, não haverá validação do arquivo antes do envio).<br/>
 * 3. Nome de uma regra (Caso nulo a função realizará apenas o upload do arquivo).<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observações:<br/>
 * 1. A regra chamada no 2º parâmetro pela função upload, receberá como parâmetro de entrada uma lista (Variante) de<br/>
 * arquivos a serem enviados. Esta lista possui informações como: nome do arquivo, tamanho (em bytes) e o tipo do <br/>
 * arquivo<br/>
 * (se identificado pelo browser).<br/>
 * 2.  A regra chamada no 2º parâmetro pela função upload, caso seja definida, deverá retornar verdadeiro ou falso <br/>
 * (Lógico) informando se deve ser permitido ou não o envio do arquivo.<br/>
 * 3. A regra chamada no 2º parâmetro deve ser da camada CLIENTE.<br/>
 * 4. A regra chamada no 3º parâmetro pela função upload, caso seja definida na camada servidor, não pode chamar um sub fluxo cliente.<br/>
 * 5. A regra chamada no 3º parâmetro pela função upload, recebe como parâmetro de entrada o caminho para onde foi<br/>
 * enviado o arquivo. Para passar parâmetros adicionais, além do enviado automaticamente pelo Webrun, basta clicar no <br/>
 * botão (com sinal de adição) que se encontra ao lado do nome da função.
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
 * Criar o nome de uma variável. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Variável.<br/>
 * 2. Valor lógico (Verdadeiro ou falso).<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o nome da variável sem acentos nem cedilhas. (Letras)<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Se o nome passado por parâmetro possuir acentos ou cedilhas, a função retornará valores diferentes conforme o 2° parâmetro Lógico.<br/>
 * 2. Se o 2° parâmetro for "true" o retorno será a variável sem acentos ou cedilhas, caso seja "false" o retorno será a variável<br/>
 * sem acentos ou cedilhas e em formato uppercase (em maiúsculo).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como parâmetro "Ação" (Letras), se o segundo parâmetro for Falso, o resultado será "ACAO", se for verdadeiro<br/>
 * será "Acao".
 */
function ebfUtilReduceVariable(texto, className) {
  return reduceVariable(texto, !parseBoolean(className));
}

/**
 * Essa função faz uma validação numa string utilizando expressão regular.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Recebe o texto que será validado pela expressão regular.<br/>
 * 2. Recebe a expressão regular para validar o texto.<br/>
 * <br/>
 * Retorno:<br/>
 * Lógico<br/>
 * <br/>
 * Observações:<br/>
 * 1. Os retornos podem ser:<br/>
 *     True  - O texto informado é válido, segundo a expressão regular informada.<br/>
 *     False - O texto informado não é válido.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfValidateTextER (text, regEx) {
  
  if (regEx == null || typeof regEx == "undefined" || regEx == "") {
    return false;
  }
  
  var regExp = new RegExp(regEx);
  return regExp.test(text);
  
}

/**
 * Retorna o status da conexão.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da conexão<br/>
 * <br/>
 * Retorno:<br/>
 * Status (Inteiro)<br/>
 * <br/>
 * 0 - Conectando<br/>
 * 1 - Conectado<br/>
 * 2 - Fechando<br/>
 * 3 - Fechado<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro é o retorno da função "WebSocket - Conectar ao Servidor".
 */
function ebfWebSocketClientCheckConnection(ws) {
  return ws.readyState;  
}

/**
 * Essa função encerra a conexão com o EndPoint passado como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da conexão<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro é o retorno da função "WebSocket - Conectar".<br/>
 * 2. Ao desconectar, será executado o fluxo associado ao parâmetro "Fluxo Ao desconectar", caso especificado.
 */
function ebfWebSocketClientDisconnect (ws) {
  if (ws.readyState === WebSocket.OPEN)
      ws.close();
}

/**
 * Essa função envia uma mensagem para o servidor de acordo os parâmetros passados.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Referência da Conexão<br/>
 * 2. Mensagem.<br/>
 * <br/>
 * Retorno<br/>
 * Não possui.<br/>
 * <br/>
 * Observação:<br/>
 * 1. O primeiro parâmetro é o retorno da função "WebSocket - Conectar.<br/>
 * 2. A mensagem enviada ao servidor será automaticamente enviada pelo mesmo para todos os clientes, acionando o fluxo "Ao enviar mensagem" de cada um.
 */
function ebfWebSocketClientSendMessage(ws, message) {
  ws.send(message);  
}

/**
 * Essa função conecta ao Endpoint disponível.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. URL<br/>
 * 2. Fluxo Ao Abrir Conexão (Opcional)<br/>
 * 3. Parâmetros Opcionais (Ao abrir conexão) (Opcional)<br/>
 * 4. Fluxo ao receber mensagem (Opcional)<br/>
 * 5. Parâmetros opcionais (Ao receber mensagem) (Opcional)<br/>
 * 6. Fluxo ao Ocorrer Erro (Opcional)<br/>
 * 7. Parâmetros opcionais (Ao ocorrer erro) (Opcional)<br/>
 * 8. Fluxo Ao Fechar Conexão (Opcional)<br/>
 * 9. Parâmetros Opcionais (Ao fechar conexão) (Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * Referência da conexão (Variante).<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Passando um fluxo "Ao abrir conexão" e uma lista de parâmetro com 2 (dois) elementos, o primeiro parâmetro do fluxo passado será reservado para a referência, o segundo sera reservado para o primeiro elemento da lista e o terceiro será reservado para o segundo elemento da lista.<br/>
 * 2. Passando um fluxo "Ao receber mensagem" e uma lista de parâmetro com 1 (um) elemento, o primeiro parâmetro do fluxo passado será reservado para a mensagem recebida e o segundo sera reservado para a mensagem recebida do servidor.<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso o fluxo "Ao abrir conexão" seja passado, o primeiro parâmetro deve ser reservado para a referência da conexão, mesmo que não vá usar.<br/>
 * 2. Caso o fluxo "Ao receber mensagem", o primeiro elemento dos parâmetros de entrada sempre será a mensagem recebida.<br/>
 * 3. O segundo parâmetro é o retorno da função "WebSocket - Obter EndPoint"<br/>
 * 4. No fluxo "Ao fechar conexão" não utilize funções que precisem da referência da conexão, pois neste estado a conexão já está sendo fechada e não funcionarão.<br/>
 * 5. Caso queira enviar mensagem do servidor para os clientes sem que seja uma mensagem enviada por um cliente, utilize a função "WebSocket - Enviar mensagem servidor p/ clientes" da camada Servidor.
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

//A instância do ws cliente sempre ficará na primeira posição do array de parâmetros, sendo passados ou não.
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

  //A mensagem captada sempre ficará na primeira posição do array de parâmetros, sendo passados ou não.
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
 * Verifica o estado da grade passada por parâmetro, retornando 'I' caso esteja em modo de inserção, 'A' caso esteja em <br/>
 * modo de edição, ou 'N' se não for nenhum dos dois casos.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome da Grade<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna a letra (' I ', ' A ' ou ' N ') correspondente ao modo da grade.(Letras)<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui<br/>
 * <br/>
 * Exemplos: <br/>
 * 1.Assumindo que o nome da grade é: "Grade Estados do Brasil"  e a mesma encontra-se em modo de inserção.<br/>
 * Ao chamar o fluxo o retorno será ' I '.
 */
function ebfWhatIsGridModeStatus(grid) {
  var grid = $c(grid);
  if (!grid) throw "Componente " + grid + " não encontrado";
  if (grid.editing) return 'A';
  else if (grid.inserting) return 'I';
  else return 'N';
}

/**
 * Retorna a largura(em pixels) do formulário onde o fluxo for executado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui<br/>
 * <br/>
 * Retorno:<br/>
 * Largura do Formulário. (Inteiro)<br/>
 * <br/>
 * Observações:<br/>
 * Não possui.
 */
function ebfWindowGetWidth() {
  return getWindowDimensions().width;
}

/**
 * Compartilha um texto/link através do dispositivo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Assunto<br/>
 * 2. Conteúdo<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
function ebfWirelessSendText(subject, content) {
  //To-do
}

/**
 * Obtém o atributo do Elemento XML informado <br/>
 * (Atributos são informações adicionais que são acrescentadas a uma tag(delimitadores)).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML.<br/>
 * 2. Nome do Atributo.<br/>
 * <br/>
 * Retorno: <br/>
 * A variável de Retorno deverá ser do tipo Letras<br/>
 * <br/>
 * Observações: <br/>
 * A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, <br/>
 * pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Se tivermos então um elemento XML: <br/>
 *     <br/>
 *   <?xml version="1.0"?><br/>
 *     <aviso date="25/10/2007"><br/>
 *       <para>Janice</para><br/>
 *       <de>Jefferson</de><br/>
 *       <cabecalho>Lembre-se</cabecalho><br/>
 *       <corpo>Lançamento do oficial do Maker</corpo><br/>
 *     </aviso> <br/>
 *     <br/>
 * e obtemos o atributo "date" o retorno será "25/10/2007".
 */
function ebfXMLGetAttribute(node, attribute) {
  return node.getAttribute(attribute);
}

/**
 * Retorna o primeiro elemento do Objeto XML passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML<br/>
 * 2. Nome do Elemento<br/>
 * 3. NameSpace (Letras, Opcional)<br/>
 * <br/>
 * Retorno:<br/>
 * A variável de Retorno deverá ser do tipo variante. Retorna a referência do elemento passado como parâmetro.<br/>
 * <br/>
 * Observações: <br/>
 * 1. A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o<br/>
 * assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplo 01: <br/>
 * 1. Tendo um XML onde o nome do elemento a ser obtido é "SQL"<br/>
 * <TEXTO>	<br/>
 *   <SQL>Sequel</SQL>	   <br/>
 *   <MAKER>Flow</MAKER><br/>
 *   <SQL>Sequel2</SQL><br/>
 * </TEXTO> <br/>
 * Então o retorno seria a referência para o primeiro elemento "SQL"<br/>
 * <br/>
 * Exemplo 02: <br/>
 * 1. Tendo um XML onde o nome do elemento a ser obtido é "MAKER" onde o mesmo possui o NameSpace "flow"<br/>
 * <TEXTO>	<br/>
 *   <SQL>Sequel</SQL>	   <br/>
 *   <MAKER xmlns="flow">Flow</MAKER><br/>
 *   <SQL>Sequel2</SQL><br/>
 * </TEXTO> <br/>
 * Então o retorno seria a referência para o primeiro elemento "MAKER".
 */
function ebfXMLGetChildElement(node, childName) {
  var c = node.getElementsByTagName(childName);
  if (c.length > 0) 
   return c[0];
}

/**
 * Obtém todos os filhos de um determinado Elemento XML informado.<br/>
 * (Os Filhos do Elemento no caso seria então os Sub-Elementos do Elemento.).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML. (Raiz, Nó, etc...)<br/>
 * 2. Nome do Elemento.<br/>
 * <br/>
 * Retorno: <br/>
 * A variável de Retorno deverá ser do tipo Variante.<br/>
 * <br/>
 * Observações: <br/>
 * 1. A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, <br/>
 *    pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Tendo uma XML onde o elemento é <br/>
 *     <TEXTO>	<br/>
 *       <SQL>Sequel</SQL>	   <br/>
 *       <MAKER>Flow</MAKER>	 <br/>
 *     </TEXTO><br/>
 *     Então o retorno seria o que estive-se dentro do nó <TEXTO>, no caso,  <SQL> e <MAKER>.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Obtém o nome de um elemento XML.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Objeto XML.<br/>
 * <br/>
 * Retorno:<br/>
 * Letras<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se temos então <br/>
 *          <TEXTO><br/>
 *                Maker Flow  Versão = 3.0 <br/>
 *          </TEXTO><br/>
 *     O retorno será: TEXTO<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfXMLGetElementTagName(node) {
  return node.tagName;
}

/**
 * Obtém todo o conteúdo e  todos os sub-elementos que estão dentro do Elemento.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML (nó do elemento)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Se temos  então <br/>
 *     <TEXTO><br/>
 *             Maker Flow	<br/>
 *             <SQL>Sequel</SQL>	    <br/>
 *             <MAKER>Flow</MAKER>	<br/>
 *     </TEXTO><br/>
 *     Então o retorno seria: Maker Flow , <SQL>Sequel</SQL> e <MAKER>Flow</MAKER><br/>
 * <br/>
 * Versão: 1.0.0.1
 */
function ebfXMLGetElementValue(node) {
  if (node && node.firstChild)
    return node.firstChild.nodeValue;
  else
    return null;
}

/**
 * Obtém o Elemento acima do Sub-Elemento<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML.  (Raiz, Nó, etc...)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Tendo uma XML onde o Sub-Elemento é  <MAKER>Flow</MAKER> e acima dele tem um Elemento pai<br/>
 *     <TEXTO>		   <br/>
 * 	   <MAKER>Flow</MAKER>	<br/>
 *     </TEXTO><br/>
 *     Então o seu Elemento pai é "<TEXTO>"<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfXMLGetParentElement(node) {
  return node.parentNode
}

/**
 * Obtém um elemento raiz de um XML.<br/>
 * (O Elemento raiz seria o elemento pai de um arquivo XML)<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Objeto XML<br/>
 * <br/>
 * Retorno:<br/>
 * A variável de Retorno deverá ser do tipo Variante<br/>
 * <br/>
 * Observações:: <br/>
 * 1. A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Se tivermos então um elemento XML .<br/>
 *       <?xml version="1.0" encoding="ISO-8859-1"?><br/>
 *       <software><br/>
 *         <titulo>Maker</titulo><br/>
 *         <direitos>SOFTWELL</direitos><br/>
 *         <ano>2007</ano><br/>
 *       </software ><br/>
 *     Então retorna: < software >.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfXMLGetRoot(doc) {
  if (doc) return doc.documentElement;
}

/**
 * Essa função cria um objeto XML passando como parâmetro o texto no formato em XML. E atribui o objeto criado a uma<br/>
 * variável do tipo Variante.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. O texto em XML;<br/>
 * 2. Charset(Opcional) (Servidor) (Ex.: UTF-8, ISO-8859-1);<br/>
 * <br/>
 * Retorno: <br/>
 * Cria o objeto XML. O retorno deve ser armazenado numa variável do tipo Variante.<br/>
 * <br/>
 * Observações: <br/>
 * 1. No segundo parâmetro, deverá ser informado o charset do arquivo. Caso não seja passado o charset, a função adotará o charset corrente do Webrun.<br/>
 * 2. A linguagem XML é definida como o formato universal para dados estruturados na Web. Para saber mais sobre o<br/>
 * assunto, pesquise em um site de busca sobre (XML) ou (Extensible Markup Language).<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o 1º parâmetro sendo: <br/>
 *         <?xml version="1.0" encoding="ISO-8859-1"?><br/>
 *           <CURSO><br/>
 *                <DISCIPLINA><br/>
 *                    <OBJETIVO><br/>
 *                         Ensinar XML<br/>
 *                    </OBJETIVO><br/>
 *                    <METODOLOGIA><br/>
 *                          Laboratório<br/>
 *                    </METODOLOGIA><br/>
 *                    <AVALIACAO><br/>
 *                          3 provas<br/>
 *                    </AVALIACAO><br/>
 *                </DISCIPLINA><br/>
 *           </CURSO><br/>
 *     O retorno será a criação do objeto XML.
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
 * Converte uma texto no padrão XML para o padrão JSON texto.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Texto XML.<br/>
 * <br/>
 * Retorno:<br/>
 * JSON texto (Letras).<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como parâmetro o texto <Softwell><IDE>Maker</IDE><Framework>Webrun</Framework></Softwell> o retorno será o texto JSON <br/>
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
 * Parâmetros:<br/>
 * Nenhum
 */
function ebfopenLogonDigitalCapture() {
 openLogonDigitalCapture(ebfGetSystemID());
}

/**
 * Alterar Tamanho da Fonte do Componente<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente (definir o formulário de trabalho no parâmetro de entrada, ou informar o nome do componente na constante letras.)<br/>
 * 2. Tamanho da Fonte<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebfsetSizeFontComponent(ComponentName,s) {
    s = (s ? s : 11);
   $c(ComponentName).setSize(s);
}

/**
 * Recarrega o sistema em execução onde a função foi chamada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function ebfshortcutReloadSystem() {
 shortcutReloadSystem(ebfGetFullSystemID());
}

/**
 * Moldura - Altera o Conteúdo da Moldura<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Nome do Componente<br/>
 * 2. Novo conteúdo<br/>
 * <br/>
 * Retorno:<br/>
 * Nenhum<br/>
 * <br/>
 * Observação(ões):<br/>
 * Não possui.
 */
function ebgChangeValueGroupBox(ComponentName,HTML) {
   var c = $c(ComponentName);   
   c.div.innerHTML = "";   
   c.div.innerHTML = HTML;
}

/**
 * Verifica se o formulário passado como parâmetro está aberto.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Formulário.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna verdadeiro se o formulário estiver aberto, caso contrário retorna falso. (Lógico)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Esta função não identifica os formulários que foram abertos numa moldura. Para tal, deve utilizar a função <br/>
 * "Executar fluxo no Formulário numa Moldura" passando uma regra que irá verificar se o formulário na moldura <br/>
 * está aberto.<br/>
 * 2. Esta função só irá funcionar caso exista algum parentesco entre os formulários.
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
 * Insere o texto na posição atual do cursor dentro de um campo do tipo Memo<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Componente (Letras)<br/>
 * 2. Texto desejado (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Esta função insere apenas o texto na posição do cursor em um componente Memo.<br/>
 * 2. Esta função só funciona para o memo quando a propriedade texto rico está setada como "Texto".<br/>
 * 3. Para utilizar esta função, deve-se criar um novo processamento e utilizar previamente a função "Monitorar posição do cursor no Memo".
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
 * Parâmetros:<br/>
 * 1. Componente (Letras)<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Esta função monitora apenas o posicionamento do cursor em um componente MEMO<br/>
 * 2. Esta função não funciona para o memo quando a propriedade texto rico está setada como "HTML Básico" ou "HTML Avançado".
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
      alert('Componente não encontrado!');    
    }
  }
}

/**
 * Esta função retorna uma lista com o nome de todos os componentes presentes na tela onde esta função foi <br/>
 * chamada.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno:<br/>
 * Lista com Nome dos Componentes. (Variante)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Caso queira utilizar na camada servidor, escolha a função "Obter Lista de Componentes de um Formulário".
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
 * Essa função retorna o dia da semana a partir da data passada como parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Data que você deseja saber o dia da semana<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna um número inteiro que representa o dia da semana. (Inteiro)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo que o 1º parâmetro seja 23/09/2007. O retorno será 1, pois o dia a data cai no domingo.<br/>
 * 2. Assumindo que o 1º parâmetro seja 04/10/2007. O retorno será 5, pois a data cai na quinta-feira.<br/>
 * <br/>
 * Observação(ões):<br/>
 * A função retorna um número inteiro representando o dia da semana (1 = Domingo; 2 = Segunda-Feira; 3 = Terça-Feira; 4 = Quarta-Feira; 5 = Quinta-Feira; 6 = Sexta-Feira; 7 = Sábado).
 */
function getDayOfWeek(paramDate) {   
  var date = toDate(paramDate);
  return date.getDay() + 1;  
}

/**
 * Essa função verifica se o 1º parâmetro é diferente do 2º parâmetro. Caso seja, retorna verdadeiro, caso contrário, falso.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Primeiro valor.<br/>
 * 2. Segundo valor.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o 1º parâmetro for diferente do 2º parâmetro, caso contrário retorna falso. (Lógico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo os parâmetros como 10 (inteiro) e 2 (Inteiro), o retorno será verdadeiro.<br/>
 * 2. Assumindo os parâmetros como A (letra) e A (letra), o retorno falso.<br/>
 * <br/>
 * Observação(ões): <br/>
 * 1. Essa função diferencia letras maiúsculas e minúsculas.<br/>
 * 2. Devido a tipagem dinâmica das variáveis na camada cliente a função em questão considera que os parâmetros criados como numéricos<br/>
 * necessita que seus valores sejam convertidos para inteiro ou fracionado, através do uso das funções: (Para Inteiro e Para Fracionado.)
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
 * Essa função verifica se os valores passados por parâmetro são iguais, ou seja, possuem o mesmo valor.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * O Retorno será verdadeiro se o valor do 1º parâmetro for igual ao valor do 2º parâmetro, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1º parâmetro sendo "ab" e o 2º parâmetro sendo "AB" o valor de retorno será falso, pois a função diferencia letras maiúsculas e minúsculas.<br/>
 * 2. Assumindo o valor do 1º parâmetro sendo "80" e o 2º parâmetro sendo "80" o valor de retorno será verdadeiro, pois 80 é igual a 80.<br/>
 * <br/>
 * Observações: <br/>
 * Essa função diferencia letras maiúsculas e minúsculas.<br/>
 * Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são<br/>
 *  numéricos, será necessário converter os valores para número (inteiro ou fracionario) ao passar os parâmetros para a<br/>
 *  função (mesmo se as variáveis utilizadas já forem numéricas).<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função verifica se o valor do 1º parâmetro é maior que o do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * Se os valores dos parâmetros forem iguais o retorno será falso, pois o mesmo valor não é maior que ele mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1º parâmetro for maior que o valor do 2º parâmetro, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1º parâmetro sendo 20 e o 2º parâmetro sendo 30 o valor de retorno será falso, pois 20 não é maior que 30.<br/>
 * 2. Assumindo o valor do 1º parâmetro sendo 80 e o 2º parâmetro sendo 80 o valor de retorno será falso, pois 80 não é maior que 80.<br/>
 * <br/>
 * Observação:<br/>
 * Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são<br/>
 *  numéricos, será necessário converter os valores para número (inteiro ou fracionario) ao passar os parâmetros para a<br/>
 *  função (mesmo se as variáveis utilizadas já forem numéricas).<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função verifica se o valor do 1º parâmetro é maior ou igual a do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1º parâmetro for maior ou igual que o valor do 2º parâmetro, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1º parâmetro sendo 36 e o 2º parâmetro sendo 52 o valor de retorno será falso, pois 36 não é maior nem igual a 52.<br/>
 * 2. Assumindo o valor do 1º parâmetro sendo 55 e o 2º parâmetro sendo 55 o valor de retorno será verdadeiro, pois a condição é maior ou igual e 55 é igual a 55.<br/>
 * <br/>
 * Observação:<br/>
 * Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são<br/>
 *  numéricos, será necessário converter os valores para número (inteiro ou fracionario) ao passar os parâmetros para a<br/>
 *  função (mesmo se as variáveis utilizadas já forem numéricas).<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Essa função verifica se o valor do 1º parâmetro é menor que o valor do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * Se os valores dos parâmetros forem iguais o retorno será falso, pois o mesmo valor não é menor que ele mesmo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser verificado<br/>
 * 2.  Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1º parâmetro for menor que o valor do 2º parâmetro, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1º parâmetro sendo 26 e o 2º parâmetro sendo 12 o valor de retorno será falso, pois 26 não é menor que 12.<br/>
 * 2. Assumindo o valor do 1º parâmetro sendo 5 e o 2º parâmetro sendo 87 o valor de retorno será verdadeiro, pois 5 é menor que 87.<br/>
 * <br/>
 * Observação:<br/>
 * Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são<br/>
 *  numéricos, será necessário converter os valores para número (inteiro ou fracionário) ao passar os parâmetros para a<br/>
 *  função (mesmo se as variáveis utilizadas já forem numéricas).
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
 * Essa função verifica se o valor do 1º parâmetro é menor ou igual ao valor do 2º parâmetro. A depender do resultado retorna verdadeiro ou falso.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Valor a ser verificado<br/>
 * 2. Valor a ser verificado<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor do 1º parâmetro for menor ou igual ao valor do 2º parâmetro, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo o valor do 1º parâmetro sendo 65 e o 2º parâmetro sendo 15 o valor de retorno será falso, pois 65 não é menor nem igual que 15.<br/>
 * 2. Assumindo o valor do 1º parâmetro sendo 505 e o 2º parâmetro sendo 632 o valor de retorno será verdadeiro, pois 505 é menor que 632.<br/>
 * 3. Assumindo o valor do 1º parâmetro sendo 39 e o 2º parâmetro sendo 39 o valor de retorno será verdadeiro, pois a condição é menor ou igual e 39 é igual a 39.<br/>
 * <br/>
 * Observação:<br/>
 * Devido a tipagem dinâmica das variáveis na camada cliente. Para que a função considere que os parâmetros são<br/>
 *  numéricos, será necessário converter os valores para número (inteiro ou fracionário) ao passar os parâmetros para a<br/>
 *  função (mesmo se as variáveis utilizadas já forem numéricas).
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
 * Essa função verifica se o parâmetro é nulo. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1.Recebe um valor ou uma função para ser avaliada.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor for nulo, caso contrário o retorno será falso.<br/>
 * <br/>
 * Observação:<br/>
 * 1.Valores iguais a 0 (zero) são considerados como nulo.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas funções a função É Nulo, caso a consulta não retorne valor de FOL_COD o retorno será verdadeiro, pois o campo está com o valor nulo.<br/>
 * 2. Assumindo que tenhamos obtido o valor de um componente do formulário, se não tiver valor no componente o retorno será verdadeiro, caso o componente tenha algum valor atribuído a ele o retorno será falso.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função não é válida para verificar se um Objeto Lista ou Mapa é nulo ou vazio, para tal, utilizar a função Tamanho da Lista ou Tamanho do Mapa verificando se o retorno da mesma é maior que 0 (zero).<br/>
 * <br/>
 * Versão: 1.0.0.1
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
 * Essa função verifica se o parâmetro é nulo ou vazio. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1.Recebe um valor ou uma função para ser avaliada.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor for nulo ou vazio, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos feito uma consulta no banco de dados (ex: FPG_ACUMULO) e a partir da consulta obtemos o valor do campo (FOL_COD). Atribuindo essas duas funções a função É Nulo, caso a consulta não retorne valor de FOL_COD o retorno será verdadeiro, pois o campo está com o valor nulo.<br/>
 * 2. Assumindo que tenhamos obtido o valor de um componente do formulário, se não tiver valor no componente o retorno será verdadeiro, caso o componente tenha algum valor atribuído a ele o retorno será falso.<br/>
 * 3. Verificando se um campo no formulário está em branco, a função retornará verdadeiro caso o campo esteja vazio caso contrário retornará falso.<br/>
 * <br/>
 * Observação:<br/>
 * 1. Essa função não é válida para verificar se um Objeto Lista ou Mapa é nulo ou vazio, para tal, utilizar a função Tamanho da Lista ou Tamanho do Mapa verificando se o retorno da mesma é maior que 0 (zero).
 */
function isNullOrEmpty(variavel) {
  return (variavel == null || typeof variavel == 'undefined' || trim(variavel+'') == '' || variavel.toString() == 'NaN');
}

/**
 * Essa função busca a posição do elemento que foi informado na lista. Se encontrar retorna a posição. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Lista onde será procurado o elemento<br/>
 * 2. Elemento que será procurado<br/>
 * <br/>
 * Retorno:<br/>
 * A posição do elemento na lista, caso não seja encontrado, retorna 0. (Inteiro)<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Assumindo que o 1º parâmetro seja uma lista com os seguintes valores: {a,b,c,d,e,f,g,h} e o 2º parâmetro seja o valor  "d". O retorno será o valor 4, pois "d" está na posição 4 da lista.
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
 * Retorna a soma dos números dos parâmetros passados.<br/>
 * <br/>
 * Parâmetros: <br/>
 * n. Informar o valor para ser somado.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da Soma dos parâmetros passados. (Número)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os parâmetros sendo: 2 (Inteiro) e 2 (Inteiro), o retorno será: 4 (Inteiro).<br/>
 * 2. Assumindo os parâmetros sendo: 4 (Inteiro) e 6 (Inteiro), o retorno será: 10 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função verifica se algum valor passado é Falso, para retornar falso ou se são verdadeiros para retornar verdadeiro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * n. Valores ou funções que retornem valores lógicos.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se todos os valores forem verdadeiros, caso um valor seja falso o retorno será falso. (Lógico)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos dois parâmetros: o 1º recebe a Função "Maior" contendo os parâmetros: 3 e 5 (3>5) e o 2º recebe a <br/>
 * Função "Menor" contendo os parâmetros: 7 e 10 (7<10), o retorno será falso,pois 3 é menor que 5.<br/>
 * 2. Assumindo que tenhamos dois parâmetros: o 1º recebe a Função "Igual" contendo os parâmetros: A e A (A=A) e o 2º recebe a <br/>
 * Função "Diferente" contendo os parâmetros: 56 e 65 (56<>65), o retorno será verdadeiro, pois as duas condições são <br/>
 * verdadeiras.<br/>
 * <br/>
 * Observação(ões)<br/>
 * 1. Podem ser n parâmetros, utilize o mais (+) para acrescentar os parâmetros desejados.
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
 * Calcula a média aritmética dos valores passados como parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * n. Valor a ser somado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a divisão da soma dos números passados por parâmetro pela quantidade de parâmetros. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Informando os parâmetros como: 10 (Inteiro) e 2 (Inteiro), o resultado é 6,0 (Fracionado).<br/>
 * 2. Informando os parâmteros como: 7 (Inteiro), 7 (Inteiro) e 7 (Inteiro) o resultado é 7,0 (Fracionado).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função verifica se o valor passado no 1º parâmetro está contido no intervalo que é delimitado pelo 2º e 3º parâmetros. A depender do resultado, retorna verdadeiro ou falso.<br/>
 * <br/>
 * Parâmetro:<br/>
 * 1. Valor a ser verificado<br/>
 * 2. Menor valor do intervalo<br/>
 * 3. Maior valor do intervalo<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se o valor verificado estiver no intervalo, caso contrário o retorno será falso.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o valor do 1º parâmetro seja 50, o do 2º parâmetro 10 e o valor do 3º parâmetro 100 o retorno será verdadeiro, pois 50 está entre 10 e 100.<br/>
 * 2. Assumindo que o valor do 1º parâmetro seja 5, o do 2º parâmetro 35 e o valor do 3º parâmetro 70 o retorno será falso, pois 5 não está entre 35 e 70.
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
 * Essa função é utilizada para realizar a divisão.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Valor do dividendo.<br/>
 * 2. Valor do divisor.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da divisão dos números passados por parâmetros. (Fracionado)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1° Parâmetro sendo: 10 (Inteiro) e o 2° Parâmetro sendo: 5 (Inteiro), o retorno será : 2.<br/>
 * 2. Assumindo como o 1° Parâmetro sendo: 10,5 e o 2° Parâmetro sendo: 2,5 o retorno será: 4.2.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função verifica o valor lógico do 1º parâmetro, se o mesmo for verdadeiro o retorno será o valor que estiver no 2º <br/>
 * parâmetro, caso contrário o valor do 3º parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Função que tenha um retorno lógico<br/>
 * 2. Valor a ser retornado caso o primeiro parâmetro seja verdadeiro<br/>
 * 3. Valor a ser retornado caso o primeiro parâmetro seja falso<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor do 2º parâmetro ou do 3º parâmetro a depender do retorno lógico do 1º parâmetro.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o valor do 1º parâmetro seja a função igual contendo os valores 7 e 7 (7=7), o 2º parâmetro o valor 7 e o 3º<br/>
 * parâmetro o valor 5, o retorno será 7, pois a condição do 1º parâmetro é verdadeira.<br/>
 * 2. Assumindo que o valor do 1º parâmetro seja a função diferente contendo os valores 19 e 19 (19<>19), o 2º parâmetro o <br/>
 * valor 35 e o 3º parâmetro a função soma contendo 5 e 15 (5+15) , o retorno será o resultado da soma no caso 20, pois a <br/>
 * condição do 1º parâmetro é falsa.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function oprIf() {
  var value = null;
  if (existArgs(arguments)) {
    value = arguments[0] ? arguments[1] : arguments[2];
  }
  return value;
}

/**
 * Essa função é utilizada para obter o maior dos valores passados por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * n. Valor a ser comparado.<br/>
 * <br/>
 * Retorno:<br/>
 * Obtém o maior valor dentre os passados por parâmetro, pode ter (n) parâmetros a serem avaliados. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo que os parâmetros sejam: 100 (Inteiro), 66 (Inteiro), 13 (Inteiro) e 99 (Inteiro) o retorno será: 100.0 (Fracionado).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função é utilizada para obter o menor dos valores passados por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * n. Valor a ser comparado.<br/>
 * <br/>
 * Retorno:<br/>
 * Obtém o menor valor dentre os passados por parâmetro, pode ter (n) parâmetros a serem avaliados. (Fracionado)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os parâmetros sendo: 100 (Inteiro), 66 (Inteiro) e 99 (Inteiro) o retorno será: 66.0 (Fracionado).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Calcula o valor absoluto de um número, ou seja, retorna sempre o valor positivo.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Valor para retornar um valor absoluto.<br/>
 * <br/>
 * Retorno:<br/>
 * Módulo do número passado por parâmetro. (Número)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo como 1° Parâmetro sendo: -10 (Inteiro), o retorno será 10 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function oprModulus() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.abs(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Retorna a multiplicação dos números passados por parâmetro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * n.Valor a ser multiplicado.<br/>
 * <br/>
 * Retorno:<br/>
 * Resultado da multiplicação dos parâmetros passados. (Número)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os valores dos parâmetros 5 (Inteiro) e 4 (Inteiro), o retorno será 20 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Essa função inverte o valor lógico. Se o valor do parâmetro for verdadeiro o retorno dele terá o valor lógico falso. Caso <br/>
 * contrário será verdadeiro.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1.Valor Lógico<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o valor lógico invertido. <br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que o 1º parâmetro é uma variável do tipo lógica de valor verdadeiro, o retorno será falso. <br/>
 * 2. Assumindo que o 1º parâmetro é a função igual contendo os valores 5 e 5 (5=5) o retorno será falso, pois (5=5 é verdadeiro)<br/>
 * a negação dessa operação é falso.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
        interactionError("Tipo de parâmetro desconhecido para a operação NOT.");
        value = temp;
      }
    }
  }
  return value;
}

/**
 * Essa função verifica se algum valor passado por parâmetro é verdadeiro, para retornar verdadeiro ou se todos os parâmetros são valores falsos, para retornar falso.<br/>
 * <br/>
 * Parâmetros:<br/>
 * n. Recebe valores ou funções que retornem valores lógicos.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna verdadeiro se apenas um parâmetro for verdadeiro e retorna falso se todos os parâmetros forem falsos.<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo que tenhamos dois parâmetros: o 1º recebe a função maior contendo os parâmetros: 3 e 5 (3>5) e o 2º recebe a função menor contendo os parâmetros: 7 e 10 (7<10), o retorno será verdadeiro,pois um parâmetro é verdadeiro.<br/>
 * 2. Assumindo que tenhamos dois parâmetros: o 1º recebe a função igual contendo os parâmetros: A e F (A=F) e o 2º recebe a função diferente contendo os parâmetros: 64 e 64 (64<>64), o retorno será falso, pois as duas condições são falsas.<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Eleva o coeficiente passado no Parâmetro 1, ao expoente passado no Parâmetro 2.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Valor a ser elevado à potência (base).<br/>
 * 2. Valor para ser informado como expoente.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor calculado. (Fracionado)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo os parâmetros sendo: 4 (Inteiro) e 2 (Inteiro), o retorno será: 16.0 (Fracionado).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function oprPow() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.pow(parseNumeric(arguments[0]), parseNumeric(arguments[1]));
  }
  return value;
}

/**
 * Obtém o valor inteiro de um número arredondando para cima ou para baixo, a depender da parte fracionada do número.<br/>
 * Se a parte fracionada do número for maior ou igual a 0,5 o número será arredondado para cima, caso contrário para baixo.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Valor a ser arredondado.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna o valor (inteiro) arredondado de um número passado por parâmetro. (Inteiro)<br/>
 * <br/>
 * Exemplos: <br/>
 * 1. Assumindo como o 1° parâmetro sendo: 9,5 o retorno será 10 (Inteiro).<br/>
 * 2. Assumindo como o 1° parâmetro sendo: 9,4 o retorno será 9 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function oprRound() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.round(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Calcula a raiz quadrada de um número.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1.Valor para ser tirado a raiz quadrada.<br/>
 * <br/>
 * Retorno:<br/>
 * Raiz quadrada do número passado. (Fracionado)<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo como parâmetro como 16 (Inteiro), o retorno será: 4.0 (Fracionado), pois  4² = 16.<br/>
 * 2. Assumindo como parâmetro como 81 (Inteiro), o retorno será: 9.0 (Fracionado), pois  9² = 81.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
 */
function oprSqrt() {
  var value = 0;
  if (existArgs(arguments)) {
    value = Math.sqrt(parseNumeric(arguments[0]));
  }
  return value;
}

/**
 * Subtração de valores informados nos parâmetros.<br/>
 * <br/>
 * Parâmetro: <br/>
 * n.Valor para a subtração.<br/>
 * <br/>
 * Retorno:<br/>
 * Retorna a subtração de dois ou mais números. (Número)<br/>
 * <br/>
 * Exemplo:<br/>
 * 1. Assumindo os parâmetros sendo: 10 (Inteiro) e 5 (Inteiro), o retorno será: 5(Inteiro).<br/>
 * 1. Assumindo os parâmetros sendo: 20 (Inteiro) e 2 (Inteiro), o retorno seria: 18 (Inteiro).<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O tipo de retorno resultante depende do tipo do primeiro parâmetro.<br/>
 * 2. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.
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
 * Arredonda para baixo um número fracionado.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor fracionado.<br/>
 * <br/>
 * Retorno:<br/>
 * Número arredondado para baixo.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1. Assumindo o parâmetro: 9,6 (Fracionado), o retorno seria: 9 (Inteiro)<br/>
 * <br/>
 * Observações:<br/>
 * 1. Para garantir a integridade das operações matemáticas, utilize conversão para o tipo de dado nos parâmetros.<br/>
 * <br/>
 * Versão: 1.0.0.0
 */
function oprTrunc() {
  var value = 0;
  if (existArgs(arguments)) {
    value = parseNumeric(arguments[0]).trunc();
  }
  return value;
}

/**
 * Remove a barra de navegação do formulário que chama o fluxo.<br/>
 * <br/>
 * Parâmetros:<br/>
 * Não possui.<br/>
 * <br/>
 * Retorno: <br/>
 * Não possui.<br/>
 * <br/>
 * Exemplos:<br/>
 * 1. Em um formulário que possua barra de navegação, quando essa função for executada esta barra será removida.<br/>
 * <br/>
 * Observações:<br/>
 * 1. O navegador que vai ser removido será a do formulário que chama o fluxo.
 */
function removeNavigator() {
  controller.removeNavigator();
}

/**
 * Causa um atraso na execução de um fluxo. Conhecida também como sleep.<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Tempo em segundos.<br/>
 * <br/>
 * Retorno:<br/>
 * Não possui.
 */
/* Função em implementação, não utilize.*/
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
 * Transforma o texto normal em um texto para Delphi com a identação passada no segundo parâmetro.<br/>
 * (Coloca os caracteres especiais para serem executados em Delphi , como por exemplo caracteres de quebra de linha e<br/>
 * etc..)<br/>
 * <br/>
 * Parâmetros: <br/>
 * 1. Texto que será transformado para Delphi.<br/>
 * 2. Parâmetro: Identação.<br/>
 * <br/>
 * Retorno: <br/>
 * Retorna o texto em Delphi.<br/>
 * <br/>
 * Exemplo: <br/>
 * 1.A quebra de linha em Delphi é representada por "#13#10". Assim, passando como parâmetros "Maker(Quebra de Linha)<br/>
 * All " (Letras) e "   " (3 espaços em branco), o resultado será (   '"Maker'#13#10'All "').<br/>
 * <br/>
 * Versão: 1.0.0.0
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
 * Converte para valor Lógico o texto passado por parâmetro. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Texto que será convertido para Lógico.<br/>
 * <br/>
 * Retorno:<br/>
 * Valor Lógico correspondente ao texto enviado.(Lógico)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo como parâmetro o conteúdo " 1", o retorno será o valor Lógico Verdadeiro.<br/>
 * 2. Assumindo como parâmetro o conteúdo " 0 ", o retorno será o valor Lógico Falso.
 */
function toBoolean(value) {
  return parseBoolean(value);
}

/**
 * Converte um valor passado por parâmetro para Bytes.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Conteúdo que será convertido para bytes.<br/>
 * <br/>
 * Retorno:<br/>
 * Array de Bytes equivalente ao conteúdo passado por parâmetro.(Variante)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1. Assumindo o parâmetro "Maker", será retornado um array de bytes equivalente à palavra "Maker".<br/>
 * <br/>
 * Observação(ões):<br/>
 * Para manipular os bytes de retorno dessa função é necessária a utilização da função "Array para Lista" da categoria "Conversão". <br/>
 * Após convertido pra lista o conteúdo poderá ser manipulado pelas funções da categoria "Lista".
 */
function toBytes(obj) {
  return obj ? obj.toString() : "";
}

/**
 * Converte para data o valor passado no primeiro parâmetro. O segundo parâmetro é opcional, e por ele pode-se informar o formato da data que será retornada (válido apenas para fluxo servidor).<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido<br/>
 * 2. Formato do parâmetro a ser convertido. (OPCIONAL, válido apenas para fluxo servidor)<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para data.(Data)<br/>
 * <br/>
 * Exemplo(s): <br/>
 * 1.Assumindo como parâmetros a data 10/10/2007 09:12:40 e  o formato dd/MM/yyyy,  o retorno será 10/10/2007 00:00:00.<br/>
 * <br/>
 * Observação(ões):<br/>
 * 1. O formato da Data referente ao segundo parâmetro deve ser escrito no seguinte formato:<br/>
 *          dd    - Para dia do mês da data do primeiro parâmetro.<br/>
 *          MM  - Para Mês do Ano da data do primeiro parâmetro.<br/>
 *         yyyy  - Para o Ano da data do primeiro parâmetro.<br/>
 * 2. O formato da data não remove as horas.
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
 * Parâmetros:<br/>
 * 1. Valor em Radianos a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * 1. "Radianos" convertido para "Graus". (Número)
 */
function toDegrees(radians) {
  return (Math.PI * toDouble(radians)) / 180;
}

/**
 * Converte para fracionado o valor passado por parâmetro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Fracionado. (Fracionado)<br/>
 * <br/>
 * Observação(es):<br/>
 * 1. O valor apresentado será conforme o idioma do sistema.
 */
function toDouble(value) {
  return parseNumeric(value);
}

/**
 * Converte um valor passado por parâmetro para Inteiro.<br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Inteiro. (Inteiro)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetros "12,54"  ,  o retorno será 12.
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
 * Parâmetros:<br/>
 * 1. Grau a ser convertido.<br/>
 * <br/>
 * Retorno:<br/>
 * Grau convertido para radianos. (Número)
 */
function toRadians(degrees) {
  return (180 * toDouble(degrees)) / Math.PI;
}

/**
 * Converte um valor passado por parâmetro para letras. <br/>
 * <br/>
 * Parâmetros:<br/>
 * 1. Valor a ser convertido.<br/>
 * <br/>
 * Retorno: <br/>
 * Valor convertido para Letras.(Letras)<br/>
 * <br/>
 * Exemplo(s):<br/>
 * 1. Assumindo como parâmetro o fracionado 7.4, o retorno será o valor 7.4 convertido para letras.
 */
function toString(obj) {
  return isNullable(obj) ? "" : obj.toString();
}
