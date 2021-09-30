import React, { useContext, useState } from "react";
import { active, AmountValuesContext, inactive } from "./1App";

const TipButton = (props: any) => {
	const {handleTipButtonClick, setTipRate} = useContext(AmountValuesContext)
	const [activeState, setActiveState] = useState(inactive)

	function handleClick(e:any):void {
		const newState = () => {
			if(activeState == inactive) {
				handleTipButtonClick(e);
				return active;
			} else {
				//setTipRate(0);
				return inactive;
			}
		}

		setActiveState(newState);
	}

	const tipValue = props.tipValue;
	return (
		<>
			<li>
				<button
					type="button"
					className="tip-buttons-input"
					value={props.tipValue}
					style={activeState}
					onClick={handleClick}
				>
					{tipValue + '%'}
				</button>
			</li>
		</>
	);
};

export default TipButton;
