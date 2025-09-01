export default function KznDestinations() {
  const destinations = [
    {
      name: "Drakensberg Mountains Tour",
      description: "Airport transfer to breathtaking mountain ranges",
      image: "https://pixabay.com/get/g7f189d3661e57fddacce8aad0b1021bd81fdd5e71f8d96f6a5501ddaaf873edcf95d164d5662950b306fdee78041d5ca17e50f603a17b82f6cb8e04f007bceef_1280.jpg",
      alt: "King Shaka Airport taxi to Drakensberg Mountains"
    },
    {
      name: "Durban Beachfront Transfer",
      description: "Direct transport to Golden Mile beaches", 
      image: "https://pixabay.com/get/g9c05797eabaab727c937faf91c6b9f82dab23e0b6dcba66f571fffaffdd51000cfc018fcb50042165f69ac17a35b1eecaf2b50fa7a86dddcefce222f589268b5_1280.jpg",
      alt: "Airport taxi to Durban beachfront Golden Mile"
    },
    {
      name: "KZN Safari Transport",
      description: "Wildlife park transfers & safari tours",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "KZN wildlife safari taxi transport from King Shaka Airport"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted" data-testid="section-destinations">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-destinations-title">
            KZN Tourist Transport & City Tours
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-destinations-subtitle">
            Professional tourist transport to KwaZulu-Natal's top destinations. Expert local guides, airport pickup included, custom sightseeing tours from King Shaka Airport to Drakensberg, Durban beachfront, and safari adventures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl shadow-xl" data-testid={`card-destination-${index}`}>
              <img 
                src={destination.image} 
                alt={destination.alt} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                data-testid={`img-destination-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2" data-testid={`text-destination-name-${index}`}>
                  {destination.name}
                </h3>
                <p className="text-white/90 text-sm" data-testid={`text-destination-description-${index}`}>
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
