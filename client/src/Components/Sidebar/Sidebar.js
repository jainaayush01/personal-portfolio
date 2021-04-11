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
                            window.open("https://github.com/jainaayush01", "_blank")
                        }
                        // style={{   }}
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
                </div>
                <div
                    className="mail"
                    onClick={() =>
                        (window.location.href =
                            "mailto: imjainaayush@gmail.com")
                    }
                >
                    <p className="email-id social-icon">
                        imjainaayush@gmail.com
                    </p>
                    <EmailIcon className="social-icon"/>
                </div>
            </div>
        </Fragment>
    );
};

export default Sidebar;
