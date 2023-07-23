console.log("before");
getUser(1,(user) => {
    console.log(user)
    getRepositories(user.gitHubUserName, (repos) => console.log("Repos: ",repos))
});
console.log("after");

function getUser(id, callback) {
	setTimeout(() => {
        console.log("\nReading user from DB...")
		callback({ id, gitHubUserName: "yash" });
	}, 2000);
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log(`\nCalling GitHub API`);
        callback(['repo1', 'repo2', 'repo3'])
    })
}