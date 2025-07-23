import Header from "@/components/header";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";

export const metadata = {
  title: "Reflect",
  description: "A simple, clean journaling app for mindful writing and self-reflection.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans antialiased">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2025 Reflect ✨ A simple journaling app for mindful writing.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
