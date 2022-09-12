"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nicoUser = exports.ROLES = void 0;
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "Admin";
    ROLES["SELLER"] = "Seller";
    ROLES["CUSTOMER"] = "Customer";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
exports.nicoUser = {
    username: 'nicobytes',
    role: ROLES.ADMIN
};
