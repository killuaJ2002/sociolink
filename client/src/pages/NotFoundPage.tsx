import { FaExclamationTriangle } from "react-icons/fa";
const NotFoundPage = () => {
  return (
    <div className="max-w-xl mx-auto m-6">
      <h2 className="text-3xl font-bold font-bricolage mb-8">
        <span className="text-mainTextDark">Socio</span>
        <span className="text-green-500">Link</span>
      </h2>
      <div className="flex flex-col items-center">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <p className="text-xl font-light">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
