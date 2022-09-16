const p =  Promise.resolve({ id:1});

p.then(result => console.log(result));


const z = Promise.reject(new Error("reson for rejection...."));

z.catch(error=> console.log(error));