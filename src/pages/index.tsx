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
