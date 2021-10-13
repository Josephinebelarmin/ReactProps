import React from "react";
import Details from "./Details";
import Avatar from "./Avatar";

function Card(props) {
    return (
      
        <div className="card">
          <div className="top">
          <p>{props.id}</p>
            {/* <Details detailsInfo={props.id} /> */}
            <h2 className= "name">{props.name}</h2>
            <Avatar img={props.img} />
          </div>
          <div className="bottom">
            <Details detailsInfo={props.phone}  />  
            <Details detailsInfo={props.email} /> 
            </div>
        </div>

  
    );
  }

  export default Card;