import { useState } from 'react';
import st from './switcher.module.scss';
import Loader from '@/shared/ui/loader/loader';
import { useFilterContext } from '@/modules/statistic/shared/store/filter.store';
import { tAchieveType } from '@/modules/statistic/shared/types';
import { useAchieveContext } from '@/modules/statistic/shared/store/user-achieve.store';

type tBtnList = {
    id: number;
    title: string;
    count: number | undefined;
    filter: { type: tAchieveType | 'all' };
};

export default function Switcher() {
    const ctx = useAchieveContext();
    const { filter, setFilter } = useFilterContext();
    const btnList: tBtnList[] = [
        {
            id: 1,
            title: 'Всі досягнення',
            count: ctx?.state?.userAchieveCount,
            filter: { type: 'all' },
        },
        {
            id: 2,
            title: 'Досягнення на платформі',
            count: ctx?.state?.platformAchieves.length,
            filter: { type: 'platform' },
        },
        {
            id: 3,
            title: 'Досягнення спеціаліста',
            count: ctx?.state?.proAchieves.length,
            filter: { type: 'pro' },
        },
    ];

    function onClick(id: number, type: tAchieveType | 'all') {
        setSelected(id);
        setFilter({ ...filter, type });
    }
    const [selected, setSelected] = useState<number>(btnList[0].id);
    return (
        <ul className={st.achiveList}>
            {btnList.map((item) => (
                <li
                    key={item.id}
                    className={`${st.achiveItem} ${selected === item.id ? st.active : ''}`}>
                    <button className={st.btn} onClick={() => onClick(item.id, item.filter.type)}>
                        <span className={st.id}>{item.id}</span>
                        <div className={st.info}>
                            <span className={st.title}>{item.title}</span>
                            <span className={st.count}>{ctx ? item.count : <Loader />}</span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
}
