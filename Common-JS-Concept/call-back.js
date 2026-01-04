function buyPen(matador, price){
matador(price);
}

const matador=function(price){
    console.log("I bought matador pen", price)
}
const matador2=function(price){
    console.log("I bought matador2 pen", price)
}
const goodLuck=function(price){
    console.log("I bought good luck pen", price)
}

buyPen(matador, 20)
buyPen(matador2, 10)
buyPen(goodLuck, 15)