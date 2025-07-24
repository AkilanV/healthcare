import DashboardLayout from "../components/layout/dashboardlayout";
import PatientProfile from "../components/patient/patientprofile";
import { HealthReadings } from "@/components/health/healthreadings";
import { AppointmentsSection } from "@/components/appointments/appointmentsection";
import { MyDoctors } from "@/components/doctors/mydoctors";
import { RightSidebar } from "@/components/layout/rightsidebar";
import { UpcomingAppointment } from "@/components/appointments/upcommingapptsection";

const Dashboard = () => (
  <DashboardLayout>
    <div className="w-full flex gap-10 p-6">
      {/* Left Sidebar */}
      <div className="w-80 flex-shrink-0">
        <PatientProfile />
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <UpcomingAppointment />
          </div>
          <div className="flex-1">
            <MyDoctors />
          </div>
        </div>


        <HealthReadings />
        <AppointmentsSection />
      </div>

      {/* Ai Bar */}
      <div className="w-80 flex-shrink-0">
        <RightSidebar />
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
