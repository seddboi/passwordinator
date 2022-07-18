import React, { useState } from 'react';
import {
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	TextField,
	Typography,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import '../Popup/popup.css';

export function Popup({ handleClickClose, isOpen, title, password }) {
	const [isCopied, setIsCopied] = useState(false);

	const copyPassword = () => {
		let target = document.getElementById('password-text');
		target.select();
		target.setSelectionRange(0, 99999);
		navigator.clipboard.writeText(target.value);

		setIsCopied(true);
	};

	const passwordContainer =
		password === null ? (
			<Container></Container>
		) : (
			<Container maxWidth="lg">
				<TextField
					id="password-text"
					type="text"
					color="success"
					margin="normal"
					fullWidth
					value={password}
					inputProps={{ readOnly: true }}
				></TextField>
			</Container>
		);

	const iconSwitcher = isCopied ? <CheckIcon /> : <ContentCopyIcon />;

	const copyButtonHider =
		password === null ? (
			<div></div>
		) : (
			<Button color="primary" onClick={copyPassword}>
				{iconSwitcher}
			</Button>
		);

	return (
		<Dialog open={isOpen} fullWidth>
			<DialogTitle sx={{ color: '#2e7d32' }}>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{passwordContainer}</DialogContentText>
				<DialogActions>
					{copyButtonHider}
					<Button
						color="success"
						onClick={() => {
							handleClickClose();
							setIsCopied(false);
						}}
					>
						<Typography variant="button">Close</Typography>
					</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	);
}
