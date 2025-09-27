import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { SITE_INFO } from '../constants/siteData';
import LazyImage from './LazyImage';

const CourseCard = ({ course }) => {
  const handleCall = () => {
    window.open(`tel:${SITE_INFO.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in the ${course.name} course. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${SITE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border-l-4 border-primary-400">
      <div className="p-6">
        {/* Course Logo and Header */}
        <div className="flex items-center space-x-4 mb-4">
          <LazyImage
            src={`${process.env.PUBLIC_URL}/assets/images/course/logo/${course.logoName}`}
            alt={course.name}
            className="min-w-16 max-w-16 h-16 rounded-lg object-cover shadow-md"
            placeholder="📚"
          />
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              {course.name}
            </h3>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
              {course.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-600 mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-900 mb-2">
            What you'll learn:
          </h4>
          <div className="flex flex-wrap gap-2">
            {course.features.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-md border border-neutral-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Course Details */}
        <div className="flex justify-center items-center mb-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
          <div className="text-center">
            <p className="text-sm text-neutral-600">Duration</p>
            <p className="font-semibold text-neutral-900">{course.duration}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link
            to={`/course/${course.id}`}
            className="w-full flex items-center justify-center space-x-2 bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <EyeIcon className="h-5 w-5" />
            <span>View Details</span>
          </Link>
          
          <div className="flex space-x-3">
            <button
              onClick={handleCall}
              className="flex-1 flex items-center justify-center space-x-2 btn-primary"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Call Now</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
