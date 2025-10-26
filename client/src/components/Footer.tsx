const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="py-2 px-3 rounded-md bg-black/70 hover:bg-black/60 text-white font-semibold mb-5">
        Create your link
      </button>
      <div className="flex flex-col items-center text-mainTextDark font-medium">
        <p>Let's link your socials!</p>
        <p>©2025 SocioLink || All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
