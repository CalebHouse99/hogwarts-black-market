import './Store.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Upgrade from '../components/Upgrade';
import lightLogo from '../img/HBM_Logo_v2_Black.png';

function Store() {
  return (
    <div>
      <Navbar logo={lightLogo}/>
      <Search />
      <Upgrade />
    </div>
  );
}

export default Store;
