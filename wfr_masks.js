function _MaskAPI() {
  this.version = "0.4a";
  this.instances = 0;
  this.objects = {};
}

MaskAPI = new _MaskAPI();

function Mask(m, t) { 
  this.mask = m;
  this.type = (typeof t == "string") ? t : "string";
  this.error = [];
  this.errorCodes = [];
  this.value = "";
  this.strippedValue = "";
  this.allowPartial = false;
  this.id = MaskAPI.instances++;
  this.ref = "MaskAPI.objects['" + this.id + "']";
  MaskAPI.objects[this.id] = this;
}

// define the attach(oElement) function
Mask.prototype.attach = function(o) {
  $addEvent(o, "onkeydown", "return " + this.ref + ".isAllowKeyPress(event, this);", true);
  if (!(IE && o.onchange != null))
    $addEvent(o, "onkeyup", "return " + this.ref + ".getKeyPress(event, this);", true);
  $addEvent(o, "onblur", "this.value = " + this.ref + ".format(this.value);", true);
}

Mask.prototype.isAllowKeyPress = function(e, o) {
  if (this.type != "string") return true;
  var xe = new qEvent(e);
  // O IE não estava permitindo alterar o valor quando todo o texto havia sido selecionado e o tamanho máximo
  // de edição tinha sido atingido
  if (((xe.keyCode > 47) /*&& (o.value.length >= this.mask.length)*/ ) && !xe.ctrlKey) return false;
  return true;
}

Mask.prototype.getOnblur = function(e, o, c) {
  if (this.type == "number") {
    // Máscaras tipo $, $3, $4...
    if (/^\$\d*$/.test(this.mask)) {
      this.value = currencyFormat(o, 21, e, 2, this.mask);
      o.value = this.value;
      c.value = this.value;
    } else {
      this.value = this.setNumber(o.value);
      o.value = this.value;
      c.value = this.value;
    }
  } else {
    switch (this.mask) {
      case "U>": {
        this.value = o.value.toUpperCase();
        o.style.textTransform = 'uppercase';
        break;
      } case "l>": {
        this.value = o.value.toLowerCase();
        o.style.textTransform = 'lowercase';
        break;
      } case "$": {
        this.value = currencyFormat(o, 21, e, 2, this.mask);
        o.value = this.value;
      }
    }
  }
}

Mask.prototype.getKeyPress = function(e, o, _u, component) {
  this.allowPartial = true;
  var xe = new qEvent(e);
  if ((xe.keyCode > 47) || (_u == true) || (xe.keyCode == 8 || xe.keyCode == 46)) {
    var v = o.value, d;
    if (xe.keyCode == 8 || xe.keyCode == 46) d = true;
    else d = false
    if (this.type == "number") {
      if (/^\$\d*$/.test(this.mask)) this.value = currencyFormat(o, 21, e, 2, this.mask);
      else this.value = this.setNumber(v, d);
    } else if (this.type == "date") this.value = this.setDateKeyPress(v, d);
    else if (this.mask == "IP") this.value = formatIP(o);
    else if (this.mask == "SP") this.value = formatNewTel(o);
    else if (this.mask == "U>") o.style.textTransform = 'uppercase';
    else if (this.mask == "l>") o.style.textTransform = 'lowercase';
    else if (component && component.canCheckRegularExpression && !isNullable(this.regularExpression)) {
      if (component.setValidatedData)
        component.setValidatedData(testRegularExpression(v, this.regularExpression));
      this.allowPartial = false;
      return true;
    } else {
      if (/^\$\d*$/.test(this.mask)) {
        this.value = currencyFormat(o, 21, e, 2, this.mask);
      } else {
        this.value = this.setGeneric(v, d);
      }
    }
    if (this.mask != "U>" && this.mask != "l>") {
      o.value = this.value;
    }
  }

  this.allowPartial = false;
  return true;
}

Mask.prototype.format = function(s, o) {
  if (this.type == "number") {
    if (/^\$\d*$/.test(this.mask)) this.value = currencyFormat(o, 21, "", 2, this.mask);
    else this.value = this.setNumber(s);
  } else if (this.type == "date") this.value = this.setDate(s);
  else {
    if (/^\$\d*$/.test(this.mask)) {
      this.value = currencyFormat(o, 21, "", 2, this.mask);
    } else {
      this.value = this.setGeneric(s);
    }
  }

  return this.value;
}

