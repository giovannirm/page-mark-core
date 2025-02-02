import { HealthGeneralRepository, HealthGeneralService } from './model';
import { IHealthCreateRequest } from './create';
import { HealthShowMapper, HealthShowRepository } from './show';

export interface IHealthService {
    create(request: IHealthCreateRequest): Promise<HealthGeneralService>;
    show(id: number): Promise<HealthShowMapper>;
}

export interface IHealthRepository {
    create(data: IHealthCreateRequest): Promise<HealthGeneralRepository>;
    show(id: number): Promise<HealthShowRepository | null>;
}
