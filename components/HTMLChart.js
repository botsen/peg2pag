
var legendSummary = {
  1 : "left",
  2 : "right",
  3 : "top",
  4 : "bottom"
}

/**
 * M�todo construtor do HTMLChart. Respons�vel por criar o componente Gr�fico.
 * @param sys - Indica o c�digo do sistema.
 * @param formID - Indica o c�digo do formul�rio.
 * @param posX - Posi��o do componente na tela em rela��o ao eixo X.
 * @param posY - Posi��o do componente na tela em rela��o ao eixo Y.
 * @param width - Largura do componente.
 * @param heigth - ALtura do componente.
 * @param alt - hint/title da imagem do grafico.
 * @param value
 **/
function HTMLChart(sys, formID, code, posX, posY, width, height, alt, value) {
  this.create(sys, formID, code, posX, posY, width, height, '', value);
  this.report = false;
  this.alt = alt;
  this.viewMode = "Estender";
  this.url="";
  this.hasImage = true;
  this.legendSeries = [];
}

/**
 * Propriedades do Gr�fico.
 **/
HTMLChart.inherits(HTMLElementBase);
HTMLChart.prototype.name = 'HTMLChart';
HTMLChart.prototype.tabable = false;
HTMLChart.prototype.zindex = 2;

/**
 * Seta a Url da imagem gerada pra o Gr�fico.
 * @param url - endere�o da imagem gerada.
 **/
HTMLChart.prototype.setUrl = function(url){
  this.url = url;
  this.context.innerHTML = "";

  var actionClick = null;
  if (this.onclick) {
    actionClick = this.getAction('doOnClick');
  }

  this.img = new ImageObject().getImage(this.url, this.alt, actionClick, this.height, this.width);
  this.context.appendChild(this.img);
}


HTMLChart.prototype.setHint = function(hint) {
  this.callMethod(HTMLElementBase, "setHint", [hint]);

  if (this.img) {
    let init = this.img.hint ? false : true;
    if (this.img.getAttribute("data-original-title")) {
      this.img.setAttribute("data-original-title", hint.replace(/(?:\r\n|\r|\n)/g, '<br />'));
    } else {
      this.img.hint = hint;
      this.img.alt = hint;
      this.img.title = hint.replace(/(?:\r\n|\r|\n)/g, '<br />');
      this.img.setAttribute("data-toggle", "tooltip"); //Bootstrap
      this.img.setAttribute("data-html", "true"); //Bootstrap
      if (init) bootstrapInitTooltip(this.img);
    }
  }
};

/**
 * Respos�vel por criar o HTMLChart onde ser� renderizado o gr�fico.
 * @author Marcos
 **/
HTMLChart.prototype.designComponent = function() {
  this.div.className += ' fixed-height';
  this.divClass = this.div.className;

  var obj = this;

  // Importar o tema tisza.js
  //webrun.include("components/chart/theme/tisza.js");

  //Cria div do gr�fico
  this.table = document.createElement("div");
  this.table.className = "h-100 w-100";

  //Anexa a div do gr�fico ao contexto
  this.context.appendChild(this.table);

  //Inicia plotagem
  //this.myChart = echarts.init(this.table, 'tisza');
    this.myChart = echarts.init(this.table);

  //Processa s�ries
  this.processSeries();

  //Processa e obt�m o options
  this.option = this.processOption();

  //Define propriedades do gr�fico
  if (this.option && typeof this.option === "object") {
    this.myChart.setOption(this.option, true);
  }

  if(this.onclick){
    this.myChart.on('click', function(){
      var values = arguments[0];
      obj.onclick.apply(obj, [values.seriesName, values.name, values.value]);
    });
  }

  /*Adiciona evento de resize para cada componente independente, caso o elemento em quest�o n�o exista
  * o m�todo de resize vai charmar o resize de todos os elementos(HTMLChart) na aba corrente.
  */
  if (!this.resizeEventSet) {
    mainform.addEventListener("resize", function() {
      if (obj) chartResize(obj.div);
    }, false);
    this.resizeEventSet = true;
  }

  if (this.doc.tab) {
    // Adicionar callback na aba quando ela for exibida.
    this.doc.tab.addShownListener(function() {
      chartResize(obj.div);
    });
  }

  /*Torna o processo de resize ass�ncrono por conta dos formul�rios que s�o 
  * abertos em uma Moldura
  */
  setTimeout(chartResize, 1);
  
}

