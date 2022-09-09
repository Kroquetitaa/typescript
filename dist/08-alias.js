"use strict";
(() => {
    let userID;
    let shirtSize;
    shirtSize = 'L';
    console.log(shirtSize);
    shirtSize = 'M';
    console.log(shirtSize);
    const greeting = (userID, size) => {
        if (typeof userID === 'string')
            console.log(userID.toLocaleUpperCase(), size);
    };
    greeting('Hola', 'L');
})();
