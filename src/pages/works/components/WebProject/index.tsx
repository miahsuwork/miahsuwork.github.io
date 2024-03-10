import { SEMINAR_LIST, WEB_LIST } from '@/constants/projectWeb';
import { imgMouseAni } from '@/utils/helpers/animationHelper';
import { formatDate } from '@/utils/helpers/common';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WebProject = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [webs, setWebs] = useState(WEB_LIST);

  useGSAP(
    (context, contextSafe) => {
      if (!contextSafe) return;
      const items: HTMLDivElement[] = gsap.utils.toArray('.web-item__inner');

      items.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: 'restart none none none',
          },
          opacity: 1,
          duration: 1,
          translateY: 0,
        });
      });

      const imgs: HTMLDivElement[] = gsap.utils.toArray('.worked-img');
      const imgAni = new imgMouseAni(false);
      const onMouseEnter = contextSafe(imgAni.onMouseEnter);
      const onMouseLeave = contextSafe(imgAni.onMouseLeave);
      const onMouseMove = contextSafe(imgAni.onMouseMove);

      imgs.forEach((img) => {
        imgAni.setShadow(img);
        img.addEventListener('mouseenter', onMouseEnter);
        img.addEventListener('mouseleave', onMouseLeave);
        img.addEventListener('mousemove', onMouseMove);
      });

      return () => {
        imgs.forEach((img) => {
          img.removeEventListener('mouseenter', onMouseEnter);
          img.removeEventListener('mouseleave', onMouseLeave);
          img.removeEventListener('mousemove', onMouseMove);
        });
      };
    },
    { scope: listRef }
  );

  useEffect(() => {
    setWebs(
      WEB_LIST.sort((a, b) => {
        return new Date(b.endTime).getTime() - new Date(a.endTime).getTime();
      })
    );
  }, []);
  return (
    <div className='layout' ref={listRef}>
      <div className='md:mt-[6vw] flex flex-wrap justify-between'>
        {webs.map((item, index) => (
          <div
            className={clsx(
              'pt-[60px] md:pt-[100px] web-item md:w-[45%]',
              index % 2 === 0 && 'md:translate-y-[-12vw]'
            )}
            key={index}
          >
            <div className='opacity-0 web-item__inner translate-y-8'>
              <div className='worked-img overflow-hidden rounded-lg cursor-pointer'>
                {item.url ? (
                  <a href={item.url} target='_blank'>
                    <div>
                      <Image src={item.src} alt={item.title} />
                    </div>
                  </a>
                ) : (
                  <Image src={item.src} alt={item.title} />
                )}
              </div>
              <div className='mt-8'>
                <div className='flex justify-between flex-wrap'>
                  <div>{item.title}</div>
                  <div>
                    {formatDate(item.startTime)} - {formatDate(item.endTime)}
                  </div>
                </div>
                <div className='flex flex-wrap mt-3'>
                  {item.tags.map((tag, index) => {
                    return (
                      <div
                        className={clsx(
                          'border border-gray-500 py-1 px-2 mx-1 text-xs rounded-xl',
                          index === 0 && 'ml-0'
                        )}
                        key={tag}
                      >
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:flex lg:flex-wrap mb-[100px] mt-[100px] lg:mt-0'>
        <div className='mb-6 lg:px-6'>
          <div className='mb-3'>Seminar/ Webinar</div>
          <div className='flex flex-wrap'>
            {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'].map(
              (tag, index) => {
                return (
                  <span
                    className={clsx(
                      'border border-gray-500 py-1 px-2 m-1 text-xs rounded-xl',
                      index === 0 && 'ml-0'
                    )}
                    key={tag}
                  >
                    {tag}
                  </span>
                );
              }
            )}
          </div>
          <div className='mt-3'>
            單頁式活動型網站，在有限的時間內完成不同型式與特色的網站。
          </div>
        </div>
        <div className='flex-1 flex justify-center px-6'>
          <Swiper
            effect={'cards'}
            grabCursor
            modules={[EffectCards]}
            className='seminar'
            initialSlide={1}
          >
            {SEMINAR_LIST.map((item, index) => (
              <SwiperSlide className='seminar__item' key={index}>
                <a href={item.url} target='_blank'>
                  <div className='flex h-full overflow-hidden'>
                    <Image src={item.src} alt='seminar' />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default WebProject;
