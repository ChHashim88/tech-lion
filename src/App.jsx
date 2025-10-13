import React from "react";
import Router from "./routes/Router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AIChatbot from "./components/AIChatbot";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-900">
      <Navbar />
      {/* Match navbar height (py-4 = 64px = pt-16) */}
      <main className="flex-1 pt-16">
        <Router />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
