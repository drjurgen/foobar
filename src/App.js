import React, { useState, useEffect } from "react"; // import React
import Header from "./components/Header"; // import Header component
import Main from "./components/Main"; // import Main component
import { get, post } from "./modules/rest"; // import REST operations
import "./App.scss"; // import SASS

function App() {
	const [facts, setFacts] = useState([]);
	const [beerTypes, setBeerTypes] = useState([]);
	const [order, setOrder] = useState({
		totalPrice: 0,
		beers: [],
		paymentInfo: "",
		orderInfo: "",
	});
	const [orderInfo, setOrderInfo] = useState();

	useEffect(() => {
		if (order.paymentInfo !== "") {
			const orderDetails = { ...order };
			orderDetails.orderInfo = orderInfo;
			setOrder(orderDetails);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [orderInfo]);

	function postOrder() {
		post(order.beers, "https://foobar-data.herokuapp.com/order", logOrder);

		function logOrder(data) {
			const orderDetails = { ...order };
			orderDetails.paymentInfo = data;
			console.log(data);
			setOrderInfo(data);
		}
	}

	function setOrderState(order) {
		setOrder(order);
	}

	useEffect(() => {
		// get("https://foobar-data.herokuapp.com/", setFacts);
		get("https://foobar-data.herokuapp.com/beertypes", setBeerPrice);
		function setBeerPrice(data) {
			data.forEach((beer) => {
				Object.defineProperty(beer, "price", {
					value: 30,
					writable: true,
				});
			});
			setBeerTypes(data);
		}

		const fetchInterval = setInterval(() => {
			get("https://foobar-data.herokuapp.com/", setFacts);
		}, 2000);
		return () => clearInterval(fetchInterval);
	}, []);

	return (
		<div className="App">
			<Header />
			<Main facts={facts} beerTypes={beerTypes} order={order} setOrder={setOrderState} postOrder={postOrder} />
		</div>
	);
}

export default App;
