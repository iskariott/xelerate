import { tUserAchieveJoined } from '@/modules/statistic/shared/types';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type tContext = {
    state: tUserAchieveJoined | undefined;
    setState: (data: tUserAchieveJoined) => void;
};

const Context = createContext<tContext | undefined>(undefined);

export const UserAchiveProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<tUserAchieveJoined | undefined>(undefined);
    async function getData() {
        try {
            await fetch('/api/user-achieve')
                .then((r) => r.json())
                .then((r) => setState(r));
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const controller = new AbortController();
        getData();
        return () => controller.abort();
    }, []);

    return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export const useAchieveContext = () => useContext(Context);
