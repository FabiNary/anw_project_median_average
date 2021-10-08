import {getMedian} from "./getMedian"
import {getAverage} from "./getAverage"

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Bitte geben sie ihre Zahlen ein: ",  (answer:String) => {
    const numberArray: number[] = validate(answer)

    console.log(`Der Mittelwert ist ${getAverage(numberArray)}`)
    console.log(`Der Median ist ${getMedian(numberArray)}`)

    return
});

const validate = (consoleInput: String) => {

    const numberArray: number[] = consoleInput.split(",").map(it => parseInt(it))

    return numberArray
}