require ['backbone', 'AppRouter'], (Backbone, AppRouter) ->

	$ ->
		AR = new AppRouter
		Backbone.history.start()