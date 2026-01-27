import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ExperienceSelectPage from "./pages/ExperienceSelectPage";
import ExperienceListPage from "./pages/ExperienceListPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      {/* Global layout */}
      <div className="min-h-screen bg-zinc-950 text-white">
        {/* Persistent navbar */}
        <Navbar />

        {/* Page content */}
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Experience flow */}
          <Route path="/experience" element={<ExperienceSelectPage />} />
          <Route path="/experience/:type" element={<ExperienceListPage />} />

          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

