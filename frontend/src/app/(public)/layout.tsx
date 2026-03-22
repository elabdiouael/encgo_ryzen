import React from 'react';
import Navbar from './components/Navbar/Navbar'; // 🔥 IMPORT JIDID
import Footer from './components/Footer'; // T2ekked mn path d footer
import CustomCursor from './components/ui/CustomCursor';
import BootScreen from './components/ui/BootScreen'; 
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[#020205]">
      
      {/* 🖱️ UI Effects Level x200 */}
      <CustomCursor />
      <BootScreen />

      {/* 🛸 L-Navbar l-jdida (Scouter Design) */}
      <Navbar />

      {/* 📄 L-Contenu dyal l-Pages (Home, About, etc.) */}
      <main className="flex-grow">
        {children}
      </main>

      {/* 📜 Footer dyal l-Hackathon */}
      <Footer />
      
    </div>
  );
}