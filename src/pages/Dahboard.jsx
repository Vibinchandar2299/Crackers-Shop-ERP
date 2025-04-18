import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import MonthlyLineChart from "../components/LineChart";
import DonutChart from "../components/DonutChart";

const Dashboard = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#E6F0FA] p-6">
        <h1 className="text-3xl font-semibold text-[#2B4F81] mb-6">Welcome Vibin</h1>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Revenue" value="₹371315.75" change="+5.2%" icon="📈" color="green" />
          <StatCard title="Invoices" value="35" change="+2.2%" icon="📄" color="red" />
          <StatCard title="Customers" value="26" change="-3.1%" icon="👥" color="green" />
          <StatCard title="Rating" value="4.1" change="+2.3%" icon="⭐" color="red" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-[#d0e2f0]">
            <h2 className="text-xl font-semibold text-[#2B4F81] mb-4">Monthly Revenue</h2>
            <MonthlyLineChart />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-[#d0e2f0]">
            <h2 className="text-xl font-semibold text-[#2B4F81] mb-4">Sales Overview</h2>
            <DonutChart />
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-[#d0e2f0]">
          <h2 className="text-xl font-semibold text-[#2B4F81] mb-6">Recent Invoices</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="text-gray-600 border-b border-gray-300 bg-[#f0f8ff]">
                <tr>
                  <th className="py-3 px-4">Invoice No</th>
                  <th className="py-3 px-4">Date Created</th>
                  <th className="py-3 px-4">Client</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="hover:bg-[#f5faff] border-b border-gray-200">
                  <td className="py-3 px-4">67921b33fba06f36563e9f545</td>
                  <td className="py-3 px-4">December 23, 2025 at 04:04:27 PM</td>
                  <td className="py-3 px-4">Priya</td>
                  <td className="py-3 px-4">₹5670</td>
                  <td className="py-3 px-4">
                    <button className="bg-[#D8EAFE] text-[#2B4F81] px-4 py-1 rounded-md hover:bg-[#c8defb] transition">
                      Download Invoice
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#f5faff] border-b border-gray-200">
                  <td className="py-3 px-4">56921c44edb17e67234f8d872</td>
                  <td className="py-3 px-4">December 21, 2025 at 02:18:45 PM</td>
                  <td className="py-3 px-4">Rahul</td>
                  <td className="py-3 px-4">₹8420</td>
                  <td className="py-3 px-4">
                    <button className="bg-[#D8EAFE] text-[#2B4F81] px-4 py-1 rounded-md hover:bg-[#c8defb] transition">
                      Download Invoice
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-[#f5faff]">
                  <td className="py-3 px-4">47311a99abe45d18383d1e439</td>
                  <td className="py-3 px-4">December 20, 2025 at 11:30:12 AM</td>
                  <td className="py-3 px-4">Deepa</td>
                  <td className="py-3 px-4">₹3225</td>
                  <td className="py-3 px-4">
                    <button className="bg-[#D8EAFE] text-[#2B4F81] px-4 py-1 rounded-md hover:bg-[#c8defb] transition">
                      Download Invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
