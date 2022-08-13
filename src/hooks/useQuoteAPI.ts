import { useCallback, useState } from "react";
import { Quote } from "../pages/Quote/type";

interface ServiceProps {
  url: string;
}

const useAPI = (
  props: ServiceProps
): { loading: boolean; data: Array<Quote> | null; toFetch: any } => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Array<Quote> | null>(null);

  const toFetch = useCallback(() => {
    setLoading(true);
    const fetchAPI = async () => {
      try {
        let response = await fetch(props.url);
        let data = await response.json();
        setData(data.data as Array<Quote>);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchAPI();
  }, [props.url]);

  return { loading, toFetch, data };
};
export default useAPI;
