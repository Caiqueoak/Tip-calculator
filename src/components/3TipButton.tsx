import React, { useContext } from "react";
import '../styles/TipButton.scss'
import { AmountValuesContext } from "./1App";

const TipButton = (props: any) => {
	const {handleTipButtonClick} = useContext(AmountValuesContext)

	const tipValue = props.tipValue;
	return (
		<>
			<li>
				<button
					type="button"
					className="tip-buttons-input"
					value={props.tipValue}
					style={props.activeState}
					onClick={handleTipButtonClick}
				>
					{tipValue + '%'}
				</button>
			</li>
		</>
	);
};

export default TipButton;
