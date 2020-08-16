import React from 'react';
import '../../CSS/loadscreen.css';

export default function LoadingScreen() {
    return (
        <>
            <div className="loader">
                <div className="track">
                    <div className="mouse" />
                </div>
                <div className="face">
                    <div className="ears-container" />
                    <div className="eyes-container">
                        <div className="eye" />
                        <div className="eye" />
                    </div>
                    <div className="phiz">
                        <div className="nose" />
                        <div className="lip" />
                        <div className="mouth" />
                    </div>
                </div>
            </div>

        </>
    );
}