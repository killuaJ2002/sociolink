import Hero from "../components/Hero";
import LinkSection from "../components/LinkSection";
import Footer from "../components/Footer";
import { getLinks } from "@/services/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const LinkPage = () => {
  const { id } = useParams();
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
        if (!id) {
          throw new Error("No id found");
        }
        const res = await getLinks(id);
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
