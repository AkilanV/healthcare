import { useState } from "react"
import { Search, Bell, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarPicker } from "@/components/ui/calendar"
import { format } from "date-fns"

export function Header() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full bg-gray-50 border border-gray-200 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>{date ? format(date, "dd MMM yyyy") : "Pick a date"}</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="p-2 w-auto bg-white shadow-md rounded-md">
              <CalendarPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-3 px-2 py-1 hover:bg-gray-100 rounded-lg"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/leerob.png" alt="User" />
                  <AvatarFallback>ZO</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-800">Zuri Okeke</span>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
