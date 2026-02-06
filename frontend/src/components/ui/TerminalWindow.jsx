import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const TerminalWindow = ({ className, title = "bash", children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
                "rounded-lg border border-slate-800 bg-slate-950 font-mono shadow-2xl overflow-hidden",
                className
            )}
        >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-slate-400 font-medium opacity-70">
                    ishaan@devops:~/{title}
                </div>
                <div className="w-14" /> {/* Spacer for centering */}
            </div>

            {/* Content */}
            <div className="p-6 text-slate-300">
                {children}
            </div>
        </motion.div>
    );
};

export default TerminalWindow;
