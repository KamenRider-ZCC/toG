// 初始化表单验证
$(document).ready(function () {
    formValidator()
})

// 提交表单
function submitService () {
    $('#service_form').data('bootstrapValidator').validate()
    if (!$('#service_form').data('bootstrapValidator').isValid()) {
        return
    }
    console.log('发起Ajax请求！！')
}

// Modal验证销毁重构
$('#serviceModal').on('hidden.bs.modal', function () {
    $("#service_form").data('bootstrapValidator').destroy()
    $('#service_form').data('bootstrapValidator', null)
    document.getElementById("service_form").reset()
    // $("#service_form")[0].reset()
    formValidator()
})

// Form验证规则
function formValidator () {
    $('#service_form').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            // 姓名
            name: {
                message: '管理员名验证失败',
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    },
                }
            },
        }
    })
}