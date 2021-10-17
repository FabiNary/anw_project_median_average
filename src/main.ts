import {getMedian} from "./getMedian"
import {getAverage} from "./getAverage"
import { hasUncaughtExceptionCaptureCallback } from "process";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Bitte geben sie ihre Zahlen ein: ",  (answer:String) => {
    try {
        const numberArray: number[] = validate(answer)

        console.log(`Der Mittelwert ist ${getAverage(numberArray)}`)
        console.log(`Der Median ist ${getMedian(numberArray)}`)
    }

    catch(e) {
        console.error(e)
    }

});

const validate = (consoleInput: String) => {

    if(consoleInput === "")
        throw "Es muss eine Eingabe erfolgen"

    return consoleInput.split(",").map(it => it.trim()).map((it) => {

            if(isNaN(parseInt(it)))
                throw "Es sind nur Ganzzahlen erlaubt"

            if(parseInt(it) !== parseFloat(it))
                throw "Komma seperierte Werte sind nicht erlaubt"

            return parseInt(it)
        }
    )
}