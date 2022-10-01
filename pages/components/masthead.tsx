import { motion } from "framer-motion";
import AnimateIn from "./animateIn";
import Splitter from "./animateSplitter";

const Masthead = () => {
	// const name = "chris law";
	return (
		<div className="min-h-screen bg-black text-white">
			{/* <AnimateIn delay={0.7} duration={2}>
				<h1 className=" tracking-widest uppercase font-normal text-2xl">
					<Splitter text={"chris law"} />
				</h1>
			</AnimateIn> */}
			<h1 className="tracking-widest uppercase font-normal text-2xl">
				<Splitter text={"chris law"} initialDelay={0.5} letterDelay={0.1} />
			</h1>
		</div>
	);
};

export default Masthead;
