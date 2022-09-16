console.log('before');
getUser(1,function(user){
    console.log('user:',user);

});
console.log('after');

function getUser(id,callback){
    setTimeout(()=>{
        console.log("reading a user ...");
        callback({ id: id,githubname:"ram"});
    },2000)
    ;
}