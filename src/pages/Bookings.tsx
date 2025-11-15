import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import RecentBookings from "@/components/RecentBookings";

const Bookings = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">My Bookings</h1>
              <p className="text-muted-foreground">
                Review and manage your recent and upcoming bookings.
              </p>
            </div>

            <RecentBookings />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookings;

