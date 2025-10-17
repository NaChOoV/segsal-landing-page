export default function CertificationBadges({ items = [] as string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((b, i) => (
        <span key={i} className="rounded-full border px-2 py-1 text-xs">{b}</span>
      ))}
    </div>
  );
}
