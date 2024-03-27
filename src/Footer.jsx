import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return(
        <footer className="footer">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faTwitterSquare}/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/xdelmo" target="_blank" rel="noopener noreferrer">
                 <FontAwesomeIcon icon={faGithubSquare} />
            </a>
        </footer>
    );
}
