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
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <Plane className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold text-foreground">SkyBook</span>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            activeClassName="bg-accent text-accent-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <User className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
