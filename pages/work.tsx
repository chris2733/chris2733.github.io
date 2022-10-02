// import Masthead from "./components/masthead";

import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
	return (
		<motion.div
			className="bg-white"
			initial="pageInitial"
			exit="pageExit"
			animate="pageAnimate"
			variants={{
				pageExit: {
					opacity: 0,
				},
				pageInitial: {
					opacity: 0,
				},
				pageAnimate: {
					opacity: 1,
					transition: {
						duration: 0.3,
					},
				},
			}}
		>
			<h1>Work</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
		</motion.div>
	);
};

export default About;
