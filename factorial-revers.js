function factorialRevers(number){
    let reslt = 1
    for( let i = number ; i >= 1 ; i-- ){
        reslt =reslt * i
        console.log(i);
    }
    return reslt ;
}
 const number = 6 ;
const fact = factorialRevers(number) ;
console.log("factorial Revers ", number, ":", fact);