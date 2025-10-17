import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ServiciosEquiposMineria from '@/features/areas/areas/servicios-equipos-mineria';
import AireAcondicionado from '@/features/areas/subareas/aire-acondicionado';
import MejorasEnCabina from '@/features/areas/subareas/mejoras-en-cabina';
import PintadoDePalas from '@/features/areas/subareas/normalizacion-grafica';
import Presurizado from '@/features/areas/subareas/presurizado';
import Header from '@/components/ui/Header';
import { HardHat, Wind, ArrowRight } from 'lucide-react';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function App() {
    const [path, setPath] = useState<string>(window.location.pathname);

    useEffect(() => {
        const onPop = () => setPath(window.location.pathname);
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    const navigate = (to: string) => {
        if (to === path) return;
        window.history.pushState({}, '', to);
        setPath(to);
    };

    const isAreasIndex = useMemo(() => path === '/', [path]);
    const isServicios = useMemo(() => path === '/servicios-equipos-mineria', [path]);
    const isSubarea = useMemo(() => path.startsWith('/servicios-equipos-mineria/'), [path]);

    const areas = [
        {
            icon: <HardHat className="h-10 w-10 text-primary" />,
            title: 'Servicios en Equipos de Minería',
            description:
                'Mantenimiento y reparación de sistemas de aire acondicionado, mejoras en cabina, presurizado y pintado de palas.',
            path: '/servicios-equipos-mineria',
        },
        {
            icon: <Wind className="h-10 w-10 text-primary" />,
            title: 'Energía Eólica',
            description: 'Servicios especializados para el sector de energía renovable eólica.',
            path: '/eolica',
        },
    ];

    return (
        <div className="relative min-h-dvh bg-background">
            {/* Logo de fondo animado para todas las páginas */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.08, 0.95, 1],
                        y: [0, -20, 20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <motion.img
                        src="/logo-grande.svg"
                        alt="SEGSAL Background"
                        className="h-[85vh] w-auto object-contain blur-[0.2px] transition-all duration-500"
                        style={{
                            filter: 'grayscale(30%) brightness(1.1)',
                            opacity: 0.18,
                        }}
                        animate={{
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                {/* Efecto de brillo que se mueve */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            </div>

            <div className="relative z-10">
                <Header />
            </div>
            <main className="relative z-10 mx-auto max-w-7xl p-6">
                <AnimatePresence mode="wait">
                    {isAreasIndex && (
                        <motion.section
                            key="areas-index"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="py-12"
                        >
                            <div className="mb-12 text-center">
                                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                                    Áreas de Negocio
                                </h1>
                                <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
                                    Selecciona un área para conocer nuestros servicios
                                    especializados
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {areas.map((area, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                        onClick={() => navigate(area.path)}
                                        className="group relative overflow-hidden rounded-3xl border p-8 shadow-lg hover:shadow-2xl bg-background cursor-pointer transition-all"
                                    >
                                        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                                        <div className="relative space-y-4">
                                            <div className="rounded-2xl bg-primary/10 w-fit p-3">
                                                {area.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold">{area.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {area.description}
                                            </p>
                                        </div>
                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-sm font-medium text-primary">
                                                Ver más
                                            </span>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 400,
                                                    damping: 10,
                                                }}
                                            >
                                                <ArrowRight className="h-5 w-5 text-primary" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}
                    {isServicios && (
                        <motion.section
                            key="servicios"
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <motion.button
                                type="button"
                                onClick={() => navigate('/')}
                                whileHover={{ x: -5 }}
                                className="mb-6 inline-flex items-center gap-2 rounded-3xl border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            >
                                ← Volver a Inicio
                            </motion.button>
                            <ServiciosEquiposMineria onNavigate={navigate} />
                        </motion.section>
                    )}

                    {isSubarea && (
                        <motion.section
                            key={path}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <motion.button
                                type="button"
                                onClick={() => navigate('/servicios-equipos-mineria')}
                                whileHover={{ x: -5 }}
                                className="mb-6 inline-flex items-center gap-2 rounded-3xl border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                            >
                                ← Volver a Servicios en Equipos de Minería
                            </motion.button>
                            {path === '/servicios-equipos-mineria/aire-acondicionado' && (
                                <AireAcondicionado navigate={navigate} />
                            )}
                            {path === '/servicios-equipos-mineria/mejoras-en-cabina' && (
                                <MejorasEnCabina navigate={navigate} />
                            )}
                            {path === '/servicios-equipos-mineria/normalizacion-grafica' && (
                                <PintadoDePalas navigate={navigate} />
                            )}
                            {path === '/servicios-equipos-mineria/presurizado' && (
                                <Presurizado navigate={navigate} />
                            )}
                        </motion.section>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
