import { auth } from "../services/firebaseConfig";
import { getUserProfile } from "@/services/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateLinkPage = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    bio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async () => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      const profileData = await getUserProfile(user.uid);
      if (!profileData) {
        console.log("No profile created for this user");
        return;
      }
      console.log(profileData);
    } catch (error) {}
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`username: ${formData.username} and bio: ${formData.bio}`);
  };

  return (
    <>
      <button
        className="bg-gray-500 px-1 py-2 rounded-md mb-5"
        onClick={() => handleClick()}
      >
        user profile
      </button>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="text"
          placeholder="bio"
          name="bio"
          onChange={handleChange}
          value={formData.bio}
        />
        <button
          className="bg-gray-500 px-1 py-2 rounded-md max-w-24"
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
};

export default CreateLinkPage;
