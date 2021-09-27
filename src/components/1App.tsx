import React, { useState, useEffect } from "react";
import '../styles/_setup.scss';
import billIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

import Form from "./2Form";

const icons = {
	bill: `url(${billIcon})`,
	people: `url(${personIcon})`,
};

// Styles
const {active, inative: inactive} = {
	active: {
		backgroundColor: 'hsl(172, 67%, 45%)',
		color: 'hsl(183, 100%, 15%)',
	},
	inative: {
		backgroundColor: 'hsl(183, 100%, 15%)',
		color: 'white',
	}
}

const tipValues = [5, 10, 15, 25, 50];

function App() {
	// Account values
	const [bill, setBill] = useState(0);
	const [tipRate, setTipRate] = useState(0);
	const [customInput, setCustomInput] = useState("Custom");
	const [peopleNumber, setPeopleNumber] = useState(0);
	
	// Results
	const [tipAmount, setTipAmount] = useState(0);
	const [total, setTotal] = useState(0);

	// Styles
	const [activeState, setActiveState] = useState(inactive)

	useEffect((defaultState = 0) => {
		if(bill !== 0 && tipRate !== 0 && peopleNumber !==0) {
			const tip = bill * tipRate;
	
			const tipAmountPerPeople = (tip / peopleNumber).toFixed(2);
			const totalPerPeople = ((bill*100 + tip*100) / (peopleNumber*100)).toFixed(2);
	
			setTipAmount(Number(tipAmountPerPeople));
			setTotal(Number(totalPerPeople));
		}
		else {
			setTipAmount(Number((defaultState).toFixed(2)));
			setTotal(defaultState);
		}
	}, [bill, tipRate, peopleNumber]);

	function handleInputChange(e: any): void {
		const id = e.target.id;
		let setter: any;

		switch (id) {
			case "bill-input":
				setter = setBill;
				break;
			case "people-number-input":
				setter = setPeopleNumber;
		}
		setter(() => e.target.value);
	}

	function handleTipButtonClick(e: any): void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate);
		setCustomInput("Custom");
		setActiveState(prevState => (
			prevState !== active ? active : inactive
		))
		
		console.log(activeState)
	}

	function handleCustomInput(e: any): void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate);
		setCustomInput(e.target.value);
	}

	return (
		<>
			{/* {LOGO} */}
			<img src={require("../images/logo.svg").default} alt="splitter logo" id='logo' />

				<Form
					icons={icons}
					tipValues={tipValues}
					tipAmount={tipAmount}
					total={total}
					activeState={activeState}
					customInput={customInput}
					onCustomChange={handleCustomInput}
					onClick={handleTipButtonClick}
					onChange={handleInputChange}
				/>
		</>
	);
}

export default App;
