import gsap from 'gsap/dist/gsap';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'react-use';

export default function Contact() {
  const main = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section className='section flex-center column'>
        <h1>Basic ScrollTrigger with React</h1>
        <h2>Scroll down to see the magic happen!!</h2>
      </section>
      <div className='section flex-center column' ref={main}>
        <div className='box'>box</div>
        <div className='box'>box</div>
        <div className='box'>box</div>
      </div>
      <section className='section'></section>
    </div>
  );
}
