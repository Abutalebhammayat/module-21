function factorial(number){
    let funtion = 1 ;
    for(let i = 1 ; i <=number ; i++ ){
        funtion = funtion * i;
    }
    return funtion ;
}

const funtion = factorial(9)
console.log(funtion)