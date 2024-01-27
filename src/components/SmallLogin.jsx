import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function SmallLogin(props) {
  return (
    <div>
      <div>
        <h1>Log in</h1>
        <span>NO.</span>
        <input
          type="text"
          placeholder="Enter the employee id"
          onInput={(e) => props.setInputID(Number(e.target.value))}
        />
        <button onClick={() => props.enter()}>ENTER</button>
      </div>
    </div>
  );
}
