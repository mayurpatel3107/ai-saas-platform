"use client";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { authClient } from "../lib/auth-client";
import { toast } from "sonner";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          console.log("User created successfully");
        },
        onError: (error) => {
          alert(error);
        },
      },
    );
  };

  if (session) {
    return (
      <div>
        <h1>Logged in as {session.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    );
  }

  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success("User logged in successfully");
        },
        onError: (error) => {
          toast.error(error.message || "Something went wrong");
        },
      },
    );
  };
  return (
    <div className="flex flex-col gap-y-10">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>Login</Button>

      <div className="p-4 flex flex-col gap-y-4">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
}
