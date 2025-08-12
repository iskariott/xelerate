export type tUserFetchData = {
    id: number;
    achiveId: number;
    progress?: number;
};

export type tAchieveRang = 1 | 2 | 3 | 'closed';
export type tAchieveType = 'pro' | 'platform';

export type tAchieveFetchData = {
    id: number;
    type: tAchieveType;
    rang: tAchieveRang;
    describe?: string;
    total?: number;
    name: string;
    tooltip: string;
};

export type tUserAchieve = {
    rang: tAchieveRang;
    total: number | undefined;
    describe: string | undefined;
    progress: number | undefined;
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
    proAchieves: tUserAchieve[]; // досягнення у яких type==='pro'
    platformAchieves: tUserAchieve[]; // досягнення у яких type==='platform'
};
