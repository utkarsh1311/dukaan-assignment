import Header from "./Header";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Transactions from "./Transactions";

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
