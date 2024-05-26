import "bootstrap/scss/bootstrap.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@/styles/globals.scss";

config.autoAddCss = false;
export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
