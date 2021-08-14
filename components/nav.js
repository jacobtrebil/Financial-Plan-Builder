import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function SideBar() {
      return (
      <div>
        <nav className="navBar">
                <img className="fpbTopLogo" src="/images/fpblogo.png" width={38} height={38}/>
              <div className="sideLogo">
                <Link href="/"><Image className="plansIcon" src="/images/PlansIcon1.png" width={25} height={25}/></Link>
              </div>
              <div className="sideLogo">
                <Link href="/settings"><Image className="settingsIcon" src="/images/settings1.png" width={22} height={22}/></Link>
              </div>
              </nav>
      </div>
      );
    }