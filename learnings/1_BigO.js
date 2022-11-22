// What is Good Code?
// Good Code is Readable and Scalable

// Scalability can be measured with Big O
// Runtime - how long it takes to run instructions

// performance.now() logs time in ms
function logTimeInMs(func){
    t1 = performance.now();
    func();
    t2 = performance.now()
    console.log(t2-t1 + "ms")
}

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
    for (let n = 0; n < arr1.length; n++) { }
    for (let m = 0; m < arr1.length; m++) {
        for (let i = 0; i < arr1.length; i++) { }
     }
    // this is not O(n + n^2)
    // this is just O(n^2) because O(n^2)
    // because it is the dominant term
}