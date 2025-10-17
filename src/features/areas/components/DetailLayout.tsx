import type { PropsWithChildren } from 'react';

export default function DetailLayout({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto w-full max-w-6xl px-4">
            <div className="min-h-[calc(100dvh-72px)] py-6">{children}</div>
        </div>
    );
}
