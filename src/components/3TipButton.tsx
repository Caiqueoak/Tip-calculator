import * as React from "react";

const TipButton = (props: any) => {
	return (
		<>
			<li>
				<button
					type="button"
					className="tip-buttons-input"
					value={props.tipValue}
					onClick={props.onClick}
				>
					{props.tipValue}%
				</button>
			</li>
		</>
	);
};

export default TipButton;
