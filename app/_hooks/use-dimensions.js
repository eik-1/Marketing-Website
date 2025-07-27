"use client";

import { useState, useEffect } from "react";

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial dimensions
    const updateDimensions = () => {
      if (element) {
        setDimensions({
          width: element.offsetWidth,
          height: element.offsetHeight,
        });
      }
    };

    // Update dimensions initially
    updateDimensions();

    // Create ResizeObserver to watch for dimension changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    // Start observing
    resizeObserver.observe(element);

    // Cleanup function
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return dimensions;
};
