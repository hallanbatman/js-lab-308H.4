# R-ALAB 308.4.1: Working with Data Collections

## Objectives
- Use arrays to store ordered lists of data.
- Use objects to store keyed lists of data.
- Use conditional logic to process data.
- Use loops to handle repetitive tasks.
- Transform data according to specifications.

## ✅ Part 1: Refactoring Old Code

## ✅ Part 2: Expanding Functionality

- ✅ Declare a variable that stores the number of columns in each row of data within the CSV.
- ✅ Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

- ✅ Store your results in a two-dimensional array.
    - ✅ Each row should be its own array, with individual entries for each column.
    - ✅ Each row should be stored in a parent array, with the heading row located at index 0.
- ✅ Cache this two-dimensional array in a variable for later use.

## ✅ Part 3: Transforming Data

While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself. When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.

In order to make it more obvious what the data is, we will transform our rows into objects.

Implement the following:
- ✅ For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
     - ✅ Convert these keys to all lowercase letters for consistency.
- ✅ Store these objects in an array, in the order that they were originally listed.
- ✅ Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.

Important: While this functionality can be built into the original CSV parser you built in Part 2, we are intentionally creating two different algorithms to test different skillsets. Please leave these sections separate even if it would be more efficient to combine them.

## Part 4: Sorting and Manipulating Data

It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.

Using array methods, accomplish the following tasks, in order upon the result of Part 3:

- Remove the last element from the sorted array.
- Insert the following object at index 1:
    - { id: "48", name: "Barry", occupation: "Runner", age: "25" }
- Add the following object to the end of the array:
    - { id: "7", name: "Bilbo", occupation: "None", age: "111" }

Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

## Part 5: Full Circle

As a final task, transform the final set of data back into CSV format.

There are a number of ways to do this; be creative!

Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.