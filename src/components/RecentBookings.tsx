import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Download } from "lucide-react";

const bookings = [
  {
    id: "BK-2024-001",
    route: "JFK → LHR",
    date: "Jan 15, 2025",
    passenger: "John Doe",
    status: "Confirmed",
    amount: "$890",
  },
  {
    id: "BK-2024-002",
    route: "LAX → NRT",
    date: "Jan 22, 2025",
    passenger: "John Doe",
    status: "Confirmed",
    amount: "$1,240",
  },
  {
    id: "BK-2024-003",
    route: "SFO → CDG",
    date: "Dec 28, 2024",
    passenger: "John Doe",
    status: "Completed",
    amount: "$950",
  },
  {
    id: "BK-2024-004",
    route: "MIA → BCN",
    date: "Dec 15, 2024",
    passenger: "John Doe",
    status: "Completed",
    amount: "$720",
  },
  {
    id: "BK-2024-005",
    route: "ORD → DXB",
    date: "Feb 5, 2025",
    passenger: "John Doe",
    status: "Pending",
    amount: "$1,350",
  },
];

const RecentBookings = () => {
  return (
    <Card className="bg-card/80 shadow-card-lg backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between border-b bg-card/60 pb-4">
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Recent bookings
        </CardTitle>
        <Button
          variant="outline"
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary/5"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/80 bg-muted/40">
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Booking ID
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Route
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Passenger
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Status
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Amount
                </th>
                <th className="py-3 px-4 text-right text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-muted/40"
                >
                  <td className="py-3 px-4 text-sm font-medium text-foreground/90">
                    {booking.id}
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-foreground">
                    {booking.route}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {booking.date}
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {booking.passenger}
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={
                        booking.status === "Confirmed"
                          ? "default"
                          : booking.status === "Completed"
                          ? "secondary"
                          : "outline"
                      }
                      className={
                        booking.status === "Confirmed"
                          ? "bg-sky-500/10 text-sky-700 hover:bg-sky-500/15"
                          : booking.status === "Pending"
                          ? "bg-amber-500/10 text-amber-700 hover:bg-amber-500/15"
                          : "bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-right text-foreground">
                    {booking.amount}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/60">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentBookings;
