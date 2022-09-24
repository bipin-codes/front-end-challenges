import { useCallback, useState } from "react";
import { IWeather } from "../types/Weather";

const useWeatherAPI = (): {
  loading: boolean;
  data: IWeather | null;
  toFetch: (lat: string, lng: string) => any;
} => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IWeather | null>(null);
  const baseURL = `https://api.openweathermap.org/data/2.5/forecast`;
  const key = process.env.weather_key; //This should be put it env variable in production code.
  const toFetch = useCallback(
    (lat: string, lng: string) => {
      setLoading(true);
      const fetchAPI = async () => {
        try {
          const toCall =
            baseURL + `?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
          let response = await fetch(toCall);
          let data = await response.json();
          console.log(data);
          setData(data);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };
      fetchAPI();
    },
    [baseURL, key]
  );

  return { loading, toFetch, data };
};
export default useWeatherAPI;
