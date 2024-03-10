import { PropsWithChildren, useEffect, useState } from 'react';

import { Loader } from '../Loader';
import Footer from './Footer';
import Header from './Header';
import SlideContact from './SlideContact';

export default function AppLayout({ children }: PropsWithChildren) {
  const [isInitSuccess, setIsInitSuccess] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setIsInitSuccess(true);
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Loader hide={isInitSuccess} />
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      <SlideContact />
    </div>
  );
}
