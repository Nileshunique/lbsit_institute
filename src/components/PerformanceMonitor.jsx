import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          if (process.env.NODE_ENV === 'development') {
            console.log('LCP:', entry.startTime);
          }
        }
        if (entry.entryType === 'first-input') {
          if (process.env.NODE_ENV === 'development') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
        if (entry.entryType === 'layout-shift') {
          if (!entry.hadRecentInput) {
            if (process.env.NODE_ENV === 'development') {
              console.log('CLS:', entry.value);
            }
          }
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      if (process.env.NODE_ENV === 'development') {
        console.log('Page Load Time:', loadTime + 'ms');
      }
    });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;