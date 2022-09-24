import { useState, useCallback } from "react";

const useUserLocation = () => {
  const [data, setData] = useState<GeolocationPosition | undefined>(undefined);
  const [error, setError] = useState<GeolocationPositionError | undefined>(
    undefined
  );

  const success = (pos: GeolocationPosition) => {
    setData(pos);
  };

  function errors(err: GeolocationPositionError) {
    setError(err);
  }
  const getLocation = useCallback(() => {
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        const result = await navigator.permissions.query({
          name: "geolocation",
        });

        if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          });
        }
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success);
        }
        if (result.state === "denied") {
          alert("Please give location permission");
        }
      } else {
        alert("Sorry");
      }
    };
    fetchLocation();
  }, []);
  return { getLocation, data, error };
};

export default useUserLocation;
