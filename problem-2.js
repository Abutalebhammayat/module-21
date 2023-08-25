function lep(numberOfLepYear){
    const lnumber = [];
    for(let i = 0 ; i < numberOfLepYear.length; i++ ){
        const index = i ;
        const element = numberOfLepYear[index];
        if(element % 4 === 0 ){
            console.log(index, element);
            lnumber.push(element) ;
        }

    }
    return lnumber;
}
const number =[2023,2024,2025,2028,2030] ;
const totalans =lep(number);
console.log('findLeapYear', totalans)



















