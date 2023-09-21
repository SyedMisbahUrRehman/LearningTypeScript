let orderPizza = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 second bss")

        }, 1000);
    })
}

orderPizza().then((value) => {
    // console.log(value);   //smjh gya
})
.catch(()=>{

})

let getOrder= async () => {
    const val= await orderPizza()
    console.log(val);
    
    
}
getOrder()