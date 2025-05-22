import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center text-[#002E62] hover:text-[#f26522] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Surya Media. These Terms and Conditions govern your use of our website and services. By accessing our website or using our services, you agree to these Terms. Please read them carefully.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Definitions</h2>
          <p className="mb-4">
            In these Terms and Conditions:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>"We", "our", "us", or "Surya Media" refers to Surya Media, its owners, directors, employees, and affiliates.</li>
            <li>"You" refers to the user or viewer of our website or client of our services.</li>
            <li>"Services" refers to all services offered by Surya Media, including but not limited to UGC content, video production, photography, digital marketing, and website development.</li>
            <li>"Website" refers to the website located at [website URL] and all associated pages.</li>
            <li>"Content" refers to all materials on our website, including text, images, videos, graphics, designs, and software.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Use of Our Website</h2>
          <p className="mb-4">
            You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website. Prohibited behavior includes but is not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Using the website in any way that could disable, overburden, or impair the site</li>
            <li>Using any robot, spider, or other automatic device to access the website</li>
            <li>Introducing viruses, trojans, worms, or other harmful material</li>
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Engaging in any activity that interferes with others' use of the website</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4">
            All content on our website, including but not limited to text, graphics, logos, images, audio, video, and software, is the property of Surya Media or its content suppliers and is protected by intellectual property laws.
          </p>
          <p className="mb-4">
            You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any content from our website without our prior written consent.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Our Services</h2>
          <p className="mb-4">
            Services provided by Surya Media are subject to separate agreements. By engaging our services, you agree to the specific terms of those agreements. In the absence of a specific agreement, these Terms and Conditions will govern the provision of our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Payment and Fees</h2>
          <p className="mb-4">
            Fees for our services are as quoted or otherwise agreed in writing. Payment terms will be specified in our invoices or service agreements. Unless otherwise stated, all fees are exclusive of applicable taxes.
          </p>
          <p className="mb-4">
            Late payments may be subject to interest charges. We reserve the right to suspend services if payments are not made according to the agreed terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Surya Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our website or services.
          </p>
          <p className="mb-4">
            Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the amount paid by you for the services giving rise to the claim.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless Surya Media, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our website or services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our website or services, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our discretion.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes relating to these Terms will be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">11. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our website or services after any changes indicates your acceptance of the modified Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="mb-4">
            Surya Media<br />
            Madhapur, Hyderabad, Telangana 500018<br />
            Email: suryamedia54@gmail.com<br />
            Phone: +91 81859 22222
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
