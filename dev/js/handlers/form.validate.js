var registerApp = new RegisterApp();

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
            $('.result-message').append('<span class="text-success">OK</span>');
            console.log(registerApp.getAppObject())
        } else {
            $('.btn-contolls').find('.btn-next').removeClass('d-block');
        }
    };

    this.checkRights = function(){
        var data = {
            url: registerApp.getAppObject().domainName,
            secretKey: registerApp.getAppObject().secretKey
        };

        console.log(data)

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/registerApp'
        }).done(function (data) {
            console.log(data);

            if (!data.ok) {
                console.log(false)
                console.log(data.error);
            } else {
                console.log(true)
                var rightsFlag = registerApp.getAppObject().checkRights;
                if(rightsFlag){
                    registerApp.setRights();
                    $('.result-message').append('<span class="text-success">OK</span>');
                }
            }
        });
    };

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