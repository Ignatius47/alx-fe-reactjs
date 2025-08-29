import { Navigate } from "react-router-dom";
import { fakeAuth } from "../auth";

export default function ProtectedRoute({ children }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}