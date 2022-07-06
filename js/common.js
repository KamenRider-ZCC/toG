$(function () {
    // 导航
    $('.navbar ul .el-submenu').hover(function () {
        var $m = $(this).index()
        $('.navbar ul .el-submenu').eq($m).find('i').css('transform', 'rotate(180deg)')
        $('.nav_box').eq($m).css('display', 'block')
    }, function () {
        var $n = $(this).index()
        $('.nav_box').eq($n).hover(function () {
            $('.nav_box').eq($n).css('display', 'block')
        }, function () {
            $('.navbar ul .el-submenu').eq($n).find('i').css('transform', 'rotate(0deg)')
            $('.nav_box').eq($n).css('display', 'none')
        })
        $('.navbar ul .el-submenu').eq($n).find('i').css('transform', 'rotate(0deg)')
        $('.nav_box').eq($n).css('display', 'none')
    })


    // 导航-tab切换
    $('.service_in .aside ul li').click(function () {
        var $i = $(this).index()
        $(this).addClass("is_active")
        $(this).siblings().removeClass("is_active")

        $('.content .tab_box').eq($i).addClass("is_active_box")
        $('.content .tab_box').eq($i).siblings().removeClass("is_active_box")
    })


    // 搜索框切换
    $(".session_in .sub_nav .icon-31sousuo").click(function () {
        $(".search").css('display', 'block')
        $(".sub_nav").css('display', 'none')
    })
    $(".session_in .search .icon-cancel-1-copy").click(function () {
        $(".session_in .search").css('display', 'none')
        $(".session_in .sub_nav").css('display', 'block')
    })
})











// 点击事件
$(".service_box ul li").click(function () {
    var i = $(this).index()
    obj[i] = !obj[i]
    Object.keys(obj).forEach(key => {
        if (obj[key]) {
            $(".service_box ul li").eq(key).addClass("current_li")
            $(".service_box ul li").eq(key).find("b").addClass("current_b")
        } else {

            $(".service_box ul li").eq(key).removeClass("current_li")
            $(".service_box ul li").eq(key).find("b").removeClass("current_b")
        }
    })
})

$(function () {
    // 监听选项卡的移入事件
    $(".nav_item ul li").click(function () {
        // 修改被移入选项卡的背景颜色
        $(this).addClass("current")
        // 还原其他兄弟选项卡的背景颜色 siblings可以返回除开当前选择内容的其他所有选择(排它)
        $(this).siblings().removeClass("current")
        // 获取当前选中的选项卡的索引
        var index = $(this).index()
        // 根据索引找到对应的图片
        var $li = $(".group_item>li").eq(index)
        // 隐藏非当前的其他图片
        $li.siblings().removeClass("show")
        $li.addClass("show")
    })
})