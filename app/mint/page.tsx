"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle } from "lucide-react"

export default function MintPage() {
  const [studentName, setStudentName] = useState("")
  const [degreeTitle, setDegreeTitle] = useState("")
  const [graduationDate, setGraduationDate] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [isMinting, setIsMinting] = useState(false)
  const [mintingComplete, setMintingComplete] = useState(false)

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsMinting(true)
    setMintingComplete(false)

    // Validate Solana wallet address (simple regex check)
    const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/
    if (!solanaAddressRegex.test(walletAddress)) {
      alert("Invalid Wallet Address. Please enter a valid Solana wallet address.")
      setIsMinting(false)
      return
    }

    // Simulating blockchain minting process
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsMinting(false)
    setMintingComplete(true)
    alert(`NFT Diploma Minted Successfully. The diploma has been minted and sent to ${walletAddress}`)
  }

  return (
    <div className="container max-w-2xl py-24">
      <Card>
        <CardHeader>
          <CardTitle>Mint NFT Diploma</CardTitle>
          <CardDescription>
            Create a blockchain-verified NFT diploma for a graduating student and send it to their wallet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleMint} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name</Label>
              <Input id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="degreeTitle">Degree Title</Label>
              <Input id="degreeTitle" value={degreeTitle} onChange={(e) => setDegreeTitle(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="graduationDate">Graduation Date</Label>
              <Input
                id="graduationDate"
                type="date"
                value={graduationDate}
                onChange={(e) => setGraduationDate(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletAddress">Student's Solana Wallet Address</Label>
              <Input
                id="walletAddress"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter Solana wallet address"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isMinting || mintingComplete}>
              {isMinting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Minting...
                </>
              ) : mintingComplete ? (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Minting Complete
                </>
              ) : (
                "Mint NFT Diploma"
              )}
            </Button>
          </form>

          {mintingComplete && (
            <div className="mt-8 p-4 border rounded-lg bg-green-50 text-green-700">
              <p className="font-semibold">NFT Diploma successfully minted and sent!</p>
              <p className="mt-2">
                The digital credential has been created on the blockchain and transferred to the student's wallet.
              </p>
              <p className="mt-2">
                <strong>Wallet Address:</strong> {walletAddress}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}