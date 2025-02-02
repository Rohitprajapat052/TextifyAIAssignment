import { Bell, Search, User } from 'lucide-react'; // Importing icons from lucide-react

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-lg py-4 px-6 flex justify-between items-center border-b-2 border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">L O G O</h1>

        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-100 rounded-full w-1/3">
          <Search className="absolute left-3 w-5 h-5 text-gray-600" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-gray-600 focus:outline-none"
          />
        </div>

        {/* Right Side: Notification Bell, Profile Icon */}
        <div className="flex items-center gap-6">
          {/* Notification Bell */}
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>

          {/* User Profile Icon */}
          <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