Mask.prototype.throwError = function(c, e, v) {
  this.error[this.error.length] = e;
  this.errorCodes[this.errorCodes.length] = c;
  if (typeof v == "string") return v;
  return true;
}

Mask.prototype.setGeneric = function(_v, _d) {
  var v = _v, m = this.mask, mf = "";
  var r = "xU#*lS", rt = [], nv = "", t, x, a = [], j = 0, index = 0;
  rx = { "x": "A-Za-z", "U": "A-Z�?-�?a-zà-ú", "S": "A-Z�?-�?a-zà-ú0-9", "#": "0-9", "*": "A-Za-z0-9", "l": "A-Z�?-�?a-zà-ú" };
  var ry = { "x": "A-Za-z�?-ú", "*": "A-Za-z�?-ú0-9", "c": " .,;:%()'{}|?&<>!{}*^_" };

  // Strip out invalid characters
  if (this.mask && this.mask.length > 0 && this.mask.charAt(0) != 'U' && this.mask.charAt(0) != "l") {
    v = v.replace(new RegExp("[^" + rx["*"] + "]", "gi"), "");
  }

  if ((_d == true) && (v.length == this.strippedValue.length)) v = v.substring(0, v.length - 1);
  this.strippedValue = v;
  var b = [];
  for (var i = 0; i < m.length; i++) {
    // Grab the current character
    x = m.charAt(i);

    // Check to see if current character is a mask, escape commands are not a mask character
    t = (r.indexOf(x) > -1);

    // If the current character is an escape command, then grab the next character
    if (x == "!") x = m.charAt(i++);

    // Build a regex to test against
    if ((t && !this.allowPartial) || (t && this.allowPartial && (rt.length < v.length))) rt[rt.length] = "[" + rx[x] + "]";

    // Build mask definition table
    a[a.length] = { "chr": x, "mask": t };
  }

  var hasOneValidChar = false;

  // If the regex fails, return an error
  if (!this.allowPartial && !(new RegExp(rt.join(""))).test(v)) return this.throwError(1, "O valor \"" + _v + "\" deve estar no formato " + this.mask + ".", _v);

  // Loop through the mask definition, and build the formatted string
  else if ((this.allowPartial && (v.length > 0)) || !this.allowPartial) {
    for (i = 0; i < a.length; i++) {
      if (a[i].mask) {
        while (v.length > 0 && !(new RegExp(rt[j])).test(v.charAt(j))) v = (v.length == 1) ? "" : v.substring(1);
        if (v.length > 0) {
          nv += v.charAt(j);
          hasOneValidChar = true;
        }
        j++;
        if (a[i].chr == "U") nv = nv.setCharAtUpper(nv.length - 1, nv);
        if (a[i].chr == "S") nv = nv.setCharAtUpper(nv.length - 1, nv);
        if (a[i].chr == "l") nv = nv.setCharAtLower(nv.length - 1, nv);
      } else nv += a[i].chr;
      if (this.allowPartial && (j > v.length)) break;

    }
  }

  if (this.allowPartial && !hasOneValidChar) nv = "";
  if (this.allowPartial) {
    if (nv.length < a.length) this.nextValidChar = rx[a[nv.length].chr];
    else this.nextValidChar = null;
  }

  return nv;
}

String.prototype.setCharAtUpper = function(index, c) {
  if (index > this.length - 1) return c;
  return this.substr(0, index) + this.substr(index, 1).toUpperCase() + this.substr(index + 1);
}

String.prototype.setCharAtLower = function(index, c) {
  if (index > this.length - 1) return c;
  return this.substr(0, index) + this.substr(index, 1).toLowerCase() + this.substr(index + 1);
}

