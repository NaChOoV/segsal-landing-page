import { motion } from 'framer-motion';
import { Wind, Droplets, Paintbrush, Building2, ArrowRight } from 'lucide-react';

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

export default function ServiciosEquiposMineria({
    onNavigate,
}: {
    onNavigate?: (to: string) => void;
}) {
    const subareas = [
        {
            icon: <Wind className="h-8 w-8 text-primary" />,
            title: 'Aire Acondicionado',
            description:
                'Mantención y reparación de sistemas de climatización para equipos de alta minería',
            path: '/servicios-equipos-mineria/aire-acondicionado',
        },
        {
            icon: <Building2 className="h-8 w-8 text-primary" />,
            title: 'Mejoras en Cabina',
            description:
                'Sellado, cambio de vidrios, pisos y mejoras integrales para cabinas de equipos',
            path: '/servicios-equipos-mineria/mejoras-en-cabina',
        },
        {
            icon: <Paintbrush className="h-8 w-8 text-primary" />,
            title: 'Pintado de Palas',
            description:
                'Pintado profesional, demarcación y gráfica para equipos de gran envergadura',
            path: '/servicios-equipos-mineria/pintado-de-palas',
        },
        {
            icon: <Droplets className="h-8 w-8 text-primary" />,
            title: 'Presurizado',
            description: 'Presurizado y certificación de sellado para cabinas y salas eléctricas',
            path: '/servicios-equipos-mineria/presurizado',
        },
    ];

    return (
        <div className="container max-w-7xl px-4 py-12">
            <motion.header
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mb-12 text-center"
            >
                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                    Servicios en Equipos de Minería
                </h1>
                <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                    Soluciones especializadas para el mantenimiento y optimización de equipos de
                    alta minería
                </p>
            </motion.header>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid gap-6 md:grid-cols-2"
            >
                {subareas.map((subarea, index) => (
                    <motion.div
                        key={index}
                        variants={itemFadeIn}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        onClick={() => onNavigate?.(subarea.path)}
                        className="group relative overflow-hidden rounded-3xl border p-8 shadow-lg hover:shadow-2xl bg-background cursor-pointer transition-all"
                    >
                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                        <div className="relative space-y-4">
                            <div className="rounded-2xl bg-primary/10 w-fit p-3">
                                {subarea.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{subarea.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {subarea.description}
                            </p>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-primary">Ver detalles</span>
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                            >
                                <ArrowRight className="h-5 w-5 text-primary" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
