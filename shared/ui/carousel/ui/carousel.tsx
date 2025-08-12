'use client';
import { Children, ReactNode, useEffect, useRef, useState } from 'react';
import st from './carousel.module.scss';

export default function Carousel({ children }: { children: ReactNode }) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [visibleCards, setVisibleCards] = useState(1);
    const [cardWidth, setCardWidth] = useState<number>(197);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const childrenArray = Children.toArray(children);
    const cardsInRowLength = childrenArray.length / 2;

    useEffect(() => {
        if (!carouselRef.current || !cardRef.current) return;
        const carouselWidth = carouselRef.current.offsetWidth;
        const cardWidth = cardRef.current.offsetWidth;
        setCardWidth(cardWidth);
        const visible = Math.floor(carouselWidth / cardWidth);
        setVisibleCards(visible || 1);
    });
    const maxIndex = Math.ceil(cardsInRowLength - visibleCards);

    const goToSlide = (index: number) => {
        // if (index < 0) index = 0;
        // if (index > maxIndex) index = maxIndex;
        setActiveIndex(index);
    };
    return (
        <>
            <div className={st.carousel} ref={carouselRef}>
                <div
                    className={st.track}
                    style={{
                        transform: `translateX(-${activeIndex * cardWidth}px)`,
                    }}>
                    {childrenArray.map((child, idx) => (
                        <div key={idx} ref={idx === 0 ? cardRef : null} className={st.card}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {maxIndex > 0 && (
                <div className={st.pagination}>
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <span
                            key={i}
                            className={`${st.dot} ${i === activeIndex ? st.active : ''}`}
                            onClick={() => goToSlide(i)}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
