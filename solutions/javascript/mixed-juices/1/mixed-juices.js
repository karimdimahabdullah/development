// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
      return 1.5
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }

}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

export function limesToCut(wedgesNeeded, limes) {
  let value = 0
  let selectedItem;
  let totalLimes = 0
    while(wedgesNeeded > 0 && limes.length > 0){
    selectedItem = limes.shift()
    switch(selectedItem){
    case 'small':
      value = 6
      break
    case 'medium':
      value = 8
      break
    case 'large':
      value = 10
      break
  }
    wedgesNeeded -= value
    totalLimes += 1
  }
  return totalLimes
  //throw new Error('Remove this line and implement the function');
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()  
  }
  return orders;
}
