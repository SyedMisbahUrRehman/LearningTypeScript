"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let orderPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 second bss");
        }, 1000);
    });
};
orderPizza().then((value) => {
    // console.log(value);   //smjh gya
})
    .catch(() => {
});
let getOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const val = yield orderPizza();
    console.log(val);
});
getOrder();
