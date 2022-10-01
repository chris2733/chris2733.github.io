import { motion } from "framer-motion";
import Masthead from "./components/masthead";

const Landing = () => {
	return (
		<motion.div
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
			<Masthead />
		</motion.div>
	);
};

export default Landing;
