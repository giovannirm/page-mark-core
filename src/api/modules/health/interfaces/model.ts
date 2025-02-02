import { health } from '@prisma/client';

export interface HealthBaseMapper {
    id: number;
    description: string | null;
    create_date_manual: Date | null;
    create_date_js: Date | null;
    created_at: Date;
}

export type HealthModelBase = Pick<
    health,
    'id' | 'description' | 'create_date_manual' | 'create_date_js' | 'created_at'
>;

export interface HealthGeneralService {
    id: number;
}

export type HealthGeneralRepository = Pick<health, 'id'>;
