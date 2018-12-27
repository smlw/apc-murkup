function RegisterApp() {
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

    // SETTERS
    this.setDomainName = function (domainLink) {
        appObject.domainName = domainLink;
        return true
    };
    this.setRights = function () {
        appObject.checkRights = true;
        return true;
    };
    this.setDBData = function (user, password, port, tableUsers, DBtype) {
        appObject.DBData.user = user;
        appObject.DBData.password = password;
        appObject.DBData.port = port;
        appObject.DBData.tableUsers = tableUsers;
        appObject.DBData.DBtype = DBtype;
        return true;
    };

    // GETTERS
    this.getAppObject = function () {
        return appObject;
    };

};
