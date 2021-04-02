import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const ProfileComponent = _dynamic(() =>
  import('../components/profile').then((mod) => mod.Profile)
)

const PaymentComponent = _dynamic(() =>
  import('../components/payment-methods').then((mod) => mod.Payment)
)

const AccountComponent = _dynamic(() =>
  import('../components/account').then((mod) => mod.Account)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Settings() {
    return (
      <div id="settings-container">
       <div className="settings-section">
           <h1 className="settings-h1">Settings</h1>
           <NavComponent />
           <div id="settings-content">
             <nav>
               <p id="settings-nav-profile" className="settings-nav-p">Profile</p>
               <p id="settings-nav-middle-p" className="settings-nav-p">Payment Methods</p>
               <p className="settings-nav-p">Account</p>
             </nav>
             <ProfileComponent />
             <PaymentComponent />
             <AccountComponent />
           </div>
       </div>
       <FooterComponent />
      </div>
    );
  } 
  
  export default Settings;