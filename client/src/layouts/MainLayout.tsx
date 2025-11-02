import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
const MainLayout = () => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-xl mx-auto m-6">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar user={user} />
          <Outlet />
        </>
      )}
    </div>
  );
};
export default MainLayout;
