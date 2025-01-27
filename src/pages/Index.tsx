import PortfolioOverview from "@/components/PortfolioOverview";
import OperatingChart from "@/components/OperatingChart";
import OccupancyChart from "@/components/OccupancyChart";
import TrendingProperties from "@/components/TrendingProperties";
import MyPortfolio from "@/components/MyPortfolio";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8 space-y-8">
        <PortfolioOverview />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OperatingChart />
          <OccupancyChart />
        </div>
        
        <TrendingProperties />
        
        <MyPortfolio />
      </div>
    </div>
  );
};

export default Index;