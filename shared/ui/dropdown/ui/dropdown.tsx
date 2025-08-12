'use client';
import { useState } from 'react';
import st from './dropdown.module.scss';

export default function Dropdown() {
    const options = ['ВСІ РАНГИ', 'РАНГ 1', 'РАНГ 2', 'РАНГ 3'];
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string>(options[0]);
    const handleSelect = (option: string) => {
        setSelected(option);
        setOpen(false);
    };

    return (
        <div className={st.dropdown}>
            <button className={st.toggle} onClick={() => setOpen(!open)}>
                {selected}
                <span className={st.arrowIcon} />
            </button>

            {open && (
                <ul className={st.menu}>
                    {options
                        .filter((o) => o !== selected)
                        .map((opt) => (
                            <li key={opt} onClick={() => handleSelect(opt)} className={st.item}>
                                {opt}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}
