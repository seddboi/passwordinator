import React from 'react';
import { Typography, Box } from '@mui/material';
import { Form } from '../Form/form';
import '../Homepage/homepage.css';

export function Homepage() {
	return (
		<Box className="form-box" sx={{ margin: 4 }}>
			<Box className="top-section" sx={{ mb: 5 }}>
				<Typography className="head-title" variant="h2">
					Password Generator
				</Typography>
				<Typography className="subhead-title" variant="h4">
					Enter your preferences below and press go!
				</Typography>
			</Box>
			<Form />
		</Box>
	);
}
