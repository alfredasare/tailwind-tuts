import 'tailwindcss/tailwind.css'
import '../styles/styles.css';
import type {AppProps} from 'next/app'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"/>

                <title>Ninja Tailwind</title>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