function chartResize(element) {
  let chartsTab = element ? [element] : d.t.getSelectedTab().div.querySelectorAll("[webrun-type='HTMLChart']");
  for (let i = 0; i < chartsTab.length; i++) {
    chart = $c(chartsTab[i].id);
    if (chart === undefined || chart === null) continue;
    chart.myChart.resize();
  }
  return false;
};

HTMLChart.prototype.doOnClick = function() {
  if (this.onclick) {
    this.onclick.call(this);
  }
}

HTMLChart.prototype.setVisible = function(v) {
  this.callMethod(HTMLElementBase, "setVisible", [v]);
  this.myChart.resize();
};

HTMLChart.prototype.getPermissionDescription = function() {
  if (!isNullable(this.permissionDescription)) {
    return this.permissionDescription;
  }
  return this.callMethod(HTMLElementBase, "getPermissionDescription");
}

/**
 * M�todo respons�vel por realizar o processamento das s�ries
 * @author Marcos
 */
HTMLChart.prototype.processSeries = function(){

  for (let index = 0; index < this.series.length; index++) {
    const element = this.series[index];

    element.color = element.randomColor ? null : element.color;
    element.type = element.type.replace("h", "");
    element.radius = ['40%', '60%'];
    //element.avoidLabelOverlap = false;
    element.itemStyle = {borderRadius: 5,
                         borderColor: '#fff',
                         borderWidth: 0};
	element.emphasis = {scale: true,
						scaleSize: 0,
						lineStyle: {width: 3}
						};

    if(element.type === 'area'){
      element.type = element.type.replace("area", "line");
      element.areaStyle = {};
    }

    if(element.disposition){
      element.stack = element.disposition == 2 ? element.type : '';
    }

    if(element.showBrands && !(element.type === 'pie')){
      var tempLabel = element.label.concat();
      element.label = {
        data : tempLabel,
        normal : {
          show: true,
         // position: 'inside',
          formatter: function(params) {
            return getLabelTextBrands(params, element);
          }
        }
      };
    }

    if(element.showLegend && !(element.type === 'pie')){
      this.legendSeries.push(element.name);
    }

    if(element.matriz){
      element.data = element.data.sort(function(a, b) {
        return parseFloat(a.value[0]) - parseFloat(b.value[0]);
      });
    }

    this.series[index] = element;
  }

}

/**
 * M�todo respons�vel por realizar o processamento do option
 * @author Marcos
 */
