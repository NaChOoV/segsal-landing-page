import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface NavigationLink {
    title: string;
    path: string;
}

interface SubareaNavigationProps {
    previousSubarea?: NavigationLink;
    nextSubarea?: NavigationLink;
    onNavigate?: (path: string) => void;
}

export function SubareaNavigation({
    previousSubarea,
    nextSubarea,
    onNavigate,
}: SubareaNavigationProps) {
    const handleNavigation = (path: string) => {
        // Scroll primero para asegurar que estamos en la parte superior
        window.scrollTo({ top: 0, behavior: 'instant' });

        // Pequeño delay para asegurar que el scroll se complete
        setTimeout(() => {
            if (onNavigate) {
                onNavigate(path);
            } else {
                window.history.pushState({}, '', path);
                window.location.href = path;
            }
        }, 0);
    };

    if (!previousSubarea && !nextSubarea) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid gap-4 md:grid-cols-2"
        >
            {/* Botón Anterior */}
            {previousSubarea && (
                <motion.button
                    onClick={() => handleNavigation(previousSubarea.path)}
                    whileHover={{ scale: 1.02, x: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-background/70 via-background/60 to-background/50 p-6 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:border-white/10 dark:from-background/50 dark:via-background/40 dark:to-background/30 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)]"
                >
                    {/* Gradient overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                            <ArrowLeft className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-x-1" />
                        </div>
                        <div className="flex-1 text-left">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Anterior
                            </p>
                            <p className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                                {previousSubarea.title}
                            </p>
                        </div>
                    </div>
                </motion.button>
            )}

            {/* Botón Siguiente */}
            {nextSubarea && (
                <motion.button
                    onClick={() => handleNavigation(nextSubarea.path)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-background/70 via-background/60 to-background/50 p-6 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18)] dark:border-white/10 dark:from-background/50 dark:via-background/40 dark:to-background/30 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.45)] ${
                        !previousSubarea ? 'md:col-start-2' : ''
                    }`}
                >
                    {/* Gradient overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4">
                        <div className="flex-1 text-right">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Siguiente
                            </p>
                            <p className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                                {nextSubarea.title}
                            </p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                            <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                    </div>
                </motion.button>
            )}
        </motion.div>
    );
}
