import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ClockIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import { COURSES } from '../constants/courses';
import { SITE_INFO } from '../constants/siteData';

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = COURSES.find(c => c.id === parseInt(courseId));

  // If course not found, redirect to courses page
  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const handleCall = () => {
    window.open(`tel:${SITE_INFO.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${course.name} course. Can you provide more details about enrollment, schedule, and fees?`;
    const whatsappUrl = `https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Get related courses (same category, excluding current course)
  const relatedCourses = COURSES.filter(
    c => c.category === course.category && c.id !== course.id
  ).slice(0, 3);

  return (
    <>
      <SEO
        title={`${course.name} Course`}
        description={`Learn ${course.name} at Gyanplanet Institute. ${course.description} Duration: ${course.duration}. Expert instructors and hands-on training.`}
        keywords={`${course.name}, ${course.category}, ${course.features.join(', ')}, course, training, institute`}
      />

      <div className="min-h-screen section-bg-light">
        {/* Header Section */}
        <section className="bg-primary-400 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <Link
              to="/courses"
              className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-700 mb-6 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>Back to Courses</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-900 text-white rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-primary-900">
                    <ClockIcon className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary-900">
                  {course.name}
                </h1>

                <p className="text-lg sm:text-xl opacity-90 mb-6 text-primary-700">
                  {course.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleCall}
                    className="flex items-center justify-center space-x-2 bg-white text-primary-600 hover:bg-neutral-100 font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    <span>Call Now</span>
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center">
                <LazyImage
                  src={`${process.env.PUBLIC_URL}/assets/images/course/logo/${course.logoName}`}
                  alt={course.name}
                  className="w-full max-w-md h-64 sm:h-80 object-cover rounded-xl shadow-2xl"
                  placeholder="📚"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                    What You'll Learn
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircleIcon className="h-6 w-6 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    Course Overview
                  </h3>
                  <div className="prose prose-lg max-w-none text-neutral-600">
                    <p className="mb-4">
                      Our {course.name} course is designed to provide you with
                      comprehensive knowledge and practical skills in{' '}
                      {course.category.toLowerCase()}. Whether you're a beginner
                      looking to start your career or a professional seeking to
                      upgrade your skills, this course will help you achieve
                      your goals.
                    </p>

                    <p className="mb-4">
                      The course combines theoretical knowledge with hands-on
                      practical sessions, ensuring you gain real-world
                      experience. Our expert instructors bring years of industry
                      experience and will guide you through every step of your
                      learning journey.
                    </p>

                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                      Key Benefits:
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Industry-relevant curriculum designed by experts</li>
                      <li>Hands-on practical training with real projects</li>
                      <li>Small batch sizes for personalized attention</li>
                      <li>Flexible timing options to suit your schedule</li>
                      <li>Certificate upon successful completion</li>
                      <li>Job placement assistance and career guidance</li>
                    </ul>

                    <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                      Who Should Enroll:
                    </h4>
                    <ul className="list-disc pl-6 mb-4">
                      <li>
                        Students looking to build a career in{' '}
                        {course.category.toLowerCase()}
                      </li>
                      <li>Working professionals seeking skill enhancement</li>
                      <li>
                        Entrepreneurs wanting to understand the field better
                      </li>
                      <li>Anyone interested in learning {course.name}</li>
                    </ul>
                  </div>
                </div>

                {/* Software Requirements & Practice */}
                {course.software && (
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
                      Software & Practice Resources
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Primary Software */}
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">
                          Primary Software
                        </h3>
                        <div className="bg-primary-50 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-primary-900 mb-2">
                            {course.software.primary}
                          </h4>
                          <p className="text-sm text-primary-700">
                            Industry-standard software used in professional
                            environments
                          </p>
                        </div>

                        {course.software.alternatives && (
                          <div>
                            <h4 className="font-semibold text-neutral-900 mb-3">
                              Free Alternatives
                            </h4>
                            <div className="space-y-2">
                              {course.software.alternatives.map(
                                (alt, index) => (
                                  <div
                                    key={index}
                                    className="bg-neutral-50 rounded-lg p-3"
                                  >
                                    <span className="text-sm font-medium text-neutral-900">
                                      {alt}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Online Practice */}
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">
                          Online Practice Platforms
                        </h3>
                        {course.software.onlinePractice && (
                          <div className="space-y-4">
                            {course.software.onlinePractice.map(
                              (platform, index) => (
                                <div
                                  key={index}
                                  className="bg-secondary-50 rounded-lg p-4"
                                >
                                  <h4 className="font-semibold text-secondary-900 mb-2">
                                    {platform.name}
                                  </h4>
                                  <p className="text-sm text-secondary-700 mb-3">
                                    {platform.description}
                                  </p>
                                  <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-secondary-600 hover:text-secondary-800"
                                  >
                                    Visit Platform →
                                  </a>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Installation Guide */}
                    {course.software.installation && (
                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-neutral-900 mb-4">
                          Installation Guide
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {course.software.installation.windows && (
                            <div className="bg-blue-50 rounded-lg p-4">
                              <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                                🪟 Windows Installation
                              </h4>
                              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                                {course.software.installation.windows.map(
                                  (step, index) => (
                                    <li key={index}>{step}</li>
                                  )
                                )}
                              </ol>
                            </div>
                          )}

                          {course.software.installation.mac && (
                            <div className="bg-gray-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                                🍎 Mac Installation
                              </h4>
                              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800">
                                {course.software.installation.mac.map(
                                  (step, index) => (
                                    <li key={index}>{step}</li>
                                  )
                                )}
                              </ol>
                            </div>
                          )}
                        </div>

                        {course.software.installation.alternatives && (
                          <div className="mt-6 bg-green-50 rounded-lg p-4">
                            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                              💚 Free Alternatives
                            </h4>
                            <ul className="space-y-2 text-sm text-green-800">
                              {course.software.installation.alternatives.map(
                                (alt, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{alt}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Prerequisites & Career Opportunities */}
                {(course.prerequisites || course.careerOpportunities) && (
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {course.prerequisites && (
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-4">
                            Prerequisites
                          </h3>
                          <ul className="space-y-2">
                            {course.prerequisites.map((prereq, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-700">
                                  {prereq}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {course.careerOpportunities && (
                        <div>
                          <h3 className="text-xl font-bold text-neutral-900 mb-4">
                            Career Opportunities
                          </h3>
                          <ul className="space-y-2">
                            {course.careerOpportunities.map((career, index) => (
                              <li
                                key={index}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircleIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-neutral-700">
                                  {career}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Related Courses */}
                {relatedCourses.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                      Related Courses
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {relatedCourses.map(relatedCourse => (
                        <Link
                          key={relatedCourse.id}
                          to={`/course/${relatedCourse.id}`}
                          className="block bg-neutral-50 rounded-lg p-4 hover:bg-neutral-100 transition-colors duration-200"
                        >
                          <LazyImage
                            src={`${process.env.PUBLIC_URL}/assets/images/course/logo/${relatedCourse.logoName}`}
                            alt={relatedCourse.name}
                            className="w-full h-24 object-cover rounded-lg mb-3"
                            placeholder="📚"
                          />
                          <h4 className="font-semibold text-neutral-900 mb-1 text-sm">
                            {relatedCourse.name}
                          </h4>
                          <p className="text-xs text-neutral-600">
                            {relatedCourse.duration}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    Course Information
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <ClockIcon className="h-5 w-5 text-secondary-500" />
                      <div>
                        <p className="text-sm text-neutral-600">Duration</p>
                        <p className="font-semibold text-neutral-900">
                          {course.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <AcademicCapIcon className="h-5 w-5 text-secondary-500" />
                      <div>
                        <p className="text-sm text-neutral-600">Category</p>
                        <p className="font-semibold text-neutral-900">
                          {course.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleCall}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      <PhoneIcon className="h-5 w-5 mr-2" />
                      Call for Enrollment
                    </button>

                    <button
                      onClick={handleWhatsApp}
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
                      WhatsApp Inquiry
                    </button>

                    <Link
                      to="/contact"
                      className="w-full btn-secondary flex items-center justify-center"
                    >
                      Visit Our Campus
                    </Link>
                  </div>

                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 mb-3">
                      Need Help?
                    </h4>
                    <div className="space-y-2 text-sm text-neutral-600">
                      <p>📞 {SITE_INFO.phone}</p>
                      <p>📧 {SITE_INFO.email}</p>
                      <p>📍 {SITE_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseDetail;
