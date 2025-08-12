import Carousel from '@/shared/ui/carousel/ui/carousel';
import st from './achieve-list.module.scss';
import type { tAchieveType } from '@/modules/statistic/shared/types';
import { useAchieveContext } from '@/modules/statistic/shared/store/user-achieve.store';
import { AchieveCard } from '@/modules/statistic/entities';
import ProgressBar from '@/shared/ui/progress-bar/ui/progress-bar';
import { useFilterContext } from '@/modules/statistic/shared/store/filter.store';

export default function AchieveList({ type }: { type: tAchieveType }) {
    const ctx = useAchieveContext();
    if (!ctx?.state) return <></>;
    const { filter } = useFilterContext();

    const isProAchieve = type === 'pro';
    if (filter.type !== 'all' && filter.type !== type) return <></>;

    const typeTitle = isProAchieve ? 'Досягнення спеціаліста' : 'Досягнення на платформі';

    const achieveCount = isProAchieve
        ? ctx?.state?.proAchieves.length
        : ctx?.state?.platformAchieves.length;

    let achieveList = (isProAchieve ? ctx?.state?.proAchieves : ctx?.state?.platformAchieves) || [];
    if (filter.rang !== 'all') achieveList = achieveList.filter((a) => a.rang === filter.rang);

    return (
        <section className={st.section}>
            <div className={st.container}>
                <h2 className={st.title}>
                    {typeTitle}
                    <span className={st.grayText}>{achieveCount}</span>
                </h2>
                <Carousel>
                    {achieveList.map((a, idx) => (
                        <AchieveCard key={idx} rang={a.rang} tooltip={a.tooltip}>
                            <span className={st.name}>{a.name}</span>
                            {a.describe ? (
                                <p className={st.grayText}>{a.describe}</p>
                            ) : (
                                <>
                                    <div className={st.progress}>
                                        <span className={st.grayText}>Досягнення</span>
                                        <div>
                                            {a.progress}
                                            <span className={st.grayText}>{` / ${a.total}`}</span>
                                        </div>
                                    </div>
                                    <ProgressBar value={a.progress} max={a.total} height="4px" />
                                </>
                            )}
                        </AchieveCard>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
