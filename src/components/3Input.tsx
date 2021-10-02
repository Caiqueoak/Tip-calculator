import React, { useContext, useEffect, useState } from "react";
import { AmountValuesContext } from "./1App";

const Input = (props: any) => {
	const { handleInputChange, globalWarningText, setGlobalWarningText } =
		useContext(AmountValuesContext);
	const [warningText, setWarningText] = useState("none");
	//const [input, setInput] = useState(0);

	function handleLocalInputChange(e: any) {
		const zerosRegex = /0+/;
		const inputValue = e.target.value.toString();

		const displayState =
			inputValue.match(zerosRegex) == inputValue ? "inline" : "none";
		console.log("local: " + displayState);
		console.log("localValue: " + e.target.value);
		handleInputChange(e);
		setWarningText(displayState);
	}

	useEffect(() => {
		if (globalWarningText == "none") {
			console.log("globalUseState: " + globalWarningText);
			setWarningText(globalWarningText);
			setGlobalWarningText("");
		}
	}, [globalWarningText]);

	return (
		<>
			<div className="input-header">
				<h2 className="headings">{props.children}</h2>
				<p className="warning-text" style={{ display: warningText }}>
					Can't be Zero
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
