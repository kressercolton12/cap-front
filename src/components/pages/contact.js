import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPhoto from "../../../static/assets/images/DSC03228.jpg";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export default function() {
    return (
        <div className='content'>
        <div className='left-content'
        style={{
            background: "url(" + contactPhoto + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        <div className='right-content'>
            <div className='bullet-points'>
                <div className='bullet-group'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className='phone-number'>801-458-4124</div>
                </div>

                <div className='bullet-group'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className='email'>jessica@unfinishedlifestyle.com</div>
                </div>

                <div className='bullet-group'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="text"><a target="_blank" href="https://www.facebook.com/Unfinishedlifestyle">Facebook</a>  <FontAwesomeIcon icon={faLink} /></div>
                </div>

            </div>

        </div>

        </div>
    );
}