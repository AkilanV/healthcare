import { useEffect, useState } from "react"
import {
  Home,
  Calendar,
  Users,
  UserCheck,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Calendar, label: "Appointments" },
  { icon: Users, label: "My Family" },
  { icon: UserCheck, label: "My Doctors" },
  { icon: FileText, label: "Reports" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div
      className={cn(
        "border-r flex flex-col transition-all duration-300",
        isOpen ? "w-64" : "w-16",
        "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              HealthCare
            </span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isOpen ? (
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      <nav className="flex-1 px-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  item.active
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800",
                  !isOpen && "justify-center"
                )}
              >
                <item.icon className="w-5 h-5" />
                {isOpen && <span>{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          {isOpen && (
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
          )}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 relative transition-all">
              <div
                className={`absolute top-[2px] left-[2px] bg-white dark:bg-gray-300 w-5 h-5 rounded-full transition-transform ${
                  darkMode ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

    </div>
  )
}
