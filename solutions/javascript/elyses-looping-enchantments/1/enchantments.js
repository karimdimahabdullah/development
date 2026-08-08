// @ts-check

import { toastAnatomy } from "@ark-ui/react";

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card 
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let totalItems = 0;
  stack.forEach(element => {
  if(element === card){
    totalItems += 1
  }
 });
 return totalItems
}
/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let totalValue = 0;
  for(const value of stack){
    if(type){
      if(value % 2 === 0) totalValue += 1
    }else {
      if(value % 2 !== 0 ) totalValue += 1
    }
  }
  return totalValue
}
