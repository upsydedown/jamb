"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function NewsletterForm() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Newsletter</h3>
      <form className="space-y-4">
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" className="flex-1" />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="privacy" />
          <Label htmlFor="privacy" className="text-xs text-gray-600">
            I agree to our Privacy Policy
          </Label>
        </div>
      </form>
    </div>
  )
}

