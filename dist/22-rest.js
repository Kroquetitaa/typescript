"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole2 = exports.checkRole = exports.checkAdminRole = void 0;
const enums_1 = require("./products/enums");
const currentUser = {
    username: 'nicoBytes',
    role: enums_1.ROLES.CUSTOMER
};
const checkAdminRole = () => {
    currentUser.role === enums_1.ROLES.ADMIN ? console.log(true) : console.log(false);
};
exports.checkAdminRole = checkAdminRole;
// checkAdminRole();
const checkRole = (roles) => {
    if (roles.includes(currentUser.role))
        return true;
    return false;
};
exports.checkRole = checkRole;
const rta = (0, exports.checkRole)([enums_1.ROLES.ADMIN, enums_1.ROLES.CUSTOMER]);
console.log(rta);
const checkRole2 = (...roles) => {
    if (roles.includes(currentUser.role))
        return true;
    return false;
};
exports.checkRole2 = checkRole2;
const rta2 = (0, exports.checkRole2)(enums_1.ROLES.ADMIN, enums_1.ROLES.CUSTOMER, enums_1.ROLES.SELLER);
console.log(rta2);
