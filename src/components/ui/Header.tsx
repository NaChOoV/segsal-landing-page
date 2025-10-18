export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <div
                className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-b-2xl border border-white/20 bg-background/70 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] transition-all duration-300 animate-in slide-in-from-top-2 dark:border-white/10 dark:bg-background/60 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
                style={{
                    WebkitTransform: 'translateZ(0)',
                    transform: 'translateZ(0)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    isolation: 'isolate',
                }}
            >
                <a href="/" className="group flex items-center gap-3">
                    <img
                        src="/logo_Segsal.png"
                        alt="Segsal Latam"
                        className="h-16 w-auto translate-y-[1px] select-none transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </a>
            </div>
        </header>
    );
}
