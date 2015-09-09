/**
 * Created by randomnum on 2015/9/9.
 */
define(['jquery'], function ($) {
    clicktest = function () {
        $('#container2').text(Math.random(0, 1) * 100);
    };
    return {
        'clicktest': clicktest
    };
})