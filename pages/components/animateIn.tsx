import { motion } from "framer-motion";

export default function AnimateIn({
	children,
	delay,
	duration,
}: {
	children: React.ReactNode | React.ReactNode[];
	delay?: number;
	duration?: number;
}) {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={{
				hidden: {
					opacity: 0,
				},
				visible: {
					opacity: 1,
					transition: {
						delay: delay ? delay : 0.2,
						duration: duration ? duration : 1,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
