import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const boxes: HTMLDivElement[] = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 300,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <div ref={main}>
      <section className='section flex-center column blue'>
        <h1>Basic ScrollTrigger with React</h1>
        <h2>Scroll down to see the magic happen!!</h2>
      </section>
      <div className='section flex-center column'>
        <h1>This boxes animates as you scroll!</h1>
        <div className='box'>box</div>
        <div className='box'>box</div>
        <div className='box'>box</div>
      </div>
      <section className='section flex-center orange column'>
        <h1>The End!</h1>
        <h2>
          For more information visit the&nbsp;
          <a
            href='https://gsap.com/docs/v3/Plugins/ScrollTrigger'
            target='_blank'
            rel='noreferrer'
          >
            Docs
          </a>
        </h2>
      </section>
    </div>
  );
}
