import React from "react"; // import React

export default function SingleView({ showBeer, info }) {
	return (
		<section className="singleview-bg show-singleview">
			<article className="singleview-container">
				<div className="singleview-image"></div>

				<h2>{info.name}</h2>
				<div className="generic-info">
					<h2>30 DKK</h2>
					<p>
						{info.alc}%, {info.category}
					</p>
				</div>

				<div className="beer-desc">
					<h3>Overall impression</h3>
					<p>{info.description.overallImpression}</p>

					<h3 className="mouthfeel">Mouthfeel</h3>
					<p>{info.description.mouthfeel}</p>
				</div>

				<div className="add-to-cart">
					<div className="beer-amount">
						<input type="number" placeholder="1" min="0" />
						<button className="minus"></button>
						<button className="plus"></button>
					</div>

					<button className="add"></button>
				</div>

				<button onClick={showBeer} className="close-singleview"></button>
			</article>
		</section>
	);
}
