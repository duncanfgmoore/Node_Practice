'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let highscore = 1;
    let counter = 0;
    let winner;
 for (var i = 0; i < arr.length; i++) {
     
     for (var j = i; j < arr.length; j++) {
         if (arr[i] === arr[j]){
             counter++
         }
         
         if(counter > highscore) {
             highscore = counter;
             winner = arr[i]    
         }
     }
     counter = 0;
 }
    
    return winner;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
