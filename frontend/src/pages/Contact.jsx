import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Terminal, Send, Mail, Phone, MapPin } from "lucide-react";
import TerminalWindow from "../components/ui/TerminalWindow";
import Button from "../components/ui/Button";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("http://127.0.0.1:8000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Failed");
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold font-mono mb-6 text-white">
                        Get in <span className="text-cyan-500">Touch</span>
                    </h1>
                    <p className="text-slate-400">
                        I am currently open to roles in **CloudOps, SRE, or Platform Engineering**. Feel free to reach out!
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-cyan-500 mt-1" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-200">Email</h3>
                            <p className="text-slate-400 font-mono text-sm">ishaanworks24@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-cyan-500 mt-1" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-200">Phone</h3>
                            <div className="space-y-1">
                                <p className="text-slate-400 font-mono text-sm">🇮🇳 +91 9152107274 (India)</p>
                                <p className="text-slate-400 font-mono text-sm">🇦🇪 +971 561567959 (Dubai)</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
                        <div>
                            <h3 className="text-sm font-bold text-slate-200">Location</h3>
                            <p className="text-slate-400 font-mono text-sm">Pune, India / Dubai, UAE</p>
                        </div>
                    </div>
                </div>
            </div>

            <TerminalWindow title="Message" className="border-slate-800">
                <div className="p-2">
                    {status === "success" ? (
                        <div className="text-center py-12 space-y-4">
                            <div className="text-emerald-500 font-mono text-xl"> Message sent!</div>
                            <Button onClick={() => setStatus('idle')} variant="outline" size="sm">
                                Send another
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-slate-500">Name</label>
                                <input
                                    className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-slate-500">Email</label>
                                <input
                                    className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm"
                                    placeholder="email@example.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono uppercase text-slate-500">Message</label>
                                <textarea
                                    className="w-full bg-slate-900 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm min-h-[120px]"
                                    placeholder="Hello..."
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="flex justify-end">
                                <Button type="submit" disabled={status === 'loading'} className="bg-cyan-600 hover:bg-cyan-700 text-white font-mono text-xs px-6">
                                    {status === 'loading' ? <Loader2 className="animate-spin w-4 h-4" /> : (
                                        <>
                                            Send Message <Send className="w-3 h-3 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </TerminalWindow>
        </div>
    );
};

export default Contact;
