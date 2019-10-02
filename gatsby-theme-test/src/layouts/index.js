import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
	AppBar,
	Container,
	Divider,
	Drawer,
	Grid,
	Hidden,
	IconButton,
	makeStyles,
	Typography
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import HomeIcon from '@material-ui/icons/Home'
import './styles.css'

import Header from './header'
import Footer from './footer'
import SideNav from './sideNav'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	main: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: 'calc(100vh - 82px) ',
		paddingBottom: theme.spacing(5),
		paddingTop: theme.spacing(5)
	},
	toolbar: theme.mixins.toolbar,
	appBar: {
		boxShadow: theme.shadows[1]
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	drawerPaper: {
		width: drawerWidth,
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(2)
	},
	mobileDivider: {
		marginBottom: theme.spacing(2)
	}
}))

const Layout = ({ children, location, theme, siteTitle, author }) => {
	let pathname
	if (location) {
		pathname = location.pathname
	}
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	function handleDrawerOpen() {
		setOpen(true)
	}

	function handleDrawerClose() {
		setOpen(false)
	}

	return (
		<ThemeProvider theme={theme}>
			<AppBar position='fixed' className={classes.appBar}>
				<Header
					siteTitle={siteTitle}
					handleDrawerOpen={handleDrawerOpen}
					handleDrawerClose={handleDrawerClose}
				/>
			</AppBar>
			<Container component='main' className={classes.main} maxWidth='md'>
				<div className={classes.toolbar} />
				<main>
					<Drawer
						variant='temporary'
						open={open}
						onClose={handleDrawerOpen}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}
					>
						<Hidden smUp>
							<div className={classes.drawerHeader}>
								<Link to='/' onClick={handleDrawerClose}>
									{pathname !== '/' && (
										<IconButton>
											<HomeIcon />
										</IconButton>
									)}
								</Link>

								<IconButton onClick={handleDrawerClose}>
									<ChevronLeftIcon />
								</IconButton>
							</div>
							<Divider className={classes.mobileDivider} />
						</Hidden>
						<SideNav
							pathname={pathname}
							handleDrawerClose={handleDrawerClose}
						/>
					</Drawer>
					<Grid container spacing={4}>
						<Grid item xs={12} sm={9}>
							{children}
						</Grid>
						<Hidden xsDown>
							<Grid item xs={12} sm={3}>
								<SideNav
									pathname={pathname}
									handleDrawerClose={handleDrawerClose}
								/>
							</Grid>
						</Hidden>
					</Grid>
				</main>
			</Container>
			<Footer author={author} />
		</ThemeProvider>
	)
}

export default Layout
