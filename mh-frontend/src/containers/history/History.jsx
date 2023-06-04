import { Navbar } from "../../components";
import Historybox from "../../components/historybox/Historybox";
import "./history.css";
import { useEffect, useState } from "react";
import axios from "axios";

function History() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("https://scanre.loca.lt/history")
			.then((res) => {
				const keys = res.data.PastScans.map(
					(scan) => Object.keys(scan)[0]
				);

				const values = res.data.PastScans.map(
					(scan) => Object.values(scan)[0]
				);

				// Update the data state with the keys and values
				setData(
					keys.map((key, index) => ({
						key: key,
						lastScanned: values[index]
					}))
				);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function calculate(dateString) {
		const dateOnly = dateString.split(" ")[0];
		const targetDate = new Date(dateOnly);
		const currentDate = new Date();

		// Calculate the time difference in milliseconds
		const timeDifference = targetDate.getTime() - currentDate.getTime();

		// Convert milliseconds to days
		const millisecondsInDay = 1000 * 60 * 60 * 24;
		const daysDifference = Math.ceil(timeDifference / millisecondsInDay);

		return daysDifference;
	}

	return (
		<>
			<Navbar />
			<div className="history">
				<h1 className="title gradient-text">Past Scans</h1>
				<div className="history-panel">
					{data.map((obj, index) => (
						<Historybox
							key={index}
							url={obj.key}
							lastScanned={calculate(obj.lastScanned)}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default History;
