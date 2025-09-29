import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded shadow-md ">
      <h1 className="text-3xl font-bold mb-4 text-green-600 mt-12 ">Terms and Conditions</h1>
      <p className="text-gray-700 mb-4">
        Welcome! These terms cover using our free education platform. By accessing the site, you agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Use of Content</h2>
      <p className="text-gray-700 mb-4">
        Content is provided for learning only. You may download and print materials for personal or classroom use. Do not sell or republish without permission.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Accounts</h2>
      <p className="text-gray-700 mb-4">
        If you create an account, keep your credentials secure and accurate. You are responsible for activity under your account.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3 text-green-600">Acceptable Use</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Do not post harmful, abusive, or illegal content.</li>
        <li>Do not attempt to break or disrupt the service.</li>
        <li>Respect others in community spaces.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-gray-800">Community Contributions</h2>
      <p className="text-gray-700 mb-4">
        When you share content or feedback, you grant us a license to display it on the platform. We may moderate submissions that violate these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Links</h2>
      <p className="text-gray-700 mb-4">
        You may link to our pages for educational purposes. Do not imply endorsement without permission.
      </p>
      

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Content Liability</h2>
      <p className="text-gray-700 mb-4">
        We provide content as-is for learning. We are not liable for errors or outcomes from its use.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Changes</h2>
      <p className="text-gray-700 mb-4">
        We may update these terms to improve clarity or comply with law. Continued use means you accept the updated terms.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-green-600">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about these terms, contact us at: support@example.org
      </p>
    </div>
  );
};

export default TermsAndConditions;
