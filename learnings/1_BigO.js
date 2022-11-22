// performance.now() logs time in ms
// function logTimeInMs(func){
//     t1 = performance.now();
//     func();
//     t2 = performance.now()
//     console.log(t2-t1 + "ms")
// }

// What is Good Code?
// Good Code is Readable and Scalable. 
// Scalability is divided into two, 
// time (speed) and space (memory)

// Scalability can be measured with Big O

// PART 1. TIME COMPLEXITY

// As inputs grow, functions slow down, since some
// CPUs are faster, and some are slower we need Big O
// to objectively measure the speed of algorithms.

// O(1) Constant Time
// Only 1 operation regardless of the number of inputs
let arr = Array.from(Array(100).keys());

function constantTime(){
    arr[0] = 1; // O(1)
    arr[1]++; // O(1)
    console.log(1 + 1) // O(1)
} 

// O(n) Linear Time
// n operations for n number of inputs
function linearTime(){
    for (let i = 0; i < arr.length; i++){ // O(n)
        if (i===999) // O(n)
            console.log(); // O(n)
    }
}

// O(n^2) Quadratic Time
// n*n operations for n number of inputs
function quadraticTime(){
    for (let i = 0; i < arr.length; i++){ // O(n^2)
        for (let j = 0; j < arr.length; j++){ // O(n^2)
            console.log();
        }
    }
}

// Big O Rules; Worst Case, Remove constants, 
// Different terms for inputs, Drop non dominants

// Worst case
function f1(){
    for (let i = 0; i < arr.length; i++){
        if (i===1) {
            break;
        } // despite finishing early this is still O(n)
    } 
}

// Remove constants
function f2(arr1){

    for (let i = 0; i < arr1.length; i++){ }
    for (let j = 0; j < arr1.length; j++){ }
    // this is not O(2n) but still O(n)

    let half = arr1.length/2;
    for (let k = 0; k < half; k++) { }
    // this is not O(n/2) it is still O(n)
}

// Different terms for inputs
function f3(arr1, arr2){
    for (let n = 0; n < arr1.length; n++) { }
    for (let m = 0; m < arr2.length; m++) { }
    // this is not O(n) because there are two different inputs
    // it is O(n + m)

    for (let n = 0; n < arr1.length; n++) { 
        for (let m = 0; m < arr2.length; m++) { }
    }
    // this is not O(n + m) nor O(n^2)
    // this is O(n * m) because n and m are separate inputs
} 

// Drop non dominant terms
function f4(){
    for (let n = 0; n < arr.length; n++) { }
    for (let m = 0; m < arr.length; m++) {
        for (let i = 0; i < arr.length; i++) { }
     }
    // this is not O(n + n^2)
    // this is just O(n^2) because O(n^2)
    // because it is the dominant term
}

// O(n^3) and O(n!) means something is wrong with your code

// PART 2. SPACE COMPLEXITY
// Heap is where variables are stored
// Stack is where we track function calls

// O(1) Constant Space
// One memory for any number of inputs
function constantSpace(arr1){
    for (let n = 0; n < arr1.length; n++){
        console.log(n);
    }
    // This is not O(n) but it's O(1) Space
    // because no matter how big arr1 is
    // we only store 1 variable to the heap
    // which is n = 0
}

function linearSpace(arr2){
    for (let i = 0; i < arr2.length; m++){
        arr2[i] = "new memory";
    }
    // This is not O(1) Space anymore
    // because for each n input we create
    // additional memory
}
