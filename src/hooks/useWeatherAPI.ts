import { stringify } from "querystring";
import { useCallback, useState } from "react";
import { Quote } from "../pages/Quote/type";

const useWeatherAPI = (): {
  loading: boolean;
  data: Array<any> | null;
  toFetch: (lat: string, lng: string) => any;
} => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const baseURL = `https://api.openweathermap.org/data/2.5/weather`;
  const key = "78ba9409f32396480d9d6d1e1b94bfca"; //This should be put it env variable in production code.
  const toFetch = useCallback((lat: string, lng: string) => {
    setLoading(true);
    const fetchAPI = async () => {
      try {
        const toCall = baseURL + `?lat=${lat}&lon=${lng}&appid=${key}`;
        let response = await fetch(toCall);
        let data = await response.json();
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  return { loading, toFetch, data };
};
export default useWeatherAPI;
