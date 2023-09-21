"use strict";
let parentFn = (fnArg) => {
    console.log("Im parent");
    fnArg('hey');
};
let callbackFn = (name) => console.log("Im callback", name);
parentFn(callbackFn);
