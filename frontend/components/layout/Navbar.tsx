"use client";

import {useAuth} from "@/hooks/useAuth";
import {Bell, Menu, Search} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { userName } = useAuth();
  return (
    <header className="flex h-20 items-center justify-between border-b border-[var(--line)] bg-white px-5 sm:px-8">
      <div className="flex items-center gap-3">
        <button className="lg:hidden text-[var(--ink)]" aria-label="Open menu">
          <Menu size={22} />
        </button>
        <div className="relative hidden sm:block">
          <Search
            className="absolute left-3 top-2.5 text-[var(--muted)]"
            size={17}
          />
          <input
            className="h-10 w-64 bg-[#f5f7f5] pl-10 pr-3 text-sm outline-none placeholder:text-[var(--muted)]"
            placeholder="Search anything..."
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="text-[var(--muted)]">
          <Bell size={19} />
        </button>
        <Link href="/students" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center bg-[#e1f1ed] text-sm font-bold text-[#1e6a5a]">
            {userName.charAt(0).toUpperCase()}
          </span>
          <span className="hidden text-sm font-semibold text-[var(--ink)] sm:block">
            {userName}
          </span>
        </Link>
      </div>
    </header>
  );
}
