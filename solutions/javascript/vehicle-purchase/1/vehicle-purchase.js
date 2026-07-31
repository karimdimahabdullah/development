// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind === 'car' || kind === 'truck')
  throw new Error('Remove this line and implement the function');
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const compareBothOptions = option1.localeCompare(option2)
  if(compareBothOptions === -1){
    return `${option1} is clearly the better choice.`
  }else if (compareBothOptions === 1){
    return `${option2} is clearly the better choice.`
  }else{
    return ` They are both a good choice.`
  }

  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const yearsOld1 = 3
  const yearsOld2 = 10
  if(age < yearsOld1){
    return originalPrice * 0.8
  }else if(age > yearsOld2){
    return originalPrice * 0.5
  }else if (age >= yearsOld1 && age <= yearsOld2){
    return originalPrice * 0.7
  }else {
    return 'Check yrs of car again'
  }
  throw new Error('Remove this line and implement the function');
}
