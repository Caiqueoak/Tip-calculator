import React, { useContext, useState } from "react";
import { active, AmountValuesContext, inactive } from "./1App";

const TipButton = (props: any) => {
	const { setIdActivated, handleTipButtonClick, setTipRate } =
		useContext(AmountValuesContext);

	const tipValue = props.tipValue;

	function handleClick() {
		if (props.toggleState == active) {
			setIdActivated(null);
			setTipRate(0);
		} else {
			setIdActivated(props.id);
			handleTipButtonClick(tipValue);
			console.log(props.toggleState)
		}
	}

	return (
		<>
			<li>
				<button
					type="button"
					className="tip-buttons-input"
					value={props.tipValue}
					style={props.toggleState}
					onClick={handleClick}
				>
					{tipValue + "%"}
				</button>
			</li>
		</>
	);
};

export default TipButton;
