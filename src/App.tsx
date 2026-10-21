import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { IndexPage } from "./pages/IndexPage";
import { DestinasiPage } from "./pages/destinasi/DestinasiPage";
import { DestinasiDetailPage } from "./pages/destinasi/DestinasiDetailPage";
import { OpenTripPage } from "./pages/open-trip/OpenTripPage";
import { TentangPage } from "./pages/tentang/TentangPage";
import { KontakPage } from "./pages/kontak/KontakPage";

export function App() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    // Initial path from window hash or path
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setCurrentPath(hash);
    }

    const handlePopState = () => {
      const h = window.location.hash.replace("#", "") || "/";
      setCurrentPath(h);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    if (currentPath === "/") {
      return <IndexPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/destinasi") {
      return <DestinasiPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith("/destinasi/")) {
      const id = currentPath.replace("/destinasi/", "");
      return <DestinasiDetailPage id={id} onNavigate={handleNavigate} />;
    }
    if (currentPath === "/open-trip") {
      return <OpenTripPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/tentang") {
      return <TentangPage onNavigate={handleNavigate} />;
    }
    if (currentPath === "/kontak") {
      return <KontakPage />;
    }
    return <IndexPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfaf7] text-[#2c3330]">
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />
      <main className="flex-1">{renderContent()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
