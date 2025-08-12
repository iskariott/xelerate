import st from './select-rang.module.scss';
import { useEffect, useState } from 'react';
import Dropdown from '@/shared/ui/dropdown/ui/dropdown';
import { useFilterContext } from '@/modules/statistic/shared/store/filter.store';
import { tAchieveRang } from '@/modules/statistic/shared/types';

type tOption = {
    title: string;
    type: Exclude<tAchieveRang, 'closed'> | 'all';
};

export default function SelectRang() {
    const { setFilter, filter } = useFilterContext();
    const optionList: tOption[] = [
        { title: 'ВСІ РАНГИ', type: 'all' },
        {
            title: 'РАНГ 1',
            type: 1,
        },
        {
            title: 'РАНГ 2',
            type: 2,
        },
        {
            title: 'РАНГ 3',
            type: 3,
        },
    ];
    const [option, setOption] = useState<string>(optionList[0].title);
    useEffect(() => {
        setFilter({ ...filter, rang: optionList.find((i) => i.title === option)?.type || 'all' });
    }, [option]);

    return (
        <div className={st.container}>
            <Dropdown
                optionList={optionList.map((i) => i.title)}
                option={option}
                setOption={setOption}
            />
        </div>
    );
}
