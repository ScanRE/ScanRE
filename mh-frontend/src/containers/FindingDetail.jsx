import StatsSection from "../components/FindingDetail/StatsSection";
import FileLocation from "../components/FindingDetail/FileLocation";
import Message from "../components/FindingDetail/Message";
import CodeSnippet from "../components/FindingDetail/CodeSnippet";
import References from "../components/FindingDetail/References";

import { Link } from "react-router-dom";
import leftIcon from "../assets/left.png";
import Info from "../components/Info";
import { useEffect } from "react";

const FindingDetail = ({ finding }) => {
	console.log(finding);
	useEffect(() => {
		console.log(finding);
	}, [finding]);

	function calculateAgeInDays(dateString) {
		// Parse the date string
		const date = new Date(dateString);

		// Calculate the current date
		const currentDate = new Date();

		// Calculate the difference in milliseconds
		const differenceInMilliseconds = currentDate - date;

		// Convert milliseconds to days
		const days = Math.floor(
			differenceInMilliseconds / (1000 * 60 * 60 * 24)
		);

		return days;
	}

	return (
		<div className="m-4 p-4 text-primary">
			<Link to={"/home"}>
				<span className="underline underline-offset-2">
					<img src={leftIcon} className="inline" />
					Back to home
				</span>
			</Link>
			<div className="flex items-center m-4 w-full">
				<h2 className="text-lg bg-primary text-white py-1 px-2 rounded">
					Details of Finding
				</h2>
				<Info title={finding.extra.message} />
			</div>
			<StatsSection
				title={"Finding Stats"}
				severity={finding.extra.severity}
				owasp={finding.extra.metadata.owasp[0]}
				type={"Static"}
				date={finding.date}
				cwe={finding.extra.metadata.cwe[0]}
				impact={finding.extra.metadata.impact}
				likelihood={finding.extra.metadata.likelihood}
				age={calculateAgeInDays(finding.date)}
			/>
			<FileLocation
				fileLocation={finding.path}
				lineCol={finding.start.line + ":" + finding.start.col}
			/>
			<CodeSnippet
				title={"Vulnerable"}
				lang={"php"}
				code={finding.extra.lines}
			/>
			<Message message={finding.extra.message} />
			<CodeSnippet
				title={"Mitigation"}
				lang={"php"}
				code={finding.extra.lines}
			/>
			<References
				title={"References"}
				references={finding.extra.metadata.references}
			/>
		</div>
	);
};

export default FindingDetail;
