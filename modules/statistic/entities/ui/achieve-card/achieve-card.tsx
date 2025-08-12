import Image from 'next/image';
import st from './achieve-card.module.scss';
import { ReactNode } from 'react';
import Tooltip from '@/shared/ui/tooltip/tooltip';
import type { tAchieveRang } from '@/modules/statistic/shared/types';

type AchieveCardProps = {
    children: ReactNode;
    rang: tAchieveRang | 'closed';
    tooltip: string;
};

const Colors: { [key in tAchieveRang | 'closed']: [string, string] } = {
    3: ['rgba(180, 149, 122, 0.6)', 'rgba(105, 83, 63, 0.6)'],
    2: ['rgba(94, 94, 94, 0.6)', 'rgba(58, 58, 58, 0.6)'],
    1: ['rgba(40, 40, 40, 0.6)', 'rgba(12, 11, 11, 0.6)'],
    closed: ['rgba(40, 40, 40, 0.6)', 'rgba(12, 11, 11, 0.6)'],
};

function getGradient(rang: tAchieveRang | 'closed'): string {
    return `linear-gradient(180deg, ${Colors[rang][0]} 0%, ${Colors[rang][1]} 100%)`;
}

export default function AchieveCard({ children, rang, tooltip }: AchieveCardProps) {
    const gradient = { '--gradient': getGradient(rang) };
    return (
        <div className={st.card} style={gradient as any}>
            <div className={[st.icon, rang === 'closed' ? st.closed : ''].join(' ')}>
                <button>
                    <Tooltip text={tooltip}>
                        <Image src="/images/info.png" width={24} height={24} alt="tips" />
                    </Tooltip>
                </button>
            </div>
            <div className={st.divider} />
            {children}
        </div>
    );
}
