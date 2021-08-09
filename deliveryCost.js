function deliveryCost(TshartNumber){
   
    // here we crate a condition for check positive value
    if(TshartNumber>-1){
        if(TshartNumber<=100)
        {
            var DeliverChargeType_A=TshartNumber*100;
            return DeliverChargeType_A;
        }
       else if(TshartNumber>100 && TshartNumber<=200)
        {
            var first100Shirt=100*100;
            var othersShart=(TshartNumber-100)*80;
            var DeliverChargeType_B=first100Shirt+othersShart;
            return DeliverChargeType_B;
        }
        else if(TshartNumber>200)
        {
            var fst100Shirt=100*100;
            var second100shart=100*80;
            var lastsharts=(TshartNumber-200)*50;
            var DeliverChargeType_C=fst100Shirt+second100shart+lastsharts;
            return DeliverChargeType_C;
        }
    }
    else
    return 'Invalid Input';  
}

const Tamount=deliveryCost(101);
console.log(Tamount);