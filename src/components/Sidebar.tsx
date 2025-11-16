import { Home, Calendar, Search, CreditCard, Settings, User, BarChart3, Plane } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const navigation = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "My Bookings", icon: Calendar, href: "/bookings" },
  { name: "Search Flights", icon: Search, href: "/search" },
  { name: "Flight Status", icon: Plane, href: "/status" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Payments", icon: CreditCard, href: "/payments" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-slate-800/80 bg-slate-900/95 text-slate-100 backdrop-blur">
      <div className="flex h-16 items-center gap-3 border-b border-slate-800/80 px-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
          <Plane className="h-5 w-5" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">SkyBook</span>
          <span className="text-[11px] text-slate-500">Flight hub</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300/80 transition-colors hover:bg-white/5 hover:text-white"
            activeClassName="bg-white/10 text-white shadow-card"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-800/80 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3 shadow-card">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-100 truncate">John Doe</p>
            <p className="text-xs text-slate-400 truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
