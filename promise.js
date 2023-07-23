const p = new Promise((resolve, reject) => {
	setTimeout(
		() =>
			//resolve(1), // pending => fulfilled / resolved
			reject(new Error("Some Error Occured")),
		2000,
	); // pending => rejected
});

p.then((response) => console.log("Result", response)).catch((err) =>
	console.log(err),
);
