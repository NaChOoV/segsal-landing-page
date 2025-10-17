import { useMemo } from 'react';

/**
 * Hook para detectar si el navegador tiene problemas con whileInView de Framer Motion.
 * Retorna true si el navegador necesita usar animate en lugar de whileInView.
 *
 * Navegadores problemáticos conocidos:
 * - Safari (problemas con backdrop-blur y whileInView)
 * - Firefox y derivados como Zen Browser (problemas con whileInView)
 */
export function useSafariDetect() {
    const shouldUseAnimateInsteadOfWhileInView = useMemo(() => {
        if (typeof window === 'undefined' || typeof navigator === 'undefined') {
            return true; // Fallback seguro en SSR
        }

        const ua = navigator.userAgent.toLowerCase();

        // Detectar navegadores que FUNCIONAN BIEN con whileInView
        // Solo Chrome, Edge y Opera funcionan de manera confiable
        const isChromeBased =
            (ua.indexOf('chrome') !== -1 ||
                ua.indexOf('chromium') !== -1 ||
                ua.indexOf('edg') !== -1) &&
            ua.indexOf('safari') !== -1 && // Chrome también tiene "safari" en el UA
            ua.indexOf('firefox') === -1;

        const isOpera = ua.indexOf('opr') !== -1 || ua.indexOf('opera') !== -1;

        // Si es Chrome-based u Opera, puede usar whileInView
        const canUseWhileInView = isChromeBased || isOpera;

        // Retornar true si NO puede usar whileInView (Safari, Firefox, Zen, etc.)
        return !canUseWhileInView;
    }, []);

    return shouldUseAnimateInsteadOfWhileInView;
}
