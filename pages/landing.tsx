import Masthead from "./components/masthead";
import PageTransitionWrapper from "./components/pageTransition";

const Landing = () => {
	return (
		<PageTransitionWrapper classes="bg-black">
			<Masthead />
		</PageTransitionWrapper>
	);
};

export default Landing;
