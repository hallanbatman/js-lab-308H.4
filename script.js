//CSV data:
//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";

// Refactoring individual variables for each cell, into creating an array of cells.
const cells = {
    cell1: "",
    cell2: "",
    cell3: "",
    cell4: "",
}

let currentCell = 0;

//console.log(csv);

// Loop through the characters of a given CSV string.
console.log(`*** Loop through CSV string ***`);

for (let i = 0; i < csv.length; i++) {
    let char = csv[i];
    //console.log(csv[i]);

    //if comma, move to cell.
    if (char === ",") {
        currentCell++;
        //console.log(`found comma`);
        //console.log(`Char found before comma, added to currentCell = ${currentCell}`);
    }

    //if new line, print the row and reset
    else if (char === "\n") {
        //console.log(`found line`);
        console.log(cells);
        currentCell = 0;
        cells.cell1 = "";
        cells.cell2 = "";
        cells.cell3 = "";
        cells.cell4 = "";
    }

    // Otherwise, add char to the current cell
    else {
        if (currentCell === 0) {
            cells.cell1 += char;
        } else if (currentCell === 1) {
            cells.cell2 += char;
        } else if (currentCell === 2) {
            cells.cell3 += char;
        } else if (currentCell === 3) {
            cells.cell4 += char;
        }
    }
}

// Log the last line (if no \n at the end)
// if (cell1 || cell2 || cell3 || cell4) {
//     console.log(cell1, cell2, cell3, cell4);
// }

// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// // console.log(cell1, cell2, cell3, cell4);

// assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.