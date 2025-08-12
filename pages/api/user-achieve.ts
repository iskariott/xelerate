import type {
    tUserAchieveJoined,
    tAchieveFetchData,
    tUserAchieve,
    tAchieveVariant,
} from '@/modules/statistic/shared/types';
import achieveMock from '@/modules/statistic/model/achieve.model.json';
import userMock from '@/modules/statistic/model/user-achieve.model.json';
import type { NextApiRequest, NextApiResponse } from 'next';

const joinAchieves = (): tUserAchieveJoined => {
    const userAchiveIds = new Set(userMock.map((u) => u.achiveId));
    const achieveList = achieveMock as tAchieveFetchData[];

    let rangs = { rang_1_Achieves: 0, rang_2_Achieves: 0, rang_3_Achieves: 0 };
    let proAchieves: tUserAchieve[] = [];
    let platformAchieves: tUserAchieve[] = [];

    for (let a of achieveList) {
        if (!userAchiveIds.has(a.id)) continue;

        if (a.rang === 1) rangs.rang_1_Achieves++;
        else if (a.rang === 2) rangs.rang_2_Achieves++;
        else if (a.rang === 3) rangs.rang_3_Achieves++;

        if (a.type === 'pro') {
            proAchieves.push({
                variant: a.variant,
                total: a.total ?? undefined,
                describe: a.describe ?? undefined,
                progress:
                    (a.total && userMock.find((u) => u.achiveId === a.id)?.progress) || undefined,
                name: a.name,
                tooltip: a.tooltip,
            });
        } else {
            platformAchieves.push({
                variant: a.variant,
                total: a.total ?? undefined,
                describe: a.describe ?? undefined,
                progress:
                    (a.total && userMock.find((u) => u.achiveId === a.id)?.progress) || undefined,
                name: a.name,
                tooltip: a.tooltip,
            });
        }
    }

    platformAchieves = platformAchieves.sort((a, b) => b.variant.localeCompare(a.variant));
    proAchieves = proAchieves.sort((a, b) => b.variant.localeCompare(a.variant));

    return {
        totalCount: achieveMock.length,
        userAchieveCount: userMock.length,
        proAchieves,
        platformAchieves,
        closedAchievesCount: achieveMock.length - userMock.length,
        ...rangs,
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<tUserAchieveJoined>,
) {
    // TODO
    // const {userId} = req.query
    // userMock.filter(u => u.id === userId)

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.status(200).json(joinAchieves() as tUserAchieveJoined);
}
