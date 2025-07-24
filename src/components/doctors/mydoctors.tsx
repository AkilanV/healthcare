import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, MoreHorizontal } from "lucide-react"
import dashboardData from "../../data/dashboardData.json"

export function MyDoctors() {
  const [doctors, setDoctors] = useState<any[]>([])

  useEffect(() => {
    setDoctors(dashboardData.doctors)
  }, [])

  return (
    <Card className="shadow-md dark:bg-gray-900 dark:text-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">My Doctors</CardTitle>
        <Button variant="ghost" size="icon" className="dark:hover:bg-gray-700">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-3">
        {doctors.map((doctor, index) => (
          <Button
            key={index}
            variant="outline"
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 text-sm"
          >
            <Avatar className="w-6 h-6">
              <AvatarImage src={doctor.avatar} />
              <AvatarFallback>
                {doctor.name.split(" ").map((n: string) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <span>{doctor.name.split(" ")[1]}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ({doctor.specialty})
            </span>
          </Button>
        ))}

        <Button
          variant="outline"
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700 text-sm"
        >
          <Plus className="w-4 h-4" />
          Add New
        </Button>
      </CardContent>
    </Card>
  )
}
