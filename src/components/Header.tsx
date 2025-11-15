import { Plane, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-primary">
              <Plane className="h-8 w-8" />
              <span className="text-2xl font-bold">SkyBook</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Flights
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              My Trips
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Deals
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
