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

//INVOCOUNA FUNZIONE CHE AGGIUNGE LA CLASSE DISPLAY DOPO 30 SEC
function myFunction(){
    listContainer.classList.add('display');
    
}


//DICHIARO UNA FUNZIONE CHE FA' COMPARIRE I PROMPT  DOPO 31 SEC
setTimeout(myFunction2, 3100);

//CREO UN ARRAY PER I NUMERI SCELTI DALL'UTENTE ATTRAVERSO I PROMPT
let listNumberUser=[];
console.log(listNumberUser);

//INVOCO LA FUNZIONE CHE FA' COMPARIRE I PROMPT  DOPO 31 SEC
function myFunction2(){

    for(i= 1; i <= 5; i++) {
    let numberUserComvert=prompt('inserisci il numero visualizzato prima nella lista')
    let num= Number(numberUserComvert);
    listNumberUser.push(num);
}
    
}


//DICHIARO UNA FUNZIONE CHE STAMPA ATTRAVERSO UN ALERT IL RISULTATO
setTimeout(myFunction3, 3200);

    function myFunction3(){

    if(listNumberUser.includes(num) === listNumbers.includes(numRandom)){
        alert('hai Vinto')
    }else{
        alert('Hai Perso')
    }

}





