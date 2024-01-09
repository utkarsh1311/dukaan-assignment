import help from "../assets/help.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import group from "../assets/group.svg";
const Header = () => {
	return (
		<div className="flex px-8 py-3 items-center gap-4 border-b border-[#D9D9D9] bg-white">
			<div className="flex items-center gap-4 flex-grow">
				<p className="text-[#1A181E]">Payments</p>
				<div className="flex gap-1.5">
					<img src={help} alt="" height="14px" width="14px" />
					<p className="text-xs ">How it works</p>
				</div>
			</div>
			<div className="flex rounded px-4 py-2.5 gap-2 flex-grow bg-[#F2F2F2] items-center">
				<img src={search} alt="" className="w-4 h-4" />
        <input
          className="flex-grow  bg-[#F2F2F2] outline-none"
					type="text"
					name=""
					id=""
					placeholder="Search features, tutorials, etc."
				/>
			</div>
			<div className="flex flex-grow items-center justify-end gap-3">
				<img src={group} alt="" className="w-10 h-10"  />
				<img src={menu} alt=""  className="w-10 h-10"/>
			</div>
		</div>
	);
};

export default Header;
