function formatVanityPlate(string) {
  let words = string.split(' ')
  words = words.map(word => word.toUpperCase())
  return words.join('')
}

const one = 'I like money'
console.log(`Number plate: ${ formatVanityPlate(one) }`)

const two = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlate(two) }`)


/*

Challenges:
1. Replace 'for' with '4'
2. Replace 'to' with '2'
3. Restrict to maximum of 12 characters

*/

function wordreplace(string) {
  words = string.replace('for', '4').replace('to', '2');
  return words
}


function formatVanityPlatev2(string) {
  let words = string.split(' ')
  words = words.map(word => wordreplace(word).toUpperCase())
  words = words.join('')
  if (words.length >= 12) {
    return 'Character limit exceeded. Please try again.'
  }
  else {
    return words
  }
}

const three = 'I like money'
console.log(`Number plate: ${ formatVanityPlatev2(three)}`)

const four = 'Cats for life'
console.log(`Number plate: ${ formatVanityPlatev2(four)}`)

const five = 'All to the meow for cats'
console.log(`Number plate: ${ formatVanityPlatev2(five)}`)
