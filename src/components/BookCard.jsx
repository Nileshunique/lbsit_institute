import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import LazyImage from './LazyImage';

const BookCard = ({ book }) => {
  const handleDownload = () => {
    // In a real app, this would handle the actual download
    alert(`Download link for "${book.title}" will be available after purchase.`);
  };



  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
      {/* Book Image */}
      <div className="relative">
        <LazyImage
          src={book.image}
          alt={book.title}
          className="w-full h-64 object-cover"
          placeholder="📖"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-600 text-white rounded-full">
            {book.category}
          </span>
        </div>
        {book.originalPrice && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            SAVE ₹{parseInt(book.originalPrice.replace('₹', '')) - parseInt(book.price.replace('₹', ''))}
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Title and Author */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>



        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {book.description}
        </p>

        {/* Book Details */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <span>{book.pages} pages</span>
          <span>PDF Format</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-2xl font-bold text-primary-600">{book.price}</span>
          {book.originalPrice && (
            <span className="text-lg text-gray-500 line-through">{book.originalPrice}</span>
          )}
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          <ArrowDownTrayIcon className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;