// line by line chlne ko synchronous kehte hein


// var abc = () => {
//     console.log("Took 1 sec to print");
// }
// setTimeout(abc, 1000)


let order = (cb: () => void) => {
    setTimeout(() => {
        cb()

    }, 5000
    )

}
let ringbell = () => {
    console.log("Ajao bhaee pizza khalo");
}

order(ringbell)
