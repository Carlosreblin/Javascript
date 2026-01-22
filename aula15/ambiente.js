let num = [5, 8, 2, 9, 3];
console.log(num);
num.push(7);
console.log(num);
num.sort();
console.log(num);
console.log(num.length);
/*
for (let index = 0; index < num.length; index++) {
    console.log(num[index]);
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor de ${num}`);
}
let pos = num.indexOf(8);
num.indexOf(4);