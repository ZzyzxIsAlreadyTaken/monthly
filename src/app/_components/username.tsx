"use client";
import { useSession } from "next-auth/react";

export function UserDisplayName() {
  const { data: session } = useSession();
  return session?.user?.name ?? "Fremmede";
}
