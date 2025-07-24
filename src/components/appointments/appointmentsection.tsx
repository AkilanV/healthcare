import { Card, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Clock, Plus } from "lucide-react"
import dashboardData from "../../data/dashboardData.json"

export function AppointmentsSection() {
  const { appointments } = dashboardData

  return (
    <Card>
      <CardHeader>
        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex items-center justify-between border-b pb-2">
            <TabsList className="flex gap-6 bg-transparent p-0 border-none">
              <TabsTrigger
                value="upcoming"
                className="relative text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:after:absolute data-[state=active]:after:bottom-[-8px] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-blue-600"
              >
                Upcoming Appointments
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="relative text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:after:absolute data-[state=active]:after:bottom-[-8px] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-blue-600"
              >
                Completed Appointments
              </TabsTrigger>
              <TabsTrigger
                value="cancelled"
                className="relative text-sm font-medium text-gray-600 data-[state=active]:text-blue-600 data-[state=active]:after:absolute data-[state=active]:after:bottom-[-8px] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-[2px] data-[state=active]:after:bg-blue-600"
              >
                Cancel Appointments
              </TabsTrigger>
            </TabsList>

            <Button
              size="sm"
              className="flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              New
            </Button>
          </div>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              <div className="hidden md:grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 text-sm font-medium text-gray-600 pb-2 border-b dark:text-white">
                <span>Appoint for</span>
                <span>Doctor</span>
                <span>Date & Time</span>
                <span>Action</span>
              </div>

              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 items-center py-3 border-b"
                >
                  <span className="font-medium">{appointment.condition}</span>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={appointment.avatar} />
                      <AvatarFallback>
                        {appointment.doctor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{appointment.doctor}</span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-white">{appointment.date}</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Clock className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <p className="text-center text-gray-500 py-8">No completed appointments</p>
          </TabsContent>

          <TabsContent value="cancelled">
            <p className="text-center text-gray-500 py-8">No cancelled appointments</p>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}
