function getodd(number){
    const oddNumber = [] ;
    for(let i = 0 ; i < number.length ; i++ ){
        const oddIndex = i ;
        const oddValue = number[oddIndex];
        if(oddValue % 2 !== 0 ){
            console.log(oddIndex, oddValue);
            oddNumber.push(oddValue) ;
        }
    }
    return oddNumber; 
}


const mynumber = [23, 34, 45, 36, 83, 36, 13,] ;
const oddNumber = getodd(mynumber) ;
console.log (oddNumber)

function getsum(number){
    let sum = 0 ;
    for(let i = 0 ; i < number.length ; i++){
        const index = i ;
        const value = number[index];
        sum = sum + value ;
        // console.log(index, value, sum)
    }
    return sum ;
}
const oddNumbersum = getsum(oddNumber)
console.log ('odd number sum :', oddNumbersum)