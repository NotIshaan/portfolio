import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Terminal, Clock, Briefcase } from "lucide-react";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/experience")
      .then(res => res.json())
      .then(data => {
        const workEx = data.filter(exp => exp.type === 'work').map(exp => ({
          ...exp,
          tech_stack: typeof exp.tech_stack === 'string' ? exp.tech_stack.split(',').map(t => t.trim()) : exp.tech_stack
        }));
        setExperiences(workEx);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Current";
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4 text-slate-400 font-mono text-sm border-b border-slate-800 pb-4">
        <Terminal className="w-4 h-4" />
        <span className="font-bold text-slate-200">Work Experience</span>
      </div>

      {loading && <div className="flex justify-center p-20"><Loader2 className="animate-spin text-cyan-500" /></div>}

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id || i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 ring-4 ring-slate-950" />

            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded hover:border-slate-700 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-200 font-mono flex items-center gap-2">
                    {exp.organization}
                  </h3>
                  <p className="text-cyan-500 font-medium mt-1">{exp.title}</p>
                </div>
                <div className="flex items-center text-xs font-mono text-slate-500 mt-2 md:mt-0 bg-slate-950 py-1 px-3 border border-slate-800 rounded">
                  <Clock className="w-3 h-3 mr-2" />
                  {formatDate(exp.start_date)} — {formatDate(exp.end_date)}
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm mb-4">
                {exp.description}
              </p>

              {exp.tech_stack && (
                <div className="flex flex-wrap gap-2 border-t border-slate-800/50 pt-4">
                  {exp.tech_stack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-slate-500 px-2">
                      #{tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
