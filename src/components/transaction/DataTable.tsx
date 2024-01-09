import info from "../../assets/info.svg";

const DataTable = ({ data }) => {
	return (
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
	);
};

export default DataTable;
