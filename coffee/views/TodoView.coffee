define ['jquery','underscore', 'backbone','Todos','TodoItemView','text!../templates/stats.html'], ($, _, Backbone, Todos, TodoItemView, statsTemplate) ->
  return class AppView extends Backbone.View

    # Instead of generating a new element, bind to the existing skeleton of
    # the App already present in the HTML.
    el: $("#todoapp")

    # Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template(statsTemplate)

    # Delegated events for creating new items, and clearing completed ones.
    events:
      "keypress #new-todo":  "createOnEnter"
      "keyup #new-todo":     "showTooltip"
      "click .todo-clear a": "clearCompleted"


    # At initialization we bind to the relevant events on the `@todos`
    # collection, when items are added or changed. Kick things off by
    # loading any preexisting todos that might be saved in *localStorage*.
    initialize: =>
      @todos = new Todos()
      @input    = @$("#new-todo")
      @todos.bind('add', @addOne)
      @todos.bind('reset', @addAll)
      @todos.bind('all', @render)

      @todos.fetch()

    # Re-rendering the App just means refreshing the statistics -- the rest
    # of the app doesn't change.
    render: =>
      done = @todos.done().length
      @$('#todo-stats').html @statsTemplate
        total:      @todos.length
        done:       @todos.done().length
        remaining:  @todos.remaining().length

    # Add a single todo item to the list by creating a view for it, and
    # appending its element to the `<ul>`.
    addOne: (todo) =>
      view = new TodoItemView
        model: todo
      @$("#todo-list").append view.render().el

    # Add all items in the **@todos** collection at once.
    addAll: =>
      @todos.each(@addOne)

    # Generate the attributes for a new Todo item.
    newAttributes: =>
      return {
        content: this.input.val()
        order:   @todos.nextOrder()
        done:    false
      }

    # If you hit return in the main input field, create new **Todo** model,
    # persisting it to *localStorage*.
    createOnEnter: (e) =>
      if (e.keyCode == 13)
        @todos.create @newAttributes()
        @input.val ''

    # Clear all done todo items, destroying their models.
    clearCompleted: =>
      _.each @todos.done(), (todo) ->
        todo.clear()
      return false

    # Lazily show the tooltip that tells you to press `enter` to save
    # a new todo item, after one second.
    showTooltip: (e) =>
      tooltip = @$(".ui-tooltip-top")
      val = @input.val()
      tooltip.fadeOut()
      if (@tooltipTimeout)
        clearTimeout(@tooltipTimeout)
      if val == '' or val == @input.attr('placeholder')
        return
      show = ->
        tooltip.show().fadeIn()
      @tooltipTimeout = _.delay(show, 1000)
