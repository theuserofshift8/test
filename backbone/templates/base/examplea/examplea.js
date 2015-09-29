/**
 * Created by randomnum on 2015/9/29.
 */
define(['jquery', 'backbone'], function ($, _bone) {
    var a = _bone.View.extend({
        el: $('body'),
        initialize: function () {
            _.bindAll(this, 'render');
            this.render;
        },
        render: function () {
            $(this.el).append("<ul> <li>hello world</li> </ul>");
        }
    })
    return a;
});