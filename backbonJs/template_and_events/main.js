var app = app || {};

$(function() {
  var object = {};
  _.extend(object, Backbone.Events);
  object.on('console', function(msg) {
    console.log('handle message ' + msg);
  });
  $('#btn').on('click', function() {
    object.trigger('console', 'an event');
  });
  //----------------------------------------------------------------------//

  app.Myobj = Backbone.Model.extend({
    initialize: function() {},

    showAppObjName: function() {
      console.log(this.get('name'));
    },
  });

  app.myobj = new app.Myobj({
    name: 'Yauheni',
    age: 30,
  });

  $('#btn_getName').on('click', function() {
    app.myobj.showAppObjName();
  });

  //----------------------------------------------------------------------//

  $(function() {
    var compiled = _.template($('#listTpl').html());
    var obj = {
      name: 'Super',
      size: 190,
      color: 'Red',
      nice: false,
    };
    $('#template').append(compiled(obj));
  });
});
