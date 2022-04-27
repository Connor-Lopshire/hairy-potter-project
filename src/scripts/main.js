// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
// let mug = makePottery()
let smallBowl = makePottery("bowl", 3, 4)
// console.log(smallBowl)
let bigBowl = makePottery("bowl", 7, 14)
// console.log(bigBowl)
let smallVase = makePottery("vase", 2, 3)
// console.log(smallVase)
let bigVase = makePottery("vase", 6, 12)
// console.log(bigVase)
let plate = makePottery("plate", 1, 5)
// console.log(plate)
let firedSmallBowl = firePottery(smallBowl, 2350)
console.log(firedSmallBowl)
let firedBigBowl = firePottery(bigBowl, 1750)
console.log(firedBigBowl)

let firedSmallVase = firePottery(smallVase, 1500)
console.log(firedSmallVase)
let firedBigVase = firePottery(bigVase, 2500)
console.log(firedBigVase)
let firedPlate = firePottery(plate, 2190)
console.log(firedPlate)


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



