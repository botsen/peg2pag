
function getHTTPObject() { 
  if (typeof XMLHttpRequest != 'undefined') { 
    return new XMLHttpRequest(); 
  } 
  try { 
    return new ActiveXObject("Msxml2.XMLHTTP"); 
  } catch (e) { 
    try { 
      return new ActiveXObject("Microsoft.XMLHTTP"); 
    } catch (e) {} 
  } 
  return false; 
}
//--------------------------


function isEmptyString(str) {
  return str.replace(" ", "") == "";
}

function trimString(str) {
  if (str == '') return '';
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) != " ") {
      str = str.substring(i, 9999);
      break;
    }
  }

  for(var i = str.length - 1; i >=0; i--) {
    if(str.charAt(i) != " ") {
      str = str.substring(0, i+1);
      break;
    }
  }
  return str;
}

function isNull(value) {
   return (!value) || (typeof value == 'undefined') || (value === 'null');
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function toRad(deg) {
  return deg * Math.PI/180;
}

function parseBoolean(b) {
	if ((b === "false") || (b === false) || (b === 0)) {
		return false;
	} else {
		return new Boolean(b);
	}
}

function removeSpecialChars(s)
{
	var r=s.toLowerCase();
	r = r.replace(new RegExp(/[àáâãäå]/g),"a");
	r = r.replace(new RegExp(/æ/g),"ae");
	r = r.replace(new RegExp(/ç/g),"c");
	r = r.replace(new RegExp(/[èéêë]/g),"e");
	r = r.replace(new RegExp(/[ìíîï]/g),"i");
	r = r.replace(new RegExp(/ñ/g),"n");                
	r = r.replace(new RegExp(/[òóôõö]/g),"o");
	r = r.replace(new RegExp(//g),"oe");
	r = r.replace(new RegExp(/[ùúûü]/g),"u");
	r = r.replace(new RegExp(/[ýÿ]/g),"y");
	return r;
};

function isNullOrEmpty(value) {
  return (value === false) || (value == null) || (typeof value == 'undefined') || ((typeof value == 'string') && (value == '')); 
}

function getURLParam(name) {
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec(tmpURL);
	if(results == null)
		return "";
	else
		return unescape(results[1]);
}

function URLEncode(plaintext)
{
	var SAFECHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.!~*'()";
	var HEX = "0123456789ABCDEF";

	var encoded = "";
	for (var i = 0; i < plaintext.length; i++ ) {
          var ch = plaintext.charAt(i);
          if (ch == " ") {
            encoded += "+";				// x-www-urlencoded, rather than %20
          } else if (SAFECHARS.indexOf(ch) != -1) {
		    encoded += ch;
		} else {
		    var charCode = ch.charCodeAt(0);
			if (charCode > 255) {
			    alert( "Unicode Character '" 
                        + ch 
                        + "' cannot be encoded using standard URL encoding.\n" +
				          "(URL encoding only supports 8-bit characters.)\n" +
						  "A space (+) will be substituted." );
				encoded += "+";
			} else {
				encoded += "%";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
			}
		}
	} // for

	return encoded;
};

function URLDecode(encoded)
{
   // Replace + with ' '
   // Replace %xx with equivalent character
   // Put [ERROR] in output if %xx is invalid.
   var HEXCHARS = "0123456789ABCDEFabcdef"; 
   var plaintext = "";
   var i = 0;
   while (i < encoded.length) {
       var ch = encoded.charAt(i);
	   if (ch == "+") {
	       plaintext += " ";
		   i++;
	   } else if (ch == "%") {
			if (i < (encoded.length-2) 
					&& HEXCHARS.indexOf(encoded.charAt(i+1)) != -1 
					&& HEXCHARS.indexOf(encoded.charAt(i+2)) != -1 ) {
				plaintext += unescape( encoded.substr(i,3) );
				i += 3;
			} else {
				alert( 'Bad escape combination near ...' + encoded.substr(i) );
				plaintext += "%[ERROR]";
				i++;
			}
		} else {
		   plaintext += ch;
		   i++;
		}
	} // while
   return plaintext;
};

function callFlow(flowName, params) {  
	var code = "var p = new Array();\n";
	var isJava = false;
	try {
		var reducedName = 'window.' + window.parent.reduceVariable(flowName);
		var ruleFunction =  window.parent.eval.apply(window.parent, [reducedName]);
		isJava = (ruleFunction == undefined);
	} catch (ex) {
		isJava = true;
	}

	for(i = 0; i < params.length; i++) {
		var p = params[i];
		if(p instanceof Boolean) {
		  //
		} else if(typeof p == 'string') {
			//p = '"' + p + '"';
			p = p.replace(/\n/g, '\\n');
			if(p.indexOf('"') > 0) {
				p = "'" + p + "'";
			} else {
				p = '"' + p + '"';
			}
		} else if(p instanceof Date) {
			p = ' new Date(' + p.getTime() + ')';
		} else if(isNumber(p)) {
			//
		} else {
			p = '"' + p + '"';
		}
		code += 'p[' + i + '] = ' + p + ';\n';
	}

	if(isJava) {
		code += 'executeRuleFromJS("' + flowName + '", p)';
    } else {
		code += "var sysCode = d.WFRForm.sys.value;\n";
		code += "var formCode = d.WFRForm.formID.value;\n";
		code += 'executeJSRuleNoField(sysCode, formCode,"' + flowName + '", p, true);\n';
	}
	return window.parent.eval.apply(window.parent, [code]);
}

function L2SCore() {
}

L2SCore.prototype.processQueue = function (buffer) {
  	for(i = 0; i < buffer.queue.length; i++) {
		var queueItem = buffer.queue[i];
		var fParams = new Array();
		for(j = 0; j < queueItem.params.length; j++) {
			var p = queueItem.params[j];
			if(p instanceof Boolean) {
				//
			} else if(typeof p == 'string') {
				p = p.replace(/\n/g, '\\n');
				if(p.indexOf('"') > 0) {
					p = "'" + p + "'";
				} else {
					p = '"' + p + '"';
				}
			} else if(p instanceof Date) {
				p = ' new Date(' + p.getTime() + ')';
			} else {
				p = '"' + p + '"';
			}
			fParams.push(p);
		}
		var code = 'document.controller.' + queueItem.name + '(' + fParams.join(', ') + ');';
		eval(code);
	}
}