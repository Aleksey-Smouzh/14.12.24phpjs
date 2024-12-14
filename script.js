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