Mask.prototype.setNumber = function(_v, _d) {
  var decimalSeparator;
  try {
    decimalSeparator = DECIMAL_POINT;
  } catch (e) {
    decimalSeparator = parent.$mainform().DECIMAL_POINT;
  }

  var groupingSeparator;
  try {
    groupingSeparator = GROUPING_POINT;
  } catch (e) {
    groupingSeparator = parent.$mainform().GROUPING_POINT;
  }

  // remove not allowed characters
  var v = String(_v).replace(new RegExp(("[^\\d\\" + decimalSeparator + "-]*"), "g"), ""),
    m = this.mask;
  if (v.length > 1) {
    var isNegative = /^-/.test(v);
    // remove the character "-" from the end of the text
    v = v.replace(/-/g, "");
    // if the number was negative, it maintains negative
    if (isNegative) {
      if (v.length == 0) {
        v = "-";
      } else {
        v = "-" + v;
      }
    }
  }

  // remove all characters if the first one is a decimal point and any character before the decimal point, except for numbers
  v = v.replace(new RegExp("^\\" + decimalSeparator + ".*"), "").replace(new RegExp(("[^\\d]+\\" + decimalSeparator), "g"), "");

  // make sure there's only one decimal point
  v = v.replace(new RegExp("\\" + decimalSeparator), "d").replace(new RegExp(("\\" + decimalSeparator), "g"), "").replace(/d/, decimalSeparator);

  // check to see if an invalid mask operation has been entered
  if (!/^[\$]?((\$?[\+-]?([0#]{1,3},)?[0#]*(\.[0#]*)?)|([\+-]?\([\+-]?([0#]{1,3},)?[0#]*(\.[0#]*)?\)))$/.test(m))
    return this.throwError(1, "Uma máscara inválida foi definida pelo construtor.", _v);

  if ((_d == true) && (v.length == this.strippedValue.length)) v = v.substring(0, v.length - 1);

  if (this.allowPartial && (v.replace(/[^0-9]/, "").length == 0)) return v;
  this.strippedValue = v;

  if (v.length == 0) v = NaN;

  // Meio para contornar o fato de o objeto Number não aceitar -0.
  var onlyNumbersValue = v.toString().replace(/[^0-9]/, "");
  var onlyZeros = /0+/.test(onlyNumbersValue);

  var isNegative = /^-/.test(v);
  if (!onlyZeros) {
    var vn;
    try { vn = Number(v.replace(new RegExp("\\" + decimalSeparator), '.')); } catch (e) {}
    if (isNaN(vn)) return this.throwError(2, "O valor escolhido não é um número.", "");
    isNegative = (vn != 0 && Math.abs(vn) * -1 == vn);
  }

  // if no mask, stop processing
  if (m.length == 0) return v;

  // get the value before the decimal point
  var vi = ((v.indexOf(decimalSeparator) > -1) ? v.split(decimalSeparator)[0] : v);
  vi = vi.replace("-", "");

  // get the value after the decimal point
  var vd = (v.indexOf(decimalSeparator) > -1) ? v.split(decimalSeparator)[1] : "";
  var _vd = vd;

  // check for masking operations
  var show = {
    "$": /^[\$]/.test(m),
    "(": (isNegative && (m.indexOf("(") > -1)),
    "+": ((m.indexOf("+") != -1) && !isNegative)
  }
  show["-"] = (isNegative && (!show["("] || (m.indexOf("-") != -1)));

  // replace all non-place holders from the mask
  m = m.replace(/[^#0.,]*/gi, "");

  /*
    make sure there are the correct number of decimal places
  */
  // get number of digits after decimal point in mask
  var dm = (m.indexOf(".") > -1) ? m.split(".")[1] : "";
  if (dm.length == 0) {
    //vi = String(Math.round(Number(vi)));
    vd = "";
  } else {
    // find the last zero, which indicates the minimum number
    // of decimal places to show
    var md = dm.lastIndexOf("0") + 1;
    // if the number of decimal places is greater than the mask, then round off
    if (vd.length > dm.length) vd = String(Math.round(Number(vd.substring(0, dm.length + 1)) / 10));
    // otherwise, pad the string w/the required zeros
    else
      while (vd.length < md) vd += "0";
  }

  /*
    pad the int with any necessary zeros
  */
  // get number of digits before decimal point in mask
  var im = (m.indexOf(".") > -1) ? m.split(".")[0] : m;
  im = im.replace(/[^0#]+/gi, "");
  // find the first zero, which indicates the minimum length
  // that the value must be padded w/zeros
  var mv = im.indexOf("0") + 1;
  // if there is a zero found, make sure it's padded
  if (mv > 0) {
    mv = im.length - mv + 1;
    while (vi.length < mv) vi = "0" + vi;
  }

  /*
    check to see if we need commas in the thousands place holder
  */
  if (/[#0]+,[#0]{3}/.test(m)) {
    // add the commas as the place holder
    var x = [],
      i = 0,
      n = Number(vi);
    while (n > 999) {
      x[i] = "00" + String(n % 1000);
      x[i] = x[i].substring(x[i].length - 3);
      n = Math.floor(n / 1000);
      i++;
    }
    x[i] = String(n % 1000);
    vi = x.reverse().join(groupingSeparator);
  }

  /*
    combine the new value together
  */
  if ((vd.length > 0 && !this.allowPartial) || ((dm.length > 0) && this.allowPartial && (v.indexOf(decimalSeparator) > -1) && (_vd.length >= vd.length))) {
    v = (vi + decimalSeparator + vd);
  } else if ((dm.length > 0) && this.allowPartial && (v.indexOf(decimalSeparator) > -1) && (_vd.length < vd.length)) {
    v = (vi + decimalSeparator + _vd);
  } else {
    v = vi;
  }

  if (show["$"]) v = this.mask.replace(/(^[\$])(.+)/gi, "$") + v;
  if (show["+"]) v = "+" + v;
  if (show["-"]) v = "-" + v;
  if (show["("]) v = "(" + v + ")";

  return v;
}

Mask.prototype.setDate = function(_v) {
  var v = _v,
    m = this.mask;
  var a, e, mm, dd, yy, x, s;

  // split mask into array, to see position of each day, month & year
  a = m.split(/[^mdy]+/);
  // split mask into array, to get delimiters
  s = m.split(/[mdy]+/);
  // convert the string into an array in which digits are together
  e = v.split(/[^0-9]/);

  if (s[0].length == 0) s.splice(0, 1);

  for (var i = 0; i < a.length; i++) {
    x = a[i].charAt(0).toLowerCase();
    if (x == "m") mm = parseInt(e[i], 10) - 1;
    else if (x == "d") dd = parseInt(e[i], 10);
    else if (x == "y") yy = parseInt(e[i], 10);
  }

  // if year is abbreviated, guess at the year
  if (String(yy).length < 3) {
    yy = 2000 + yy;
    if ((new Date()).getFullYear() + 20 < yy) yy = yy - 100;
  }

  // create date object
  var d = new Date(yy, mm, dd);

  if (d.getDate() != dd) return this.throwError(1, "Um dia inválido foi escolhido.", _v);
  else if (d.getMonth() != mm) return this.throwError(2, "Um mês inválido foi escolhido.", _v);

  var nv = "";

  for (i = 0; i < a.length; i++) {
    x = a[i].charAt(0).toLowerCase();
    if (x == "m") {
      mm++;
      if (a[i].length == 2) {
        mm = "0" + mm;
        mm = mm.substring(mm.length - 2);
      }
      nv += mm;
    } else if (x == "d") {
      if (a[i].length == 2) {
        dd = "0" + dd;
        dd = dd.substring(dd.length - 2);
      }
      nv += dd;
    } else if (x == "y") {
      if (a[i].length == 2) nv += d.getYear();
      else nv += d.getFullYear();
    }

    if (i < a.length - 1) nv += s[i];
  }

  return nv;
}

Mask.prototype.setDateKeyPress = function(_v, _d) {
  var v = _v,
    m = this.mask,
    k = v.charAt(v.length - 1);
  var a, e, c, ml, vl, mm = "",
    dd = "",
    yy = "",
    x, p, z;

  if (_d == true) {
    while ((/[^0-9]/gi).test(v.charAt(v.length - 1))) v = v.substring(0, v.length - 1);
    if ((/[^0-9]/gi).test(this.strippedValue.charAt(this.strippedValue.length - 1))) v = v.substring(0, v.length - 1);
    if (v.length == 0) return "";
  }

  // split mask into array, to see position of each day, month & year
  a = m.split(/[^mdy]/);
  // split mask into array, to get delimiters
  s = m.split(/[mdy]+/);
  // mozilla wants to add an empty array element which needs removed
  if (s[0].length == 0) s.splice(0, 1);
  // convert the string into an array in which digits are together
  v = v.replace(/[^\d\/]/g, "");
  e = v.split(/[^0-9]/);
  // position in mask
  p = (e.length > 0) ? e.length - 1 : 0;
  // determine what mask value the user is currently entering
  c = a[p].charAt(0);
  // determine the length of the current mask value
  ml = a[p].length;

  for (var i = 0; i < e.length; i++) {
    x = a[i].charAt(0).toLowerCase();
    var vv = e[i];
    if (String(e[i]).length != "" && isNumeric(e[i]))
      vv = parseInt(e[i], 10);
    else {
      return v;
    }
    if (x == "m") mm = String(vv).length > 0 && isNumeric(vv) ? vv - 1 : "";
    else if (x == "d") dd = vv;
    else if (x == "y") yy = vv;
  }

  var nv = "";
  var j = 0;
  for (i = 0; i < e.length; i++) {
    x = a[i].charAt(0).toLowerCase();

    if (x == "m") {
      z = ((/[^0-9]/).test(k) && c == "m");
      mm++;
      if ((e[i].length == 2 && mm < 10) || (a[i].length == 2 && c != "m") || (mm > 1 && c == "m") || (z && a[i].length == 2)) {
        mm = "0" + mm;
        mm = mm.substring(mm.length - 2);
      }
      vl = String(mm).length;
      ml = 2;
      if (parseInt(mm) > 12)
        mm = 12;

      nv += mm;
    } else if (x == "d") {
      z = ((/[^0-9]/).test(k) && c == "d");
      if ((e[i].length == 2 && dd < 10) || (a[i].length == 2 && c != "d") || (dd > 3 && c == "d") || (z && a[i].length == 2)) {
        dd = "0" + dd;
        dd = dd.substring(dd.length - 2);
      }
      vl = String(dd).length;
      ml = 2;
      if (parseInt(dd) > 31)
        dd = 31;

      nv += dd;
    } else if (x == "y") {
      z = ((/[^0-9]/).test(k) && c == "y");
      if (c == "y") yy = String(yy);
      else {
        if (a[i].length == 2) yy = d.getYear();
        else yy = d.getFullYear();
      }
      if ((e[i].length == 2 && yy < 10) || (a[i].length == 2 && c != "y") || (z && a[i].length == 2)) {
        yy = "0" + yy;
        yy = yy.substring(yy.length - 2);
      }
      ml = a[i].length;
      vl = String(yy).length;
      nv += yy;
    }

    if (((ml == vl || z) && (x == c) && (i < s.length)) || (i < s.length && x != c)) nv += s[i];
  }

  if (nv.length > m.length) nv = nv.substring(0, m.length);

  this.strippedValue = (nv == "NaN") ? "" : nv;

  return this.strippedValue;
}

function qEvent(e) {
  // routine for NS, Opera, etc DOM browsers
  // Para o IE estava entrando nessa condição e não podia
  if (window.Event && false) {
    var isKeyPress = (e.type.substring(0, 3) == "key");

    this.keyCode = (isKeyPress) ? parseInt(e.which, 10) : 0;
    this.button = (!isKeyPress) ? parseInt(e.which, 10) : 0;
    this.srcElement = e.target;
    this.type = e.type;
    this.x = e.pageX;
    this.y = e.pageY;
    this.screenX = e.screenX;
    this.screenY = e.screenY;
    if (document.layers) {
      this.altKey = ((e.modifiers & Event.ALT_MASK) > 0);
      this.ctrlKey = ((e.modifiers & Event.CONTROL_MASK) > 0);
      this.shiftKey = ((e.modifiers & Event.SHIFT_MASK) > 0);
      this.keyCode = this.translateKeyCode(this.keyCode);
    } else {
      this.altKey = e.altKey;
      this.ctrlKey = e.ctrlKey;
      this.shiftKey = e.shiftKey;
    }
    // routine for Internet Explorer DOM browsers
  } else {
    e = e || window.event;
    this.keyCode = parseInt(e.keyCode, 10);
    this.button = e.button;
    this.srcElement = e.srcElement;
    this.type = e.type;
    if (document.all) {
      this.x = e.clientX + document.body.scrollLeft;
      this.y = e.clientY + document.body.scrollTop;
    } else {
      this.x = e.clientX;
      this.y = e.clientY;
    }
    this.screenX = e.screenX;
    this.screenY = e.screenY;
    this.altKey = e.altKey;
    this.ctrlKey = e.ctrlKey;
    this.shiftKey = e.shiftKey;
  }
  //        alert(String.fromCharCode(this.keyCode))

  //        if( this.button == 0 ){
  this.setKeyPressed(this.keyCode);
  this.keyChar = String.fromCharCode(this.keyCode);
  //        }
}

// this method will try to remap the keycodes so the keycode value
// returned will be consistent. this doesn't work for all cases,
// since some browsers don't always return a unique value for a
// key press.
qEvent.prototype.translateKeyCode = function(i) {
  var l = {};
  // remap NS4 keycodes to IE/W3C keycodes
  if (!!document.layers) {
    if (this.keyCode > 96 && this.keyCode < 123) return this.keyCode - 32;
    l = {
      96: 192,
      126: 192,
      33: 49,
      64: 50,
      35: 51,
      36: 52,
      37: 53,
      94: 54,
      38: 55,
      42: 56,
      40: 57,
      41: 48,
      92: 220,
      124: 220,
      125: 221,
      93: 221,
      91: 219,
      123: 219,
      39: 222,
      34: 222,
      47: 191,
      63: 191,
      46: 190,
      62: 190,
      44: 188,
      60: 188,
      45: 189,
      95: 189,
      43: 187,
      61: 187,
      59: 186,
      58: 186,
      "null": null
    }
  }
  return (!!l[i]) ? l[i] : i;
}

// try to determine the actual value of the key pressed
qEvent.prototype.setKP = function(i, s) {
  this.keyPressedCode = i;
  this.keyNonChar = (typeof s == "string");
  this.keyPressed = (this.keyNonChar) ? s : String.fromCharCode(i);
  this.isNumeric = (parseInt(this.keyPressed, 10) == this.keyPressed);
  this.isAlpha = ((this.keyCode > 64 && this.keyCode < 91) && !this.altKey && !this.ctrlKey);
  return true;
}

// try to determine the actual value of the key pressed
qEvent.prototype.setKeyPressed = function(i) {
  var b = this.shiftKey;
  if (!b && (i > 64 && i < 91)) return this.setKP(i + 32);
  if (i > 95 && i < 106) return this.setKP(i - 48);

  switch (i) {
    case 49:
    case 51:
    case 52:
    case 53:
      if (b) i = i - 16;
      break;
    case 50:
      if (b) i = 64;
      break;
    case 54:
      if (b) i = 94;
      break;
    case 55:
      if (b) i = 38;
      break;
    case 56:
      if (b) i = 42;
      break;
    case 57:
      if (b) i = 40;
      break;
    case 48:
      if (b) i = 41;
      break;
    case 192:
      if (b) i = 126;
      else i = 96;
      break;
    case 189:
      if (b) i = 95;
      else i = 45;
      break;
    case 187:
      if (b) i = 43;
      else i = 61;
      break;
    case 220:
      if (b) i = 124;
      else i = 92;
      break;
    case 221:
      if (b) i = 125;
      else i = 93;
      break;
    case 219:
      if (b) i = 123;
      else i = 91;
      break;
    case 222:
      if (b) i = 34;
      else i = 39;
      break;
    case 186:
      if (b) i = 58;
      else i = 59;
      break;
    case 191:
      if (b) i = 63;
      else i = 47;
      break;
    case 190:
      if (b) i = 62;
      else i = 46;
      break;
    case 188:
      if (b) i = 60;
      else i = 44;
      break;

    case 106:
    case 57379:
      i = 42;
      break;
    case 107:
    case 57380:
      i = 43;
      break;
    case 109:
    case 57381:
      i = 45;
      break;
    case 110:
      i = 46;
      break;
    case 111:
    case 57378:
      i = 47;
      break;

    case 8:
      return this.setKP(i, "[backspace]");
    case 9:
      return this.setKP(i, "[tab]");
    case 13:
      return this.setKP(i, "[enter]");
    case 16:
    case 57389:
      return this.setKP(i, "[shift]");
    case 17:
    case 57390:
      return this.setKP(i, "[ctrl]");
    case 18:
    case 57388:
      return this.setKP(i, "[alt]");
    case 19:
    case 57402:
      return this.setKP(i, "[break]");
    case 20:
      return this.setKP(i, "[capslock]");
    case 32:
      return this.setKP(i, "[space]");
    case 91:
      return this.setKP(i, "[windows]");
    case 93:
      return this.setKP(i, "[properties]");

    case 33:
    case 57371:
      return this.setKP(i * -1, "[pgup]");
    case 34:
    case 57372:
      return this.setKP(i * -1, "[pgdown]");
    case 35:
    case 57370:
      return this.setKP(i * -1, "[end]");
    case 36:
    case 57369:
      return this.setKP(i * -1, "[home]");
    case 37:
    case 57375:
      return this.setKP(i * -1, "[left]");
    case 38:
    case 57373:
      return this.setKP(i * -1, "[up]");
    case 39:
    case 57376:
      return this.setKP(i * -1, "[right]");
    case 40:
    case 57374:
      return this.setKP(i * -1, "[down]");
    case 45:
    case 57382:
      return this.setKP(i * -1, "[insert]");
    case 46:
    case 57383:
      return this.setKP(i * -1, "[delete]");
    case 144:
    case 57400:
      return this.setKP(i * -1, "[numlock]");
  }

  if (i > 111 && i < 124) return this.setKP(i * -1, "[f" + (i - 111) + "]");

  return this.setKP(i);
}

// define the addEvent(oElement, sEvent, sCmd, bAppend) function
function $addEvent(o, _e, c, _b) {
  var e = _e.toLowerCase(),
    b = (typeof _b == "boolean") ? _b : true,
    x = (o[e]) ? o[e].toString() : "";
  // strip out the body of the function
  x = x.substring(x.indexOf("{") + 1, x.lastIndexOf("}"));
  x = ((b) ? (x + c) : (c + x)) + "\n";
  return o[e] = (!!window.Event) ? new Function("event", x) : new Function(x);

}

function isDateTime(v, format) {
  if (v != null) v = trim(v);
  if (v == null || v == '') return true;
  if (format) return Date.isValid(v, format);
  else return Date.isValid(v, DATE_PATTERN) || Date.isValid(v, (DATE_PATTERN + ' H:m:s')) || Date.isValid(v, (DATE_PATTERN + ' H:m')) || Date.isValid(v, (DATE_PATTERN + ' H'));
}

function isTime(v, format) {
  if (v != null) v = trim(v);
  if (v == null || v == '') return true;
  if (format) return Date.isValid(v, format);
  else return Date.isValid(v, 'H:m') || Date.isValid(v, 'H:m:s');
}

function isNumeric(sText) {

  if (typeof sText == 'number')
    return true;

  sText = "" + sText;

  var ValidChars = "0123456789.";
  var IsNumber = true;
  var Char;

  for (i = 0; i < sText.length && IsNumber == true; i++) {
    Char = sText.charAt(i);
    if (ValidChars.indexOf(Char) == -1) {
      IsNumber = false;
    }
  }
  return IsNumber;
}

function Limpar(valor, validos) {
  // retira caracteres invalidos da string
  var result = "";
  var c;
  for (var i = 0; i < valor.length; i++) {
    c = valor.charAt(i);
    if (validos.indexOf(c) >= 0) {
      result += c;
    }
  }
  return result;
}

function currencyFormat(element, maxlength, evt, decimal, mask) {
  var decimalSeparator;
  try {
    decimalSeparator = DECIMAL_POINT;
  } catch (e) {
    decimalSeparator = parent.$mainform().DECIMAL_POINT;
  }

  var groupingSeparator;
  try {
    groupingSeparator = GROUPING_POINT;
  } catch (e) {
    groupingSeparator = parent.$mainform().GROUPING_POINT;
  }

  var isNegative = /^-/.test(element.value);
  var keyCode = evt.keyCode || evt.which;

  var decimalQtt = 2;
  var regexp = new RegExp("^\\$(\\d*)$");
  var decimals = regexp.exec(mask);
  if (decimals.length > 1) {
    decimalQtt = decimals[1];
  }
  if (isNullable(decimalQtt) || decimalQtt < 1) {
    decimalQtt = 2;
  }

  var value = element.value;
  if (isNullable(value)) {
    value = "";
  }

  var cleanValue = value.replace(/[^\d]+/gi, "").replace(/^0+/, "");

  if (cleanValue.length <= 0) {
    value = ("0" + decimalSeparator);

    var temp = decimalQtt;
    while (temp-- > 0) {
      value += "0";
    }
  } else {
    // 25 -> 0,025
    // 256 -> 0,256
    if (cleanValue.length <= decimalQtt) {
      value = ("0" + decimalSeparator);

      var temp = (decimalQtt - cleanValue.length);
      while (temp-- > 0) {
        value += "0";
      }

      value += cleanValue;
    } else {
      // 2568 -> 2,568
      // 25689 -> 25,689
      // 256897 -> 256,897
      // 2568974 -> 2.568,974
      // 452568974 -> 452.568,974
      // 120030010 -> 1.200.300,10
      var decimalPosition = (cleanValue.length - decimalQtt);
      var decimalValue = cleanValue.substring(decimalPosition, cleanValue.length);
      var finalFloatValue = "";

      var floatValue = cleanValue.substring(0, decimalPosition);

      var temp = (cleanValue.length - decimalQtt);
      while (temp > 3) {
        var tempPosition = (floatValue.length - 3);
        var tempFloatValue = floatValue.substring(tempPosition, floatValue.length);

        floatValue = floatValue.substring(0, tempPosition);
        temp = floatValue.length;

        finalFloatValue = (groupingSeparator + tempFloatValue + finalFloatValue);

        if (temp <= 3) {
          finalFloatValue = (floatValue + finalFloatValue);
        }
      }

      if (finalFloatValue.length == 0) {
        finalFloatValue = floatValue;
      }

      value = (finalFloatValue + decimalSeparator + decimalValue);
    }
  }

  element.value = value;

  var negativeIsNotDefined = /^[^-]/.test(element.value);
  if (isNegative && negativeIsNotDefined) {
    value = ("-" + element.value);
    element.value = value;
  }

  return value;
}

//Novo formato de telefones das regiões brasileiras.
//Ex: (XX) XXXXX-XXXX
function formatNewTel(campo) {
  var allowedDDD = "119, 129, 139, 149, 159, 169, 179, 189, 199, 219, 229, 249, 279, 289," +
    "419, 429, 439, 449, 459, 469, 479, 489, 499, 519, 529, 539, 549, 559," +
    "719, 739, 749, 759, 779, 919, 929, 939, 949, 959, 969, 979, 989, 999," +
    "819, 829, 839, 849, 859, 869, 879, 889, 899, 319, 329, 339, 349, 359, 379, 389, 619, 629, 639, 649, 659, 669, 679, 689, 699";
  vr = campo.value;
  vrClean = vr.replace(/\D/g, "");
  result = "";
  if (vrClean.length > 0) {
    result = "(" + vrClean;
    if (vrClean.length > 1) {
      result = "(" + vrClean.substr(0, 2) + ") " + vrClean.substr(2, vrClean.length);
      if (vrClean.length > 6 && allowedDDD.indexOf(vrClean.substring(0, 3)) == -1) { //Telefones comuns
        result = "(" + vrClean.substr(0, 2) + ") " + vrClean.substr(2, 4) + "-" + vrClean.substr(6, vrClean.length);
        return result.substr(0, 14);
      } else { //Celulares com 9 dígitos
        if (vrClean.length == 2) {
          result = "(" + vrClean.substr(0, 2);
        } else if (vrClean.length < 8) {
          result = "(" + vrClean.substr(0, 2) + ") " + vrClean.substr(2, 5);
        } else {
          result = "(" + vrClean.substr(0, 2) + ") " + vrClean.substr(2, 5) + "-" + vrClean.substr(7, vrClean.length);
        }
        return result.substr(0, 15);
      }
    }
  }
  return result;
}

//Formata IP usando o evento onKeyDown
function formatIP(campo) {
  vr = Limpar(campo.value, "0123456789.");

  if (vr.length <= 0) {
    campo.value = "";
  } else {
    vr = verifySubstrIP(vr);
  }

  return vr;
}

function verifySubstrIP(vr) {
  verify = false;
  qtdChr = 0;
  qtdPonto = 0;
  vrSegment = "";

  for (i = 0; i < vr.length; i++) {
    if (vr.substr(i, 1) == ".") {
      if (i == 0) { //não iniciar com ponto
        vr = vr.substr(1, vr.length);
        verify = true;
        break;
      }
      if (i > 0) {
        if (vr.substr(i - 1, 1) == ".") { // não pode existir segmento sem valor, como x..y (2 '.' juntos)
          vr = vr.substr(0, i - 1) + vr.substr(i, vr.length);
          verify = true;
          break;
        }
      }
      qtdPonto = qtdPonto + 1;
      qtdChr = 0;
      vrSegment = "";
    } else {
      qtdChr = qtdChr + 1;
      vrSegment = vrSegment + vr.substr(i, 1);
    }

    if (qtdChr > 3) {
      if (qtdPonto < 3) { //separa após o terceiro caracter com um '.'
        vr = vr.substr(0, i) + "." + vr.substr(i, vr.length);
        verify = true;
        break;
      } else { //já possui o número máximo de pontos, ignora o que estiver após o terceiro caracter
        vr = vr.substr(0, i);
        qtdChr = 3;
        vrSegment = vr.substr(i - 3, 3);
      }
    }

    if (qtdChr == 3) {
      if (vrSegment > 255) { // Segmento não pode ser superior a 255
        vr = vr.substr(0, i - 2); //Elimina o que estiver a partir do segmento inválido.
        break;
      }
    }

    if (qtdPonto > 3) {
      vr = vr.substr(0, i) + vr.substr(i + 1, vr.length);
      verify = true;
      break;
    }
  } //Fim do for

  if (verify) vr = verifySubstrIP(vr);

  return vr;
}