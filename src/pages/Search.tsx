import Sidebar from "@/components/Sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Search = () => {
  return (
    <div className="flex h-screen w-full bg-background bg-hero-gradient">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-foreground">Search Flights</h1>
              <p className="text-muted-foreground">
                Find flights by destination, dates and cabin class.
              </p>
            </div>

            <Card className="shadow-card-lg">
              <CardHeader>
                <CardTitle>Plan your next trip</CardTitle>
                <CardDescription>
                  Enter your route and travel dates to see available options.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,2fr)]">
                  <div className="space-y-1">
                    <Label htmlFor="trip-type">Trip type</Label>
                    <Select defaultValue="return">
                      <SelectTrigger id="trip-type">
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="return">Return</SelectItem>
                        <SelectItem value="one-way">One way</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="from">From</Label>
                    <Input id="from" placeholder="Departure city or airport" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="to">To</Label>
                    <Input id="to" placeholder="Destination city or airport" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-4">
                  <div className="space-y-1">
                    <Label htmlFor="depart">Depart</Label>
                    <Input id="depart" placeholder="dd/mm/yyyy" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="return-date">Return</Label>
                    <Input id="return-date" placeholder="dd/mm/yyyy" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="travel-class">Travel class</Label>
                    <Select defaultValue="economy">
                      <SelectTrigger id="travel-class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium-economy">Premium Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="passengers">Passengers</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="passengers">
                        <SelectValue placeholder="Select passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 adult</SelectItem>
                        <SelectItem value="2">2 adults</SelectItem>
                        <SelectItem value="3">3 passengers</SelectItem>
                        <SelectItem value="4">4+ passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t pt-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-sm text-muted-foreground">
                    You&apos;ll see flexible fares, cabin choices and luggage options on the next step.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => {
                      // Placeholder handler
                    }}
                  >
                    Search flights
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

export default Search;
