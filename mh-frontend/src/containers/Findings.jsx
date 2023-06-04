import React, { useState } from "react";
import "./table.css";
import Table from "rc-table";
import { CTA } from "./../components";
import { res } from "./../assets/sample";
import FindingDetail from "./FindingDetail";
import { Link, useNavigate } from "react-router-dom";
import externalLink from "../assets/externalLink.svg";

const Findings = ({ scanResData, setFinding, setScanResData }) => {
	const navigate = useNavigate();

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
			title: "Age",
			dataIndex: "age",
			key: "age",
			width: 100,
			align: "center"
		},
		{
			title: "Status",
			dataIndex: "status",
			key: "status",
			width: 100,
			align: "center"
		},
		{
			title: "Fixed",
			dataIndex: "id",
			key: "checkbox",
			width: 100,
			align: "center",
			render: (e) => (
				<input
					type="checkbox"
					onChange={(ele) => handleFixed(e, ele.target.checked)}
				/>
			)
		}
	];

	const handleFixed = (id, checked) => {
		let oldData = scanResData;

		oldData.results = oldData.results.map((result) => {
			if (id == result.extra.fingerprint) {
				return { ...result, "checked": checked };
			}
			return result;
		});

		setScanResData(oldData);
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

	let data = [];
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

		data.push(newEntry);
	});

	return (
		<div>
			<Table columns={columns} data={data} sticky={true} />
		</div>
	);
};

export default Findings;
