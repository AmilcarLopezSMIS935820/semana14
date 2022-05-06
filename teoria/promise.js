const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Se resolvio la promesa'), 2000);
});

promise.then((response) => {
    console.log(response);
});