// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
   let totalBirds = 0
  for(let i = 0; i < birdsPerDay.length; i++){
   totalBirds += birdsPerDay[i]
  }
  return totalBirds
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const listVals = Object.values(birdsPerDay)
  listVals.pop()
  const startIndex = 7 * (week - 1)
  const endIndex = startIndex + 7
  let arrVal = listVals.slice(startIndex, endIndex)
  let weekBirds = 0

  for (let index = 0; index < arrVal.length; index++) {
    weekBirds += arrVal[index]
  }

return weekBirds

   
  throw new Error('Remove this line and implement the function');
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
   for (let index = 0; index < birdsPerDay.length; index += 2) {
      birdsPerDay[index]++
  }
  return birdsPerDay
  throw new Error('Remove this line and implement the function');
}
