import React, { useEffect } from "react";
import useQuoteAPI from "../../hooks/useQuoteAPI";
import "./Quote.css";

export const QuotePage: React.FC = () => {
  const { loading, toFetch, data } = useQuoteAPI({
    url: "https://quote-garden.herokuapp.com/api/v3/quotes/random",
  });

  useEffect(() => {
    toFetch();
  }, [toFetch]);

  return (
    <React.Fragment>
      <div className="root-container">
        <div className="header-container">
          <div className="random-button" onClick={toFetch}>
            <span>random</span>
            <span className={"material-icons"}>{"autorenew"}</span>
          </div>
        </div>
        <div className="content">
          {loading ? (
            <h1 style={{ alignSelf: "center" }}>loading...</h1>
          ) : (
            data && (
              <>
                <p>"{data[0].quoteText}"</p>
                <h3>{data[0].quoteAuthor}</h3>
                <h4>{data[0].quoteGenre}</h4>
              </>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};