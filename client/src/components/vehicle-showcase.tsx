export default function VehicleShowcase() {
  const vehicles = [
    {
      name: "Standard Sedan",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Professional sedan taxi"
    },
    {
      name: "Executive Class",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Luxury business vehicle"
    },
    {
      name: "Family SUV", 
      image: "https://pixabay.com/get/gbbf6cd220968e167017f7ca83d683f2a18bfa874ef08d38783ae879943191eeec6ee03ab01227eb669ad24deeb146c39642f8f7ec04105ad7c34799884112fc0_1280.jpg",
      alt: "Spacious SUV taxi"
    },
    {
      name: "Group Transport",
      image: "https://pixabay.com/get/ga73e4f5bb02abd5046874e15fbd5a0ce8f564a0909f58638dc00834f144e1b6c852bcf92799ea2b1765478d79c7cb658e4551f9b0d3fa00eb2c8329d9d3db25f_1280.jpg",
      alt: "Group transport van"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-vehicles">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-vehicles-title">
            Our Professional Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-vehicles-subtitle">
            Clean, comfortable, and well-maintained vehicles for your peace of mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg" data-testid={`card-vehicle-${index}`}>
              <img 
                src={vehicle.image} 
                alt={vehicle.alt} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-vehicle-${index}`}
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-semibold" data-testid={`text-vehicle-name-${index}`}>
                  {vehicle.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
