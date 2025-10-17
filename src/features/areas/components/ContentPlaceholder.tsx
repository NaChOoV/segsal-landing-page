export default function ContentPlaceholder({ label = 'Contenido pendiente' }: { label?: string }) {
  return (
    <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
      {label}
    </div>
  );
}
