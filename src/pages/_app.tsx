import AppLayout from '@/components/AppLayout';
import '@/styles/main.css';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import type { AppProps } from 'next/app';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
