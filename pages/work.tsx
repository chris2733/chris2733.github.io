import Link from "next/link";
import Splitter from "./components/animateSplitter";
import PageTransitionWrapper from "./components/pageTransition";
import { NextSeo } from "next-seo";

const About = () => {
	return (
		<>
			<NextSeo title="Work" />
			<PageTransitionWrapper classes="bg-white">
				<div className="container py-[10vw] md:py-[15vw] text-center">
					<h1 className="inline-block overflow-hidden leading-5">
						<Splitter
							text={"work"}
							initialDelay={0.5}
							letterDelay={0.03}
							letterClass="text-lg uppercase duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default inline-block mx-[1px"
						/>
					</h1>
					<div className="">
						<Link href="/">
							<a>Home</a>
						</Link>
					</div>
				</div>
			</PageTransitionWrapper>
		</>
	);
};

export default About;
