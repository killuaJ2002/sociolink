import { Button } from "./ui/button";
import { logout } from "@/services/firebaseAuth";
import { useNavigate } from "react-router-dom";
import type { User } from "firebase/auth";

const Navbar = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      console.log("error occured while trying to log out");
    }
  };
  return (
    <div className="mb-8 flex justify-between">
      <h2 className="text-3xl font-bold font-bricolage">
        <span className="text-mainTextDark">Socio</span>
        <span className="text-green-500">Link</span>
      </h2>
      <Button variant={"destructive"} size={"sm"} onClick={() => handleClick()}>
        {user ? "Log Out" : "Log In"}
      </Button>
    </div>
  );
};

export default Navbar;
