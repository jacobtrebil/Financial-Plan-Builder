import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function SideBar() {
      return (
      <div id="sidebar-section">
        <nav id="sidebar">
                <img id="fpb-top-logo" className="sidebar-logo" src="/images/fpblogo.png" width={35} height={35}/>
              <div id="plans-side-logo">
                <Link href="/"><Image className="plans" src="/images/PlansIcon1.png" width={28} height={28}/></Link>
              </div>
              <div id="settings-side-logo">
                <Link href="/settings"><Image className="settings" src="/images/settings1.png" width={25} height={25}/></Link>
              </div>
              </nav>
      </div>
      );
    }