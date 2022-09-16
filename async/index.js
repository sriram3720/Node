console.log('before');
const user = getuser(1);
console.log(user);
console.log('after');

function getuser(id){
    setTimeout(()=>{
        console.log("reading a user..");
        return {id: id,gitHubUsername:'mosh'};
    },2000);
}