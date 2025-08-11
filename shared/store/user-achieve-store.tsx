import { tUserAchive } from '@/shared/types/achievments';
import { createContext, ReactNode, useEffect, useState } from 'react';

type tContext = {
    state: tUserAchive | undefined;
    setState: (data: tUserAchive) => void;
};

const Context = createContext<tContext | undefined>(undefined);

export const UserAchiveProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<tUserAchive | undefined>(undefined);
    async function getData() {
        await fetch('/api/user-achive')
            .then((r) => r.json())
            .then((r) => setState(r));
    }
    useEffect(() => {
        const controller = new AbortController();
        getData();
        return () => controller.abort();
    }, []);

    return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};
