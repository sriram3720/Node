const p = new Promise((resolve,reject)=>{
    let x = 1;
    if(x==2){
        resolve("successsful");

    }
    else{
        reject("failed");
    }

})

p.then((message)=>{
    console.log("the message is ",message);
});
p.catch((err)=>{
    console.log("the error is",err);
});