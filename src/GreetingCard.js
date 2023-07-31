import React, { useEffect, useState } from "react";
import "./GreetingCard.css";

function GreetingCard(props) {
  return (
    <div className="card" style={{ backgroundColor: props.bgColor }}>
      <h1>Hello {props.name}</h1>
      <h1>Greetings</h1>
      <h4>Its great to see you here, hope you enjoy the platform</h4>
    </div>
  );
}

export default GreetingCard;
