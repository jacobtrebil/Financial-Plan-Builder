import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";

export function Header() {

    const router = useRouter();

    function back() {
        router.push(`/`);
      }

    return (
    <div className="headerSection">
        <img className="headerLogo" src="/images/fpblogo.png" width={38} height={38}/>
        <div className="backArrowButton" onClick={back}>
            <p className="backArrowP">← back to start</p>
          </div>
    </div>
    );
  }