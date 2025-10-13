import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-6 text-center">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          Welcome to <strong>Tech Lion</strong>. By accessing or using
          our website and services, you agree to comply with these Terms &
          Conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mb-3 mt-8">1. Use of Our Services</h2>
        <p className="mb-6">
          You agree to use our website only for lawful purposes and in a way
          that does not infringe on others’ rights or restrict their use.
        </p>

        <h2 className="text-xl font-semibold mb-3">2. Intellectual Property</h2>
        <p className="mb-6">
          All content, trademarks, and code on this website are the property of
          <strong> Your Company Name</strong> or its licensors. You may not copy,
          modify, or distribute any materials without written consent.
        </p>

        <h2 className="text-xl font-semibold mb-3">3. Limitation of Liability</h2>
        <p className="mb-6">
          We do not guarantee that our website will always be available or free
          from errors. To the fullest extent permitted by law, we are not liable
          for any direct or indirect damages resulting from your use of our
          website or services.
        </p>

        <h2 className="text-xl font-semibold mb-3">4. Third-Party Links</h2>
        <p className="mb-6">
          Our website may include links to third-party sites. We are not
          responsible for the content or privacy practices of those sites.
        </p>

        <h2 className="text-xl font-semibold mb-3">5. Changes to These Terms</h2>
        <p className="mb-6">
          We may update these Terms occasionally. Any changes will be posted on
          this page with the updated date.
        </p>

        <h2 className="text-xl font-semibold mb-3">6. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by the laws of the United States and the
          State of California, without regard to conflict of law principles.
        </p>

        <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
        <p>
          For questions about these Terms, please contact us at:
        </p>
        <p className="mt-2">
          📧 <strong>legal@techlion.com</strong>
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
