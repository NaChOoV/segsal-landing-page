interface Crumb { label: string; href?: string }
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-4 text-sm text-muted-foreground">
      {items.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2">/</span>}
          {c.href ? <a href={c.href} className="hover:underline">{c.label}</a> : c.label}
        </span>
      ))}
    </nav>
  );
}
