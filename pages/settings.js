import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const AccountComponent = _dynamic(() =>
  import('../components/account').then((mod) => mod.Account)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Settings() {

    return (
      <div id="settingsContainer">
       <div className="settingsSection">
           <NavComponent />
           <div id="settingsContent">
              <div>
              <AccountComponent />
              </div>
           </div>
       </div>
       <FooterComponent />
      </div>
    );
  } 
  
  export default Settings;