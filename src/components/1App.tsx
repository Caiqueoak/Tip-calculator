import React, { useState, useEffect, createContext } from "react";
import "../styles/_setup.scss";
import billIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

import Form from "./2Form";

const icons = {
	bill: `url(${billIcon})`,
	people: `url(${personIcon})`,
};

// Styles
const { active, inactive } = {
	active: {
		backgroundColor: "hsl(172, 67%, 45%)",
		color: "hsl(183, 100%, 15%)",
	},
	inactive: {
		backgroundColor: "hsl(183, 100%, 15%)",
		color: "white",
	},
};

type StringNumber = string | number;

const tipValues = [5, 10, 15, 25, 50];

export const AmountValuesContext = createContext<any>(0);

function App() {
	// Account values
	const [bill, setBill] = useState(0);
	const [tipRate, setTipRate] = useState(0);
	const [customInput, setCustomInput] = useState<StringNumber>("Custom");
	const [peopleNumber, setPeopleNumber] = useState(0);

	// Results
	const [tipAmount, setTipAmount] = useState<StringNumber>("0.00");
	const [total, setTotal] = useState<StringNumber>("0.00");

	// Styles
	const [activeState, setActiveState] = useState(inactive);

	useEffect(
		(defaultState = 0) => {
			if (bill !== 0 && tipRate !== 0 && peopleNumber !== 0) {
				const tip = bill * tipRate;

				const tipAmountPerPeople = (tip / peopleNumber).toFixed(2);
				const totalPerPeople = (
					(bill * 100 + tip * 100) /
					(peopleNumber * 100)
				).toFixed(2);

				setTipAmount(Number(tipAmountPerPeople));
				setTotal(Number(totalPerPeople));
			}
		},
		[bill, tipRate, peopleNumber]
	);

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
		setActiveState((prevState) => (prevState !== active ? active : inactive));
	}

	function handleCustomInput(e: any): void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate);
		setCustomInput(e.target.value);
	}

	const imports = {
		icons: icons,
		tipValues: tipValues,
		customInput: customInput,
		tipAmount: tipAmount,
		total: total,
		activeState: activeState,
		handleTipButtonClick: handleTipButtonClick,
		handleCustomInput: handleCustomInput,
		handleInputChange: handleInputChange,
	};

	return (
		<>
			{/* {LOGO} */}
			<img
				src={require("../images/logo.svg").default}
				alt="splitter logo"
				id="logo"
			/>

			<AmountValuesContext.Provider value={imports}>
				<Form />
			</AmountValuesContext.Provider>
		</>
	);
}

export default App;
