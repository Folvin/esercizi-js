// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000


/* con if, else e else if*/
function calculateSalary(role) {
  if (role === 'ceo') {
    return 2200;
  }
  else if (role === 'manager' || role === 'cto') {
    return 1800;
  }
  else if (role === `developer`) {
    return 1500
  }
  else {
    return 1000
  }
}


/* con switch
function calculateSalary(role) {
  switch (role) {
    case `ceo`:
      return 2200;

    case `manager`:
    case `cto`:
      return 1800;

    case `developer`:
      return 1500;

    default:
      return 1000;
  }
} */
/*so che l'esercizio chiedeva if, else if ed else ma volevo mettere anche questo in pratica*/


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);