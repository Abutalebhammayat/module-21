function getsumnumber(numbered){
    let sum = 0 ;
    for( let i = 0 ; i < numbered.length ; i++){
        const sumindex = i ;
        const sumelement = numbered[sumindex];
        sum = sum + sumelement ;
        // console.log(sumindex , sumelement, sum);
    }
    return sum ;

}
    const sumValue =[23, 328, 84, 47, 487, 26, 39, 8, 374, 348, 39, 33, 48, 54, 75, 57, 5 ] ;   
    getsumnumber(sumValue); 


    function getOddNumber( number){
        const oddNumber = [] ;
        for(let i = 0 ; i < number.length ; i++){
            const oddIndex = i ;
            const oddElement = number[oddIndex] ;
            if(oddElement % 2 !== 0 ){
                console.log(oddIndex , oddElement);
                oddNumber.push(oddElement) ;
            } 
        }
        return oddNumber ;
    }

   
    const oddNumber =   getOddNumber(sumValue);
    console.log(oddNumber) ;
    const oddNumberSum = getsumnumber(oddNumber) ;
    console.log(oddNumberSum) ;

