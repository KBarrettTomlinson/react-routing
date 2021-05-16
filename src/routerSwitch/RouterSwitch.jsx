import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TabContent from '../tabContent/TabContent';

const RouterSwitch = (props) => {

    const {tabData} = props;

    return (
        <React.Fragment>
            <Switch>

                {tabData.map((tab) => {
                    return (
                        <Route key = {tab.id} path={tab.urlExtension}>
                            <TabContent {...tab}></TabContent>
                        </Route>
                    );
                })}


                <Route path="/">
                    <TabContent {...tabData[0]}></TabContent>
                </Route>
            </Switch>
        </React.Fragment>
    );
}

export default RouterSwitch;