const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

function replacer(key, value) {
  return (typeof value === "string") ? undefined : value
}

const json = JSON.stringify(person, replacer);

console.log(json); // Should return: { id: 1, age: 25 }