import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';

export function Popup({ handleClickClose, isOpen, title }) {
	return (
		<Dialog open={isOpen}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{'Booty hole crakc'}</DialogContentText>
				<DialogActions>
					<Button color="success" onClick={handleClickClose}>
						Close
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
