import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Start() {
      return (
        <div className="section-1-start-box">
          <h1 id="section-start-h1">Section 2: Your Financial Statements</h1>
          <h2 id="section-start-h2">We are going to ask a few questions to get clarity on your current and future finances.</h2>
            <Link href="/section-2-income"><button id="section-start-button">Next &#8594;</button></Link>
            <NavComponent />
            <FooterComponent />
        </div>
      );
    } 

    export default Start;