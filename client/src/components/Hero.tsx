import pfp from "../assets/images/me.jpeg";
const Hero = () => {
  return (
    <div className="flex gap-3 mb-8">
      <div>
        <img src={pfp} alt="profile-pic" className="w-28 h-28 rounded-full" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-xl text-mainTextDark">Kalpajyoti</h3>
        <p className="font-medium text-mainTextLight">
          Building random things...
        </p>
      </div>
    </div>
  );
};

export default Hero;
