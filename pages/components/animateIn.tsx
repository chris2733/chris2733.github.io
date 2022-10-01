import { motion } from "framer-motion";

export default function AnimateIn({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
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
						delay: 0.2,
						duration: 1,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
