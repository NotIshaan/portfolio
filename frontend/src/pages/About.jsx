
About.jsx
Portfolio/frontend/src/pages



import { motion } from "framer-motion";
import TerminalWindow from "../components/ui/TerminalWindow";
import Badge from "../components/ui/Badge";
const SkillGroup = ({ title, skills, color = "border-slate-700" }) => (
    <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
                <Badge key={skill} variant="outline" className={`text-slate-300 ${color} bg-slate-900/50`}>
                    {skill}
                </Badge>
            ))}
        </div>
    </div>
);
const About = () => {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio Section */}
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold font-mono mb-6 text-white">
                        About <span className="text-cyan-500">Me</span>
                    </h1>
                    <div className="prose prose-invert prose-p:text-slate-400 max-w-none space-y-4">
                        <p>
                            I'm a Cloud-focused Computer Science graduate with hands-on experience in <strong>AWS</strong>, <strong>Linux</strong>, and <strong>Observability</strong>.
                        </p>
                        <p>
                            Recently worked as a Cloud Engineer Intern at TraceLink, where I built automation and monitoring solutions to improve system reliability. I also have a strong background in Machine Learning, having deployed computer vision models on edge devices.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-800 bg-slate-900/30 rounded">
                        <h3 className="text-xs uppercase tracking-widest text-slate-500 mb-1">Education</h3>
                        <p className="font-mono text-slate-200 text-sm">B.Tech CS, Symbiosis Institute of Tech (2025)</p>
                    </div>
                </div>
            </div>
            {/* Skills Section (Clean) */}
            <div className="space-y-6">
                <TerminalWindow title="Technical Skills" className="h-full">
                    <div className="space-y-8">
                        <SkillGroup
                            title="Cloud & DevOps"
                            skills={["AWS (EC2, ECS, S3)", "Linux", "Docker", "Terraform", "Puppet", "CI/CD"]}
                            color="border-cyan-900/50 text-cyan-400"
                        />
                        <SkillGroup
                            title="Observability"
                            skills={["Prometheus", "Grafana", "OpenSearch", "Telegraf", "Alerting"]}
                            color="border-amber-900/50 text-amber-400"
                        />
                        <SkillGroup
                            title="Languages"
                            skills={["Python", "C++", "Bash / Shell Scripting", "SQL"]}
                            color="border-emerald-900/50 text-emerald-400"
                        />
                        <SkillGroup
                            title="Machine Learning"
                            skills={["Computer Vision", "YOLOv11", "PyTorch", "OpenCV", "Deep Learning"]}
                            color="border-indigo-900/50 text-indigo-400"
                        />
                    </div>
                </TerminalWindow>
            </div>
        </div>
    );
};
export default About;

