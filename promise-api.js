const p1 = new Promise((resolve, reject) => {
    console.log("Asynchronous call 1...")
    setTimeout(() => resolve(1), 2000)
})

const p2 = new Promise((resolve) => {
    console.log("Asynchronous call 2...");
    setTimeout(() => resolve(2), 2000);
},);

Promise.race([p1,p2])
    .then(result => console.log(result))
    .catch(err => console.log(err.message)) 