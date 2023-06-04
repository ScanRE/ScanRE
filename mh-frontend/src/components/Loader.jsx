import React, { useState, useEffect } from "react";

const Loader = () => {
	const [fact, setFact] = useState("");
	const facts = [
		"Scanning code vulnerabilities is like detective work for programmers.",
		"Code scanning helps find hidden security loopholes and saves the day.",
		"Vulnerability scanning can unveil software weaknesses before they become villains.",
		"Uncovering code vulnerabilities is a superhero power every developer needs.",
		"Scanning code vulnerabilities is like hunting bugs in a digital treasure hunt."
	];

	useEffect(() => {
		let currentIndex = 0;

		const interval = setInterval(() => {
			setFact(facts[currentIndex]);
			currentIndex = (currentIndex + 1) % facts.length;
		}, 5000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="w-full h-full flex-1 items-center justify-center">
			<div className="flex items-center justify-center h-screen">
				<div className="flex flex-col items-center">
					<span className="loading loading-infinity loading-lg w-24 h-24 text-primary"></span>
					<div className="text-gray-800">Fun Fact</div>
					<div className="text-gray-700 mb-4 font-bold">{fact}</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
