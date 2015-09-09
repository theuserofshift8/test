/**
 * Created by randomnum on 2015/9/9.
 */
define(['jquery', 'domReady'], function ($, _domReady) {
    _domReady(function () {
        $('#container button').on('click', function () {
            console.log('123123');
        })
    })
})