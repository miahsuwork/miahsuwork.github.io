import AppLayout from '@/components/AppLayout';
import '@/styles/main.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}