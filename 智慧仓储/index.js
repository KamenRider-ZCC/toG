$(function () {
    $("#sortType").on('click', '.sort', function () {
        $(this).addClass('active').siblings().removeClass("active")
    })
    $('#datetimepicker1').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $('#datetimepicker2').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $('#datetimepicker4').datetimepicker({
        format: 'YYYY-MM-DD'
    });
    $("#myTab").on('click', '.nav-link', function () {
        if ($(this).attr('aria-controls') === 'all') {
            $("#indexSearch").show()
        } else {
            $("#indexSearch").hide()
        }
    })
})

function goNeeds() {
    $('#needs-tab').tab('show')
}

function goNeedsDetail() {
    window.location.href = "./needs.html";
}

function goServiceDetail() {
    window.location.href = "./service.html";
}