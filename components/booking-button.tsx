"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingModal } from "./booking-modal"

interface BookingButtonProps {
  tourName: string
  tourPrice: string
  className?: string
}

export function BookingButton({ tourName, tourPrice, className = "" }: BookingButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full mt-6 ${className}`}
      >
        Book This Adventure
      </Button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourName={tourName}
        tourPrice={tourPrice}
      />
    </>
  )
}
