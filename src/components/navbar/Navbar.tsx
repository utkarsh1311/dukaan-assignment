import companyImg from "../../assets/company-img.png";
import chevronDown from "../../assets/chevron-down.svg";
import { pages } from "./navdata";

const Navbar = () => {
	return (
		<div className=" min-h-screen flex-col flex items-start shrink-0 w-56">
			<div className="flex px-2.5 py-4 flex-col items-center gap-4 flex-grow w-full bg-[#1E2640]">
				<div className="flex flex-col items-center gap-6 flex-grow shrink-0 basis-0">
					<div className="flex items-center gap-3 w-48 px-2">
						<div className=" flex justify-center">
							<img
								src={companyImg}
								alt="company image"
								className="w-10 h-10 rounded "
							/>
						</div>
						<div className="flex flex-col justify-center items-start gap-1 flex-grow  text-white">
							<p className=" text-sm font-medium">Nishyan</p>
							<p className=" text-xs opacity-80">Visit Store</p>
						</div>
						<div className="">
							<img src={chevronDown} alt="chevron down icon" />
						</div>
					</div>

					{/* company links to pages */}
					<div className="flex flex-col items-start flex-grow shrink-0 basis-0 gap-1 w-full">
						{pages.map((page, index) => {
							return (
								<div
									className="flex px-4 py-2 items-start gap-3 rounded  opacity-80 cursor-pointer hover:bg-[#353C53] hover:opacity-100 w-full"
									key={index}
								>
									<div className="w-5 h-5">{page.icon}</div>
									<p className=" text-white text-sm font-medium">
										{" "}
										{page.name}
									</p>
								</div>
							);
						})}
					</div>

					{/* available credits section */}
					<div className="flex w-full px-3 py-1.5 rounded bg-[#353C53]  flex-col items-start">
						<div className="flex items-center gap-4">
							<div className="p-1.5 bg-white/10 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z"
										fill="white"
									/>
								</svg>
							</div>
							<div className="flex flex-col item-start gap-0.5 text-white">
								<p className="text-xs opacity-80 ">Available credits</p>
								<p className="font-medium">222.10</p>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
