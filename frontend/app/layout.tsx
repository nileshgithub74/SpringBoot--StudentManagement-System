import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campsly | Student Management",
  description: "A clear, calm workspace for student records.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
