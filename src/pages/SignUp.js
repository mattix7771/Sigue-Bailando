
import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="text-center">
                    <h1>This application page is still under construction</h1>
                    <p>Please check back soon for updates.</p>
                    <Link to="/">Go back to homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