HTMLChart.prototype.processOption = function(){
  var option = null;
  var obj = this;
  var serie = this.series[0];

  if(serie.type === 'pie'){
    option = this.getOptionByType(serie.type);

    option.legend.data = serie.label;

    option.legend.formatter = function(name) {
      return getLabelTextLegend(name, serie, obj);
    }

    if(serie.largestSliceDistance && serie.data.length > 0){
      let i = Math.max.apply(Math, serie.data.map(function(o, i) { return i; }));
      serie.data[i].selected = true;
    }

    //Exibe marcas se necess�rio
    if(serie.showBrands){
      delete serie.label;

      //Formata��o das marcas
      serie.label = {};
      serie.label.formatter = function(params) {
        return getLabelTextBrands(params, serie);
      };
    }
  } else {
    option = this.getOptionByType('multi');

    //Define visibilidade da Grade
    option.yAxis.splitLine = {show : this.showGrid};
    option.xAxis.splitLine = {show : this.showGrid};

    //Define visibilidade das legendas das s�ries
    option.legend.data = this.legendSeries;

    /*Reverva espa�o para a renderiza��o da legenda quando a mesma � na esquerda 
    * ou direita do componente
    */
    option.grid.left = this.legendPosition == 1 && this.showLegend 
    && this.legendOrientation.toLowerCase() != 'horizontal' ? '15%' : option.grid.left;
    option.grid.right = this.legendPosition == 2 && this.showLegend 
    && this.legendOrientation.toLowerCase() != 'horizontal' ? '15%' : option.grid.right;
    option.grid.top = (this.legendPosition == 1 || this.legendPosition == 3) && this.showLegend 
    && this.legendOrientation.toLowerCase() == 'horizontal' ? '28%' : '16%';
    option.grid.bottom = (this.legendPosition == 4 && this.showLegend) ? '20%' : '10%';
  }

  //Posi��o da legenda e visibilidade
  option.legend[legendSummary[this.legendPosition]] = 5;
  option.legend.show = this.showLegend;
  option.legend.orient = this.legendOrientation ? this.legendOrientation.toLowerCase() : 'horizontal';
  option.legend.type = 'scroll';
  option.legend.top = this.legendPosition <= 3 ? '10%' : null;

  //Define propriedade do tooltip
  if(this.groupLegend){
    option.tooltip.trigger = serie.type === 'pie' ? 'item' : 'axis';
    option.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.9)';
	option.tooltip.borderColor = 'rgba(51, 51, 51, 1)';
    option.tooltip.textStyle = {color: 'rgba(255, 255, 255, 1)',
			                   fontWeight: "normal",
							   width: '100%'};
	option.tooltip.formatter = function(params) {
								var colorSpan = color => '<div><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span></div>';
								var serieDiv = serieName => '<div class="col-md"><span style="display:inline-block;">' + serieName + ': ' + '</span></div>';
								var valueDiv = value => '<div class="col-lx text-lx-right font-weight-bold"><span>' + value + '</span></div>';
								if(serie.type === 'pie') {
									var textTooltop = serie.name + '<br> <div class="container">';
									var labelLegend = params.value.toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision});
									var textTooltipItem = colorSpan(params.color) + serieDiv(params.name) + valueDiv(labelLegend);
									textTooltop += '<div class="row">' + textTooltipItem + '</div>';
								} else {
									var textTooltop = params[0].axisValue + '<br> <div class="container">';
									for (let indexObj = 0; indexObj < obj.series.length; indexObj++) {
										var textTooltipItem = colorSpan(params[indexObj].color) + serieDiv(params[indexObj].seriesName) + valueDiv(getLabelTextBrands(params[indexObj], obj.series[indexObj]));
										textTooltop += '<div class="row">' + textTooltipItem + '</div>';
									}
								}
								textTooltop = textTooltop + '</div>';
								return textTooltop;
								}
	if(serie.type !== 'pie') {
		option.tooltip.axisPointer.label.formatter = function (params) {
														return params.value.toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision});
													}
    }
  }
  
  if(!this.showTooltip)
    option.tooltip.show = false;

  //Define t�tulo do gr�fico
  option.title = {
    text: this.titulo,
    subtext: '',
    left: 'center'
  };

  this.series[0] = serie;

  if(!option.series)
    option.series = this.series;

  return option;
}

/**
 * M�todo respons�vel por realizar o processamento dos valores das marcas de acordo
 * com o que
 * foi definido nas s�ries
 * @param params par�metros recebidos do componente ECharts
 * @param serie s�rie a ser processada
 * @author Marcos
 */
