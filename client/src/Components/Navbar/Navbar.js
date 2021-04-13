import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbar">
                <li className="nav-item">About Me</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Experience</li>
                <li className="nav-item">Education</li>
                <li className="nav-item">Volunteering</li>
                <li className="nav-item">Blogs</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">Skills</li>
            </div>
        </Fragment>
    )
}

export default Navbar;