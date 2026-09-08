"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

const AppShell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex min-h-screen bg-[#f7f8f5]">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">
            <Navbar />
            <main className="flex-1 px-5 py-7 sm:px-8">{children}</main>
            <Footer />
        </div>
    </div>
);

export default AppShell;
