const Hero = () => {
  return (
    <div className="flex gap-3 mb-8">
      <div className="w-28 h-28 rounded-full bg-gray-200"></div>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-xl text-mainTextDark">Kalpajyoti</h3>
        <p className="font-medium text-mainTextLight">
          Software developer. I believe in learning through building
        </p>
      </div>
    </div>
  );
};

export default Hero;
