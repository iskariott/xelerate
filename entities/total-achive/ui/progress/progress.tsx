import st from './progress.module.scss';
import ProgressBar from '@/features/progress-bar/ui/progress-bar';
import GradientEffefct from '@/shared/ui/gradient-effect/gradient-effefct';

export default function Progress() {
    return (
        <div className={st.container}>
            <div className={st.progress}>
                <div className={st.title}>
                    <div className={st.starIcon} />
                    <h3>ВІДКРИТО ДОСЯГНЕНЬ</h3>
                </div>
                <div className={st.value}>
                    18<span>{` / 143`}</span>
                </div>
            </div>
            <div className={st.progressBar}>
                <ProgressBar value={30} height="32px" borderRadius="4px" isLinesDivider />
                <GradientEffefct
                    top="0px"
                    bottom="0px"
                    right="0px"
                    width="20%"
                    deg={-60}
                    colorPosition={[0, 50]}
                    blur={40}
                />
            </div>
        </div>
    );
}
