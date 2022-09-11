"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "Admin";
    ROLES["SELLER"] = "Seller";
    ROLES["CUSTOMER"] = "Customer";
})(ROLES || (ROLES = {}));
const nicoUser = {
    username: 'nicobytes',
    role: ROLES.ADMIN
};
