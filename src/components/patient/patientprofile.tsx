import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, X } from "lucide-react";
import dashboardData from "../../data/dashboardData.json";

const PatientProfile = () => {
  const patient = dashboardData.patient;

  return (
    <div className="grid grid-cols-1 gap-6 max-w-2xl">

          <div className="flex items-center justify-between mb-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={patient.avatar} />
              <AvatarFallback>
                {patient.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <Badge variant="secondary" className="cursor-pointer">
              Edit Profile
            </Badge>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">{patient.name}</h3>
            <p className="text-sm text-gray-600">Patient ID: {patient.id}</p>
          </div>

          <div className="grid grid-cols-3 text-sm text-gray-700 p-2 border-b border-gray-200">
            <div className="flex flex-col">
              <span className="text-gray-500">Age</span>
              <span className="font-medium">{patient.age}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Date of Birth</span>
              <span className="font-medium">{patient.dob}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Gender</span>
              <span className="font-medium">{patient.gender}</span>
            </div>
          </div>

          <div className="text-sm p-2">
            <span className="text-gray-500 block">Insurance Number</span>
            <span className="font-medium">{patient.insuranceNumber}</span>
          </div>

          {/* Problems */}
          <Card className="w-[350px]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">Problems</h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {patient.problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <p className="font-medium">{problem.title}</p>
                      <p className="text-sm text-gray-600">{problem.date}</p>
                      {problem.description && (
                        <p className="text-xs text-gray-500 mt-1">
                          {problem.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Immunizations*/}
          <Card className="w-[350px]">
            <CardContent className="p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Immunizations</h3>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-2 text-sm">
                  {patient.immunizations.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>


          {/*Allergies */}

          <Card className="w-[350px]">
            <CardContent className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Allergies</h3>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>

              {/* Allergies List */}
              <div className="flex flex-wrap gap-2">
                {patient.allergies.map((allergy, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="flex items-center gap-1 px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded-full"
                  >
                    {allergy}
                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" />
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

    </div>
  );
};

export default PatientProfile;
