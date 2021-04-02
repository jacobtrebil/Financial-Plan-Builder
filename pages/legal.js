import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Legal() {
    return (
    <div>
        <div className="legal-section">
           <h1 id="legal-h1">Terms of Use & Privacy Policy</h1>
           <p className="terms">Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the
http://www.financialplanbuilder.com website and the App operated by Financialplanbuilder LLC ("us", "we", or "our").
Your access to and use of the Service is conditioned on your acceptance of and compliance with
these Terms. These Terms apply to all visitors, users and others who access or use the Service.
By accessing or using the Service you agree to be bound by these Terms. If you disagree
with any part of the terms then you may not access the Service.</p>

<h2 className="terms-h2">Purchases</h2>
<p className="terms">If you wish to purchase any product or service made available through the Service ("Purchase"),
you may be asked to supply certain information relevant to your Purchase including, without
limitation, your …
The Purchases section is for businesses that sell online (physical or digital). For the full
disclosure section or for a “SaaS” section, create your own Terms of Use.</p>

<h2 className="terms-h2">Termination</h2>

<p className="terms">We may terminate or suspend access to our Service immediately, without prior notice or liability, for
any reason whatsoever, including without limitation if you breach the Terms.
All provisions of the Terms which by their nature should survive termination shall survive
termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
limitations of liability.</p>

<h2 className="terms-h2">Content</h2>

<p className="terms">Our Service allows you to post, link, store, share and otherwise make available certain information,
text, graphics, videos, or other material ("Content"). You are responsible for the</p>

<h2 className="terms-h2">Links To Other Web Sites</h2>

<p className="terms">Our Service may contain links to third-party web sites or services that are not owned or controlled
by My Company (change this).
My Company (change this) has no control over, and assumes no responsibility for, the content,
privacy policies, or practices of any third party web sites or services. You further acknowledge and
agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any
damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
such content, goods or services available on or through any such web sites or services.</p>

<h2 className="terms-h2">Changes</h2>

<p className="terms">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms
taking effect. What constitutes a material change will be determined at our sole discretion.</p>

<h2 className="terms-h2">Contact Us</h2>

<p className="terms">If you have any questions about these Terms, please contact us.</p>
            <NavComponent />
        </div>
        <FooterComponent />
    </div>
    );
  } 
  
  export default Legal;