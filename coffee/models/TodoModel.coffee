define ['underscore', 'backbone'], (_, Backbone) ->
  return class TodoModel extends Backbone.Model

  # Default attributes for the todo.
  defaults:
    content: "empty todo..."
    done: false
  # Ensure that each todo created has `content`.
  initialize: ->
    if not @get("content")
      @set "content", @defaults.content

  # Toggle the `done` state of this todo item.
  toggle: ->
    @save
      done: !@get("done")

  # Remove this Todo from *localStorage* and delete its view.
  clear: =>
    @destroy()
    @view.remove()
