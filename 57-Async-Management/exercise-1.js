const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    let person = persons.find(person => person.id === id)  
    if (person) {
      resolve(person)
    }
    else {
      reject(new Error(`errore da promise, l'id indicato (${id}) non esiste`))
    }
  })
}

console.log(fetchPersonById(1))
console.log(fetchPersonById(2))
console.log(fetchPersonById(3))

/* console.log(fetchPersonById(4)) */ 
/* questo darebbe l'errore in reject perche ho indicato che quando viene passato come parametro un id inesistente
al posto di fare il resolve con un undefined mi fa il reject 
edit: mi sono appena accorto che me lo chiedeva nell'esercizio dopo XD*/
