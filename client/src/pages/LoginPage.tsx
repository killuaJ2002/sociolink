import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
const LoginPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-mainTextDark text-xl font-semibold mb-2">
        Login to your account
      </h2>
      <div className="flex flex-col gap-3">
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
      </div>
      <Button variant="outline" className="max-w-16 text-mainTextDark">
        Log In
      </Button>
      <p className="text-mainTextLight">
        Don't have an account?{" "}
        <span className="text-blue-500">Sign Up here</span>
      </p>
    </div>
  );
};

export default LoginPage;
