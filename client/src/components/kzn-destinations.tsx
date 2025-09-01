export default function KznDestinations() {
  const destinations = [
    {
      name: "Hluhluwe Game Reserve Tour",
      description: "Wildlife sanctuary transfer to Africa's oldest game reserve",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "King Shaka Airport taxi to Hluhluwe Game Reserve",
      url: "https://www.hluhluwe.org.za/"
    },
    {
      name: "Durban Beachfront Transfer",
      description: "Direct transport to Golden Mile beaches", 
      image: "https://pixabay.com/get/g9c05797eabaab727c937faf91c6b9f82dab23e0b6dcba66f571fffaffdd51000cfc018fcb50042165f69ac17a35b1eecaf2b50fa7a86dddcefce222f589268b5_1280.jpg",
      alt: "Airport taxi to Durban beachfront Golden Mile",
      url: "https://www.durban.gov.za/discover/attractions/beachfront"
    },
    {
      name: "KZN Safari Transport",
      description: "Wildlife park transfers & safari tours",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "KZN wildlife safari taxi transport from King Shaka Airport",
      url: "https://www.kznwildlife.com/"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted" data-testid="section-destinations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4" data-testid="text-destinations-title">
            KZN Tourist Transport & City Tours
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-destinations-subtitle">
            Professional tourist transport to KwaZulu-Natal's top destinations. Expert local guides, airport pickup included, custom sightseeing tours from King Shaka Airport to Hluhluwe, Durban beachfront, and safari adventures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <a 
              key={index} 
              href={destination.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300" 
              data-testid={`card-destination-${index}`}
            >
              <img 
                src={destination.image} 
                alt={destination.alt} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`img-destination-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" data-testid={`text-destination-name-${index}`}>
                  {destination.name}
                </h3>
                <p className="text-white/90 text-sm" data-testid={`text-destination-description-${index}`}>
                  {destination.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
