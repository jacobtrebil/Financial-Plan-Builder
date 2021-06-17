import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Payment() {
    return (
    <div>
        <p id="paymentMethodTitle">Payment Methods</p>   
        <button className="paymentButton">+ Add Payment Method</button>           
        <hr className="paymentSolidHr"></hr>
        <p id="noPaymentMessage">You currently have 0 payment methods added. Click the button above to add a payment method.</p>
    </div>
    );
  }