import PropertyCard from "./PropertyCard";

const TrendingProperties = () => {
  const properties = [
    {
      image: "/placeholder.svg",
      title: "Modern Apartment",
      price: 475000,
      location: "Camden, NJ",
      appreciation: 4.5,
    },
    {
      image: "/placeholder.svg",
      title: "Luxury Villa",
      price: 825000,
      location: "Seattle, WA",
      appreciation: 3.2,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Trending Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProperties;