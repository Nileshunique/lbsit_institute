import SEO from '../components/SEO';
import { SITE_INFO } from '../constants/siteData';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for LBSIT Institute. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, privacy rights"
      />

      <div className="min-h-screen section-bg-light">
        {/* Header Section */}
        <section className="bg-primary-400 text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Your privacy is important to us. Learn how we protect your information.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-600 mb-6">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Information We Collect</h2>
                <p className="text-neutral-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  enroll in courses, contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Educational background and course preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences and feedback</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Provide, maintain, and improve our educational services</li>
                  <li>Process enrollments and manage your account</li>
                  <li>Send you course updates, educational content, and important notices</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Information Sharing</h2>
                <p className="text-neutral-600 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share information with:
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners for joint educational programs (with your consent)</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Data Security</h2>
                <p className="text-neutral-600 mb-6">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Your Rights</h2>
                <p className="text-neutral-600 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-neutral-600 mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, 
                  and provide personalized content. You can control cookie settings through your browser.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Children's Privacy</h2>
                <p className="text-neutral-600 mb-6">
                  Our services are not directed to children under 13. We do not knowingly collect 
                  personal information from children under 13. If you believe we have collected 
                  such information, please contact us immediately.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-neutral-600 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Contact Us</h2>
                <p className="text-neutral-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="bg-neutral-50 p-4 rounded-lg">
                  <p className="text-neutral-700 mb-2">
                    <strong>Email:</strong> {SITE_INFO.email}
                  </p>
                  <p className="text-neutral-700 mb-2">
                    <strong>Phone:</strong> {SITE_INFO.phone}
                  </p>
                  <p className="text-neutral-700">
                    <strong>Address:</strong> {SITE_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;