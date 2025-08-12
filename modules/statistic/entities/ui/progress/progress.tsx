import { useAchieveContext } from '@/modules/statistic/shared/store/user-achieve.store';
import st from './progress.module.scss';
import GradientEffefct from '@/shared/ui/gradient-effect/gradient-effefct';
import Loader from '@/shared/ui/loader/loader';
import ProgressBar from '@/shared/ui/progress-bar/ui/progress-bar';

export default function Progress() {
    const ctx = useAchieveContext();
    const userAchieveCount = ctx?.state?.userAchieveCount;
    const totalAchieveCount = ctx?.state?.totalCount;

    return (
        <div className={st.container}>
            <div className={st.progress}>
                <div className={st.title}>
                    <div className={st.starIcon} />
                    <h3>ВІДКРИТО ДОСЯГНЕНЬ</h3>
                </div>
                <div className={st.value}>
                    {ctx?.state ? (
                        <>
                            {userAchieveCount}
                            <span>{` / ${totalAchieveCount}`}</span>
                        </>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
            <div className={st.progressBar}>
                <ProgressBar
                    value={userAchieveCount}
                    max={totalAchieveCount}
                    height="32px"
                    borderRadius="4px"
                    isLinesDivider
                />
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
