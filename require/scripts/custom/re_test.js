/**
 * Created by randomnum on 2015/7/13.
 */
require(['domReady', 'jquery'], function (domReady, $) {
    $('div').on('click', function () {
        alert('div click');
    })
    $('div a').on('click', function (e) {
        e.stopPropagation();
        alert('a click');
    })
    var ul = $('#content').find('.list-courses').eq(0).find('a');
    alert(ul);
});

