import { BrandsShowcase, ContentSection, SubareaHeader, SubareaNavigation } from '../../components';
import { data } from './data';

interface PresurizadoProps {
    navigate: (path: string) => void;
}

export default function Presurizado({ navigate }: PresurizadoProps) {
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
                title={data.brands[0].title}
                subtitle={data.brands[0].subtitle}
                brands={data.brands[0].items}
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
                previousSubarea={{
                    title: 'Presurizado y Certificación',
                    path: '/servicios-equipos-mineria/presurizado',
                }}
                nextSubarea={{
                    title: 'Normalizacion Grafica',
                    path: '/servicios-equipos-mineria/normalizacion-grafica',
                }}
            />
        </div>
    );
}
