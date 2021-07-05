//write a function that will sort an array in ascending order

const bubbleSort = (inputArray) => {
    let len = inputArray.length;
    for (let i = 0; i < len; i++){
        for (let j = 0; j < len; j++){
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
            }
        }
    }
    return inputArray;
}

console.log(bubbleSort([2, 1, 6, 4, 3, 9, 8, 19, 16, 7, 5, 20]))

// efficient one with O(n^2) 
const bubbleSort2 = (inputArray) => {
    let len = inputArray.length;
    let checked;
    do {
        checked = true;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArray[j] > inputArray[j + 1]) {
                    let temp = inputArray[j];
                    inputArray[j] = inputArray[j + 1];
                    inputArray[j + 1] = temp;
                    checked = false;
                }
            }
        }
    }
    while (checked);
    return inputArray;
}
console.log(bubbleSort2([2, 1, 6, 4, 3, 9, 8, 19, 16, 7, 5, 20]))

const bubbleSort3 = (inputArray) => {
    let len = inputArray.length;
    let checked;
    while(!checked) {
        checked = true;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (inputArray[j] > inputArray[j + 1]) {
                    let temp = inputArray[j];
                    inputArray[j] = inputArray[j + 1];
                    inputArray[j + 1] = temp;
                    checked = false;
                }
            }
        }
    }
    return inputArray;
}

console.log(bubbleSort3([2, 1, 6, 4, 3, 9, 8, 19, 16, 7, 5, 20]))