import st from './statistic.module.scss';
import { Progress, Rang, SelectRang, Switcher, Title } from '@/modules/statistic/entities';
import { AchieveList } from '@/modules/statistic/features';

export default function Statistic() {
    return (
        <>
            <section className={st.section}>
                <Title />
                <div className={st.bg_Progress_Rang}>
                    <Progress />
                    <Rang />
                </div>

                <div className={st.container}>
                    <div className={st.bg_Switcher}>
                        <Switcher />
                    </div>
                    <div className={st.bg_SelectRang}>
                        <SelectRang />
                    </div>
                </div>
            </section>
            <AchieveList type="pro" />
            <AchieveList type="platform" />
        </>
    );
}
