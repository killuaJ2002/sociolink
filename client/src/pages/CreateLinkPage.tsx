import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
const CreateLinkPage = () => {
  const [linkCnt, setLinkCnt] = useState(1);
  const handleAddMore = (e: any) => {
    e.preventDefault();
    setLinkCnt((prev) => prev + 1);
  };
  const handleSubmit = () => {
    console.log("Links added");
  };
  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {Array.from({ length: linkCnt }).map((_, i) => (
          <div key={i} className="flex gap-2">
            <Input placeholder="url" className="flex-2/3" required />
            <Input placeholder="platform" className="flex-1/3" required />
          </div>
        ))}
        <div className="flex justify-between">
          <Button
            className="max-w-10"
            variant={"outline"}
            onClick={handleAddMore}
          >
            +
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
