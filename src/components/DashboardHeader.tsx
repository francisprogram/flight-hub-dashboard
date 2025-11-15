import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <header className="border-b bg-card">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search bookings, flights..."
              className="pl-9 bg-background"
            />
          </div>
        </div>

        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center">
            3
          </span>
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
