import React from 'react';
import Hero from '@/components/Home/Hero';
import QueEs from '@/components/Home/queEs';
import TimeLine from '@/components/Home/comoFunciona';
import Platform from '@/components/Home/platform';
import ModeloExito from '@/components/Home/modeloExito';
import Ganancias from '@/components/Home/ganancias';
import Seguridad from '@/components/Home/seguridad';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Orix',
};

export default function Home() {
    return (
        <main>
            <Hero />
            <QueEs />
            <TimeLine />
            <Platform />
            <ModeloExito />
            <Ganancias />
            <Seguridad />

            <SpeedInsights />
            <Analytics />
        </main>
    );
}
