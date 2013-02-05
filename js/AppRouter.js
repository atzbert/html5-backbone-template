(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'ListView'], function(Backbone, ListView) {
    var AppRouter;
    return AppRouter = (function(_super) {

      __extends(AppRouter, _super);

      function AppRouter() {
        this.landing = __bind(this.landing, this);
        return AppRouter.__super__.constructor.apply(this, arguments);
      }

      AppRouter.prototype.routes = {
        "*actions": "landing"
      };

      AppRouter.prototype.initialize = function() {
        return this.listView = new ListView;
      };

      AppRouter.prototype.landing = function() {
        return this.listView.render();
      };

      return AppRouter;

    })(Backbone.Router);
  });

}).call(this);
