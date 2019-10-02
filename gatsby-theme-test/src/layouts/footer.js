import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: grey[300],
		padding: theme.spacing(3),
		marginLeft: theme.spacing(-1),
		marginRight: theme.spacing(-1)
	},
	logo: {
		maxHeight: 30,
		marginBottom: -10
	}
}))

const Footer = ({ author }) => {
	const classes = useStyles()

	return (
		<footer className={classes.root}>
			<Typography component='div'>
				<Box
					fontWeight='fontWeightLight'
					fontSize={12}
					textAlign='center'
					m={1}
					color={grey[800]}
				>
					created by {author} © {new Date().getFullYear()}
				</Box>
			</Typography>
		</footer>
	)
}

export default Footer
