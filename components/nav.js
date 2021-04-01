import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _styles from './nav.module.css';

export function SideBar() {
      return (
      <div id="sidebar-section">
        <nav id="sidebar">
                <img id="fpb-top-logo" className="sidebar-logo" src="/images/fpblogo.png" width={35} height={35}/>
              <div id="home-side-logo">
                <Link href="/"><Image className="fpblogo" src="/images/HomeIcon.png" width={30} height={30}/></Link>
              </div>
              <div id="plans-side-logo">
                <Link href="/plans"><Image className="plans" src="/images/PlansIcon.png" width={25} height={25}/></Link>
              </div>
              <div id="integrations-side-logo">
                <Link href="/integrations"><Image className="integrations" src="/images/integrations.png" width={30} height={30}/></Link>
              </div>
              <div id="settings-side-logo">
                <Link href="/settings"><Image className="settings" src="/images/settings.png" width={25} height={25}/></Link>
              </div>
              </nav>
      </div>
      );
    }