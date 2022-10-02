import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AnimateIn from "./animateIn";
import Splitter from "./animateSplitter";

const Masthead = () => {
	const headlineClasses =
		"hover:text-blue-300 duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default inline-block mx-[1px]";
	return (
		<div className="min-h-screen bg-black text-white flex justify-center items-center">
			<div className="container text-center text-masthead uppercase">
				<div className="block">
					<h1 className="inline-block overflow-hidden leading-5">
						<Splitter
							text={"chris law"}
							initialDelay={0.5}
							letterDelay={0.03}
							letterClass={headlineClasses}
						/>
					</h1>
				</div>
				<h2 className="inline-block overflow-hidden mr-1 leading-5">
					<Splitter
						text={"front end"}
						initialDelay={1}
						letterDelay={0.03}
						letterClass={headlineClasses}
					/>
				</h2>
				<h2 className="inline-block overflow-hidden leading-5">
					<Splitter
						text={"developer"}
						initialDelay={1.3}
						letterDelay={0.03}
						letterClass={headlineClasses}
					/>
				</h2>
				<div className="text-sm mt-2 flex items-center justify-center gap-3">
					<AnimateIn delay={1.8} duration={0.6}>
						<PageLinks link="/about">about</PageLinks>
					</AnimateIn>
					<AnimateIn delay={1.9} duration={0.6}>
						<PageLinks link="/work">work</PageLinks>
					</AnimateIn>
				</div>
			</div>
		</div>
	);
};

function PageLinks({
	link,
	children,
}: {
	link: string;
	children: React.ReactNode | React.ReactNode[];
}) {
	const [dashoffset, setDashoffset] = useState(0);

	return (
		<>
			<Link href={link}>
				<span
					className="pl-[12px] pr-[14px] py-1 inline-block rounded-full relative opacity-80 outlinehover"
					onMouseOver={() => setDashoffset(80)}
					onMouseLeave={() => setDashoffset(0)}
				>
					<span>{children}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="absolute w-[90%] h-[90%] scale-y-[-1] left-[5%] top-[5%]"
					>
						<rect
							rx="15"
							y="0.5"
							x="1"
							stroke="#ffffff"
							fill="none"
							strokeWidth="2"
							pathLength="100"
							strokeDasharray="100"
							strokeDashoffset={dashoffset}
							width="95%"
							height="95%"
							className="duration-[0.5s] ease-in-out"
						></rect>
					</svg>
				</span>
			</Link>
		</>
	);
}

export default Masthead;
