import React, { useContext, useEffect, useState } from "react";
import { AmountValuesContext } from "./1App";

const Input = (props: any) => {
	const {handleInputChange, bill, peopleNumber} = useContext(AmountValuesContext);
	const [warningText, setWarningText] = useState('none')

	function handleLocalInputChange(e: any) {
		const zerosRegex = /0+/;
		const inputValue = e.target.value;
		const displayState = inputValue.match(zerosRegex) == inputValue ? 'inline' : 'none';
		
		handleInputChange(e);
		setWarningText(displayState)
	}

	return (
		<>
			<p className='warning-text' style={{display: warningText}}>Can't be Zero</p>
			<input
				type='number'
				min='0'
				step={props.step}
				className='number-inputs'
				id={props.id}
				placeholder={props.placeholder}
				onChange={handleLocalInputChange}
				style={{backgroundImage: props.icon}}
			/>
		</>
	);
};

export default Input;
