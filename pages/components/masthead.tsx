import AnimateIn from "./animateIn";

const Masthead = () => {
	return (
		<div className="min-h-screen">
			<AnimateIn>
				<h1 className=" tracking-widest uppercase font-normal text-2xl">
					chris law
				</h1>
			</AnimateIn>
		</div>
	);
};

export default Masthead;
