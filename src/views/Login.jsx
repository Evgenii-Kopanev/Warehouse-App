import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "lightgrey" }}>
      <h2>Logistics Management</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <button onClick={() => navigate(`/signup`)}>Sign up</button>
        <button onClick={() => navigate(`/login`)}>Log in</button>
      </div>
    </div>
  );
}
