"use: strict";

const values = [1,2,3,5,6,8,9,11,12,14,15];

binarySearchRecursive(14,values.length-1);

function binarySearchRecursive(value, values, start, end) {
    if(start>end){
        return -1;
    }
    
    let middle = start + Math.floor((end-start)/2);
    console.log(`Leder efter ${value} fra ${start} til ${end} - midten er: ${middle}`);
    const lookat = values[middle];

    if(value === lookat){
        return middle;
    } else if (value>lookat){
        return binarySearchRecursive(value, values, middle+1, end);
    } else if (value<lookat){
        return binarySearchRecursive(value, values, start, middle-1);
    }

}
