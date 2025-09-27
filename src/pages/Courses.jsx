import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import CourseCard from '../components/CourseCard';
import { SITE_INFO } from '../constants/siteData';
import { COURSES } from '../constants/courses';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = [
    'All',
    ...new Set(COURSES.map(course => course.category)),
  ];

  // Filter courses based on search and category
  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = course.searchKeys.some(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Courses"
        description="Explore our comprehensive range of courses designed to help you master new skills and advance your career. From web development to digital marketing."
        keywords="courses, training, education, web development, digital marketing, data science, graphic design"
      />

      <div className="min-h-screen section-bg-light">
        {/* Header Section */}
        <section className="bg-primary-600 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
                Our Courses
              </h1>
              <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-4">
                Choose from our wide range of professional courses designed to
                help you achieve your career goals and master in-demand skills.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-6 sm:py-8 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between items-start">
              {/* Search Bar */}
              <div className="relative w-full max-w-md  md:mx-0">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>

              {/* Category Filter */}
              <div className="flex justify-center md:justify-start">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-xs sm:text-sm text-gray-600">
              Showing {filteredCourses.length} of {COURSES.length} courses
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MagnifyingGlassIcon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-600 mb-4 px-4 text-sm sm:text-base">
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
              Ready to Start Learning?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of students who have transformed their careers with
              our expert-led courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href={`tel:${SITE_INFO.phone}`}
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 w-full sm:w-auto"
              >
                Call Now: {SITE_INFO.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_INFO.phone}?text=Hi! I'm interested in your courses. Can you help me choose the right one?`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors duration-200 w-full sm:w-auto shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;
