interface AreaCardProps {
    title: string;
    onClick?: () => void;
}
export default function AreaCard({ title, onClick }: AreaCardProps) {
    return (
        <article
            onClick={onClick}
            className="cursor-pointer rounded-lg border p-4 transition-colors hover:bg-accent"
        >
            <h3 className="font-medium">{title}</h3>
        </article>
    );
}
