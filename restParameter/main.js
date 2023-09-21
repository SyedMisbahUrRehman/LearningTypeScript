"use strict";
let restParam = (name) => {
    console.log(name);
};
restParam("Misbah");
//mgr uppr wala fn srf 1 naam log krna allow krega
//now we will try using rest parameter (...)
let restParams = (...names) => {
    console.log(names);
};
restParams("Musab", "Ahmed");
