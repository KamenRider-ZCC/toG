$(function () {
    $(".condition").on('click', '.chooses .option', function () {
        if ($(this).hasClass('active')) {
            return false
        }
        $(this).addClass('active').siblings().removeClass("active")
    })
    $("#sortType").on('click', '.sortName', function () {
        if ($(this).parent().hasClass('active')) {
            return false
        }
        $(this).parent().addClass('active').siblings().removeClass("active")
        $(this).parent().find('.arrActive').removeClass('arrActive')
        $(this).parent().find('.arrUp').addClass('arrActive')
    })
    $("#sortType").on('click', '.arrUp,.arrDown', function () {
        if ($(this).hasClass('arrActive')) {
            return false
        }
        $(this).addClass('arrActive').siblings().removeClass("arrActive")
        $(this).parent().parent().addClass('active').siblings().removeClass("active")
    })
    $(".sub_nav").on('click', 'li', function () {
        if ($(this).hasClass('current_nav')) {
            return false
        }
        $(this).addClass('current_nav').siblings().removeClass("current_nav")
    })
})

function goForm() {
    window.location.href = "./form.html";
}

function goNeedsDetail() {
    window.location.href = "./needs.html";
}