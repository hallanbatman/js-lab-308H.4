// #### R-ALAB 308.4.1: | Working with Data Collections ####

// ✅ # Part 1: Refactoring Old Code #
// Part 2: Expanding Functionality #

// Tasks:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

//CSV data:ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Refactoring individual variables for each cell, into creating an array of cells.
let tempCells = []
let permCells = []
let currentCell = 0;

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

for (let i = 0; i < csv.length; i++) {// Loop through the characters of a given CSV string.
    let char = csv[i];
    //console.log(csv[i]);

    if (char === ",") { //if comma, move to cell.
        currentCell++;
        //console.log(`found comma`);
        //console.log(`Char found before comma, added to currentCell = ${currentCell}`);
    }

    //if new line, print the row and reset
    else if (char === "\n") {//console.log(`found line`);
        tempCells.push(cell1, cell2, cell3, cell4); //push cells to Array tempCells
        currentCell = 0; //Reset currentCell
        permCells.push(tempCells); //Push tempCells to permCells
        tempCells = []; //Reset Array tempCells
        //Reset Object individual Cells
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    }

    else {// Otherwise, add char to the current cell
        if (currentCell === 0) {
            cell1 += char;
        } else if (currentCell === 1) {
            cell2 += char;
        } else if (currentCell === 2) {
            cell3 += char;
        } else if (currentCell === 3) {
            cell4 += char;
        }
    }

    if (csv.length - 1 == i) { // If last char in string print final cells
    console.log(tempCells);
    }
}

console.log(permCells);
//console.log(tempCells);

// #### Previous Assigment | 308H.3 ####
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// // console.log(cell1, cell2, cell3, cell4);
// assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.