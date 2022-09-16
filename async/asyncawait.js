async function displayCommits(){

    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getcommits(repos[0]);
        console.log(commits);


    }catch(err){
        console.log('error',err.message);
    }
    


}

displayCommits();

function getUser(id){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{

        console.log("reading database....");
        resolve({id:id,gitHubUsername:'ram'});
       },2000);

    });
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling github api ....");
            resolve(['repo1','repo2','repo3']);
        },2000);
    });
}

function getcommits(repos){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("calling github api ...");
            resolve(["commits"]);
        },2000);
    });
}