import Hero from "../components/Hero";
import LinkSection from "../components/LinkSection";
import Footer from "../components/Footer";
import { getLinks } from "@/services/firestore";
import { auth } from "@/services/firebaseConfig";
import { useEffect, useState } from "react";
const LinkPage = () => {
  const user = auth.currentUser;
  const [links, setLinks] = useState([
    {
      id: "",
      uid: "",
      url: "",
      platform: "",
    },
  ]);
  const [loading, setLoadiing] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        if (!user) {
          throw new Error("user not found");
        }
        const res = await getLinks(user.uid);
        if (!res.success) {
          const errorMsg = res.reason ? res.reason : "Failed to retrieve links";
          throw new Error(errorMsg);
        }

        if (!res.results || res.results.length === 0) {
          setLinks([]);
          return;
        }

        setLinks(res.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoadiing(false);
      }
    };
    fetchLinks();
  }, []);
  return (
    <div>
      <Hero />
      <LinkSection links={links} loading={loading} error={error} />
      <Footer />
    </div>
  );
};

export default LinkPage;
