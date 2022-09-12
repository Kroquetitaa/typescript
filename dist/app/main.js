"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("@faker-js/faker"));
const product_service_1 = require("./products/product.service");
for (let i = 0; i < 50; i++) {
    (0, product_service_1.addProduct)({
        id: faker_1.default.faker.datatype.uuid(),
        description: faker_1.default.faker.commerce.productDescription(),
        image: faker_1.default.faker.image.imageUrl(),
        price: parseInt(faker_1.default.faker.commerce.price(), 10),
        isNew: faker_1.default.faker.datatype.boolean(),
        title: faker_1.default.faker.commerce.productName(),
        createdAt: faker_1.default.faker.date.recent(),
        updatedAt: faker_1.default.faker.date.recent(),
        stock: faker_1.default.faker.datatype.number({ min: 10, max: 100 }),
        category: {
            id: faker_1.default.faker.datatype.uuid(),
            name: faker_1.default.faker.commerce.department(),
            createdAt: faker_1.default.faker.date.recent(),
            updatedAt: faker_1.default.faker.date.recent(),
        }
    });
}
console.log(product_service_1.products);
