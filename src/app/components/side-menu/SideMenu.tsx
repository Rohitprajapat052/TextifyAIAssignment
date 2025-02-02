'use client'
import { Home, BarChart, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const SideMenu = () => {
  const pathname = usePathname(); // Get current route

  return (
    <aside className="bg-white shadow-md h-screen p-4 w-64">
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
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;
