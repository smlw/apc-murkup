var registerApp=new RegisterApp;function regApp(e){var r=$("#register-app_form").validate({errorContainer:".box-messages",errorClass:"text-danger",rules:{formDomainName:{required:!0}},messages:{formDomainName:{required:"Пожалуйста, введите ссылку на ресурс вида http://domainname.ru/",url:"Пожалуйста, введите корректный адрес"}}}),a="#formDomainName";this.checkDomainName=function(){var e=$(a).val();r.element(a)?(registerApp.setDomainName(e),$(".btn-contolls").find(".btn-next").addClass("d-block"),$(".result-message").append('<span class="text-success">OK</span>')):$(".btn-contolls").find(".btn-next").removeClass("d-block")};var t=this;e.onclick=function(e){var r=e.target.getAttribute("data-action");r&&t[r]()}}new regApp(regAppForm);