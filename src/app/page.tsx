import React from 'react'
import Hero from '@/components/Home/Hero'
import Que_es from '@/components/Home/que_es'
import TimeLine from '@/components/Home/comoFunciona'
import Platform from '@/components/Home/platform'
import ModeloExito from '@/components/Home/modeloExito'
import Ganancias from '@/components/Home/ganancias'
import Perks from '@/components/Home/perks'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Orix',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Que_es />
      <TimeLine />
      <Platform />
      <ModeloExito />
      <Ganancias />
      <Perks />
    </main>
  )
}
