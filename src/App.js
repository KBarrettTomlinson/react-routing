import React from 'react';
import './App.css';
import tabData from './tabData/tabData.js'
import RouterSwitch from './routerSwitch/RouterSwitch';
import TabLink from './tabLink/TabLink';

function App() {

  return (
    <React.Fragment>
      {tabData.map( (tab) => { return (<TabLink key = {tab.id} {...tab}></TabLink>); })}      
      <RouterSwitch tabData = {tabData}></RouterSwitch>
    </React.Fragment>
  );
}

export default App;
