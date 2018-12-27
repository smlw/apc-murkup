var RegisterApp = (function () {
    var appObject = {
        domainName: '',
        checkRights: false,
        DBData: {
            host: this.domainName,
            user: '',
            password: '',
            port: '',
            tableUsers: '',
            DBtype: ''
        }
    };
    return { // методы доступные извне
      
        // SETTERS
        setDomainName: function (domainLink) {
            appObject.domainName = domainLink;
        },
        setRights: function() {
            appObject.checkRights = true;
        },
        setDBData: function(user,password,port,tableUsers,DBtype){
            appObject.DBData.user = user;
            appObject.DBData.password = password;
            appObject.DBData.port = port;
            appObject.DBData.tableUsers = tableUsers;
            appObject.DBData.DBtype = DBtype;
        },

        // GETTERS
        getAppObject: function(){
            return appObject;
        }
    }

}(RegisterApp));
