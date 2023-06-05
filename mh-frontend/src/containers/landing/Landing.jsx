import React, { useEffect } from "react";
import "./landing.css";
import { Navbar, CTA } from "./../../components";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import landing from "./../../assets/landing.svg";

import axios from "axios";
import { useState } from "react";

const Landing = ({ scanError, setRepoURL }) => {
	let navigate = useNavigate();

	const handleSubmit = async () => {
		if (scanError === "") {
			navigate("/home");
		}
	};

	const moveToID = () => {
		navigate("#mainLanding");
	};

	const [showToast, setShowToast] = useState(true);

	return (
		<div className="landing">
			<Navbar />
			<section className="first" id="mainLanding">
				<div className="title-tagline">
					<h1 className="gradient-text">Upload. Scan. Analyze.</h1>
					<h2 className="tagline">
						A static code analysis toolkit to scan vulnerabilities
						blazing fast.
					</h2>
				</div>

				<div className="title-input grid">
					<span className="instruct justify-self-center">
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
					<div className="justify-self-end">
						<Checkbox />
					</div>
				</div>
				<CTA text="Start Analyzing" onClick={handleSubmit} />

				{scanError === "" || showToast === false ? (
					<></>
				) : (
					<div className="toast toast-end">
						<div className="alert alert-error">
							<button
								onClick={() => {
									setShowToast(false);
								}}
							>
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
							</button>
							<span>{scanError}</span>
						</div>
					</div>
				)}

				<div className="second">
					<img className="img-landing" src={landing} alt="landing" />
					<CTA text="Get Started" onClick={moveToID} />
				</div>
			</section>
		</div>
	);
};

export default Landing;
