import SideMenu from "./components/side-menu/SideMenu";
import Header from "./components/header/Header";
import Dashboard from "./dashboard/Dashboard";
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
    {/* Header */}
    <Header />
    
    <div className="flex flex-1">
      {/* Sidebar */}
      <SideMenu className="w-64 bg-white shadow-md" />

        {/* Dashboard content */}
        <div className="p-6 overflow-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
