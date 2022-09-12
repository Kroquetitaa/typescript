"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const createProduct = (id, isNew = true, stock = 0) => {
    return {
        id,
        stock,
        isNew
    };
};
exports.createProduct = createProduct;
const p1 = (0, exports.createProduct)(1, true, 12);
const p2 = (0, exports.createProduct)(1, true);
console.log(p1, p2);
