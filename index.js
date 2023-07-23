console.log("before");
getUser(1,(user) => console.log(user));
console.log("after");

function getUser(id, callback) {
	setTimeout(() => {
        console.log("Reading user from DB...")
		callback({ id, gitHubUserName: "yash" });
	}, 2000);
}
