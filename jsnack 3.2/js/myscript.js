const tempArrey=[];
let sum = 0;
while (somma < 200){
    tempArrey.push(parseInt(prompt('Inserisci unn numero')));
    sum += tempArrey[tempArrey.length - 1];
    console.log ('La somma è: ', sum)
}