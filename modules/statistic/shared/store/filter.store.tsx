import type { tAchieveType } from '@/modules/statistic/shared/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type tFilterState = {
    rang: number | 'all';
    type: tAchieveType | 'all';
};

type tContext = {
    filter: tFilterState;
    setFilter: (data: tFilterState) => void;
};

const Context = createContext<tContext>({
    filter: { rang: 'all', type: 'all' },
    setFilter: (data: tFilterState) => {},
});

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<tFilterState>({ rang: 'all', type: 'all' });

    return <Context.Provider value={{ filter, setFilter }}>{children}</Context.Provider>;
};

export const useFilterContext = () => useContext(Context);
