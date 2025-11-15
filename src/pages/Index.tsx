import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardOverview from "@/components/DashboardOverview";
import RecentBookings from "@/components/RecentBookings";
import UpcomingFlights from "@/components/UpcomingFlights";

const Index = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your flight overview.</p>
            </div>

            <DashboardOverview />

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RecentBookings />
              </div>
              
              <div className="lg:col-span-1">
                <UpcomingFlights />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
