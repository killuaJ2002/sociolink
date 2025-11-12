import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "@/services/firebaseAuth";
const SignupPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    try {
      setLoading(true);
      setError("");
      await signup(formData.email, formData.password);
      setError("");
      console.log("signup successful");
      navigate("/");
    } catch (error: any) {
      setError(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto m-6">
      <h2 className="text-3xl font-bold font-bricolage mb-8">
        <span className="text-mainTextDark">Socio</span>
        <span className="text-green-500">Link</span>
      </h2>
      <div className="flex flex-col gap-3">
        <h2 className="text-mainTextDark text-xl font-semibold mb-2">
          Signup Your account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder=""
              onChange={handleChange}
              required
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
              required
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder=""
              onChange={handleChange}
              required
            />
          </div>
          <Button
            variant="outline"
            className="max-w-19 text-mainTextDark"
            disabled={loading}
          >
            {loading ? "Signing up" : "Sign Up"}
          </Button>
        </form>
        <p className="text-mainTextLight">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In here
          </Link>
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default SignupPage;
