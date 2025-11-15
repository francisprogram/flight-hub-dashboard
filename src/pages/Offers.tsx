import { Plane, Search, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type OfferCardProps = {
  title: string;
  subtitle: string;
  price: string;
  note: string;
  imageUrl?: string;
  dark?: boolean;
};

const bestOffers: OfferCardProps[] = [
  {
    title: "Dubai flights",
    subtitle: "Return from London, Nov 2025",
    price: "£501",
    note: "Limited-time winter sun deals",
    imageUrl: "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Prague flights",
    subtitle: "Each way, from London, Dec 2025",
    price: "£57",
    note: "Christmas market city breaks",
    imageUrl: "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Rome flights",
    subtitle: "Each way, from London, Dec 2025",
    price: "£64",
    note: "Iconic landmarks and winter sun",
    imageUrl: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Europe city breaks",
    subtitle: "Per person, Nov 2025",
    price: "£189",
    note: "Handpicked multi-night stays",
    imageUrl: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const discoverOffers: OfferCardProps[] = [
  {
    title: "USA flights",
    subtitle: "Return from London, Jan 2025",
    price: "£442",
    note: "Explore New York, Los Angeles & more",
    imageUrl: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
  {
    title: "Caribbean holidays",
    subtitle: "Per person, twin share, Apr 2025",
    price: "£735",
    note: "Resort stays with return flights",
    imageUrl: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
  {
    title: "New routes: St. Louis",
    subtitle: "Return from London, Apr 2025",
    price: "£540",
    note: "Be among the first to fly",
    imageUrl: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
  {
    title: "Fly to over 40 destinations",
    subtitle: "From London Gatwick, Jul 2025",
    price: "£40",
    note: "Short breaks across Europe",
    imageUrl: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
  {
    title: "Last minute holidays",
    subtitle: "Per person, from London, Nov 2025",
    price: "£189",
    note: "Pack and go within weeks",
    imageUrl: "https://images.pexels.com/photos/53389/plane-aircraft-take-off-sky-53389.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
  {
    title: "Christmas market breaks",
    subtitle: "Per person, Dec 2025",
    price: "£258",
    note: "Festive stays across Europe",
    imageUrl: "https://images.pexels.com/photos/769153/pexels-photo-769153.jpeg?auto=compress&cs=tinysrgb&w=1200",
    dark: true,
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-hero-gradient opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />
        </div>

        <header className="relative z-10 border-b border-white/10">
          <div className="container flex h-16 items-center justify-between text-sm text-white/80">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Plane className="h-6 w-6 text-primary-foreground" />
                <div className="flex flex-col leading-none">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">SkyBook</span>
                  <span className="text-[10px] text-white/50">Flight & holiday planner</span>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-6">
                <button className="border-b border-white pb-1 text-sm font-medium">Discover</button>
                <button className="hover:text-white">Book</button>
                <button className="hover:text-white">Manage</button>
                <button className="hover:text-white">Help</button>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-sm hover:text-white">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-slate-900"
              >
                Log in
              </Button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10 text-xs font-semibold">
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>
        </header>

        <div className="relative z-10 container py-10 lg:py-16 space-y-8">
          <HeroCard />
          <SearchPanel />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 bg-background">
        <section className="border-b bg-background">
          <div className="container py-10 lg:py-14 space-y-8">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                Take your pick from
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">our best offers</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {bestOffers.map((offer) => (
                <OfferCard key={offer.title} {...offer} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b bg-muted/40">
          <div className="container py-10 lg:py-14 space-y-8">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                The world is yours
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">to discover</h2>
              <p className="text-sm text-muted-foreground">
                Plan a trip to look forward to with incredible deals on destinations near and far.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {discoverOffers.map((offer) => (
                <OfferCard key={offer.title} {...offer} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-b bg-slate-900 text-white">
          <div className="container py-10 lg:py-14 space-y-8">
            <div className="space-y-2 text-center">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/60">
                With you every step
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">of the journey</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-stretch">
              <Card className="bg-card/10 border-white/10 shadow-card-lg overflow-hidden">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/2 max-w-sm rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 p-4 shadow-card-lg">
                    <div className="text-xs text-white/70 mb-2">SkyBook Rewards</div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-semibold tracking-wide">SkyBook Plus</span>
                      <Plane className="h-6 w-6 text-white/80" />
                    </div>
                    <div className="space-y-2 text-sm text-white/80">
                      <p>**** **** **** 2097</p>
                      <p className="flex items-center justify-between">
                        <span>C FROST</span>
                        <span>12/26</span>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm md:text-base">
                    <h3 className="text-xl font-semibold">
                      Collect 5,000 bonus points on your next trip
                    </h3>
                    <p className="text-sm text-white/80">
                      When you spend with your SkyBook Plus card in the first three months, enjoy bonus points on
                      flights, hotels and experiences.
                    </p>
                    <p className="text-xs text-white/60">
                      Representative 29.4% APR variable. Eligibility criteria and terms apply.
                    </p>
                    <div className="pt-2">
                      <Button
                        size="sm"
                        className="bg-white text-slate-900 hover:bg-slate-100"
                        onClick={() => {
                          // Placeholder handler
                        }}
                      >
                        Apply now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-3">
                <JourneyInfoCard
                  title="Before you fly"
                  description="Check your baggage allowance, entry requirements and discover additional services to help your trip go smoothly."
                  cta="Plan your journey"
                />
                <JourneyInfoCard
                  title="What's new"
                  description="Discover the latest food, drink and entertainment options in our lounges and on board."
                  cta="Read the latest"
                />
                <JourneyInfoCard
                  title="Need to contact us?"
                  description="Our friendly Customer Service team is here to answer all your queries."
                  cta="How to contact us"
                />
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </main>
    </div>
  );
};

const HeroCard = () => {
  return (
    <Card className="max-w-3xl bg-slate-900/80 border-white/20 text-white shadow-card-lg backdrop-blur">
      <CardHeader className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
          Escape the chill, embrace the sun
        </p>
        <div className="space-y-2">
          <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Winter sun holidays
          </CardTitle>
          <CardDescription className="text-sm md:text-base text-white/80 space-y-1">
            <p>Return flights + 7 nights hotel from</p>
            <p className="text-3xl md:text-4xl font-semibold leading-none">£399</p>
            <p className="text-[11px] md:text-xs text-white/70">Per person, from London, Jan 2025</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button
            size="lg"
            className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => {
              // Placeholder handler
            }}
          >
            Search winter sun holidays
          </Button>
          <div className="flex w-full items-center gap-4 md:w-auto">
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="relative flex-1 h-[3px] rounded-full bg-white/25">
              <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-white" />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SearchPanel = () => {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="flights" className="w-full">
        <Card className="shadow-card-lg">
          <CardHeader className="flex flex-col gap-4 border-b bg-card/60 pb-4 md:flex-row md:items-center md:justify-between">
            <TabsList className="bg-muted/80 p-1 rounded-md">
              <TabsTrigger value="flights" className="px-4 py-1.5 text-sm">
                Flights
              </TabsTrigger>
              <TabsTrigger value="flight-hotel" className="px-4 py-1.5 text-sm">
                Flight + hotel
              </TabsTrigger>
              <TabsTrigger value="flight-car" className="px-4 py-1.5 text-sm">
                Flight + car
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-primary">
              <button className="hover:underline">Multi-city</button>
              <span className="hidden md:inline text-muted-foreground">|</span>
              <button className="hover:underline">Find a hotel</button>
              <span className="hidden md:inline text-muted-foreground">|</span>
              <button className="hover:underline">Find a car</button>
            </div>
          </CardHeader>

          <CardContent className="pt-4">
            <TabsContent value="flights" className="mt-0">
              <FlightSearchForm />
            </TabsContent>
            <TabsContent value="flight-hotel" className="mt-0">
              <FlightSearchForm />
            </TabsContent>
            <TabsContent value="flight-car" className="mt-0">
              <FlightSearchForm />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>

      <div className="flex flex-wrap gap-3 text-sm">
        <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
          Manage booking
        </Button>
        <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
          Check in
        </Button>
        <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
          See flight status
        </Button>
      </div>
    </div>
  );
};

const FlightSearchForm = () => {
  return (
    <div className="space-y-6">
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
          <Input id="from" placeholder="Departure city" />
        </div>

        <div className="space-y-1">
          <Label htmlFor="to">To</Label>
          <Input id="to" placeholder="Where can we take you?" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div className="space-y-1">
          <Label htmlFor="depart">Depart</Label>
          <Input id="depart" placeholder="dd/mm/yyyy" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="return">Return</Label>
          <Input id="return" placeholder="dd/mm/yyyy" />
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

      <div className="flex flex-col gap-4 border-t pt-4 text-xs md:flex-row md:items-center md:justify-between md:text-sm">
        <div className="space-y-1">
          <p className="font-medium text-foreground">Need inspiration?</p>
          <div className="flex flex-wrap items-center gap-2 text-primary">
            <button className="hover:underline">Find your next adventure</button>
            <span className="hidden md:inline text-muted-foreground">•</span>
            <button className="hover:underline">Book using a voucher or promotional code</button>
          </div>
        </div>

        <Button
          size="lg"
          className="self-end md:self-auto"
          onClick={() => {
            // Placeholder handler
          }}
        >
          Find flights
        </Button>
      </div>
    </div>
  );
};

const OfferCard = ({ title, subtitle, price, note, imageUrl, dark }: OfferCardProps) => {
  return (
    <Card
      className={`overflow-hidden shadow-card transition-shadow hover:shadow-card-lg ${
        dark ? "bg-slate-900 text-white" : ""
      }`}
    >
      {imageUrl && (
        <div className="relative h-40 w-full overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent ${dark ? "" : ""}`} />
        </div>
      )}
      <CardContent className="space-y-2 pt-4">
        <p className={`text-xs font-medium tracking-[0.2em] uppercase ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <div className="pt-2 space-y-1">
          <p className="text-sm text-muted-foreground">
            From{" "}
            <span className={`text-2xl font-semibold ${dark ? "text-white" : "text-primary"}`}>
              {price}
            </span>
          </p>
          <p className={`text-xs ${dark ? "text-white/70" : "text-muted-foreground"}`}>{note}</p>
        </div>
      </CardContent>
    </Card>
  );
};

type JourneyInfoCardProps = {
  title: string;
  description: string;
  cta: string;
};

const JourneyInfoCard = ({ title, description, cta }: JourneyInfoCardProps) => {
  return (
    <Card className="bg-card/10 border-white/10 text-white shadow-card">
      <CardContent className="p-5 space-y-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm text-white/80">{description}</p>
        <button className="text-sm font-medium text-sky-300 hover:text-sky-200 hover:underline">{cta}</button>
      </CardContent>
    </Card>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container py-10 lg:py-14 space-y-10 text-sm">
        <div className="grid gap-8 md:grid-cols-4">
          <FooterColumn
            title="About SkyBook"
            links={["About us", "Sustainability", "Investor relations", "Modern slavery statement", "Careers"]}
          />
          <FooterColumn
            title="Support"
            links={["Help and contacts", "Customer commitment", "Accessibility and help", "Media centre"]}
          />
          <FooterColumn
            title="Partners"
            links={["Privacy policy", "Legal", "Website security", "Cookie policy"]}
          />
          <FooterColumn
            title="Explore"
            links={["Inspire me", "Travel guides", "Holiday deals", "Flight status"]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <Plane className="h-5 w-5 text-primary" />
            <span>© SkyBook Airlines – all rights reserved</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button className="hover:text-slate-200">United Kingdom · English</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: string[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      <ul className="space-y-1 text-xs text-slate-300">
        {links.map((link) => (
          <li key={link}>
            <button className="hover:text-white hover:underline">{link}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;

