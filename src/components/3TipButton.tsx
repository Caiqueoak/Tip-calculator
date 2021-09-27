import * as React from "react";
import '../styles/TipButton.scss'

const TipButton = (props: any) => {

	const tipValue = props.tipValue;
	return (
		<>
			<li>
				<button
					type="button"
					className="tip-buttons-input"
					value={props.tipValue}
					onClick={props.onClick}
					style={props.activeState}
				>
					{tipValue + '%'}
				</button>
			</li>
		</>
	);
};

export default TipButton;
