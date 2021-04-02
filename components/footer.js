import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
    <div id="footer-section">
        <div id="footer-nav-box">
        <Link href="/"><p className="footer-nav-item">Home</p></Link>
            <Link href="/legal"><p className="footer-nav-item">Legal & Privacy</p></Link>
        </div>
        <div id="footer-copyright-box">
            <p id="footer-copyright">©2021 FinancialPlanBuilder</p>
        </div>
    </div>
    );
  }