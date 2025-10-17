import { useState } from 'react';
import type { Area } from '../types/areas';

export function useAreas() {
    const [areas] = useState<Area[] | null>(null);
    const [loading] = useState(false);
    const [error] = useState<Error | null>(null);

    // TODO: Implementar carga de áreas cuando sea necesario

    return { areas, loading, error };
}
