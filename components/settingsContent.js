import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Account() {
    return (
    <div>
    <div>
        <div className="accountContainer">
            <p id="paymentMethodTitle">Payment Methods</p>   
            <button className="paymentButton">+ Add Payment Method</button>           
            <hr className="paymentSolidHr"></hr>
            <p id="settingsMessage">You currently have 0 payment methods added. Click the button above to add a payment method.</p>
        </div>
    </div>
    <div>
        <div className="accountContainer">
            <p id="cancelMethodTitle">Close Account & Cancel Subscription</p>   
            <button className="cancelButton">Close Account</button>           
            <hr className="cancelSolidHr"></hr>
            <p id="settingsMessage">Click the button above to close your account and cancel your subscription. This can not be undone.</p>
        </div>
    </div>
    </div>
    );
  }