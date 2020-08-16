import React from 'react';
import DefaultPage from '../Components/view/DefaultPage';
import LoadingScreen from '../Components/view/Loading';

export default function Start() {
    return (
        <>
            <DefaultPage>
                    <h1>Tech test</h1>
                    <LoadingScreen />
            </DefaultPage>
        </>
    );
};
