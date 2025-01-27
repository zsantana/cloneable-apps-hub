import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const PortfolioOverview = () => {
  const portfolioValue = 30333.37;
  const monthlyIncome = 833.00;
  const yearlyIncome = 9996.00;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Portfolio Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-primary-500">{formatCurrency(portfolioValue)}</h2>
            <p className="text-sm text-gray-500">Total Portfolio Value</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-xl font-semibold">{formatCurrency(monthlyIncome)}</p>
              <p className="text-sm text-gray-500">Monthly Income</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{formatCurrency(yearlyIncome)}</p>
              <p className="text-sm text-gray-500">Yearly Income</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioOverview;