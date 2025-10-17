import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

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

interface Service {
    title: string;
    description: string;
}

interface ServicesGridProps {
    title: string;
    subtitle: string;
    services: Service[];
}

export function ServicesGrid({ title, subtitle, services }: ServicesGridProps) {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-16 border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 bg-background/60 dark:bg-background/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
            </div>

            <motion.div variants={staggerContainer} className="grid gap-6 md:grid-cols-2">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={itemFadeIn}
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl border border-white/20 dark:border-white/10 p-6 bg-background/70 dark:bg-background/50 backdrop-blur-lg shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] dark:shadow-[0_4px_16px_0_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.15)] dark:hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.35)] transition-all"
                    >
                        <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
