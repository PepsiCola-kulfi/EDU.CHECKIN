"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, CheckCircle, GraduationCap, UserCircle } from "lucide-react"
import { SignUpModal } from "@/components/sign-up-modal"
import Link from "next/link"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-neutral-fill">
        <div className="container pt-16">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-5xl font-bold text-dark-text leading-tight">
              Instant Degree Verification with Blockchain Technology
            </h1>
            <p className="text-xl text-muted-foreground">
              Eliminate degree fraud with NFT diplomas on Solana. Fast, secure, and cost-effective verification for
              universities and employers.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Start Verifying
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduChain?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-oc-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Immutable</h3>
                <p className="text-muted-foreground">
                  Blockchain technology ensures credentials cannot be tampered with or forged.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-oc-green mb-4" />
                <h3 className="text-xl font-bold mb-2">Instant Verification</h3>
                <p className="text-muted-foreground">Verify academic credentials in seconds, not days or weeks.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-oc-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground">
                  Solana's near-zero cost makes verification practical and accessible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-neutral-fill">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-oc-blue text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Universities Mint NFT Diplomas</h3>
                  <p className="text-muted-foreground">
                    Educational institutions create unique NFT diplomas for graduates on the Solana blockchain.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-oc-blue text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Graduates Receive Credentials</h3>
                  <p className="text-muted-foreground">
                    Students get their digital credentials in their blockchain wallet.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-oc-blue text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2">Instant Employer Verification</h3>
                  <p className="text-muted-foreground">
                    Employers can instantly verify credentials through our platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="aspect-video bg-neutral-fill rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Ready to Transform Education Verification?</h2>
            <p className="text-xl text-muted-foreground">
              Join universities and students worldwide in adopting blockchain-based credentials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-oc-blue hover:bg-oc-blue/90" asChild>
                <Link href="/verify">
                  Verify a Degree
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mint">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Mint NFT Diploma
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/student">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Student Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

