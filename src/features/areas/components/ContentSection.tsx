import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useSafariDetect } from '@/hooks/useSafariDetect';

interface ContentSectionProps {
    title: string;
    descriptions: string[];
    imageUrl: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
}

export function ContentSection({
    title,
    descriptions,
    imageUrl,
    imageAlt,
    imagePosition = 'right',
}: ContentSectionProps) {
    const contentOrder = imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2';
    const imageOrder = imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1';
    const contentXOffset = imagePosition === 'right' ? -50 : 50;
    const imageXOffset = imagePosition === 'right' ? 50 : -50;
    const useAnimateFallback = useSafariDetect(); // true para Safari, Firefox, Zen, etc.

    return (
        <motion.section
            initial={useAnimateFallback ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={useAnimateFallback ? { opacity: 1, y: 0 } : undefined}
            whileInView={useAnimateFallback ? undefined : { opacity: 1, y: 0 }}
            viewport={useAnimateFallback ? undefined : { once: true, amount: 0.1, margin: '0px' }}
            transition={{ duration: 0.6 }}
            className="group relative mb-16 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-background/70 via-background/60 to-background/50 p-8 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:border-white/10 dark:from-background/50 dark:via-background/40 dark:to-background/30 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)] md:p-12"
        >
            {/* Decorative gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Decorative corner accent - top */}
            <motion.div
                initial={useAnimateFallback ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                animate={useAnimateFallback ? { scale: 1, rotate: 0 } : undefined}
                whileInView={useAnimateFallback ? undefined : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl"
            />

            {/* Decorative quarter circle - opposite side of image */}
            <motion.div
                initial={useAnimateFallback ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                animate={useAnimateFallback ? { scale: 1, opacity: 1 } : undefined}
                whileInView={useAnimateFallback ? undefined : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
                className={`absolute ${
                    imagePosition === 'right'
                        ? '-bottom-16 -left-16 rounded-tr-full'
                        : '-bottom-16 -right-16 rounded-tl-full'
                } h-64 w-64 bg-gradient-to-tr from-primary/15 via-primary/8 to-transparent`}
            />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-stretch">
                <motion.div
                    initial={
                        useAnimateFallback
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: contentXOffset }
                    }
                    animate={useAnimateFallback ? { opacity: 1, x: 0 } : undefined}
                    whileInView={useAnimateFallback ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`space-y-6 ${contentOrder}`}
                >
                    <motion.div
                        initial={useAnimateFallback ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        animate={useAnimateFallback ? { opacity: 1, y: 0 } : undefined}
                        whileInView={useAnimateFallback ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="relative inline-block text-3xl font-bold md:text-4xl">
                            {title}
                            {/* Underline decoration */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={useAnimateFallback ? { width: '100%' } : undefined}
                                whileInView={useAnimateFallback ? undefined : { width: '100%' }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-2 h-1 rounded-full bg-gradient-to-r from-primary/60 to-primary/20"
                            />
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {descriptions.map((description, index) => (
                            <motion.p
                                key={index}
                                initial={
                                    useAnimateFallback
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 10 }
                                }
                                animate={useAnimateFallback ? { opacity: 1, y: 0 } : undefined}
                                whileInView={useAnimateFallback ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="leading-relaxed text-muted-foreground text-lg"
                            >
                                {description}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={
                        useAnimateFallback ? { opacity: 1, x: 0 } : { opacity: 0, x: imageXOffset }
                    }
                    animate={useAnimateFallback ? { opacity: 1, x: 0 } : undefined}
                    whileInView={useAnimateFallback ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`relative flex ${imageOrder}`}
                >
                    {/* Image container with enhanced effects */}
                    <div className="group/image relative h-[400px] lg:h-full lg:min-h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/image:opacity-40" />

                        {/* Quality badge */}
                        <motion.div
                            initial={
                                useAnimateFallback
                                    ? { opacity: 1, scale: 1, y: 0 }
                                    : { opacity: 0, scale: 0.8, y: 20 }
                            }
                            animate={
                                useAnimateFallback ? { opacity: 1, scale: 1, y: 0 } : undefined
                            }
                            whileInView={
                                useAnimateFallback ? undefined : { opacity: 1, scale: 1, y: 0 }
                            }
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-2xl border border-white/20 bg-background/90 px-3 py-2 text-xs font-medium shadow-lg backdrop-blur-md"
                        >
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span>Calidad SEGSAL</span>
                        </motion.div>

                        {/* Image with hover zoom */}
                        <motion.img
                            src={imageUrl}
                            alt={imageAlt}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                            whileHover={{ scale: 1.05 }}
                        />

                        {/* Shine effect on hover */}
                        <motion.div
                            className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
