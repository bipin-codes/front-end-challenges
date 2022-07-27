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
                <div className="content-sub">
                  <div>
                    <h3>{data[0].quoteAuthor}</h3>
                    <h5>{data[0].quoteGenre}</h5>
                  </div>
                  <div>
                    <span className={"material-icons hide"}>
                      {"arrow_right_alt"}
                    </span>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
