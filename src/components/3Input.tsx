import React, { useContext, useEffect, useState } from "react";
import { AmountValuesContext } from "./1App";

const Input = (props: any) => {
	const { handleInputChange, globalWarningText } =
		useContext(AmountValuesContext);
	const [[warningTextDisplay, warningText], setWarningText] = useState([
		"none",
		"",
	]);
	const [outline, setOutline] = useState("none");

	function handleLocalInputChange(e: any) {
		const zerosRegex = /0+/;
		const inputValue = e.target.value.toString();

		const displayState =
			inputValue.match(zerosRegex) == inputValue ? "inline" : "none";

		const intInputValue = Math.trunc(e.target.value);

		handleInputChange(e);

		// Shows zero number message error
		if (displayState === "inline") {
			setWarningText([displayState, "Can't be zero"]);
			setOutline("2px solid coral");
		}
		// Shows decimal number message error for number of people
		else if (
			props.id === "people-number-input" &&
			intInputValue != e.target.value
		) {
			setWarningText(["inline", "Can't put decimals"]);
			setOutline("2px solid coral");
		}
		// Resets the input's view
		else {
			setWarningText(["none", ""]);
			setOutline("2px solid hsl(172, 67%, 45%)");
		}
	}

	useEffect(() => {
		// Toggle off all input messages after reset button is clicked
		if (globalWarningText == "none") {
			setWarningText(["none", ""]);
		}
	}, [globalWarningText]);

	return (
		<>
			<div className="input-header">
				<h2 className="headings">{props.children}</h2>
				<p className="warning-text" style={{ display: warningTextDisplay }}>
					{warningText}
				</p>
			</div>

			<input
				type="number"
				min="0"
				step={props.step}
				className="number-inputs"
				id={props.id}
				placeholder={props.placeholder}
				onChange={handleLocalInputChange}
				onBlur={() => setOutline('none')}
				style={{ backgroundImage: props.icon, outline: outline }}
			/>
		</>
	);
};

export default Input;
