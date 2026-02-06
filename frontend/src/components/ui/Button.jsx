import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Button = ({ className, variant = "primary", size = "md", children, ...props }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-blue-600 focus:ring-blue-500",
        secondary: "bg-secondary text-secondary-foreground hover:bg-indigo-900 focus:ring-indigo-500",
        outline: "border border-muted-foreground/20 bg-transparent hover:bg-muted/10 text-foreground",
        ghost: "bg-transparent hover:bg-muted/10 text-foreground"
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-8 py-3 text-lg"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
