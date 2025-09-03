import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import TeamPage from "@/pages/team";
import ServicesPage from "@/pages/services";
import ServiceAreasPage from "@/pages/areas";
import AboutPage from "@/pages/about";
import DurbanAirportTaxiPage from "@/pages/durban-airport-taxi";
import UmhlangaAirportTaxiPage from "@/pages/umhlanga-airport-taxi";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/areas" component={ServiceAreasPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/durban-airport-taxi" component={DurbanAirportTaxiPage} />
      <Route path="/umhlanga-airport-taxi" component={UmhlangaAirportTaxiPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
