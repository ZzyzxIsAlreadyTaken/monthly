"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { PersonStanding } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import logo from "~/public/logo.png";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"
      >
        Logg ut
      </button>
    );
  }
  return (
    <>
      <button
        className="rounded bg-teal-500 px-4 py-2 font-semibold text-white hover:bg-teal-600"
        onClick={() => signIn()}
      >
        Logg inn
      </button>
    </>
  );
}

function UserDisplayName() {
  const { data: session } = useSession();
  return session?.user?.name ?? "Fremmede";
}

function UserImage() {
  const { data: session } = useSession();
  if (!session) {
    return <PersonStanding size={24} />;
  }
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image ?? undefined} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-slate-200 p-4">
      <img src="/logo.png" alt="logo" className="h-12" />
      <span className="text-2xl font-semibold"></span>
      <div className="flex items-center gap-2 font-semibold">
        <AuthButton />
        <UserDisplayName />
        <UserImage />
      </div>
    </nav>
  );
}

export default TopNav;
