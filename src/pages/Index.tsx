import DashboardHeader from "@/components/DashboardHeader";
import DashboardOverview from "@/components/DashboardOverview";
import RecentBookings from "@/components/RecentBookings";
import UpcomingFlights from "@/components/UpcomingFlights";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <DashboardHeader />
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">Dashboard</h1>
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
    </Layout>
  );
};

export default Index;
