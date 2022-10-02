import { motion } from "framer-motion";

export default function Splitter({
	text,
	initialDelay,
	letterDelay,
	letterClass,
}: {
	text: string;
	initialDelay?: number;
	letterDelay?: number;
	letterClass?: string;
}) {
	let splittext = Array.from(text);
	return (
		<>
			{splittext.map((el, i) => (
				<motion.span
					key={`splitter${i}`}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {
							y: "100%",
						},
						visible: {
							y: "0",
							transition: {
								delay:
									i * (letterDelay ? letterDelay : 0.2) +
									(initialDelay ? initialDelay : 0),
							},
						},
					}}
					className={letterClass ? letterClass : "duration-200"}
				>
					<span dangerouslySetInnerHTML={{ __html: el }}></span>
				</motion.span>
			))}
		</>
	);
}
