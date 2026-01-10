import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen md:py-8 py-3 max-sm:px-2 px-3 bg-gray-50 text-gray-800">
      <div className="max-w-4xl rounded-lg mx-auto md:px-10 mx-md:px-10 px-3 md:py-12 max-md:py-10 py-3 bg-white shadow-lg ">
        {/* Intro */}
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p className="mb-6 leading-relaxed">
          At <span className="font-medium">Bus Bliss</span>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          data when you use our website and services.
        </p>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 lg:pl-5 pl-3 text-gray-700">
            <li>Personal information such as name, email address, and contact details</li>
            <li>Usage data including pages visited and interactions</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p className="leading-relaxed">
            We use your information to provide and improve our services,
            communicate with you, ensure platform security, and enhance user
            experience.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. Cookies</h2>
          <p className="leading-relaxed">
            We use cookies and similar technologies to analyze trends, track user
            activity, and improve functionality. You can control cookies through
            your browser settings.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
          <p className="leading-relaxed">
            We do not sell or rent your personal data. Information may be shared
            only with trusted partners or when required by law.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p className="leading-relaxed">
            We implement industry-standard security measures to protect your
            information, but no method of transmission over the internet is 100%
            secure.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to access, update, or delete your personal data.
            Please contact us if you wish to exercise these rights.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12 p-6 bg-gray-200 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us
            at:
          </p>
          <p className="mt-2 font-medium">support@busbliss.com</p>
        </section>
      </div>
    </div>
  );
}
