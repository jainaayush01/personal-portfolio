import React, { Fragment } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar">
                <div className="social-icons">
                    <GitHubIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://github.com/jainaayush01",
                                "_blank"
                            )
                        }
                    />
                    <LinkedInIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://linkedin.com/in/jainaayush01",
                                "_blank"
                            )
                        }
                    />
                    <TwitterIcon
                        className="social-icon"
                        onClick={() =>
                            window.open(
                                "https://twitter.com/jainaayush01",
                                "_blank"
                            )
                        }
                    />
                    <EmailIcon
                        className="social-icon"
                        onClick={() =>
                            (window.location.href =
                                "mailto: imjainaayush@gmail.com")
                        }
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
