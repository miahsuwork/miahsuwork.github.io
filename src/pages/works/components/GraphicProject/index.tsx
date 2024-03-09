import GRAPHIC_LIST from '@/constants/projectGraphic';
import { Graphic } from '@/models/graph';
import { formatDate } from '@/utils/helpers/common';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const GraphicProject = () => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [graphics, setGraphics] = useState<Graphic[]>(GRAPHIC_LIST);

  useGSAP(
    () => {
      const imgs: HTMLDivElement[] = gsap.utils.toArray('.masonry-img');
      imgs.forEach((img) => {
        gsap.to(img, {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: img,
            toggleActions: 'restart none none none',
          },
        });
      });

      // ScrollTrigger.batch('.masonry-img', {
      //   interval: 0.1, // time window (in seconds) for batching to occur.
      //   batchMax: 4, // maximum batch size (targets). Can be function-based for dynamic values
      //   onEnter: (batch) =>
      //     gsap.to(batch, {
      //       duration: 0.8,
      //       opacity: 1,
      //       yPercent: 0,
      //       ease: 'back.out(1)',
      //     }),
      //   onLeave: (batch) =>
      //     gsap.to(batch, {
      //       opacity: 0,
      //       yPercent: -10,
      //     }),
      //   onEnterBack: (batch) =>
      //     gsap.to(batch, {
      //       duration: 1,
      //       opacity: 1,
      //       yPercent: 0,
      //       ease: 'back.out(1)',
      //     }),
      //   onLeaveBack: (batch) =>
      //     gsap.to(batch, {
      //       opacity: 0,
      //       yPercent: 10,
      //     }),
      //   // you can also define most normal ScrollTrigger values like start, end, etc.
      //   start: 'top bottom-=10%',
      //   end: 'bottom top',
      // });

      // gsap.from('.masonry-img', {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: listRef.current,
      //     toggleActions: "play none none reverse"
      //   }
      // });
    },
    { scope: listRef }
  );

  useEffect(() => {
    // setGraphics(
    //   GRAPHIC_LIST.sort((a, b) => {
    //     return new Date(b.date).getTime() - new Date(a.date).getTime();
    //   })
    // );
  }, []);
  return (
    <div className='layout' ref={listRef}>
      <div className='columns-1 gap-5 md:columns-2 lg:columns-3 [&>.masonry-img:not(:first-child)]:mt-8'>
        {graphics.map((item, index) => (
          <div
            className='masonry-img opacity-0 flex justify-center flex-wrap border border-gray-500 p-4 relative'
            key={index}
          >
            <div className='w-full py-2 px-4 flex justify-between absolute'>
              <div>{item.title}</div>
              <div>{formatDate(item.date)}</div>
            </div>
            <div className='pt-10'>
              {item.url ? (
                <a href={item.url} target='_blank'>
                  <div className='overflow-hidden cursor-pointer'>
                    <Image
                      className='transition duration-500 ease-out hover:scale-110'
                      src={item.src}
                      alt={item.title}
                    />
                  </div>
                </a>
              ) : (
                <Image src={item.src} alt={item.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicProject;
