$(function () {
    var Todo = Backbone.Model.extend({
        defaults: function () {
            return {
                done: false,
                order: 0
            }
        },
        toggle: function () {
            this.save({done: !this.get("done")});
        }
    });

    var TodoList = Backbone.Collection.extend({
        model: Todo,
        localStorage: new Backbone.LocalStorage("todos-backbone"),
        done: function () {
            return this.where({done: true});
        },
        remaining: function () {
            return this.where({done: false});
        },
        comparator: 'order'
    })
    var Todos = new TodoList;


    var TodoView = Backbone.View.extend({
        el: 'li',
        template: _.html($('#item-template').html()),
        event: {
            'click .toggle': 'toggleDone',
            'dbclick .view': 'edit',
            'click a .destory': 'clear',
            'keypress .edit': 'update',
            'blur .edit': 'close'
        },
        toggleDone: function () {
            this.model.toggle();
        },
        edit: function () {
            this.$el.addClass('editing');
            this.input.focus();
        }
    })
});
