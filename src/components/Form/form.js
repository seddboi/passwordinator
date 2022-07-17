import React, { useState } from 'react';
import {
	Container,
	Box,
	FormGroup,
	FormControlLabel,
	TextField,
	Checkbox,
	Button,
	Typography,
} from '@mui/material';
import { Popup } from '../Popup/popup';
import { usePasswordRandomizer } from '../../hooks/usePasswordRandomizer';
import '../Form/form.css';

export function Form() {
	const [isOpen, setisOpen] = useState(false);
	const [password, setPassword] = useState(null);
	const [characterEntry, setCharacterEntry] = useState(null);
	const [isUppercase, setIsUppercase] = useState(false);
	const [isLowercase, setIsLowercase] = useState(false);
	const [isNumbers, setIsNumbers] = useState(false);
	const [isSpecial, setIsSpecial] = useState(false);

	const textInput = React.useRef(null);

	const handleClickOpenCorrect = () => {
		setisOpen(true);
		setPassword(randomPass);

		textInput.current.value = '';
		setIsUppercase(false);
		setIsLowercase(false);
		setIsNumbers(false);
		setIsSpecial(false);
	};

	const handleClickOpenIncorrrect = () => {
		setisOpen(true);
		setPassword(null);
	};

	const handleClickClose = () => {
		setisOpen(false);
		setCharacterEntry(null);
	};

	const filledOutCorrectly =
		characterEntry === null ||
		(isUppercase === true && isLowercase === true && isNumbers === true && isSpecial === true)
			? 'Please completely fill out the options.'
			: 'Your randomly generated password:';

	const randomPass = usePasswordRandomizer(
		characterEntry,
		isUppercase,
		isLowercase,
		isNumbers,
		isSpecial
	);

	return (
		<Container>
			<FormGroup>
				<TextField
					className="number-input"
					label="How many characters?"
					type="number"
					color="success"
					inputRef={textInput}
					onChange={(e) => {
						setCharacterEntry(e.target.value);
					}}
					sx={{ mb: 3 }}
				/>
				<FormControlLabel
					color="success"
					control={
						<Checkbox
							className="checkbox"
							color="success"
							size="large"
							onChange={() => {
								setIsUppercase(!isUppercase);
							}}
							checked={isUppercase}
							sx={{}}
						/>
					}
					label={
						<Typography className="checkbox" variant="button">
							Uppercase Letters
						</Typography>
					}
					sx={{ mb: 3 }}
				/>
				<FormControlLabel
					control={
						<Checkbox
							color="success"
							size="large"
							onChange={() => {
								setIsLowercase(!isLowercase);
							}}
							checked={isLowercase}
						/>
					}
					label={
						<Typography className="checkbox" variant="button">
							Lowercase Letters
						</Typography>
					}
					sx={{ mb: 3 }}
				/>
				<FormControlLabel
					control={
						<Checkbox
							color="success"
							size="large"
							onChange={() => {
								setIsNumbers(!isNumbers);
							}}
							checked={isNumbers}
						/>
					}
					label={
						<Typography className="checkbox" variant="button">
							Numbers
						</Typography>
					}
					sx={{ mb: 3 }}
				/>
				<FormControlLabel
					control={
						<Checkbox
							color="success"
							size="large"
							onChange={() => {
								setIsSpecial(!isSpecial);
							}}
							checked={isSpecial}
						/>
					}
					label={
						<Typography className="checkbox" variant="button">
							Special Characters
						</Typography>
					}
					sx={{ mb: 3 }}
				/>
			</FormGroup>
			<Box className="bottom-section">
				<Container>
					<Button
						className="go-button"
						variant="contained"
						color="success"
						size="large"
						onClick={
							characterEntry === null || (!isUppercase && !isLowercase && !isNumbers && !isSpecial)
								? handleClickOpenIncorrrect
								: handleClickOpenCorrect
						}
					>
						Go !
					</Button>
				</Container>
				<Popup
					handleClickClose={handleClickClose}
					isOpen={isOpen}
					title={filledOutCorrectly}
					password={password}
				/>
			</Box>
		</Container>
	);
}
