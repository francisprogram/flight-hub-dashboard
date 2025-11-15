import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Paris", country: "France", price: "$450", image: "paris" },
  { name: "Tokyo", country: "Japan", price: "$890", image: "tokyo" },
  { name: "New York", country: "USA", price: "$320", image: "new-york" },
  { name: "Dubai", country: "UAE", price: "$680", image: "dubai" },
  { name: "Barcelona", country: "Spain", price: "$410", image: "barcelona" },
  { name: "Singapore", country: "Singapore", price: "$750", image: "singapore" },
];

const PopularDestinations = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore trending destinations around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-card-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-gradient opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white opacity-80 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{destination.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="text-xl font-bold text-primary">{destination.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
