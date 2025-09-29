import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-green-600 mt-12">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        We respect your privacy. This policy explains what we collect and how we use it to provide a safe learning experience.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect minimal data needed to run the platform:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Account: Name and email when you sign up (if you create an account).</li>
        <li>Usage: Basic analytics like pages visited and device type.</li>
        <li>Feedback: Messages you send via Help & Feedback.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">How We Use Information</h2>
      <p className="text-gray-700 mb-4">
        We use data to:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Provide courses and resources.</li>
        <li>Respond to support requests.</li>
        <li>Improve content and platform performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Disclosure of Your Information</h2>
      <p className="text-gray-700 mb-4">
        We do not sell your data. We only share when necessary to operate the service or when required by law:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Service providers for hosting/analytics (bound by confidentiality).</li>
        <li>Legal requests when required by applicable law.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Data Choices</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>You can request account deletion or data export by contacting us.</li>
        <li>You may opt-out of non-essential communications.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Contact Us</h2>
      <p className="text-gray-700">
        If you have questions about this Privacy Policy, contact us at: privacy@example.org
      </p>
    </div>
  );
};

export default PrivacyPolicy;
