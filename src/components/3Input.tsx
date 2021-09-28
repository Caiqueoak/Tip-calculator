import React, { useContext } from "react";
import '../styles/Input.scss';
import { AmountValuesContext } from "./1App";

const Input = (props: any) => {
	const {handleInputChange} = useContext(AmountValuesContext);

	return (
		<>
			<input
				type={props.type}
				min='0'
				step={props.step}
				className='number-inputs'
				id={props.id}
				placeholder={props.placeholder}
				onChange={handleInputChange}
				style={{backgroundImage: props.icon}}
			/>
		</>
	);
};

export default Input;
