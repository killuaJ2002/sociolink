import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "@/services/firebaseAuth";
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await login(formData.email, formData.password);
      setError("");
      console.log("login successfull");
      navigate("/");
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-mainTextDark text-xl font-semibold mb-2">
        Login to your account
      </h2>
      <div className="flex flex-col gap-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        variant="outline"
        className="max-w-16 text-mainTextDark"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Logging in" : "Log In"}
      </Button>
      <p className="text-mainTextLight">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up here
        </Link>
      </p>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default LoginPage;
