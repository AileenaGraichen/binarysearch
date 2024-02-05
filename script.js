"use strict";

const values = [3, 11, 1, 4, 7, 10].sort((a, b) => a - b); // Sorts array

function binarySearch(value, values) {
    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (values[middle] === value) {
            return middle; // Value found
        } else if (value < values[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1; // value not found
}

// Examples
console.log(binarySearch(10, values)); // Finds the index of 7 in the array
console.log(binarySearch(3, values)); // returns -1 as 5 is not in the array
