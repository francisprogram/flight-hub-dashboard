import { useState } from "react";
import { ArrowRightLeft, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const FlightSearch = () => {
  const [tripType, setTripType] = useState<"round" | "one-way">("round");

  return (
    <div className="relative bg-hero-gradient py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Your Next Adventure
          </h1>
          <p className="text-lg text-muted-foreground">
            Search hundreds of flights to find the perfect journey
          </p>
        </div>

        <Card className="p-6 shadow-card-lg animate-slide-up">
          <div className="flex gap-4 mb-6">
            <Button
              variant={tripType === "round" ? "default" : "outline"}
              onClick={() => setTripType("round")}
              className="transition-all"
            >
              Round Trip
            </Button>
            <Button
              variant={tripType === "one-way" ? "default" : "outline"}
              onClick={() => setTripType("one-way")}
              className="transition-all"
            >
              One Way
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">From</label>
              <div className="relative">
                <Input
                  placeholder="New York (JFK)"
                  className="pl-4 h-12 bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">To</label>
              <div className="relative">
                <Input
                  placeholder="London (LHR)"
                  className="pl-4 h-12 bg-background"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-primary"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="date"
                  className="pl-10 h-12 bg-background"
                />
              </div>
            </div>

            {tripType === "round" && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    className="pl-10 h-12 bg-background"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="pl-10 h-12 bg-background"
                />
              </div>
            </div>
          </div>

          <Button className="w-full h-12 text-base bg-sky-gradient hover:opacity-90 transition-all">
            <Search className="mr-2 h-5 w-5" />
            Search Flights
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default FlightSearch;
