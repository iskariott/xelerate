import type { NextApiRequest, NextApiResponse } from 'next';
import userMock from '@/shared/mocks/user-achivements-data.json';
import achieveMock from '@/shared/mocks/achivements-data.json';
import { tAchive, tUserAchive } from '@/shared/types/achievments';

const joinAchieves = (): tUserAchive => {
    const userAchiveIds = new Set(userMock.map((u) => u.achiveId));
    const userAchieves = achieveMock.filter((a) => userAchiveIds.has(a.id));

    let rangs = { rang_1_Achieves: 0, rang_2_Achieves: 0, rang_3_Achieves: 0 };
    let proAchieves = [];
    let platformAchieves = [];
    const pickAchieveData = (a: tAchive) => ({
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

export default async function handler(req: NextApiRequest, res: NextApiResponse<tUserAchive>) {
    // TODO
    // const {userId} = req.query
    // userMock.filter(u => u.id === userId)

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.status(200).json(joinAchieves() as tUserAchive);
}
