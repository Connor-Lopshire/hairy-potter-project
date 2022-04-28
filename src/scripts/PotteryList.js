// need function that populates objects into html 
// accepts object as parameter 
// need to import usePottery() function 
//   for sttatement cycles through each object and pull key values and interpolate them into the html string
// import usePottery
//  declare functon potteryForSale
// within fiunction declare const currentInventory = UsePottery()
// let htmlStringInventory = openinging article tag to contain each listing
// for each object in currentInventory htmlString += <section class="pottery" id="pottery--1">
//     <h2 class="pottery__shape">Mug</h2>
//     <div class="pottery__properties">
//         Item weighs 3 grams and is 6 cm in height
//     </div>
//     <div class="pottery__price">
//         Price is $20
//     </div>
// </section>
// return htmlStringInventory
import { usePottery } from "./PotteryCatalog.js";
export const potteryList = () => {
    const currentInventory = usePottery()
    let htmlStringInventory = `<article class="potteryList" >`
    for (const object of currentInventory) {
        htmlStringInventory += `<section class="pottery" id="pottery--1">
          <h2 class="pottery__shape">${object.shape}</h2>
             <div class="pottery__properties">
   Item weighs ${object.weight} grams and is ${object.height} cm in height
     </div>
     <div class="pottery__price">
         Price is $${object.price}
     </div>
 </section>`}
htmlStringInventory += '</article>'
return htmlStringInventory
    }
