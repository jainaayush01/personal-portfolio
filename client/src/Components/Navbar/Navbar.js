import React, { Fragment } from "react";
import { AppBar, IconButton, Toolbar, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const navColor = "#0f141c";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar className="navbar" style={{ backgroundColor: navColor }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
                {/* <li></li> */}
                {/* <li className="nav-item">About Me</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">Education</li>
                <li className="nav-item">Volunteering</li>
                <li className="nav-item">Blogs</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Skills</li> */}
            </AppBar>
        </Fragment>
    );
};

export default Navbar;
