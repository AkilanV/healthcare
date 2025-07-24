import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Paperclip, Send } from "lucide-react"
import aiResponses from "../../data/aiResponse.json"

export function RightSidebar() {
  const [messages, setMessages] = useState([{ type: "ai", text: aiResponses.greetings[0] }])
  const [input, setInput] = useState("")

  const getAIResponse = (text: string) => {
    const lowerText = text.toLowerCase()

    if (lowerText.includes("hello") || lowerText.includes("hi")) {
      return aiResponses.greetings[Math.floor(Math.random() * aiResponses.greetings.length)]
    }
    if (lowerText.includes("appointment")) {
      return aiResponses.appointment
    }
    if (lowerText.includes("doctor") || lowerText.includes("doctors")) {
      return aiResponses.doctors.info
    }
    if (lowerText.includes("dr smith")) {
      return aiResponses.doctors["dr smith"]
    }
    if (lowerText.includes("thandiwe")) {
      return aiResponses.doctors["dr thandiwe ncube"]
    }
    if (lowerText.includes("amina")) {
      return aiResponses.doctors["dr amina diallo"]
    }

    return aiResponses.default
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMsg = input.trim()
    setMessages((prev) => [...prev, { type: "user", text: userMsg }])
    setInput("")

    setTimeout(() => {
      const aiReply = getAIResponse(userMsg)
      setMessages((prev) => [...prev, { type: "ai", text: aiReply }])
    }, 500)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const fileName = e.target.files[0].name

      // Show message for image upload
      setMessages((prev) => [
        ...prev,
        { type: "user", text: `Uploaded image: ${fileName}` },
      ])

      // AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "ai", text: "I am processing this image... 🔍" },
        ])
      }, 500)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="flex flex-col h-full min-h-[850px] bg-green-50 dark:bg-green-100">
        <CardHeader>
          <CardTitle className="text-base dark:text-black">AI Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto space-y-4 text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === "user" ? "justify-end" : "items-start gap-2"}`}
            >
              {msg.type === "ai" && (
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/ai-bot.svg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.type === "user"
                    ? "bg-blue-100 dark:bg-blue-900 text-gray-900 dark:text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                }`}
              >
                {msg.text}
              </div>

            </div>
          ))}
        </CardContent>

        {/* Input */}
        <div className="p-3 border-t flex items-center gap-2">
          <Input
            placeholder="Ask me anything..."
            className="text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* Image Upload Button */}
          <label className="cursor-pointer">
            <Paperclip className="w-4 h-4" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>

          <Button size="sm" variant="ghost" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
