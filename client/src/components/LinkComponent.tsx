const LinkComponent = ({ social }: { social: string }) => {
  return (
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-full bg-[#EBEEF1] rounded-md flex justify-center items-center py-7 text-[1.07rem] font-semibold hover:bg-mainTextDark hover:text-white transition-all duration-300"
    >
      {social}
    </a>
  );
};

export default LinkComponent;
