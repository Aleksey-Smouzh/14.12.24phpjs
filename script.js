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


// pentle for, while. do-while


for(let i =0; i <= 5; i++){
    console.log("i:"+i)
}

//for mozno zamenit while

let j = 0;
while (j<=5) {

console.log('j:'+j) 
j++
}


let k = 0
do{
    console.log('k:'+k)
k++

}while(k<=5)


    // filtr map operator

    let liczby = [1,"2",3,4,5,6,7,8,9,10]
let parzyste = liczby.filter(liczba => liczba % 2 ===0);

console.log(parzyste)


let potegi = liczby.map(liczba=>liczba*liczba)
console.log(potegi)