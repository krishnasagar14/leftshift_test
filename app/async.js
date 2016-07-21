exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var dObj = $.Deferred();
    setTimeout(function () {
      dObj.resolve(value);
    },10);

    return dObj.promise();
  },

  manipulateRemoteData: function(url) {
    var dObj = $.Deferred();
    $.ajax(url).then(function(response) {
        var names = [];
        for (var variable in response.people) {
          if (response.people.hasOwnProperty(variable)) {
            names.push(response.people[variable].name);
          }
        }
        console.log(names);
        dObj.resolve(names.sort());
    });
    return dObj.promise();
  }
};
