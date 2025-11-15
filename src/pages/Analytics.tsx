import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardOverview from "@/components/DashboardOverview";
import UpcomingFlights from "@/components/UpcomingFlights";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Analytics = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Analytics</h1>
              <p className="text-muted-foreground">
                Explore your travel trends, spend patterns and upcoming journeys.
              </p>
            </div>

            <DashboardOverview />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
              <Card>
                <CardHeader>
                  <CardTitle>Trip insights</CardTitle>
                  <CardDescription>
                    A quick snapshot of how and where you&apos;re travelling.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Most visited regions</p>
                      <p>North America, Europe</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Favourite cabin</p>
                      <p>Economy with occasional upgrades</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Average trip length</p>
                      <p>5–7 nights per stay</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">Sustainability insights</p>
                      <p>Track emissions and discover lower-impact routes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <UpcomingFlights />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;

