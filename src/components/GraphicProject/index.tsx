import GRAPHIC_LIST from '@/constants/projectGraphic';
import { Graphic } from '@/models/graph';
import { formatDate } from '@/utils/helpers/common';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useState } from 'react';

const GraphicProject = () => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const [graphics] = useState<Graphic[]>(() =>
    GRAPHIC_LIST.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  useGSAP(
    () => {
      const imgs: HTMLDivElement[] = gsap.utils.toArray('.masonry-img');

      imgs.forEach((img) => {
        gsap.to(img, {
          opacity: 1,
          duration: 1.5,
        });
      });
    },
    { scope: listRef }
  );

  return (
    <div className='layout' ref={listRef}>
      <div className='graphic-grid'>
        {graphics.map((item, index) => (
          <div className='masonry-img' key={index}>
            <div className='graphic-grid__item-info'>
              <div>{item.title}</div>
              <div>{formatDate(item.date)}</div>
            </div>
            <div className='graphic-grid__item-body'>
              {item.url ? (
                <a href={item.url} target='_blank'>
                  <div className='graphic-grid__item-link'>
                    <Image
                      className='graphic-grid__item-img'
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
