'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    
    arr.sort();
    
    var maxSum = 0;
    for (var i = 1; i < arr.length; i++) {
        var maxSum = maxSum + arr[i];
    }
    
    var minSum = 0;
    for (var j = 0; j < arr.length - 1; j++) {
        
        var minSum = minSum + arr[j];
    }
    console.log(minSum + " " + maxSum)
    
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
