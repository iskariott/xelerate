import GradientEffefct from '@/shared/ui/gradient-effect/gradient-effefct';
import st from './title.module.scss';

export default function Title() {
    return (
        <div className={st.title}>
            <h1>Досягнення</h1>
            <p>Ви крутіші, ніж 87% спеціалістів!</p>
            <GradientEffefct inset deg={160} colorPosition={[0, 70]} blur={60} />
        </div>
    );
}
