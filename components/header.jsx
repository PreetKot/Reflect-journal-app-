import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { PenBox, FolderOpen } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";

async function Header() {
  await checkUser();

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg">
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-bold text-white">
            Reflect ✨
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Link href="/dashboard#collections">
              <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/20 hover:text-white">
                <FolderOpen size={18} />
                <span className="hidden md:inline">Collections</span>
              </Button>
            </Link>
          </SignedIn>
          <Link href="/journal/write">
            <Button className="flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 shadow-md">
              <PenBox size={18} />
              <span className="hidden md:inline">Write New</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;
