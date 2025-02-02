export interface IPosition {
    x: number;
    y: number;
}

interface IPagePosition extends IPosition {
    page: number;
}

export interface IPageMarkPaginateRequest {
    defaultPosition: IPosition;
    specificPositions: IPagePosition[] | null;
    format: string | null;
    fontBytes: Uint8Array | null;
    fontSize: number;
}
