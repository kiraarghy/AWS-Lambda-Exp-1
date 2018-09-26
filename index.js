const query = require("./query");

exports.handler = async function(event, callback) {
	const response = {
		statusCode: 200,
		body: {
			photos: await query("postgres", "photos"),
			content: await query("postgres", "content")
		}
	};
	return response;
};
