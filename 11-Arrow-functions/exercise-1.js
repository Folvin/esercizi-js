
const sum = (a, b) => a + b

const log = value => console.log(value)
/* essendo che in questo caso era irrilevante per il funzionamento della funzione qui non ero sicuro se la consegna 
voleva anche testare se sapessi che facendo cosi nella funzione log quel console.log(value) è un return cosa che nella 
function expression originale non c'era quindi lascio qua sotto la versione che non fa il return
const log = value => {console.log(value)} */

log(sum(2, 5));