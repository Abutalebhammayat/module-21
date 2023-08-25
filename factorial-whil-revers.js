function whilRevers(number){
    let rturn = 1 ;
    let i = number ;
    while(i >= 1){
        rturn = rturn * i ;
        i--
        console.log(i)
    }
    return rturn ;
}
const wrevar = whilRevers(15);
console.log (wrevar) ;
