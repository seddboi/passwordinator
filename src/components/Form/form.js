import React, { useState } from 'react';
import {
	Container,
	Box,
	FormGroup,
	FormControlLabel,
	TextField,
	Checkbox,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Alert,
} from '@mui/material';

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
	};

	const handleClickClose = () => {
		setisOpen(false);

		setCharacterEntry(!characterEntry);
		setIsUppercase(false);
		setIsLowercase(false);
		setIsNumbers(false);
		setIsSpecial(false);
	};

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
				<Dialog open={isOpen}>
					<DialogTitle>{'Your Randomly Generated Password'}</DialogTitle>
					<DialogContent>
						<DialogContentText>{'Booty hole crakc'}</DialogContentText>
						<DialogActions>
							<Button color="success" onClick={handleClickClose}>
								Close
							</Button>
						</DialogActions>
					</DialogContent>
				</Dialog>
			</Box>
		</Container>
	);
}
