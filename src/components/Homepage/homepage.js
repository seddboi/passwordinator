import React, { useState } from 'react';
import {
	Typography,
	Box,
	Container,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { Form } from '../Form/form';

export function Homepage() {
	const [isOpen, setisOpen] = useState(false);

	const handleClickOpen = () => {
		setisOpen(true);
	};

	const handleClickClose = () => {
		setisOpen(false);
	};

	return (
		<Box className="form-box">
			<Box className="top-section">
				<Typography className="head-title" variant="h2">
					Password Generator
				</Typography>
				<Typography className="subhead-title" variant="h4">
					Enter your preferences below and press go!
				</Typography>
			</Box>
			<Form />
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
		</Box>
	);
}
