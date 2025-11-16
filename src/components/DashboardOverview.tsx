import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Calendar, Clock, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  {
    title: "Total Bookings",
    value: "24",
    change: "+12% vs last month",
    trend: "up",
    icon: Calendar,
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
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
    change: "+8% vs last year",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Avg. Wait Time",
    value: "2.5h",
    change: "-15%",
    trend: "down",
    icon: Clock,
    color: "text-amber-300",
    bgColor: "bg-amber-500/10",
  },
];

const DashboardOverview = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-card/80 shadow-card hover:shadow-card-lg transition-shadow backdrop-blur"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`rounded-lg p-2 ${stat.bgColor}`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-foreground">{stat.value}</div>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-emerald-400" />}
              {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-rose-400" />}
              <span
                className={
                  stat.trend === "up"
                    ? "text-emerald-400"
                    : stat.trend === "down"
                    ? "text-rose-400"
                    : "text-muted-foreground"
                }
              >
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
