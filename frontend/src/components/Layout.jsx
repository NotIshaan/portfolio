import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useState } from "react";
import Button from "./ui/Button";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "home", path: "/" },
        { name: "projects", path: "/projects" },
        { name: "experience", path: "/experience" },
        { name: "about", path: "/about" },
        { name: "contact", path: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-2 text-lg font-bold font-mono text-slate-200">
                        <Terminal className="w-5 h-5 text-cyan-500" />
                        ishaanbhadrike
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1">
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 text-sm font-mono transition-colors rounded-sm",
                                    location.pathname === link.path
                                        ? "text-cyan-400 bg-cyan-950/30 border-b-2 border-cyan-500"
                                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                                )}
                            >
                                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-400 hover:text-white"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-slate-800"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-mono border-l-2",
                                        location.pathname === link.path
                                            ? "border-cyan-500 bg-cyan-950/20 text-cyan-400"
                                            : "border-transparent text-slate-400 hover:bg-slate-900"
                                    )}
                                >
                                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Footer = () => (
    <footer className="border-t border-slate-800 bg-slate-950 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                System Operational | v2026.02
            </div>
            <div className="flex space-x-6">
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-slate-500 hover:text-cyan-400 transition"><Mail className="w-5 h-5" /></a>
            </div>
        </div>
    </footer>
);

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 font-sans">
            <Navbar />
            <main className="flex-grow pt-16 relative">
                {/* Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
