import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const UserRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const role = useAppSelector((state) => state.auth.role);

  if (role === "user") {
    return children;
  }

  return <Navigate to="/unauthorized" state={{ from: location }} replace />;
};

export default UserRoute;
