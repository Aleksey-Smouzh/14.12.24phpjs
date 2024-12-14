let  a = 3
let tab =[4, "5"]
console.log(tab)

tab.push(6) // dodae na koniec tablicy wartosc
tab.unshift(a) // dadae na poczatak
console.log(tab)

tab.pop()//usun perwsci element
tab.shift()//usun ostatni element
console.log(tab)

// tab.forEach((liczb, index))=>{
//     console.log('element' +index+ `$(tab)`)
// }//iteracia elementow


// obiekty_________________________________

let obiekt1={
    imie1: "olol",
    imie2: "ilal",
    wiek: 100
};

obiekt1.miasto="Gdynia"

console.log(obiekt1)

for(let klucz in obiekt1){
    console.log(klucz+ ':' +obiekt1[klucz])
}