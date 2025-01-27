import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", occupancy: 92 },
  { month: "Feb", occupancy: 95 },
  { month: "Mar", occupancy: 98 },
  { month: "Apr", occupancy: 94 },
  { month: "May", occupancy: 96 },
  { month: "Jun", occupancy: 97 },
];

const OccupancyChart = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rental Occupancy Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="occupancy"
                stroke="#00C853"
                strokeWidth={2}
                dot={{ fill: "#00C853" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default OccupancyChart;