import { Plane, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const navItems = [
  { label: "Dashboard", to: "/" },
  { label: "Bookings", to: "/bookings" },
  { label: "Search", to: "/search" },
  { label: "Status", to: "/status" },
  { label: "Analytics", to: "/analytics" },
  { label: "Payments", to: "/payments" },
  { label: "Settings", to: "/settings" },
  { label: "Offers", to: "/offers" },
] as const;

const TopNav = () => {
  return (
    <header className="relative z-10 border-b border-white/10">
      <div className="container flex h-16 items-center justify-between text-sm text-white/80">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary-foreground" />
            <div className="flex flex-col leading-none">
              <span className="text-xs uppercase tracking-[0.3em] text-white/60">SkyBook</span>
              <span className="text-[10px] text-white/50">Flight &amp; holiday planner</span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="border-b border-transparent pb-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
                activeClassName="border-white text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-2 text-sm hover:text-white md:flex">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <Button
            variant="outline"
            size="sm"
            className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-slate-900"
          >
            Log in
          </Button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs font-semibold">
            <User className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
