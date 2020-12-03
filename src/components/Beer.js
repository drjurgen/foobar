import React from "react"; // import React

export function Beer({ facts, beerInfo, showBeer }) {
	const beerImg = {
		backgroundImage: `url(https://carlsbergdanmark.dk/media/39506/1664_blanc_bottle_wcap_wet_lowres.png)`,
	};

	function passToMain() {
		showBeer(beerInfo);
	}

	return (
		<article className="beer">
			<div className="beer-img" style={beerImg}></div>

			<div className="beer-info">
				<h3>{beerInfo.name}</h3>
				<div className="beer-type">
					<h3>30 DKK</h3>
					<p>{beerInfo.category}</p>
				</div>

				<div className="beer-desc">
					<p>{beerInfo.description.overallImpression}</p>
					<button className="read-more" onClick={passToMain}>
						Read more
					</button>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" placeholder="1" min="0" />
						<button className="minus"></button>
						<button className="plus"></button>
					</div>

					<button className="add"></button>
				</div>
			</div>
		</article>
	);
}

export function NotAvailable({ facts, beerInfo }) {
	const beerImg = {
		backgroundImage: `url(https://carlsbergdanmark.dk/media/39506/1664_blanc_bottle_wcap_wet_lowres.png)`,
	};

	return (
		<article className="beer" style={{ opacity: 0.4, boxShadow: "none" }}>
			<div className="beer-img" style={beerImg}></div>

			<div className="beer-info">
				<h3>{beerInfo.name}</h3>
				<div className="beer-type">
					<h3>NOT AVAILABLE</h3>
				</div>

				<div className="beer-desc">
					<p>{beerInfo.description.overallImpression}</p>
					<button className="read-more" disabled style={{ cursor: "initial" }}>
						Read more
					</button>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" placeholder="1" min="0" disabled />
						<button className="minus" disabled style={{ cursor: "initial" }}></button>
						<button className="plus" disabled style={{ cursor: "initial" }}></button>
					</div>

					<button className="add" disabled style={{ cursor: "initial" }}></button>
				</div>
			</div>
		</article>
	);
}

// export default { Beer, NotAvailable };
