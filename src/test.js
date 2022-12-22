function spinWords(str) {
    return arr = str.split(' ').map(item => item.length >= 5 ? item.split('').reverse().join('') : item).join(' ')
}

// spinWords("Hey fellow warriors")
// spinWords("This is a test")
// spinWords("This is another test")
console.log(spinWords("Hey fellow warriors"))// => returns "Hey wollef sroirraw"
console.log(spinWords("This is a test"))// => returns "This is a test"
console.log(spinWords("This is another test"))//=> returns "This is rehtona test"