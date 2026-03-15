import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("token");
  if (token) {
    // Already logged in → redirect to dashboard
    return <Navigate to="/dashboard" />;
  }
  return children;
}