import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

interface FeaturesGridProps {
    title: string;
    subtitle: string;
    features: Feature[];
}

export function FeaturesGrid({ title, subtitle, features }: FeaturesGridProps) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            variants={itemFadeIn}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl border border-white/20 dark:border-white/10 p-8 bg-background/60 dark:bg-background/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)] transition-all"
                        >
                            <div className="mb-4 rounded-2xl bg-primary/10 w-fit p-3">
                                <Icon className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
}
