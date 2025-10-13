import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          At <strong>Tech Lion</strong>, we value your privacy. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you visit our website or use our services.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-8">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name, email address,
          phone number, billing details, and any data you voluntarily submit.
          We also automatically collect technical data like your IP address,
          browser type, and usage statistics through cookies and analytics tools.
        </p>

        <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="mb-6">
          We use your data to:
          <ul className="list-disc list-inside mt-2">
            <li>Provide and improve our services</li>
            <li>Process payments and orders</li>
            <li>Communicate with you about updates or promotions</li>
            <li>Ensure website security and prevent fraud</li>
          </ul>
        </p>

        <h2 className="text-xl font-semibold mb-3">3. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell your personal information. We may share your data with
          trusted service providers (like payment processors or analytics tools)
          who help us operate our business, under strict confidentiality terms.
        </p>

        <h2 className="text-xl font-semibold mb-3">4. Cookies and Tracking</h2>
        <p className="mb-6">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content. You can choose to disable cookies in
          your browser settings.
        </p>

        <h2 className="text-xl font-semibold mb-3">5. Data Protection</h2>
        <p className="mb-6">
          We use industry-standard security measures to protect your data from
          unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
        <p className="mb-6">
          If you are a U.S. resident, you may have rights under applicable laws
          like the California Consumer Privacy Act (CCPA). You can request
          access to, correction of, or deletion of your data by contacting us.
        </p>

        <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, you
          can contact us at:
        </p>
        <p className="mt-2">
          📧 <strong>privacy@teachlion.com</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
