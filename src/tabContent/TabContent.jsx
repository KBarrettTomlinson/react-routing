import React from 'react';
import './TabContent.css';

const TabContent = (props) => {

    const {tabContentHeader, tabContentBody} = props;

    return (
        <React.Fragment>
            <div className="tab-content">
                <h1>{tabContentHeader}</h1>
                <p>{tabContentBody}</p>
            </div>
        </React.Fragment>
    );
}

export default TabContent;