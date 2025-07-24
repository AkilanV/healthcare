import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MoreHorizontal } from "lucide-react"
import dashboardData from "../../data/dashboardData.json"

export function UpcomingAppointment() {
  const { upcomingAppointment } = dashboardData

  return (
    <Card className="bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold">Upcoming Appointment</CardTitle>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-lg font-semibold">{upcomingAppointment.condition}</p>
        <p className="text-sm">
          <span className="font-medium">{upcomingAppointment.doctor}</span>
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{upcomingAppointment.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}
