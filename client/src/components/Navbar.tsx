import { Button } from "./ui/button";
import { logout } from "@/services/firebaseAuth";
const Navbar = () => {
  return (
    <div className="mb-8 flex justify-between">
      <h2 className="text-3xl font-bold font-bricolage">
        <span className="text-mainTextDark">Socio</span>
        <span className="text-green-500">Link</span>
      </h2>
      <Button variant={"destructive"} size={"sm"} onClick={() => logout()}>
        Log Out
      </Button>
    </div>
  );
};

export default Navbar;
