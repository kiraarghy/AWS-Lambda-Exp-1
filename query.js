require("dotenv").config();

function query(database, table) {
	var knex = require("knex")({
		client: "pg",
		connection: {
			host: process.env.HOST,
			user: process.env.USERNAME,
			password: process.env.PASSWORD,
			database: database
		}
	});

	return knex
		.select()
		.from(table)
		.then(data => data);
}

module.exports = query;