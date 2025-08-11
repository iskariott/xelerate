export interface tUser {
    id: number;
    achiveId: number;
    progress?: number;
}

export interface tAchive {
    id: number;
    type: string;
    rang: number;
    variant: string;
    total?: number;
    describe?: string;
    name: string;
    tooltip: string;
}

export interface tUserAchive extends tAchive {
    progress?: number;
}
