import { motion } from 'framer-motion';
import { Award, CheckCircle2, Shield } from 'lucide-react';

interface CertificationItem {
    name: string;
    logo: string;
}

interface Certification {
    title: string;
    description: string;
    items: CertificationItem[];
}

interface CertificationShowcaseProps {
    certifications: Certification[];
}

export function CertificationShowcase({ certifications }: CertificationShowcaseProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
        >
            <div className="text-center mb-12">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/5 mb-4"
                >
                    <Shield className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold md:text-4xl lg:text-5xl mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Certificaciones de Calidad
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500/70 to-blue-400/40"
                />
            </div>

            <div className="space-y-8">
                {certifications.map((certification, certIndex) => (
                    <motion.div
                        key={certIndex}
                        initial={{ opacity: 0, x: certIndex % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: certIndex * 0.2 }}
                        className="relative"
                    >
                        {/* Decorative floating elements */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="absolute -top-4 -right-4 z-10"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-2 border-blue-500/40 backdrop-blur-sm shadow-lg">
                                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </motion.div>

                        <div className="relative overflow-hidden rounded-2xl border-2 border-blue-200/40 dark:border-blue-400/20 bg-gradient-to-br from-blue-50/50 via-background/95 to-blue-50/30 dark:from-blue-950/30 dark:via-background/95 dark:to-blue-900/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                            {/* Animated border glow */}
                            <motion.div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background:
                                        'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)',
                                }}
                                animate={{
                                    x: ['-100%', '200%'],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatDelay: 1,
                                    ease: 'easeInOut',
                                }}
                            />

                            <div className="relative p-8 md:p-10">
                                {/* Title section */}
                                <div className="mb-6">
                                    <div className="flex items-start gap-3 mb-3">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{
                                                delay: certIndex * 0.2 + 0.3,
                                                type: 'spring',
                                            }}
                                        >
                                            <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                                        </motion.div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                            {certification.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: certIndex * 0.2 + 0.4 }}
                                    className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg"
                                >
                                    {certification.description}
                                </motion.p>

                                {/* Certification badges */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                    {certification.items.map((item, itemIndex) => (
                                        <motion.div
                                            key={itemIndex}
                                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: certIndex * 0.2 + itemIndex * 0.15 + 0.5,
                                                type: 'spring',
                                                bounce: 0.4,
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                rotate: [0, -2, 2, 0],
                                                transition: { duration: 0.3 },
                                            }}
                                            className="group/badge relative"
                                        >
                                            {/* Badge glow effect */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl bg-blue-400/30 blur-2xl opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500"
                                                animate={{
                                                    scale: [1, 1.08, 1],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                            />

                                            <div
                                                className="relative flex flex-col items-center justify-between p-8 rounded-xl border border-white/30 dark:border-white/20 bg-slate-800/20 dark:bg-slate-900/25 backdrop-blur-[12px] transition-all duration-300 group-hover/badge:border-blue-400/50 group-hover/badge:bg-slate-800/25 group-hover/badge:shadow-2xl h-full min-h-[320px]"
                                                style={{
                                                    backdropFilter: 'blur(12px)',
                                                    WebkitBackdropFilter: 'blur(12px)',
                                                }}
                                            >
                                                {/* Corner accent */}
                                                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-blue-400/60" />
                                                <div className="absolute bottom-3 left-3 w-2.5 h-2.5 rounded-full bg-blue-400/60" />

                                                {/* Logo container */}
                                                <div className="relative w-full h-48 mb-6 flex items-center justify-center">
                                                    <img
                                                        src={item.logo}
                                                        alt={item.name}
                                                        className="relative z-10 h-full w-full object-contain transition-all duration-300 group-hover/badge:scale-105 group-hover/badge:brightness-110"
                                                        loading="lazy"
                                                    />
                                                </div>

                                                {/* Badge name */}
                                                <div className="text-center mb-5 px-2">
                                                    <p
                                                        className="text-sm md:text-base font-semibold text-white drop-shadow-lg group-hover/badge:text-blue-300 transition-colors duration-300 leading-relaxed"
                                                        style={{
                                                            textShadow:
                                                                '0 2px 8px rgba(0, 0, 0, 0.5)',
                                                        }}
                                                    >
                                                        {item.name}
                                                    </p>
                                                </div>

                                                {/* Verified indicator */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        delay:
                                                            certIndex * 0.2 +
                                                            itemIndex * 0.15 +
                                                            0.7,
                                                    }}
                                                    className="w-full"
                                                >
                                                    <div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/30 transition-all duration-300">
                                                        <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                                                        <span className="text-xs md:text-sm font-bold text-white">
                                                            Verificado
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom accent bar */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: certIndex * 0.2 + 1, duration: 0.8 }}
                                    className="mt-8 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Trust badge at the bottom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-10 text-center"
            >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm md:text-base font-medium backdrop-blur-sm">
                    <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-foreground">
                        Comprometidos con la excelencia y la calidad internacional
                    </span>
                </div>
            </motion.div>
        </motion.section>
    );
}
