//CREO UN ARRAY CONLISTA NUMERI
const listNumbers =[];
console.log(listNumbers)
//SALVO E SELEZIONO IN UNA VARIABILE IL CONTENTITRE HTML DELLA LISTA 
const listContainer= document.getElementById('count')
//DICHIARO UN FUNZIONE CHE GENERA UN NUMERO RANDOMICO
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//CREO UN CICLO DOVE GENERO 5 NUMERI RANDOMICI CHA VANNO DA 1 A 100
for(i=1; i <= 5; i++){
    console.log(i)
    //INVOCO LA FUNZIONE DEL NUMERO RANDOMICO E LA SALVO IN UNA VARIABILE
    let numRandom= getRndInteger(1, 100);
    //AGGIUNGO UNA CONDIZIONE CHE DETERMINA SE IL NUMERO RANDOMICO GENERATO NON è PRESENTE NELLA LISTNUBVER
    if(listNumbers.includes(numRandom)=== false){
        // SE LA CONDIZIONE è VERA ALLORA PUSHO IL NUMERO NELLA LISTA NUMERI
        listNumbers.push(numRandom)
    }
}
// APPENDO IL CONTENTUTO DELLA LISTA NEL CONTENITORE SUL DOM
listContainer.append(listNumbers);




//DICHIARO UNA FUNZIONE CHE AGGIUNGE LA CLASSE DISPLAY DOPO 30 SEC
setTimeout(myFunction, 3000);

function myFunction(){
    listContainer.classList.add('display');
    
}


//DICHIARO UNA FUNZIONE CHE FA' COMPARIRE I PROMPT  DOPO 31 SEC
setTimeout(myFunction2, 3100);

let listNumberUser=[];
console.log(listNumberUser);
function myFunction2(){

    for(i= 1; i <= 5; i++) {
    let numberUserComvert=prompt('inserisci il numero visualizzato prima nella lista')
    let num= Number(numberUserComvert);
    listNumberUser.push(num);
}
    
}



