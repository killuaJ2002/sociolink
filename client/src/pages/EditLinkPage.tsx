import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import { useEffect } from "react";
const EditLinkPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth.currentUser;
    const isOwner = user ? user.uid === id : false;
    if (!isOwner) {
      navigate("/");
      return;
    }
  }, [navigate]);
  return (
    <>
      <button
        onClick={() => {
          console.log(id);
        }}
      >
        click
      </button>
    </>
  );
};

export default EditLinkPage;
