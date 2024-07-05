const Dashboard = () => {
    return (
        <div className="h-screen bg-gray-800 text-white w-64 p-4">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <ul>
                <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a></li>
                <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Analytics</a></li>
                <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a></li>
                <li className="mb-2"><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</a></li>
            </ul>
        </div>
    );
};

export default Dashboard;