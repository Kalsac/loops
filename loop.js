for (let i=1;i<=5;i++){
    console.log("Número:"+i);
}
console.log("-------------------------");

let contador =3;
while (contador >0){
    console.log("Tempo restante: "+ contador);
    contador--;
}
console.log("Acabou!");
console.log("-------------------------");

for (let i = 1;i<=4;i++){
    if(i%2===0){
        console.log(i+" é par");
    }else{
        console.log(i+" é ímpar");
    }
}
console.log("-------------------------");

for (let i=1;i<=10;i++){
    if(i===4){
        break;
    }
console.log("Contando:"+i);
}
console.log("-------------------------");

for (let i=1;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log("i="+i);
}
console.log("-------------------------");

