/**
 * Created by randomnum on 2015/9/9.
 */
define(['jquery', 'domReady', 'datatable'], function ($, _domReady) {
    _domReady(function () {
        $('#bt1').on('click', function () {
            $("#example22").DataTable();
        })
        $('#bt2').on('click', function () {
            $("#example22").DataTable();
        })
    })
})