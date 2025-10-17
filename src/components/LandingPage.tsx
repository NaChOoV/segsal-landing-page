import { motion } from 'framer-motion';
import {
    ArrowRight,
    Building2,
    HardHat,
    Wind,
    Wrench,
    Shield,
    Award,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Animation variants
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

interface LandingPageProps {
    onNavigate: (path: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] border border-muted rounded-3xl bg-gradient-to-br from-background to-muted/30 p-8 md:p-12"
                        >
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="inline-flex items-center rounded-3xl bg-primary/10 border border-primary/30 px-3 py-1 text-sm font-medium"
                                    >
                                        <Shield className="mr-2 h-4 w-4 text-primary" />
                                        Excelencia en Seguridad y Servicios
                                    </motion.div>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                        className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                    >
                                        Soluciones Integrales para la{' '}
                                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                                            Industria Minera
                                        </span>
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.4 }}
                                        className="max-w-[600px] text-muted-foreground md:text-xl"
                                    >
                                        SEGSAL LATAM ofrece servicios especializados en equipos de
                                        minería, trabajos verticales, y soluciones técnicas con los
                                        más altos estándares de calidad y seguridad.
                                    </motion.p>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, delay: 0.6 }}
                                    className="flex flex-col gap-3 sm:flex-row"
                                >
                                    <Button
                                        size="lg"
                                        className="rounded-3xl group"
                                        onClick={() => {
                                            document
                                                .getElementById('servicios')
                                                ?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Ver Servicios
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="rounded-3xl"
                                        onClick={() => {
                                            document
                                                .getElementById('contacto')
                                                ?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Contacto
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center justify-center"
                            >
                                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                                    <img
                                        src="/areas/servicios-equipos-mineria/aire-acondicionado/image1.jpeg"
                                        alt="Servicios SEGSAL"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Áreas de Negocio */}
                <section id="areas" className="w-full py-12 md:py-24 lg:py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="container px-4 md:px-6 border border-muted rounded-3xl"
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
                            <div className="space-y-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                                >
                                    Áreas de Negocio
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                                >
                                    Nuestras Especialidades
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed"
                                >
                                    Ofrecemos servicios especializados en múltiples áreas para la
                                    industria minera y energética
                                </motion.p>
                            </div>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-2"
                        >
                            {[
                                {
                                    icon: <HardHat className="h-10 w-10 text-primary" />,
                                    title: 'Servicios en Equipos de Minería',
                                    description:
                                        'Mantenimiento y reparación de sistemas de aire acondicionado, mejoras en cabina, presurizado y pintado de palas.',
                                    path: '/servicios-equipos-mineria',
                                },
                                {
                                    icon: <Wrench className="h-10 w-10 text-primary" />,
                                    title: 'Servicio Técnico',
                                    description:
                                        'Detección de gases, maletas de filtrado de aire y equipos de respiración autónoma (SCBA).',
                                    path: '/servicio-tecnico',
                                },
                                {
                                    icon: <Building2 className="h-10 w-10 text-primary" />,
                                    title: 'Trabajos Verticales',
                                    description:
                                        'Acceso por cuerda y protección contra caídas con personal altamente calificado.',
                                    path: '/trabajos-verticales',
                                },
                                {
                                    icon: <Wind className="h-10 w-10 text-primary" />,
                                    title: 'Energía Eólica',
                                    description:
                                        'Servicios especializados para el sector de energía renovable eólica.',
                                    path: '/eolica',
                                },
                            ].map((area, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemFadeIn}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    onClick={() => onNavigate(area.path)}
                                    className="group relative overflow-hidden rounded-3xl border p-8 shadow-lg hover:shadow-2xl bg-background/80 cursor-pointer transition-all"
                                >
                                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                                    <div className="relative space-y-3">
                                        <div className="mb-4 rounded-2xl bg-primary/10 w-fit p-3">
                                            {area.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{area.title}</h3>
                                        <p className="text-muted-foreground">{area.description}</p>
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
                        </motion.div>
                    </motion.div>
                </section>

                {/* Certificaciones */}
                <section id="certificaciones" className="w-full py-12 md:py-24 lg:py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20"
                    >
                        <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
                            <div className="space-y-3">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-flex items-center rounded-3xl bg-background px-3 py-1 text-sm font-medium"
                                >
                                    <Award className="mr-2 h-4 w-4 text-primary" />
                                    Certificados
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                                >
                                    Certificaciones Internacionales
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed"
                                >
                                    Contamos con las certificaciones ISO que respaldan nuestro
                                    compromiso con la calidad, el medio ambiente y la seguridad
                                </motion.p>
                            </div>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="mx-auto grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-3 max-w-4xl pb-10"
                        >
                            {[
                                {
                                    title: 'ISO 9001',
                                    description: 'Gestión de Calidad',
                                },
                                {
                                    title: 'ISO 14001',
                                    description: 'Gestión Ambiental',
                                },
                                {
                                    title: 'ISO 45001',
                                    description: 'Seguridad y Salud Ocupacional',
                                },
                            ].map((cert, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemFadeIn}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center justify-center rounded-3xl border p-8 bg-background shadow-md hover:shadow-xl transition-all"
                                >
                                    <Award className="h-16 w-16 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                                    <p className="text-sm text-muted-foreground text-center">
                                        {cert.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4 p-6"
                        >
                            <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">
                                Contacto
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                Trabajemos Juntos
                            </h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                ¿Listo para comenzar tu próximo proyecto? Contáctanos para discutir
                                cómo podemos ayudarte.
                            </p>
                            <div className="mt-8 space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="rounded-3xl bg-muted p-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Nuestra Ubicación</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Chile - Servicios en toda Latinoamérica
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="rounded-3xl bg-muted p-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-sm text-muted-foreground">
                                            contacto@segsal.com
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="rounded-3xl bg-muted p-2">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Teléfono</h3>
                                        <p className="text-sm text-muted-foreground">
                                            +56 9 XXXX XXXX
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl border bg-background p-6 shadow-sm"
                        >
                            <h3 className="text-xl font-bold">Envíanos un Mensaje</h3>
                            <p className="text-sm text-muted-foreground">
                                Completa el formulario y te responderemos pronto.
                            </p>
                            <form className="mt-6 space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="first-name"
                                            className="text-sm font-medium leading-none"
                                        >
                                            Nombre
                                        </label>
                                        <Input
                                            id="first-name"
                                            placeholder="Ingresa tu nombre"
                                            className="rounded-3xl"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="last-name"
                                            className="text-sm font-medium leading-none"
                                        >
                                            Apellido
                                        </label>
                                        <Input
                                            id="last-name"
                                            placeholder="Ingresa tu apellido"
                                            className="rounded-3xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Ingresa tu email"
                                        className="rounded-3xl"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-medium leading-none"
                                    >
                                        Mensaje
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Ingresa tu mensaje"
                                        className="min-h-[120px] rounded-3xl"
                                    />
                                </div>
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button type="submit" className="w-full rounded-3xl">
                                        Enviar Mensaje
                                    </Button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full border-t mt-auto">
                <div className="container px-4 py-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} SEGSAL LATAM. Todos los derechos
                            reservados.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Certificados ISO 9001 | ISO 14001 | ISO 45001
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
