import React from "react";
import { Link } from "react-router-dom";
import { IRoute } from "../types/Route";

export const Index: React.FC = () => {

  const challenges: Array<IRoute> = [
    {label:"Button Component Challenge", path: "/button", description: "Create a reusable button with all the states in the design and a page displaying all the states."}, 
    {label:"Input Component Challenge", path: "/input", description: "Create a reusable input with all the states in the design and a page displaying all the states."},
   

  ];


  return (
    <>
     
        <div className="d-flex flex-column p-5 align-items-center"> 
          <h1>Welcome to Front end challenges</h1>
          <p className="text-sm-start m-2">
            These challenges are done with sole purpose of improving <span className="text-warning">Front end skills in React JS</span>.
          </p>
          <p>Thanks to <a rel="noreferrer" href="https://devchallenges.io/" target={"_blank"}>devchallenges.io</a> to host these challenges.</p>
          <h4 className="m-5" >You can find repository to project <a rel="noreferrer" href="https://github.com/bipin-codes/front-end-challenges" target={"_blank"}>Front end challenges</a></h4>
        </div>
        <div className="container">

          <div className="row g-4">{
            challenges.map((challenge, index)=>{
              return (
                <div className="col-md-5 m-5" key={index}>
                  <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{challenge.label}</h5>
                        <p className="card-text">{challenge.description}</p>
                        <Link to={challenge.path} > open </Link>
                      </div>
                    </div>
                </div>
              )})
            }
          </div>
        </div>

      

    </>
  );
};
