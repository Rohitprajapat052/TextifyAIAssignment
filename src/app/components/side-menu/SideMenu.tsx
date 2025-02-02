
'use client'
import { Home, BarChart, Settings, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const SideMenu = ({className = ""}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const pathname = usePathname(); // Get current route

  return (
    <aside
      className={`bg-white shadow-md h-screen p-4 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      } ${className}`}
    >
      <button
        className="mb-6 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronRight className="w-6 h-6 text-gray-600" />
        )}
      </button>
      <nav className="flex flex-col gap-4">
        {/* Menu Items */}
        {[
          { name: "Home", icon: Home, href: "/" },
          { name: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
          { name: "Profile", icon: User, href: "/dashboard/profile" },
          { name: "Settings", icon: Settings, href: "/dashboard/setting" },
        ].map(({ name, icon: Icon, href }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-3 p-2 rounded-lg transition ${
              pathname === href ? "bg-blue-500 text-white" : "hover:bg-gray-100 text-gray-800"
            }`}
          >
            <Icon className={`w-6 h-6 ${pathname === href ? "text-white" : "text-gray-600"}`} />
            {isExpanded && <span>{name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu ;
