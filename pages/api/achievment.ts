import type { NextApiRequest, NextApiResponse } from 'next';
import mock from '@/shared/mocks/achivements-data.json';

type tAchiveData = {
    id: number;
    type: string;
    rang: number;
    variant: string;
    total?: number;
    describe?: string;
    name: string;
    tooltip: string;
}[];

export default function handler(req: NextApiRequest, res: NextApiResponse<tAchiveData>) {
    setTimeout(() => {
        res.status(200).json(mock);
    }, 1000);
}
