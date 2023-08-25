function whilefactorial (number){
    let funtion = 1
    let num = 1 ;
    while(num <= number ){
        num++
        funtion = funtion * num ;
    }
    return funtion ;
}
const funtion = whilefactorial(4)
console.log(funtion)