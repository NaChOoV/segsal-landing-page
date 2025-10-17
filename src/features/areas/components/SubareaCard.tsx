interface SubareaCardProps { title: string; href?: string }
export default function SubareaCard({ title }: SubareaCardProps) {
  return (
    <article className="rounded-lg border p-4 transition-colors hover:bg-accent">
      <h3 className="font-medium">{title}</h3>
    </article>
  );
}
