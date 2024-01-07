import { useState, useEffect } from "react";

const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Arcadia</h3>
      <h4>contact@nsarbusiness@gmail.com</h4>
    </div>
  );
};

export default User;
