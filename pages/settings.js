import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

function Settings() {
    return (
       <div className="settings-section">
           <h1 className="settings-h1">Settings</h1>
           <NavComponent />
            </div>
    );
  } 
  
  export default Settings;