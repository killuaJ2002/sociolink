import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
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
          <Label htmlFor="email">Password</Label>
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
      >
        Log In
      </Button>
      <p className="text-mainTextLight">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-500">
          Sign Up here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
