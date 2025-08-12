import Head from 'next/head';
import { Inter } from 'next/font/google';
import { UserAchiveProvider } from '@/modules/statistic/shared/store/user-achieve.store';
import { Statistic } from '@/modules/statistic/widgets';
import { FilterProvider } from '@/modules/statistic/shared/store/filter.store';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin', 'cyrillic'],
});

export default function Home() {
    return (
        <>
            <Head>
                <title>XELERATE</title>
                <meta name="description" content="Test task" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`background `} />
            <main className={`${inter.className} blur`}>
                <UserAchiveProvider>
                    <FilterProvider>
                        <Statistic />
                    </FilterProvider>
                </UserAchiveProvider>
                <SpeedInsights />
            </main>
        </>
    );
}
