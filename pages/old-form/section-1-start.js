import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../../components/footer').then((mod) => mod.Footer)
)

function Section1() {
      return (
        <div className="section-1-start-box">
          <h1 id="section-start-h1">Section 1: Your Vision & Goals</h1>
          <h2 id="section-start-h2">We are going to ask a few questions to get clarity on your lifestyle vision and goals.</h2>
            <Link href="/section-1-kids"><button id="section-start-button">Next &#8594;</button></Link>
            <NavComponent />
            <FooterComponent />
        </div>
      );
    } 

    export default Section1;