// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let arrToStr =  array1.join("")
  let arrToStr1 = array2.join("")
  return Number(arrToStr) + Number(arrToStr1)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valToString = String(value)
  const stringValToList = valToString.split('')
  stringValToList.reverse()
  const reverseString = stringValToList.join('')
  
  return valToString === reverseString
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const stringChange = String(input)

  if(stringChange === '' || stringChange === String(null) || stringChange === String(undefined)){
    return 'Required field'
  }else if(isNaN(stringChange) || Number(stringChange) < 1){
    return 'Must be a number besides 0'
  }else {
    return ''
  }
}
