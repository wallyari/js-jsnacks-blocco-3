const userNumber = parseInt (prompt('Inserisci un numero'));
while  (isNaN(userNumber)){
    userNumber=parseInt(prompt('Inserisci un numero'));
}

if (userNumber ≥ 500){
    userNumber =500;
}

for( i=0 ; i< userNumber; i++){
    const tempArray = [];
    while (tempArray.length<10){
        tempArray.push(Math.floor(Math.random()*4528)+4);
    }
    console.log(tempArray);
}