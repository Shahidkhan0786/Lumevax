// app/(auth)/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
// import lumevaxLogo from "@/public/logo.png";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.ok) {
      router.push("/admin");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      {/* <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form> */}
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Card className="w-full max-w-md p-6 shadow-md">
          <CardHeader className="text-center">
            <Image
              src="/logo.png"
              alt="lumevax Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <CardTitle className="text-brightBlue">lumevax Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Email</label>
                <Input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <Input
                  type="password"
                  name="password"
                  required
                  className="w-full mt-1"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brightBlue hover:bg-deepBlue"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
