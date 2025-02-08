'use client';

import PenumbraAppBar from "@/components/PenumbraAppBar/PenumbraAppBar";
import PenumbraDashboard from "@/components/PenumbraDashboard/PenumbraDashboard";
import { useState } from "react";

export default function Home() {
  const [sectionActive, setSectionActive] = useState("home");
  
  return (
    <main>
      <PenumbraAppBar  sectionActive={sectionActive} onChange={setSectionActive}/>
      {sectionActive === "home" && <PenumbraDashboard />}
      {sectionActive === "blocks" && <p className="text-white">{sectionActive}</p>}
      {sectionActive === "transactions" && <p className="text-white">{sectionActive}</p>}
    </main>
  );
}
