import React from 'react';
import './TabLink.css';

const TabLink = (props) => {
    const {tabLinkName} = props;

    return (
        <React.Fragment>
            <button className="tablink">{tabLinkName}</button>
        </React.Fragment>
    );
}

export default TabLink;