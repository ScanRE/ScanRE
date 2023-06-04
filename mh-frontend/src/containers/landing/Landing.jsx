import React, { useEffect } from "react";
import "./landing.css";
import { Navbar, CTA } from "./../../components";
import { useNavigate } from "react-router-dom";
import landing from './../../assets/landing.svg'

import axios from "axios";

const Landing = ({ scanError, setRepoURL }) => {
	let navigate = useNavigate();

	const handleSubmit = async () => {
		navigate("/home");
	};

	const moveToID = () => {
		navigate("#mainLanding");
	};

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
						/>
					</div>
				</div>

				<CTA text="Start Analyzing" onClick={handleSubmit} />

				{scanError === "" ? <></> : <div>{scanError}</div>}
				
				<div className="second">
					<img className="img-landing" src={landing} alt="landing" />
					<CTA text="Get Started" onClick={moveToID} />
				</div>
			</section>
		</div>
	);
};

export default Landing;
