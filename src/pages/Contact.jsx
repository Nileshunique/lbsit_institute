import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { SITE_INFO } from '../constants/siteData';
import { COURSES } from '../constants/courses';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const successMessageRef = useRef(null);

  // Auto-dismiss success message after 15 seconds
  useEffect(() => {
    if (submitStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but if provided, should be valid)
    if (
      formData.phone.trim() &&
      !/^[+]?[0-9\s\-()]{10,15}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }

    return newErrors;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate form
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      // Scroll to first error field
      const firstErrorField = Object.keys(formErrors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrors({});

    try {
      // Initialize EmailJS with your public key
      emailjs.init(publicKey);

      const result = await emailjs.send(serviceId, templateId, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        course: formData.course,
        to_email: SITE_INFO.email,
      });

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          course: '',
        });

        // Scroll to success message
        setTimeout(() => {
          if (successMessageRef.current) {
            successMessageRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }, 100);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with LBSIT Institute. Contact us for course inquiries, admissions, or any questions about our educational programs."
        keywords="contact, admission, inquiry, phone, email, address, LBSIT institute"
      />

      <div className="section-bg-light">
        {/* Header Section */}
        <section className="bg-primary-600 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
                Contact Us
              </h1>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4">
                Ready to start your learning journey? Get in touch with us
                today. We're here to help you choose the right course for your
                goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Send us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div
                    ref={successMessageRef}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3 animate-pulse"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800 mb-1">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Thank you for contacting us! We've received your message
                        and will get back to you within 24 hours.
                      </p>
                      <p className="text-green-600 text-xs mt-2">
                        This message will disappear automatically in a few
                        seconds.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                    <ExclamationCircleIcon className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800 mb-1">
                        Error Sending Message
                      </h4>
                      <p className="text-red-700 text-sm">
                        Sorry, there was an error sending your message. Please
                        try again or contact us directly using the information
                        below.
                      </p>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base transition-colors ${
                          errors.name
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base transition-colors ${
                          errors.email
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base transition-colors ${
                          errors.phone
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600 flex items-center">
                          <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="course"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Interested Course
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base hover:border-gray-400 transition-colors"
                      >
                        <option value="">Select a course (optional)</option>
                        {COURSES.map((course, index) => (
                          <option key={index} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                      <span className="text-xs text-gray-500 ml-2">
                        ({formData.message.length}/1000 characters)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      maxLength={1000}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base transition-colors resize-vertical ${
                        errors.message
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="Tell us more about your inquiry, course preferences, or any questions you have..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <ExclamationCircleIcon className="h-4 w-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Details */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                    Get in Touch
                  </h2>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          Visit Our Campus
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {SITE_INFO.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          Call Us
                        </h3>
                        <a
                          href={`tel:${SITE_INFO.phone}`}
                          className="text-primary-600 hover:text-primary-700 text-sm sm:text-base"
                        >
                          {SITE_INFO.phone}
                        </a>
                        <p className="text-xs sm:text-sm text-gray-500">
                          {SITE_INFO.openingTime.default}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          Email Us
                        </h3>
                        <a
                          href={`mailto:${SITE_INFO.email}`}
                          className="text-primary-600 hover:text-primary-700 text-sm sm:text-base break-all"
                        >
                          {SITE_INFO.email}
                        </a>
                        <p className="text-xs sm:text-sm text-gray-500">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          Office Hours: Monday - Saturday
                        </h3>
                        <div className="text-gray-600 space-y-1 text-xs sm:text-sm">
                          <p>Morning: {SITE_INFO.openingTime.morning}</p>
                          <p>Evening: {SITE_INFO.openingTime.evening}</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi! I'd like to know more about your courses.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors duration-200 text-sm sm:text-base shadow-lg hover:shadow-xl"
                    >
                      <span>💬</span>
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="w-full flex items-center justify-center space-x-2 btn-secondary text-sm sm:text-base"
                    >
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Multiple Locations
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Choose the most convenient branch for your learning journey
              </p>
              <Link to="/branches" className="btn-primary inline-block">
                View All Branches
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SITE_INFO.allbranches.slice(0, 3).map((branch, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    {branch.name || `Branch ${index + 1}`}
                  </h3>
                  <div className="flex items-start space-x-2 mb-4">
                    <MapPinIcon className="h-4 w-4 text-primary-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {branch.address}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="flex-1 bg-secondary-600 text-white px-3 py-2 rounded text-xs text-center hover:bg-secondary-700 transition-colors"
                    >
                      Call
                    </a>
                    <a
                      href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}?text=Hi! I'd like to know more about your courses.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-3 py-2 rounded text-xs text-center hover:bg-green-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Find Us
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Visit our campus and experience our learning environment
              </p>
            </div>

            <div className="h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={SITE_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LBSIT Institute Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
