function  totalSales(shart,pant,shoes){
    // Shart Price = 100tk
    const shartPrice=100;

    // Pant Price = 200tk
    const pantPrice=200;

    // Shoes Price = 500tk
    const shoesPrice=500;

    // here we check our input item is valid or non valid
    if(shart>-1 && pant>-1 && shoes>-1)
    {
        var TotalShartPrice=shartPrice*shart;
        var TotalPantPrice=pantPrice*pant;
        var TotalShoesPrice=shoesPrice*shoes;

        var totalPrice=TotalShartPrice+TotalPantPrice+TotalShoesPrice;
        return totalPrice; 
    }
    else{

        return'Invalid input';
    }
}

var sale=totalSales(5,10,1);
console.log(sale);