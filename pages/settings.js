import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const AccountComponent = _dynamic(() =>
  import('../components/settingsContent').then((mod) => mod.Account)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Settings() {

    return (
      <div>
       <div>
           <NavComponent />
           <div className="settingsContent">
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