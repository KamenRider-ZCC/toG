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
// 百度地图API功能
var map = new BMap.Map("map");
var point = new BMap.Point(116.331398, 39.897445);
map.centerAndZoom(point, 12);
// 创建地址解析器实例
var myGeo = new BMap.Geocoder();
// 将地址解析结果显示在地图上,并调整地图视野
function getAddress(address) {
    myGeo.getPoint(address, function (point) {
        if (point) {
            map.addOverlay(new BMap.Marker(point));
            setTimeout(() => {
                map.centerAndZoom(point, 16);
            }, 300)
        } else {
            alert("您选择地址没有解析到结果!");
        }
    });
}