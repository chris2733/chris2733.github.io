import { motion } from "framer-motion";

export default function PageTransitionWrapper({
	classes,
	duration,
	children,
}: {
	classes?: string;
	duration?: number;
	children: React.ReactNode | React.ReactNode[];
}) {
	return (
		<motion.div
			className={classes}
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
						duration: duration ? duration : 0.3,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
