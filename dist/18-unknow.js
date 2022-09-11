"use strict";
let anyVar;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};
anyVar.doSomething();
// Recordamos que any no se usa en su defecto se usa unknow
let unknowVar;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};
if (typeof unknowVar === 'string') {
    unknowVar.toUpperCase();
}
const parse = (str) => {
    return JSON.parse(str);
};
