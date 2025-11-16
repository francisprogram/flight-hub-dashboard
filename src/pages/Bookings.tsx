import DashboardHeader from "@/components/DashboardHeader";
import RecentBookings from "@/components/RecentBookings";
import Layout from "@/components/Layout";

const Bookings = () => {
  return (
    <Layout>
      <DashboardHeader />

      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-foreground">My Bookings</h1>
          <p className="text-muted-foreground">
            Review and manage your recent and upcoming bookings.
          </p>
        </div>

        <RecentBookings />
      </div>
    </Layout>
  );
};

export default Bookings;
