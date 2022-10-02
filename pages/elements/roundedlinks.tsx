import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function RoundedLinks({
	link,
	children,
}: {
	link: string;
	children: React.ReactNode | React.ReactNode[];
}) {
	const [dashoffset, setDashoffset] = useState(0);
	const [pathLength, setPathLength] = useState(0);
	const [pathLengthHover, setPathLengthHover] = useState(0);
	const textEl = useRef(null);
	const buttonEl = useRef(null);

	useEffect(() => {
		if (buttonEl.current !== null) {
			// getting the circumference of the whole button, using pi to calc the rounded edges
			// button widths and heights here -3, due to the stroke and that the svg is 97% of the total element
			const buttonWidth: number = buttonEl.current.offsetWidth - 3;
			const buttonHeight: number = buttonEl.current.offsetHeight - 3;
			const buttonRoundedCircum: number = buttonHeight * Math.PI;

			const buttonCircum =
				(buttonWidth - buttonHeight) * 2 + buttonRoundedCircum;
			buttonEl.current !== null && setPathLength(buttonCircum.toFixed(2));
		}

		textEl.current !== null && setPathLengthHover(textEl.current.offsetWidth);
		// set pathlength here as width of text, so it can be offset accurately everytime(ish)
	}, []);

	return (
		<>
			<Link href={link}>
				<span
					ref={buttonEl}
					className=" px-[18px] py-[6px] inline-block rounded-full relative opacity-80 outlinehover"
					onMouseOver={() => setDashoffset(pathLength - pathLengthHover)}
					onMouseLeave={() => setDashoffset(0)}
				>
					<span ref={textEl}>{children}</span>
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
							pathLength={pathLength}
							strokeDasharray={pathLength}
							strokeDashoffset={dashoffset}
							width="97%"
							height="97%"
							className="duration-[0.5s] ease-in-out"
						></rect>
					</svg>
				</span>
			</Link>
		</>
	);
}
