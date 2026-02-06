import { motion } from "framer-motion";
import Card from "../components/ui/Card";
import { fadeInUp, staggerContainer } from "../lib/animations";

const Blog = () => {
    return (
        <div className="max-w-4xl mx-auto text-center space-y-12 py-20">
            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="space-y-6"
            >
                <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                    Coming Soon
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
                    Thoughts & Insights
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    I'm currently writing about my experiences with Microservices, SRE practices, and building this portfolio. Stay tuned!
                </motion.p>

                <motion.div variants={fadeInUp} className="pt-8">
                    <Card className="max-w-md mx-auto p-8 border-dashed border-2 border-white/10 bg-transparent">
                        <p className="text-muted-foreground">Subscribe to get notified when I post.</p>
                        {/* Placeholder for newsletter form */}
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Blog;
