exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var r = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(r, "");
  },

  wordWrap: function(str, cols) {
    var r = '';
    words = str.split(" ");
    r = words[0];
    for(var i = 1; i < words.length; i++) {
      if(words[i].length > cols) { // considered for 1st word length above minimum. But considered fully.
        r = r + '\n' + words[i];
      }
      else {
          if(r.length + words[i].length > cols) {// considered for other word length above minimum. But considered fully.
            r = r + '\n' + words[i];
          }
          else {
            r = r + ' ' + words[i];
          }
      }
    }
    return r;
  },

  reverseString: function(str) {
    var r = '';
    for(var i = str.length - 1; i > -1; i--) {
      r = r + str[i];
    }
    return r;
  }
};
