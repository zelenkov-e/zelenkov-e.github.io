var RocketView = Backbone.View.extend({
  events: {
    'click .changeSize': 'changeSize',
    'click .deleteRow': 'deleteRow',
    'blur .desc': 'editValue',
    'blur .name': 'editValue',
    'blur .size': 'editValue',
  },

  initialize: function() {
    this.template = _.template($('viewRocket'.html()));
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  render: function() {
    var json = this.model.toJSON();
    var view = this.template(json);
    this.$el.html(view);
  },
});
