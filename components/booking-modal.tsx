"use client"

import type React from "react"

import { useState } from "react"
import { X, Send, Calendar, Users, Phone, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  tourName: string
  tourPrice: string
}

export function BookingModal({ isOpen, onClose, tourName, tourPrice }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "2",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format message for Telegram
    const telegramMessage = `🎯 NEW BOOKING INQUIRY - ${tourName}
    
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
👥 People: ${formData.people}
📅 Preferred Date: ${formData.date}
💰 Tour Price: ${tourPrice}

💬 Message: ${formData.message}

🔗 Tour: ${tourName}`

    // Encode message for URL
    const encodedMessage = encodeURIComponent(telegramMessage)

    // Replace with your actual Telegram bot token and chat ID
    const telegramBotToken = "YOUR_BOT_TOKEN"
    const telegramChatId = "YOUR_CHAT_ID"

    // For demo purposes, we'll open Telegram Web with pre-filled message
    // In production, you'd send this to your Telegram bot API
    const telegramUrl = `https://t.me/share/url?url=&text=${encodedMessage}`

    window.open(telegramUrl, "_blank")

    // Close modal and show success message
    onClose()
    alert("Booking inquiry sent! We'll contact you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Adventure</h2>
              <p className="text-sm text-gray-600">{tourName}</p>
              <p className="text-lg font-semibold text-orange-600">{tourPrice}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                required
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="people" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  People
                </Label>
                <Select value={formData.people} onValueChange={(value) => handleInputChange("people", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Person" : "People"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Special Requirements</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Any special requirements or questions..."
                className="mt-1 min-h-[80px]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 rounded-full border-gray-300 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your inquiry will be sent to our team via Telegram for quick response
          </p>
        </div>
      </div>
    </div>
  )
}
