import Head from 'next/head';
import { Inter } from 'next/font/google';
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
            <div className={`${inter.className} blur`}></div>
        </>
    );
}
