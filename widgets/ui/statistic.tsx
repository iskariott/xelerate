import Achivements from '@/entities/total-achive/ui/achivements/achivements';
import Progress from '@/entities/total-achive/ui/progress/progress';
import Switcher from '@/entities/total-achive/ui/switcher/switcher';
import Title from '@/entities/total-achive/ui/title/title';
import Dropdown from '@/features/dropdown/ui/dropdown';
import st from './statistic.module.scss';
import Carousel from '@/features/carousel/ui/carousel';

export default function Statistic() {
    return (
        <>
            <section className={st.section}>
                <Title />
                <div className={st.bg_Pr_Ach}>
                    <Progress />
                    <Achivements />
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

                <Carousel />
            </section>
        </>
    );
}
