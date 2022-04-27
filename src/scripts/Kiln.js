export const firePottery = (object, temp) => {
  object.fired = true
  if (temp > 2200 ) {
      object.craked = true
  }
  else {
      object.cracked = false
  }
  return object
}
