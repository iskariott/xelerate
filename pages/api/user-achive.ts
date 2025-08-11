import type { NextApiRequest, NextApiResponse } from 'next';
import mock from '@/shared/mocks/user-achivements-data.json';

type tUserAchiveData = {
    id: number;
    achiveId: number;
    progress?: number;
}[];

export default function handler(req: NextApiRequest, res: NextApiResponse<tUserAchiveData>) {
    setTimeout(() => {
        res.status(200).json(mock);
    }, 1000);
}
