import { motion } from "framer-motion";

export default function Splitter({
	text,
	initialDelay,
	letterDelay,
}: {
	text: string;
	initialDelay?: number;
	letterDelay?: number;
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
							opacity: 0,
						},
						visible: {
							opacity: "100%",
							transition: {
								delay:
									i * (letterDelay ? letterDelay : 0.2) +
									(initialDelay ? initialDelay : 0),
							},
						},
					}}
					className="hover:text-blue-300 duration-200 cursor-default"
				>
					<span dangerouslySetInnerHTML={{ __html: el }}></span>
				</motion.span>
			))}
		</>
	);
}
