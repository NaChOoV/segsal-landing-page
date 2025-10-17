import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return false;
        return document.documentElement.classList.contains('dark');
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <div
            className={cn(
                'flex h-8 w-16 cursor-pointer rounded-full p-1 transition-all duration-300',
                isDark ? 'border border-zinc-800 bg-zinc-950' : 'border border-zinc-200 bg-white',
                className
            )}
            onClick={() => setIsDark(!isDark)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsDark(!isDark);
                }
            }}
        >
            <div className="flex w-full items-center justify-between">
                <div
                    className={cn(
                        'flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300',
                        isDark
                            ? 'translate-x-0 transform bg-zinc-800'
                            : 'translate-x-8 transform bg-gray-200'
                    )}
                >
                    {isDark ? (
                        <Moon className="h-4 w-4 text-white" strokeWidth={1.5} />
                    ) : (
                        <Sun className="h-4 w-4 text-gray-700" strokeWidth={1.5} />
                    )}
                </div>
                <div
                    className={cn(
                        'flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300',
                        isDark ? 'bg-transparent' : '-translate-x-8 transform'
                    )}
                >
                    {isDark ? (
                        <Sun className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
                    ) : (
                        <Moon className="h-4 w-4 text-black" strokeWidth={1.5} />
                    )}
                </div>
            </div>
        </div>
    );
}
