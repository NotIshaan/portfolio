import { motion } from "framer-motion";
import { ArrowRight, Terminal, Server, Shield } from "lucide-react";
import Button from "../components/ui/Button";
import TerminalWindow from "../components/ui/TerminalWindow";
import Typewriter from "../components/ui/Typewriter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-500 font-mono text-sm tracking-wider">
              <span className="mr-2">➜</span>
              SYSTEM_READY
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Automating the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Future.
              </span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              Cloud Engineer & SRE. Focused on Observability, Automation, and AWS Infrastructure.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-none">
                View Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-none">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Terminal Graphic */}
        <div className="flex-1 w-full max-w-xl">
          <TerminalWindow title="init.sh" className="min-h-[300px] shadow-cyan-900/20">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <span className="text-emerald-400">ishaan@fedora:~$</span> <Typewriter text="whoami" />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-slate-300 space-y-2 pl-4 border-l-2 border-slate-800"
              >
                <p>Name: Ishaan Bhadrike</p>
                <p>Role: Cloud Engineer | SRE</p>
                <p>Stack: [Python, AWS, Docker, K8s, Linux]</p>
                <p>Status: <span className="text-emerald-400">Available for Work</span></p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-emerald-400">ishaan@fedora:~$</span> <span className="animate-pulse">_</span>
              </motion.div>
            </div>
          </TerminalWindow>
        </div>
      </section>

      {/* Services Grid (DevOps Style) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Terminal, title: "Infrastructure as Code", desc: "Terraform & Ansible for reproducible environments." },
          { icon: Server, title: "Backend Systems", desc: "High-performance APIs with FastAPI & Go." },
          { icon: Shield, title: "Site Reliability", desc: "Monitoring, alerting, and incident response." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors group"
          >
            <item.icon className="w-8 h-8 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Home;
