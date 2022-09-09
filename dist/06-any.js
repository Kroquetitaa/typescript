"use strict";
(() => {
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = true;
    myDynamicVar = [];
    // Don´t use any
    myDynamicVar = 'Hola';
    const rta = myDynamicVar.toLocaleLowerCase();
    console.log(rta);
    myDynamicVar = 123;
    const rta2 = myDynamicVar.toFixed();
    console.log(rta2);
})();
