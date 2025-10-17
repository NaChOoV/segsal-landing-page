import { ContentSection, SubareaHeader } from '../../components';
import { data } from './data';

export default function MejorasEnCabina() {
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
        </div>
    );
}
