import arrow from "../assets/arrow.svg";
const Overview = () => {
	return (
		<div className="flex flex-col gap-6 ">
			<div className="flex justify-between items-center">
				<p className="text-xl">Overview</p>
				<div className="flex bg-white items-center rounded-md border border-[#D9D9D9] px-3.5 py-1.5 gap-2">
					<p>Last Month</p>
					<img className="w-4 h-4" src={arrow} alt="" />
				</div>
			</div>
			<div className="flex gap-5">
				<div className="p-5 flex-grow rounded shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] bg-white">
					<div className="flex flex-col gap-4 items-start">
						<p className="text-[#4D4D4D] font-normal">Online orders</p>
						<p  className="text-3xl font-medium text-[#1A181E]">231</p>
					</div>
				</div>
				<div className="p-5 flex-grow rounded shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] bg-white">
					<div className="flex flex-col gap-4 items-start">
						<p className="text-[#4D4D4D] font-normal">Amount Recieved</p>
						<p className="text-3xl font-medium text-[#1A181E]">₹23,92,312.19</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
