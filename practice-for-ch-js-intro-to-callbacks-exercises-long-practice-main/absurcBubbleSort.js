// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function absurdBubbleSort(arr) {
//     let sorted = true;
//     for(let i=0; i<arr.length-1; i++){
//         console.log(`hey whats i ${i}`);
//         reader.question(`Is ${arr[i]} greater than ${arr[i+1]}?`, function (answer){
//             if (answer === "yes"){
//                 sorted = false;
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             }

//             if (i == arr.length-1) {
//                 if (sorted === true){
//                     console.log("sorted is true")
//                     reader.close();
//                     return arr;
//                 } else {
//                     absurdBubbleSort(arr);
//                 }
//             }
//         })
//     }
// };

// let arr = [8,2,6,1,5]
// console.log(absurdBubbleSort(arr));

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell you whether el1 > el2; pass true back to the
  // callback if true; else false.
    reader.question(`Is ${el1} greater than ${el2}?`, function (answer){
        if (answer === "yes"){
            callback(true);
        } else {
            callback(false);
        }
    })  

}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

    if (i == arr.length-1){
        return outerBubbleSortLoop(madeAnySwaps);
    } else {
        askIfGreaterThan(arr[i], arr[i+1], (boolVal) => {
            if (boolVal === true) {
                madeAnySwaps = true;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            } else {
                madeAnySwaps = false;
                return innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
            }
        })
    }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
    let madeAnySwaps = true;

    function outerBubbleSortLoop(madeAnySwaps) {
        // Begin an inner loop if you made any swaps. Otherwise, call
        // `sortCompletionCallback`.
        if (madeAnySwaps){
            return innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
        } else {
            return sortCompletionCallback(arr);
        }
    }

    return outerBubbleSortLoop(madeAnySwaps);

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}


absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
