import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import SlideContact from './SlideContact';

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function AppLayout({ children, ...props }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      <SlideContact />
    </div>
  );
}
