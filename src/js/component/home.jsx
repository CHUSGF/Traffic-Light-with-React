import React, { useState } from "react";

//create your first component
const Home = () => {
	const [trafficLight, setTrafficLight] = useState("red");
	return (
		<div>
			<div className="traffic"></div>
			<div className="container">
				<div
					onClick={() => setTrafficLight("red")}
					className={
						"light red" + (trafficLight === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setTrafficLight("yellow")}
					className={
						"light yellow" +
						(trafficLight === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setTrafficLight("green")}
					className={
						"light green" +
						(trafficLight === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
