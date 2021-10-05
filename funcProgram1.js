////Learn About Functional Programming
/*
Functional programming is a style of programming where solutions are simple,
isolated functions, without any side effects outside of the function scope:
INPUT -> PROCESS -> OUTPUT

functional programming is about:
1. Isolated functions - there is no dependence on the state of the program,
   which includes global variables that are subject to change
2. Pure functions - the same input always gives the same output
3. Functions with limited side effects - any changes, or mutations, to the state
   of the program outside the function are carefully controlled
*/
////////////////////////////////////////////////////////////////////////////////
/*
The members of freeCodeCamp happe to love tea.

In the code editor, the prepareTea and getTea functinos are already defined for
you. Call the getTea function to get 40cups of the team, and store them in the
tea4TeamFCC variable.
*/

/*
Function that returns a string representing a cup of green tea
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of a
specific type of tea).
*/
/*
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups +=1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

tea4TeamFCC = getTea(40);
*/
////////////////////////////////////////////////////////////////////////////////
