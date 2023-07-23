// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function movieRecommendation() {
	try {
		const customer = await getCustomer(1);
		console.log("Customer: ", customer);
		if (customer.isGold) {
			const topMovies = await getTopMovies();
			console.log("Top movies: ", topMovies);
			await sendEmail(customer.email, topMovies);
			console.log("Email sent...");
		}
	} catch (err) {
		console.log(err.message);
	}
}

movieRecommendation();

function getCustomer(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				name: "Yash",
				isGold: true,
				email: "email",
			});
		}, 4000);
	});
}

function getTopMovies() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(["movie1", "movie2"]);
		}, 4000);
	});
}

function sendEmail(email, movies) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 4000);
	});
}
