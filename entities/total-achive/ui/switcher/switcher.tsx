import { useState } from 'react';
import st from './switcher.module.scss';

export default function Switcher() {
    const btnList = [
        {
            id: '01',
            title: 'Всі досягнення',
            count: 142,
        },
        {
            id: '02',
            title: 'Досягнення на платформі',
            count: 56,
        },
        {
            id: '03',
            title: 'Досягнення спеціаліста',
            count: 83,
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
                            <span className={st.count}>{item.count}</span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
}
