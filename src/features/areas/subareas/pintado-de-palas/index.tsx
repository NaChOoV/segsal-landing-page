import DetailLayout from '../../components/DetailLayout';
import MediaGallery from '../../components/MediaGallery';
import ContentPlaceholder from '../../components/ContentPlaceholder';

export default function PintadoDePalas() {
  return (
    <DetailLayout>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Pintado de Palas</h1>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Pintado de Palas (ej. P&H 4100 XPC)</li>
          <li>Demarcación y Gráfica</li>
          <li>Definición de Estándar y Gráficos en Equipos</li>
        </ul>
      </header>

      <MediaGallery items={[
        { kind: 'image', src: '/images/placeholder-pintado-1.jpg', alt: 'Pintado de palas' }
      ]} />

      <div className="mt-4">
        <ContentPlaceholder label="PLACEHOLDER: Imágenes dedicadas por confirmar" />
      </div>
    </DetailLayout>
  );
}
