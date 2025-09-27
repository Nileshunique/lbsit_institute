import SEO from '../components/SEO';
import { SITE_INFO } from '../constants/siteData';

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for LBSIT Institute. Read our terms and conditions for using our educational services."
        keywords="terms of service, terms and conditions, user agreement, educational services"
      />

      <div className="min-h-screen section-bg-light">
        {/* Header Section */}
        <section className="bg-secondary-500 text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl opacity-90">
              Please read these terms carefully before using our services.
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

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-600 mb-6">
                  By accessing and using {SITE_INFO.name}'s services, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">2. Course Enrollment and Fees</h2>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Course fees must be paid in full before the start of classes unless otherwise arranged</li>
                  <li>Fees are non-refundable after the course commencement date</li>
                  <li>We reserve the right to cancel courses due to insufficient enrollment</li>
                  <li>Course schedules may be subject to change with prior notice</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">3. Student Responsibilities</h2>
                <p className="text-neutral-600 mb-4">As a student, you agree to:</p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Attend classes regularly and punctually</li>
                  <li>Complete assignments and projects on time</li>
                  <li>Respect instructors and fellow students</li>
                  <li>Use institute resources responsibly</li>
                  <li>Maintain academic integrity and avoid plagiarism</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">4. Intellectual Property</h2>
                <p className="text-neutral-600 mb-6">
                  All course materials, including but not limited to lectures, handouts, assignments, 
                  and digital content, are the intellectual property of {SITE_INFO.name}. Students may 
                  use these materials for personal learning purposes only and may not distribute, 
                  reproduce, or sell them without written permission.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">5. Certification</h2>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Certificates are awarded upon successful completion of course requirements</li>
                  <li>Minimum attendance of 80% is required for certification</li>
                  <li>Students must pass all assessments with the minimum required score</li>
                  <li>Certificates cannot be transferred to another person</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">6. Refund Policy</h2>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Full refund available if course is cancelled by the institute</li>
                  <li>50% refund available if withdrawal occurs within 7 days of course start</li>
                  <li>No refund after 7 days of course commencement</li>
                  <li>Refunds will be processed within 15-30 business days</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">7. Code of Conduct</h2>
                <p className="text-neutral-600 mb-4">Students must maintain professional behavior:</p>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>No harassment, discrimination, or inappropriate behavior</li>
                  <li>Respectful communication with staff and fellow students</li>
                  <li>No disruptive behavior during classes</li>
                  <li>Compliance with institute policies and procedures</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">8. Technology and Equipment</h2>
                <ul className="list-disc pl-6 text-neutral-600 mb-6">
                  <li>Students are responsible for their personal belongings</li>
                  <li>Institute equipment must be used carefully and returned in good condition</li>
                  <li>Any damage to institute property may result in charges</li>
                  <li>Students may need to provide their own software licenses for certain courses</li>
                </ul>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-neutral-600 mb-6">
                  {SITE_INFO.name} shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">10. Privacy and Data Protection</h2>
                <p className="text-neutral-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of our services, to understand our practices.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">11. Modifications to Terms</h2>
                <p className="text-neutral-600 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance 
                  of the modified terms.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">12. Governing Law</h2>
                <p className="text-neutral-600 mb-6">
                  These terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising under these terms shall be subject to the exclusive jurisdiction 
                  of the courts in our local jurisdiction.
                </p>

                <h2 className="text-2xl font-bold text-neutral-900 mb-4">13. Contact Information</h2>
                <p className="text-neutral-600 mb-4">
                  For questions about these Terms of Service, please contact us:
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

export default TermsOfService;