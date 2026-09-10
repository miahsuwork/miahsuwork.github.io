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
    <div className='app-layout'>
      <Loader hide={isInitSuccess} />
      <Header />
      <main className='app-layout__main'>{children}</main>
      <Footer />
      <SlideContact />
    </div>
  );
}
