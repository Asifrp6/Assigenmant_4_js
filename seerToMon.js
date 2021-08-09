function seerToMon(seer){
    // here we check our input is less then or equal 0.
    if (seer <= 0) {
        return "Invalid input";
      } 
        return seer / 40;
      
}
 const seer=seerToMon(10);
console.log(seer);