function getLabelTextBrands(params, serie) {
  let data = serie.data;
  var name = params.name;
  var objSerie = serie;

  /***  Marks Style  ******
  LABEL                = 1;
  LABELPERCENT         = 2;
  LABELPERCENTTOTAL    = 3;
  LABELVALUE           = 4;
  LEGEND               = 5;
  PERCENT              = 6;
  PERCENTTOTAL         = 7;
  VALUE                = 8;
  XVALUE               = 9;
  XY                   = 10;
  *************************/

  var result  = data.find(function (x) {
    return x.name === name;
  }), valueX, valueY;
  if(serie.matriz){
    valueX = result.value[0];
    valueY = result.value[1]
  }else{
    valueX = serie.type === 'pie'
      ? data.findIndex(function (x) {
        return x.name === name;
      })
      : name;
    valueY = result.value;
  }
  
  //valueY = valueY.toFixed(serie.decimalPrecision);
  //valueY = parseFloat(valueY);
  //valueY = valueY.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  //valueY = valueY.toLocaleString('pt-br');
  valueY = valueY.toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision});

  if(objSerie.contentBrands == 1){ //Etiqueta
    return name;
  }else if(objSerie.contentBrands == 2){ //Etiqueta + Porcentagem
    return name + " - " + getPercentByData(data, name, serie);
  }else if(objSerie.contentBrands == 3){ //Etiqueta + Porcentagem + Total
    return name + " - " + getPercentByData(data, name, serie) + " - " +
    data.map(function (item) {
      return item.value;
    }).reduce(function (prev, next) {
      return prev + next;
    });
  }else if(objSerie.contentBrands == 4){ //Etiqueta + Valor
    return name + " - " + valueY;
  }else if(objSerie.contentBrands == 5){ //Legenda
    return data.findIndex(function (x) {
      return x.name === name;
    });
  }else if(objSerie.contentBrands == 6){ //Procentagem
    return getPercentByData(data, name, serie);
  }else if(objSerie.contentBrands == 7){ //Procentagem + Total
    return getPercentByData(data, name, serie) + " - " +
    data.map(function (item) {
      return item.value;
    }).reduce(function (prev, next) {
      return prev + next;
    });
  }else if(objSerie.contentBrands == 8){ //Valor
    return valueY;
  }else if(objSerie.contentBrands == 9){ //Valor Eixo X
    return valueX.toFixed(serie.decimalPrecision);
  }else if(objSerie.contentBrands == 10){ //Valor Eixo X + Valor Eixo Y
    return valueX.toFixed(serie.decimalPrecision) + " - " + valueY;
  }else{
    return name;
  }
};

/**
 * M�todo respons�vel por realizar o processamento dos valores da legenda de acordo
 * com o que foi definido nas no componente (Funciona apenas para gr�fico do tipo Pizza)
 * @param name nome da s�rie
 * @param serie s�rie a ser processada
 * @param obj objeto this
 * @author Marcos
 */
function getLabelTextLegend(name, serie, obj) {
  let data = serie.data, zero = {"value":0};

  /***  Marks Style  ******
  LABEL                = 1;
  LABELPERCENT         = 2;
  LABELPERCENTTOTAL    = 3;
  LABELVALUE           = 4;
  LEGEND               = 5;
  PERCENT              = 6;
  PERCENTTOTAL         = 7;
  VALUE                = 8;
  XVALUE               = 9;
  XY                   = 10;
  *************************/

  var valueX = data.findIndex(function (item) {
    return item.name === name;
  });

  //zero.value = zero.value.toFixed(serie.decimalPrecision);
  //zero.value = parseFloat(zero.value);
  //zero.value = zero.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  //zero.value = zero.value.toLocaleString('pt-br');
  zero.value = zero.value.toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision});
  
  //result[0].value = result[0].value.toFixed(serie.decimalPrecision);
  //result[0].value = parseFloat(result[0].value);
  //result[0].value = result[0].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  //result[0].value = result[0].value.toLocaleString('pt-br');
  if(serie.matriz){
   result[0].value = result[0].value.toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision});
  }
  
  if(obj.styleTextLegend == 1){ //Procentagem + Etiqueta
    return getPercentByData(data, name, serie) + " - " + name;
  }else if(obj.styleTextLegend == 2){ //Valor + Etiqueta
    var result = data.filter(function (obj) {
      return obj.name === name ? obj.value : null
    });
    return result.length > 0 
      ? result[0].value + " - " + name 
        : zero.value + " - " + name;
  }else if(obj.styleTextLegend == 3){ //Procentagem
    return getPercentByData(data, name, serie);
  }else if(obj.styleTextLegend == 4){ //Etiqueta
    return name;
  }else if(obj.styleTextLegend == 5){ //Etiqueta + Porcentagem
    return name + " - " + getPercentByData(data, name, serie);
  }else if(obj.styleTextLegend == 6){ //Etiqueta + Valor
    var result = data.filter(function (obj) {
      return obj.name === name ? obj.value : null
    });
    return name + " - " + (result.length > 0 
      ? result[0].value 
        : zero.value);
  }else if(obj.styleTextLegend == 7){ //Valor
    var result = data.filter(function (obj) {
      return obj.name === name ? obj.value : null
    });
    return result.length > 0 
      ? result[0].value
        : zero.value;
  }else if(obj.styleTextLegend == 8){ //Valor Eixo X + Porcentagem

    return valueX + " - " + getPercentByData(data, name, serie);
  }else if(obj.styleTextLegend == 9){ //Valor Eixo X + Valor
    var result = data.filter(function (obj) {
      return obj.name === name ? obj.value : null;
    });
    return valueX + " - " + (result.length > 0 
      ? result[0].value
        : zero.value);
  }else if(obj.styleTextLegend == 10){ //Valor Eixo X
    return valueX;
  }else{
    return name;
  }
};


