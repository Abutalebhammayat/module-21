function toTheFeet (inchs){
    const convator = inchs / 12 ;
    return convator ;

}
const myinches = 273;
const totalFeet = toTheFeet(myinches);
console.log(totalFeet)


function mailes (mToklo){
    const convat = mToklo * 1.60934;
    return convat; 
}
const maymail = 3.7 ;
const kilometer = mailes(maymail)
console.log("kilometre :", kilometer)