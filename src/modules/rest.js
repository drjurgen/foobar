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

export function post(data, endpoint, callback) {
	const postData = JSON.stringify(data);
	fetch(endpoint, {
		method: "post",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: postData,
	})
		.then((res) => res.json())
		.then((data) => callback(data));
}
