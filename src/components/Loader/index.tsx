import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface IProps {
  hide?: boolean;
}

export const Loader = ({ hide }: IProps) => {
  // 當 hide 為 true 時，loader
  const loaderRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: loaderRef });
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    const hideLoader = contextSafe(() => {
      gsap
        .to('.loader', {
          opacity: 0,
          duration: 0.5,
        })
        .then(() => {
          setIsHide(true);
        });
    });

    const showLoader = contextSafe(() => {
      setIsHide(false);
      gsap.to('.loader', {
        opacity: 1,
        duration: 0.5,
      });
    });

    hide ? hideLoader() : showLoader();
  }, [contextSafe, hide]);

  return (
    <div ref={loaderRef}>
      <div className={`loader ${isHide ? 'hidden' : ''}`}>
        <div className='preload-inner'>
          <div className='spinner spinner04'>
            <div className='cube1 rounded-sm'></div>
            <div className='cube2 rounded-sm'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
