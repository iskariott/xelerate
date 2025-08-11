'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.scss';
import AchiveCard from '@/shared/ui/achive-card/achive-card';

interface CardData {
    id: number;
    title: string;
    progress: string;
}

const cards: CardData[] = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    title: 'Документаліст',
    progress: `${12} / ${50}`,
}));

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [cardWidth, setCardWidth] = useState<number>(197);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const cardsInRowLength = cards.length / 2;

    useEffect(() => {
        if (!carouselRef.current || !cardRef.current) return;
        const carouselWidth = carouselRef.current.offsetWidth;
        console.log('carouselWidth = ', carouselWidth);
        const cardWidth = cardRef.current.offsetWidth;
        setCardWidth(cardWidth);
        console.log('cardWidth = ', cardWidth);
        const visible = Math.floor(carouselWidth / cardWidth);
        setVisibleCards(visible || 1);
    }, []);

    const maxIndex = cardsInRowLength - visibleCards;
    console.log('visibleCards = ', visibleCards);

    const goToSlide = (index: number) => {
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        setActiveIndex(index);
    };
    console.log('activeIndex = ', activeIndex);
    return (
        <div className={styles.carouselWrapper}>
            <div className={styles.carousel} ref={carouselRef}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(-${activeIndex * cardWidth}px)`,
                    }}>
                    {cards.map((card, idx) => (
                        <div key={card.id} ref={idx === 0 ? cardRef : null} className={styles.card}>
                            <AchiveCard variant="gray">{card.id}</AchiveCard>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.pagination}>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <span
                        key={i}
                        className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
                        onClick={() => goToSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}
