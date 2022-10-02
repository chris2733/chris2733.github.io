import AnimateIn from "./animateIn";
import Splitter from "./animateSplitter";
import RoundedLinks from "./../elements/roundedlinks";

const Masthead = () => {
	const headlineClasses =
		"hover:text-blue-300 duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default inline-block mx-[1px] text-masthead";
	return (
		<div className="min-h-screen text-white flex justify-center items-center">
			<div className="container text-center uppercase">
				<div className="block">
					<h1 className="inline-block overflow-hidden leading-5">
						<Splitter
							text={"chris law"}
							initialDelay={0.5}
							letterDelay={0.03}
							letterClass={headlineClasses}
						/>
					</h1>
				</div>
				<h2 className="inline-block overflow-hidden mr-1 leading-5">
					<Splitter
						text={"front end"}
						initialDelay={1}
						letterDelay={0.03}
						letterClass={headlineClasses}
					/>
				</h2>
				<h2 className="inline-block overflow-hidden leading-5">
					<Splitter
						text={"developer"}
						initialDelay={1.3}
						letterDelay={0.03}
						letterClass={headlineClasses}
					/>
				</h2>
				<div className="text-sm mt-2 flex items-center justify-center gap-3">
					<AnimateIn delay={1.8} duration={0.6}>
						<RoundedLinks link="/about">about</RoundedLinks>
					</AnimateIn>
					<AnimateIn delay={1.9} duration={0.6}>
						<RoundedLinks link="/work">work</RoundedLinks>
					</AnimateIn>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
