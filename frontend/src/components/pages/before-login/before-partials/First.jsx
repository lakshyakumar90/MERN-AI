import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[90dvh] px-5">
        <h1 className="font-[poppins] text-[5rem] text-center leading-none ">
          Code Together, Smarter – Powered by AI
        </h1>
        <h2 className="text-lg w-[60%] text-center py-8 font-[poppins]">
          Join the ultimate platform for real-time collaboration, AI-driven
          coding assistance, and seamless web-based development environments.
        </h2>

        <section className="">
          <Button variant="default" className="w-48 h-10 text-lg bg-[#774BE5] hover:bg-[#774BE5]/90">
            <Link to="/register">Get Started</Link>
          </Button>
        </section>
      </section>
  )
}

export default First