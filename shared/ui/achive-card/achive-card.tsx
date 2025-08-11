import Image from 'next/image';
import st from './achive-card.module.scss';
import { ReactNode } from 'react';

type tCardVariant = 'gold' | 'gray' | 'dark';
type AchiveCardProps = {
    children: ReactNode;
    variant: tCardVariant;
};

const Colors: { [key in tCardVariant]: [string, string] } = {
    gold: ['rgba(180, 149, 122, 0.6)', 'rgba(105, 83, 63, 0.6)'],
    dark: ['rgba(40, 40, 40, 0.6)', 'rgba(12, 11, 11, 0.6)'],
    gray: ['rgba(94, 94, 94, 0.6)', 'rgba(58, 58, 58, 0.6)'],
};

function getGradient(variant: tCardVariant) {
    return `linear-gradient(180deg, ${Colors[variant][0]} 0%, ${Colors[variant][1]} 100%)`;
}

export default function AchiveCard({ children, variant }: AchiveCardProps) {
    const gradient = { '--gradient': getGradient(variant) };
    return (
        <div className={st.card} style={gradient as any}>
            <div className={st.icon}>
                <button>
                    <Image src="/info.png" width={24} height={24} alt="tips" />
                </button>
            </div>
            <div className={st.divider} />
            {children}
        </div>
    );
}
