console.log(1);
console.log(2);
// console.log(3);
// setTimeout(() => {
//     console.log(3);
// })
// setTimeout(() => {
//     console.log(3);
// }, 2000);
console.log(4);
console.log(5);
console.log(6);


let num = 0;

const clockID = setInterval(() =>{
   num++;

    if(num > 6){
        clearInterval(clockID)
    }
    console.log(clockID, num);
}, 2000);