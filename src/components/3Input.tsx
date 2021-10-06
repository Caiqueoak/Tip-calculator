import React, { useContext, useEffect, useState } from "react";
import { AmountValuesContext } from "./1App";

const Input = (props: any) => {
	const { handleInputChange, globalWarningText } =
		useContext(AmountValuesContext);
	const [[warningTextDisplay, warningText], setWarningText] = useState([
		"none",
		'',
	]);

	function handleLocalInputChange(e: any) {
		// Shows zero number message error
		const zerosRegex = /0+/;
		const inputValue = e.target.value.toString();

		const displayState =
			inputValue.match(zerosRegex) == inputValue ? "inline" : "none";

		handleInputChange(e);
		setWarningText([displayState, "Can't be zero"]);

		// Shows decimal number message error for number of people
		const intInputValue = Math.trunc(e.target.value);

		if (
			props.id === "people-number-input" &&
			intInputValue != e.target.value &&
			displayState === "none"
		) {
			setWarningText(["inline", "Can't put decimals"]);
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
				style={{ backgroundImage: props.icon }}
			/>
		</>
	);
};

export default Input;
