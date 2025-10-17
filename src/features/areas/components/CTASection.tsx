import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

interface CTASectionProps {
    title: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
}

export function CTASection({ title, description, buttonText, onButtonClick }: CTASectionProps) {
    const handleClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center border border-primary/30 rounded-3xl p-12 bg-primary/10 dark:bg-primary/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">{description}</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className="rounded-3xl bg-primary px-8 py-3 text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-colors"
            >
                {buttonText}
            </motion.button>
        </motion.section>
    );
}
