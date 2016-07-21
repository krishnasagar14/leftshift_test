exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var r = 0;
    for(var i = 0; i < arr.length; i++) {
      r += arr[i];
    }
    return r;
  },

  remove: function(arr, item) {
    var r = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] != item) {
        r.push(arr[i]);
      }
    }
    return r;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] == item) {
        arr.splice(i, 2);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var cnt = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] == item) {
        cnt += 1;
      }
    }
    return cnt;
  },

  duplicates: function(arr) {
    var dupObj = {};
    var r = [];
    for(var i = 0; i < arr.length; i++) {
      if(dupObj.hasOwnProperty(arr[i]) == true){dupObj[arr[i]] += 1;}
      else {dupObj[arr[i]] = 1;}
    }
    for(var item in dupObj) {
      if(dupObj.hasOwnProperty(item)) {
        if(dupObj[item]>1) {r.push(parseInt(item));}
      }
    }
    return r;
  },

  square: function(arr) {
    var r = [];
    for(var i = 0; i < arr.length; i++) {
      r.push(Math.pow(arr[i],2));
    }
    return r;
  },

  findAllOccurrences: function(arr, target) {
    var r = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] == target) { r.push(i);}
    }
    return r;
  }
};
