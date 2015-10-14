/**
 * Created by randomnum on 2015/9/9.
 */
define(['jquery', 'domReady', 'datatable'], function ($, _domReady) {
    _domReady(function () {
        $('#container button').on('click', function () {
            $("#example22").DataTable();
        })
    })
})