/**
 * M�todo respons�vel por obter o c�lculo de porcentagem baseado no atributo 'data'
 * recebido como par�metro
 * @param data dados
 * @param name nome da s�rie
 * @param serie objeto s�rie
 * @author Marcos
 */
function getPercentByData(data, name, serie){
  var total = 0;
  var target;

  for (var i = 0, l = data.length; i < l; i++) {
    total += serie.matriz ? data[i].value[1] : data[i].value;
    if (data[i].name == name) {
      target = serie.matriz ? data[i].value[1] : data[i].value;
    }
  }
  
  if(total == 0) total = 1
  
  var arr = [
    ((target/total)*100).toLocaleString('pt-br', {minimumFractionDigits: serie.decimalPrecision})+'%'	
  ]
  return arr.join('\n')
}

/**
 * Obter m�todo de formata��o das Axis do gr�fico
 * @author Marcos
 */
HTMLChart.prototype.getAxisLabelFormat = function(){
  var element = this.series[0];
  if(element.matriz){
    return {
      formatter: function(value){
        var result = element.data.find(function (objData) {
          return objData.value[0] === value;
        });
        return result && result.name ? result.name : "" ;
      }
    }
  }else {
    return {}
  }
}

/**
 * M�todo que retorna a XAxis do gr�fico
 * @author Marcos
 */
HTMLChart.prototype.getXAxis = function(){
  var element = this.series[0];
  var xAxis = {};
  if(element){
    if(element.horizontal){
      xAxis = {
        type : 'value',
      };
    } else{
      xAxis = {
        type : 'category',
		boundaryGap: true,
        data : element.label.data ? element.label.data : element.label,
        axisLabel: this.getAxisLabelFormat()
      };
    }
  }

  if(element.matriz)
    delete xAxis.data;

  return xAxis;
}

/**
 * M�todo que retorna a YAxis do gr�fico
 * @author Marcos
 */
HTMLChart.prototype.getYAxis = function(){
  var element = this.series[0];
  var yAxis;
  if(element){
    if(element.horizontal){
      yAxis = {
        type : 'category',
        data : element.label.data ? element.label.data : element.label,
        axisLabel: this.getAxisLabelFormat()
      };
    } else{
      yAxis = {
        type : 'value',
		axisLabel: {
			formatter: function (value, index) {
				return value.toLocaleString('pt-br', {minimumFractionDigits: element.decimalPrecision});
				}
		}
      };
    }
  }

  if(element.matriz)
    delete yAxis.data;

  return yAxis;
}

/**
 * M�todo que retorna o option do gr�fico de acordo com o tipo
 * @param type {multi, pie}
 * @author Marcos
 */
HTMLChart.prototype.getOptionByType = function(type){
  if(type === 'multi')
    return {
     // theme: 'light',
      tooltip : {  //TODO (Criar propriedade para visilidade e personaliza��o do tooltip)
        axisPointer : {
           type : 'cross', //'shadow'
		   label: {}
        }
	  },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        selected: { //Propriedade que define se a s�rie vai ser vis�vel(momento de cria��o)
          //'S�rie 1' : false
        }
      },
      xAxis : this.getXAxis(),
      yAxis : this.getYAxis()
    };

    if(type === 'pie')
      return {
     //   theme: 'dark',
        tooltip : {  //TODO (Criar propriedade para visilidade e personaliza��o do tooltip)
     //     axisPointer : {
     //       type : 'shadow'
     //     }
        },
        legend: {
          //type: 'scroll',
          //orient: 'vertical',
          //right: 10,
          //top: 20,
          //bottom: 20
        }
      };
}

HTMLChart.prototype.refreshChart = function(){
  this.processSeries();

  //Processa e obt�m o options
  this.option = this.processOption();

  //Define propriedades do gr�fico
  if (this.option && typeof this.option === "object") {
    this.myChart.setOption(this.option, true);
  }
}