import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, Clock, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Upcoming Flights",
    value: "3",
    change: "Next 30 days",
    trend: "neutral",
    icon: Plane,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Total Spent",
    value: "$12,450",
    change: "+8%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Avg. Wait Time",
    value: "2.5h",
    change: "-15%",
    trend: "down",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const DashboardOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-card transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`rounded-lg p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-green-600" />}
              {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-green-600" />}
              <span className={stat.trend === "up" || stat.trend === "down" ? "text-green-600" : ""}>
                {stat.change}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardOverview;
