import type { NextApiRequest, NextApiResponse } from 'next';
import userMock from '@/shared/mocks/user-achivements-data.json';
import achieveMock from '@/shared/mocks/achivements-data.json';
import { tAchive, tUser, tUserAchive } from '@/shared/types/achievments';

export default async function handler(req: NextApiRequest, res: NextApiResponse<tUserAchive[]>) {
    // TODO
    // const {userId} = req.query
    // userMock.filter(u => u.id === userId)
    const ids = userMock.map((u: tUser) => u.achiveId);
    const achieves = achieveMock.filter((a: tAchive) => ids.includes(a.id));
    const joined = userMock
        .map((userAch: tUser) => {
            const fullAch = achieves.find((a: tAchive) => a.id === userAch.achiveId);
            return {
                ...fullAch,
                progress: userAch.progress,
            };
        })
        .filter(Boolean);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(200).json(joined as tUserAchive[]);
}
