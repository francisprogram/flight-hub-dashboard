import { Card, CardContent } from "@/components/ui/card";
import { Plane, Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Active Flights",
    value: "1,247",
    icon: Plane,
    change: "+12%",
    color: "text-primary",
  },
  {
    title: "Destinations",
    value: "500+",
    icon: Globe,
    change: "+8%",
    color: "text-accent",
  },
  {
    title: "Happy Travelers",
    value: "2.5M",
    icon: Users,
    change: "+25%",
    color: "text-primary",
  },
  {
    title: "Booking Rate",
    value: "94%",
    icon: TrendingUp,
    change: "+5%",
    color: "text-accent",
  },
];

const StatsOverview = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="hover:shadow-card-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;
