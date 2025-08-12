'use client';
import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import st from './dropdown.module.scss';

type DropdownProps = {
    optionList: string[];
    setOption: (option: string) => void;
    option: string;
};

export default function Dropdown({ optionList, setOption, option }: DropdownProps) {
    const [open, setOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    const handleSelect = (option: string) => {
        setOption(option);
        setOpen(false);
    };

    const toggleRect = toggleRef.current?.getBoundingClientRect();

    return (
        <>
            <div className={st.dropdown}>
                <button
                    ref={toggleRef}
                    className={st.toggle}
                    onClick={() => setOpen((prev) => !prev)}>
                    {option}
                    <span className={st.arrowIcon} />
                </button>
            </div>

            {open &&
                createPortal(
                    <ul
                        className={st.menu}
                        style={{
                            position: 'absolute',
                            top: (toggleRect?.bottom || 0) + window.scrollY + 22,
                            left: (toggleRect?.left || 0) + window.scrollX,
                            width: toggleRect?.width || 'auto',
                        }}>
                        {optionList
                            .filter((opt) => opt !== option)
                            .map((opt) => (
                                <li key={opt} onClick={() => handleSelect(opt)} className={st.item}>
                                    {opt}
                                </li>
                            ))}
                    </ul>,
                    document.body,
                )}
        </>
    );
}
