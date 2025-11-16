import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Clock, MapPin, Calendar } from "lucide-react";

const flights = [
  {
    id: 1,
    from: "New York (JFK)",
    to: "London (LHR)",
    departure: "Jan 15, 08:30 AM",
    arrival: "Jan 15, 08:45 PM",
    duration: "7h 15m",
    airline: "British Airways",
    flightNo: "BA 178",
    gate: "B22",
  },
  {
    id: 2,
    from: "Los Angeles (LAX)",
    to: "Tokyo (NRT)",
    departure: "Jan 22, 11:20 PM",
    arrival: "Jan 24, 04:35 PM",
    duration: "11h 15m",
    airline: "Japan Airlines",
    flightNo: "JL 062",
    gate: "TBA",
  },
  {
    id: 3,
    from: "Chicago (ORD)",
    to: "Dubai (DXB)",
    departure: "Feb 5, 09:15 PM",
    arrival: "Feb 6, 07:30 PM",
    duration: "13h 15m",
    airline: "Emirates",
    flightNo: "EK 236",
    gate: "TBA",
  },
];

const UpcomingFlights = () => {
  return (
    <Card className="bg-card/80 shadow-card-lg backdrop-blur">
      <CardHeader className="border-b bg-card/60 pb-4">
        <CardTitle className="text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground">
          Upcoming flights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="rounded-xl border border-slate-200/70 bg-background/60 p-4 shadow-card transition-shadow hover:shadow-card-lg"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Plane className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{flight.airline}</p>
                  <p className="text-sm text-muted-foreground">{flight.flightNo}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                View Details
              </Button>
            </div>

            <div className="mb-3 grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  From
                </div>
                <p className="text-sm font-medium text-foreground">{flight.from}</p>
                <p className="text-xs text-muted-foreground">{flight.departure}</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Clock className="h-4 w-4 text-muted-foreground mb-1" />
                <p className="text-xs text-muted-foreground">{flight.duration}</p>
              </div>

              <div className="space-y-1 text-right">
                <div className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  To
                </div>
                <p className="text-sm font-medium text-foreground">{flight.to}</p>
                <p className="text-xs text-muted-foreground">{flight.arrival}</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-3">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Gate: {flight.gate}
                </span>
              </div>
              <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/5 hover:text-primary">
                Check-in
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpcomingFlights;
