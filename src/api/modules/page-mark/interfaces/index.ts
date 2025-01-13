export interface IPageMarkService {
	paginate(userId: string, data: any): Promise<any | null>;
}

export interface IPageMarkRepository {}
