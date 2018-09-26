require("dotenv").config();
function query1() {
	console.log("hit here");
	var knex = require("knex")({
		client: "pg",
		connection: {
			host: process.env.HOST,
			user: process.env.USERNAME,
			password: process.env.PASSWORD,
			database: "postgres"
		}
	});

	return knex
		.select()
		.from("photos")
		.then(data => data);
}

function query2() {
	var knex = require("knex")({
		client: "pg",
		connection: {
			host: process.env.HOST,
			user: process.env.USERNAME,
			password: process.env.PASSWORD,
			database: "postgres"
		}
	});

	return knex
		.select()
		.from("content")
		.then(data => data);
}

exports.handler = async function(event, callback) {
	const response = {
		statusCode: 200,
		body: {
			photos: await query1(),
			content: await query2()
		}
	};
	return response;
};
