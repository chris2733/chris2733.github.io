import Link from "next/link";
import PageTransitionWrapper from "./components/pageTransition";

const About = () => {
	return (
		<PageTransitionWrapper classes="bg-white">
			<h1>About</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</PageTransitionWrapper>
	);
};

export default About;
