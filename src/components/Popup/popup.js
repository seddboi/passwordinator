import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';

export function Popup({ handleClickClose, isOpen, title, password }) {
	return (
		<Dialog open={isOpen}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{password}</DialogContentText>
				<DialogActions>
					<Button color="success" onClick={handleClickClose}>
						Close
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
