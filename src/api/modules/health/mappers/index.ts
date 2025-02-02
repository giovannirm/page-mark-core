import { HealthShowMapper, HealthShowRepository } from '../interfaces/show';

export default class HealthMapper {
    static showResponse(response: HealthShowRepository): HealthShowMapper {
        return {
            id: response.id,
            description: response.description,
            create_date_manual: response.create_date_manual,
            create_date_js: response.create_date_js,
            created_at: response.created_at,
        };
    }
}
