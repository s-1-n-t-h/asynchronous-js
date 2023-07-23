console.log("before");

// Callbacks based approach
// getUser(
//     1,
//     (user) => {
//         console.log(user);
//         getRepositories(
//             user.gitHubUserName,
//             (repos) => {
//                 console.log("Repos: ", repos);
//                 getCommits(
//                     repos[0],
//                     (commits) => {
//                         console.log("\ncommits: ", commits);
//                     },
//                 );
//             },
//         );
//     },
// );

// Promises based approach
// getUser(1)
//         .then(user => getRepositories(user.gitHubUserName))
//         .then(repos => getCommits(repos[0]))
//         .then(commits => console.log("\ncommits: ", commits))
//         .catch(err => console.log("Error: ",err.message))

// console.log("after");

// Async and Await based approach
async function displayCommits() {
	try {
		const user = await getUser(10);
		const repos = await getRepositories(user.username);
		const commits = await getCommits(repos[0]);
		console.log(commits);
	} catch (err) {
		console.log(err.message);
	}
}

displayCommits();

function getUser(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("\nReading user from DB...");
			resolve({ id, gitHubUserName: "yash" });
		}, 2000);
	});
}

function getRepositories(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("\nCalling GitHub API");
			resolve(["repo1", "repo2", "repo3"]);
		}, 2000);
	});
}

function getCommits(commits) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("\nCalling GitHub API");
			resolve(commits);
		}, 2000);
	});
}
