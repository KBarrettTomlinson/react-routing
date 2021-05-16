import React from 'react';
import './App.css';
import TabContent from './tabContent/TabContent';
import TabLink from './tabLink/TabLink';


const stockholmTab = {
  id: 1,
  tabLinkName: "Stockholm",
  tabContentHeader: "Stockholm",
  tabContentBody: "Stockholm is the Capitol of Sweden",
  urlExtention: "/stockholm"
}

const osloTab = {
  id: 2,
  tabLinkName: "Oslo",
  tabContentHeader: "Oslo",
  tabContentBody: "Oslo is the Capitol of Norway",
  urlExtention: "/oslo"
}

const helsinkiTab = {
  id: 3,
  tabLinkName: "Helsinki",
  tabContentHeader: "Helsinki",
  tabContentBody: "Helsinki is the Capitol of Finland",
  urlExtention: "/helsinki"
}

const copenhagenTab = {
  id: 4,
  tabLinkName: "Copenhagen",
  tabContentHeader: "Copenhagen",
  tabContentBody: "Copenhagen is the Capitol of Denmark",
  urlExtention: "/copenhagen"
}

const tabData = [ stockholmTab, osloTab, helsinkiTab, copenhagenTab];

function App() {
  return (
    <React.Fragment>
      {tabData.map( (tab) => { return (<TabLink key = {tab.id} {...tab}></TabLink>); })}
      
      {/* <TabContent key = {tab.id} {...tab}></TabContent> */}

    </React.Fragment>
  );
}

export default App;
