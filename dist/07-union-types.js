"use strict";
(() => {
    let userID;
    userID = 1212;
    console.log('NUMBER', userID);
    userID = 'asd';
    console.log('STRING', userID);
    const greeting = (myText) => {
        (typeof myText === 'string') ? console.log(myText.toLocaleUpperCase()) : console.log(myText.toFixed(1));
    };
    greeting('Hey');
})();
