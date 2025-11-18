import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const from = location.state?.from;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await login(formData.email, formData.password);
      console.log("login successfull");
      if (from) navigate(from, { replace: true });
      else navigate("/", { replace: true });
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
          Login to your account
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
          <Button
            variant="outline"
            className="max-w-19 text-mainTextDark"
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in" : "Log In"}
          </Button>
        </form>

        <p className="text-mainTextLight">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Sign Up here
          </Link>
        </p>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
