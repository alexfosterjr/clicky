import React from "react";
import "./friendCard.css";

const FriendCard = props => (

  <div
    className="card"
    onClick={() => props.handleClick(props.id)}>

    <img className ="image" alt={props.img.replace(".jpg", "")} src={props.img} />

  </div>
);


export default FriendCard;