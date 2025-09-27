import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - LBSIT Institute</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to LBSIT Institute homepage." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="text-center px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-neutral-800 mb-4">Page Not Found</h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200"
            >
              Go Home
            </Link>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/courses" 
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Browse Courses
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;