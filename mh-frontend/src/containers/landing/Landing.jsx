import React, { useEffect } from "react";
import "./landing.css";
import { Navbar, CTA } from "./../../components";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Landing = ({ scanError, setRepoURL, setScanError }) => {
	let navigate = useNavigate();

	const handleSubmit = async () => {
		navigate("/home");
	};

	return (
		<div className="landing">
			<Navbar />
			<section className="first">
				<div className="title-tagline">
					<h1 className="gradient-text">Upload. Scan. Analyze.</h1>
					<h2 className="tagline">
						A static code analysis toolkit to scan vulnerabilities
						blazing fast.
					</h2>
				</div>

				<div className="title-input">
					<span className="instruct">
						Just paste your GitHub/Gitlab repository link.
					</span>

					<div className="input-repo">
						<label htmlFor="name"></label>
						<input
							placeholder="https://github.com/<username>/<repo-name>"
							type="text"
							id="repo-link"
							name="repo-link"
							required
							onChange={(e) => setRepoURL(e.target.value)}
						/>
					</div>
				</div>

				<CTA text="Start Ananlyzing" onClick={handleSubmit} />

				{scanError === "" ? (
					<></>
				) : (
					<div className="alert alert-error">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="stroke-current shrink-0 h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>{scanError}</span>
					</div>
				)}
			</section>
		</div>
	);
};

export default Landing;
