import React, { useState } from 'react';
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

  const [showAccount, setShowAccount] = useState(true)
  const [showAccount2, setShowAccount2] = useState()

    return (
      <div id="settings-container">
       <div className="settings-section">
           <h1 className="settings-h1">Settings</h1>
           <NavComponent />
           <div id="settings-content">
             <nav id="settings-nav">
               <p id="settings-nav-profile" className="settings-nav-p" onClick= {function setProfile() {
                  setShowAccount(true) 
                  setShowAccount2(false) 
                  }}>Profile</p>
               <p className="settings-nav-p" onClick={function setAccount() {
                 setShowAccount(false)
                 setShowAccount2(true)
               }}>Account</p>
             </nav>
             {
            showAccount && (
              <div>
              <ProfileComponent />
              </div>
            )}
            {
            showAccount2 && (
              <div>
              <AccountComponent />
              </div>
            )}
           </div>
       </div>
       <FooterComponent />
      </div>
    );
  } 
  
  export default Settings;