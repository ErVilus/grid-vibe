import { useState, useEffect } from 'react';

const CIRCUIT_COORDS = { lat: 43.7347, lng: 7.4206 }; // Monaco
const GEOFENCE_RADIUS_KM = 2.0;

export const useGPMode = () => {
  const [isOnSite, setIsOnSite] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    const checkLocation = () => {
      // Mocking GPS movement for demo purposes
      // In prod: navigator.geolocation.getCurrentPosition(...)
      const mockUserLat = 43.7350; 
      const mockUserLng = 7.4210; 

      const R = 6371; 
      const dLat = (mockUserLat - CIRCUIT_COORDS.lat) * Math.PI / 180;
      const dLon = (mockUserLng - CIRCUIT_COORDS.lng) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(CIRCUIT_COORDS.lat * Math.PI / 180) * Math.cos(mockUserLat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const d = R * c; 

      setDistance(parseFloat(d.toFixed(2)));
      
      if (d < GEOFENCE_RADIUS_KM) {
        setIsOnSite(true);
        document.documentElement.classList.add('gp-mode-sunlight');
      } else {
        setIsOnSite(false);
        document.documentElement.classList.remove('gp-mode-sunlight');
      }
    };

    const interval = setInterval(checkLocation, 5000);
    checkLocation();

    return () => clearInterval(interval);
  }, []);

  return { isOnSite, distance };
};