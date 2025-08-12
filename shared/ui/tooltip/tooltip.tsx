import { ReactNode } from 'react';
import st from './tooltip.module.scss';

type TooltipProps = {
    text: string;
    children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
    return (
        <div className={st.tooltip}>
            {children}
            <span className={st.tooltipText}>{text}</span>
        </div>
    );
}
