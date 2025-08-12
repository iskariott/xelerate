import { tAchieveFetchData } from '@/modules/statistic/shared/types/index';
import achieveMock from '@/modules/statistic/model/achieve.model.json';
import userMock from '@/modules/statistic/model/user-achieve.model.json';
import { tUserAchieveJoined } from '@/modules/statistic/shared/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const joinAchieves = (): tUserAchieveJoined => {
    const userAchiveIds = new Set(userMock.map((u) => u.achiveId));
    const userAchieves = achieveMock.filter((a) => userAchiveIds.has(a.id));

    let rangs = { rang_1_Achieves: 0, rang_2_Achieves: 0, rang_3_Achieves: 0 };
    let proAchieves = [];
    let platformAchieves = [];
    const pickAchieveData = (a: tAchieveFetchData) => ({
        variant: a.variant,
        total: a.total,
        describe: a.describe,
        name: a.name,
        tooltip: a.tooltip,
    });

    for (let a of userAchieves) {
        if (a.rang === 1) rangs.rang_1_Achieves++;
        else if (a.rang === 2) rangs.rang_2_Achieves++;
        else if (a.rang === 3) rangs.rang_3_Achieves++;
        if (a.type === 'pro') proAchieves.push(pickAchieveData(a));
        else if (a.type === 'platform') platformAchieves.push(pickAchieveData(a));
    }

    return {
        totalCount: achieveMock.length,
        userAchieveCount: userAchieves.length,
        proAchieves,
        platformAchieves,
        closedAchievesCount: achieveMock.length - userAchieves.length,
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
