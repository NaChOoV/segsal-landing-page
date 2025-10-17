import DetailLayout from '../../components/DetailLayout';
import MediaGallery from '../../components/MediaGallery';
import CertificationBadges from '../../components/CertificationBadges';

export default function Presurizado() {
  return (
    <DetailLayout>
      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Presurizado y Certificación de Sellado de Cabina</h1>
        <p className="text-sm text-muted-foreground">Presurizado de cabina y salas eléctricas.</p>
      </header>

      <CertificationBadges items={["ISO 9001", "ISO 14001", "ISO 45001"]} />

      <div className="mt-4">
        <MediaGallery items={[
          { kind: 'image', src: '/images/placeholder-presurizado-1.jpg', alt: 'Presurizado cabina' }
        ]} />
      </div>
    </DetailLayout>
  );
}
