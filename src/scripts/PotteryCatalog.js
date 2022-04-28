let toBeSold = []

export const toSellOrNotToSell = (object) => {
  if (object.weight >= 6 && object.cracked === false) {
      object.price = 40
  }
  else if (object.weight < 6 && object.cracked === false) {
   object.price = 20
}
  if (object.cracked === false) {
    toBeSold.push(object)
  }
  return toBeSold
}
export const usePottery = () => {
 let sellList =   toBeSold.slice()
 return sellList
}