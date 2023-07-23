const p1 = new Promise((resolve) => {
    console.log("Asynchronous call 1...")
    setTimeout(() => resolve("call 1 finished"), 2000)
})

const p2 = new Promise((resolve) => {
    console.log("Asynchronous call 2...");
    setTimeout(() => resolve("call 2 finished"), 2000);
},);

Promise.all([p1,p2])
    .then(result => console.log(result))