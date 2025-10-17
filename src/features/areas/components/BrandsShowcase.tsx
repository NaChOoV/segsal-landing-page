import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface Brand {
    name: string;
    logo: string;
}

interface BrandsShowcaseProps {
    title?: string;
    subtitle?: string;
    brands: Brand[];
}

export function BrandsShowcase({ title, subtitle, brands }: BrandsShowcaseProps) {
    return (
        <motion.section
            key={`brands-${brands.length}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
        >
            {(title || subtitle) && (
                <div className="text-center mb-10">
                    {title && (
                        <div className="relative inline-block mb-3">
                            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">{title}</h2>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="mt-2 h-1 rounded-full bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20"
                            />
                        </div>
                    )}
                    {subtitle && (
                        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto flex items-center justify-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            {subtitle}
                            <Sparkles className="h-4 w-4 text-primary" />
                        </p>
                    )}
                </div>
            )}

            <div className="group relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-gradient-to-br from-background/70 via-background/60 to-background/50 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-10 md:p-16 transition-all duration-500 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)]">
                {/* Decorative animated gradient */}
                <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/8"
                    animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {/* Decorative circles */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-2xl"
                />
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-primary/15 via-primary/5 to-transparent blur-2xl"
                />

                <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 lg:gap-10">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.1,
                                type: 'spring',
                                bounce: 0.4,
                            }}
                            whileHover={{
                                y: -12,
                                scale: 1.08,
                                rotate: [0, -2, 2, 0],
                                transition: { duration: 0.4 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group/logo relative flex items-center justify-center"
                        >
                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover/logo:opacity-100"
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            />

                            <div className="relative flex h-32 w-full items-center justify-center rounded-3xl border-2 border-white/10 bg-background/70 p-6 shadow-lg backdrop-blur-md transition-all duration-300 group-hover/logo:border-primary/40 group-hover/logo:bg-background/90 group-hover/logo:shadow-2xl md:h-40 md:p-8">
                                {/* Animated shine effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                                    animate={{
                                        x: ['-100%', '100%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: 'easeInOut',
                                    }}
                                />

                                {/* Corner sparkles */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute -top-2 -right-2 rounded-full bg-primary/80 p-1.5 shadow-lg"
                                >
                                    <Sparkles className="h-3 w-3 text-primary-foreground" />
                                </motion.div>

                                {/* Logo image */}
                                <motion.img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="relative z-10 h-full w-full object-contain transition-all duration-500 grayscale group-hover/logo:grayscale-0"
                                    loading="lazy"
                                    whileHover={{ filter: 'brightness(1.1)' }}
                                />

                                {/* Brand name tooltip on hover */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                                >
                                    {brand.name}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Premium badge */}
                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>Socios certificados de las marcas líderes</span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
