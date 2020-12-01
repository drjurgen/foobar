export function get(endpoint, callback) {
	fetch(endpoint, {
		method: "get",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	})
		.then((e) => e.json())
		.then((data) => callback(data));
}
