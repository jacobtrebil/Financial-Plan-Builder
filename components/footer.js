import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
    <div className="footerSection">
        <div className="footerNavBox">
            <Link href="/"><p className="footerNavItem">Home</p></Link>
            <Link href="/legal"><p className="footerNavItem">Legal & Privacy</p></Link>
            <Link href="/settings"><p className="footerNavItem">Account</p></Link>
        </div>
        <div className="footerCopyrightBox">
            <p className="footerCopyright">©2021 FinancialPlanBuilder</p>
        </div>
    </div>
    );
  }