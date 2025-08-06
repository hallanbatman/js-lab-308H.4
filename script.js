// #### R-ALAB 308.4.1: | Working with Data Collections ####

//##########################################################

// ✅ # Part 1: Refactoring Old Code #

//##########################################################

// ✅ Part 2: Expanding Functionality #

// ✅ Declare a variable that stores the number of columns in each row of data within the CSV.
// ✅ Instead of hard-coding four columns per row, expand your code to accept any number of columns.
// ✅ This should be calculated dynamically based on the first row of data.
// ✅ Store your results in a two-dimensional array.
// ✅ Each row should be its own array, with individual entries for each column.
// ✅ Each row should be stored in a parent array, with the heading row located at index 0.
// ✅ Cache this two-dimensional array in a variable for later use.

let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Refactoring individual variables for each cell, into creating an array of cells.
let table = []
let cells = [""]
let currentCell = 0;

for (let i = 0; i < csv.length; i++) {// Loop through the characters of a given CSV string.
    let char = csv[i];

    if (char === ",") { //if comma, move to cell.
        currentCell++;
        if (cells.length <= currentCell) {
            cells.push("");// add new cell if it doesn't exist yet
        }
    }

    //if new line, print the row and reset
    else if (char === "\n") {//console.log(`found line`);
        table.push([...cells]); //Push copy to table
        cells = [""]//reset cells
        currentCell = 0; //Reset currentCell    
    }

    else {// Otherwise, add char to the current cell
        cells[currentCell] += char;
    }

    if (csv.length - 1 == i) { // If last char in string push final cells
        table.push([...cells]);//tempCells.push(...cells);
    }
}

console.log(table);

//##########################################################

// ✅ Part 3: Transforming Data

// ✅ For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
// ✅ - Convert these keys to all lowercase letters for consistency.
// ✅ Store these objects in an array, in the order that they were originally listed.

let headers = [];

for (let i = 0; i < table[0].length; i++) {
    //console.log(table[0].length)// How many items in the header
    //console.log(table[0][i])// Header items
    headers.push(table[0][i].toLowerCase());// Convert header items to lowercase
}

let rowObjects = [];

for (let i = 1; i < table.length; i++) {
    let row = table[i];
    //console.log(table[i])// Row of objects
    let obj = {};

    for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
    }

    rowObjects.push(obj);
}

console.log(rowObjects);

//##########################################################

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