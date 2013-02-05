(function() {

  require(['backbone', 'AppRouter'], function(Backbone, AppRouter) {
    return $(function() {
      var AR;
      AR = new AppRouter;
      return Backbone.history.start();
    });
  });

}).call(this);
