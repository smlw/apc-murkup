function regApp(elem) {
    var regForm = $('#register-app_form').validate({
        errorContainer: ".box-messages",
        errorClass: "text-danger",
        rules: {
            formDomainName: {
                required: true
            }
        },
        messages: {
            formDomainName: {
                required: "Пожалуйста, введите ссылку на ресурс вида http://domainname.ru/",
                url: 'Пожалуйста, введите корректный адрес'
            }
        }
    });
    var inputs = {
        domainName: '#formDomainName',
        user: '#step_3-user',
        password: '#step_3-password',
        tableName: '#step_3-table-name',
        dbType: '#step_3-db-type'
    };

    this.checkDomainName = function () {
        var inputVal = $(inputs.domainName).val();
        var validFlag = regForm.element(inputs.domainName);
        if (validFlag) {
            registerApp.setDomainName(inputVal);
            $('.btn-contolls').find('.btn-next').addClass('d-block');
        } else {
            $('.btn-contolls').find('.btn-next').removeClass('d-block')
        }
    }

    var self = this;
    elem.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action) {
            self[action]();
        }
    };

}
new regApp(regAppForm);