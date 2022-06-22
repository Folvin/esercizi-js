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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let person = persons.find(person => person.id === id)
      if (person) resolve(person)
      else reject(new Error(`errore da promise, l'id indicato di persona (${id}) non esiste`))
    },2000)
  })
}
function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let job = jobs.find(job => job.id === id)
      if (job) resolve(job)
      else reject(new Error(`errore da promise, l'id indicato di lavoro (${id}) non esiste`))
    } ,5000)
  })
}
Promise.all([
  fetchPersonById(2),
  fetchJobById(3)
]).then(console.log)

