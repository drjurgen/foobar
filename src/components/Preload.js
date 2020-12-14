import React from "react"; // import React
import Skeleton from "react-loading-skeleton"; // import preload

export default function Preload() {
	return (
		<>
			<div className="beer-preload">
				<div className="preload-img">
					<Skeleton height={"100%"} />
				</div>
				<div className="preload-text">
					<div className="heading">
						<Skeleton count={1} height={40} />
					</div>

					<Skeleton count={4} />
					<Skeleton count={1} width={"40%"} />

					<div className="actions">
						<Skeleton count={1} height={40} />
					</div>
				</div>
			</div>

			<div className="beer-preload">
				<div className="preload-img">
					<Skeleton height={"100%"} />
				</div>
				<div className="preload-text">
					<div className="heading">
						<Skeleton count={1} height={40} />
					</div>

					<Skeleton count={4} />
					<Skeleton count={1} width={"40%"} />

					<div className="actions">
						<Skeleton count={1} height={40} />
					</div>
				</div>
			</div>

			<div className="beer-preload">
				<div className="preload-img">
					<Skeleton height={"100%"} />
				</div>
				<div className="preload-text">
					<div className="heading">
						<Skeleton count={1} height={40} />
					</div>

					<Skeleton count={4} />
					<Skeleton count={1} width={"40%"} />

					<div className="actions">
						<Skeleton count={1} height={40} />
					</div>
				</div>
			</div>
		</>
	);
}
