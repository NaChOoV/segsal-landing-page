import type { PropsWithChildren } from 'react';

export default function RootLayout({ children }: PropsWithChildren) {
    return <div className="min-h-dvh bg-background text-foreground">{children}</div>;
}
