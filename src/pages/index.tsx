import { RectBackground } from '@/components/RectBackground';
import { WEB_LIST } from '@/constants/projectWeb';
import {
  imgMouseAni,
  rectPosition,
  strengthPosition,
} from '@/utils/helpers/animationHelper';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();
  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    width > 1200 ? setIsVertical(true) : setIsVertical(false);
  }, [width]);

  const { contextSafe } = useGSAP(
    (context, contextSafe) => {
      if (!contextSafe) return;

      const slides: HTMLDivElement[] = gsap.utils.toArray(
        '.project-slide__img'
      );

      const onMouseMoveContainer = contextSafe((e: MouseEvent) => {
        const moveRate = 5;
        const { rectPosX, rectPosY, rectPosZ } = rectPosition(
          e.target as HTMLElement,
          width,
          height
        );
        const { strengthX, strengthY } = strengthPosition(
          e,
          rectPosX,
          rectPosY,
          width,
          height
        );

        gsap.to('.project-slide__container', {
          x: moveRate * strengthX * rectPosZ,
          y: moveRate * strengthY * rectPosZ,
        });

        const rects: HTMLElement[] = gsap.utils.toArray('.rect');

        rects.forEach((element) => {
          const moveRate = 2;
          const { rectPosX, rectPosY, rectPosZ } = rectPosition(
            element,
            width,
            height
          );
          const { strengthX, strengthY } = strengthPosition(
            e,
            rectPosX,
            rectPosY,
            width,
            height
          );

          gsap.to(element, {
            x: moveRate * strengthX * rectPosZ,
            y: moveRate * strengthY * rectPosZ,
          });
        });
      });

      const imgAni = new imgMouseAni();
      const onMouseEnter = contextSafe(imgAni.onMouseEnter);
      const onMouseLeave = contextSafe(imgAni.onMouseLeave);
      const onMouseMove = contextSafe(imgAni.onMouseMove);

      const container = swiperRef.current as HTMLDivElement;
      container.addEventListener('mousemove', onMouseMoveContainer);
      slides.forEach((slide) => {
        imgAni.setShadow(slide);
        slide.addEventListener('mouseenter', onMouseEnter);
        slide.addEventListener('mouseleave', onMouseLeave);
        slide.addEventListener('mousemove', onMouseMove);
      });

      return () => {
        container.removeEventListener('mousemove', onMouseMoveContainer);
        slides.forEach((slide) => {
          slide.removeEventListener('mouseenter', onMouseEnter);
          slide.removeEventListener('mouseleave', onMouseLeave);
          slide.removeEventListener('mousemove', onMouseMove);
        });
      };
    },
    {
      scope: swiperRef,
    }
  );

  const handleSlideStart = contextSafe(() => {
    gsap.fromTo(
      '.rect',
      {
        width: 100,
        height: 100,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
      },
      {
        width: 0,
        height: 0,
        opacity: 0,
      }
    );
  });

  const handleSlideEnd = contextSafe(() => {
    gsap.fromTo(
      '.rect',
      {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power4.out',
      }
    );
  });

  return (
    <div className='project-slide'>
      <div className='main-bg-animation'></div>
      <div
        className={`project-slide__slide-section ${
          isVertical ? '' : 'project-slide__slide-section--horizontal'
        }`}
        ref={swiperRef}
      >
        <RectBackground />
        <div
          className={`project-slide__container ${
            isVertical
              ? 'project-slide__container--vertical'
              : 'project-slide__container--horizontal'
          }`}
        >
          <Swiper
            autoHeight
            centeredSlides
            className='project-slide__swiper'
            loop
            spaceBetween={30}
            mousewheel={{
              thresholdTime: 300,
            }}
            modules={[Autoplay, Mousewheel]}
            slidesPerView={'auto'}
            autoplay={{
              delay: 10000,
            }}
            direction={isVertical ? 'vertical' : 'horizontal'}
            breakpoints={{
              768: {
                spaceBetween: 40,
              },
              1024: {
                spaceBetween: 50,
              },
              1400: {
                spaceBetween: 100,
              },
            }}
            onSlideChangeTransitionStart={handleSlideStart}
            onSlideChangeTransitionEnd={handleSlideEnd}
          >
            {WEB_LIST.filter((item) => item.isShowLanding).map(
              (item, index) => {
                return (
                  <SwiperSlide className='project-slide__item' key={index}>
                    <div className='project-slide__info project-slide__info'>
                      <div className='project-slide__title'>{item.title}</div>
                      <div className='project-slide__desc'>
                        {item.slideDesc}
                      </div>
                    </div>
                    <Link
                      href={item.url || ''}
                      target='_blank'
                      className='project-slide__img'
                    >
                      <Image src={item.src} alt={item.title} priority />
                    </Link>
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
