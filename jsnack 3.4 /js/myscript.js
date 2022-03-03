/**
 *  * creo un'altra funzione che controlla che la somma di due numeri x e y sia pari
    *
    * sommaPari(24214, 12451241) ==> true se la somma mi dà un numero pari
    *                            ==> false se la somma mi dà un numero dispari
    */

 function checkIfSumIsEven (x,y){
    sum = x + y;
    if((sum % 2 ) === 0){
        return true;
    } 

    return false;
}

console.log(checkSum(10,20));