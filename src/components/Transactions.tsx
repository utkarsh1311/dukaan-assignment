import search from "../assets/search.svg";
import download from "../assets/download.svg";
import sort from "../assets/sort.svg";
import info from "../assets/info.svg";

const Transactions = () => {
	// data for transactions
	const data = [];
	for (let i = 0; i < 15; i++) {
		data.push({
			orderID: `#281209${i}`,
			orderDate: `7 July, 202${i}`,
			orderAmount: `₹1,278.23${i}`,
			transactionFees: `₹22${i}`,
		});
	}

	return (
		<div className="flex flex-col items-start gap-5">
			<div>
				<p className="text-[#1A181E] text-xl font-medium">
					Transactions | This month
				</p>
			</div>

			{/* table section */}
			<div className="p-3 pb-6 bg-white rounded-lg w-full flex flex-col gap-3">
				<div className="flex justify-between">
					<div className="px-4 py-2.5 flex gap-2 border border-[#D9D9D9] rounded bg-white">
						<img src={search} alt="" />
						<input
							type="text"
							name=""
							id=""
							placeholder="Search by order ID..."
						/>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2.5 border-[#D9D9D9] border h-9 px-2.5 text-[#4D4D4D] rounded">
							<p>Sort</p>
							<img src={sort} alt="" className="w-4 h-4" />
						</div>
						<div className="w-9 h-9 rounded grid place-content-center border-[#D9D9D9] border">
							<img src={download} alt="" />
						</div>
					</div>
				</div>
				<div className="w-full">
					<table className="w-full rounded-md">
						<thead className="rounded">
							<tr className="text-[#4D4D4D] text-sm font-medium bg-[#F2F2F2]">
								<th className="px-2.5 py-3 text-left">Order ID</th>
								<th className="px-2.5 py-3 text-left flex items-center gap-1">
									Order Date
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="8"
										height="8"
										viewBox="0 0 8 8"
										fill="none"
									>
										<path
											d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z"
											fill="#4D4D4D"
										/>
									</svg>
								</th>
								<th className="px-2.5 py-3 text-right">Order Amount</th>
								<th className="px-2.5 py-3 text-right flex items-center gap-1 justify-end">
									Transaction fees
									<img src={info} alt="" />
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map(transaction => (
								<tr className="text-[#4D4D4D] text-sm font-medium border-b">
									<td className="px-2.5 py-3 text-[#146EB4] ">
										{transaction.orderID}
									</td>
									<td className="px-2.5 py-3">{transaction.orderDate}</td>
									<td className="px-2.5 py-3 text-right">
										{transaction.orderAmount}
									</td>
									<td className="px-2.5 py-3 text-right">
										{transaction.transactionFees}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex w-full mt-4">
					<ul className="flex items-stretch justify-center w-full gap-2">
						<li className="mr-4">
							<button className="flex items-center gap-1 border rounded h-9 text-sm pr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z"
										fill="#4D4D4D"
									/>
								</svg>
								Previous
							</button>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border bg-[#146EB4] text-white">
								1
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								...
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								10
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								11
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								12
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								13
							</p>
						</li>
						<li className="">
							<p className="rounded-md w-9 h-9 grid place-content-center text-sm font-medium border">
								14
							</p>
						</li>
						<li className="ml-4">
							<button className="flex items-center gap-1  border rounded h-9 text-sm pl-2">
								Next
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 18 18"
									fill="none"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z"
										fill="#4D4D4D"
									/>
								</svg>
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Transactions;
