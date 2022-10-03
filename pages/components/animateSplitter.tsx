import { motion } from "framer-motion";

export default function Splitter({
	text,
	initialDelay,
	letterDelay,
	letterClass,
}: {
	text?: string;
	initialDelay?: number;
	letterDelay?: number;
	letterClass?: string;
}) {
	// check over this, needed to check if text was undefined so it didnt throw a non iterable error
	const splittext: string[] = text !== undefined ? Array.from(text) : [""];

	return (
		<>
			{splittext !== undefined &&
				splittext.map((el, i) => (
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
