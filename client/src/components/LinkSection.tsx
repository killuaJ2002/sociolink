import LinkComponent from "./LinkComponent";

type LinkItem = {
  id: string;
  uid: string;
  url: string;
  platform: string;
};

type LinkSectionProps = {
  links: LinkItem[];
  error: string;
};
const LinkSection = ({ links, error }: LinkSectionProps) => {
  if (!links || links.length === 0) return <>No links to show</>;
  return (
    <div className="flex flex-col gap-6 mb-8">
      {links.map((link) => (
        <LinkComponent key={link.id} platform={link.platform} url={link.url} />
      ))}
    </div>
  );
};

export default LinkSection;
