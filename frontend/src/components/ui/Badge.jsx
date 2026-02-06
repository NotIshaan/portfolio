import { cn } from "../../lib/utils";

const Badge = ({ children, variant = "default", className }) => {
    const variants = {
        default: "bg-slate-800 text-slate-300 border-slate-700",
        success: "bg-emerald-950/30 text-emerald-400 border-emerald-900/50",
        warning: "bg-amber-950/30 text-amber-400 border-amber-900/50",
        info: "bg-cyan-950/30 text-cyan-400 border-cyan-900/50",
        outline: "bg-transparent border-slate-700 text-slate-400"
    };

    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono border",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};

export default Badge;
