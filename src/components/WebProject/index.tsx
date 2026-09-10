import { SEMINAR_LIST, WEB_LIST } from '@/constants/projectWeb';
import { imgMouseAni } from '@/utils/helpers/animationHelper';
import { formatDate } from '@/utils/helpers/common';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WebProject = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [webs] = useState(() =>
    WEB_LIST.sort(
      (a, b) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
    )
  );

  useGSAP(
    (context, contextSafe) => {
      if (!contextSafe) return;
      const items: HTMLDivElement[] = gsap.utils.toArray('.web-item__inner');

      items.forEach((item) => {
        gsap.to(item, {
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

  return (
    <div className='layout' ref={listRef}>
      <div className='web-list'>
        {webs.map((item, index) => (
          <div
            className={clsx('web-item', index % 2 === 0 && 'web-item--offset')}
            key={index}
          >
            <div className='web-item__inner'>
              <div className='worked-img'>
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
              <div className='web-item__meta'>
                <div className='web-item__meta-row'>
                  <div>{item.title}</div>
                  <div>
                    {formatDate(item.startTime)} - {formatDate(item.endTime)}
                  </div>
                </div>
                <div className='web-item__tags'>
                  {item.tags.map((tag, index) => {
                    return (
                      <div
                        className={clsx('tag', index === 0 && 'tag--first')}
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
      <div className='seminar-section'>
        <div className='seminar-section__aside'>
          <div className='seminar-section__aside-title'>Seminar/ Webinar</div>
          <div className='seminar-section__tags'>
            {['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery'].map(
              (tag, index) => {
                return (
                  <span
                    className={clsx('tag', index === 0 && 'tag--first')}
                    key={tag}
                  >
                    {tag}
                  </span>
                );
              }
            )}
          </div>
          <div className='seminar-section__desc'>
            單頁式活動型網站，在有限的時間內完成不同型式與特色的網站。
          </div>
        </div>
        <div className='seminar-section__slider'>
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
                  <div className='seminar__link'>
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
