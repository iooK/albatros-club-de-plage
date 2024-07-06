import Head from "next/head";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import BeachClub from "@/components/BeachClub/BeachClub";
import Contact from "@/components/Contact/Contact";
import Fitness from "@/components/Fitness/Fitness";
import Navigation from "@/components/Navigation/Navigation";
import SwimmingSchool from "@/components/SwimmingSchool/SwimmingSchool";
import StandUpPaddle from "@/components/StandUpPaddle/StandUpPaddle";
import { Partner } from "@/components/Partner/Partner";
import { Team } from "@/components/Team/Team";

// const roboto = Roboto({
//     subsets: ["latin"],
//     weight: "400",
// });

export default function Home() {
    return (
        <>
            <Head>
                <link
                    href="/favicon.ico"
                    rel="icon"
                />

                <meta charSet="utf-8" />
                <meta
                    content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
                    name="viewport"
                />

                <meta
                    name="msapplication-config"
                    content="/icon/browserconfig.xml"
                />
                <meta
                    name="theme-color"
                    content="#ffffff"
                />

                <link
                    href="/icon/manifest.json"
                    rel="manifest"
                />
                <link
                    href="/icon/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    color="#0088cc"
                    href="/icon/safari-pinned-tab.svg"
                    rel="mask-icon"
                />
                <link
                    href="/icon/android-chrome-192x192.png"
                    rel="icon"
                    sizes="192x192"
                    type="image/png"
                />
                <link
                    href="/icon/android-chrome-256x256.png"
                    rel="icon"
                    sizes="256x256"
                    type="image/png"
                />
                <link
                    href="/icon/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link
                    href="/icon/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/icon/favicon-194x194.png"
                    rel="icon"
                    sizes="194x194"
                    type="image/png"
                />

                <title>Albatros Club de Plage - Quiberon</title>
            </Head>
            <main>
                <Navigation />
                <BeachClub />
                <SwimmingSchool />
                <Fitness />
                <StandUpPaddle />
                <Team />
                <Contact />
                <Partner />
            </main>
            <GoogleAnalytics gaId="386953035" />
        </>
    );
}
