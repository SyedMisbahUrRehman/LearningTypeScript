//usage of 'as' keyword for type casting aka explicit type casting

let myname:string = "Misbah"
// let updatedType = myname as string

let updatedType = myname as unknown as number

let moreUpdatedType = updatedType.toFixed

console.log(moreUpdatedType)
