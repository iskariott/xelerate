import Loader from '@/shared/ui/loader/loader';
import st from './achivements.module.scss';
import { useAchieveContext } from '@/shared/store/user-achieve-store';

export default function Achivements() {
    const ctx = useAchieveContext();

    const achiveList = [
        { title: 'Досягнень відкрито 1 ранга', count: ctx?.state?.rang_1_Achieves },
        { title: 'Досягнень відкрито 2 ранга', count: ctx?.state?.rang_2_Achieves },
        { title: 'Досягнень відкрито 3 ранга', count: ctx?.state?.rang_3_Achieves },
        { title: 'Досягнень закрито', count: ctx?.state?.closedAchievesCount },
    ];

    return (
        <div className={st.container}>
            {achiveList.map((achive, index) => (
                <div key={index} className={st.card}>
                    <span>{ctx?.state ? achive.count : <Loader />} </span>
                    <p>{achive.title}</p>
                </div>
            ))}
        </div>
    );
}
