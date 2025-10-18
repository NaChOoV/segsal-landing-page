import {
    BrandsShowcase,
    CertificationShowcase,
    ContentSection,
    SubareaHeader,
    SubareaNavigation,
    YouTubeVideo,
} from '../../components';
import { data } from './data';

interface PresurizadoCertificacionesProps {
    navigate: (path: string) => void;
}

export default function PresurizadoCertificaciones({ navigate }: PresurizadoCertificacionesProps) {
    return (
        <div className="container max-w-7xl px-4 py-12">
            <SubareaHeader areaTitle={data.areaTitle} title={data.title} />

            {/* Primera sección de contenido */}
            {data.sections[0] && (
                <ContentSection
                    title={data.sections[0].title}
                    descriptions={data.sections[0].descriptions}
                    imageUrl={data.sections[0].imageData.url}
                    imageAlt={data.sections[0].imageData.alt}
                    imagePosition={data.sections[0].imagePosition}
                />
            )}

            {/* Video de YouTube */}
            <YouTubeVideo
                videoId="ZI_vvYXaMzk"
                title="Presurizado y Certificaciones en Acción"
                description="Conoce nuestro proceso de presurizado y certificación de cabinas para equipos mineros"
            />

            {data.sections[1] && (
                <ContentSection
                    title={data.sections[1].title}
                    descriptions={data.sections[1].descriptions}
                    imageUrl={data.sections[1].imageData.url}
                    imageAlt={data.sections[1].imageData.alt}
                    imagePosition={data.sections[1].imagePosition}
                />
            )}

            {/* Showcase de marcas */}
            <BrandsShowcase
                title={data.brands[0].title}
                subtitle={data.brands[0].subtitle}
                brands={data.brands[0].items}
            />

            {/* Secciones de contenido restantes */}
            {data.sections[2] && (
                <ContentSection
                    title={data.sections[2].title}
                    descriptions={data.sections[2].descriptions}
                    imageUrl={data.sections[2].imageData.url}
                    imageAlt={data.sections[2].imageData.alt}
                    imagePosition={data.sections[2].imagePosition}
                />
            )}

            {/* Showcase de certificaciones */}
            <CertificationShowcase certifications={data.certifications} />

            {/* Navegación entre subareas */}
            <SubareaNavigation
                onNavigate={navigate}
                previousSubarea={{
                    title: 'Mejoras en Cabina',
                    path: '/servicios-equipos-mineria/mejoras-en-cabina',
                }}
                nextSubarea={{
                    title: 'Normalizacion Grafica',
                    path: '/servicios-equipos-mineria/normalizacion-grafica',
                }}
            />
        </div>
    );
}
