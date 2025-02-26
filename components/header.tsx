"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SignUpModal } from "@/components/sign-up-modal"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="border-b border-border fixed w-full bg-background z-10">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-oc-blue">
          EduChain
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-dark-text hover:text-oc-blue transition-colors">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-dark-text hover:text-oc-blue transition-colors">
            How it Works
          </Link>
          <Link href="/verify" className="text-dark-text hover:text-oc-blue transition-colors">
            Verify Degree
          </Link>
          <Link href="/mint" className="text-dark-text hover:text-oc-blue transition-colors">
            Mint Diploma
          </Link>
          <Link href="/student" className="text-dark-text hover:text-oc-blue transition-colors">
            Student Portal
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Log In</Button>
          <Button onClick={() => setIsModalOpen(true)}>Get Started</Button>
        </div>
      </div>
      <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}

