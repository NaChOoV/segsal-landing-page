import { ContentSection, SubareaHeader, SubareaNavigation } from '../../components';
import { data } from './data';

interface MejorasEnCabinaProps {
    navigate: (path: string) => void;
}

export default function MejorasEnCabina({ navigate }: MejorasEnCabinaProps) {
    return (
        <div className="container max-w-7xl px-4 py-12">
            <SubareaHeader areaTitle={data.areaTitle} title={data.title} />

            {data.sections.map((section, index) => (
                <ContentSection
                    key={index}
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
                    title: 'Aire Acondicionado',
                    path: '/servicios-equipos-mineria/aire-acondicionado',
                }}
                nextSubarea={{
                    title: 'Presurizado y Certificación',
                    path: '/servicios-equipos-mineria/presurizado',
                }}
            />
        </div>
    );
}
