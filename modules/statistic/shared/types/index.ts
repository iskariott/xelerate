export type tUserFetchData = {
    id: number;
    achiveId: number;
    progress?: number;
};

export type tAchieveFetchData = {
    id: number;
    type: string;
    rang: number;
    variant: string;
    total?: number;
    describe?: string;
    name: string;
    tooltip: string;
};

export type tUserAchieveJoined = {
    totalCount: number; // кількість всіх досягнень tAchive
    userAchieveCount: number; // кількість досягнень юзера
    closedAchievesCount: number; // кількість закритих досягнень
    rang_1_Achieves: number; // кількість досягнень з рангом 1
    rang_2_Achieves: number; // кількість досягнень з рангом 2
    rang_3_Achieves: number; // кількість досягнень з рангом 3
    proAchieves: {
        // досягнення у яких type==='pro'
        variant: string;
        total?: number;
        describe?: string;
        name: string;
        tooltip: string;
    }[];
    platformAchieves: {
        // досягнення у яких type==='platform'
        variant: string;
        total?: number;
        describe?: string;
        name: string;
        tooltip: string;
    }[];
};
