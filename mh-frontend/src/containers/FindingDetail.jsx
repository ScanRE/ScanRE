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
	useEffect(() => {
		console.log(finding);
	}, [finding]);

	function calculateAgeInDays(dateString) {
		console.log(dateString);
		const targetDate = new Date("2023-06-04");
		const currentDate = new Date();

		// Calculate the time difference in milliseconds
		const timeDifference = targetDate.getTime() - currentDate.getTime();

		// Convert milliseconds to days
		const millisecondsInDay = 1000 * 60 * 60 * 24;
		const daysDifference = Math.ceil(timeDifference / millisecondsInDay);

		return daysDifference;
	}

	const formatDate = (date) => {
		const timestamp = new Date(date);
		const formattedDate = timestamp.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		return formattedDate;
	};

	return (
		<div className="m-4 p-[3rem] text-primary">
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
				date={formatDate(finding.date)}
				cwe={finding.extra.metadata.cwe[0]}
				impact={finding.extra.metadata.impact}
				likelihood={finding.extra.metadata.likelihood}
				age={calculateAgeInDays("2023-06-03")}
			/>
			<FileLocation
				fileLocation={finding.path}
				lineCol={finding.start.line + ":" + finding.start.col}
			/>
			<CodeSnippet
				title={"Vulnerable"}
				lang={finding.extra.metadata.technology[0]}
				code={finding.extra.lines}
			/>
			<Message message={finding.extra.message} />
			<CodeSnippet
				title={"Mitigation"}
				lang={finding.extra.metadata.technology[0]}
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
