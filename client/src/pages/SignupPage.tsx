import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = () => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-mainTextDark text-xl font-semibold mb-2">
        Signup Your account
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
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="password"
            name="confirmPassword"
            placeholder=""
            onChange={handleChange}
          />
        </div>
      </div>
      <Button
        variant="outline"
        className="max-w-16 text-mainTextDark"
        onClick={handleSumbit}
      >
        Sign Up
      </Button>
      <p className="text-mainTextLight">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Log In here
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
