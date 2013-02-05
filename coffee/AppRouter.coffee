define ['backbone',
	'ListView'],
(Backbone, ListView) ->
	class AppRouter extends Backbone.Router
		routes:
			"*actions" : "landing"

		initialize: ->
			@listView = new ListView

		landing : =>
			@listView.render()

