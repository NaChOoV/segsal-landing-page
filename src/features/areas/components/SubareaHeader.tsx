import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

interface SubareaHeaderProps {
    areaTitle: string;
    title: string;
}

export function SubareaHeader({ areaTitle, title }: SubareaHeaderProps) {
    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-12 text-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4 inline-flex items-center rounded-3xl bg-primary/10 dark:bg-primary/5 backdrop-blur-lg border border-primary/30 px-4 py-2 text-sm font-medium shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.25)]"
            >
                <Shield className="mr-2 h-4 w-4 text-primary" />
                {areaTitle}
            </motion.div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
        </motion.header>
    );
}
