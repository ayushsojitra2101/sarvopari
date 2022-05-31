import React from 'react';
import lightLogo from '../assets/images/logo-whiter.svg';
import logoblacker from '../assets/images/logoblacker.svg';

export const AppFooter = (props) => {

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? logoblacker : lightLogo} alt="Logo" height="35px" />
            by
            <span className="font-medium ml-2">Dione Apps</span>
        </div>
    );
}
