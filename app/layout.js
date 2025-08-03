export const metadata = {
  title: "Parag Namkeen & Sweets",
  description: "Export-Grade Indian Farsan for Global Tastebuds",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}