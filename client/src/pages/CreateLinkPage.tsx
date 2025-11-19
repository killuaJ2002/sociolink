import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, Plus } from "lucide-react";
import { useState } from "react";
import { createLinks } from "@/services/firestore";
import { auth } from "@/services/firebaseConfig";
import { useNavigate } from "react-router-dom";
const CreateLinkPage = () => {
  const [links, setLinks] = useState([{ url: "", platform: "" }]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const handleAddMore = (e: any) => {
    e.preventDefault();
    setLinks((prev) => [
      ...prev,
      {
        url: "",
        platform: "",
      },
    ]);
  };

  const handleChange = (idx: number, field: string, value: string) => {
    setError("");
    setLinks((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleRemove = (e: any, idx: number) => {
    e.preventDefault();
    setLinks((prev) => prev.filter((item, i) => i !== idx));
  };

  const handleSubmit = async (e: any) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (!user) {
        setError("No user found");
        return;
      }
      const res = await createLinks(user.uid, links);
      if (!res.success) {
        throw new Error(res.reason);
      }
      console.log("links added successfully");
      navigate("/");
    } catch (error: any) {
      error instanceof Error
        ? setError(error.message)
        : setError("Some error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {links.map((link, i) => (
          <div key={i} className="flex gap-2 items-center">
            <Input
              placeholder="Paste your link"
              className="flex-2/3"
              value={link.url}
              onChange={(e) => handleChange(i, "url", e.target.value)}
              required
            />
            <Input
              placeholder="e.g., GitHub, X"
              className="flex-1/3"
              value={link.platform}
              onChange={(e) => handleChange(i, "platform", e.target.value)}
              required
            />

            <Button
              className="max-w-10 font-light border-none"
              variant={"outline"}
              onClick={(e) => handleRemove(e, i)}
            >
              <Trash />
            </Button>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <Button
            className="max-w-10"
            variant={"outline"}
            onClick={handleAddMore}
          >
            <Plus />
          </Button>
          <Button type="submit" className="max-w-20">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateLinkPage;
