import st from './achivements.module.scss';

export default function Achivements() {
    const achiveList = [
        { title: 'Досягнень відкрито 1 ранга', count: 8 },
        { title: 'Досягнень відкрито 2 ранга', count: 7 },
        { title: 'Досягнень відкрито 3 ранга', count: 3 },
        { title: 'Досягнень закрито', count: 123 },
    ];

    return (
        <div className={st.container}>
            {achiveList.map((achive, index) => (
                <div key={index} className={st.card}>
                    <span>{achive.count}</span>
                    <p>{achive.title}</p>
                </div>
            ))}
        </div>
    );
}
