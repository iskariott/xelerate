import Loader from '@/shared/ui/loader/loader';
import st from './rang.module.scss';
import { useAchieveContext } from '@/modules/statistic/shared/store/user-achieve.store';

export default function Rang() {
    const ctx = useAchieveContext();

    const achieveList = [
        { title: 'Досягнень відкрито 1 ранга', count: ctx?.state?.rang_1_Achieves },
        { title: 'Досягнень відкрито 2 ранга', count: ctx?.state?.rang_2_Achieves },
        { title: 'Досягнень відкрито 3 ранга', count: ctx?.state?.rang_3_Achieves },
        { title: 'Досягнень закрито', count: ctx?.state?.closedAchievesCount },
    ];

    return (
        <div className={st.container}>
            {achieveList.map((achieve, index) => (
                <div key={index} className={st.card}>
                    <span>{ctx?.state ? achieve.count : <Loader />} </span>
                    <p>{achieve.title}</p>
                </div>
            ))}
        </div>
    );
}
