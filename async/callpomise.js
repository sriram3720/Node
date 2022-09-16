console.log('before');


function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("varen de mappla");
            resolve({"id":1,"username":"mosh"});
        },2000);


    });
   
}

const P = getUser(1);

P.then((message)=>{
    console.log("the message is :",message);
});