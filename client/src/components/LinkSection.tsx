import LinkComponent from "./LinkComponent";
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
    <div className="flex flex-col gap-6 mb-8">
      {socials.map((social) => (
        <LinkComponent social={social} />
      ))}
    </div>
  );
};

export default LinkSection;
