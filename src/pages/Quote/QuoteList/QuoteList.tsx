import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAPI from "../../../hooks/useQuoteAPI";
import "./QuoteList.css";
const QuoteList = () => {
  const { id } = useParams();
  const { toFetch, data, loading } = useAPI({
    url: `https://quote-garden.herokuapp.com/api/v3/quotes?author=${id}`,
  });

  useEffect(() => {
    toFetch();
  }, [toFetch]);
  return (
    <React.Fragment>
      {loading && <h1>Loading</h1>}

      {data && (
        <div className="container-div">
          <h5 className="container-heading">{id}</h5>
          <div className="list-div">
            <ul style={{ listStyle: "none" }}>
              {data?.map((quote, index) => {
                return (
                  <li key={index} className="list-style">
                    "{quote.quoteText}"
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default QuoteList;
