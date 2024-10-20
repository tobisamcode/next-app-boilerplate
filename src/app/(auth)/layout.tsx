"use client";

import { FC } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";

import Logo from "../../../public/svg/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayout> = ({ children }) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src={Logo} alt="logo" />
          <Button asChild variant={"secondary"} size="lg">
            <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
