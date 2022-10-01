import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence mode="wait">
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}

export default MyApp;
