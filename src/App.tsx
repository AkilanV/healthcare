import DashboardLayout from "@/components/layout/dashboardlayout"
import PatientProfile from "@/components/patient/patientprofile"
import { HealthReadings } from "@/components/health/healthreadings"
import { AppointmentsSection } from "@/components/appointments/appointmentsection"
import { MyDoctors } from "@/components/doctors/mydoctors"
import { RightSidebar } from "@/components/layout/rightsidebar"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex-1 flex gap-6 p-6">
        <div className="flex-1 space-y-6">
          <PatientProfile />
          <HealthReadings />
          <AppointmentsSection />
        </div>
        <div className="w-80 space-y-6">
          <MyDoctors />
          <RightSidebar />
        </div>
      </div>
    </DashboardLayout>
  )
}
