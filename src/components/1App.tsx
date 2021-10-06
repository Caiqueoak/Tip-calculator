import React, { useState, useEffect, createContext } from "react";
import billIcon from "../images/icon-dollar.svg";
import personIcon from "../images/icon-person.svg";

import Form from "./2Form";

const icons = {
	bill: `url(${billIcon})`,
	people: `url(${personIcon})`,
};

// Styles
export const { active, inactive } = {
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

export const AmountValuesContext = createContext<any>({});

function App() {
	// Account values
	const [bill, setBill] = useState<number>(0);
	const [tipRate, setTipRate] = useState<number>(0);
	const [customInput, setCustomInput] = useState<StringNumber>("Custom");
	let [peopleNumber, setPeopleNumber] = useState<number>(0);

	// Results
	const [tipAmount, setTipAmount] = useState<StringNumber>("0.00");
	const [total, setTotal] = useState<StringNumber>("0.00");

	// Styles
	const [idActivated, setIdActivated] = useState<null | number>();
	const [globalWarningText, setGlobalWarningText] = useState("");

	useEffect(() => {
		// Calculates the tip and bill values
		if (peopleNumber >= 1 && bill != 0) {
			const tip = bill * tipRate;
			peopleNumber = Math.trunc(peopleNumber);

			const tipAmountPerPeople = (tip / peopleNumber).toFixed(2);
			const totalPerPeople = (
				(bill * 100 + tip * 100) /
				(peopleNumber * 100)
			).toFixed(2);

			setTipAmount(tipAmountPerPeople);
			setTotal(totalPerPeople);
		} else {
			// Sets the default tip amount and total values
			setTipAmount("0.00");
			setTotal("0.00");
		}
	}, [bill, tipRate, peopleNumber, idActivated]);

	// SETS THE BILL AND/OR PEOPLE NUMBER TO THE INPUT
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
		setter(e.target.value);
	}

	// SETS THE TIP RATE
	function handleTipButtonClick(e: any): void {
		const tipRate = e.target.value / 100;

		setTipRate(tipRate);
		setCustomInput("Custom");
	}

	function handleCustomInput(e: any): void {
		const tipRate = e.target.value / 100;

		setIdActivated(null);
		setTipRate(tipRate);
		setCustomInput(e.target.value);
	}

	// RESET ALL THE VALUES
	function handleResetClick(e: any): void {
		setBill(0);
		setPeopleNumber(0);
		setTipRate(0);
		setCustomInput("Custom");
		setIdActivated(null);
		setGlobalWarningText("none");
	}

	const imports = {
		icons,
		tipValues,
		customInput,
		tipAmount,
		total,
		idActivated,
		globalWarningText,
		setTipRate,
		setIdActivated,
		handleResetClick,
		handleTipButtonClick,
		handleCustomInput,
		handleInputChange,
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
