import { useState, useRef, useEffect } from 'react';

const LazyMap = ({ mapUrl }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const mapRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full">
      {shouldLoad ? (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="LBSIT Institute Location"
        />
      ) : (
        <div className="w-full h-full bg-neutral-200 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 bg-neutral-300 rounded-full mx-auto mb-2"></div>
            <span className="text-neutral-500">Loading map...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyMap;