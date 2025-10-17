import {
    SubareaHeader,
    ContentSection,
    BrandsShowcase,
    SubareaNavigation,
} from '../../components/index';
import { data } from './data';

interface AireAcondicionadoProps {
    navigate: (path: string) => void;
}

export default function AireAcondicionado({ navigate }: AireAcondicionadoProps) {
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

            {/* Showcase de marcas */}
            <BrandsShowcase
                title={data.brands.title}
                subtitle={data.brands.subtitle}
                brands={data.brands.items}
            />

            {/* Secciones de contenido restantes */}
            {data.sections.slice(1).map((section, index) => (
                <ContentSection
                    key={index + 1}
                    title={section.title}
                    descriptions={section.descriptions}
                    imageUrl={section.imageData.url}
                    imageAlt={section.imageData.alt}
                    imagePosition={section.imagePosition}
                />
            ))}

            {/* Navegación entre subareas */}
            <SubareaNavigation
                onNavigate={navigate}
                nextSubarea={{
                    title: 'Mejoras en Cabina',
                    path: '/servicios-equipos-mineria/mejoras-en-cabina',
                }}
            />
        </div>
    );
}
