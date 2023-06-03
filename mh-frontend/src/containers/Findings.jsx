import React, { useState } from "react";
import './table.css'
import Table from 'rc-table';
import {CTA} from './../components'
import {res} from './../assets/sample';


const Findings = () => {
	const columns = [
	{
		title: 'Severity',
		dataIndex: 'severity',
		key: 'severity',
		width: 100,
		align: 'center',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 200,
	},
	{
		title: 'CWE',
		dataIndex: 'cwe',
		key: 'cwe',
		width: 100,
		align: 'center',
	},
	{
		title: 'Date',
		dataIndex: 'date',
		key: 'date',
		width: 100,
		align: 'center',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		width: 100,
		align: 'center',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		width: 100,
		align: 'center',
	},
	{
		title: 'Fixed',
		dataIndex: '',
		key: 'fixed',
		width: 100,
		align: 'center',
		render: () => <CTA text="Done" type="small" onClick={handleFixed} />,
	},
	{
		title: 'Vulnerability',
		dataIndex: '',
		key: 'vulnerability',
		width: 100,
		align: 'center',
		render: () => <CTA text="Move" type="small" onClick={handleFixed} />,
	  },
	];
	
	const handleFixed = () => {
		console.log("fix")
	}

	function calculateAgeInDays(dateString) {
		// Parse the date string
		const date = new Date(dateString);
	  
		// Calculate the current date
		const currentDate = new Date();
	  
		// Calculate the difference in milliseconds
		const differenceInMilliseconds = currentDate - date;
	  
		// Convert milliseconds to days
		const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
	  
		return days;
	}
	
	function regexForCWE(arr) {
		if(arr && arr.length > 0) {
			const regex = /CWE-(\d+)/;
			const match = regex.exec(arr[0]);
			if (match) {
				return match[1];
			}
		}
		return null;
	}
	  
	
	const data = [];
	
	const dateOfScan = res.date;
	const age = calculateAgeInDays(dateOfScan);
	
	res.results.map((obj, idx) => {
		data.push({
			"key": obj.extra.fingerprint || idx,
			"severity": obj.extra.severity,
			"name": obj.check_id,
			"cwe": regexForCWE(obj.extra.metadata.cwe),
			"date": dateOfScan,
			"age": age,
			"status": "active",
		})
	})

	return (
		<div>
			<Table columns={columns} data={data}
				sticky={true}
			/>
		</div>
	);
};

export default Findings;
