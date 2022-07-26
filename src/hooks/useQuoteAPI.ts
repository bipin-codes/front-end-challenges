import { useEffect, useState } from "react";
import { Quote } from "../pages/Quote/type";

interface useQuoteProps {
  url: string;
}

const useQuoteAPI = (
  props: useQuoteProps
): { loading: boolean; data: Array<Quote> | null } => {
  console.log(props.url);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<Quote> | null>(null);

  useEffect(() => {
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

  return { loading, data };
};
export default useQuoteAPI;
