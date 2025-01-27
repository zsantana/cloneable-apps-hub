import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface PortfolioProperty {
  image: string;
  title: string;
  value: number;
  location: string;
}

const MyPortfolio = () => {
  const properties: PortfolioProperty[] = [
    {
      image: "/placeholder.svg",
      title: "Philadelphia-TT",
      value: 412500,
      location: "Philadelphia",
    },
    {
      image: "/placeholder.svg",
      title: "Berkeley-MT",
      value: 510500,
      location: "Berkeley",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">My Portfolio</h2>
      <div className="space-y-4">
        {properties.map((property, index) => (
          <Card key={index}>
            <CardContent className="flex items-center gap-4 p-4">
              <img
                src={property.image}
                alt={property.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-sm text-gray-500">{property.location}</p>
              </div>
              <div className="ml-auto">
                <p className="font-semibold text-primary-500">
                  {formatCurrency(property.value)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolio;