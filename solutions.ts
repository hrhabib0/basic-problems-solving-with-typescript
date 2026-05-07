const filterEvenNumbers = (numbers: number[]): number[] => {
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    return evenNumbers;
}