import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function SideBar() {
      return (
      <div>
        <nav id="sidebar">
                <img id="fpbTopLogo" className="sidebar-logo" src="/images/fpblogo.png" width={38} height={38}/>
              <div id="plansSideLogo">
                <Link href="/"><Image className="plans" src="/images/PlansIcon1.png" width={25} height={25}/></Link>
              </div>
              <div id="settingsSideLogo">
                <Link href="/settings"><Image className="settings" src="/images/settings1.png" width={22} height={22}/></Link>
              </div>
              </nav>
      </div>
      );
    }