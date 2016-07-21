exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {
    var r = [], m = [];

    function permute(input) {
      var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        m.push(ch);
        if (input.length == 0) {
          r.push(m.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        m.pop();
      }
      return r;
    }
  return permute(arr);

  },

  fibonacci: function(n) {
    var x = [1, 1];
    if(n > 2) {
      for(var i = 2; i < n;i++) {
        x.push(x[i-1] + x[i-2]);
      }
    }

    return x[n-1];
  },

  validParentheses: function(n) {
    function paren(n){
      if (n == 0)
          return [""];
      var result = [];
      for (var i = 0; i < n; ++i) {
          var lefts = paren(i); // recursive call for left side parenthesis.
          var rights = paren(n - i - 1); // recursive call for right side parenthesis.

          for (var l = 0; l < lefts.length; ++l)
              for (var r = 0; r < rights.length; ++r)
                  result.push("(" + lefts[l] + ")" + rights[r]);
      }

      return result;
    }
    return paren(n);
  }
};
