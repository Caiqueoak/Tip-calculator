import React from "react";

const Input = (props: any) => {
	return (
		<>
			{props.children}
			<input
				className="number-inputs"
				type="number"
				style={{backgroundImage: props.icon}}
			/>
		</>
	);
};

export default Input;
