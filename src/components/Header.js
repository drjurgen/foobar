import React from "react"; // import React

export default function Header() {
	return (
		<header>
			<nav>
				<a href="index.html">
					<h1>FooBar</h1>
				</a>

				<div className="search-container">
					<input placeholder="SEARCH"></input>
					<div className="search-icon"></div>
				</div>
			</nav>
		</header>
	);
}
