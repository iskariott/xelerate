import { useState } from 'react';
import st from './switcher.module.scss';
import { useAchieveContext } from '@/shared/store/user-achieve-store';
import Loader from '@/shared/ui/loader/loader';

export default function Switcher() {
    const ctx = useAchieveContext();
    const btnList = [
        {
            id: '01',
            title: 'Всі досягнення',
            count: ctx?.state?.userAchieveCount,
        },
        {
            id: '02',
            title: 'Досягнення на платформі',
            count: ctx?.state?.platformAchieves.length,
        },
        {
            id: '03',
            title: 'Досягнення спеціаліста',
            count: ctx?.state?.proAchieves.length,
        },
    ];
    const [selected, setSelected] = useState<string>(btnList[0].id);
    return (
        <ul className={st.achiveList}>
            {btnList.map((item) => (
                <li
                    key={item.id}
                    className={`${st.achiveItem} ${selected === item.id ? st.active : ''}`}>
                    <button className={st.btn} onClick={() => setSelected(item.id)}>
                        <span className={st.id}>{item.id}</span>
                        <div className={st.info}>
                            <span className={st.title}>{item.title}</span>
                            <span className={st.count}>{ctx?.state ? item.count : <Loader />}</span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
}
