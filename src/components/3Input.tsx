import React from "react";

const Input = (props: any) => {
	return (
		<>
			<input
				type={props.type}
				min='0'
				step={props.step}
				className='number-inputs'
				id={props.id}
				onChange={props.onChange}
				style={{backgroundImage: props.icon}}
			/>
		</>
	);
};

export default Input;
