import { useState, useEffect } from "react";
import { auth } from "../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
interface PublicRouteProps {
  children: React.ReactNode;
}
const PublicRoute = ({ children }: PublicRouteProps) => {
  const [user, setUser] = useState<null | object>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default PublicRoute;
