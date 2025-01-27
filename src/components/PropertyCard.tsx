import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  image: string;
  title: string;
  price: number;
  location: string;
  appreciation: number;
}

const PropertyCard = ({ image, title, price, location, appreciation }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-xl font-bold text-primary-500">{formatCurrency(price)}</p>
          <p className="text-sm text-gray-500">{location}</p>
          <div className="flex items-center gap-2">
            <span className={`text-sm ${appreciation >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {appreciation > 0 ? '+' : ''}{appreciation}%
            </span>
            <span className="text-sm text-gray-500">Appreciation</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;