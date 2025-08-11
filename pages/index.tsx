import Head from 'next/head';
import { Inter } from 'next/font/google';
import Statistic from '@/widgets/ui/statistic';
import { UserAchiveProvider } from '@/shared/store/user-achieve-store';
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
                    <Statistic />
                </UserAchiveProvider>
            </main>
        </>
    );
}
