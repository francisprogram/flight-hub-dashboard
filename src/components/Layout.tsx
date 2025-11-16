import { ReactNode } from "react";
import { Plane } from "lucide-react";
import TopNav from "@/components/TopNav";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-hero-gradient opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900" />
        </div>

        <div className="relative z-10">
          <TopNav />
        </div>
      </div>

      <main className="flex-1 bg-background">
        <div className="container space-y-6 py-10 lg:py-14">
          {children}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container space-y-10 py-10 text-sm lg:py-14">
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
            <span>© SkyBook Airlines — all rights reserved</span>
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

export default Layout;

