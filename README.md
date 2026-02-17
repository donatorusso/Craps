# Craps Simulator

A Craps game simulator written in JavaScript for a Development Test.

---

## Problem 

Write a program to simulate a number of games of craps, the user should be able to enter how many games they want played. 

When finished, the program should provide:

- The average number of rolls per game
- The highest number of rolls
- The lowest number of rolls
- The average winning percentage
- The number of wins
- The number of losses
- The most common roll

---

## How to Play Craps

Each game, the "shooter" rolls two dice:

1. If the numbers on the dice add up to **2, 3, or 12**, the shooter **loses**  
2. If the numbers on the dice add up to **7 or 11**, the shooter **wins**  
3. If the numbers on the dice add up to **4, 5, 6, 8, 9, or 10**, that sets the **points**  
   - The shooter continues to roll until the numbers match the points, then the shooter **wins**  
   - Or if a **7** is rolled the shooter **loses**

---

## Project structure

```
├── index.html
├── style.css
├── craps-engine.js 
├── craps-app.js 
└── craps-tests.js 
```
- **index.html**  
  Main HTML page
- **style.css**  
  CSS for layout and styling
- **craps-engine.js**  
  Contains game and simulation logic
- **craps-app.js**  
  Handles user input and displays results
- **craps-tests.js**  
  Basic tests using `console.assert`

---

## How to run

1. Clone the repository
2. Open `index.html` in a browser
3. Enter the number of games in the input field
   - By default, **1000 games** will be simulated if you do not change the input
   - **Maximum allowed:** 1,000,000 games to prevent the browser from freezing
4. You can either:
   - Click the **Simulate** button
   - Or press **Enter** while focused on the input field to start the simulation
5. The results will be displayed below the button

---

## Tests

Tests are optional.

To run them, uncomment this line in `index.html`:

```js
new CrapsTests().run();
```

Reload the page and open the browser console to see the results.

---

## Notes

This project is written in JavaScript to keep it simple and easy to run in any browser without extra dependencies.  

I chose OOP to make the code more readable and to separate responsibilities clearly:

- **Dice** handles rolling the dice  
- **Game** represents a single game of Craps  
- **Statistics** tracks results and calculates overall metrics  
- **CrapsSimulator** manages multiple games and coordinates everything  
