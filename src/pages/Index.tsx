import Header from "@/components/Header";
import FlightSearch from "@/components/FlightSearch";
import StatsOverview from "@/components/StatsOverview";
import PopularDestinations from "@/components/PopularDestinations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FlightSearch />
        <StatsOverview />
        <PopularDestinations />
      </main>
    </div>
  );
};

export default Index;
