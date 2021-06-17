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
        <div className="legalSection">
           <h1 id="legalH1">Terms of Use & Privacy Policy</h1>
           <p className="terms">Please read these Terms of Use ("Terms", "Terms of Use") carefully before using the
http://www.financialplanbuilder.com website and the App operated by Financialplanbuilder LLC ("us", "we", or "our").
Your access to and use of the Service is conditioned on your acceptance of and compliance with
these Terms. These Terms apply to all visitors, users and others who access or use the Service.
By accessing or using the Service you agree to be bound by these Terms. If you disagree
with any part of the terms then you may not access the Service. The privacy policy ("policy") will help you understand how FinancialPlanBuilder ("us", "we", "our") 
uses and protects the data you provide to us when you visit and use FinancialPlanBuilder.com ("website", "service").
We reserve the right to change this policy at any given time. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.</p>

<h2 className="termsH2">Termination</h2>

<p className="terms">We may terminate or suspend access to our Service immediately, without prior notice or liability, for
any reason whatsoever, including without limitation if you breach the Terms.
All provisions of the Terms which by their nature should survive termination shall survive
termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and
limitations of liability.</p>

<h2 className="termsH2">Links To Other Web Sites</h2>

<p className="terms">Our Service may contain links to third-party web sites or services that are not owned or controlled
by FinancialPlanBuilder.
FinancialPlanBuilder has no control over, and assumes no responsibility for, the content,
privacy policies, or practices of any third party web sites or services. You further acknowledge and
agree that FinancialPlanBuilder shall not be responsible or liable, directly or indirectly, for any
damage or loss caused or alleged to be caused by or in connection with use of or reliance on any
such content, goods or services available on or through any such web sites or services.</p>

<h2 className="termsH2">Changes</h2>

<p className="terms">We reserve the right, at our sole discretion, to modify or replace these Terms & Privacy Policy at any time. What constitutes a material change will be determined at our sole discretion.</p>

<h2 className="termsH2">What User Data We Collect</h2>

<p className="terms">When you use our app, we may collect the following data: Your IP address. Any information you provide us through our create a plan feature. Other information such as interests and preferences. Data profile regarding your online behavior on our website.</p>

<h2 className="termsH2">Why We Collect Your Data</h2>

<p className="terms">We are collecting your data for several reasons: To better understand your needs. To improve our product. To provide you with the an accurate and comprehensive financial plan.</p>

<h2 className="termsH2">Safeguarding and Securing the Data</h2>

<p className="terms">FinancialPlanBuilder is committed to securing your data and keeping it confidential. FinancialPlanBuilder has done all in its powerr to prevent data theft, unauthorized access, and disclosure by implementing the latest technology and software, which help us safeguard all the information we collect online.</p>

<h2 className="termsH2">Our Cookie Policy</h2>

<p className="terms">Once you agree ot allow our website to use cookie, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit). The data we collect by using cookies is used to customize our app to your needs. Please note that cookies do not allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not sot that we can provide a better experience for you. If you want to disable cookies, you can do it by accessing the settings of your internet browser, however our service may not work properly if you disable cookies.</p>

<h2 className="termsH2">Restricting the Collection of your Personal Data</h2>

<p className="terms">At some point, you may wish to restrict the use and collection of your personal data. You can achieve this by not providing us with information that you do not want to disclose. FinancialPlanBuilder will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</p>

<h2 className="termsH2">Attribution</h2>

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

<h2 className="termsH2">Contact Us</h2>

<p className="terms">If you have any questions about these Terms, please contact us at info@financialplanbuilder.com.</p>
            <NavComponent />
        </div>
        <FooterComponent />
    </div>
    );
  } 
  
  export default Legal;