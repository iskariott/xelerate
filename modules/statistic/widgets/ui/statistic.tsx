import { useAchieveContext } from '@/modules/statistic/shared/store/user-achieve.store';
import st from './statistic.module.scss';
import { AchieveCard, Progress, Rang, Switcher, Title } from '@/modules/statistic/entities';
import Dropdown from '@/shared/ui/dropdown/ui/dropdown';
import Carousel from '@/shared/ui/carousel/ui/carousel';

export default function Statistic() {
    const ctx = useAchieveContext();
    return (
        <>
            <section className={st.section}>
                <Title />
                <div className={st.bg_Pr_Ach}>
                    <Progress />
                    <Rang />
                </div>

                <div className={st.wp}>
                    <div className={st.bg_Sw}>
                        <Switcher />
                    </div>
                    <div className={st.bg_Rang}>
                        <Dropdown />
                    </div>
                </div>
            </section>
            <section className={st.section}>
                <h2 className={st.title}>
                    {'Досягнення на платформі'}
                    <span className={st.count}>56</span>
                </h2>

                <Carousel>
                    {ctx?.state?.proAchieves.map((a) => (
                        <AchieveCard variant={'dark'}>{a.name}</AchieveCard>
                    ))}
                </Carousel>
            </section>
        </>
    );
}
