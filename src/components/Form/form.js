import React, { useState } from 'react';
import {
	Container,
	Box,
	FormGroup,
	FormControlLabel,
	TextField,
	Checkbox,
	Button,
} from '@mui/material';
import { Popup } from '../Popup/popup';
import { usePasswordRandomizer } from '../../hooks/usePasswordRandomizer';

export function Form() {
	const [isOpen, setisOpen] = useState(false);
	const [characterEntry, setCharacterEntry] = useState(null);
	const [isUppercase, setIsUppercase] = useState(false);
	const [isLowercase, setIsLowercase] = useState(false);
	const [isNumbers, setIsNumbers] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);

	const textInput = React.useRef(null);

	const handleClickOpen = () => {
		setisOpen(true);

		textInput.current.value = '';
		setIsUppercase(false);
		setIsLowercase(false);
		setIsNumbers(false);
		setIsSpecial(false);
	};

	const handleClickClose = () => {
		setisOpen(false);
		setCharacterEntry(null);
	};

	const popupMessage =
		characterEntry === null ||
		(!isUppercase && !isLowercase && !isNumbers && !isSpecial)
			? 'Please completely fill out the options.'
			: 'Your randomly generated password:';

	const randomPass = usePasswordRandomizer(
		characterEntry,
		isUppercase,
		isLowercase,
		isNumbers,
		isSpecial
	);

	console.log(randomPass);

	return (
		<Container>
			<FormGroup>
				<TextField
					id="number-input"
					label="How many characters?"
					type="number"
					inputRef={textInput}
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
							checked={isUppercase}
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
							checked={isLowercase}
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
							checked={isNumbers}
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
							checked={isSpecial}
						/>
					}
					label="Special Characters"
				/>
			</FormGroup>
			<Box className="bottom-section">
				<Container>
					<Button
						className="go-button"
						variant="contained"
						color="success"
						onClick={handleClickOpen}
					>
						Go !
					</Button>
				</Container>
				<Popup
					handleClickClose={handleClickClose}
					isOpen={isOpen}
					title={popupMessage}
				/>
			</Box>
		</Container>
	);
}
