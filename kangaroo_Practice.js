'use strict';

const fs = require('fs');

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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    var first = x1;
    var second = x2;
    
    for (var i = 0; i < 10000; i++) {
        
        first = first + v1;
        second = second + v2;
        
        if (first === second) {
            console.log("We have a match");
        }
        
    }
    console.log("There were no matches");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const x1V1X2V2 = readLine().split(' ');
    const x1 = parseInt(x1V1X2V2[0], 10);
    const v1 = parseInt(x1V1X2V2[1], 10);
    const x2 = parseInt(x1V1X2V2[2], 10);
    const v2 = parseInt(x1V1X2V2[3], 10);
    let result = kangaroo(x1, v1, x2, v2);
    ws.write(result + "\n");
    ws.end();
}

