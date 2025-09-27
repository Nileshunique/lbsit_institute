import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import { SITE_INFO } from '../constants/siteData';

// Lazy load the map component
const LazyMap = lazy(() => import('../components/LazyMap'));

const Branches = () => {
  const handleWhatsAppClick = phone => {
    const message = encodeURIComponent(
      "Hello! I'd like to know more about your courses and admission process."
    );
    window.open(
      `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`,
      '_blank'
    );
  };

  const handleCallClick = phone => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <>
      <SEO
        title="Our Branches"
        description={`Find all ${SITE_INFO.name} branches across Gurugram. Visit our convenient locations for quality education and courses.`}
        keywords="LBSIT branches, Gurugram locations, computer institute branches, education centers"
      />

      <div className="min-h-screen section-bg-light">
        {/* Header Section */}
        <section className="bg-primary-600 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Our Branches
              </h1>
              <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
                Visit any of our convenient locations across Gurugram for
                quality education and personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-12 sm:py-16 section-bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {SITE_INFO.allbranches.map((branch, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-200"
                >
                  {/* Map Section */}
                  <div className="h-64 bg-neutral-100">
                    <Suspense
                      fallback={
                        <div className="w-full h-full bg-neutral-200 animate-pulse flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-neutral-300 rounded-full mx-auto mb-2"></div>
                            <span className="text-neutral-500">
                              Loading map...
                            </span>
                          </div>
                        </div>
                      }
                    >
                      <LazyMap mapUrl={branch.mapUrl} />
                    </Suspense>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3">
                        {branch.name || `Branch ${index + 1}`}
                      </h3>
                      <div className="flex items-start space-x-3 mb-4">
                        <MapPinIcon className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex space-x-3 mb-4">
                      <button
                        onClick={() => handleCallClick(branch.phone)}
                        className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm"
                      >
                        <PhoneIcon className="w-4 h-4" />
                        <span>Call</span>
                      </button>

                      <button
                        onClick={() => handleWhatsAppClick(branch.whatsapp)}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm font-medium"
                      >
                        <span>💬</span>
                        <span>WhatsApp</span>
                      </button>
                    </div>

                    {/* Additional Info */}
                    <div className="pt-4 border-t border-neutral-200">
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <ClockIcon className="w-4 h-4" />
                        <span>{SITE_INFO.openingTime.default}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 section-bg-light">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                  Need Help Choosing a Branch?
                </h2>
                <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Contact us and we'll help you find the most convenient
                  location for your learning journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => handleCallClick(SITE_INFO.phone)}
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    <span>Call {SITE_INFO.phone}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsAppClick(SITE_INFO.whatsapp)}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <span>💬</span>
                    <span>WhatsApp Us</span>
                  </button>

                  <Link
                    to="/contact"
                    className="btn-secondary flex items-center justify-center space-x-2"
                  >
                    <span>Visit Contact Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Branches;
