import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import { useBrowserDetect } from '@/hooks/useBrowserDetect';

interface YouTubeVideoProps {
    videoId: string;
    title?: string;
    description?: string;
}

export function YouTubeVideo({ videoId, title, description }: YouTubeVideoProps) {
    // Detectar navegador para deshabilitar animaciones si es necesario
    const { shouldDisableAnimations } = useBrowserDetect();

    // Si debemos deshabilitar animaciones, no usar initial/animate
    const sectionVariants = shouldDisableAnimations
        ? { initial: {}, animate: {} }
        : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

    return (
        <motion.section
            initial={sectionVariants.initial}
            animate={sectionVariants.animate}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                WebkitTransform: 'translate3d(0,0,0)',
                transform: 'translate3d(0,0,0)',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                WebkitPerspective: '1000px',
                perspective: '1000px',
                WebkitFontSmoothing: 'subpixel-antialiased',
                isolation: 'isolate',
            }}
            className="group relative mb-16 overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-background/70 via-background/60 to-background/50 p-8 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:border-white/10 dark:from-background/50 dark:via-background/40 dark:to-background/30 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)] md:p-12"
        >
            {/* Decorative gradient overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Decorative corner accent - top */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                style={{
                    WebkitTransform: 'translate3d(0,0,0)',
                    transform: 'translate3d(0,0,0)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                }}
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-red-500/10 to-red-500/5 blur-2xl"
            />

            {/* Decorative corner accent - bottom left */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                style={{
                    WebkitTransform: 'translate3d(0,0,0)',
                    transform: 'translate3d(0,0,0)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                }}
                className="absolute -bottom-16 -left-16 h-64 w-64 rounded-tr-full bg-gradient-to-tr from-red-500/15 via-red-500/8 to-transparent"
            />

            <div className="relative space-y-6">
                {/* Title and Description */}
                {(title || description) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{
                            WebkitTransform: 'translate3d(0,0,0)',
                            transform: 'translate3d(0,0,0)',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                        }}
                        className="space-y-3 text-center"
                    >
                        {title && (
                            <h2 className="relative inline-block text-3xl font-bold md:text-4xl">
                                {title}
                                {/* Underline decoration */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                                    style={{
                                        WebkitTransform: 'translate3d(0,0,0)',
                                        transform: 'translate3d(0,0,0)',
                                        WebkitBackfaceVisibility: 'hidden',
                                        backfaceVisibility: 'hidden',
                                    }}
                                    className="mx-auto mt-2 h-1 rounded-full bg-gradient-to-r from-red-500/60 to-red-500/20"
                                />
                            </h2>
                        )}
                        {description && (
                            <p className="mx-auto max-w-2xl leading-relaxed text-muted-foreground text-lg">
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    style={{
                        WebkitTransform: 'translate3d(0,0,0)',
                        transform: 'translate3d(0,0,0)',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                    }}
                    className="group/video relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                >
                    {/* YouTube badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                        style={{
                            WebkitTransform: 'translate3d(0,0,0)',
                            transform: 'translate3d(0,0,0)',
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                        }}
                        className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-2xl border border-white/20 bg-red-500/90 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md"
                    >
                        <Youtube className="h-3 w-3" />
                        <span>Video</span>
                    </motion.div>

                    {/* Video iframe with 16:9 aspect ratio */}
                    <div className="relative aspect-video w-full overflow-hidden bg-black">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                            title={title || 'Video de YouTube'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                            style={{
                                WebkitTransform: 'translate3d(0,0,0)',
                                transform: 'translate3d(0,0,0)',
                                WebkitBackfaceVisibility: 'hidden',
                                backfaceVisibility: 'hidden',
                            }}
                        />
                    </div>

                    {/* Decorative play icon (fades when hovering) */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    >
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/80 shadow-2xl backdrop-blur-sm">
                            <Play className="h-8 w-8 fill-white text-white" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
}
