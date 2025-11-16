import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DashboardHeader = () => {
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="flex h-16 items-center gap-4 px-6">
        <div className="flex-1">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search bookings, flights..."
              className="pl-9 bg-slate-900/70 border-slate-700 text-slate-100 placeholder:text-slate-400 focus-visible:ring-sky-500"
            />
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="relative border-slate-700 bg-slate-900/70 text-slate-100 hover:bg-slate-900"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-[10px] font-medium text-slate-950">
            3
          </span>
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
