import { motion } from "framer-motion";

export default function AnimateIn({
	children,
	delay,
}: {
	children: React.ReactNode | React.ReactNode[];
	delay: number;
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
						duration: 1,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
