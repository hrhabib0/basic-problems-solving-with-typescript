const filterEvenNumbers = (numbers: number[]): number[] => {
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    return evenNumbers;
}

const reverseString = (word: string): string => {
    const reversedWord = word.split('').reverse().join("");
    return reversedWord;
}

type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
    if (typeof value === "string") {
        return "String";
    } else {
        return "Number";
    }
}