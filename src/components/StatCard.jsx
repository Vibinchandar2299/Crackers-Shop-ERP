const StatCard = ({ title, value, change, icon, color }) => {
    return (
      <div className="bg-white shadow p-4 rounded-md w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-xl font-bold">{value}</h2>
          </div>
          <div className={`text-${color}-500 text-sm`}>{icon} {change}</div>
        </div>
      </div>
    );
  };
  
  export default StatCard;
  