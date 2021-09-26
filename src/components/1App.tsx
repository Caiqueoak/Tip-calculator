import React, { useState, useEffect } from "react";
import "../styles/main.scss";
import billIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

import Form from "./2Form";

const icons = {
	bill: `url(${billIcon})`,
	people: `url(${personIcon})`,
};

const tipValues = [5, 10, 15, 25, 50];

const App = () => {
	// VALUES
	const [bill, setBill] = useState(0);
	const [tipRate, setTipRate] = useState(0);
	const [customInput, setCustomInput] = useState('Custom');
	const [peopleNumber, setPeopleNumber] = useState(0);
	const [tipAmount, setTipAmount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		
		console.log(bill)
		console.log(tipRate)
		console.log(peopleNumber)

		const tip = bill*tipRate;

		const tipAmountPerPeople = tip / peopleNumber;
		const totalPerPeople = (bill + tip) / peopleNumber;

		setTipAmount(tipAmountPerPeople);
		setTotal(totalPerPeople);

		console.log('tipAmount: '+tipAmount)
		console.log("total: "+total)
	}, [bill, tipRate, peopleNumber])

	function handleInputChange(e: any): void {
		const id = e.target.id;
		let setter: any;

		switch (id) {
			case "bill-input":
				setter = setBill;
				break;
			/*case "custom-tip-input":
				setter = setTipRate;
				setCustomInput(e.target.value);
				break;*/
			case "people-number-input":
				setter = setPeopleNumber;
				break;
		}

		setter(() => e.target.value);
	}

	function handleTipButtonClick(e: any): void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate)
		setCustomInput('Custom')
	}

	function handleCustomInput(e: any) :void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate)
		setCustomInput(e.target.value);
	}

	return (
		<>
			{/* {LOGO} */}
			<img src={require("../images/logo.svg").default} alt="splitter logo" />

			<Form
				icons={icons}
				tipValues={tipValues}
				customInput={customInput}
				onCustomChange={handleCustomInput}
				onClick={handleTipButtonClick}
				onChange={handleInputChange}
			/>
		</>
	);
};

export default App;
