const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;
person2.firstName = "simon"

// Modifica la proprietà "firstName" di person2 in "Simon"

console.log(person1);
console.log(person2);


/* il motivo per la quale modificando la proprietà in person2 si modifica anche in person1 è che entrambe le variabili
puntano alla stessa locazione di memoria dell'object quindi quando andiamo a riassegnare la proprietà dell'object da
person2 in realtà non stiamo modificando person2 ma stiamo cambiando il valore della proprietà dell'object che è puntato
da entrambe le variabili */