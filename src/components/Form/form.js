import React, { useState } from 'react';
import {
	Container,
	FormGroup,
	FormControlLabel,
	TextField,
	Checkbox,
} from '@mui/material';

export function Form() {
	const [characterEntry, setCharacterEntry] = useState(null);
	const [isUppercase, setIsUppercase] = useState(false);
	const [isLowercase, setIsLowercase] = useState(false);
	const [isNumbers, setIsNumbers] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);

	return (
		<Container>
			<FormGroup>
				<TextField
					label="How many characters?"
					type="number"
					onChange={(e) => {
						setCharacterEntry(e.target.value);
					}}
				/>
				<FormControlLabel
					control={
						<Checkbox
							onChange={() => {
								setIsUppercase(!isUppercase);
							}}
						/>
					}
					label="Uppercase Letters"
				/>
				<FormControlLabel
					control={
						<Checkbox
							onChange={() => {
								setIsLowercase(!isLowercase);
							}}
						/>
					}
					label="Lowercase Letters"
				/>
				<FormControlLabel
					control={
						<Checkbox
							onChange={() => {
								setIsNumbers(!isNumbers);
							}}
						/>
					}
					label="Numbers"
				/>
				<FormControlLabel
					control={
						<Checkbox
							onChange={() => {
								setIsSpecial(!isSpecial);
							}}
						/>
					}
					label="Special Characters"
				/>
			</FormGroup>
		</Container>
	);
}
