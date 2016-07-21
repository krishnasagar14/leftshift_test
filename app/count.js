exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    if(start <= end) {
      console.log(start);
      setTimeout(count(start, end), 100);
    }
    //return {cancel : function(){clearTimeout();}};
  }
};
