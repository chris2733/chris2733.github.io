import { NextSeo } from "next-seo";
import Link from "next/link";
import PageTransitionWrapper from "./components/pageTransition";

const About = () => {
	return (
		<>
			<NextSeo title="About" />
			<PageTransitionWrapper classes="bg-white">
				<h1>About</h1>
				<Link href="/">
					<a>Home</a>
				</Link>
			</PageTransitionWrapper>
		</>
	);
};

export default About;
