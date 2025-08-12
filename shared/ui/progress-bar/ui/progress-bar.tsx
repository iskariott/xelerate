import React from 'react';
import st from './progress-bar.module.scss';

interface tProgressBarProps {
    value?: number;
    max?: number;
    height?: string;
    className?: string;
    ariaLabel?: string;
    borderRadius?: string;
    isLinesDivider?: boolean;
}

type CssProps = React.CSSProperties & { [key: string]: string };

export default function ProgressBar({
    value = 0,
    max = 100,
    height = '12px',
    className = '',
    ariaLabel = 'Progress',
    borderRadius = 'none',
    isLinesDivider = false,
}: tProgressBarProps) {
    const safeValue = Math.max(0, Math.min(value, max));
    const percent = max === 0 ? 0 : Math.round((safeValue / max) * 100);

    const filledStyle: CssProps = {
        width: `${percent}%`,
        '--bar-height': height,
        '--border-radius': borderRadius,
    };

    const emptyStyle: CssProps = {
        width: `${100 - percent}%`,
        '--bar-height': height,
        '--border-radius': borderRadius,
    };

    const wrapperStyle: CssProps = {
        '--bar-height': height,
    };

    return (
        <div className={`${st.progressWrapper} ${className}`.trim()} style={wrapperStyle}>
            <div
                className={st.progress}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={safeValue}
                aria-label={ariaLabel}>
                <div className={st.filled} style={filledStyle} />
                {isLinesDivider && <div className={st.divider} />}
                <div className={st.empty} style={emptyStyle} />
            </div>
        </div>
    );
}
