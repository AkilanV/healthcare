import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Heart, Droplets, Weight, Plus } from "lucide-react";
import dashboardData from "../../data/healthReadings.json";

const iconMap: Record<string, any> = {
  Thermometer,
  Heart,
  Droplets,
  Weight,
};

export function HealthReadings() {
  const readings = dashboardData.healthReadings;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Latest Health Readings</CardTitle>
        <Button variant="outline" size="sm">
          Last visit
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {readings.map((reading, index) => {
            const Icon = iconMap[reading.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg border"
              >
                <div className={`p-2 rounded-lg ${reading.bgColor}`}>
                  <Icon className={`w-5 h-5 ${reading.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{reading.title}</p>
                  <p className="text-xl font-semibold">
                    {reading.value}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      {reading.unit}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Plus className="w-4 h-4" />
            Add More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
