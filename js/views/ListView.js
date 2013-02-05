(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'ListItemView'], function(Backbone, ListItemView) {
    var ListView;
    return ListView = (function(_super) {

      __extends(ListView, _super);

      function ListView() {
        return ListView.__super__.constructor.apply(this, arguments);
      }

      return ListView;

    })(Backbone.View);
  });

}).call(this);
