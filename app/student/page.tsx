"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Download, Share2 } from "lucide-react"

interface Credential {
  id: string
  degreeTitle: string
  university: string
  dateIssued: string
}

export default function StudentPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [credentials, setCredentials] = useState<Credential[]>([])

  // Simulating fetching credentials from the blockchain
  useState(() => {
    setTimeout(() => {
      setCredentials([
        {
          id: "1",
          degreeTitle: "Bachelor of Science in Computer Science",
          university: "Tech University",
          dateIssued: "2023-05-15",
        },
        {
          id: "2",
          degreeTitle: "Master of Business Administration",
          university: "Business School",
          dateIssued: "2025-06-30",
        },
      ])
      setIsLoading(false)
    }, 2000)
  })

  return (
    <div className="container max-w-4xl py-24">
      <Card>
        <CardHeader>
          <CardTitle>My Digital Credentials</CardTitle>
          <CardDescription>View and manage your blockchain-verified academic credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <div className="space-y-6">
              {credentials.map((credential) => (
                <Card key={credential.id}>
                  <CardContent className="flex justify-between items-center p-6">
                    <div>
                      <h3 className="font-semibold text-lg">{credential.degreeTitle}</h3>
                      <p className="text-muted-foreground">{credential.university}</p>
                      <p className="text-sm text-muted-foreground">Issued: {credential.dateIssued}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">Verified</Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

