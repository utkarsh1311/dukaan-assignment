import download from "../../assets/download.svg";
import search from "../../assets/search.svg";
import sort from "../../assets/sort.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FilterData = ({ data }) => {
  


	return (
		<div className="flex justify-between">
			<div className="px-4 py-2.5 flex gap-2 border border-[#D9D9D9] rounded bg-white">
				<img src={search} alt="" className="cursor-pointer" />
				<input type="text" name="" id="" placeholder="Search by order ID..." />
			</div>
			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2.5 border-[#D9D9D9] border h-9 px-2.5 text-[#4D4D4D] rounded">
					<p>Sort</p>
					<img src={sort} alt="" className="w-4 h-4 cursor-pointer" />
				</div>
				<div className="w-9 h-9 rounded grid place-content-center border-[#D9D9D9] border">
					<img src={download} alt="" className="cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default FilterData;
