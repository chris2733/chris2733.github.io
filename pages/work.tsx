import Link from "next/link";
import PageTransitionWrapper from "./components/pageTransition";

const About = () => {
	return (
		<PageTransitionWrapper classes="bg-white">
			<h1>Work</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</PageTransitionWrapper>
	);
};

export default About;
