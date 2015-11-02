// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone.localStorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:
$(function () {

    // Todo Model
    // ----------

    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    var Todo = Backbone.Model.extend({

        // Default attributes for the todo item.
        defaults: function () {
            return {
                title: "empty todo...",
                order: Todos.nextOrder(),
                done: false
            };
        },

        // Toggle the `done` state of this todo item.
        toggle: function () {
            this.save({done: !this.get("done")});
        }

    });

    // Todo Collection
    // ---------------

    // The collection of todos is backed by *localStorage* instead of a remote
    // server.
    var TodoList = Backbone.Collection.extend({

        // Reference to this collection's model.
        model: Todo,

        // Save all of the todo items under the `"todos-backbone"` namespace.
        localStorage: new Backbone.LocalStorage("todos-backbone"),

        // Filter down the list of all todo items that are finished.
        done: function () {
            return this.where({done: true});
        },

        // Filter down the list to only todo items that are still not finished.
        remaining: function () {
            return this.where({done: false});
        },

        // We keep the Todos in sequential order, despite being saved by unordered
        // GUID in the database. This generates the next order number for new items.
        nextOrder: function () {
            if (!this.length) return 1;
            return this.last().get('order') + 1;
        },

        // Todos are sorted by their original insertion order.
        comparator: 'order'

    });

    // Create our global collection of **Todos**.
    var Todos = new TodoList;

    // Todo Item View
    // --------------

    // The DOM element for a todo item...
    var TodoView = Backbone.View.extend({

        //... is a list tag.
        /*
         如果你指定了 el，那么，this.$el 将指定你设定的元素，el 的值是 jQuery 选择器。
         如果你指定了 tagName，那么，生成的 View 以该 TagName 为最顶上节点标签。
         如果你指定了 className，那么 tagName 的 className 为你指定的 class。
         backbone 有个默认的属性 tagName, 默认为空的 Div,
         在没有指定 tagName 时，Backbone 会通过默认的 tagName 产生一个 jQuery 对象，即视图的 $el
         如果你指定了el，则该视图的根元素就是你所指定的el。el可以是jquery对象，也可以是jquery选择器，或者原生的Element对象。

         如果你没有指定el，Backbone会为你自动生成这个视图的根元素，
         tagName是用于指定这个跟元素的标签类型的，如果tagName: 'div'或tagName: 'li'。className用于指定这个根元素的类名。
         具体可以看以下backbone的源码片段：
         var View = Backbone.View = function(options) {
         this.cid = _.uniqueId('view');
         options || (options = {});
         _.extend(this, _.pick(options, viewOptions));
         this._ensureElement();
         this.initialize.apply(this, arguments);
         this.delegateEvents();
         };

         // Ensure that the View has a DOM element to render into.
         // If `this.el` is a string, pass it through `$()`, take the first
         // matching element, and re-assign it to `el`. Otherwise, create
         // an element from the `id`, `className` and `tagName` properties.
         _ensureElement: function() {
         if (!this.el) {
         var attrs = _.extend({}, _.result(this, 'attributes'));
         if (this.id) attrs.id = _.result(this, 'id');
         if (this.className) attrs['class'] = _.result(this, 'className');
         var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
         this.setElement($el, false);
         } else {
         this.setElement(_.result(this, 'el'), false);
         }
         }

         // Change the view's element (`this.el` property), including event
         // re-delegation.
         setElement: function(element, delegate) {
         if (this.$el) this.undelegateEvents();
         this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
         this.el = this.$el[0];
         if (delegate !== false) this.delegateEvents();
         return this;
         },
         */
        tagName: "li",

        // Cache the template function for a single item.
        /*
         <script type="text/template" id="item-template">
         <div class="view">
         <input class="toggle" type="checkbox" <%= done ? 'checked="checked"' : '' %> />
         <label><%- title %></label>
         <a class="destroy"></a>
         </div>
         <input class="edit" type="text" value="<%- title %>" />
         </script>
         */
        template: _.template($('#item-template').html()),

        // The DOM events specific to an item.
        events: {
            "click .toggle": "toggleDone",
            "dblclick .view": "edit",
            "click a.destroy": "clear",
            "keypress .edit": "updateOnEnter",
            "blur .edit": "close"
        },

        // The TodoView listens for changes to its model, re-rendering. Since there's
        // a one-to-one correspondence between a **Todo** and a **TodoView** in this
        // app, we set a direct reference on the model for convenience.
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        // Re-render the titles of the todo item.
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get('done'));
            console.log(this.input);
            this.input = this.$('.edit');
            console.log(this.input);

            return this;
        },

        // Toggle the `"done"` state of the model.
        toggleDone: function () {
            this.model.toggle();
        },

        // Switch this view into `"editing"` mode, displaying the input field.
        edit: function () {
            this.$el.addClass("editing");
            console.log(this.input);
            this.input.focus();

        },

        // Close the `"editing"` mode, saving changes to the todo.
        close: function () {
            var value = this.input.val();
            if (!value) {
                this.clear();
            } else {
                this.model.save({title: value});
                this.$el.removeClass("editing");
            }
        },

        // If you hit `enter`, we're through editing the item.
        updateOnEnter: function (e) {
            if (e.keyCode == 13) this.close();
        },

        // Remove the item, destroy the model.
        clear: function () {
            this.model.destroy();
        }

    });

    // The Application
    // ---------------

    // Our overall **AppView** is the top-level piece of UI.
    var AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $("#todoapp"),

        // Our template for the line of statistics at the bottom of the app.
        statsTemplate: _.template($('#stats-template').html()),

        // Delegated events for creating new items, and clearing completed ones.
        events: {
            "keypress #new-todo": "createOnEnter",
            "click #clear-completed": "clearCompleted",
            "click #toggle-all": "toggleAllComplete"
        },

        // At initialization we bind to the relevant events on the `Todos`
        // collection, when items are added or changed. Kick things off by
        // loading any preexisting todos that might be saved in *localStorage*.
        initialize: function () {

            this.input = this.$("#new-todo");
            this.allCheckbox = this.$("#toggle-all")[0];

            this.listenTo(Todos, 'add', this.addOne);
            this.listenTo(Todos, 'reset', this.addAll);
            this.listenTo(Todos, 'all', this.render);

            this.footer = this.$('footer');
            this.main = $('#main');

            Todos.fetch();
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function () {
            var done = Todos.done().length;
            var remaining = Todos.remaining().length;

            if (Todos.length) {
                this.main.show();
                this.footer.show();
                this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
            } else {
                this.main.hide();
                this.footer.hide();
            }

            this.allCheckbox.checked = !remaining;
        },

        // Add a single todo item to the list by creating a view for it, and
        // appending its element to the `<ul>`.
        addOne: function (todo) {
            var view = new TodoView({model: todo});
            this.$("#todo-list").append(view.render().el);
        },

        // Add all items in the **Todos** collection at once.
        addAll: function () {
            Todos.each(this.addOne, this);
        },

        // If you hit return in the main input field, create new **Todo** model,
        // persisting it to *localStorage*.
        createOnEnter: function (e) {
            if (e.keyCode != 13) return;
            if (!this.input.val()) return;

            Todos.create({title: this.input.val()});
            this.input.val('');
        },

        // Clear all done todo items, destroying their models.
        clearCompleted: function () {
            _.invoke(Todos.done(), 'destroy');
            return false;
        },

        toggleAllComplete: function () {
            var done = this.allCheckbox.checked;
            Todos.each(function (todo) {
                todo.save({'done': done});
            });
        }

    });

    // Finally, we kick things off by creating the **App**.
    var App = new AppView;

});
