// console.log(1);
// console.log(2);



// console.log(3);
// doSomething();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// setTimeout(doSomething);
// setTimeout(doSomething, 2000);
// setTimeout(() => {
//     console.log('anik akon acay');
// }, 2000);

// console.log(4);
// console.log(5);
// console.log(6);


// function doSomething(){
//     console.log(3);
// }


// --------------------------------


const myLoader = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random();
        if (success <= 0.5) {
            resolve(success);
        } else {
            reject(success);
        }
    })
}


// myLoader()
// .then( data => console.log('resolved data', data))
// .catch(err => console.log('reject data', err))



// fetch('')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))


// async function loadData(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await res.json();
//     console.log(data);
// }

// loadData();


// const loadData2 = async() =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await res.json();
//     console.log(data);
// }

// loadData2();