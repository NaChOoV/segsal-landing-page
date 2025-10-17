export type MediaItem = { kind: 'image' | 'video'; src: string; alt?: string };

interface MediaGalleryProps { items?: MediaItem[] }
export default function MediaGallery({ items = [] }: MediaGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m, i) => (
        <div key={i} className="aspect-video overflow-hidden rounded-md border">
          {m.kind === 'image' ? (
            <img src={m.src} alt={m.alt ?? ''} className="h-full w-full object-cover" />
          ) : (
            <video src={m.src} controls className="h-full w-full object-cover" />
          )}
        </div>
      ))}
    </div>
  );
}
