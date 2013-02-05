(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'ListItem'], function(Backbone, ListItem) {
    var ListItemView;
    return ListItemView = (function(_super) {

      __extends(ListItemView, _super);

      function ListItemView() {
        return ListItemView.__super__.constructor.apply(this, arguments);
      }

      return ListItemView;

    })(Backbone.View);
  });

}).call(this);
