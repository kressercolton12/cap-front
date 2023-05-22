import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPhoto from "../../../static/assets/images/DSC03228.jpg";


export default function() {
    return (
        <div className='page-content'>
        <div className='left'
        style={{
            background: "url(" + contactPhoto + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        />
        <div className='right'>
            <div className='bullet-points'>
                <div className='bullet-group'>
                    <div className='icons'>
                        {/* <FontAwesomeIcon icon='' */}

                    </div>

                </div>
            </div>

        </div>

        </div>
    );
}