"use client";

import {GraduationCap, LayoutDashboard, Settings} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Sidebar() {
  const path = usePathname();
  const links = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/students", label: "Students", icon: GraduationCap },
  ];
  return (
    <aside className="hidden w-64 shrink-0 border-r border-[var(--line)] bg-[#102a2b] px-4 py-6 text-white lg:block">
      <Link href="/dashboard" className="mb-10 flex items-center gap-3 px-3">
        <span className="grid h-9 w-9 place-items-center bg-[var(--accent)] text-[#102a2b]">
          <GraduationCap size={21} />
        </span>
        <span className="font-display text-lg">
          Campus<span className="text-[var(--accent)]">ly</span>
        </span>
      </Link>
      <nav className="space-y-1">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-3 text-sm transition ${path.startsWith(href) ? "bg-white/10 text-white" : "text-white/55 hover:bg-white/5 hover:text-white"}`}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-56">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-3 text-sm text-white/55"
        >
          <Settings size={18} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
