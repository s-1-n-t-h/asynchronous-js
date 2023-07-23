console.log("before");
getUser(
    1,
    (user) => {
        console.log(user);
        getRepositories(
            user.gitHubUserName,
            (repos) => {
                console.log("Repos: ", repos);
                getCommits(
                    repos[0],
                    (commits) => {
                        console.log("\ncommits: ", commits);
                    },
                );
            },
        );
    },
);
console.log("after");

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log("\nReading user from DB...");
                resolve({ id, gitHubUserName: "yash" });
            },
            2000,
        );
    },);
}

function getRepositories(username) {
    new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`\nCalling GitHub API`);
                resolve(["repo1", "repo2", "repo3"]);
            },
            2000,
        );
    },); 
}

function getCommits(commits) {
    new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(`\nCalling GitHub API`);
                resolve(commits);
            },
            2000,
        );
    },);
}
