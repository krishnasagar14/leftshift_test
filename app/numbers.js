exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var r = 1 & (num >> (bit-1));
    return r;
  },

  base10: function(str) {
    return parseInt(str,2);
  },

  convertToBinary: function(num) {
    var r = '';
    for(var i = 7; i > -1; i--) {
      if(num & (1 << i)) { r = r + '1';}
      else {r = r + '0';}
    }
    return r;
  },

  multiply: function(a, b) {
    var a1 = [], b1 = [];
    var _a =  Math.pow(10, Math.floor( Math.log(a) * -1 )),
    _b = Math.pow(10, Math.floor( Math.log(b) * -1 ));

    if(a < 1) {
      a1.push(_a*a);
      a1.push(_a);
    }
    else {
      a1.push(a);
      a1.push(1);
    }
    if(b < 1) {
      b1.push(_b*b);
      b1.push(_b);
    }
    else {
      b1.push(b);
      b1.push(1);
    }
    return (a1[0] * b1[0]) / (a1[1] * b1[1]);
  }
};
