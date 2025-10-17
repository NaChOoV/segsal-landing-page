import { useEffect, useState } from 'react';
import type { Area } from '../types/areas';
import areasData from '@/features/areas/data/areas.json';

export function useAreas() {
    const [areas, setAreas] = useState<Area[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        try {
            setAreas((areasData as unknown as { areas: Area[] }).areas ?? []);
        } catch (e) {
            setError(e as Error);
        } finally {
            setLoading(false);
        }
    }, []);

    return { areas, loading, error };
}
