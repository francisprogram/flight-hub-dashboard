import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Status = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Flight Status</h1>
              <p className="text-muted-foreground">
                Check the latest departure and arrival information for your flights.
              </p>
            </div>

            <Card className="max-w-3xl">
              <CardHeader>
                <CardTitle>Search by route or flight number</CardTitle>
                <CardDescription>
                  Enter your route and date, or use a specific flight number if you have it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <Label htmlFor="status-from">From</Label>
                    <Input id="status-from" placeholder="Departure city or airport" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="status-to">To</Label>
                    <Input id="status-to" placeholder="Arrival city or airport" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
                  <div className="space-y-1">
                    <Label htmlFor="status-date">Date</Label>
                    <Input id="status-date" placeholder="dd/mm/yyyy" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="status-flight">Flight number (optional)</Label>
                    <Input id="status-flight" placeholder="e.g. BA 178" />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t pt-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-muted-foreground">
                    Status information is typically available from 48 hours before departure.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => {
                      // Placeholder handler
                    }}
                  >
                    Check status
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Status;

