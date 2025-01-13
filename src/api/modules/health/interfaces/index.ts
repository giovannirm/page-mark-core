import { health } from "@prisma/client";

export interface IHealthService {
	create(userId: string, data: CreateHealthRequest): Promise<health | null>;
	show(id: number): Promise<health | null>;
}

export interface IHealthRepository {
	create(data: CreateHealthRequest): Promise<health | null>;
	show(id: number): Promise<health | null>;
}

export interface CreateHealthRequest {
	create_date_manual: string;
}
