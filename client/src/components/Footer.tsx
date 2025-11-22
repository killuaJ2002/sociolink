import { Link } from "react-router-dom";
const Footer = ({ isOwner }: { isOwner: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        to="/new"
        className="py-2 px-3 rounded-md bg-black/70 hover:bg-black/60 text-white font-semibold mb-5"
      >
        {isOwner ? "Add more links" : "Create your link"}
      </Link>
      <div className="flex flex-col items-center text-mainTextDark font-medium">
        <p>Let's link your socials!</p>
        <p>©2025 SocioLink || All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
