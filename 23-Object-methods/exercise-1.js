const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

Object.keys(keyOfPerson).forEach(keyOfPerson => {
  console.log(`${keyOfPerson}: ${person[keyOfPerson]}`)
})
// Print values of person using Object.keys


