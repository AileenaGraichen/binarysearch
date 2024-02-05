"use strict";

const values = [3, 11, 1, 2, 7, 10].sort((a, b) => a - b); // Sørg for at arrayet er sorteret

function binarySearch(value, values) {
    let start = 0;
    let end = values.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (values[middle] === value) {
            return middle; // Værdien fundet
        } else if (value < values[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1; // Værdien ikke fundet
}

// Eksempler på brug:
console.log(binarySearch(7, values)); // Finder indexet for 7 i arrayet
console.log(binarySearch(5, values)); // Returnerer -1, da 5 ikke findes i arrayet
