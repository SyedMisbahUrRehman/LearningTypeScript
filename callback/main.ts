let parentFn = (fnArg: Function) => {

    console.log("Im parent");
    fnArg('hey')
}

let callbackFn = (name : string) =>  console.log("Im callback", name);



parentFn(callbackFn)