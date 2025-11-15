// Vendor bundle containing critical dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize performance monitoring
if (process.env.NODE_ENV === 'production') {
  try {
    // Web Vitals monitoring
    const reportWebVitals = ({ id, name, value }) => {
      window.gtag?.('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    };

    // Load performance monitoring
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportWebVitals);
      getFID(reportWebVitals);
      getFCP(reportWebVitals);
      getLCP(reportWebVitals);
      getTTFB(reportWebVitals);
    });
  } catch (err) {
    console.error('Error initializing performance monitoring:', err);
  }
}

// Export commonly used vendor modules
export {
  React,
  ReactDOM,
  BrowserRouter,
  motion,
  AnimatePresence
};