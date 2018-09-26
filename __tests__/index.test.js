const query = require("../query");
const index = require("../index");

jest.mock("../query");

describe("index", () => {
	it("returns correct response when promises resolve", () => {
		query.mockReturnValueOnce("beep").mockReturnValueOnce("boop");
		return index
			.handler()
			.then(data =>
				expect(data).toEqual({
					body: { content: "boop", photos: "beep" },
					statusCode: 200
				})
			);
	});
});
