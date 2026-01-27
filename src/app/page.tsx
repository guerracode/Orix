import React from 'react'
import Hero from '@/components/Home/Hero'
import Que_es from '@/components/Home/que_es'
import TimeLine from '@/components/Home/comoFunciona'
import Platform from '@/components/Home/platform'
import Portfolio from '@/components/Home/portfolio'
import Upgrade from '@/components/Home/upgrade'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'CrypGo',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Que_es />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
    </main>
  )
}
