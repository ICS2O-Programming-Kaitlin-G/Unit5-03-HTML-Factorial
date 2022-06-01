// Created by: Katie
// Created on: May 2022
// This file contains the JS functions for index.html

//this function calculates the factorial of a number inputted by the user using a do... while loop
function factorialClicked() {
  //getting input from user.
  let userNumber = parseInt(document.getElementById('user-number').value);
  //initializing counter
  let counter = 1
  //initializing factorial variable
  let factorial = 1
  
  //the do... while loop that will calculate the factorial to the user's number
  do {
    factorial = factorial * counter
    counter++ 
  } while (counter <= userNumber)
  
  //display information back to user.
  document.getElementById('factorial-number').innerHTML = "The factorial of the number you have inputted is: " + factorial
}