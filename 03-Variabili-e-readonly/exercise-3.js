const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student)
}

addStudent('Marco');
console.log(students);

/* le variabili con const non possono essere riassegnate quindi non è possibile fare students = "ciao" ma è comunque 
possibile utilizzare i metodi*/