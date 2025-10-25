const LinkSection = () => {
  const socials = [
    "Portfolio",
    "Twitter",
    "Github",
    "LinkedIn",
    "Leetcode",
    "Instagram",
  ];
  return (
    <div className="flex flex-col gap-6">
      {socials.map((social) => (
        <div className="h-10 w-full bg-[#EBEEF1] rounded-md flex justify-center items-center py-7 text-[1.07rem] font-semibold hover:bg-mainTextDark hover:text-white transition-all duration-300">
          {social}
        </div>
      ))}
    </div>
  );
};

export default LinkSection;
