"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export default function VerifyPage() {
  const [verificationId, setVerificationId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<"success" | "failure" | null>(null)

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setVerificationResult(null)

    // Simulating blockchain verification process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demonstration, we'll randomly set success or failure
    const result = Math.random() > 0.5 ? "success" : "failure"
    setVerificationResult(result)
    setIsVerifying(false)
  }

  return (
    <div className="container max-w-2xl py-24">
      <Card>
        <CardHeader>
          <CardTitle>Verify Degree</CardTitle>
          <CardDescription>
            Enter the verification ID provided with the degree to instantly verify its authenticity on the blockchain.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verificationId">Verification ID</Label>
              <Input
                id="verificationId"
                placeholder="Enter the verification ID"
                value={verificationId}
                onChange={(e) => setVerificationId(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isVerifying}>
              {isVerifying ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify Degree"
              )}
            </Button>
          </form>

          {verificationResult && (
            <div className="mt-8 p-4 border rounded-lg">
              {verificationResult === "success" ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>
                    Degree verified successfully! This credential is authentic and recorded on the blockchain.
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <XCircle className="mr-2 h-5 w-5" />
                  <span>Verification failed. This credential could not be found or is not authentic.</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

