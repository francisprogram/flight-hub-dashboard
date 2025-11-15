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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Bookings</CardTitle>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Booking ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Route
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Passenger
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">
                  Status
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                  Amount
                </th>
                <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-foreground">
                    {booking.id}
                  </td>
                  <td className="py-3 px-4 text-sm text-foreground font-medium">
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
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : ""
                      }
                    >
                      {booking.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm font-medium text-right text-foreground">
                    {booking.amount}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="icon">
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
