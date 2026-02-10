import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, GitBranch, Globe, Terminal } from "lucide-react";
import TerminalWindow from "../components/ui/TerminalWindow";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch from same endpoint but filter for type='project'
        fetch(`${import.meta.env.VITE_API_URL}/api/experience`)
            .then(res => res.json())
            .then(data => {
                const projs = data
                    .filter(item => item.type === 'project')
                    .map(item => ({
                        ...item,
                        tech_stack: typeof item.tech_stack === 'string'
                            ? item.tech_stack.split(',').map(t => t.trim())
                            : item.tech_stack
                    }));
                setProjects(projs);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-6xl mx-auto space-y-12">
            <div className="flex items-center gap-4 text-slate-400 font-mono text-sm border-b border-slate-800 pb-4">
                <Terminal className="w-4 h-4" />
                <span className="font-bold text-slate-200">Projects</span>
            </div>

            {loading ? (
                <div className="flex justify-center p-20"><Loader2 className="animate-spin text-cyan-500" /></div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <TerminalWindow
                            key={project.id || i}
                            title="Project Details"
                            className="h-full flex flex-col hover:border-slate-600 transition-colors"
                        >
                            <div className="flex-1 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-emerald-400 font-mono">
                                        {project.title}
                                    </h3>
                                    <Badge variant="info">v1.0.0</Badge>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                                    {project.description}
                                </p>

                                {project.tech_stack && (
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech_stack.map(tag => (
                                            <Badge key={tag} variant="outline" className="text-slate-500 border-slate-800">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-4 mt-8 pt-4 border-t border-slate-800/50">
                                <Button size="sm" variant="outline" className="flex-1 font-mono text-xs border-slate-700 hover:bg-slate-800">
                                    <GitBranch className="w-3 h-3 mr-2" /> Source Code
                                </Button>
                                <Button size="sm" variant="primary" className="flex-1 font-mono text-xs bg-cyan-900/30 text-cyan-400 hover:bg-cyan-900/50 border border-cyan-900">
                                    <Globe className="w-3 h-3 mr-2" /> Live Demo
                                </Button>
                            </div>
                        </TerminalWindow>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
