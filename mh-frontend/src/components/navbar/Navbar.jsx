import React from "react";
import "./navbar.css";
import logo from "./../../assets/logo.svg";

function Navbar() {
	return (
		<nav>
			<img src={logo} alt="ScanRE logo " className="logo" />
			<ul>
				<li>
					<a href="/">Features</a>
				</li>
				<li>
					<a href="/pricing">Pricing</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
				<li>
					<a href="/history">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
