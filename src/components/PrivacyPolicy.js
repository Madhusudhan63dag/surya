import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            At Surya Media ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information about you when you use our website, services, and interact with us.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you contact us, sign up for our newsletter, or use our services. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email address, phone number)</li>
            <li>Company information (company name, job title)</li>
            <li>Messages you send through our contact forms</li>
            <li>Service preferences and requirements</li>
          </ul>
          <p className="mb-4">
            We also automatically collect certain information when you visit our website, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Information about your visit, including pages viewed and links clicked</li>
            <li>Information collected through cookies and similar technologies</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-2">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze how our website is used</li>
            <li>Prevent fraudulent activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Sharing Your Information</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors (e.g., lawyers, accountants)</li>
            <li>Law enforcement or other authorities when required by applicable laws</li>
            <li>In connection with a business transition (e.g., merger or acquisition)</li>
          </ul>
          <p className="mb-4">
            We do not sell your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Cookies and Similar Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can control cookies through your browser settings and other tools.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Your Rights</h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access personal information we hold about you</li>
            <li>Correct inaccurate personal information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to our processing of your data</li>
            <li>Data portability (receiving your data in a structured format)</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the details provided below.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our website and services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this page. We encourage you to review this privacy policy periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us at:
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

export default PrivacyPolicy;
