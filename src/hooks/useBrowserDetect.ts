import { useMemo } from 'react';

/**
 * Hook para detectar el navegador actual y sus características problemáticas.
 */
export function useBrowserDetect() {
    const browserInfo = useMemo(() => {
        if (typeof window === 'undefined' || typeof navigator === 'undefined') {
            return {
                isSafari: false,
                isFirefox: false,
                isChrome: false,
                shouldDisableAnimations: false,
            };
        }

        const ua = navigator.userAgent.toLowerCase();

        // Detectar Safari (incluyendo Safari en iOS)
        const isSafari =
            ua.indexOf('safari') !== -1 &&
            ua.indexOf('chrome') === -1 &&
            ua.indexOf('chromium') === -1 &&
            ua.indexOf('edg') === -1;

        // Detectar Firefox y derivados (como Zen Browser)
        const isFirefox = ua.indexOf('firefox') !== -1 || ua.indexOf('fxios') !== -1;

        // Detectar Chrome y derivados
        const isChrome =
            (ua.indexOf('chrome') !== -1 ||
                ua.indexOf('chromium') !== -1 ||
                ua.indexOf('edg') !== -1) &&
            ua.indexOf('firefox') === -1;

        // Determinar si se deben deshabilitar las animaciones
        const shouldDisableAnimations = isSafari || isFirefox;

        return {
            isSafari,
            isFirefox,
            isChrome,
            shouldDisableAnimations,
        };
    }, []);

    return browserInfo;
}
