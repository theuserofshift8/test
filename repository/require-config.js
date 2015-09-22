/**
 * Created by bin on 2015/9/13.
 */

require.config({
    baseUrl: "/test/repository",
    paths: {
        jquery: 'jquery',
        domReady: 'domReady',
        backbone: 'backbone-min',
        underscore: 'underscore-min'
    },

    shim: {
        backbone: {
            deps: ['jquery','underscore'],
            exports: 'Backbone'
        }
    }
});

