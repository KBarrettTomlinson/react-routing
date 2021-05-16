import React from 'react';
import { useHistory } from 'react-router-dom';
import './TabLink.css';

const TabLink = (props) => {
    const {tabLinkName, urlExtension} = props;
    console.log();
    const history = useHistory();

    return (
        <React.Fragment>
            <button className="tablink" onClick = {() => {history.push(urlExtension)}}>{tabLinkName}</button>
        </React.Fragment>
    );
}

export default TabLink;