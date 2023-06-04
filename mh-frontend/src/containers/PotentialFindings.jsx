import React, { useState, useEffect } from "react";
import "./table.css";
import Table from "rc-table";
import { CTA } from "./../components";
import { res } from "./../assets/sample";
import FindingDetail from "./FindingDetail";
import { Link, useNavigate } from "react-router-dom";
import externalLink from "../assets/externalLink.svg";

const PotentialFindings = ({ scanResData, setFinding, setScanResData }) => {
	const navigate = useNavigate();

	const [data, setData] = useState("");

	const handleClick = (e) => {
		console.log(e);
		setFinding(
			scanResData.results.filter((obj) => obj.extra.fingerprint === e)[0]
		);
		navigate(`findingDetail/${e}`, { replace: true });
	};

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			key: "id",
			width: 100,
			align: "center",
			render: (e) => (
				<div onClick={() => handleClick(e)}>
					<span className="table-href cursor-pointer">
						{e.slice(0, 5) + "..."}
						<img
							src={externalLink}
							alt="link"
							className="w-4 h-4 inline"
						/>
					</span>
				</div>
			)
		},
		{
			title: "Severity",
			dataIndex: "severity",
			key: "severity",
			width: 100,
			align: "center"
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			width: 200,
			render: (e) => <span>{e}</span>
		},
		{
			title: "CWE",
			dataIndex: "cwe",
			key: "cwe",
			width: 100,
			align: "center"
		},
		{
			title: "Date",
			dataIndex: "date",
			key: "date",
			width: 100,
			align: "center"
		},
		{
			title: "Vulnerability",
			dataIndex: "id",
			key: "vulnerability",
			width: 100,
			align: "center",
			render: (e) => (
				<CTA text="Move" type="small" onClick={() => handleMove(e)} />
			)
		}
	];

	const fillTable = async () => {
		let tempData = [];
		const dateOfScan = scanResData.date;
		const age = calculateAgeInDays(dateOfScan);

		scanResData.results.forEach((obj, idx) => {
			const newEntry = {
				id: obj.extra.fingerprint,
				key: obj.extra.fingerprint || idx,
				severity: obj.extra.severity,
				name: obj.check_id,
				cwe: regexForCWE(obj.extra.metadata.cwe),
				date: formatDate(dateOfScan),
				age: age,
				status: "active"
			};

			if (
				obj.extra.metadata.confidence == "LOW" &&
				obj.potential == false
			) {
				tempData.push(newEntry);
			}
		});

		setData(tempData);
	};

	const handleMove = async (id) => {
		let oldData = scanResData;

		oldData.results = await oldData.results.map((result) => {
			if (id === result.extra.fingerprint) {
				return { ...result, "potential": true };
			}
			return result;
		});

		setScanResData(oldData);
		fillTable();
	};

	const calculateAgeInDays = (dateString) => {
		const date = new Date(dateString);

		const currentDate = new Date();

		const differenceInMilliseconds = currentDate - date;

		// Convert milliseconds to days
		const days = Math.floor(
			differenceInMilliseconds / (1000 * 60 * 60 * 24)
		);

		return days;
	};

	const formatDate = (date) => {
		const timestamp = new Date(date);
		const formattedDate = timestamp.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		return formattedDate;
	};

	function regexForCWE(arr) {
		if (arr && arr.length > 0) {
			const regex = /CWE-(\d+)/;
			const match = regex.exec(arr[0]);
			if (match) {
				return match[1];
			}
		}
		return null;
	}

	useEffect(() => {
		fillTable();
	}, [scanResData]);

	return (
		<div>
			<Table columns={columns} data={data} sticky={true} />
		</div>
	);
};

export default PotentialFindings;
