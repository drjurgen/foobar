export function get(callback) {
  fetch("https://foobar-data.herokuapp.com/", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}
