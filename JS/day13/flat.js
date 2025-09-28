// Flat method

// [1,2,[3,4,[5]]]

// [1,2,3,4,5]

// useful while working or fetching data using APIs

const nestedArray = [1,[2,3],[4,[5,6]]]

// const flattenedArray = nestedArray.flat(1)
const flattenedArray = nestedArray.flat(2)

console.log(flattenedArray);