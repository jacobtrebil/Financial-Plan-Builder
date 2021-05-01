import React, { useState, useEffect } from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

function Loader() {
    return (
        <div className="loader">
            <div className="loader-box">
                <Image src="/images/loader.gif" width={300} height={200}></Image>
                <p className="loader-text">Creating your plan</p>
            </div>
        </div>
    );
}

export default Loader;