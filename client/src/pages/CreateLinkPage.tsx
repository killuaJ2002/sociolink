import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, Plus } from "lucide-react";
import { useState } from "react";
const CreateLinkPage = () => {
  const [links, setLinks] = useState([{ url: "", platform: "" }]);
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
    setLinks((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleRemove = (e: any, idx: number) => {
    e.preventDefault();
    setLinks((prev) => prev.filter((item, i) => i !== idx));
  };

  const handleSubmit = () => {
    console.log("Links added");
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
