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
    const sumValue =[5, 7, 8, 10, 45, 30] ;   
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