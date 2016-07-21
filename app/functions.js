exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str1) {
      return str + ", " + str1
    };
  },

  makeClosures: function(arr, fn) {
    var r = [];
    for(var i = 0; i < arr.length; i++) {
        r.push(function() { return fn(arr[i]);});
    }
    return r;
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var r = 0;
    for(var i = 0; i < arguments.length; i++) {
      r += arguments[i];
    }
    return r;
  },

  callIt: function(fn) {
    var arg = Array.prototype.slice.call(arguments);
    fn(...arg);//fn.apply(null, arg);
  },

  partialUsingArguments: function(fn) {
    var arg = Array.prototype.slice.call(arguments);
    return function() {
      var arg1 = Array.prototype.slice.call(arguments);
      arg.concat(arg1);
      return fn(...arg);//fn.apply(null, arg);
    };
  },

  curryIt: function(fn) {
    return function(a1) {
      return function(a2) {
        return function(a3) {
          return fn(a1,a2,a3);
        };
      };
    };
  }
};
