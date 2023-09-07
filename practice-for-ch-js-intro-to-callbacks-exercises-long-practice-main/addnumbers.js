const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft == 0) {
        completionCallback(sum)
        reader.close();
        return;
    }

    reader.question("Pick another number to add", function (answer) {
        sum += parseInt(answer);
        numsLeft -= 1;
        console.log(`sum so far is ${sum}, numsleft is ${numsLeft}`);
        addNumbers(sum, numsLeft, completionCallback);
    })
    


}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));