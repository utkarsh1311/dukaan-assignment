import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Overview from "./overview/Overview";
import Transactions from "./transaction/Transactions";

const Dashboard = () => {
	return (
		<div className="max-h-screen bg-[#FAFAFA] flex">
			<Navbar />
			<div className="flex flex-col flex-grow">
				<Header />
				<div className="p-8 flex flex-col gap-8 overflow-scroll">
					<Overview />
					<Transactions />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
