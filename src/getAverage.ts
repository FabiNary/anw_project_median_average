export const getAverage = (numberArray: number[]) => {
    return  Math.round(
        numberArray.reduce(
            (previousValue, currentValue) => {
                return previousValue + currentValue
            }) / numberArray.length)
}