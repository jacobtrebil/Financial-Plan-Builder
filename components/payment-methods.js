import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Payment() {
    return (
    <div>
        <p id="payment-method-title">Payment Methods</p>   
        <button className="payment-button">+ Add Payment Method</button>           
        <hr className="payment-solid-hr"></hr>
        <p id="no-payment-message">You currently have 0 payment methods added. Click the button above to add a payment method.</p>
    </div>
    );
  }