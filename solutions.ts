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

const getProperty = <T, K extends keyof T>(user: T, key: K) => {
    return user[key];
}
const user = {
    id: 1,
    name: "John Doe",
    age: 21
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
}
interface BookWithStatus extends Book {
    isRead: boolean;
}
const toggleReadStatus = (obj: Book): BookWithStatus => {
    return {
        ...obj,
        isRead: true
    }
}